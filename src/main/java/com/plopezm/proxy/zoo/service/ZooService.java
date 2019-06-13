package com.plopezm.proxy.zoo.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plopezm.proxy.proxy.entity.ZKBrokerConfig;
import com.plopezm.proxy.zoo.control.ZKConnection;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooDefs;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.data.Stat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ZooService {
    private static Logger LOG = LoggerFactory.getLogger(ZooService.class);
    
    private static ZooKeeper zkeeper;
    private static ZKConnection zkConnection;
    private String bootstrapAddress;
    private String brokersPath;
  
    public ZooService(@Value("${zookeeper.servers}") final String servers,
      @Value("${zookeeper.brokers.path}") String brokersIdsPath, @Value("${app.startup.delay:0}") Integer delay) throws IOException, InterruptedException, KeeperException {
      LOG.info("Loading cluster information, waiting for kafka initialization... {} millis", delay);
      Thread.sleep(delay);
      initialize(servers);
      this.brokersPath = brokersIdsPath;
      this.bootstrapAddress = this.buildBootstrapAddress();
    }
 
    private void initialize(final String servers) throws IOException, InterruptedException {
        zkConnection = new ZKConnection();
        zkeeper = zkConnection.connect(servers);
    }
 
    public void closeConnection() throws InterruptedException {
        zkConnection.close();
    }
 
    public void create(String path, byte[] data) 
      throws KeeperException, 
      InterruptedException {
  
        zkeeper.create(
          path, 
          data, 
          ZooDefs.Ids.OPEN_ACL_UNSAFE, 
          CreateMode.PERSISTENT);
    }

    public void delete(String path) throws InterruptedException, KeeperException {
       Stat stat;
       if ((stat = zkeeper.exists(path, false)) != null) {
          zkeeper.delete(path, stat.getVersion());
       }    
    }

    public void recursiveDelete(String path) throws InterruptedException, KeeperException {
      Stat stat = zkeeper.exists(path, false);
       if (stat == null) {
          return;
       }
      int version = stat.getVersion();

      List<String> childs = this.getZNodeChildrens(path, false);
      if (childs == null || childs.size() == 0) {
        zkeeper.delete(path, version);
        return;
      }
      for (String childNode : childs) {
        this.recursiveDelete(path+"/"+childNode);
      }      
      zkeeper.delete(path, version);
    }
 
    public String getZNodeData(final String path, boolean watchFlag) 
      throws KeeperException, 
      InterruptedException, UnsupportedEncodingException {
  
        byte[] b = null;
        b = zkeeper.getData(path, null, null);
        if (b==null)
        	return null;
        return new String(b, "UTF-8");
    }
    
    public List<String> getZNodeChildrens(final String path, boolean watchFlag) 
    		throws KeeperException, InterruptedException {
        return zkeeper.getChildren(path, null);
    }
 
    public void update(final String path, final byte[] data) throws KeeperException, 
      InterruptedException {
        int version = zkeeper.exists(path, false).getVersion();
        zkeeper.setData(path, data, version);
    }

    private static boolean hostAvailabilityCheck(String url) { 
        String[] urlAndPort = url.split(":");
        String hostname = urlAndPort[0];
        int port = Integer.parseInt(urlAndPort[1]);
        try (Socket s = new Socket(hostname, port)) {
            return true;
        } catch (IOException ex) {
            /* ignore */
        }
        return false;
    }
  
    public List<ZKBrokerConfig> getBrokerConfigs() 
        throws KeeperException, InterruptedException, JsonParseException, JsonMappingException, IOException {
      List<String> brokerIds = this.getZNodeChildrens(this.brokersPath, false);
      List<ZKBrokerConfig> configs = new ArrayList<>(brokerIds.size());
      for (String brokerId : brokerIds) {
        String data = this.getZNodeData(this.brokersPath+"/"+brokerId, false);
        configs.add(new ObjectMapper().readValue(data, ZKBrokerConfig.class));
      }
      return configs;
    }
    
    public String buildBootstrapAddress() 
        throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
      List<ZKBrokerConfig> configs = this.getBrokerConfigs();
      String bootstrapAddress = "";
      for (ZKBrokerConfig config : configs) {
        for (String addr : config.getEndpoints()) {
          String kafkaUrl = addr.split("://")[1];
          if (hostAvailabilityCheck(kafkaUrl)) {
            bootstrapAddress += ","+addr.split("://")[1];
          }
        }
      }
      if (bootstrapAddress.length() > 0)
        return bootstrapAddress.substring(1);
      return bootstrapAddress;
    }
    
    public String getBootstrapAddress()  {
      return this.bootstrapAddress;
    }
}

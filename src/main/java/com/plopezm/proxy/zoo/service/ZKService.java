package com.plopezm.proxy.zoo.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooDefs;
import org.apache.zookeeper.ZooKeeper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.plopezm.proxy.zoo.control.ZKConnection;

@Service
public class ZKService {
	private static ZooKeeper zkeeper;
    private static ZKConnection zkConnection;
 
    public ZKService(@Value("${zookeeper.servers}") final String servers) throws IOException, InterruptedException {
        initialize(servers);
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
        int version = zkeeper.exists(path, true).getVersion();
        zkeeper.setData(path, data, version);
    }
}

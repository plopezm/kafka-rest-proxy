package com.plopezm.proxy.proxy.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plopezm.proxy.proxy.entity.ZKBrokerConfig;
import com.plopezm.proxy.zoo.service.ZKService;

@Service
public class ProxyService {
	
	private static final String BROKER_IDS_PATH = "/brokers/ids";

	private ZKService zkService;
	private String bootstrapAddress;
	
	public ProxyService(@Autowired final ZKService zkService) 
			throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
		this.zkService = zkService;
		this.bootstrapAddress = this.buildBootstrapAddress();
	}

	public List<ZKBrokerConfig> getBrokerConfigs() 
			throws KeeperException, InterruptedException, JsonParseException, JsonMappingException, IOException {
		List<String> brokerIds = this.zkService.getZNodeChildrens(BROKER_IDS_PATH, false);
		List<ZKBrokerConfig> configs = new ArrayList<>(brokerIds.size());
		for (String brokerId : brokerIds) {
			String data = this.zkService.getZNodeData(BROKER_IDS_PATH+"/"+brokerId, false);
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
				bootstrapAddress += ","+addr.split("://")[1];
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

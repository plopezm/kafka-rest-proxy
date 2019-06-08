package com.plopezm.proxy.api.v1;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.common.PartitionInfo;
import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.plopezm.proxy.proxy.entity.ZKBrokerConfig;
import com.plopezm.proxy.proxy.service.ProxyService;

@RestController
@RequestMapping("/kafka")
public class BrokerController {
	
	private ProxyService proxyService;
	private ConsumerFactory<String, String> consumerFactory;
	
	public BrokerController(@Autowired final ProxyService proxyService,
			@Autowired final ConsumerFactory<String, String> consumerFactory) {
		this.proxyService = proxyService;
		this.consumerFactory = consumerFactory;
	}
	
	@GetMapping(path = "/addresses")
	public String getConnectionString() 
			throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
		return proxyService.getBootstrapAddress();
	}
	
	@GetMapping(path = "/cluster-info", produces = "application/json")
	public List<ZKBrokerConfig> getClusterInfo() 
			throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
		return proxyService.getBrokerConfigs();
	}
	
	@GetMapping(path = "/topics", produces = "application/json")
	public  Map<String, List<PartitionInfo>> getTopics() {
		try(final Consumer consumer = this.consumerFactory.createConsumer()) {
			return consumer.listTopics();
		}
	}

}

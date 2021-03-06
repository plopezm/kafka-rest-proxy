package com.plopezm.proxy.configuration;

import java.util.HashMap;
import java.util.Map;

import com.plopezm.proxy.zoo.service.ZooService;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaAdmin;

@Configuration
public class KafkaAdminConfig {
	
	private static Logger LOG = LoggerFactory.getLogger(KafkaAdminConfig.class);
	
	private ZooService zooService;
	
	public KafkaAdminConfig(@Autowired final ZooService configService) {
		this.zooService = configService;
	}
 
    @Bean
    public KafkaAdmin kafkaAdmin() {
    	LOG.info("Creating connection with Kafka in addresses {}", this.zooService.getBootstrapAddress());
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, this.zooService.getBootstrapAddress());
        return new KafkaAdmin(configs);
    }
}

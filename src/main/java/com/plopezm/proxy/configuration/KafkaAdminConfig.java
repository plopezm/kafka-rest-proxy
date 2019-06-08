package com.plopezm.proxy.configuration;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaAdmin;

import com.plopezm.proxy.proxy.service.ProxyService;

@Configuration
public class KafkaAdminConfig {
	
	private static Logger LOG = LoggerFactory.getLogger(KafkaAdminConfig.class);
	
	private ProxyService proxyService;
	
	public KafkaAdminConfig(@Autowired final ProxyService proxyService) {
		this.proxyService = proxyService;
	}
 
    @Bean
    public KafkaAdmin kafkaAdmin() {
    	LOG.info("Creating connection with Kafka in addresses {}", this.proxyService.getBootstrapAddress());
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, this.proxyService.getBootstrapAddress());
        return new KafkaAdmin(configs);
    }
}

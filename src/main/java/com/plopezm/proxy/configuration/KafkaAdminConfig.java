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

import com.plopezm.proxy.proxy.service.ConfigService;

@Configuration
public class KafkaAdminConfig {
	
	private static Logger LOG = LoggerFactory.getLogger(KafkaAdminConfig.class);
	
	private ConfigService configService;
	
	public KafkaAdminConfig(@Autowired final ConfigService configService) {
		this.configService = configService;
	}
 
    @Bean
    public KafkaAdmin kafkaAdmin() {
    	LOG.info("Creating connection with Kafka in addresses {}", this.configService.getBootstrapAddress());
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, this.configService.getBootstrapAddress());
        return new KafkaAdmin(configs);
    }
}

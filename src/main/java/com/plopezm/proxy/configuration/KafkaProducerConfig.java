package com.plopezm.proxy.configuration;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.plopezm.proxy.zoo.service.ZooService;

import org.springframework.kafka.support.serializer.JsonSerializer;


@Configuration
public class KafkaProducerConfig {
	
	private ZooService zooService;
	
	public KafkaProducerConfig(@Autowired final ZooService proxyService) {
		this.zooService = proxyService;
	}
	
	@Bean
    public ProducerFactory<String, Object> producerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(
          ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, 
          zooService.getBootstrapAddress());
        configProps.put(
          ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, 
          StringSerializer.class);
        configProps.put(
          ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, 
          JsonSerializer.class);
        
        return new DefaultKafkaProducerFactory<>(configProps);
    }
 
    @Bean
    public KafkaTemplate<String, Object> kafkaTemplate() 
    		throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
        return new KafkaTemplate<>(producerFactory());
    }
    
}

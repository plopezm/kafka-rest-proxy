package com.plopezm.proxy.configuration;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.plopezm.proxy.zoo.service.ZooService;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@EnableKafka
@Configuration
public class KafkaConsumerConfig {

	private ZooService zooService;
	
	public KafkaConsumerConfig(@Autowired final ZooService proxyService) {
		this.zooService = proxyService;
	}
	
	@Bean
  public ConsumerFactory<String, Object> consumerFactory() {
      Map<String, Object> props = new HashMap<>();
      props.put(
        ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, 
        zooService.getBootstrapAddress());
      props.put(
        ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, 
        StringDeserializer.class);
      props.put(
        ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, 
        StringDeserializer.class);
      return new DefaultKafkaConsumerFactory<>(props);
  }

  @Bean
  public ConcurrentKafkaListenerContainerFactory<String, String> 
    kafkaListenerContainerFactory() 
        throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
  
      ConcurrentKafkaListenerContainerFactory<String, String> factory
        = new ConcurrentKafkaListenerContainerFactory<>();
      factory.setConsumerFactory(consumerFactory());
      return factory;
  }
	
}

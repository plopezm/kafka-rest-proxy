package com.plopezm.proxy.proxy.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	private KafkaAdmin kafkaAdmin;
	
	public AdminService(@Autowired KafkaAdmin kafkaAdmin) {
		this.kafkaAdmin = kafkaAdmin;
	}
	
	public CreateTopicsResult createTopic(String topicName, int numPartitions, short replicationFactor) {
		List<NewTopic> topicsToCreate = new ArrayList<>();
    	NewTopic topic = new NewTopic(topicName, numPartitions, replicationFactor);
    	topicsToCreate.add(topic);
    	try(AdminClient adminClient = AdminClient.create(this.kafkaAdmin.getConfig())) {
        	return adminClient.createTopics(topicsToCreate);
    	}
	}
}

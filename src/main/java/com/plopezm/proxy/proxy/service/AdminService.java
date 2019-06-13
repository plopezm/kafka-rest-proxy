package com.plopezm.proxy.proxy.service;

import java.util.ArrayList;
import java.util.List;

import com.plopezm.proxy.zoo.service.ZooService;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	private KafkaAdmin kafkaAdmin;
	private ZooService zooService;
	private String topicsLocationPath;
	private String deleteTopicLocationPath;

	public AdminService(@Autowired KafkaAdmin kafkaAdmin, @Autowired ZooService zooService,
			@Value("${zookeeper.topics.location}") String topicsLocationPath,
			@Value("${zookeeper.topics.delete.location}") String deleteTopicLocationPath) {

		this.kafkaAdmin = kafkaAdmin;
		this.zooService = zooService;
		this.topicsLocationPath = topicsLocationPath;
		this.deleteTopicLocationPath = deleteTopicLocationPath;
	}

	public CreateTopicsResult createTopic(String topicName, int numPartitions, short replicationFactor) {
		List<NewTopic> topicsToCreate = new ArrayList<>();
		NewTopic topic = new NewTopic(topicName, numPartitions, replicationFactor);
		topicsToCreate.add(topic);
		try (AdminClient adminClient = AdminClient.create(this.kafkaAdmin.getConfig())) {
			return adminClient.createTopics(topicsToCreate);
		}
	}

	public void deleteTopic(String topic) throws InterruptedException, KeeperException {
		this.zooService.recursiveDelete(this.topicsLocationPath+"/"+topic);
		this.zooService.delete(this.deleteTopicLocationPath+"/"+topic);
	}
}

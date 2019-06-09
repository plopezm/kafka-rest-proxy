package com.plopezm.proxy.proxy.entity;

public class NewTopicRequest {
	
	private String topicName;
	private int partitions;
	private short replicas;
	
	public String getTopicName() {
		return topicName;
	}
	public int getPartitions() {
		return partitions;
	}
	public short getReplicas() {
		return replicas;
	}

	
}

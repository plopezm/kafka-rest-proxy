package com.plopezm.proxy.api.v1;

import java.time.Duration;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.PartitionInfo;
import org.apache.kafka.common.TopicPartition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.SendResult;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kafka")
public class BrokerController {
	
	private ConsumerFactory<String, Object> consumerFactory;
	private KafkaTemplate<String, Object> kafkaTemplate;
	
	public BrokerController(@Autowired final ConsumerFactory<String, Object> consumerFactory,
			@Autowired final KafkaTemplate<String, Object> kafkaTemplate) {
		this.consumerFactory = consumerFactory;
		this.kafkaTemplate = kafkaTemplate;
	}
	
	@GetMapping(path = "/topics", produces = "application/json")
	public Map<String, List<PartitionInfo>> getTopics(
		@RequestParam(value = "sst", required = false) Boolean showSystemTopics
	) {
		try(final Consumer<String, Object> consumer = this.consumerFactory.createConsumer()) {
			Map<String, List<PartitionInfo>> topics = consumer.listTopics();

			if (showSystemTopics != null && !showSystemTopics) {
				topics = topics.entrySet().stream().filter(topic -> !topic.getKey().startsWith("_"))
				.collect(Collectors.toMap(x -> x.getKey(), x -> x.getValue()));
			}

			return topics;
		}

	}
	
	@GetMapping(path = "/topics/{topicId}")
	public List<ConsumerRecord<String, Object>> readTopic(
		@PathVariable("topicId") final String topicId,
		@RequestParam(value = "offset", required = false) final Integer offset,
		@RequestParam(value = "max", required = false) final Integer max) {

		try(final Consumer<String, Object> consumer = this.consumerFactory.createConsumer()) {			
			Map<String, List<PartitionInfo>> topicListMap = consumer.listTopics();
	        List<ConsumerRecord<String, Object>> result = new LinkedList<>();
	        for (PartitionInfo partitionInfo : topicListMap.get(topicId)) {
	        	TopicPartition topicPartition = new TopicPartition(partitionInfo.topic(), partitionInfo.partition());
				consumer.assign(Arrays.asList(topicPartition));
				if (offset != null) {
					consumer.seek(topicPartition, offset);
				} else {
					consumer.seek(topicPartition, 0);
				}
		        while (true) {
					ConsumerRecords<String, Object> records = consumer.poll(Duration.ofSeconds(1));
		            if (records.isEmpty()) {
		                break;
		            }
		            for (ConsumerRecord<String, Object> record : records) {
		                result.add(record);
					}
					if (max != null && result.size() >= max) {
						break;
					}
		        }
	        }
	        return result;
		}
	}
	
	@PostMapping(path = "/topics/{topicId}/{key}")
	public SendResult<String, Object> writeTopic(@PathVariable("topicId") final String topicId,
			@PathVariable("key") final String key, @RequestBody Object data) 
			throws InterruptedException, ExecutionException {
		Message<Object> message = MessageBuilder
                .withPayload(data)
                .setHeader(KafkaHeaders.TOPIC, topicId)
                .setHeader(KafkaHeaders.MESSAGE_KEY, key)
                .build();
		return this.kafkaTemplate.send(message).get();
	}

}

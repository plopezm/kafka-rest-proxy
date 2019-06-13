package com.plopezm.proxy.api.v1;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.plopezm.proxy.proxy.entity.NewTopicRequest;
import com.plopezm.proxy.proxy.entity.ZKBrokerConfig;
import com.plopezm.proxy.proxy.service.AdminService;
import com.plopezm.proxy.zoo.service.ZooService;

import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

	private ZooService zooService;
	private AdminService adminService;

	public AdminController(@Autowired final ZooService zooService,
			@Autowired AdminService adminService) {
		this.zooService = zooService;
		this.adminService = adminService;
	}
	
	@GetMapping(path = "/addresses")
	public String getConnectionString() 
			throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
		return zooService.getBootstrapAddress();
	}
	
	@GetMapping(path = "/cluster-info", produces = "application/json")
	public List<ZKBrokerConfig> getClusterInfo() 
			throws JsonParseException, JsonMappingException, KeeperException, InterruptedException, IOException {
		return zooService.getBrokerConfigs();
	}
	
	@PostMapping(path = "/topics")
	public CreateTopicsResult createTopic(@RequestBody NewTopicRequest request) {
		return this.adminService.createTopic(request.getTopicName(),
				request.getPartitions(), request.getReplicas());
	}

	@DeleteMapping(path = "/topics/{topicId}")
	public void deleteTopic(@PathVariable("topicId") String topicId) throws InterruptedException, KeeperException {
		this.adminService.deleteTopic(topicId);
	}
}

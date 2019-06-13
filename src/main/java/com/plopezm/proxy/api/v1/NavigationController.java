package com.plopezm.proxy.api.v1;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.apache.zookeeper.KeeperException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.plopezm.proxy.proxy.entity.ZKNode;
import com.plopezm.proxy.zoo.service.ZooService;

@RestController
@RequestMapping("/navigation")
public class NavigationController {
	
	private ZooService zkService;
	private String serverAddress;
	
	public NavigationController(@Autowired final ZooService zkService,
			@Value("${app.address}") final String serverAddress) {
		this.zkService = zkService;
		this.serverAddress = serverAddress;
	}
	
	@GetMapping("/liveness")
	public @ResponseBody String liveness() {
        return "OK";
    }
	
	@GetMapping(path = "/nodes", produces = "application/json")
	public @ResponseBody ZKNode getRoot(@RequestParam(value = "q", required=false) String node) 
			throws UnsupportedEncodingException, KeeperException, InterruptedException {
		String path = "/";
		if (node != null) {
			path = node;
		}
		List<String> childs = this.zkService.getZNodeChildrens(path, false);
		String data = this.zkService.getZNodeData(path, false);
		return new ZKNode(this.serverAddress, path, childs, data);
	}
}

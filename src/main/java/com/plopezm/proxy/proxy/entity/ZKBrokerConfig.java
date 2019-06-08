package com.plopezm.proxy.proxy.entity;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAlias;

public class ZKBrokerConfig {

	@JsonAlias("listener_security_protocol_map")
	private Map<String, String> listenerSecurityProtocolMap;
	
	private List<String> endpoints;
	
	@JsonAlias("jmx_port")
	private String jmxPort;
	
	private int port;
	
	private String host;
	
	private String version;
	
	private String timestamp;

	public Map<String, String> getListenerSecurityProtocolMap() {
		return listenerSecurityProtocolMap;
	}

	public List<String> getEndpoints() {
		return endpoints;
	}

	public String getJmxPort() {
		return jmxPort;
	}

	public int getPort() {
		return port;
	}

	public String getHost() {
		return host;
	}

	public String getVersion() {
		return version;
	}

	public String getTimestamp() {
		return timestamp;
	}
	
	
}

package com.plopezm.proxy.proxy.entity;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ZKNode {

	private String nodePath;
	private List<String> childs;
	private Object data;
	private String[] next;
	
	public ZKNode(String serverAddress, String nodePath, List<String> childs, String data) {
		super();
		this.nodePath = nodePath;
		this.childs = childs;
		if (data != null) {
			try {
				HashMap<String,Object> result =
				        new ObjectMapper().readValue(data, HashMap.class);
				this.data = result;
			} catch (IOException e) {
				this.data = data;
			}
		}
		this.generateNext(serverAddress);
	}
	
	public List<String> getChilds() {
		return childs;
	}
	public void setChilds(List<String> childs) {
		this.childs = childs;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getNodePath() {
		return nodePath;
	}
	public void setNodePath(String nodePath) {
		this.nodePath = nodePath;
	}
	public String[] getNext() {
		return next;
	}

	public void generateNext(String serverAddress) {
		if (this.childs == null || this.childs.size() == 0) {
			return;
		}
		String prepath = this.nodePath == "/" ? "" : this.nodePath;
		this.next = new String[childs.size()];
		for (int i=0;i<childs.size();i++) {
			this.next[i] = serverAddress + "/navigation/nodes?q=" + prepath + "/" + childs.get(i);
		}
	}
	
}

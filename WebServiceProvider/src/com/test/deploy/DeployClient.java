package com.test.deploy;

import javax.xml.ws.Endpoint;

import com.test.Message;

public class DeployClient {
	
	public static void main(String[] args) {
		Endpoint.publish("http://localhost:7878/test", new Message());
		System.out.println("------------WebService is running------>>>>>");
	}

}

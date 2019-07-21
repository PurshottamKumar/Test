package com.test;

import javax.xml.ws.Endpoint;

public class Publiser {

	public static void main(String[] args) {
		Endpoint.publish("http://localhost:1212/HelloWsTest", new HelloWs());
		System.out.println("------- Hello Web Service is started ------");
	}
}

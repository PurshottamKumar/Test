package com.practice.publisher;

import javax.xml.ws.Endpoint;

import com.practice.DBMethods;

public class DBPublish {

	public static void main(String[] args) {
		Endpoint.publish("http://localhost:1001/dbservice", new DBMethods());
		System.out.println("<<< ---- Database Services are Running ---- >>>");
	}
}

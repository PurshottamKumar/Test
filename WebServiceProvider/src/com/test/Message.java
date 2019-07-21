package com.test;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class Message {
	@WebMethod
	public String getMsg(String name) {
		return "This is a Demo Message... My name is "+ name;
	}
}

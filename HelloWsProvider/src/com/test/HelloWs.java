package com.test;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class HelloWs {
	@WebMethod
	public String getMassege(String name, int age) {
		return "Hello, I am "+ name +" from Gurgaon. My age is "+age;
	}
}

package com.test;

public class Client {

	public static void main(String[] args) {
		
		HelloWsService service = new HelloWsService();
		HelloWs port = service.getHelloWsPort();
		String massege = port.getMassege("Fateh Singh Chauhan", 25);
		System.out.println(massege);
		
	}
}

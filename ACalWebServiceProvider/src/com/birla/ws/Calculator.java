package com.birla.ws;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class Calculator {
	
	@WebMethod
	public int addDigits(int x , int y){
		System.out.println("Value of arguments [" + x +"]" + " and [" + y  + "]");
		return x+y;
	}

}

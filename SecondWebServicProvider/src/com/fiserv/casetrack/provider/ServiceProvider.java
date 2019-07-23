package com.fiserv.casetrack.provider;
import javax.jws.WebService;

@WebService
public interface ServiceProvider {
	
	public int sumDigits(int x,int y);
}

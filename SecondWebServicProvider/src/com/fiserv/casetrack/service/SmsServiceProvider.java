package com.fiserv.casetrack.service;
import javax.jws.WebService;
import com.fiserv.casetrack.provider.ServiceProvider;

@WebService
public class SmsServiceProvider implements ServiceProvider {
	@Override
	public int sumDigits(int x, int y) {
		System.out.println();
		return x+y;
	}
}

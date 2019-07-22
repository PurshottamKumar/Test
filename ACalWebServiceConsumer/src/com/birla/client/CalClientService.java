package com.birla.client;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

import com.birla.ws.Calculator;
import com.birla.ws.CalculatorService;

public class CalClientService {
	
	static{
		HostnameVerifier verifier = new HostnameVerifier() {
			public boolean verify(String hostname, SSLSession session) {
				return true;
			}
		};
		
		HttpsURLConnection.setDefaultHostnameVerifier(verifier);
	}
	
	
	public static void main(String[] args) {
		
	/*	System.setProperty("javax.net.ssl.trustStore", "D:\\birla_ssl\\RRSKeyStoreClient.jks");
        System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
        System.setProperty(" javax.net.ssl.trustStoreType", "jks");
*/
		CalculatorService service = new CalculatorService();
		Calculator calculatorPort = service.getCalculatorPort();
		int responseResult = calculatorPort.addDigits(2000,3000);
		System.out.println(" Response := " + responseResult);
		
	}

}

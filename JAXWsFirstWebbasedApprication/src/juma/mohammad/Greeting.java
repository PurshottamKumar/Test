package juma.mohammad;

import javax.jws.WebMethod;
import javax.jws.WebService;
@WebService
public interface Greeting {

	@WebMethod 
	public String sayHello(String name);
}


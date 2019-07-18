package com.ilfs.demo.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ilfs.demo.model.Country;
import com.ilfs.demo.model.Registration;
import com.ilfs.demo.model.UserRegistration;


public interface UserService {
	public  List<Country> fetchAllCountry();
	
	public void insertUserRecord(Registration registration);
	public List<Registration> fetchAllRecords(Registration registration);

}

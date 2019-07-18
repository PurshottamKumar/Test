package com.ilfs.demo.dao;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ilfs.demo.model.Country;
import com.ilfs.demo.model.Registration;
import com.ilfs.demo.model.UserRegistration;


public interface UserDao {
	
	public List<Country> fetchAllCountry();
	public void insertUserRecord(Registration registration);
	public List<Map<String, Object>> fetchAllRecords(Registration registration);

}

package com.fiserv.dao;

import com.fiserv.model.RegistrationForm;

public interface UserDao {
	
	public String createUser(RegistrationForm registration);
	public void insertUserInfo();
	public void userRegistratinUpdate();
}

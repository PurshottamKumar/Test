package com.fiserv.dao;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fiserv.entity.UserRegistration;
import com.fiserv.model.RegistrationForm;

@Repository("userDao")
public  class UserDaoImpl implements UserDao{

	
	@Autowired
	SessionFactory sessionfactory = null;
	Session session =null;
	Transaction tx = null;
	
	@Override
	public String createUser(RegistrationForm registration) {
		String response="";
		try{
		session = sessionfactory.openSession();
		tx = session.beginTransaction();
		UserRegistration userReg= new UserRegistration();
		userReg.setUserId(1);
		userReg.setUserName("p");
		userReg.setPassWord("l");
		userReg.setEmail("p");
		userReg.setBirthDate("6");
		session.save(userReg);
		tx.commit();
		response="save";
		}catch(Exception ex){
			response ="failed";
			tx.rollback();
			ex.printStackTrace();
		}
		finally{
			session.close();
			sessionfactory.close();
		}
		return response;
	}

	@Override
	public void insertUserInfo() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void userRegistratinUpdate() {
		// TODO Auto-generated method stub
		
	}


		
	}
	
	
	
		
	


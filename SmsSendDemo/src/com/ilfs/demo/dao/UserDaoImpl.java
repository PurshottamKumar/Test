package com.ilfs.demo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ilfs.demo.model.Country;
import com.ilfs.demo.model.Registration;
import com.ilfs.demo.model.UserRegistration;

@Repository("userDao")
public class UserDaoImpl  implements UserDao {

	Session session =null;
	@Autowired
	SessionFactory sessionfactory = null;
	Transaction tx = null;

	@Override
	public List<Country> fetchAllCountry() {
		ArrayList<Country> countryList = new ArrayList<Country>();
		session =sessionfactory.openSession();
		
		List qry=session.createSQLQuery("select * from Country").list();
		System.out.println(qry.size());
		
		List<Object[]> deducations = (List<Object[]>) session.createSQLQuery("select id,countryname from Country").list();
		for (Object[] deducationBeans : deducations) {
			Country ctr = new Country();
			ctr.setId(Integer.parseInt(deducationBeans[0].toString()));
			ctr.setCountryname(deducationBeans[1].toString());
			countryList.add(ctr);
		}
		System.out.println("list of countryList  = " +countryList.size());
		tx= session.beginTransaction();
		session.close();
		
		return countryList;
	}
	public void insertUserRecord(Registration registration) {
		try{
			session = sessionfactory.openSession();
			tx =session.beginTransaction();
			List<UserRegistration> userRegistrationsobj=new ArrayList<UserRegistration>();
			String date = registration.getBirthDate();
			String[] date1=null;
			date1 = date.split("-");
			UserRegistration userRegistration = new UserRegistration();
			userRegistration.setUserName(registration.getUserName());
			userRegistration.setPassWord(registration.getPassWord());
			userRegistration.setEmail(registration.getEmail());
			userRegistration.setBirthDate(registration.getBirthDate());
			Country country = new Country();
			int countryid= registration.getCountry();
			country.setId(countryid);
			userRegistration.setCountry(country);
			userRegistrationsobj.add(userRegistration);
			for(UserRegistration ss:userRegistrationsobj )
			{
				session.persist(ss);
			}
			tx.commit();
			session.close();
		}catch(Exception ex){
			ex.printStackTrace();
			tx.rollback();
		}
	}
	@Override
	public  List<Map<String, Object>> fetchAllRecords(Registration registration) {
		System.out.println("--------fetch Records Dao Laye-----");
		List<Map<String,Object>> userList = new ArrayList<Map<String,Object>>();
	session = sessionfactory.openSession();
	Query qry = session.createSQLQuery("select ur.username,ur.PassWord,ur.Email,ur.BirthDate,c.countryname from UserRegistration ur inner join Country c on ur.id = c.id");
	//qry.setParameter("c.id", registration.getCountry());
	List<Object[]> qryList = qry.list();
	System.out.println("--- size of userRegistration -- "+qryList.size());
	/*List list =qry.list();
	Iterator  itr =list.iterator();
	while(itr.hasNext()){
		
		Map map = new HashMap();
		Registration reg  = (Registration)itr.next();
		reg.setUserName(map.get("username")==null?"":String.valueOf(map.get("username")));
		userList.add(reg);
	}*/
	
	for (Object[] regobjet : qryList) {
		Map<String, Object> map = new HashMap<String, Object>();
	    map.put("username",regobjet[0]);
	    map.put("PassWord",regobjet[1]);
	    map.put("Email",regobjet[2]);
	    map.put("BirthDate",regobjet[3]);
	    map.put("countryname",regobjet[4]);
	   
	    userList.add(map);
	}
	return userList;
	}
	
}

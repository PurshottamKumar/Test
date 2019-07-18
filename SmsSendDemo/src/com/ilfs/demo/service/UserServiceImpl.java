package com.ilfs.demo.service;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ilfs.demo.dao.UserDao;
import com.ilfs.demo.model.Country;
import com.ilfs.demo.model.Registration;


@Service("userservice")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	@Transactional
	public List<Country> fetchAllCountry() {
		return userDao.fetchAllCountry();
	}
	@Transactional
	public void insertUserRecord(Registration registration) {
		userDao.insertUserRecord(registration);
	}
	@Override
	public List<Registration> fetchAllRecords(Registration registration) {
	List listfetch	 =userDao.fetchAllRecords(registration);
		return listfetch;
	}

}
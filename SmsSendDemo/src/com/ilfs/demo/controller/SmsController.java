package com.ilfs.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.ilfs.demo.model.Country;
import com.ilfs.demo.model.Registration;
import com.ilfs.demo.service.UserService;


@Controller
public class SmsController{

	@Autowired
	private UserService userservice;

	@RequestMapping(value="/login",method = RequestMethod.GET)
	public ModelAndView printHello(Country country,HttpServletRequest req,HttpServletResponse res) {
		System.out.println("-------Login Page and populate list---------");
		List<Country> listofCountry = userservice.fetchAllCountry();
		Map <String,Object> map = new HashMap<String,Object>();
		for(Country list1:listofCountry){
			System.out.println("id---"+list1.getId()+"\n name"+list1.getCountryname());
		}
		map.put("listofCountry", listofCountry);
		System.out.println( "size of list -----------"+listofCountry.size());
		return  new ModelAndView("login","map",map);
	}
	
	@RequestMapping(value = "/InsertUser", method = RequestMethod.POST)
	public  String saveEmolumentsHeads(@ModelAttribute Registration registration,BindingResult result,HttpServletRequest req,HttpServletResponse res){
		System.out.println("--------insert User Data- client------");
		HttpSession session = req.getSession();
		String userName =   req.getParameter("userName");
		String password = req.getParameter("passWord"); 
		String date =  req.getParameter("birthDate");
		String country =req.getParameter("country");
		userservice.insertUserRecord(registration);
		return "successfull";
	}
	@RequestMapping(value="/FetchUser",method = RequestMethod.GET)
	public ModelAndView fetchAllRecords(Registration registration,HttpServletRequest req,HttpServletResponse res){
		
		//registration.setCountry(1);
		System.out.println("---------- Records -------------");
		Map <String,Object> map = new HashMap<String,Object>();
		List<Registration> listofrecords = userservice.fetchAllRecords(registration);
		map.put("listofrecords", listofrecords);
		return new ModelAndView("fetchrecord","map",map);
		
	}

}



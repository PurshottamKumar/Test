package com.fiserv.registration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.fiserv.dao.UserDao;
import com.fiserv.dao.UserDaoImpl;
import com.fiserv.model.RegistrationForm;

@Controller
public class UserRegistrationController {
	
	@Autowired
	UserDao userDao;
	
	@RequestMapping(value="/newUser",method = RequestMethod.GET)
	public ModelAndView createUserRegistration(Model model){
		System.out.println("test controller method");
		model.addAttribute("key","Purshottam Kumar");
		return new ModelAndView("registrationForm");
	}

	@RequestMapping(value ="/loginUrl",method=RequestMethod.POST)
	public ModelAndView userLogin(HttpServletRequest req,HttpServletResponse res){
		
		String name=req.getParameter("user");
		System.out.println("kk==="+name);
		return new ModelAndView("welcome");
	}
	@RequestMapping(value ="/createUser",method=RequestMethod.POST)
	public ModelAndView createUser(HttpServletRequest req,HttpServletResponse res){
		System.out.println("....createUser---");
		String name=req.getParameter("username");
		RegistrationForm form= new RegistrationForm();
		form.setStudentName("ram");
		form.setCity("r");
		form.setEmailId("rr");
		form.setRollNo(10);
		String response=userDao.createUser(form);
		
		return new ModelAndView("welcome");
	}
	
	
}

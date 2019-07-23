package com;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.util.Properties;

public class Test {
	
		public static void main(String[] args)throws Exception{  
		    FileReader reader=new FileReader("src/propertie/database.properties");  
		 // File file  = new File("src/database.properties");
		 // FileInputStream fis = new FileInputStream(file);
		      
		    Properties p=new Properties();  
		    p.load(reader);  
		      
		    System.out.println(p.getProperty("hi"));  
		    System.out.println(p.getProperty("hello"));  
	}

}

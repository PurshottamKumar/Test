package com.practice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class AvgForLoop extends DecisonMaker{

	private Scanner s1 = null;
	
	public float avgForLoop() {
		s1 = new Scanner(System.in);
		System.out.println("Enter the starting number - ");		
		int a = s1.nextInt();
		System.out.println("Enter length of series - ");
		int n = s1.nextInt();
		float result = 0;
		int a1[]= new int[a+n];
		System.out.println("The numbers are: ");
		for(int i=a; i<a+n; i++) {
			a1[i]= i;
			System.out.print(i+" ");
		}
		System.out.printf("%nThe Sum of all numbers is: ");
		for(int i = a;i<a+n;i++) {
			result = result+a1[i];
		}
		
		  System.out.println(result);
		  float avg = result/n;
		  //System.out.println("The average of all numbers is: "+(result/n));
		 
		return avg;
	}

	public Connection getDBConn() {
		return null;
	}

	@Override
	public void closeDBConn(Connection con, Statement stmt, PreparedStatement ps, ResultSet rs) {
		// TODO Auto-generated method stub
		
	}
}

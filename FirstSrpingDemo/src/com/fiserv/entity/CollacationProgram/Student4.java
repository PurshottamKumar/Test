package com.fiserv.entity.CollacationProgram;

public final class Student4 {
final String name;
final int rollNo;

public Student4(String name,int rollNo){
	this.name=name;
	this.rollNo=rollNo;
}
public String getname(){
	return name;
}
public int getrollNo(){
	return rollNo;
}
public static void main(String arg[]){
	Student4 st=new Student4("Rohit",101);
	System.out.println(st.getname());
	System.out.println(st.getrollNo());
}	
}



package com.fiserv.model;

import java.io.Serializable;

public class RegistrationForm implements Serializable{
	
private static final long serialVersionUID = 1L;
private String studentName;
private String fatherName;
private int rollNo;
private String emailId;
private String dateOfBirth;
private String course;
private String city;

public String getStudentName() {
	return studentName;
}
public void setStudentName(String studentName) {
	this.studentName = studentName;
}
public String getFatherName() {
	return fatherName;
}
public void setFatherName(String fatherName) {
	this.fatherName = fatherName;
}
public int getRollNo() {
	return rollNo;
}
public void setRollNo(int rollNo) {
	this.rollNo = rollNo;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getDateOfBirth() {
	return dateOfBirth;
}
public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
@Override
public String toString() {
	return "RegistrationForm [studentName=" + studentName + ", fatherName=" + fatherName + ", rollNo=" + rollNo
			+ ", emailId=" + emailId + ", dateOfBirth=" + dateOfBirth + ", course=" + course + ", city=" + city + "]";
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + rollNo;
	return result;
}
@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	RegistrationForm other = (RegistrationForm) obj;
	if (rollNo != other.rollNo)
		return false;
	return true;
}

}

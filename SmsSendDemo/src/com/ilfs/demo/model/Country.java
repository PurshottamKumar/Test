package com.ilfs.demo.model;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name ="Country")

public class Country {
	
	@Id
	@Column(name ="Id")

	private int id;
	@Column(name ="CountryName")
	private String countryname;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="country")  
	public List<UserRegistration> userRegistrations;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<UserRegistration> getUserRegistrations() {
		return userRegistrations;
	}
	public void setUserRegistrations(List<UserRegistration> userRegistrations) {
		this.userRegistrations = userRegistrations;
	}
	public String getCountryname() {
		return countryname;
	}
	public void setCountryname(String countryname) {
		this.countryname = countryname;
	}
	

}

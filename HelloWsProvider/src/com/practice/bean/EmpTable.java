package com.practice.bean;

public class EmpTable {

	private int empid;
	private String ename;
	private int deptno;
	private String loc;
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public int getDeptno() {
		return deptno;
	}
	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	@Override
	public String toString() {
		//return "EmpTable [empid=" + empid + ", ename=" + ename + ", deptno=" + deptno + ", loc=" + loc + "]";
		return ""+ getEmpid() + "             "+ getEname() + "           "+ getDeptno() + "            " + getLoc();
	}
	
	
}

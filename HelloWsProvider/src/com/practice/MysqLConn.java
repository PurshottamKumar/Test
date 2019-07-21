package com.practice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MysqLConn extends DecisonMaker {

	private String url = "jdbc:mysql://localhost:3306/mytest";
	private String user = "root";
	private String pass = "mysql";
	Connection conn = null;
	Statement stmt = null;
	ResultSet res = null;

	public Connection getDBConn() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url, user, pass);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
	public void closeDBConn(Connection con, Statement stmt, PreparedStatement ps, ResultSet rs) {
		if (rs!= null){
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (ps!= null){
			try {
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (stmt!= null){
			try {
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (con!= null){
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	@Override
	public float avgForLoop() {
		// TODO Auto-generated method stub
		return 0;
	}


}

package com.practice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public abstract class DecisonMaker {
	private static DecisonMaker maker = null;
	public abstract Connection getDBConn();
	public abstract void closeDBConn(Connection con, Statement stmt, PreparedStatement ps, ResultSet rs);
	public abstract float avgForLoop();
	
	
	public static DecisonMaker getObj(String string) {
		if("Oracle".equalsIgnoreCase(string)) {
			maker = new OracleConn();
		}
		else if("mysql".equalsIgnoreCase(string)) {
			maker = new MysqLConn();
		}
		else if("Avg".equalsIgnoreCase(string)) {
			maker = new AvgForLoop();
		}
		return maker;
	}
}

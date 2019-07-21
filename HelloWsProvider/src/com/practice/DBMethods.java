package com.practice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

import com.practice.bean.EmpTable;

@WebService(name="DBMethods",serviceName="DBService",targetNamespace="http://rawat.com")
public class DBMethods {
	private EmpTable empRecords = null;
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement ps =null;
	ResultSet rs = null;
	String fetchSql = "select * from emp order by 1";
	String records = null;
	List<EmpTable> tableRec = new ArrayList<>();

	@WebMethod
	public List<EmpTable> fetchTableRecords(String db) {
		DecisonMaker obj = DecisonMaker.getObj(db);
		try {
			conn = obj.getDBConn();
			stmt = conn.createStatement();
			rs = stmt.executeQuery(fetchSql);
			System.out.println("EMP_ID        NAME            DEPT.NO.       LOCATION");
			System.out.println("------        ----            --------       --------");
			while(rs.next()) {
				int id = rs.getInt(1);
				String nm = rs.getString(2);
				int dept = rs.getInt(3);
				String loct = rs.getString(4);

				empRecords = new EmpTable();

				empRecords.setEmpid(id);
				empRecords.setEname(nm);
				empRecords.setDeptno(dept);
				empRecords.setLoc(loct);

				tableRec.add(empRecords);

			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			obj.closeDBConn(conn, stmt, ps, rs);
		}
		return tableRec;
	}

	@WebMethod
	public float avgFinder() {
		DecisonMaker obj = DecisonMaker.getObj("avg");
		float avgForLoop = obj.avgForLoop();
		return avgForLoop;
	}


	/*	public static void main(String[] args) { 
		DBMethods dbMethods = new DBMethods(); 
		ArrayList<EmpTable> fetchTableRecords = dbMethods.fetchTableRecords("mysql");
		Iterator<EmpTable> iterator = fetchTableRecords.iterator();
		while (iterator.hasNext()) {
			EmpTable empTable = (EmpTable) iterator.next();
			System.out.println(empTable.toString());
		}
	}
	 */
}

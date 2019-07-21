package com.client;

import java.util.Iterator;
import java.util.List;

import com.rawat.DBMethods;
import com.rawat.DBService;
import com.rawat.EmpTable;

public class ClientCode {

	public static void main(String[] args) {
		DBService service = new DBService();
		DBMethods port = service.getDBMethodsPort();
		List<EmpTable> records = port.fetchTableRecords("Oracle");
		Iterator<EmpTable> iterator = records.iterator();
		while (iterator.hasNext()) {
			EmpTable empTable = iterator.next();
			System.out.println(empTable.getEmpid()+"  "+ empTable.getEname()+" " +empTable.getDeptno() + " "+ empTable.getLoc());
		}
	}
}

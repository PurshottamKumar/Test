package com.fiserv.entity.CollacationProgram;

import java.util.Vector;

public class VectorTest {
public static void main(String arg[]){
	Vector v=new Vector();
	System.out.println(v.capacity());
	for(int i=0;i<=10;i++){
		v.addElement(i);
	}
	System.out.println(v.capacity());
}
}

package com.fiserv.entity.CollacationProgram;

import java.util.TreeSet;

public class TreeSetTest {
public static void main(String arg[]){
	TreeSet t=new TreeSet();
	t.add("d");
	t.add("a");
	t.add("b");
	t.add("c");
	System.out.println("element is add="+t);
	t.add(null);
	System.out.println("element is add="+t);
}
}

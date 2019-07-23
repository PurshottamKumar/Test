package com.fiserv.entity.CollacationProgram;

import java.util.Stack;

//import groovyjarjarantlr.collections.Stack;

public class StackTest {
public static void main(String arg[]){
	Stack v=new Stack();
	v.push("apple");
	v.push("orange");
	v.push("gava");
	v.push("graps");
	System.out.println("fruits of list="+v);
	v.pop();
	System.out.println("fruits of list Delete element="+v);
	v.search("gava");
	System.out.println("fruits of list search element="+v.search("gava"));
	v.search("apple");
	System.out.println("fruits of list search element="+v.search("apple"));
	
}
}

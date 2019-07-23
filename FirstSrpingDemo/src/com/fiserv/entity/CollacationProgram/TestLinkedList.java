package com.fiserv.entity.CollacationProgram;

import java.util.LinkedList;

public class TestLinkedList {
public static void main(String arg[]){
	LinkedList li=new LinkedList ();
	li.add("a");
	li.add(10);
	li.add(null);
	li.add("c++");
	li.addFirst("c language");
	System.out.println("add first element"+li);
	li.addLast("ram");
	System.out.println("add first element"+li);
	li.getFirst();
	System.out.println("add first hhhh element"+li);
	li.getLast();
	System.out.println("add oops first element"+li);
	li.set(2,"php");
	System.out.println("add first element"+li);
	li.removeFirst();
	System.out.println("removed first element"+li);
	li.removeLast();
	System.out.println("removed last element"+li);
}
}

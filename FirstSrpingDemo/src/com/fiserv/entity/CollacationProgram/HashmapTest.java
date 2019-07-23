package com.fiserv.entity.CollacationProgram;

import java.util.HashMap;
import java.util.Map.Entry;

public class HashmapTest {
private static final String Keys = null;
private static Object keys;

public static void main(String arg[]){
	HashMap<Integer, String>map=new HashMap<Integer, String>();
	map.put(10,"apple");
	map.put(11,"orange");
	map.put(12,"gava");
	map.put(13,"papaya");
	System.out.println("save of fruits="+map);
	Object val=(String)map.get(13);
	System.out.println("value is sucess="+(val));
	/*for (String Key:keys{
		System.out.println(Key +",:"+map.get(Key));
	}*/
	for(Entry<Integer, String> m:map.entrySet()){
		System.out.println(m.getKey()+":"+m.getValue());	
	}
}
}

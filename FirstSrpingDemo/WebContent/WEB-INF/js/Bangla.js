//   Mandating/restricting bengali on Input field from the user
// If user types in English then it converts the letter to bengali and alerts to change language if types in any other language except English or Bengali

/*
   How to integrate it on any page or/ how to use it on any input box 
   bengali Typing is done on the basis of Bengali Keyboard Settings, so please refer the same
	Follow these Steps : -
	1. Include Bangla.js on the page where you want to implement Bangla restriction 
	   also check that jquery is included on the page or not if not then include
	   for e.g :- <script type="text/javascript" src="js/Bangla.js"></script>
	2. call the method TextLangBang(event,Binput,length) by passing 3 parrameter to it as shown
	3. parameter 1 is event so pass it as written parameter two is input box id so pass input box id without single quotes, and 
	   pass input box id as 3rd parameter within single quotes
	4. for e.g :- <input type="text" onkeyup="TextLangBang(event,Binput,length)" id="Binput" ></input>

*/

//function to remove alphaNumeric characters and special characters from the string
//function to remove alphaNumeric characters and special characters from the string
function removeAlphaNumeric(input,hValue) {
	var ChngdChar1 = null;
	ChngdChar1 = input.replace(/([a-zA-Z])/g, "");
	ChngdChar1 = ChngdChar1.replace(/([0-9])/g, "");
	//ChngdChar1 = ChngdChar1.replace(/([`~!@#$%^&*()_+-=|\"':;?])/g, "");
	ChngdChar1 = ChngdChar1.replace(/([`~_+|\"'?])/g, "");
	ChngdChar1 = ChngdChar1.replace('{', '');
	ChngdChar1 = ChngdChar1.replace('[', '');
	ChngdChar1 = ChngdChar1.replace('}', '');
	ChngdChar1 = ChngdChar1.replace(']', '');
	//ChngdChar1 = ChngdChar1.replace('>', '');
	//ChngdChar1 = ChngdChar1.replace('<', '');
	//ChngdChar1 = ChngdChar1.replace(',', '');
	ChngdChar1 = ChngdChar1.replace('\\', '');
	//ChngdChar1 = ChngdChar1.replace('%', '');
	ChngdChar1 = ChngdChar1.replace('^', '');
	ChngdChar1 = ChngdChar1.replace('&', '');
	//ChngdChar1 = ChngdChar1.replace('#', '');
	ChngdChar1 = ChngdChar1.replace('$', '');
	//ChngdChar1 = ChngdChar1.replace('@', '');
	//ChngdChar1 = ChngdChar1.replace('(', '(');
	//ChngdChar1 = ChngdChar1.replace(')', '');
	ChngdChar1 = ChngdChar1.replace('*', '');
	//ChngdChar1 = ChngdChar1.replace('.', '.');
	
	
	return ChngdChar1+hValue;
}


//this function to To detect if "Shift"
//or "Caps Lock" key was held down while pressing the key
function Shift_Key_pressed(e) 
{
	kc = e.which; // kc= Key Code  
	//alert(kc);
	sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false); // sk= Shift Key
    //Capital letters, A to Z, have ASCII codes 65 to 90
    //a check to see if the ASCII code is between 65 and 90 and the shift key is pressed. 
    //we need also to do the same work if the ASCII code is between 97 (a) and 122 (z) and the
    // shift key is not pressed, because shifted letters are lower-case if Caps Lock is on.)
    if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk) || ((kc >= 96 && kc <= 105) && sk) || ((kc >= 185 && kc <= 222)&& !sk) || ((kc >= 48 && kc <= 57) && !sk))
        return false; 
    else
        return true; 
}


	
	
	
	/*if( ak && ck ){
		 alert(e.which);
		return true;
}else 
		return false;*/

	
var bang="";
// added By Harit to replace inputbox values entered by users in Bengali.
function TextLangBang(e,input,max) {
	var len = input.value.length;

	if(e.keyCode != 8){
	if(max > 1){
	if(len > max){
		return false;
	}}
	}
	var engChk = false;
	var hndChk = false;
	var spclChk = false;
	//alert($("#"+inputId).val().slice(-1).charCodeAt(0));
	if(e.which!= ""){
		var char = e.which;
		
		// a-z verification
		if(char>= 96 && char<= 122){
			engChk = true;
		}
		
		else if(char>= 65 && char<= 90){
			engChk = true;
		}
		
		else if(char>= 185 && char<= 222){
			engChk = true;
		}
		
		else if(char>= 48 && char<= 57){
			engChk = true;
		}
		
		//Hindi Char Chk
		else if(char>= 2305 && char<= 2416){
			hndChk = true;
		}
		
		else if(char>= 32 && char<= 47){
			spclChk = true;
		}
		
		else if(char>= 58 && char<= 64){
			spclChk = true;
		}
		
		else if(char>= 91 && char<= 96){
			spclChk = true;
		}
		
		else if(char>= 123 && char<= 127){
			spclChk = true;
		}
		
		else{
			engChk = false;
		}
	}
	
	//alert("pressed char ascii code "+$("#"+inputId).val().slice(-1).charCodeAt(0));
	//if(engChk || spclChk == true)
	//{
		if(restrictCopyPaste(e,input))
		{
			var hValue = null;var unicode = e.which;var prvChar = null;var updtdChar = null;
		    switch (unicode) 
		    { 
		    case 65: if (Shift_Key_pressed(e)){hValue = 'র্';} 
			        else {					
						if(bang=='1')
						hValue= 'ঋ';
						else
						hValue= 'ৃ';		 				
			}			
			bang='0';prvChar = input.value;updtdChar = removeAlphaNumericspecialcases(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 66: if (Shift_Key_pressed(e)) {hValue= 'ণ';} else {hValue= 'ন';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 67: if (Shift_Key_pressed(e)) {				
						if(bang=='1')
						hValue= 'ঐ';
						else
						hValue= 'ৈ';			
				}				
				else {
				    if(bang=='1')
					hValue= 'এ';
					else
					hValue= 'ে';
					}				
			bang='0';prvChar = input.value;updtdChar = removeAlphaNumericspecialcases(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 68: if (Shift_Key_pressed(e)) {				
						if(bang=='1')
						hValue= 'ঈ';
						else
						hValue= 'ী';
				}else{
					if(bang=='1')
				    hValue= 'ই';
			        else
					hValue= 'ি';
					}				
			bang='0';prvChar = input.value;updtdChar = removeAlphaNumericspecialcases(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 69: if (Shift_Key_pressed(e)) {hValue= 'ঢ';} else {hValue= 'ড';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 70: if (Shift_Key_pressed(e)) {hValue= 'অ';}	else {hValue= 'া';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 71: if (Shift_Key_pressed(e)){hValue= '।';} 
						else{
							hValue= '্';
							bang='1';
				 }			
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 72: if (Shift_Key_pressed(e)) {hValue= 'ভ';} else {hValue= 'ব';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 73: if (Shift_Key_pressed(e)) {hValue= 'ঞ';} else {hValue= 'হ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 74: if (Shift_Key_pressed(e)) {hValue= 'খ';} else {hValue= 'ক';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 75: if (Shift_Key_pressed(e)) {hValue= 'থ';} else {hValue= 'ত';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 76: if (Shift_Key_pressed(e)) {hValue= 'ধ';} else {hValue= 'দ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 77: if (Shift_Key_pressed(e)) {hValue= 'শ';} else {hValue= 'ম';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 78: if (Shift_Key_pressed(e)) {hValue= 'ষ';} else {hValue= 'স';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 79: if (Shift_Key_pressed(e)) {hValue= 'ঘ';} else {hValue= 'গ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 80: if (Shift_Key_pressed(e)) {hValue= 'ঢ়';} else {hValue= 'ড়';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 81: if (Shift_Key_pressed(e)) {hValue= 'ং';} else {hValue= 'ঙ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 82: if (Shift_Key_pressed(e)) {hValue= 'ফ';}	else {hValue= 'প';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 83: if (Shift_Key_pressed(e)) {
						if(bang=='1')
						hValue= 'ঊ';
						else
						hValue= 'ূ';
					}else {
						if(bang=='1')
						hValue= 'উ';
						else
						hValue= 'ু';
					}   
			bang='0';prvChar = input.value;updtdChar = removeAlphaNumericspecialcases(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 84: if (Shift_Key_pressed(e)) {hValue= 'ঠ';} else {hValue= 'ট';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 85: if (Shift_Key_pressed(e)) {hValue= 'ঝ';} else {hValue= 'জ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 86: if (Shift_Key_pressed(e)) {hValue= 'ল';} else {hValue= 'র';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 87: if (Shift_Key_pressed(e)) {hValue= 'য়';} else {hValue= 'য';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 88: if (Shift_Key_pressed(e)){						
						if(bang=='1')
						hValue= 'ঔ';
						else
						hValue= 'ৗ';		
				}else
					hValue= 'ও'; 
			bang='0';prvChar = input.value;updtdChar = removeAlphaNumericspecialcases(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 89: if (Shift_Key_pressed(e)) {hValue= 'ছ';} else {hValue= 'চ';}   
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
					 
			case 90: if (Shift_Key_pressed(e)) {hValue= '্য';} else {hValue= '্র';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			// numbers key cases //  // Created by Harit Grover
			
			case 48: if (Shift_Key_pressed(e))   {hValue= '';} 	else {hValue= '০';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 49: if (Shift_Key_pressed(e)) {return true;}	else {hValue= '১';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 50: if (Shift_Key_pressed(e)) {hValue= '';}  else {hValue= '২';} 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 51: if (Shift_Key_pressed(e))  {hValue= '';} else {hValue= '৩';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 52: if (Shift_Key_pressed(e))  {hValue= '৳';} else {hValue= '৪';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 53: if (Shift_Key_pressed(e))  {return true;} else {hValue= '৫';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			case 54: if (Shift_Key_pressed(e)) {hValue= 'ব';}	else {hValue= '৬';} 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 55: if (Shift_Key_pressed(e)) {hValue= 'ঁ';}	else {hValue= '৭';} 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			case 56:if (Shift_Key_pressed(e)) {hValue= '*';} else {hValue= '৮';} 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 57: if (Shift_Key_pressed(e)) {hValue= '';} else {hValue= '৯';} 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			
			
			// for right side numeric keys
			
           case 96: hValue= '০'; 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 97: hValue= '১';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 98: hValue= '২';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			case 99: hValue= '৩';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 100: hValue= '৪'; 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 101: hValue= '৫'; 
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 102: hValue= '৬';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			case 103: hValue= '৭';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 104: hValue= '৮';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			case 105:hValue= '৯';
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			// for right side numeric keys over------------------------------------
			
			//special key to add 
			case 189: if (Shift_Key_pressed(e)) {hValue= 'Ñ';} else {hValue= '';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 192: if (Shift_Key_pressed(e)) {hValue= '“';} else {hValue= '‘';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			
			
			
			case 220: if (Shift_Key_pressed(e)) {hValue= 'ৎ';} else {hValue= 'ঃ';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
			
			
			case 222: if (Shift_Key_pressed(e)) {hValue= '”';} else {hValue= '’';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			
            case 188: if (Shift_Key_pressed(e)) {hValue= '<';} 
			
			else {hValue= '';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return true; break;
			
			
			
			
			
			
			/*case 186: if (Shift_Key_pressed(e)) {hValue= 'ছ';} else {hValue= 'চ';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 187: if (Shift_Key_pressed(e)) {hValue= 'ঋ';} else {hValue= 'ৃ';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 188: if (Shift_Key_pressed(e)) {hValue= 'ষ';} 
			
			else {hValue= ',';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return true; break;
			
			
			
			case 191: if (Shift_Key_pressed(e)) {hValue= 'য়';} else {hValue= 'য';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 221: if (Shift_Key_pressed(e)) {hValue= 'ঞ';} else {hValue= '়';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			
			case 219: if (Shift_Key_pressed(e)) {hValue= 'ঢ';} 
			
			else {hValue= 'ড';}  
			prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
			return false; break;
			*/
						
						
		    	}
	    	}//else{input.value = "";}
	}/*else{
		
		var hValue = null;var unicode = e.which;var prvChar = null;var updtdChar = null;
		//alert(unicode);
		prvChar = input.value;
		//alert(updtdChar);
		
		//alert(updtdChar);
		input.value = updtdChar;
		//alert(input.value);
		
	}*/
	
	/*if($("#"+inputId).val().slice(-1)!= "" && spclChk == false){
		if(!engChk && hndChk == false && spclChk == false){
			alert("कृपया की बोर्ड भाषा परिवर्तित करें !");
			$("#"+inputId).val("");
		}
	}*/


function restrictCopyPaste(e)
{if(e.keyCode == '17' || e.Which == '3'){return false;}else return true;}



function textboxLimit(id,event){	
var len = id.value.length;
if(len > 10)
{
	event.preventDefault(); // cancel default behavior
	return false;
}	
}

function removeAlphaNumericspecialcases(input,hValue) {
	var ChngdChar1 = null;
	ChngdChar1 = input.replace(/([a-zA-Z])/g, "");
	ChngdChar1 = ChngdChar1.replace(/([0-9])/g, "");
	//ChngdChar1 = ChngdChar1.replace(/([`~!@#$%^&*()_+-=|\"':;?])/g, "");
	ChngdChar1 = ChngdChar1.replace(/([`~_+|\"'?])/g, "");
	ChngdChar1 = ChngdChar1.replace('{', '');
	ChngdChar1 = ChngdChar1.replace('[', '');
	ChngdChar1 = ChngdChar1.replace('}', '');
	ChngdChar1 = ChngdChar1.replace(']', '');
	//ChngdChar1 = ChngdChar1.replace('>', '');
	//ChngdChar1 = ChngdChar1.replace('<', '');
	//ChngdChar1 = ChngdChar1.replace(',', '');
	ChngdChar1 = ChngdChar1.replace('\\', '');
	//ChngdChar1 = ChngdChar1.replace('%', '');
	ChngdChar1 = ChngdChar1.replace('^', '');
	ChngdChar1 = ChngdChar1.replace('&', '');
	//ChngdChar1 = ChngdChar1.replace('#', '');
	ChngdChar1 = ChngdChar1.replace('$', '');
	//ChngdChar1 = ChngdChar1.replace('@', '');
	//ChngdChar1 = ChngdChar1.replace('(', '(');
	//ChngdChar1 = ChngdChar1.replace(')', '');
	ChngdChar1 = ChngdChar1.replace('*', '');
	//ChngdChar1 = ChngdChar1.replace('.', '.');
	var lastChar = ChngdChar1.charAt(ChngdChar1.length - 1);
	if(lastChar=='্')
	ChngdChar1=ChngdChar1.slice(0, -1);
	
	return ChngdChar1+hValue;
}



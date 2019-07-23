// JS Created By Vivek TIWARI for Mandating/restricting Hindi on Input field from the user
// If user types in English then it converts the letter to Hindi and alerts to change language if types in any other language except English or Hindi

/*
   How to integrate it on any page or/ how to use it on any input box 
   Hindi Typing is done on the basis of Hindi Keyboard Settings, so please refer the same
	Follow these Steps : -
	1. Include hindi.js on the page where you want to implement hindi restriction 
	   also check that jquery is included on the page or not if not then include
	   for e.g :- <script type="text/javascript" src="js/hindi.js"></script>
	2. call the method TextLangHindi(event,hinput,'hinput') by passing 3 parrameter to it as shown
	3. parameter 1 is event so pass it as written parameter two is input box id so pass input box id without single quotes, and 
	   pass input box id as 3rd parameter within single quotes
	4. for e.g :- <input type="text" onkeyup="TextLangHindi(event,hinput,'hinput')" id="hinput" ></input>

*/

//function to remove alphaNumeric characters and special characters from the string
function removeAlphaNumeric(input,hValue) {
	var ChngdChar1 = null;ChngdChar1 = input.replace(/([a-zA-Z])/g, "");ChngdChar1 = ChngdChar1.replace(/([0-9])/g, "");
	ChngdChar1 = ChngdChar1.replace(/([`~!@#$%^&*()_+-=|\"':;?])/g, "");ChngdChar1 = ChngdChar1.replace('{', '');
	ChngdChar1 = ChngdChar1.replace('[', '');ChngdChar1 = ChngdChar1.replace('}', '');ChngdChar1 = ChngdChar1.replace(']', '');
	ChngdChar1 = ChngdChar1.replace('>', '');ChngdChar1 = ChngdChar1.replace('\\', '');return ChngdChar1+hValue;
}

//this function to To detect if "Shift"
//or "Caps Lock" key was held down while pressing the key
function Shift_Key_pressed(e) 
{
	kc = e.which; // kc= Key Code  
	sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false); // sk= Shift Key
    //Capital letters, A to Z, have ASCII codes 65 to 90
    //a check to see if the ASCII code is between 65 and 90 and the shift key is pressed. 
    //we need also to do the same work if the ASCII code is between 97 (a) and 122 (z) and the
    // shift key is not pressed, because shifted letters are lower-case if Caps Lock is on.)
    if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) 
        return false; 
    else
        return true; 
}

// added By Vivek Tiwari to replace inputbox values entered by users in Hindi.
function TextLangHindi(e,input,inputId) {

	
	var engChk = false;
	var hndChk = false;
	var spclChk = false;
	//alert($("#"+inputId).val().slice(-1).charCodeAt(0));
	if($("#"+inputId).val().slice(-1)!= ""){
		var char = Number($("#"+inputId).val().slice(-1).charCodeAt(0));
		// a-z verification
		if(char>= 97 && char<= 122){
			engChk = true;
		}
		
		else if(char>= 65 && char<= 90){
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
	if(engChk || spclChk == true)
	{
		if(restrictCopyPaste(e,input))
		{
			var hValue = null;var unicode = e.which;var prvChar = null;var updtdChar = null;
		    switch (unicode) 
		    { 
						case 65: if (Shift_Key_pressed(e)) {hValue = 'ओ';} else {hValue= 'ो';}
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 66: if (Shift_Key_pressed(e)) {hValue= 'ऴ';} else {hValue= 'व';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 67: if (Shift_Key_pressed(e)) {hValue= 'ण';} else {hValue= 'म';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 68: if (Shift_Key_pressed(e)) {hValue= 'अ';} else {hValue= '्';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 69: if (Shift_Key_pressed(e)) {hValue= 'आ';} else {hValue= 'ा';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 70: if (Shift_Key_pressed(e)) {hValue= 'इ';} else {hValue= 'ि';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 71: if (Shift_Key_pressed(e)) {hValue= 'उ';} else {hValue= 'ु';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 72: if (Shift_Key_pressed(e)) {hValue= 'फ';} else {hValue= 'प';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 73: if (Shift_Key_pressed(e)) {hValue= 'घ';} else {hValue= 'ग';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 74: if (Shift_Key_pressed(e)) {hValue= 'ऱ';} else {hValue= 'र';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 75: if (Shift_Key_pressed(e)) {hValue= 'ख';} else {hValue= 'क';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 76: if (Shift_Key_pressed(e)) {hValue= 'थ';} else {hValue= 'त';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 77: if (Shift_Key_pressed(e)) {hValue= 'श';} else {hValue= 'स';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 78: if (Shift_Key_pressed(e)) {hValue= 'ळ';} else {hValue= 'ल';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 79: if (Shift_Key_pressed(e)) {hValue= 'ध';} else {hValue= 'द';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 80: if (Shift_Key_pressed(e)) {hValue= 'झ';} else {hValue= 'ज';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 81: if (Shift_Key_pressed(e)) {hValue= 'औ';} else {hValue= 'ौ';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 82: if (Shift_Key_pressed(e)) {hValue= 'ई';} else {hValue= 'ी';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 83: if (Shift_Key_pressed(e)) {hValue= 'ए';} else {hValue= 'े';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 84: if (Shift_Key_pressed(e)) {hValue= 'ऊ';} else {hValue= 'ू';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 85: if (Shift_Key_pressed(e)) {hValue= 'ङ';} else {hValue= 'ह';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 86: if (Shift_Key_pressed(e)) {hValue= 'ऩ';} else {hValue= 'न';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 87: if (Shift_Key_pressed(e)) {hValue= 'ऐ';} else {hValue= 'ै';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 88: if (Shift_Key_pressed(e)) {hValue= 'ँ';} else {hValue= 'ं';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 89: if (Shift_Key_pressed(e)) {hValue= 'भ';} else {hValue= 'ब';}   
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
								 
						case 90: if (Shift_Key_pressed(e)) {hValue= 'ऎ';} else {hValue= 'ॆ';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						// numbers key cases
						case 48: if ($("#"+inputId).val().slice(-1) == ')') {hValue= ')';} else {hValue= '०';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 49: if ($("#"+inputId).val().slice(-1) == '!') {hValue= 'ऍ';} else {hValue= '१';} 
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 50: if ($("#"+inputId).val().slice(-1) == '@') {hValue= 'ॅ';} else {hValue= '२';} 
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 51: if ($("#"+inputId).val().slice(-1) == '#') {hValue= '्र';} else {hValue= '३';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 52: if ($("#"+inputId).val().slice(-1) == '$') {hValue= 'र्';} else {hValue= '४';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 53: if ($("#"+inputId).val().slice(-1) == '%') {hValue= 'ज्ञ';} else {hValue= '५';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 54: if ($("#"+inputId).val().slice(-1) == '^') {hValue= 'त्र';} else {hValue= '६';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 55: if ($("#"+inputId).val().slice(-1) == '&') {hValue= 'क्ष';} else {hValue= '७';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 56: if ($("#"+inputId).val().slice(-1) == '*') {hValue= 'श्र';} else {hValue= '८';} 
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
					
						case 57: if ($("#"+inputId).val().slice(-1) == '(') {hValue= '(';} else {hValue= '९';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						// numbers ends
						
						case 59: if ($("#"+inputId).val().slice(-1) == ':') {hValue= 'छ';} else {hValue= 'च';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 61: if ($("#"+inputId).val().slice(-1) == '+') {hValue= 'ऋ';} else {hValue= 'ृ';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 173: if (Shift_Key_pressed(e)) {hValue= 'ः';} else {hValue= '-';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 188: if ($("#"+inputId).val().slice(-1) == '<') {hValue= 'ष';} else {hValue= ',';} 
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 190: if ($("#"+inputId).val().slice(-1) == '>') {hValue= '।';} else {hValue= '.';} 
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 191: if ($("#"+inputId).val().slice(-1) == '?'){ hValue= 'य़'; } else {hValue= 'य';}
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 192: if ($("#"+inputId).val().slice(-1) == '~') {hValue= 'ऒ';} else {hValue= 'ॊ';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 219: if ($("#"+inputId).val().slice(-1) == '{') {hValue= 'ढ';} else {hValue= 'ड';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 220: if ($("#"+inputId).val().slice(-1) == '|') {hValue= 'ऑ';} else {hValue= 'ॉ';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 221: if ($("#"+inputId).val().slice(-1) == '}') {hValue= 'ञ';} else {hValue= '़';}  
						prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
						
						case 222: 
							if ($("#"+inputId).val().slice(-1)==('"')) {hValue= 'ठ';} else {hValue= 'ट';}  
							prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,hValue);input.value = updtdChar;
						return false; break;
		    	}
	    	}else{input.value = "";}
	}else{
		
		var hValue = null;var unicode = e.which;var prvChar = null;var updtdChar = null;
		alert(unicode);
		prvChar = input.value;updtdChar = removeAlphaNumeric(prvChar,'');input.value = updtdChar;
		
	}
	
	if($("#"+inputId).val().slice(-1)!= "" && spclChk == false){
		if(!engChk && hndChk == false && spclChk == false){
			alert("कृपया की बोर्ड भाषा परिवर्तित करें !");
			$("#"+inputId).val("");
		}
	}
}

function restrictCopyPaste(e)
{if(e.keyCode == '17' || e.Which == '3'){return false;}else return true;}


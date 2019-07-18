function getSymbolImage(id,idvalue,flag){
	//by ashish.kumar(8-2-2016) to symbol images according to symbol value
	//flag will be pass only in the case of addowner on qc page..in addrow method
	//alert("getSymbolImage");
	var div="";
	var div1="";
	var div2="";
	var value = "";
	var divArr = [];
	if(id != "symbol" && id != "symbol1"){
		  value = id.split("[").pop().split("]").shift();
	}
	
	if(id.startsWith("frameOneMsOwnerDEList")){

		 divArr.push("ownerOne["+value+"]Img","ownerOne["+value+"]Img1","ownerOne["+value+"]Img2","ownerOne["+value+"]Img3","ownerOne["+value+"]Img4","ownerOne["+value+"]Img5","ownerOne["+value+"]Img6","ownerOne["+value+"]Img7");
			
	} else if(id.startsWith("frameTwoMsOwnerDEList")){
		
		 divArr.push("ownerTwo["+value+"]Img","ownerTwo["+value+"]Img1","ownerTwo["+value+"]Img2","ownerTwo["+value+"]Img3","ownerTwo["+value+"]Img4","ownerTwo["+value+"]Img5","ownerTwo["+value+"]Img6","ownerTwo["+value+"]Img7");

	}else if(id.startsWith("ownerSymbol1")){
		
		 divArr.push("ownerQC["+value+"]Img","ownerQC["+value+"]Img1","ownerQC["+value+"]Img2","ownerQC["+value+"]Img3","ownerQC["+value+"]Img4","ownerQC["+value+"]Img5","ownerQC["+value+"]Img6","ownerQC["+value+"]Img7");
	} 
	
	if(id.startsWith("frameOneOldMsOwnerDEList")){

		 divArr.push("ownerOneold["+value+"]Img","ownerOneold["+value+"]Img1","ownerOneold["+value+"]Img2","ownerOneold["+value+"]Img3","ownerOneold["+value+"]Img4","ownerOneold["+value+"]Img5","ownerOneold["+value+"]Img6","ownerOneold["+value+"]Img7");
			
	} else if(id.startsWith("frameTwoOldMsOwnerDEList")){
		
		 divArr.push("ownerTwoold["+value+"]Img","ownerTwoold["+value+"]Img1","ownerTwoold["+value+"]Img2","ownerTwoold["+value+"]Img3","ownerTwoold["+value+"]Img4","ownerTwoold["+value+"]Img5","ownerTwoold["+value+"]Img6","ownerTwoold["+value+"]Img7");

	}else if(id.startsWith("oldownerDetails")){
		
		 divArr.push("ownerQCold["+value+"]Img","ownerQCold["+value+"]Img1","ownerQCold["+value+"]Img2","ownerQCold["+value+"]Img3","ownerQCold["+value+"]Img4","ownerQCold["+value+"]Img5","ownerQCold["+value+"]Img6","ownerQCold["+value+"]Img7");
	} 
	
	
	
	else if(id == "symbol"){
		//owner in de1,de2
	  //divArr.push("img","img1","img2","img3","img4","img5","img6","img7","img8","img9");
		divArr.push("img","img1","img2","img3","img4","img5","img6","img7");
	
	}
	else if(id == "Nsymbol"){
		//owner in de1,de2
	/* 	
		 div="img";
		 div1="img1";
		 div2="img2";
		  */
		// divArr.push("img","img1","img2","img3","img4","img5","img6","img7","img8","img9");
		divArr.push("Nimg","Nimg1","Nimg2","Nimg3","Nimg4","Nimg5","Nimg6","Nimg7");
				
		/*  alert("length"+divArr.length); */
	/* 	 for(var i = 0 ; i < divArr.length; i++){
			 alert(divArr[i]);
		 } */
	}else if(id == "symbol1"){
		//plot in de1,de2
		/*  div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2"; */
		// divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7","plotImg8","plotImg9");
		 divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7");
	}
	else if(id.startsWith("addrowSymbolID@")){
		//plot in de1,de2
		/*  div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2"; */
		// divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7","plotImg8","plotImg9");
		 var count = id.split("@")[1];
		 divArr.push("addrowSymbol@"+count,"addrowSymbol1@"+count,"addrowSymbol2@"+count,"addrowSymbol3@"+count,"addrowSymbol4@"+count,"addrowSymbol5@"+count,"addrowSymbol6@"+count,"addrowSymbol7@"+count);
	}
	else if(id.startsWith("addrowNSymbolID@")){
		//plot in de1,de2
		/*  div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2"; */
		// divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7","plotImg8","plotImg9");
		 var count = id.split("@")[1];
		 divArr.push("addrowNSymbol@"+count,"addrowNSymbol1@"+count,"addrowNSymbol2@"+count,"addrowNSymbol3@"+count,"addrowNSymbol4@"+count,"addrowNSymbol5@"+count,"addrowNSymbol6@"+count,"addrowNSymbol7@"+count);
	}
	

	else if(id.startsWith("addrowPlotSymbolID@")){
		//plot in de1,de2
		/*  div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2"; */
		// divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7","plotImg8","plotImg9");
		 var count = id.split("@")[1];
		 divArr.push("addrowPlotSymbol@"+count,"addrowPlotSymbol1@"+count,"addrowPlotSymbol2@"+count,"addrowPlotSymbol3@"+count,"addrowPlotSymbol4@"+count,"addrowPlotSymbol5@"+count,"addrowPlotSymbol6@"+count,"addrowPlotSymbol7@"+count);
	} else if (id.startsWith("frameOneMsPlotDeList") ){
/* 		 div="plotOne["+value+"]Img";
		 div1="plotOne["+value+"]Img1";
		 div2="plotOne["+value+"]Img2"; */
		 divArr.push("plotOne["+value+"]Img","plotOne["+value+"]Img1","plotOne["+value+"]Img2","plotOne["+value+"]Img3","plotOne["+value+"]Img4","plotOne["+value+"]Img5","plotOne["+value+"]Img6","plotOne["+value+"]Img7");

	}
	else if (id.startsWith("frameTwoMsPlotDeList") ){
		/*  div="plotTwo["+value+"]Img";
		 div1="plotTwo["+value+"]Img1";
		 div2="plotTwo["+value+"]Img2"; */
		 divArr.push("plotTwo["+value+"]Img","plotTwo["+value+"]Img1","plotTwo["+value+"]Img2","plotTwo["+value+"]Img3","plotTwo["+value+"]Img4","plotTwo["+value+"]Img5","plotTwo["+value+"]Img6","plotTwo["+value+"]Img7");


	}
	else if (id.startsWith("plotSymbol1") ){
	/* 	 div="plotQc["+value+"]Img";
		 div1="plotQc["+value+"]Img1";
		 div2="plotQc["+value+"]Img2"; */
		 divArr.push("plotQc["+value+"]Img","plotQc["+value+"]Img1","plotQc["+value+"]Img2","plotQc["+value+"]Img3","plotQc["+value+"]Img4","plotQc["+value+"]Img5","plotQc["+value+"]Img6","plotQc["+value+"]Img7");

	} 

 osvalue=idvalue;
 
  var symbolCount = 0;
  
   	/*  for(var i = 0 ; i < divArr.length; i++){
	 alert(divArr[i]);
	}  */

 if(osvalue !="")
 { 
	 var osvalue= converBanglaToNumeric(osvalue);
 

	for(var i = 0 ; i < osvalue.length;){
		 if((i ==0 || i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21) && osvalue.charAt(i) == '#' ){
			 var first  = parseInt(i)+1;
			 var last = parseInt(first)+2;
			 var imageNo = osvalue.substring(first, last);
			 if(flag == "addownerpopAddrow"){
				 window.opener.document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 }else{
				 document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 }
			
			 symbolCount++;
		 }else if((i ==0 || i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21) && osvalue.charAt(i) == '%' ){
			 var first  = parseInt(i)+1;
			 var last = parseInt(first)+2;
			 var imageNo = osvalue.substring(first, last);
			 var imageNo = "1"+imageNo;
			 if(flag == "addownerpopAddrow"){
				 window.opener.document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 }else{
				 document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 }
			 //document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 symbolCount++;
		}
		  i = i+3;
	}
	
		
	
	
 
	
 }else{
 		for(var i = 0 ; i <divArr.length; i++){
 			
 			/* if(flag == "addownerpopAddrow"){
				 window.opener.document.getElementById(divArr[i]).innerHTML = "<span id="+divArr[i]+" class='symbolImg'></span>";
			 }else{
				 document.getElementById(divArr[i]).innerHTML = "<span id="+divArr[i]+" class='symbolImg'></span>";
			 }*/
 			
 			 if(flag == "addownerpopAddrow"){
				 window.opener.document.getElementById(divArr[i]).innerHTML = "";
			 }else{
				 document.getElementById(divArr[i]).innerHTML = "";
			 }
 			
 		}
 		
	 	
 	}
 	
	for(var j = symbolCount ; j <divArr.length; j++){
		
		 if(flag == "addownerpopAddrow"){
			 window.opener.document.getElementById(divArr[j]).innerHTML = "";
		 }else{
			 document.getElementById(divArr[j]).innerHTML = "";
		 }
		
		 //document.getElementById(divArr[j]).innerHTML = "<span id="+divArr[j]+" class='symbolImg'></span>";
	}
}	

function getFileData(obj){
	var file = obj.files[0];  
	   var filename = file.name;
document.getElementById("file").value=filename;

}

function caseNoandDoc(){
var docn=document.getElementById("file").value;
var caseno=document.getElementById("caseNo").value;	

if(docn=='' && caseno==''){
alert("Please Add Document and/or Case No. Before Submit.");

return false;
}
return true;
}
function clearPlotDetails() {
	document.getElementById('plotNo').value = "";
	document.getElementById('six').value = "";
	document.getElementById('six1').value = "";
	document.getElementById('seven').value = "";
	document.getElementById('symbol1').value = "";
	document.getElementById('eight').value = "";
	document.getElementById('eight1').value = "";
	document.getElementById('agricultureTypeid').value = "0";
	document.getElementById('nonagricultureTypeid').value = "0";
	document.getElementById('symbol1').disabled = false;
	document.getElementById('seven').disabled = false;
	 getSymbolImage('symbol1',"");
}
function RemoveZero(obj) {
		var chks = document.all(obj).value;
	if(chks !=""){
		 var value = parseFloat(converBanglaToNumeric(chks));
		 if( value <= 0 || chks=="." ){
			 document.getElementById(obj).value = "";
			 return false;
		 }
	}
	
	/*  chks = chks.replace(/^০+/, "");
	 document.getElementById(obj).value= chks;
	 if(chks != ""){
		 var val = parseFloat(chks);
		 if( val <= 0){
			 document.getElementById(obj).value = "";
			 return false;
		 }
	 } */
}
function isEnterNumber3(evt,action) {
	var key;
	var keychar;
	if (window.event)
		key = window.event.keyCode;
	else if (e)
		key = e.which;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	var bij = false;
	action  = parseInt(action);
	if(action != 11){
		 bij=Bijoysoft(evt,'1');
	}else{
		 bij=Bijoysoft(evt,'2');
	}
	
	if(bij==true){
/* Numeric and Forward Slash allow */
	if(action ==1){
	 if ((("০১২৩৪৫৬৭৮৯/").indexOf(keychar) > -1))
		return true;
	else {
		 alert("Please enter in  Numeric.");
		return false;
	}
	}
/*Alpha Numeric and Forward Slash allow */
	if(action ==2){
		if ((("০১২৩৪৫৬৭৮৯/িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in Alpha Numeric.");
			return false;
		}
		}
/*Only Numeric allow */
	if(action ==3){
		if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in  Numeric.");
			return false;
		}
		}
/*Alpha Numeric with Comma allow */
	if(action ==4){
		if ((("০১২৩৪৫৬৭৮৯,িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in Alpha Numeric.");
			return false;
		}
		}
/*Numeric with Dot allow */
	if(action ==5){
		if ((("০১২৩৪৫৬৭৮৯.").indexOf(keychar) > -1))
			{
			return true;
			}
		else {
			 alert("Please enter in  Numeric.");
			return false;
		}
		}
		
/* Numeric and Hash allow */
	if(action ==6){
	 if ((("০১২৩৪৫৬৭৮৯#").indexOf(keychar) > -1))
		 
		return true;
	else {
		 alert("Please enter in  Numeric.");
		return false;
	}
	}
	
	if(action ==7){
		 if ((("০১২৩৪৫৬৭৮৯!৥#%*();’,./[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			 {
			 alert("Please enter in  Numeric.");
			return false;
			 }
		else {
			
			return true;
		}
		 
		}
	if(action ==8){
		 if ((("!৥#%*()[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			 {
			 alert("Please enter in Alpha Numeric.");
			return false;
			 }
		else {
			
			return true;
		}
		 
		}
	
	if(action ==9){
		 if ((("!৥#%*()[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			 {
			 alert("Please enter in Alpha Numeric.");
			return false;
			 }
		else {
			
			return true;
		}
		 
		}
	
	if(action ==10){
		 if ((("!৥#%*();’,./[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			 {
		 alert("Please enter in Alpha Numeric.");
			return false;
			 }
		else {
			
			return true;
		}
		 
		}
	
	if(action ==11){
		 if ((("৥*();’,.[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			 {
		 alert("enter in numeric");
			return false;
			 }
		else {
			
			return true;
		}
		 
		}
	
 		return false;
} else
	{
	return false;
	}
}

function Bijoysoft(evt,action) { 
	var key;
	var keychar;
	if (window.event)
		key = window.event.keyCode;
	else if (e)
		key = e.which;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
/* Numeric and Forward Slash allow */
	if(action ==1){
	 if ((("!৥#%*();’[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
		 alert("ILFS says:Please Run Bijoy Bangla S/W and select Unicode for typing.");
		return false;
	 }
	else {
		
		return true;
	}
	}
	else if(action ==2){
		 if ((("৥*();’[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
			 alert(" ILFS says:Please Run Bijoy Bangla S/W and select Unicode for typing.");
			return false;
		 }
		else {
			
			return true;
		}
		}
	return false;
}

function converBanglaToNumeric(val){
	var oldData = val;
	var newData="@";
	
	for(var i=0; i<oldData.length;i++)
	{
		switch(oldData.charAt(i))
		{
		case '০': 
			newData = newData.concat("0") ; 
			break;
		case '১': 
			newData = newData.concat("1") ;
			break;
		case '২': 
			newData = newData.concat("2") ;
			break;
		case '৩': 
			newData = newData.concat("3") ;
			break;
		case '৪': 
			newData = newData.concat("4") ;
			break;
		case '৫': 
			newData = newData.concat("5") ;
			break;
		case '৬': 
			newData = newData.concat("6") ;
			break;
		case '৭': 
			newData = newData.concat("7") ;
			break;
		case '৮':
			newData = newData.concat("8") ;
			break; 
		case '৯':
			newData = newData.concat("9") ;
			break;
		case '.':
			newData = newData+".";
			break;
		case '#':
			newData = newData+"#";
			break;
		 default :
				newData = newData+oldData.charAt(i);
			 break;
	
	}
	

}
	var finaldata = "";
	if(newData.length > 1){
		finaldata = newData.slice( 1 );
	}
	return finaldata;
}	
function checkSymbolDisable(id,action){
	var value= id.value;
	if(value == ""){
	if(action ==1){
	document.getElementById("ownershare").disabled  = false;
	document.getElementById("ownershare").value = "";
	}
	if(action ==2){
	document.getElementById("seven").disabled  = false;
	document.getElementById("seven").value = "";
	}	
	              }
	}

function disableShare(id,dis){
	var osvalue=dis.value;
	if(osvalue !=""){
		var flag = checkSymbolCorrect(osvalue);
		if(!flag){
			alert("Please put % or #  only in the 1,4,7,10,13,16,19,22 position  and put value in the range of 00-20 for % and in the range of 00-22 for #");
			document.getElementById(id).focus();
			return false;
		}
		
 			var len = dis.value.length;
 		/* 	if(len != 3 && len != 6 && len != 9 && len != 12  && len != 15 && len != 18 && len != 21 && len != 24 && len != 27 && len != 30){
	 	 */	 	
 			if(len != 3 && len != 6 && len != 9 && len != 12 && len != 15 && len != 18 && len != 21 && len != 24){
 		 		alert("Invalid symbol value");
 				document.getElementById(id).focus();
 				return false;	
				}
 			
 		
 			 document.getElementById("ownershare").disabled = true;
 			 document.getElementById("ownershare").value = ""; 
 			 //By Amit
 			/*document.getElementById("Nownershare").disabled = true;
			 document.getElementById("Nownershare").value = ""; */
 			 
 			getSymbolImage(dis.id,dis.value);
	}
	else 
	 {
	 document.getElementById("ownershare").value = "";
	 document.getElementById("ownershare").disabled = false; 
	
	 
	 getSymbolImage(dis.id,dis.value);
	 }	
 }

function NumberLessThenOnePlot(id) {
	var value = document.getElementById(id).value;
	var value1 = converBanglaToNumeric(value);
	if (value1 > 1) {
		alert("ILFS Technologies :Col7/Khatian Plot Part Must Not be greater then 1");
		document.getElementById(id).focus();
		return false;
	}
}


function getShareFromSymbol(ownerSymbol){
	//by ashish.kumar(8-2-2016) to calculate the value from symbol bangla value
	debugger;
	 var temp = [];
	 var osvaluesplit=[];
	 ownerSymbol = converBanglaToNumeric(ownerSymbol);
	 osvaluesplit=ownerSymbol.slice(1).split("#");
	  for(var i=0;i<osvaluesplit.length;i++){
		 if(i==0){
			 var first=osvaluesplit[i];
			 first= parseFloat((first)/16);
			 temp.push(first);
		 }
		 else  if(i==1){
			 var first=osvaluesplit[i];
			 first= parseFloat(((first)/20)/16);
			 temp.push(first);
		 } 
		 else if(i==2){
			 var first=osvaluesplit[i];
			 first= parseFloat((((first)/20)/20)/16);
			 temp.push(first);
			 }
		}
	  
	  var total = parseFloat(0);
	  for(var j = 0 ; j < temp.length; j++ )
		  {
		  total = total + parseFloat(temp[j]);   
		  }
	  total  = total.toFixed(4);
	  total = converToBanglaNumeric(total);
	  return total;
	}	
function converToBanglaNumeric(val){
	var oldData = val;
	var newData="@";
	
	for(var i=0; i<oldData.length;i++)
	{
		switch(oldData.charAt(i))
		{
		case '0': 
			newData = newData+"০"; 
			break;
		case '1': 
			newData = newData+"১"; 
			break;
		case '2': 
			newData = newData+"২"; 
			break;
		case '3': 
			newData = newData+"৩"; 
			break;
		case '4': 
			newData = newData+"৪"; 
			break;
		case '5': 
			newData = newData+"৫"; 
			break;
		case '6': 
			newData = newData+"৬";
			break;
		case '7': 
			newData = newData+"৭";
			break;
		case '8':
			newData = newData+"৮";
			break; 
		case '9':
			newData = newData+"৯";
			break;
		case '.':
			newData = newData+".";
			break;
		
		 default :
			newData = newData+oldData.charAt(i);
		 break;
	
	}
	

}
	var finaldata = "";
	if(newData.length > 1){
		finaldata = newData.slice( 1 );
	}
	return finaldata;
}

function checkSymbolOwnerShareDisable(id,action){
	var value= id.value;
	if(value == ""){
	if(action ==1){
	document.getElementById("symbol").disabled  = false;
	}
	if(action ==2){
	document.getElementById("symbol1").disabled  = false;
	document.getElementById("symbol").disabled  = false;
	}	
	              }
	}
function disable()
{
	  if(document.getElementById('ownershare').value!="" && document.getElementById('symbol').value!="")
		  {
	 document.getElementById("symbol").disabled = false;
		  }
	  else if(document.getElementById('ownershare').value!="" && document.getElementById('symbol').value=="")
		  {
		  document.getElementById("symbol").disabled = true;
		  }
	  else
		  {
		  document.getElementById("symbol").disabled = false;
		  }
}
function keypressOnwerSymbol(evt,dis) {
	//by ashish..30 max number enter..symbol all with hash  9-3-2016
	//modified..introduce pipe as second symbol.. 10-3-2016
	
	
	var key;
	var keychar;
	if (window.event)
		key = window.event.keyCode;
	else if (e)
		key = e.which;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	var len = dis.value.length;

	
	 if ((("০১২৩৪৫৬৭৮৯#%").indexOf(keychar) == -1))
		 {
		 alert("Please Enter in Numeric");
			return false;
		}
}
function checkSymbolCorrect(value){
	
	var flag = true;

	var len = value.length;
	//first symbol
	
	

	
	/* if(len >= 1 && value.charAt(0) != '#' && value.charAt(0) != '%' ){
	   	flag = false;
	}
	if(len >= 2 && value.charAt(1) != '০' && value.charAt(1) != '১' && value.charAt(1) != '২' ){
	   	flag = false;
	}
	if(len >= 3 && value.charAt(0) == '#' && ((value.charAt(1) == '২'  && value.charAt(2) != '০' && value.charAt(2) != '১' && value.charAt(2) != '২' ) || value.charAt(2) == '#' || value.charAt(2) == '%' )){
	   	flag = false;   // for #21 and #22
	}	
	if(len >= 3 && value.charAt(0) == '%' && ((value.charAt(1) == '২'  && value.charAt(2) != '০') || value.charAt(2) == '#' || value.charAt(2) == '%' )){
	   	flag = false;  // only %20 max
	}
	
	//second symbol
	if(len >= 4 && value.charAt(3) != '%' && value.charAt(3) != '#'){
	   	flag = false;
	}
	if(len >= 5 && ((value.charAt(4) != '০' && value.charAt(4) != '১' && value.charAt(4) != '২' )|| value.charAt(4) == '#' || value.charAt(4) == '%') ){
	   	flag = false;
	}
	if(len >= 6 && value.charAt(3) == '#' && ((value.charAt(4) == '২'  && value.charAt(5) != '০' && value.charAt(5) != '১' && value.charAt(5) != '২') || value.charAt(5) == '#' || value.charAt(5) == '%' )){
	   	flag = false;
	}
	if(len >= 6 && value.charAt(3) == '%' && ((value.charAt(4) == '২'  && value.charAt(5) != '০'  ) || value.charAt(5) == '#' || value.charAt(5) == '%' )){
	   	flag = false;
	}
	
	//third symbol
	if(len >= 7 && value.charAt(6) != '#' && value.charAt(6) != '%'){
	   	flag = false;
	}
	if(len >= 8 && value.charAt(7) != '০' && value.charAt(7) != '১' && value.charAt(7) != '২' ){
	   	flag = false;
	}
	if(len >= 9  && value.charAt(6) == '#' && ((value.charAt(7) == '২'  && value.charAt(8) != '০'  && value.charAt(8) != '১' &&  value.charAt(8) != '২') || value.charAt(8) == '#' || value.charAt(8) == '%' )){
	   	flag = false;
	}
	if(len >= 9  && value.charAt(6) == '%' && ((value.charAt(7) == '২'  && value.charAt(8) != '০') || value.charAt(8) == '#' || value.charAt(8) == '%' )){
	   	flag = false;
	}
	
	////4th symbol
	if(len >= 10 && value.charAt(9) != '#' && value.charAt(9) != '%'){
	   	flag = false;
	}
	if(len >= 11 && value.charAt(10) != '০' && value.charAt(10) != '১' && value.charAt(10) != '২' ){
	   	flag = false;
	}
	if(len >= 12 && value.charAt(9) == '#' ((value.charAt(10) == '২'  && value.charAt(11) != '০' && value.charAt(11) != '১' &&  value.charAt(11) != '২' ) || value.charAt(11) == '#' || value.charAt(11) == '%' )){
	   	flag = false;
	}
	if(len >= 12 && value.charAt(9) == '%' ((value.charAt(10) == '২'  && value.charAt(11) != '০') || value.charAt(11) == '#' || value.charAt(11) == '%' )){
	   	flag = false;
	}
	
	//5th symbol
	if(len >= 13 && value.charAt(12) != '#' && value.charAt(12) != '%'){
	   	flag = false;
	}
	if(len >= 14 && value.charAt(13) != '০' && value.charAt(13) != '১' && value.charAt(13) != '২' ){
	   	flag = false;
	}
	if(len >= 15 && value.charAt(12) == '#' ((value.charAt(13) == '২'  && value.charAt(14) != '০' && value.charAt(14) != '১' &&  value.charAt(14) != '২' ) || value.charAt(14) == '#' || value.charAt(14) == '%' )){
	   	flag = false;
	}
	if(len >= 15 && value.charAt(12) == '%' ((value.charAt(13) == '২'  && value.charAt(14) != '০') || value.charAt(14) == '#' || value.charAt(14) == '%' )){
	   	flag = false;
	}

	//6th symbol
	if(len >= 16 && value.charAt(15) != '#' && value.charAt(15) != '%'){
	   	flag = false;
	}
	if(len >= 17 && value.charAt(16) != '০' && value.charAt(16) != '১' && value.charAt(16) != '২' ){
	   	flag = false;
	}
	if(len >= 18 && value.charAt(15) == '#' ((value.charAt(16) == '২'  && value.charAt(17) != '০' && value.charAt(17) != '১' &&  value.charAt(17) != '২' ) || value.charAt(17) == '#' || value.charAt(17) == '%' )){
	   	flag = false;
	}
	if(len >= 18 && value.charAt(15) == '%' ((value.charAt(16) == '২'  && value.charAt(17) != '০') || value.charAt(17) == '#' || value.charAt(17) == '%' )){
	   	flag = false;
	}
	

	//7th symbol
	if(len >= 19 && value.charAt(18) != '#' && value.charAt(18) != '%'){
	   	flag = false;
	}
	if(len >= 20 && value.charAt(19) != '০' && value.charAt(19) != '১' && value.charAt(19) != '২' ){
	   	flag = false;
	}
	if(len >= 21 && value.charAt(18) == '#' ((value.charAt(19) == '২'  && value.charAt(20) != '০' && value.charAt(20) != '১' &&  value.charAt(20) != '২' ) || value.charAt(20) == '#' || value.charAt(20) == '%' )){
	   	flag = false;
	}
	if(len >= 21 && value.charAt(18) == '%' ((value.charAt(19) == '২'  && value.charAt(20) != '০') || value.charAt(20) == '#' || value.charAt(20) == '%' )){
	   	flag = false;
	}
	
	//8th symbol
	if(len >= 22 && value.charAt(21) != '#' && value.charAt(21) != '%'){
	   	flag = false;
	}
	if(len >= 23 && value.charAt(22) != '০' && value.charAt(22) != '১' && value.charAt(22) != '২' ){
	   	flag = false;
	}
	if(len >= 24 && value.charAt(21) == '#' ((value.charAt(22) == '২'  && value.charAt(23) != '০' && value.charAt(23) != '১' &&  value.charAt(23) != '২' ) || value.charAt(23) == '#' || value.charAt(23) == '%' )){
	   	flag = false;
	}
	if(len >= 24 && value.charAt(21) == '%' ((value.charAt(22) == '২'  && value.charAt(23) != '০') || value.charAt(23) == '#' || value.charAt(23) == '%' )){
	   	flag = false;
	} */
		for(var i = 0 ; i < len ;){
				
		
		if( value.charAt(i) != '#' && value.charAt(i) != '%' ){
		   	flag = false;
		}
		if( value.charAt(i+1) != '০' && value.charAt(i+1) != '১' && value.charAt(i+1) != '২' ){
		   	flag = false;
		}
		if( value.charAt(i) == '#' && ((value.charAt(i+1) == '২'  && value.charAt(i+2) != '০' && value.charAt(i+2) != '১' && value.charAt(i+2) != '২' ) || value.charAt(i+2) == '#' || value.charAt(i+2) == '%' )){
		   	flag = false;   // for #21 and #22
		}	
		if(value.charAt(i) == '%' && ((value.charAt(i+1) == '২'  && value.charAt(i+2) != '০') || value.charAt(i+2) == '#' || value.charAt(i+2) == '%' )){
		   	flag = false;  // only %20 max
		}
		
	i = i+3;	
	}
	return flag;
}

function changeOnOwnerShareTye(dis){
	var value = dis.value;
	if(value == "3"){
		document.getElementById("ownershare").disabled  = true;
		document.getElementById("ownershare").value  = "";
		document.getElementById("symbol").disabled  = true;
		document.getElementById("symbol").value  = "";
	}else{
		document.getElementById("ownershare").disabled  = false;
		document.getElementById("symbol").disabled  = false;
	    document.getElementById("ownershare").value = "";
		document.getElementById("symbol").value = ""; 
	/* 	 div="img";
		 div1="img1";
		 div2="img2";
		 div3="img3";
	 	 document.getElementById(div).innerHTML="<span id="+div+" class='symbolImg'></span>";
		 document.getElementById(div1).innerHTML="<span id="+div1+" class='symbolImg'></span>";
		 document.getElementById(div2).innerHTML="<span id="+div2+" class='symbolImg'></span>";
		 document.getElementById(div3).innerHTML="<span id="+div3+" class='symbolImg'></span>";
	 */	 getSymbolImage('symbol',"");
		 
	}
}
function disableShare1(id,dis){
	var osvalue=dis.value;
	if(osvalue !=""){
		var flag = checkSymbolCorrect(osvalue);
		//var flag = (osvalue);
		if(!flag){
			alert("Please put % or #  only in the 1,4,7,10,13,16,19,22 position  and put value in the range of 00-20 for % and in the range of 00-22 for #");
				document.getElementById(id).focus();
			return false;
		}
		 	
			var len = dis.value.length;
			if(len != 3 && len != 6 && len != 9 && len != 12 && len != 15 && len != 18 && len != 21 && len != 24){
 			/* if(len != 3 && len != 6 && len != 9 && len != 12  && len != 15 && len != 18 && len != 21 && len != 24 && len != 27 && len != 30){
 		 		 
 		 */		alert("Invalid symbol value");
 				document.getElementById(id).focus();
 				return false;	
				}
 			
 			/* var share =  getShareFromSymbol(osvalue);
	 		  var  numshare = parseFloat(converBanglaToNumeric(share));
	 			  if(numshare > 1.000){
	 				  alert("Owner share must be less then 1");
	 				  document.getElementById(id).focus();
	 				  return false;
	 			  }	  
	 		 */	document.getElementById("seven").disabled = true;
	 			document.getElementById("seven").value = ""; 
	 			getSymbolImage(dis.id,dis.value);
		}
		else 
	 	{
		 document.getElementById("seven").value = "";
		 document.getElementById("seven").disabled = false; 
		 getSymbolImage(dis.id,dis.value);
		 }			 
 }


function adjplotnum(obj) { 
	debugger;
	var chks = document.all(obj).value;
	if(chks !=""){
	var adjplotno = document.getElementById("AdjplotNo").value;
	adjplotno = converBanglaToNumeric(adjplotno);
	var plotno = document.getElementById("plotNo").value;
	plotno = converBanglaToNumeric(plotno);
	if(adjplotno == plotno){
		alert("ILFS Technologies: Adjacent plot No and Col4 should not Same.");
		  document.getElementById("plotNo").focus(); 
		  document.getElementById("agricultureTypeid").selectedIndex=0;
		  document.getElementById("agricultureTypeid").disabled=true;
		  document.getElementById("nonagricultureTypeid").selectedIndex=0;
		  document.getElementById("nonagricultureTypeid").disabled=true;
		  
	    return false;
	  
	}else{
		
		 document.getElementById("agricultureTypeid").disabled=false;
		 document.getElementById("nonagricultureTypeid").disabled=false;
		 return true;
	}
	
	}
}
function reloadForm(url,khatianId,khatianTypeId,requestId){
	 if (confirm("Do you want to encode again?") == true) {
	alert(requestId);
	 document.getElementById("khatianid").value=khatianId;
	 document.getElementById("khatianTypeId").value=khatianTypeId;
	 document.getElementById("requestid").value=requestId;
				document.saveform.action=url;
				document.saveform.submit();
	 }else 
		 self.close();

	}
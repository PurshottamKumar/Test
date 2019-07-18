
function letternumber(e) {
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
	// control keys
	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
			|| (key == 27))
		return true;
	// alphas and numbers
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789 ").indexOf(keychar) > -1))
		return true;
	else {
		alert("Special Characters are not allowed.");
		return false;
	}
	return false;
}





// by ajay yadav
function letternumberMobile(e) {
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
	// control keys
	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
			|| (key == 27))
		return true;
	// alphas and numbers
	else if ((("0123456789").indexOf(keychar) > -1))
		return true;
	else {
		alert("Special Characters are not allowed.");
		return false;
	}
	return false;
}



//by ajay yadav
function letternumberEmail(e) {
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
	// control keys
	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
			|| (key == 27))
		return true;
	// alphas and numbers
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789@_-.$ ").indexOf(keychar) > -1))
		return true;
	else {
		alert("This Character is not allowed");
		return false;
	}
	return false;
}






function isEnterNumber1(evt) {
	//with decimal allow not allow
		var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
			    if (iKeyCode = 46 && iKeyCode > 31 && (iKeyCode < 47 || iKeyCode > 57)){
			        alert("Please enter in Numeric");
			    	return false;
	}
			    return true;
}


function isEnterNumber(evt) {
//with decimal allow
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
		    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)){
		       // alert("Please enter in numeric");
		    	return false;
}
		    return true;
}
function popUpMessageNew(val){
		document.getElementById('text').innerHTML = val;
		$('#element_to_pop_up').bPopup({
	    	easing: 'easeOutBack', //uses jQuery easing plugin
         	speed: 450,
         	transition: 'slideDown',
         	modalClose: false
     	});
}


function isE_MailValid(mailId,id) {
	
 
if (mailId != ''&& mailId.length != 0) {
//alert(mailIdExist1+"-----35------"+mailId1);
var filter =/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
///^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
///^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var arr=mailId.split("@")[0];
var flag=/^[a-zA-Z]/i;
if (!(filter.test(mailId)  && flag.test(arr))) {
alert('Please Enter a valid email id');
document.getElementById(id).focus();
return false;
}
}
}


/*function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
  alert("Special character not allow");
    return ret;
}*/


function mailidvarify(mailId) {
	var element = mailId;
	var id= document.getElementById(mailId.id).value;
	if (id != "" && id.length != 0) {
	//alert(mailIdExist1+"-----35------"+mailId1);
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(id)) {
	alert('Please Enter a valid email id');
/*	document.getElementById(mailId).focus();*/
	element.focus();
	/*document.getElementById("emailid").focus();*/
	return false;
			}
		}
	}




function MobileNumberMin(obj) {
	var val = document.getElementById(obj).value;
				if(val.length == 0){
					return true;
				}
				else if(val.length<11){
				   alert("Mobile Number Must be 11 digit Long");
				   document.getElementById(obj).focus();
				   return false;
			   }
				else if(val == 000000000){
				   alert("Invalid Mobile Number");
				   document.getElementById(obj).value="";
				   document.getElementById(obj).focus();
				   return false;
			   }
				else if(val == 0000000000){
					   alert("Invalid Mobile Number");
					   document.getElementById(obj).value="";
					   document.getElementById(obj).focus();
					   return false;
				   }
			    return true;
	}

function TelephoneNoMin(obj) {
	var val = document.getElementById(obj).value;
				if(val.length == 0){
					return true;
				}
				else if(val.length<8){
				   alert("Telephone Number Must be Minimum 8 digit Long");
				   document.getElementById(obj).focus();
				   return false;
			   }
				else if(val == 000000000){
				   alert("Invalid Telephone Number");
				   document.getElementById(obj).value="";
				   document.getElementById(obj).focus();
				   return false;
			   }
				else if(val == 0000000000){
					   alert("Invalid Telephone Number");
					   document.getElementById(obj).value="";
					   document.getElementById(obj).focus();
					   return false;
				   }
			    return true;
	}


function isNationalId(obj) {
	var val = document.getElementById(obj).value;
		if(val.length == 0){
		return true;
		}
		else if(val.length<13){
			   alert("National Id Must Be Minimum 13 digit Long");
			   document.getElementById(obj).focus();
			   return false;
		   }
		    return true;
}

function isEnterSpace(evt) {

	var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
		    if (iKeyCode == 32){
		    	 alert("space not allow");
		    	return false;
}
		    return true;
}



function checkCharcter(evt){
	//alert("labva");
	var ch = 0
	correct = false
	ch = (window.event.keyCode)
	ch = parseInt(ch)
	
	if (ch != 0) {
		if ((ch < 65 || ch > 90) && (correct == false) && (ch!=39) && (ch!=47) && (ch!=59) && (ch!=61) && (ch!=91) && (ch!=92) && (ch!=93)){
			if (ch < 97 || ch > 122) // between 'a' & 'z'
			{
				if (ch == 32 ) // space not allowed
				{
					alert("space not allow");
					return false;
				}
				alert("Only alphabates are allowed");
				return false;
			}
			
	}
	}
	
	return true;	
}

function onlyCharcterwithspace(evt){
	
	var ch = 0;
	correct = false;
	ch = (window.event.keyCode);
	//alert(":"+ch);
	ch = parseInt(ch);
	//alert("::"+ch);
	if (ch != 0) {
		if ((ch < 65 || ch > 90) && (correct == false)){
			if (ch < 97 || ch > 122) // between 'a' & 'z'
			{
				if (ch == 32 ) // space allowed
			{
				
				return true;
			}
				
				alert("Only alphabates are allowed");
				return false;
			}
		}
	}
	
	return true;	
}


function hideSpan(field) {
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
}

function showSpan(field) {
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "block";

}


function IsAlphaNumeric(id,event) {
	
	
	if(event.keyCode == 95){
		event.returnValue = true;
	}else if(!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57))){
          /* alert("special");  */
		  event.returnValue = false;
            return;
         }
	/*   alert("not"); */
         event.returnValue = true;
}




//by ashish.kumar to select all checkbox 
function checkFunction(action,listId) 
{ 
var chks = document.getElementsByName(listId);
//alert(chks.length);
if(action == "1") {
var ln = 0;
if(chks.length > 0){
	for ( var i = 0; i < chks.length; i++) {
		
		if (chks[i].checked == true) {
			list = chks[i].value;
			ln++;
			}
	 }
	//alert(ln);
	if(ln == chks.length){
		//alert("eqq");
		//document.selectform2.selectall.checked = true;
		document.getElementById('selectall').checked = true;
		return true;
	}
	else{
		document.getElementById('selectall').checked = false;
	}
}}
if(action == "2") {
	//alert("2");
	
	if (document.getElementById('selectall').checked == true){
		//alert("true");
		var chks = document.getElementsByName(listId);
		var ln = 0;
		if(chks.length > 0){
			for ( var i = 0; i < chks.length; i++) {
				
				if (chks[i].checked == false) {
					 chks[i].checked=true;
					ln++;
					}
			 }}	
	}
	
	if (document.getElementById('selectall').checked == false){
		var chks = document.getElementsByName(listId);
		var ln = 0;
		if(chks.length > 0){
			for ( var i = 0; i < chks.length; i++) {
				
				if (chks[i].checked == true) {
					 chks[i].checked=false;
					ln++;
					}
			 }}	
	}
}
}
function ajaxRequest() {
	var activexmodes = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ]; // activeX
	
	if (window.ActiveXObject) { // Test for support for ActiveXObject in IE
		// first (as XMLHttpRequest in IE7 is broken)
		for ( var i = 0; i < activexmodes.length; i++) {
			try {
				return new ActiveXObject(activexmodes[i]);
			} catch (e) {
				// suppress error
			}
		}
	} else if (window.XMLHttpRequest) // if Mozilla, Safari etc
		return new XMLHttpRequest();
	else
		return false;
}
function loadTbl(div, url, params) {
	  var dlrsseq= '';
		var allcookies = document.cookie;
		   debugger;
		cookiearray = allcookies.split(';');
		for(var i=0; i<cookiearray.length; i++){
		  name = cookiearray[i].split('=')[0];
		  value = cookiearray[i].split('=')[1];
		  if(name == 'setAuth'){
			  dlrsseq= value;
		  }

		} 
		document.getElementById('dlrsSeq').value = dlrsseq;
	try {
		
		$('#load').attr('id','loader');
		$('body').removeClass('loaded');
		
 
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
             
			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					  var dlrsseq= '';
						var allcookies = document.cookie;
						   debugger;
						cookiearray = allcookies.split(';');
						for(var i=0; i<cookiearray.length; i++){
						  name = cookiearray[i].split('=')[0];
						  value = cookiearray[i].split('=')[1];
						  if(name == 'setAuth'){
							  dlrsseq= value;
						  }

						} 
						document.getElementById('dlrsSeq').value = dlrsseq;
					// alert("xml.responseText:" + xml.responseText);
					
					document.getElementById(div).innerHTML = xml.responseText;
					$('body').addClass('loaded');
				} else {
					
				}

			}
		};

		xml.open("POST", url, true);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	
		//alert("xml.responseText:" + params);
	} catch (e) {
		$('body').addClass('loaded');
		alert(e);
	}

}

function AllowSingleSpaceNotInFirstAndLast() {
	var obj = document.getElementById('docno');
	obj.value = obj.value.replace(/^\s+|\s+$/g, "");
	var CharArray = obj.value.split(" ");
	if (CharArray.length > 2) {
		/*  alert("User name NOT VALID"); */
		return false;
	} else {
		/* alert("User name VALID"); */
	}
	return true;
}



function UploaddMultipartData(div, url, params) {
	//to submit new formdata() to the controller
	try {
		 xhr = new XMLHttpRequest();
		 xhr.open( 'POST', url, false );
		 xhr.onreadystatechange = function() {
             
				if (xhr.readyState == 4 || xhr.readyState == "complete") {

					if (xhr.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						 document.getElementById(div).value = xhr.responseText;
					} else {
						
					}
				}
			};
		    xhr.send( params );
		
	} catch (e) {
		alert(e);
	}
}


function AllowSingleSpaceNotInFirstAndLast() {
	var obj = document.getElementById('docno');
	obj.value = obj.value.replace(/^\s+|\s+$/g, "");
	var CharArray = obj.value.split(" ");
	if (CharArray.length > 2) {
		/*  alert("User name NOT VALID"); */
		return false;
	} else {
		/* alert("User name VALID"); */
	}
	return true;
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


/*-----------------loader method suraj-------------- */
$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		/* $('h1').css('color','#222222'); */
	}, 10);
});
/*-----------------loader method end-----------*/


function loadTblWithPagination(div, url, params) {
	//alert("method  ujjwal");
	 var dlrsseq= '';
		var allcookies = document.cookie;
		cookiearray = allcookies.split(';');
		for(var i=0; i<cookiearray.length; i++){
		  name = cookiearray[i].split('=')[0];
		  value = cookiearray[i].split('=')[1];
		  if(name == 'setAuth'){
			  dlrsseq= value;
		  }

		} 
		document.getElementById('dlrsSeq').value = dlrsseq;
	try {
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
             
			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					 var dlrsseq= '';
						var allcookies = document.cookie;
						cookiearray = allcookies.split(';');
						for(var i=0; i<cookiearray.length; i++){
						  name = cookiearray[i].split('=')[0];
						  value = cookiearray[i].split('=')[1];
						  if(name == 'setAuth'){
							  dlrsseq= value;
						  }

						} 
						document.getElementById('dlrsSeq').value = dlrsseq;
					
					$('body').addClass('loaded');
					
				     // alert(xml.responseText);
					//document.getElementById(div).innerHTML = xml.responseText;
					var tag = document.getElementById(div);
					tag.innerHTML = xml.responseText;
					var a = document.getElementsByName("s1");
					if(a!=null){
					for(var i=0;i< a.length;i++){
						var b = converToNumericToBangla(a[i].innerHTML);
						a[i].innerHTML = b;
					}
					}
					
				} else {
					
				}

			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
		//alert("xml.responseText:" + params);
	} catch (e) {
		alert(e);
	}
	
	
}

function makepagination(){
	$("#example").DataTable({"bAutoWidth": false});

	$("#global_filter").keyup(fnFilterGlobal);
	$("#global_regex").click(fnFilterGlobal);
	$("#global_smart").click(fnFilterGlobal);

	$("#col5_filter").change(function() {
		fnFilterColumn(4);
	});
	
	$("#col5_regex").click(function() {
		fnFilterColumn(4);
	});
	
	$("#col5_smart").click(function() {
		fnFilterColumn(4);
	});	
}

function loadTblToAssginValue(div, url, params) {
	try {
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {             
			if (xml.readyState == 4 || xml.readyState == "complete") {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					document.getElementById(div).value = xml.responseText;
				} else {					
				}
			}
		};
		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}
	
	
}

//Common Methord for Textbox Validation
function isEnterNumberCommon(evt,action) {

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
	// control keys
	/* if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
			|| (key == 27))
		return true; */
		
		
/* Numeric and Forward Slash allow */
	if(action ==1){
	 if ((("0123456789/").indexOf(keychar) > -1))
		return true;
	else {
		//alert("ILFS Technologies : Please enter in Numeric.")
		return false;
	}
	}
/*Alpha Numeric and Forward Slash allow */
	if(action ==2){
		if ((("0123456789/abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			return true;
		else {
			//alert("ILFS Technologies : Please enter in Alpha Numeric.")
			return false;
		}
		}


	/*Only Numeric allow */
	if(action ==3){
		if ((("0123456789").indexOf(keychar) > -1))
			return true;
		else {
			alert("Please enter in Numeric.");
			return false;
		}
		}
	
	/*Alpha Numeric with Comma allow */
	if(action ==4){
		if ((("0123456789,abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
			return true;
		else {
			//alert("ILFS Technologies : Please enter in Alpha Numeric.")
			return false;
		}
		}
	
	if(action ==5){
		
		if ((("0123456789.").indexOf(keychar) > -1))
			return true;
		else {
			//alert("ILFS Technologies : Please enter in Numeric.")
			return false;
		}
		}
		
	return false;
}

function Bijoysoft(evt,action) { 
	var key;
	var keychar;
	if (evt.which || evt.keyCode)
		key = evt.which || evt.keyCode;
	else if (evt)
		key = evt.which || evt.keyCode;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
 //Numeric and Forward Slash allow 
	if(action ==1){
		 
	 if ((("!৥#%*();’[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
		 alert("অনুগ্রহ পূর্বক বিজয় বাংলা সফটওয়্যার রান করুন এবং 'ইউনিকোড' নির্বাচন করুন টাইপ করবার জন্য",'');
		 //messageNew("Please Run Bijoy Bangla S/W and select Unicode for typing.",'');
		return false;
	 }
	else {
		
		return true;
	}
	}
	else if(action ==2){
		 if ((("৥*();’[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
			 alert("অনুগ্রহ পূর্বক বিজয় বাংলা সফটওয়্যার রান করুন এবং 'ইউনিকোড' নির্বাচন করুন টাইপ করবার জন্য",'');
			// messageNew("Please Run Bijoy Bangla S/W and select Unicode for typing.",'');
			return false;
		 }
		else {
			
			return true;
		}
		}
	return false;
}

//For Bjoy Bangala-Dhirendra
function isEnterNumber3(evt,action) {
	 
	    var key;
		var keychar;
		if (evt.which || evt.keyCode)
			key = evt.which || evt.keyCode;
		else if (evt)
			key = evt.which || evt.keyCode;
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
 //Numeric and Forward Slash allow 
		if(action ==1){
		 if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) > -1))
			return true;
		else {
			//alert("<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
			alert("কেবল সাংখ্যিক অনুমতি দেওয়া হয়");
			return false;
		}
		}
//Alpha Numeric and Forward Slash allow 
		if(action ==2){
			if ((("০১২৩৪৫৬৭৮৯/িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
				return true;
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				return false;
			}
			}
//Only Numeric allow 
		if(action ==3){
			if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) > -1))
				return true;
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
				alert("কেবল সাংখ্যিক অনুমতি দেওয়া হয়" );
				return false;
			}
			}
//Alpha Numeric with Comma allow 
		if(action ==4){
			if ((("০১২৩৪৫৬৭৮৯,িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
				return true;
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				return false;
			}
			}
//Numeric with Dot allow 
		if(action ==5){
			if ((("০১২৩৪৫৬৭৮৯.").indexOf(keychar) > -1))
				{
				return true;
				}
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
				return false;
			}
			}
			
 //Numeric and Hash allow 
		if(action ==6){
		 if ((("০১২৩৪৫৬৭৮৯#").indexOf(keychar) > -1))
			 
			return true;
		else {
			//alert("<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
			return false;
		}
		}
		
		if(action ==7){
			 if ((("!৥#%*();’,./[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
				 {
			// alert("<spring:message code="script.ilfs"/><spring:message code="script.alphabates"/>")
				 alert("Only Alpha numeric allowed");
				 return false;
				 }
			else {
				
				return true;
			}
			 
			}
		if(action ==8){
			 if ((("!৥#%*()[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
				 {
			// alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				alert("Only Alpha numeric allowed");
				 return false;
				 }
			else {
				
				return true;
			}
			 
			}
		
		if(action ==9){
			 if ((("!৥#%*()[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
				 {
			 //alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				return false;
				 }
			else {
				
				return true;
			}
			 
			}
		
		if(action ==10){
			 if ((("!৥#%*();’,./[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
				 {
			// alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				return false;
				 }
			else {
				
				return true;
			}
			 
			}
		
		if(action ==11){
			 if ((("৥*();’,.[]0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1))
				 {
			// alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				return false;
				 }
			else {
				
				return true;
			}
			 
			}
		
		// Only Alphabets  
		if(action ==12){
			if ((("১২৩৪৫৬৭৮৯০1234567890[]{};:’”.>,</?+=-)(*%").indexOf(keychar) > -1)){
				alert("কেবল বর্ণমালা অনুমতি দেওয়া হয়");
				return false;
			}
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				
				return true;
			}
			}
		

		// Numeric and Forward Slash allow and Dash
		if(action ==13){
		 if ((("০১২৩৪৫৬৭৮৯/").indexOf(keychar) > -1))
			return true;
		else {
			//alert("<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
			alert("Only Numeric with , / and - are allowed");
			return false;
		}
		}//Alpha Numeric with ,/- 
		if(action ==14){
			 if ((("!৥#%*();’\r\n.[]0123456789abcdefghijklmnopqrstuvwxyz\n").indexOf(keychar) > -1)){
				 alert("Only Alpha Numeric with , / and - are allowed");
				 return false;				
			 }
			else {				//alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				
				return true;
			}
			}
		//Alpha Numeric with /- 
	 
		if(action ==15){

			if ((("০১২৩৪৫৬৭৮৯ /- \r\n িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1) ){			
				return true;
			}
			else {
				//alert("<spring:message code="script.ilfs"/><spring:message code="script.alenterinnumeric"/>")
				alert("Only Alpha Numeric with  / and - are allowed");
				return false;
			}
			}
		 
		

     		return false;
	} else
		{
		return false;
		}
}
		function NoBijoysoft(evt) { 
			var key;
			var keychar;
			if (evt.which || evt.keyCode)
				key = evt.which || evt.keyCode;
			else if (evt)
				key = evt.which || evt.keyCode;
			else
				return true;
			keychar = String.fromCharCode(key);
			keychar = keychar.toLowerCase();
		/* Numeric and Forward Slash allow */
			
			 if ((("@._!৥#%*();’[]$,/0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
				return true;
			 }
			else {
				messageNew("অনুগ্রহ পূর্বক বিজয় বাংলা সফটওয়্যার রান করুন এবং 'ইংলিশ' নির্বাচন করুন টাইপ করবার জন্য.",'');
				//alert("Please Run Bijoy Bangla S/W and select English for typing.");
				return false;
			}
			
					
		
}
		
		
		function EmailId(evt) { 
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
			
			 if ((("@._!৥#%*();’[]$,/0123456789abcdefghijklmnopqrstuvwxyz").indexOf(keychar) > -1)){
				return true;
			 }
			else {
				//messageNew("অনুগ্রহ পূর্বক বিজয় বাংলা সফটওয়্যার রান করুন এবং 'ইংলিশ' নির্বাচন করুন টাইপ করবার জন্য.",'');
				alert("Please Run Bijoy Bangla S/W and select English for typing.");
				return false;
			}
			
					
		
}
	//Dhirendra	
		function converToNumericToBangla(val){
			var oldData = val;
			var newData="@";			
			for(var i=0; i<oldData.length;i++)
			{//alert("in loop add")
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
		
//Dhirendra
function converToBanglaNumeric(val){ 
	var oldData = val;
	var newData="@";
	
	for(var i=0; i<oldData.length;i++)
	{//alert("in loop");
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
		case '/':
			newData = newData+"/";
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
 
function covertNumericData(val){  
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

function enterNumberMutation(evt) {
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
	bij=Bijoysoft(evt,'1');
  
	
	if(bij==true){
 
	if ((("০১২৩৪৫৬৭৮৯.").indexOf(keychar) <= -1))
		{
		return false;		}
	
	 
	}
	}

function covertNumericBanglaforString(val){   // used in the jquery.datatable by harit for conversion
	var oldData = val.toString();
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

function letternumberForLogin(e) {
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
	// control keys
	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
			|| (key == 27))
		return true;
	// alphas and numbers
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789 ").indexOf(keychar) > -1))
		return true;
	else {
		alert("Special Characters are not allowed.");
		document.getElementById("employeeIds").value="";
		return false;
	}
	return false;
}


function isE_MailValidate(mailId) {
	var target=event.target.id;
	
	if (mailId != ''&& mailId.length != 0) {
	
	if (!validateEmail(mailId)) {
	//messageNew("<spring:message code="script.validemail" />");
	alert("Not a valid Email");
	return false;
	}
	}
	}

function loaddata(div,url,params){
	 var dlrsseq= '';
		var allcookies = document.cookie;
		   debugger;
		cookiearray = allcookies.split(';');
		for(var i=0; i<cookiearray.length; i++){
		  name = cookiearray[i].split('=')[0];
		  value = cookiearray[i].split('=')[1];
		  if(name == 'setAuth'){
			  dlrsseq= value;
		  }

		} 
		document.getElementById('dlrsSeq').value = dlrsseq;
		var params1 = params.split("&");
		var params2 = params1[0].split("=");
		var params3 = params2[1];
		params=params+'&dlrsSeq='+dlrsseq;
	try {
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
            
			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					 var dlrsseq= '';
						var allcookies = document.cookie;
						   debugger;
						cookiearray = allcookies.split(';');
						for(var i=0; i<cookiearray.length; i++){
						  name = cookiearray[i].split('=')[0];
						  value = cookiearray[i].split('=')[1];
						  if(name == 'setAuth'){
							  dlrsseq= value;
						  }

						} 
						document.getElementById('dlrsSeq').value = dlrsseq;
					// alert("xml.responseText:" + xml.responseText);
					$('body').addClass('loaded');
					//alert(document.getElementById("userTypeIdVal").value);
					if(div == "plot" || div == "khatianno" || div == "ownername" || document.getElementById("userNameBack").value == "Admin" || document.getElementById("userNameBack").value == "SuperAdmin" || document.getElementById("userTypeIdVal").value=="501")
					document.getElementById(div).innerHTML = xml.responseText;
					else
						document.getElementById(div).value = params3;

				} else {
					
				}

			}
		};
//alert("url >>>"+url);
		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
		//alert("xml.responseText:" + params);
	} catch (e) {
		alert(e);
	}
	
	

}
function deleteCookies(){
var cookies = document.cookie.split(";");
alert(cookies);
	    for (var i = 0; i < cookies.length; i++) {
	    	var cookie = cookies[i];
	    	var eqPos = cookie.indexOf("=");
	    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
	    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
	    	
	    }
}
 








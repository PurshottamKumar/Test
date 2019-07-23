/**
 * 
 * created by suraj 
 * modified by Harit
 */

function datareset() {
	document.getElementById('tbl2').style.display = "none";
}

  
 function loadData()
 {
	 	var return_value = validateDetails();
	 	if(return_value == ""){
        $('#load').attr('id','loader');
	    $('body').removeClass('loaded');
	 	var start_date = document.getElementById('start_date').value;
		var end_date = document.getElementById('end_date').value;
		//alert("end_date == "+end_date);
		//alert("start_date == "+start_date);
		if(languageSearch == "ba"){
			var dateArr = start_date.split('/');
		  	var banglaDate = banglaToEnglishDigitConverter(dateArr[0]) + '/' + banglaToEnglishDigitConverter(dateArr[1]) + '/' + banglaToEnglishDigitConverter(dateArr[2]);
		  	start_date = banglaDate;
		  	
		  	var dateArr1 = end_date.split('/');
		  	var banglaDate1 = banglaToEnglishDigitConverter(dateArr1[0]) + '/' + banglaToEnglishDigitConverter(dateArr1[1]) + '/' + banglaToEnglishDigitConverter(dateArr1[2]);
		  	end_date = banglaDate1;
		}
		date1 = document.getElementById('start_date').value.split("/");
		minDt = new Date(date1[2], date1[1] - 1, date1[0]);
		date1 = document.getElementById('end_date').value.split("/");
		maxDt = new Date(date1[2], date1[1] - 1, date1[0]);
		
		var flag = document.getElementById("mis_flag").value;
		
		var controller = "";
		
		if(flag == 1 )
		{
			controller = "getTransactionReport";
		}
		else if(flag == 2)
		{
		    controller = "dailyCollectionReport";
		}
		else if(flag == 3)
		{
			controller = "countTransactionReport";
		}
		if(start_date.length != 0 && end_date.length!= 0){
			if (minDt > maxDt) {
				alert("Start Date Cannot be smaller than the End Date");
				return false;
			}
			else{
	 try {
		 
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

		 

		 var division = document.getElementById("division").value;
		 var district = document.getElementById("district").value;
		 var upazilla = document.getElementById("upazilla").value;
		 var encodedstart_date = btoa(start_date);
		 var encodedend_date = btoa(end_date);
		 var encodeddivision = btoa(division);
		 var encodeddistrict = btoa(district);
		 var encodedupazilla = btoa(upazilla);
		 var encodedflag = btoa(flag);
		 
		 
		 var params = "start_date="+encodedstart_date+"&end_date="+encodedend_date+"&division="+encodeddivision+"&district="+encodeddistrict+"&upazilla="+encodedupazilla+"&flag="+encodedflag+"&dlrsSeq="+dlrsseq;
		 var xml = ajaxRequest();
			xml.onreadystatechange = function() {
	             
				if (xml.readyState == 4 || xml.readyState == "complete") {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						dlrs();
						$('body').addClass('loaded');
						document.getElementById("tbl2").innerHTML = xml.responseText;
						if(flag == 1){
						totoalSum1();
						}
						if(flag == 2){
						totoalSum2();
						}
						if(flag == 3){
						totoalSum3();
						}
					} else {
						
					}

				}
			};

			xml.open("POST", controller, true);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
			
		} catch (e) {
		$('body').addClass('loaded');
			alert(e);
		} 
	}
 }
		}
		else{
			document.getElementById('text').innerHTML = return_value;
			$('#element_to_pop_up').bPopup({
		    	easing: 'easeOutBack', //uses jQuery easing plugin
	         	speed: 450,
	         	transition: 'slideDown',
	         	modalClose: false
	     	});
		}
	 	document.getElementById('tbl2').style.display = "block";	
 }
 function setQuarter(quarter){
	 
	 var today = new Date();
	 var dd = today.getDate();
	 var mm = today.getMonth()+1; //January is 0!
	 var yyyy = today.getFullYear();
	 
	 var nextyear = today.getFullYear()+1;
	 
	 if(dd<10) {
	     dd='0'+dd;
	 } 
	 if(mm<10) {
	     mm='0'+mm;
	 } 
	 today = dd+'/'+mm+'/'+yyyy;
	 
	 if(quarter == 'q1'){ 
		 
		 document.getElementById("start_date").value = "01/04/"+yyyy;
		 document.getElementById("end_date").value = "30/06/"+yyyy;
		 
		 document.getElementById("start_date").disabled = true;
		 document.getElementById("end_date").disabled = true;
		 
		 
	 }
	 if(quarter == 'q2'){
		 document.getElementById("start_date").value = "01/07/"+yyyy;
		 document.getElementById("end_date").value = "30/09/"+yyyy;
		 
		 document.getElementById("start_date").disabled = true;
		 document.getElementById("end_date").disabled = true;
		 
	 }
	 if(quarter == 'q3'){
		 document.getElementById("start_date").value = "01/10/"+yyyy;
		 document.getElementById("end_date").value = "31/12/"+yyyy;
		 
		 document.getElementById("start_date").disabled = true;
		 document.getElementById("end_date").disabled = true;
		 
	 }
	 if(quarter == 'q4'){
		 var year;
		 if(mm==1 || mm==2 || mm==3){
			 year=yyyy;
		 }else
			 year=nextyear;
		 
		 document.getElementById("start_date").value = "01/01/"+year;
		 document.getElementById("end_date").value = "31/03/"+year;
		 
		 document.getElementById("start_date").disabled = true;
		 document.getElementById("end_date").disabled = true;
		 
	 }
	 if(quarter == '0'){
		 var today = new Date();
		 var dd = today.getDate();
		 var mm = today.getMonth()+1; //January is 0!
		 var yyyy = today.getFullYear();
		 
		 document.getElementById("start_date").disabled = false;
		 document.getElementById("end_date").disabled = false;
		 
		 
		 document.getElementById("start_date").value="01/04/"+yyyy;
		 document.getElementById("end_date").value=dd+"/"+mm+"/"+yyyy; 
	 }
	 		
		if(languageSearch == "ba"){
			debugger;
			document.getElementById("start_date").value = converToBanglaNumeric($("#start_date").val());
			document.getElementById("end_date").value = converToBanglaNumeric($("#end_date").val());
		}
 }
 
 function exportPDF(controller)
 {
        $('#load').attr('id','loader');
	    $('body').removeClass('loaded');
	 	var start_date = document.getElementById('start_date').value;
		var end_date = document.getElementById('end_date').value;
		date1 = document.getElementById('start_date').value.split("/");
		minDt = new Date(date1[2], date1[1] - 1, date1[0]);
		date1 = document.getElementById('end_date').value.split("/");
		maxDt = new Date(date1[2], date1[1] - 1, date1[0]);
		
		var flag = document.getElementById("mis_flag").value;
		
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
		
		if(start_date.length != 0 && end_date.length!= 0){
			if (minDt > maxDt) {
				alert("Start Date Cannot be smaller than the End Date");
				return false;
			}
			else{
	 try {
		 var division = document.getElementById("division").value;
		 var district = document.getElementById("district").value;
		 var upazilla = document.getElementById("upazilla").value;
		 
		 var params = controller+"?start_date="+start_date+"&end_date="+end_date+"&division="+division+"&district="+district+"&upazilla="+upazilla+"&flag="+flag+"&dlrsSeq="+dlrsseq;
		  popupWin = window.open(params,'_self');
		 $('body').addClass('loaded');
		} catch (e) {
		$('body').addClass('loaded');
			alert(e);
		} 
	}
 }
 }
 
 function totoalSum1(){

var sumnrh=0;
var sumnrf=0;
var sumtrf=0;
var sumttf=0;
var sumtnr=0;
var sumtna=0;
var sumttr=0;
var sumtta=0;
var sumtmr=0;
var sumtma=0;
var sumtkr=0;
var sumtmapr=0;
var sumtmouzareqN=0;
var sumtmouzafeeN=0;
var sumtmouzareqT=0;
var sumtmouzafeeT=0;
var sumtmouzareq=0;

$('.item-row').each(function(i, row) {
/*var countnrh = parseInt(document.getElementById("countnrh"+(i+1)).innerHTML);
var countnrf = parseInt(document.getElementById("countnrf"+(i+1)).innerHTML);
var counttrf = parseInt(document.getElementById("counttrf"+(i+1)).innerHTML);
var countttf = parseInt(document.getElementById("countttf"+(i+1)).innerHTML);
var counttnr = parseInt(document.getElementById("counttnr"+(i+1)).innerHTML);
var counttna = parseInt(document.getElementById("counttna"+(i+1)).innerHTML);
var countttr = parseInt(document.getElementById("countttr"+(i+1)).innerHTML);
var counttta = parseInt(document.getElementById("counttta"+(i+1)).innerHTML);
var counttmr = parseInt(document.getElementById("counttmr"+(i+1)).innerHTML);
var counttma = parseInt(document.getElementById("counttma"+(i+1)).innerHTML);
var counttkr=parseInt(document.getElementById("counttkr"+(i+1)).innerHTML);
var counttmapr=parseInt(document.getElementById("counttmapr"+(i+1)).innerHTML);
*/

	var countnrh = converBanglaToNumeric(document.getElementById("countnrh"+(i+1)).innerHTML);
	var countnrf = converBanglaToNumeric(document.getElementById("countnrf"+(i+1)).innerHTML);
	var counttrf = converBanglaToNumeric(document.getElementById("counttrf"+(i+1)).innerHTML);
	var countttf = converBanglaToNumeric(document.getElementById("countttf"+(i+1)).innerHTML);
	var counttnr = converBanglaToNumeric(document.getElementById("counttnr"+(i+1)).innerHTML);
	var counttna = converBanglaToNumeric(document.getElementById("counttna"+(i+1)).innerHTML);
	var countttr = converBanglaToNumeric(document.getElementById("countttr"+(i+1)).innerHTML);
	var counttta = converBanglaToNumeric(document.getElementById("counttta"+(i+1)).innerHTML);
	var counttmr = converBanglaToNumeric(document.getElementById("counttmr"+(i+1)).innerHTML);
	var counttma = converBanglaToNumeric(document.getElementById("counttma"+(i+1)).innerHTML);
	var counttkr = converBanglaToNumeric(document.getElementById("counttkr"+(i+1)).innerHTML);
	var counttmapr = converBanglaToNumeric(document.getElementById("counttmapr"+(i+1)).innerHTML);

	
// by harit for mouza map
/*var counttmouzareqN=parseInt(document.getElementById("counttmouzareqN"+(i+1)).innerHTML);
var counttmouzafeeN=parseInt(document.getElementById("counttmouzafeeN"+(i+1)).innerHTML);
var counttmouzareqT=parseInt(document.getElementById("counttmouzareqT"+(i+1)).innerHTML);
var counttmouzafeeT=parseInt(document.getElementById("counttmouzafeeT"+(i+1)).innerHTML);
var counttmouzareq=parseInt(document.getElementById("counttmouzareq"+(i+1)).innerHTML);
*/

var counttmouzareqN = converBanglaToNumeric(document.getElementById("counttmouzareqN"+(i+1)).innerHTML);
var counttmouzafeeN = converBanglaToNumeric(document.getElementById("counttmouzafeeN"+(i+1)).innerHTML);
var counttmouzareqT = converBanglaToNumeric(document.getElementById("counttmouzareqT"+(i+1)).innerHTML);
var counttmouzafeeT = converBanglaToNumeric(document.getElementById("counttmouzafeeT"+(i+1)).innerHTML);
var counttmouzareq =  converBanglaToNumeric(document.getElementById("counttmouzareq"+(i+1)).innerHTML);



sumnrh=parseInt(sumnrh)+parseInt(countnrh);

sumnrf=parseInt(sumnrf)+parseInt(countnrf);
sumtrf=parseInt(sumtrf)+parseInt(counttrf);
sumttf=parseInt(sumttf)+parseInt(countttf);
sumtnr=parseInt(sumtnr)+parseInt(counttnr);
sumtna=parseInt(sumtna)+parseInt(counttna);
sumttr=parseInt(sumttr)+parseInt(countttr);
sumtta=parseInt(sumtta)+parseInt(counttta);
sumtmr=parseInt(sumtmr)+parseInt(counttmr);
sumtma=parseInt(sumtma)+parseInt(counttma);
sumtkr=parseInt(sumtkr)+parseInt(counttkr);
sumtmapr=parseInt(sumtmapr)+parseInt(counttmapr);
sumtmouzareqN=parseInt(sumtmouzareqN)+parseInt(counttmouzareqN);
sumtmouzafeeN=parseInt(sumtmouzafeeN)+parseInt(counttmouzafeeN);
sumtmouzareqT=parseInt(sumtmouzareqT)+parseInt(counttmouzareqT);
sumtmouzafeeT=parseInt(sumtmouzafeeT)+parseInt(counttmouzafeeT);
sumtmouzareq=parseInt(sumtmouzareq)+parseInt(counttmouzareq);
});		

//alert("sd"+sumtkr);
if(document.getElementById('totalReqKh')!=null && document.getElementById('totalReqKh')!='NaN')
document.getElementById('totalReqKh').innerHTML = converToBanglaNumeric(sumnrh.toString());

if(document.getElementById('totalfeeKh')!=null && document.getElementById('totalfeeKh')!='NaN')
document.getElementById('totalfeeKh').innerHTML = converToBanglaNumeric(sumnrf.toString());

if(document.getElementById('totalTatReqKh')!=null && document.getElementById('totalTatReqKh')!='NaN')
document.getElementById('totalTatReqKh').innerHTML = converToBanglaNumeric(sumtrf.toString());

if(document.getElementById('totalTatfeeKh')!=null && document.getElementById('totalTatfeeKh')!='NaN')
document.getElementById('totalTatfeeKh').innerHTML = converToBanglaNumeric(sumttf.toString());

if(document.getElementById('totalkhreq')!=null && document.getElementById('totalkhreq')!='NaN') // for total khatian request 
	document.getElementById('totalkhreq').innerHTML = converToBanglaNumeric(sumtkr.toString());


if(document.getElementById('totalReqMap')!=null && document.getElementById('totalReqMap')!='NaN')
document.getElementById('totalReqMap').innerHTML = converToBanglaNumeric(sumtnr.toString());

if(document.getElementById('totalReqfeeMap')!=null && document.getElementById('totalReqfeeMap')!='NaN')
document.getElementById('totalReqfeeMap').innerHTML = converToBanglaNumeric(sumtna.toString());

if(document.getElementById('totalTatReqMap')!=null && document.getElementById('totalTatReqMap')!='NaN')
document.getElementById('totalTatReqMap').innerHTML = converToBanglaNumeric(sumttr.toString()); 

if(document.getElementById('totalTatfeeMap')!=null && document.getElementById('totalTatfeeMap')!='NaN')
document.getElementById('totalTatfeeMap').innerHTML = converToBanglaNumeric(sumtta.toString());

if(document.getElementById('totalMapReq')!=null && document.getElementById('totalMapReq')!='NaN')
	document.getElementById('totalMapReq').innerHTML = converToBanglaNumeric(sumtmapr.toString());


if(document.getElementById('totalmouzareqN')!=null && document.getElementById('totalmouzareqN')!='NaN')
	document.getElementById('totalmouzareqN').innerHTML = converToBanglaNumeric(sumtmouzareqN.toString());


if(document.getElementById('totalmouzafeeN')!=null && document.getElementById('totalmouzafeeN')!='NaN')
	document.getElementById('totalmouzafeeN').innerHTML = converToBanglaNumeric(sumtmouzafeeN.toString());

if(document.getElementById('totalmouzareqT')!=null && document.getElementById('totalmouzareqT')!='NaN')
	document.getElementById('totalmouzareqT').innerHTML = converToBanglaNumeric(sumtmouzareqT.toString());

if(document.getElementById('totalmouzafeeT')!=null && document.getElementById('totalmouzafeeT')!='NaN')
	document.getElementById('totalmouzafeeT').innerHTML = converToBanglaNumeric(sumtmouzafeeT.toString());

if(document.getElementById('totalMouzaMapReq')!=null && document.getElementById('totalMouzaMapReq')!='NaN')
	document.getElementById('totalMouzaMapReq').innerHTML = converToBanglaNumeric(sumtmouzareq.toString());


if(document.getElementById('totalReqMu')!=null && document.getElementById('totalReqMu')!='NaN')
	if(isNaN(sumtmr))	{
		sumtmr = '0';
	}
document.getElementById('totalReqMu').innerHTML = converToBanglaNumeric(sumtmr.toString());

if(document.getElementById('totalfeeMu')!=null && document.getElementById('totalfeeMu')!='NaN') {
if(isNaN(sumtma))	{
	sumtma = '0';
}
document.getElementById('totalfeeMu').innerHTML = converToBanglaNumeric(sumtma.toString());
}

}
 
 

function totoalSum3()
{
var sumnrh=0;
var sumnrf=0;
var sumtrf=0;
var sumtmr=0;
$('.item-row').each(function(i, row) {
	
/*var countnrh = parseInt(document.getElementById("counttmr"+(i+1)).innerHTML);
var countnrf = parseInt(document.getElementById("counttrm"+(i+1)).innerHTML);
var counttrf = parseInt(document.getElementById("counttrk"+(i+1)).innerHTML);
var counttmouzar= parseInt(document.getElementById("counttmouzar"+(i+1)).innerHTML); 

*/
	var countnrh = converBanglaToNumeric(document.getElementById("counttmr"+(i+1)).innerHTML);
	var countnrf = converBanglaToNumeric(document.getElementById("counttrm"+(i+1)).innerHTML);
	var counttrf = converBanglaToNumeric(document.getElementById("counttrk"+(i+1)).innerHTML);
	var counttmouzar = converBanglaToNumeric(document.getElementById("counttmouzar"+(i+1)).innerHTML); 



sumnrh=parseInt(sumnrh)+parseInt(countnrh);
sumnrf=parseInt(sumnrf)+parseInt(countnrf);
sumtrf=parseInt(sumtrf)+parseInt(counttrf);
sumtmr=parseInt(sumtmr)+parseInt(counttmouzar);
});
if(document.getElementById('totalReqKh')!=null && document.getElementById('totalReqKh')!='NaN')
document.getElementById('totalReqKh').innerHTML = converToBanglaNumeric(sumnrh.toString());

if(document.getElementById('totalReqMap')!=null && document.getElementById('totalReqMap')!='NaN')
document.getElementById('totalReqMap').innerHTML = converToBanglaNumeric(sumnrf.toString());

if(document.getElementById('totalReqMu')!=null && document.getElementById('totalReqMu')!='NaN')
	if(isNaN(sumtrf))	{
		sumtrf = '0';
	}
document.getElementById('totalReqMu').innerHTML = converToBanglaNumeric(sumtrf.toString());

if(document.getElementById('totalReqMouza')!=null && document.getElementById('totalReqMouza')!='NaN')
	document.getElementById('totalReqMouza').innerHTML = converToBanglaNumeric(sumtmr.toString());

}




function totoalSum2()
{
var sumnrh=0;
var sumnrf=0;
var sumtrf=0;
var sumtam=0;
var sumtmr=0;
var sumtmf=0;
$('.item-row').each(function(i, row) {
/*
var countnrh = parseInt(document.getElementById("counttrk"+(i+1)).innerHTML);
var countnrf = parseInt(document.getElementById("counttak"+(i+1)).innerHTML);
var counttrf = parseInt(document.getElementById("counttrm"+(i+1)).innerHTML);
var counttam = parseInt(document.getElementById("counttam"+(i+1)).innerHTML);
var counttmr=parseInt(document.getElementById("counttmr"+(i+1)).innerHTML);
var counttmf=parseInt(document.getElementById("counttmf"+(i+1)).innerHTML);
*/

	var countnrh = converBanglaToNumeric(document.getElementById("counttrk"+(i+1)).innerHTML);
	var countnrf = converBanglaToNumeric(document.getElementById("counttak"+(i+1)).innerHTML);
	var counttrf = converBanglaToNumeric(document.getElementById("counttrm"+(i+1)).innerHTML);
	var counttam = converBanglaToNumeric(document.getElementById("counttam"+(i+1)).innerHTML);
	var counttmr = converBanglaToNumeric(document.getElementById("counttmr"+(i+1)).innerHTML);
	var counttmf = converBanglaToNumeric(document.getElementById("counttmf"+(i+1)).innerHTML);





sumnrh=parseInt(sumnrh)+parseInt(countnrh);
sumnrf=parseInt(sumnrf)+parseInt(countnrf);
sumtrf=parseInt(sumtrf)+parseInt(counttrf);
sumtam=parseInt(sumtam)+parseInt(counttam);
sumtmr=parseInt(sumtmr)+parseInt(counttmr);
sumtmf=parseInt(sumtmf)+parseInt(counttmf);
});

if(document.getElementById('totalReqKh')!=null && document.getElementById('totalReqKh')!='NaN')
document.getElementById('totalReqKh').innerHTML = converToBanglaNumeric(sumnrh.toString());

if(document.getElementById('totalAmoKh')!=null && document.getElementById('totalAmoKh')!='NaN')
document.getElementById('totalAmoKh').innerHTML = converToBanglaNumeric(sumnrf.toString());

if(document.getElementById('totalReqMap')!=null && document.getElementById('totalReqMap')!='NaN')
document.getElementById('totalReqMap').innerHTML = converToBanglaNumeric(sumtrf.toString());

if(document.getElementById('totalAmoMap')!=null && document.getElementById('totalAmoMap')!='NaN'){
	if(isNaN(sumtam))	{
		sumtam = '0';
	}
	document.getElementById('totalAmoMap').innerHTML = converToBanglaNumeric(sumtam.toString());
}
if(document.getElementById('totalmouzaReq')!=null && document.getElementById('totalmouzaReq')!='NaN')
	document.getElementById('totalmouzaReq').innerHTML = converToBanglaNumeric(sumtmr.toString());

if(document.getElementById('totalmouzafee')!=null && document.getElementById('totalmouzaReq')!='NaN')
	document.getElementById('totalmouzafee').innerHTML = converToBanglaNumeric(sumtmf.toString());



}

function validateDetails(){
	var i=1;
	var append="";
	var start_date = document.getElementById('start_date').value;
	var end_date = document.getElementById('end_date').value;
	date1 = document.getElementById('start_date').value.split("/");
	minDt = new Date(date1[2], date1[1] - 1, date1[0]);
	date1 = document.getElementById('end_date').value.split("/");
	maxDt = new Date(date1[2], date1[1] - 1, date1[0]);
	
	 var division = document.getElementById("division").value;
	 var district = document.getElementById("district").value;
	 var upazilla = document.getElementById("upazilla").value;
	 
	 
	 if(start_date.length != 0 && end_date.length!= 0){
			if (minDt > maxDt) {
				append += i+" - Start Date Cannot be smaller than the End Date. <br>";
				i++;
			}
	 }
	/* if(division == "0"){
		 append += "&nbsp; "+i+" -  Please select <span style='color:red;font-style: italic;' class='special' role='link' > Division</span>. <br>";
		 i++;
	 }
	 if(district == "0"){
		 append += i+" -  Please select <span style='color:red;font-style: italic;' class='special' role='link' >District</span>. <br>";
		 i++;
	 }
	 if(upazilla == "0"){
		 append += i+" -  Please select <span style='color:red;font-style: italic;' class='special' role='link' >Upzilla</span>. <br>";
		 i++;
	 }*/
	 return append;
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


function loadTbl(div, url, params) {
	try {
		
		$('#load').attr('id','loader');
		$('body').removeClass('loaded');
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
		params=params+'&dlrsSeq='+dlrsseq;
		//alert(params);
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
					document.getElementById(div).innerHTML = xml.responseText;
					if(div=='district'){
					var district='0';
					loadTbl('upazilla','getUpazillaFromDistrict','districtId='+district+'&executeId=1');
					}
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


function hideshow(parameter){
	debugger
	
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
	
	
	if(parameter=='quarter'){
		document.getElementById('division').value = "0";
		document.getElementById('district').value = "0";
		document.getElementById('upazilla').value = "0";		
		document.getElementById('tbl2').style.display = "none";
	}
	if(parameter=='division'){		//alert("sd");
		document.getElementById('district').value = "0";
		document.getElementById('upazilla').value = "0";		
		document.getElementById('tbl2').style.display = "none";
		
		var division=document.getElementById('division').value;
		loadTbl('district','getDistrictListFromDivision','divisionId='+division+'&executeId=1'+'&dlrsSeq='+dlrsseq);
		
		
	}
	if(parameter=='district'){	
		
		document.getElementById('upazilla').value = "0";		
		document.getElementById('tbl2').style.display = "none";
		var district=document.getElementById('district').value;
		loadTbl('upazilla','getUpazillaFromDistrict','districtId='+district+'&executeId=1'+'&dlrsSeq='+dlrsseq);
	}
	
	if(parameter=='upazilla'){		
		document.getElementById('tbl2').style.display = "none";
	}
	
	
}function upzillazero(){
	
}




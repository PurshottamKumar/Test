function putBackValue(hiddenBack) {
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
debugger;
	//alert("put back value:" + hiddenBack);
	$('#load').attr('id', 'loader');
	$('body').removeClass('loaded');

	var arr = hiddenBack.split("$$");
	/*document.getElementById("khatianTypeId").value = arr[0];*/
	/*loadTblWithPagination('division', 'getDivisionFromKhatiantypeId',
			'khatiantypeId=' + document.getElementById('khatianTypeId').value);*/
	document.getElementById("division").value = arr[1];
	loaddata('district', 'getDistrictDDFromDivision',
			'divisionId=' + document.getElementById('division').value
				+ '&executeId=1');
	document.getElementById("district").value = arr[2];
	loaddata('upazilla', 'getUpazillaDDFromDistrict',
			'districtId=' + document.getElementById('district').value
			+ '&executeId=1');
	document.getElementById("upazilla").value = arr[3];
	loaddata('mouza', 'getMouzaDDFromUpazilla', 'upazillaId='
			+ document.getElementById('upazilla').value + '&executeId=1');
	document.getElementById("mouza").value = arr[4];

	loaddata('khatianTypeId','getKhatainTypeDDFromMouza','mouzaId='+document.getElementById('mouza').value+'&executeId=1');
	document.getElementById("khatianTypeId").value = arr[0];
	
	if (arr[5] == "selectT1") {
		
		document.getElementById("selectT1").checked = true;
		myhide();

		loaddata('plot', 'getKhatianList', 'mouza='
				+ document.getElementById('mouza').value + '&action=plotdd'
							+ '&khatiantype='
				+ document.getElementById('khatianTypeId').value);
		document.getElementById('plotdisplay').style.display = "block";
		document.getElementById('khatiandisplay').style.display = "none";
		document.getElementById('ownerdisplay').style.display = "none";
		document.getElementById('buttondisplay').style.display = "block";
		document.getElementById('mutationbutton').style.display = "inline-block";

	} else if (arr[5] == "selectT2"){
		document.getElementById("selectT2").checked = true;
		myhide();
		loaddata('khatianno', 'getKhatianList', 'mouza='
				+ document.getElementById('mouza').value + '&action=khatiandd'
						+ '&khatiantype='
				+ document.getElementById('khatianTypeId').value);
		document.getElementById('plotdisplay').style.display = "none";
		document.getElementById('ownerdisplay').style.display = "none";
		document.getElementById('khatiandisplay').style.display = "block";
		document.getElementById('buttondisplay').style.display = "block";
		document.getElementById('mutationbutton').style.display = "inline-block";
	}
	else if (arr[5] == "selectT5"){
		document.getElementById("selectT5").checked = true;
		myhide();
		
		document.getElementById('mutationbutton').style.display = "table-cell";
		loaddata('ownername','getKhatianList','mouza='+document.getElementById('mouza').value+'&action=ownerdd'+'&khatiantype='+document.getElementById('khatianTypeId').value);
		document.getElementById('ownerdisplay').style.display = "block";
		document.getElementById('plotdisplay').style.display = "none";
		document.getElementById('khatiandisplay').style.display = "none";
		document.getElementById('buttondisplay').style.display = "block";
		document.getElementById('mutationbutton').style.display = "inline-block";
	}
	
	if (arr[6] == "plot") {
		document.getElementById("plot").value = arr[7];
	} else if(arr[6] == "khatianno"){
		document.getElementById("khatianno").value = arr[7];
	} else if(arr[6] == "ownername"){
		document.getElementById("ownername").value = arr[7];
	}
		
		
	searchlist();
	var str = '';
	for ( var i = 0; i < arr.length; i++) {
		if (i >7 ) {
			str = str + arr[i] + "#";
		}
	}
	
	var arr1 = str.split("##");
	var j = 0;
	var chks = document.getElementsByName("ownerdetailsCheckList[]");
	var chkvalue = "";
	for ( var j = 0; j < arr1.length - 1; j++) {

		for ( var i = 0; i < chks.length; i++) {

			if (chks[i].value == arr1[j]) {

				value = chks[i].checked = true;
			}
		}
	}
	
	$('body').addClass('loaded');
}
function getBackValue() {
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
	debugger;
	//alert("inside getback value");
	var backvalue = document.getElementById("khatianTypeId").value + "$$"
			+ document.getElementById("division").value + "$$"
			+ document.getElementById("district").value + "$$"
			+ document.getElementById("upazilla").value + "$$"
			+ document.getElementById("mouza").value;

	if (document.getElementById("selectT1").checked == true) {
		var backvalue = backvalue + "$$" + "selectT1";
		
		if (document.getElementById("plot").value != "") {
			var backvalue = backvalue + "$$" + "plot" + "$$"
					+ document.getElementById("plot").value;
			
		}else{
			var backvalue = backvalue + "$$@$$@";
	
		}
	}
	else if (document.getElementById("selectT2").checked == true) {
		var backvalue = backvalue + "$$" + "selectT2";
		if (document.getElementById("khatianno").value != ""){
			var backvalue = backvalue + "$$" + "khatianno" + "$$"
					+ document.getElementById("khatianno").value;	
		}else{
			var backvalue = backvalue + "$$@$$@";
	
		}
	}
	
	else if (document.getElementById("selectT5").checked == true) {
		
		var backvalue = backvalue + "$$" + "selectT5";
		if (document.getElementById("ownername").value != ""){
			var backvalue = backvalue + "$$" + "ownername" + "$$"
			+ document.getElementById("ownername").value;
			
		}else{
			var backvalue = backvalue + "$$@$$@";
	
		}
	}
	
	var chks = document.getElementsByName("ownerdetailsCheckList[]");
	var chkvalue = "";
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked == true) {
			chkvalue = chks[i].value;
			var backvalue = backvalue + "$$" + chkvalue + "$$";
		}
		
	}
	

	document.getElementById("hiddenBack").value = backvalue;
}

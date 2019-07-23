
	$(document).ready(function() {
		
		$("input, select, textarea").attr("autocomplete", "off");

			 $('input[type=text]').bind('copy paste', function (e) {
		         e.preventDefault();
		      });
		
	
			 
			 
		  $("#docFileclick").click(function(){
				$("#documentFle").trigger('click');
				$('#documentFle').change(function(evt) {
			        var filename = $(this).val();
			        if(filename ==""){
			        	document.getElementById('documentFileSpan').innerHTML = filename;
			        }else{
			        	var selectpath = filename.split("\\");
						var selectname = selectpath[selectpath.length - 1];	
			        
			        document.getElementById('documentFileSpan').innerHTML = selectname;
			        }
			       
			    });
			}); 
		  
		  $("#ownerImageUploadButton").click(function(){
				$("#formImageFile").trigger('click');
				$('#formImageFile').change(function(evt) {
			        var filename = $(this).val();
			        if(filename ==""){
			        	document.getElementById('OwnerImageUPloadSpan').innerHTML = filename;
			        }else{
			        	var selectpath = filename.split("\\");
						var selectname = selectpath[selectpath.length - 1];	
			        
			        document.getElementById('OwnerImageUPloadSpan').innerHTML = selectname;
			        }
			       
			    });
			}); 
	
		$("#nationalid,#mobileno,#birthCertificateId").on("keypress keyup",function(){
		    if($(this).val() == '0'){
		      $(this).val('');  
		    }
		});
		
		/*$("#mobileno").on("keypress keyup",function(){
		    if($(this).val() == '0'){
		      $(this).val('');  
		    }
		});*/
		
		var serverDate = new Date(Date("${map.todayDate}"));
		var FromEndDate = serverDate;
		var decade=100;
		var currentYear=serverDate.getFullYear();
		var day= serverDate.getDate();
		var month= serverDate.getUTCMonth()+1;//months from 1-12
		var yearBefore100=currentYear-decade;
		var specificDate=day+"/"+month+"/"+yearBefore100;
		$('#docdate').datepicker({
			format : 'dd MM yyyy',
			startDate: specificDate,
			endDate : FromEndDate,
			autoclose : true
		});
		
	
		$("input[name$='newOwnerShare'],input[name$='areatosell'] ,#ownershare , #LAownershare").keypress(function(event) {
			  if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
			    ((event.which < 48 || event.which > 57) &&
			      (event.which != 0 && event.which != 8))) {
			    event.preventDefault();
			  }

			  var text = $(this).val();

			  if ((text.indexOf('.') != -1) &&
			    (text.substring(text.indexOf('.')).length > 4) &&
			    (event.which != 0 && event.which != 8) &&
			    ($(this)[0].selectionStart >= text.length - 4)) {
			    event.preventDefault();
			  }
			});
		

		$("input[name$='sownersharepercent']").keypress(function(event) {
			  if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
			    ((event.which < 48 || event.which > 57) &&
			      (event.which != 0 && event.which != 8))) {
			    event.preventDefault();
			  }
			  var text = $(this).val();
			  if ((text.indexOf('.') != -1) &&
			    (text.substring(text.indexOf('.')).length > 2) &&
			    (event.which != 0 && event.which != 8) &&
			    ($(this)[0].selectionStart >= text.length - 2)) {
			    event.preventDefault();
			  }
			});
		
	});

	
	/*function addRow(tableID) {
		
		var finalrowcntafterdel = 0;
		var hideownerid = document.getElementById("hiddenownerid").value;
		if (hideownerid == "") {
			hideownerid = "-";
		}
		var result = checkforownervalidate();
		
		if (result == true) {
			
			
			var temptable=document.getElementById(tableID);
			var templen=temptable.rows.length; 
			
			 if(document.getElementById("mutationtype1").value.split("##")[0] !="19"){
			if(document.getElementById('ownershare').value == "" || document.getElementById('ownershare').value <= 0.0000 ||document.getElementById('ownershare').value == ".")	{
				 if(templen == 1){
				 alert("<spring:message code="script.pleaseEnterOwnerShare"/>");
				 document.getElementById('ownershare').focus();
				 return false;
			 		}
				}
			} 
			
			
				if(document.getElementById('ownershare').value == "" || document.getElementById('ownershare').value <= 0.0000 ||document.getElementById('ownershare').value == ".")	{
					alert("Please Enter Owner share ");
					 document.getElementById('ownershare').focus();
					 return false;	
					}
			
			if(document.getElementById('rowcountidentify').value == ""){
			if (document.getElementById("formImageFile").value == ""  && document.getElementById("ImageHiddenWebCampPath").value == "" ) {
				alertMessaage(27);
				return false;
			}
			}
			
			if(document.getElementById("ImageHiddenWebCampPath").value !=""){
				document.getElementById("formImagepath").value = document.getElementById("ImageHiddenWebCampPath").value;
				document.getElementById("ImageHiddenWebCampPath").value = "";
			}
			else if(document.getElementById('formImageFile').value != ""){
				
				imageVal = document.getElementById("formImageFile").value.split('.');
				var ext = imageVal[imageVal.length - 1].toLowerCase();
				
				if ((ext != 'jpg') && (ext != 'jpeg') && (ext != 'gif')&& (ext != 'png')) {
					alertMessaage(28);
					return false;
				}	
				var filesize = ((document.getElementById("formImageFile").files[0].size) / (1024 * 1024)).toFixed(2);
				if (filesize > 2) {
					alertMessaage(29);
					return false;
				}
				var value = document.getElementById("formImageFile").value;
				var selectpath = value.split("\\");
				var selectname = selectpath[selectpath.length - 1];
				var filenamearray = document.getElementsByName("formImagehiddenName");
				var nameflag = 0;
				for ( var i = 0; i < filenamearray.length; i++) {
					var filename = filenamearray[i].value.split(",");
					var nameoflist = filename[0];
					
					if (document.getElementById('rowcountidentify').value != "") {
						var temprowCount = document.getElementById('rowcountidentify').value;
						if( i != temprowCount-1 ){
							if (selectname == nameoflist) {
								nameflag = 1;
						}}
						
					}else{
						if (selectname == nameoflist) {
								nameflag = 1;
						}
					}								
				}
				
					if (nameflag == 1) {
						alertMessaage(6);	
						return false;
					}
					else{
				
					var oMyForm = new FormData();
					oMyForm.append("upfile",
							document.getElementById("formImageFile").files[0]);
					oMyForm.append("divisionhierarchy", document.getElementById("divisionId").value
							+ "##"+ document.getElementById("districtid").value
							+ "##"+ document.getElementById("upazillaid").value
							+ "##"+ document.getElementById("mouzaid").value);					
					UploaddMultipartData('formImagepath','formImageFileUpload',oMyForm);  	
				
					if (document.getElementById("formImagepath").value == "failed") {
						alertMessaage(9);	
						return false;
					}	
				}			
			}	
			
			var val = document.getElementById("nationalid").value;
			if(parseFloat(val)<=0 && val != null){
				alertMessaage(49);
				return false;
			}
			
			var nid = document.getElementById('nationalid').value;
			if(nid == ""){
				nid = "-0";
			}
			var allIds = document.getElementsByName("nationalids");
			var flag = 0;
			for ( var i = 0; i < allIds.length; i++) {
				if (document.getElementById('rowcountidentify').value != "") {
					var temprowCount = document.getElementById('rowcountidentify').value;
					if( i != temprowCount-1 ){
						if (nid == allIds[i].value ) {
							flag = 1;
						}
					}
					
				}else{
					if (nid == allIds[i].value ) {
						flag = 1;
					}
				}
					
			}
			if (flag == 1) {
				alertMessaage(30);	
				document.getElementById('nationalid').focus();
				 addownerdetails(); 
				return false;
			}
			
			var val = document.getElementById("birthCertificateId").value;
			if(parseFloat(val)<=0 && val !=null  ){
				alertMessaage(49);
				return false;
			}
			
			if(nid==val){
				alert("National Id and Birth Certificate Id cannnot be same");
				document.getElementById('nationalid').focus();
				return false;
			}

			 var birthid = document.getElementById('birthCertificateId').value;
			var allbirthids = document.getElementsByName("birthCerficiateIds");
			var flag = 0;
			for ( var i = 0; i < allIds.length; i++) {
				if (document.getElementById('rowcountidentify').value != "") {
					var temprowCount = document.getElementById('rowcountidentify').value;
					if( i != temprowCount-1 ){
						if (birthid == allbirthids[i].value) {
							flag = 1;
						}
					}
					
				}else{
					if (birthid == allbirthids[i].value) {
						flag = 1;
					}
				}	
			} 
			if (flag == 1) {
				alertMessaage(31);	
				document.getElementById('birthCertificateId').focus();
				 addownerdetails(); 
				return false;
			}

			if (document.getElementById('ownershare').value != "") {
				var value = document.getElementById("ownershare").value;
				var filenamearray = document.getElementsByName("ownersharecount");
				var totalownershare = 0;
				var rowtt  =document.getElementById('rowcountidentify').value;
				for ( var i = 0; i < filenamearray.length; i++) {
					var id = filenamearray[i].id;
					if (document.getElementById('rowcountidentify').value == "") {
						totalownershare = parseFloat(totalownershare)+ parseFloat(filenamearray[i].value);
					}else{
						var idgen = "ownershare"+document.getElementById('rowcountidentify').value;
						if(filenamearray[i].id != idgen){
						totalownershare = parseFloat(totalownershare)+ parseFloat(filenamearray[i].value);
							}
						}
					
				}
				var totalsum = parseFloat(totalownershare) + parseFloat(value);
				 if (totalsum > 1.000) {
					alert("<spring:message code="script.ownerShareValidation"/>");
					document.getElementById("ownershare").focus();
					return false;
				} 
				var result = NumberLessThenOne(totalsum,'2');	
				if (result == false){
					return false;
				}
			}
			
			
			if (document.getElementById('rowcountidentify').value != "") {
				var rowtodel = document.getElementById('rowcountidentify').value;
				finalrowcntafterdel = editRow('tbl_owner', rowtodel);
			}
			
			var rowCount = 0;
			var table = document.getElementById(tableID);
			if (document.getElementById('rowcountidentify').value != "") {
				rowCount = document.getElementById('rowcountidentify').value;
				document.getElementById('rowcountidentify').value = "";
			} else {
					rowCount = table.rows.length;
					}
			 $('#load').attr('id','loader');
			$('body').removeClass('loaded');
			var row = table.insertRow(rowCount);
			var namecount = document.getElementById('firstname').value+ "#"+ document.getElementById('middlename').value
			+ "#"+ document.getElementById('lastname').value+ "#"+ document.getElementById('relativename').value
			+ "#"+ document.getElementById('houseno').value+ "#"+ document.getElementById('streetname').value
			+ "#"+ document.getElementById('localityname').value+ "#"+ document.getElementById('mouzaname').value
			+ "#"+ document.getElementById('upazillaname').value+ "#"+ document.getElementById('districtname').value			
			+ "#"+ document.getElementById('postalcode').value+ "#"+ document.getElementById('emailid').value
			+ "#"+ document.getElementById('telephoneno').value+ "#"+ document.getElementById('mobileno').value
			+ "#"+ document.getElementById('ownershare').value+ "#"+ document.getElementById('nationalid').value
			+ "#"+ document.getElementById('relationtype').value+ "#"+ document.getElementById('formImageFile').value
			+ "#"+ document.getElementById('searchbynationid').value+ "#"+ document.getElementById("rowcountidentify").value
			+ "#"+ document.getElementById("formImagepath").value+"#"+document.getElementById('birthCertificateId').value;
								
								var cell1 = row.insertCell(0);
								 cell1.innerHTML = '<a href="#" onclick="selectBtn(\''+ rowCount + '#' + namecount + '\'); return false;">Edit</a>'; 
								cell1.className = "text-center cellPadding_0";
								cell1.innerHTML = '<span style="padding:3px; width:100%; display:block; border-bottom:1px solid #9cb2d2;"><img src="./images/edit.png" class="editIcon" id=\'edit@'+ rowCount+'\' onclick="selectBtn(this.id); return false;" /></span>'+
								'<span style="padding:3px; width:100%; display:block;"><img src="./images/removeIcon.png" class="editIcon" id=\'delete@'+ rowCount+'\' onclick="deleteRowForDynamicTable(this.id); return false;" /></span>'+
								'<input type="hidden" id="editHidden'+rowCount+'" name="editHidden" value="'+namecount+'";">';

								var cell2 = row.insertCell(1);
								var element2 = document.createElement("input");
								var photoconstant = document.getElementById("formImagepath").value;											
								var selectpath = "";
								if (document.getElementById('firstname').value != "") {
								selectpath = photoconstant.split("/");
								}else{
								selectpath = photoconstant.split("\\");
								}							
								var selectname = selectpath[selectpath.length - 1];
								cell2.innerHTML = '<img src="ownerImage?path='+ photoconstant
										+ '" height="40" width="40"/>'+ '<input type="hidden" id="formImagehidden'+rowCount+'" name="formImagehidden1" value="'+photoconstant+'";">'+
										'<input type="hidden" id="formImagehiddenName'+rowCount+'" name="formImagehiddenName" value="'+selectname+'";">';
										
								document.getElementById("formImagepath").value = "";

								var cell3 = row.insertCell(2);
								var element3 = document.createElement("input");
								cell3.appendChild(element3);
								var mname = document.getElementById('middlename').value;
								var lname = document.getElementById('lastname').value;
								if (mname == "") {
									mname = "-";
								}
								if (lname == "") {
									lname = "-";
								}
								
								 var hiddenOwnerid = document.getElementById('hiddenownerid').value;
								 if(hiddenOwnerid == ""){
									 hiddenOwnerid = "-";
								 }
								
								var nametoctrlr = document.getElementById('firstname').value+ "#"+ mname+ "#"+ lname+ "#"+ hideownerid;
								var nameconstant = document.getElementById('firstname').value+ " "+ document.getElementById('middlename').value
										+ " "+ document.getElementById('lastname').value;
								cell3.innerHTML = nameconstant+ '<input type="hidden" id="name'+rowCount+'" name="fullname" value="'+nametoctrlr+'";">'+
																'<input type="hidden" id="hiddenOwnerId'+rowCount+'" name="hiddenOwnerId" value="'+hiddenOwnerid+'";">';

								var cell4 = row.insertCell(3);
								var relativetypeList = document.getElementById('relationtype').options;
								var selectedrelationIndex=document.getElementById('relationtype').selectedIndex;
								var relativetypename = relativetypeList[selectedrelationIndex].text;
								var relativeTypeArr = relativetypename.split("|");
								var element4 = document.createElement("input");					
								cell4.innerHTML = relativeTypeArr[0];
											
										
								var cell5 = row.insertCell(4);
								var relationconstant = document.getElementById('relativename').value;
								var relationid = document.getElementById('relationtype').value;
								cell5.innerHTML = relationconstant + '<input type="hidden" id="relationname'+rowCount+'" name="relationname" value="'+relationid+"##"+relationconstant+'";">';
										
								var cell6 = row.insertCell(5);
								var element6 = document.createElement("input");
								var hno = document.getElementById('houseno').value;
								var stnm =document.getElementById('streetname').value;
								var locnm = document.getElementById('localityname').value;
								var mouzaname = document.getElementById('mouzaname').value;
								var upnmfull = document.getElementById('upazillaname').value;
								var disnmful = document.getElementById('districtname').value;
								var disNo = disnmful.split("@@")[0];
								var disnm =  disnmful.split("@@")[1];
								var upaNo =upnmfull.split("@@")[0]; 
								var upaName = upnmfull.split("@@")[1]; 
								var mouNo = mouzaname.split("@@")[0];
								var mouNam = mouzaname.split("@@")[1];
								var pstcd = document.getElementById('postalcode').value;
								if(disnmful ==""){
									disNo = "-";
									disnm = "";
								}	
								if(upnmfull ==""){
									upaNo = "-";
									upaName = "";
								}	
								if(mouzaname ==""){
									mouNo = "-";
									mouNam = "";
								}
								var addressconstanttoshow = hno+" "+stnm+" "+locnm+" "+mouNam+" "+upaName+" "+disnm+" "+pstcd;
								if (hno == "") {
									hno = "-";
								}
								if (stnm == "") {
									stnm = "-";
								}
								if (locnm == "") {
									locnm = "-";
								}
								if (pstcd == "") {
									pstcd = "-";
								}
								if (mouNam == "") {
									mouNam = "-";
								}
								
								
								var addressconstant = hno+"@@"+stnm+"@@"+locnm+"@@"+mouNo+"@@"+upaNo+"@@"+disNo+"@@"+pstcd+"@@"+mouNam+"@@";
								cell6.innerHTML = addressconstanttoshow
								+ '<input type="hidden" id="addresses'+rowCount+'" name="fulladdress" value="'+addressconstant+'";">';

								var cell7 = row.insertCell(6);
								cell7.className = "text-right";
								var element7 = document.createElement("input");
								var mobileconstant = document.getElementById('mobileno').value;
								cell7.innerHTML = mobileconstant
										+ '<input type="hidden" id="mobile'+rowCount+'" name="mobilenumber" value="'+mobileconstant+'";">';

								var cell8 = row.insertCell(7);
								var element8 = document.createElement("input");
								cell8.className = "text-right";
								var teleconstant = document.getElementById('telephoneno').value;
								cell8.innerHTML = teleconstant
										+ '<input type="hidden" id="telephone'+rowCount+'" name="telenumber" value="'+teleconstant+'";">';

								var cell9 = row.insertCell(8);
								var element9 = document.createElement("input");
								var emailconstant = document.getElementById('emailid').value;
								cell9.innerHTML = emailconstant
										+ '<input type="hidden" id="email'+rowCount+'" name="emailids" value="'+emailconstant+'";">';

								var cell10 = row.insertCell(9);
								var element10 = document.createElement("input");
								cell10.className = "text-right";
								var nationalidconstant = document.getElementById('nationalid').value;

								cell10.innerHTML = nationalidconstant
										+ '<input type="hidden" id="nationalids'+rowCount+'" name="nationalids" value="'+nationalidconstant+'";">';
								document.getElementById("searchbynationid").value = "";
								
								
								var cell11 = row.insertCell(10);
								cell11.className = "text-right";
								var birthCertificate = document.getElementById('birthCertificateId').value;
								var hiddenBirthCerti = "-";
								if(birthCertificate != ""){
									hiddenBirthCerti = birthCertificate;
								}
								cell11.innerHTML = birthCertificate
										+ '<input type="hidden" id="birthCerficiateIds'+rowCount+'" name="birthCerficiateIds" value="'+hiddenBirthCerti+'";">';	
								var cell12 = row.insertCell(11);
								var element12 = document.createElement("input");
								cell12.className = "text-right";
								 alert("rowcunt:"+rowCount); 
								
								var ownershreconstant = document.getElementById('ownershare').value;
								var ownerhidconstant = "";
								if(ownershreconstant !="" && ownershreconstant !="."){
									ownershreconstant = parseFloat(ownershreconstant).toFixed(4);
									ownerhidconstant = ownershreconstant;
								}else{
									ownerhidconstant = "0";
								}
								cell12.innerHTML = ownershreconstant
										+ '<input type="hidden" id="ownershare'+rowCount+'" name="ownersharecount" value="'+ownerhidconstant+'";">';
																			
								document.getElementById('tbl_owner').style.display = "block";
								document.getElementById('ownerDiv').style.display = "block";
								document.getElementById('photoImageSpanRequired').style.display='inline-block';
								document.getElementById('addOwner').value = "Add Owner"; 
								document.getElementById('searchByFieldDiv').style.display = "block";
								document.getElementById('courtfeepaidDiv').style.display = "block";
								addownerdetails();
								purchaserRadioListClear("1");
								document.getElementById("nationalIdSelectRadio").checked = false;
								document.getElementById("birthCertificateSelectRadio").checked = false;
								document.getElementById('nationalAndBirthSearch').value = ""; 
								document.getElementById("nationalAndBirthSearch").setAttribute('maxlength', '0');	
								document.getElementById('ownerDetailsFieldDiv').style.display = "none";
								 $('body').addClass('loaded');
								return true;
							}
	}*/
	
	
	
	
	/*function addRowupload(tableidd) {	
		alert(tableidd);
		var filepath = "";
	    if (document.getElementById("mutationtype1").value == "14"){
			document.getElementById("auctioneerName").readOnly = true;
		}
		 
		if (document.getElementById("mutationtype1").value == "") {
			 
			alertMessaage(1,'');
		 	document.getElementById("mutationtype1").focus();
			return false;
		}
		else if (document.getElementById("documenttype").value == "") {	
			alertMessaage(2);
			document.getElementById("documenttype").focus();
			return false;
		} else if (document.getElementById("docno").value == "") {
			alertMessaage(3);
			document.getElementById("docno").focus();
			return false;
		} else if (document.getElementById("docdate").value == "") {
			alertMessaage(4);
			document.getElementById("docdate").focus();
			return false;
		}
		if (document.getElementById("documentFle").value == "") {
			alertMessaage(5);
			document.getElementById("documentFle").focus();
			return false;
		}

		
		
		if (document.getElementById("docno").value != "") {
			var value = document.getElementById("docno").value;

			var filenamearray = document.getElementsByName("documentno");
			var nameflag = 0;
			for ( var i = 0; i < filenamearray.length; i++) {
				if (value == filenamearray[i].value) {
					nameflag = 1;
				}
			}
			if (nameflag == 1) {
				alertMessaage(6);
				alertMessaage(50);
				return false;
			}
		}
		
		if (document.getElementById("documentFle").value != "") {
			var value = document.getElementById("documentFle").value;
			var selectpath = value.split("\\");
			var selectname = selectpath[selectpath.length - 1];
			var filenamearray = document.getElementsByName("documentnameonly");
			var nameflag = 0;
			for ( var i = 0; i < filenamearray.length; i++) {
				if (selectname == filenamearray[i].value) {
					nameflag = 1;
				}
			}
			if (nameflag == 1) {
				alertMessaage(6);
				return false;
			}
		}
		
		imageVal = document.getElementById("documentFle").value.split('.');
		var ext = imageVal[imageVal.length - 1].toLowerCase();
		if ((ext != 'pdf') && (ext != 'docx') && (ext != 'doc')
				&& (ext != 'txt') && (ext != 'jpg') && (ext != 'jpeg') && (ext != 'png') )   {
			alertMessaage(7);
			

			return false;
		}
		var filesize = ((document.getElementById("documentFle").files[0].size) / (1024 * 1024))
				.toFixed(2);
		if (filesize > 2) {
			alertMessaage(8);
			return false;
		} else {

			var oMyForm = new FormData();
			oMyForm.append("upfile",
					document.getElementById("documentFle").files[0]);
			oMyForm.append("divisionhierarchy",
					document.getElementById("divisionId").value
							+ "##"
							+ document.getElementById("districtid").value
									.split("##")[0]
							+ "##"
							+ document.getElementById("upazillaid").value
									.split("##")[0] + "##"
							+ document.getElementById("mouzaid").value);
	
			
			 $('#load').attr('id','loader');
			$('body').removeClass('loaded');
		
			$.ajax({
						url : 'saveUploadUserDocument',
						data : oMyForm,
						dataType : 'text',
						processData : false,
						contentType : false,
						type : 'POST',
						success : function(data) {
						var result = data.split("#");
							if (result[0] == "failed") {
								$('body').addClass('loaded');
								alertMessaage(9);
								return false;
								
							} else {
								document.getElementById("documentFilehidden").value = data;
								
								var table = document.getElementById(tableidd);
								//alert(table);
								var rowCount = table.rows.length;
								//alert(rowCount);
								

								var row = table.insertRow(rowCount);
								
								var cell1 = row.insertCell(0);
								var mutattiontypeid = document.getElementById('mutationtype1').value;
								var mutationtypename = document.getElementById("mutationtype1").options[document.getElementById('mutationtype1').selectedIndex].text;
								cell1.innerHTML = mutationtypename
										+ '<input type="hidden" id="documenttype'
										+ rowCount
										+ '" name="documenttypename" value="'
										+ mutattiontypeid
										+ '");">';

								var cell2 = row.insertCell(1);						
								var documenttypeId = document.getElementById('documenttype').value;
								var documenttypename = document.getElementById("documenttype").options[document.getElementById('documenttype').selectedIndex].text;
								cell2.innerHTML = documenttypename
										+ '<input type="hidden" id="documenttype'
										+ rowCount
										+ '" name="documenttypename" value="'
										+ documenttypeId
										+ '");">';

								var cell3 = row.insertCell(2);							
								cell3.className = "text-right";
								cell3.innerHTML = document
										.getElementById('docno').value
										+ '<input type="hidden" id="documentno'
										+ rowCount
										+ '" name="documentno" value="'
										+ document.getElementById('docno').value
										+ '");">';

								var cell4 = row.insertCell(3);							
								var filepath = document
										.getElementById("documentFilehidden").value;
								//alert("filepath:"+filepath);
								var name = filepath.split("#")[0];
								cell4.innerHTML = name
										+ '<input type="hidden" id="documentname'
										+ rowCount
										+ '" name="documentname" value="'
										+ filepath
										+ '");">'
										+ '<input type="hidden" id="documentnameonly'
										+ rowCount
										+ '" name="documentnameonly" value="'
										+ name + '");">';

								var cell5 = row.insertCell(4);
								
								cell5.className = "text-right";
								cell5.innerHTML = document
										.getElementById('docdate').value
										+ '<input type="hidden" id="documentdate'
										+ rowCount
										+ '" name="documentdate" value="'
										+ document.getElementById('docdate').value
										+ '");">';

								var cell6 = row.insertCell(5);
								cell6.className = "text-center";					
								cell6.innerHTML ="<img src='./images/removeIcon.png' title='Click to remove' class='removeIcon' id='removenew' onclick='deleteRow1(\""+rowCount+"\")' >";		
								
								
								document.getElementById("tbl_reportupload").style.display = 'table';
								
								showHideFormDetails("1");
								clearDocumentfields();
								
								$('body').addClass('loaded');
								return true;
							
							}

						}
					});
		}
		document.getElementById('documentfirstrow').style.display = "table-row";
	}
	*/
	
function resetPagefunction(){
		var sellerdetailsCheck = document.getElementsByName("selectformutation");
		var areatosellCheck = document.getElementsByName("areatosell");
		var sownersharepercentCheck = document.getElementsByName("sownersharepercent");
		var sharetosellCheck = document.getElementsByName("sharetosell");

		if(sellerdetailsCheck.length > 0){
			for ( var i = 0; i < sellerdetailsCheck.length; i++) {
				sellerdetailsCheck[i].checked=false;
				areatosellCheck[i].value="";
				areatosellCheck[i].setAttribute('readonly','readonly');
				sownersharepercentCheck[i].value="";
				sownersharepercentCheck[i].setAttribute('readonly','readonly');
				sharetosellCheck[i].value="";
				sharetosellCheck[i].setAttribute('readonly','readonly');
			 }
		}

		document.getElementById('radio1').checked = false;
		document.getElementById('radio2').checked = false;
		document.getElementById('reqownyes').checked = true;
		makemandatoryrequester();
		var ownertableRow = document.getElementById('tbl_owner').rows.length;
		if(ownertableRow > 1){
		for(var i = 1; i <ownertableRow ;i++){
			 var len = document.getElementById('tbl_owner').rows.length;
			document.getElementById('tbl_owner').deleteRow(1);
		}	
		}

		document.getElementById('tbl_owner').style.display = "none";

		var docstable = document.getElementById('tbl_reportupload').rows.length;
		if(docstable > 1){
		for(var i = 1; i <docstable ;i++){
			/*  var len = document.getElementById('tbl_owner').rows.length; */
			document.getElementById('tbl_reportupload').deleteRow(1);
		}	
		}

		document.getElementById('tbl_reportupload').style.display = "none";


		var buyertable = document.getElementById('tbl_buyer').rows.length;
		if(buyertable > 1){
		for(var i = 1; i <buyertable ;i++){
			/*  var len = document.getElementById('tbl_owner').rows.length; */
			document.getElementById('tbl_buyer').deleteRow(1);
		}	
		}
		document.getElementById('tbl_buyer_div').style.display = "none";

		addownerdetails("0");
		/*clearDocumentfields();*/
		document.getElementById('documenttype').value = "";
		document.getElementById('docno').value = "";
		document.getElementById('docdate').value = "";
		document.getElementById('documentFle').value = "";
		document.getElementById('documentFileSpan').innerHTML = "";
		/*  document.getElementById('mutationtype').readonly = "readonly"; */
		/*document.getElementById("mutationtype").value = "";	*/	
		document.getElementById("mutationtype1").removeAttribute("disabled");

		document.getElementById("requestername").value="";
		document.getElementById("requesteraddress").value="";
		document.getElementById("requestermobile").value="";
		document.getElementById("requesternationalid").value="";

		document.getElementById('tbl_reportupload').style.display = "none";
		 document.getElementById('ownerDiv').style.display = "none"; 
		document.getElementById('tbl_owner').style.display = "none";
		document.getElementById('tbl_owner').style.display = "none";
		document.getElementById('tbl_owner').style.display = "none";
		
		showHideFormDetails("2");
		
		
	}
	
	
	function deleteRowForDynamicTable(id){
		
		if (document.getElementById('rowcountidentify').value != "") {
			alert("Can not delete Details while Editing");
			return false;
		}
		var table = document.getElementById("tbl_owner");
		
		var dltRowcount = id.split("@")[1];
		var path = document.getElementById("formImagehidden"+dltRowcount).value;
		
		 $.ajax({
			    type: "POST",
			    url: "deleteFileDocument",
			    data: "filepath=" + path,                        
			    success: function(response) {
			        // do something
			       /*  alert(response); */
			    }
			}); 
		 
		 table.deleteRow(dltRowcount); 
		 var rowlength = table.rows.length;
		 if(rowlength > 1 ){
		 for( var i = dltRowcount ; i <rowlength ; i++){
			 var tempRow = parseInt(i)+1;
			 document.getElementById("delete@"+tempRow).id = "delete@"+i;	
			 document.getElementById("edit@"+tempRow).id = "edit@"+i;	
			 document.getElementById("editHidden"+tempRow).id = "editHidden"+i;		
			 document.getElementById("formImagehiddenName"+tempRow).id = "formImagehiddenName"+i; 
			 document.getElementById("name"+tempRow).id = "name"+i; 
			 document.getElementById("relationname"+tempRow).id = "relationname"+i; 
			 document.getElementById("addresses"+tempRow).id = "addresses"+i; 
			 document.getElementById("mobile"+tempRow).id = "mobile"+i; 
			 document.getElementById("telephone"+tempRow).id = "telephone"+i; 
			 document.getElementById("email"+tempRow).id = "email"+i; 
			 document.getElementById("nationalids"+tempRow).id = "nationalids"+i; 
			 document.getElementById("birthCerficiateIds"+tempRow).id = "birthCerficiateIds"+i; 
			 document.getElementById("ownershare"+tempRow).id = "ownershare"+i;		
		 }
		 }else{
			 document.getElementById('ownerDiv').style.display = "none";
		 }
		 
	}
	
	
	function setFieldValuesforSearch(which){
		if(which == ""){
			 if( document.getElementById("nationalIdSelectRadio").checked==false && 
					 document.getElementById("birthCertificateSelectRadio").checked==false ){
				 alert("Please Select One of the National ID or Birth Certificate ID");
				 return false;
			 }
		}
	    if(which == '1'){
		 document.getElementById("nationalAndBirthSearch").setAttribute('maxlength', '17');	
		}if(which == '2'){
			document.getElementById("nationalAndBirthSearch").setAttribute('maxlength', '15');	
		}
		document.getElementById('ownerDetailsFieldDiv').style.display = "none";
		addownerdetails();
		
	}
	
	
	function changeLocationDrps(which){
		if(which == '1')
			{
			var fullDistName = document.getElementById('districtname').value;
			disId =  fullDistName.split("@@")[0];
			loadTblWithPagination('upazillaname','getUpazillaDDFromDistrict','districtId='+disId+'&executeId=99');
			document.getElementById('upazilaDropDown2').style.display = "none";
			document.getElementById('upazilaDropDown1').style.display = "block";	
		}
		
		if(which == '2')
		{
		var fullDistName = document.getElementById('upazillaname').value;
		upaId =  fullDistName.split("@@")[0];
		loadTblWithPagination('mouzaname','getMouzaDDFromUpazilla','upazillaId='+upaId+'&executeId=99');
		document.getElementById('mouzaDropdown2').style.display = "none";
		document.getElementById('mouzaDropdown1').style.display = "block";
	}
}
	
	 function fileClickFunction(id){
		 $("#"+id).click();
	} 
	 
	 function showSpan1(which) {
			if (which == "1") {
				document.getElementById('addOwner').style.display = "table-cell";
			}
			if (which == "2") {
				document.getElementById('addOwner').style.display = "none";
				}
		}
	 
	 function selectBtn(id) {
			
			var row = id.split("@")[1];
			var val = document.getElementById("editHidden"+row).value;
			var val = row+"#"+val;
			document.getElementById('upazilaDropDown1').style.display = "block";			
			document.getElementById('mouzaDropdown1').style.display = "block";		
		   	document.getElementById('upazilaDropDown2').style.display = "none";			
			document.getElementById('mouzaDropdown2').style.display = "none";	
			document.getElementById('addOwner').value = "Update Owner";
			var res = val.split("#");
			document.getElementById('rowcountidentify').value = res[0];
			document.getElementById('firstname').value = res[1];
			document.getElementById('middlename').value = res[2];
			document.getElementById('lastname').value = res[3];
			document.getElementById('relativename').value = res[4];
			document.getElementById('houseno').value = res[5];
			document.getElementById('streetname').value = res[6];
			document.getElementById('localityname').value = res[7];
			document.getElementById('mouzaname').value = res[8];
			document.getElementById('upazillaname').value = res[9];
			document.getElementById('districtname').value = res[10];
			document.getElementById('postalcode').value = res[11];
			document.getElementById('emailid').value = res[12];
			document.getElementById('telephoneno').value = res[13];
			document.getElementById('mobileno').value = res[14];
			document.getElementById('ownershare').value = res[15];
			document.getElementById('nationalid').value = res[16];
			document.getElementById('relationtype').value = res[17];
			document.getElementById('searchbynationid').value = res[19];
			
			document.getElementById('formImagepath').value = res[21];
			document.getElementById('birthCertificateId').value = res[22];
			document.getElementById('photoImageSpanRequired').style.display = "none";
			
			document.getElementById('ownerDetailsFieldDiv').style.display = "block";
			if (res[19] == 1 || res[19] == 2 ) {
				document.getElementById('firstname').disabled = true;
				document.getElementById('middlename').disabled = true;
				document.getElementById('lastname').disabled = true;
				document.getElementById('relativename').disabled = true;
				document.getElementById('relationtype').disabled = true;
				
			}
			showSpan1("1");
		}

	 function hideUserForm() {
			document.getElementById('tbl_buyer_div').style.display = "none";
			document.getElementById('searchByFieldDiv').style.display = "inline";
			document.getElementById('courtfeepaidDiv').style.display = "inline";
			document.getElementById("searchbynationid").value = "";
			addownerdetails();
		}
	 
	 
	 function showdateofForm(val,id) {
			var string = document.getElementById('myselectid' + val).value;
			var res = string.split("#");
			
			// to prevent to add same owner again in the list (with owner Id)
			var ownerIdArr = document.getElementsByName("hiddenOwnerId");
			var flag = 0;
			for(var i = 0 ; i < ownerIdArr.length;i++){
				if(ownerIdArr[i].value == res[16]){
					flag = 1;
				}
			}
			if(flag == 1){
				alert("Same owner is already added to the list");
				document.getElementById(id).checked = false;
				return false;
			}
		
			document.getElementById('firstname').value = res[0];
			document.getElementById('middlename').value = res[1];
			document.getElementById('lastname').value = res[2];
			document.getElementById('relationtype').value = res[3];
			document.getElementById('relativename').value = res[4];
			document.getElementById('houseno').value = res[5];
			document.getElementById('streetname').value = res[6];
			document.getElementById('localityname').value = res[7];
		
			document.getElementById('postalcode').value = res[11];
			document.getElementById('mobileno').value = res[12];
			document.getElementById('telephoneno').value = res[13];
			document.getElementById('emailid').value = res[14];
			/* document.getElementById('nationalid').value = null; */
			/* document.getElementById('ownershare').value = res[15]; */
			document.getElementById('ownershare').value = "";
			document.getElementById('hiddenownerid').value = res[16];
			document.getElementById('nationalid').value = res[17];	
			document.getElementById('ownerDetailsFieldDiv').style.display = "block";
			if(res[10] !=""){
		 		document.getElementById('districtname').value = res[10];	
		 		changeLocationDrps('1');
		 		document.getElementById('upazillaname').value = res[9];
		 		changeLocationDrps('2');
		 		document.getElementById('mouzaname').value = res[8];
			}
			document.getElementById("searchbynationid").value = "2";
			document.getElementById('firstname').disabled = true;
			document.getElementById('middlename').disabled = true;
			document.getElementById('lastname').disabled = true;
			/*document.getElementById('relativename').disabled = true;
			document.getElementById('relationtype').disabled = true;*/
			
			document.getElementById('searchByFieldDiv').style.display = "none";
			
	}
	 
		

function showdataBasedonNationalId(val) {

			var res = val.split("#");
			document.getElementById('firstname').value = res[0];
			document.getElementById('middlename').value = res[1];
			document.getElementById('lastname').value = res[2];
			document.getElementById('relationtype').value = res[3];
			document.getElementById('relativename').value = res[4];
			document.getElementById('houseno').value = res[5];
			document.getElementById('streetname').value = res[6];
			document.getElementById('localityname').value = res[7];
			document.getElementById('postalcode').value = res[11];
			document.getElementById('mobileno').value = res[12];
			document.getElementById('telephoneno').value = res[13];
			document.getElementById('emailid').value = res[14];
			document.getElementById('nationalid').value = res[15];
			document.getElementById('birthCertificateId').value = res[16];
			document.getElementById('ownershare').value = "";
			
			if(document.getElementById('nationalid').value != "")
				document.getElementById('nationalid').disabled = true;
			
			if(document.getElementById('birthCertificateId').value != "")
				document.getElementById('birthCertificateId').disabled = true;
			
		 	if(res[10] !="" && res[10] != "@@"){
		 		document.getElementById('districtname').value = res[10];	
		 		changeLocationDrps('1');
		 		document.getElementById('upazillaname').value = res[9];
		 		changeLocationDrps('2');
		 		document.getElementById('mouzaname').value = res[8];
			}
}	 
	 




function addownerdetails(id) {
	//clear details
	document.getElementById('houseno').value = "";
	document.getElementById('streetname').value = "";
	document.getElementById('localityname').value = "";
	document.getElementById('mouzaname').value = "";
	document.getElementById('upazillaname').value = "";
	document.getElementById('districtname').value = "";
	document.getElementById('postalcode').value = "";
	document.getElementById('relativename').value = "";
	document.getElementById('emailid').value = "";
	document.getElementById('telephoneno').value = "";
	document.getElementById('mobileno').value = "";
	document.getElementById('firstname').value = "";
	document.getElementById('middlename').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('ownershare').value = "";
	document.getElementById('OwnerImageUPloadSpan').innerHTML = "";
	document.getElementById('ImageHiddenWebCampPath').value = "";
	document.getElementById("ownerWebCamImagethumDiv").style.display = "none";
	document.getElementById("ownerWebCamImagethum").src="";
	document.getElementById('birthCertificateId').value = "";
	document.getElementById('nationalAndBirthSearch').value = "";

	
	if(id != '1')
	{document.getElementById('nationalid').value = "";}
	
	document.getElementById('relationtype').value = "";
	document.getElementById('formImageFile').value = "";
//	document.getElementById('searchnationalid').value = "";
	document.getElementById('firstname').disabled = false;
	document.getElementById('middlename').disabled = false;
	document.getElementById('lastname').disabled = false;
	document.getElementById('relativename').disabled = false;
	document.getElementById('relationtype').disabled = false;
	document.getElementById('nationalid').disabled = false;
	document.getElementById('birthCertificateId').disabled = false;
	document.getElementById('hiddenownerid').value = "";
/* 	document.getElementById("imageUserLabel").value = "No file chosen"; */
	
	 document.getElementById('upazilaDropDown1').style.display = "none";
		
		document.getElementById('mouzaDropdown1').style.display = "none";
		
   		 document.getElementById('upazilaDropDown2').style.display = "block";
		document.getElementById('mouzaDropdown2').style.display = "block";

}


function clearDocumentfields() {
	//clear details
	document.getElementById('documenttype').value = "";
	document.getElementById('docno').value = "";
	document.getElementById('docdate').value = "";
	document.getElementById('documentFle').value = "";
	document.getElementById('documentFileSpan').innerHTML = "";
	/*  document.getElementById('mutationtype').readonly = "readonly"; */
	document.getElementById("mutationtype").value = document.getElementById("mutationtype1").value;
	document.getElementById("mutationtype1").setAttribute('disabled','disabled');
}


function editRow(tableid, rowCount) {

	var table = document.getElementById(tableid);
	var rowcountt = table.rows.length;
	table.deleteRow(rowCount);

	var retrow = rowcountt - 1;
	/*  alert(retrow+" to retiurn after delete");  */
	document.getElementById("rowcountidentify").value = rowCount;
	return retrow;

}


/*function deleteRow1(rowid) {
	
	try {
		
		 if (confirm("Do You Want to Remove Details ?") == false) {    
			   return false;
			   }
		
		var path = document.getElementById("documentname"+rowid).value.split("#")[1];
		
		var tbl = document.getElementById('tbl_reportupload');		
		var tablelen = tbl.rows.length;
		var flag = false;		
			if (tablelen > 2) {			
					flag = true;
					tbl.deleteRow(rowid);
					tablelen = tbl.rows.length;
				}				
			 else {
			
					tbl.deleteRow(1);					
					document.getElementById("mutationtype1").removeAttribute("disabled");
					 document.getElementById("mutationtype").value= "";
					document.getElementById("mutationtype1").value= ""; 
					document.getElementById('documenttype').value = "";
					document.getElementById('auctioneerName').readOnly = false;
					document.getElementById('tbl_reportupload').style.display = 'none';
					flag = true;
			}					
		var table = document.getElementById('tbl_reportupload');
		var tablelength = table.rows.length;
		 if(tablelength<2)
			{
			document.getElementById('tbl_reportupload').style.display = "none";
			showHideFormDetails("2")
			} 
		 
		 $.ajax({
			    type: "POST",
			    url: "deleteFileDocument",
			    data: "filepath=" + path,                        
			    success: function(response) {
			        // do something
			         alert(response); 
			    }
			}); 
	} catch (e) {
		alert(e);
	}
	
}*/


function showImageOnWebCampThumb(path,imgid){
	/* alert(document.getElementById("ImageHiddenWebCampPath").value); */
	var path = document.getElementById(path).value;
	/* alert("path:"+path); */
	document.getElementById(imgid).src="./images/greencheck.jpg";
	/* document.getElementById("ownerWebCamImagethum").setAttribute("src", "ownerImage?path="document.getElementById("ImageHiddenWebCampPath").value); */
	 /* document.getElementById(imgid).src="ownerImage?path="+path;  */
	document.getElementById(imgid+"Div").style.display="block";
}


function decimalDefualtCheck(value,id,evt){
	var code = evt.keyCode;
	var length = value.length;	
	if(length <= 5 && code == 8){
		return false;	
	}
}


function purchaserRadioListClear(which){
	if(which == "1"){
	if(document.getElementById('radio1').checked == true){
		var arr = document.getElementsByName("select1");
		for(var i = 0; i < arr.length; i++){
			if(arr[i].checked == true){
				arr[i].checked = false;
				}
			}
		}
	}
	if(which == "2"){
		document.getElementById('tbl_buyer_div').style.display = "none";
		document.getElementById('radio1').checked = false;
		document.getElementById('radio2').checked = false;
		addownerdetails("0");
			
		document.getElementById('ownerDiv').style.display = "none";
		document.getElementById('ownerDetailsFieldDiv').style.display = "none";
		var resultsTable = document.getElementById("tbl_owner");
		for(var i = 1; i < resultsTable.rows.length;)
		{   
		   resultsTable.deleteRow(i);
		}
	}	
}


function showHideFormDetails(which){
	document.getElementById('courtfeepaidDiv').style.display = "inline-block";
	if(which == "1"){
	if(document.getElementById("mutationtype1").value == '20'){
		document.getElementById('ispurchaserFieldDiv').style.display = "none";
		document.getElementById('ownerDetailsFieldDiv').style.display = "none";
		document.getElementById('searchByFieldDiv').style.display = "none";
		document.getElementById('requesterDetailsFieldDiv').style.display = "block";
		document.getElementById('submitrequest').style.display = "inline-block";	
		/* document.getElementById('resetButton').style.display = "inline-block";	 */
		document.getElementById('landAcquisitionFieldsDiv').style.display = "block";
	}
	else{
		document.getElementById('ispurchaserFieldDiv').style.display = "block";
		document.getElementById('searchByFieldDiv').style.display = "block";	
		document.getElementById('requesterDetailsFieldDiv').style.display = "block";
		document.getElementById('submitrequest').style.display = "inline-block";	
		/* document.getElementById('resetButton').style.display = "inline-block";	 */
		document.getElementById('landAcquisitionFieldsDiv').style.display = "none";
	}
	
	}
	
	if(which == "2"){
		document.getElementById('ispurchaserFieldDiv').style.display = "none";
		document.getElementById('ownerDetailsFieldDiv').style.display = "none";
		document.getElementById('searchByFieldDiv').style.display = "none";
		document.getElementById('requesterDetailsFieldDiv').style.display = "none";
		document.getElementById('submitrequest').style.display = "none";
		/* document.getElementById('resetButton').style.display = "none"; */
		document.getElementById('landAcquisitionFieldsDiv').style.display = "none	";
	}
}


function makemandatoryrequester() {
	
	if (document.getElementById("reqownno").checked == true) {
		
		if(document.getElementById("mutationtype1").value != '20'){
		var len = document.getElementsByName("fullname").length;
		if(len > 0){
			document.getElementById("requesterhide").style.display = "block";
		}
		else {
			alertMessaage(10);
			document.getElementById("reqownno").checked = false;
			document.getElementById("reqownyes").checked = true
			return false;
			}
		}else{
			document.getElementById("requesterhide").style.display = "block";
		}
	
	}
	if (document.getElementById("reqownyes").checked == true) {
		document.getElementById("requesterhide").style.display = "none";
		document.getElementById("requestername").value = "";
		document.getElementById("requestermobile").value = "";
		document.getElementById("requesternationalid").value = "";
		document.getElementById("requesteraddress").value = "";
		document.getElementById("requesterImageNAMEhidden").value = "";
		document.getElementById("requesterImagehidden").value = "";
		document.getElementById("requesterrelationtype").value = "";
	}

}


function checkNationalIdBirthIdLength(which,id){
	var length = id.value.length;
	if(which == "1"){
		if(length  == 0){
			return true;
		}
		else if(length<13){
			alertMessaage(11);
			   document.getElementById(id.id).focus();
			   return false;
		   }
	}
	
	if(which == "2"){
		if(length>0 && length<10){
			alertMessaage(12);
			   document.getElementById(id.id).focus();
			   return false;
		   }
	}
}

function newOwnerShareChagne(){
	document.getElementById('radio2').checked = false;
	document.getElementById('radio1').checked = false;
}

function isRequestNationIdUnique(id){
	var nid = document.getElementById(id).value;	
	var allIds = document.getElementsByName("nationalids");
	var flag = 0;
	for ( var i = 0; i < allIds.length; i++) {
				if (nid == allIds[i].value) {
					flag = 1;
				}	
	}
	if (flag == 1) {
		alertMessaage(13);
		document.getElementById(id).focus();
		return false;
	}

}

function checkNumberGreaterthenZero(id){
	if(document.getElementById(id).value <= 0 && document.getElementById(id).value != "")	{
		alertMessaage(14);
		document.getElementById(id).focus();
		return false;
		}
		
	}


function newOwnerShareEquals2TotalOwnerShare(){
	var chks = document.getElementsByName("selectformutation");
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked == true) {

			var rowcount = chks[i].value.split("@@")[1];
			var shareHiddenFlagValue   = document.getElementById("totalOnwerShareflag"+rowcount).value;
			var flagValue = shareHiddenFlagValue.split("&&")[0];
			var ownerShareFlagValuearr =  document.getElementsByName("totalOnwerShareflag");
			var totalCalculateShare = 0;
			var PreTotalShare = 0;
			for(var j = 0 ; j <ownerShareFlagValuearr.length ; j++){
				var value = ownerShareFlagValuearr[j].value;
				if(flagValue == ownerShareFlagValuearr[j].value.split("&&")[0]){
					PreTotalShare = ownerShareFlagValuearr[j].value.split("@@")[0].split("&&")[1];
					var rowCountfornewOwnerShare = ownerShareFlagValuearr[j].value.split("@@")[1];
					totalCalculateShare = totalCalculateShare + parseFloat(document.getElementById("newOwnerShare"+rowCountfornewOwnerShare).value);	
				
				}
			}
			
			var floatPreTotalShare = parseFloat(PreTotalShare);
			if(totalCalculateShare != floatPreTotalShare){
				alertMessaage(15,floatPreTotalShare.toFixed(4));
				document.getElementById("newOwnerShare"+rowcount).focus();
				document.getElementById('radio2').checked = false;
				document.getElementById('radio1').checked = false;
				return false;
			}
		}
	}
	return true;
}

function onchangeMutationType(){
	var tempMutationTypeId = document.getElementById("mutationtype1").value;
	resetPagefunction();
	document.getElementById("mutationtype1").value = tempMutationTypeId;
	var mutType=document.getElementById('mutationtype1').value;
	if(mutType == '14'){
		document.getElementById('auctioneerDiv').style.display="inline";
	}else{
		document.getElementById('auctioneerDiv').style.display="none";
	}
	loadTbl('documenttype','getDocumentlistfrommutation','transactionId='+document.getElementById('mutationtype1').value+'&executeId=1');	

	}


function checkLandProofDocument(){
	var doctypearr = document.getElementsByName("documenttypename");
	var flg = 0;
	for(var i = 0; i < doctypearr.length; i++){
		if(doctypearr[i].value == '5'){
			flg = 1;
		}
	}
	if(flg == 0){
		alertMessaage(51);
		return false;
	}else{
		return true;
	}
	
}

function checkFunctionForRequestMutation(action,listId) {
	


var chks = document.getElementsByName(listId);
if(action == "1") {
var ln = 0;
if(chks.length > 0){
	for ( var i = 0; i < chks.length; i++) {
		
		if (chks[i].checked == true) {
			list = chks[i].value;
			
			ln++;
			}
	 }
	if(ln == chks.length){
		document.getElementById('selectall').checked = true;
		return true;
	}
	else{
		document.getElementById('selectall').checked = false;
	}
}}
if(action == "2") {
	if(document.getElementById("mutationtype1").value == ""){
		alertMessaage(1);
		document.getElementById("mutationtype1").focus();
		document.getElementById('selectall').checked = false;
		return false;	
		}	
	
	var check = checkLandProofDocument();
	if(!check){
		document.getElementById("selectall").checked = false;
		return false;
	}
	if (document.getElementById('selectall').checked == true){
		var chks = document.getElementsByName(listId);
		var ln = 0;
		/* document.getElementById('chkboxseller1').click(); */
		if(chks.length > 0){
			for ( var i = 0; i < chks.length; i++) {
				
				if (chks[i].checked == false) {
					/*  chks[i].checked=true; */
					 var fullarr  =  chks[i].value;
					 var count = fullarr.split("@@")[1];
					 document.getElementById("chkboxseller"+count).click();
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
					/*  chks[i].checked=false; */
					 var fullarr  =  chks[i].value;
					 var count = fullarr.split("@@")[1];
					 document.getElementById("chkboxseller"+count).click();
					ln++;
					}
			 }}	
		}
	}
}

function mutationwebCamera(type){
	
	var tablerow = document.getElementById("tbl_owner").rows.length;
	if(document.getElementById('rowcountidentify').value != ""){
		tablerow = 'e'+document.getElementById('rowcountidentify').value;
	}
	
	 var muteId = document
		.getElementById("divisionId").value
		+ "!!"
		+ document.getElementById("districtid").value
		+ "!!"
		+ document.getElementById("upazillaid").value
		+ "!!"
		+ document.getElementById("mouzaid").value; 
	window.open('formImageWebCamUpload?requestType='+type+'&muteId='+muteId+'&row='+tablerow,'targetWindow', 'toolbars=0,width=500, height=300,left=0, top=0,scrollbars=1,resizable=1');
}



function NumberLessThenOne(value , which) {	
	if(value != ""){
	value = parseFloat(value).toFixed(4);
	if(document.getElementById("mutationtype1").value =="19"){
		var fullFlagArr = document.getElementsByName("totalOnwerShareflag");
		var calCulatedOwnerShare = 0;
		for(var i = 0; i< fullFlagArr.length; i++){
			if(fullFlagArr[i].value.startsWith("0")){
				var temprow = fullFlagArr[i].value.split("@@")[1];
				if(document.getElementById("chkboxseller"+temprow).checked == true){
					calCulatedOwnerShare = calCulatedOwnerShare+ parseFloat(document.getElementById("newOwnerShare"+temprow).value);
				}
			}
		}
		calCulatedOwnerShare = parseFloat(calCulatedOwnerShare).toFixed(4);
		if (value > calCulatedOwnerShare) {
			/* alert("Owner Share Must not be greater then "+calCulatedOwnerShare); */
			if (which == '0')
			{
				alertMessaage(17,calCulatedOwnerShare);
				/*alert("Owner Share Must not be greater then "+calCulatedOwnerShare);*/
				document.getElementById("ownershare").focus();		
			}
			else if(which == '1'){
				alertMessaage(18,calCulatedOwnerShare);
			/*	alert("Total Owner Share Must not be greater then "+calCulatedOwnerShare);*/
				
			}
			else if(which == '2'){
				alertMessaage(18,calCulatedOwnerShare);
				/*alert("Total Owner Share Must not be greater then "+calCulatedOwnerShare);*/
				document.getElementById("ownershare").focus();
			}
			return false;
		}
		if (which == '1')
		{
			if (value < calCulatedOwnerShare) {
				alertMessaage(19,calCulatedOwnerShare);
				/*alert("Total Owner Share Must not be less then "+calCulatedOwnerShare);*/
				return false;
			}
		}
		}
	else{ 
		if (value > 1.0000) {
		alertMessaage(20);
		document.getElementById("ownershare").focus();
		return false;
	}
		if (value < 1.0000 && which == '1') {
			alertMessaage(19,'1');
			document.getElementById("ownershare").focus();
			return false;
		}
	}
	}
}



function nationalBirthSeach() {
	var which = "";
	if(document.getElementById('nationalIdSelectRadio').checked == true){
		which = '1';
	}else if(document.getElementById('birthCertificateSelectRadio').checked == true){
		which = '2';
	}else if(document.getElementById("nationalAndBirthSearch").value != ""){
		alertMessaage(21);
		
		document.getElementById("nationalAndBirthSearch").value = "";
		return false;
	}else{
		return true;
	}
	var val = document.getElementById("nationalAndBirthSearch").value;
	if(parseFloat(val)<=0){
		alertMessaage(49);
		return false;
	}
	if(which == '1'){
		if(val.length == 0){
			return true;
			}
			else if(val.length<13){
				alertMessaage(11);
				   document.getElementById("nationalAndBirthSearch").focus();
				 //  addownerdetails('1');
				   return false;
			   }
		 	else{
				var arr = document.getElementsByName("nationalids");
				var tempFlag = 0;
				for(var i = 0 ; i <arr.length; i++){
					if(arr[i].value == val){
						tempFlag = 1;
					}
				}
				if(tempFlag ==1){
					alertMessaage(22);
					document.getElementById("nationalAndBirthSearch").focus();
					return false;
				}
			} 
	}
	if(which == '2'){
		if(val.length == 0){
			return true;
			}
			else if(val.length<10){
				alertMessaage(23);
				   document.getElementById("nationalAndBirthSearch").focus();
				 //  addownerdetails('1');

				   return false;
			   }
			else{
				var arr = document.getElementsByName("birthCerficiateIds");
				var tempFlag = 0;
				for(var i = 0 ; i <arr.length; i++){
					if(arr[i].value == val){
						tempFlag = 1;
					}
				}
				if(tempFlag ==1){
					alertMessaage(24);
					document.getElementById("nationalAndBirthSearch").focus();
					return false;
				}
			} 
	}
	
	
	 if(document.getElementById("searchbynationid").value =="" || document.getElementById("searchbynationid").value == "1"){
			
		 $('#load').attr('id','loader');
		$('body').removeClass('loaded');
		$.ajax({
						type : "POST",
						url : "searchUserByNationId",
						data : {
							"nationalId" : val,
							"action" : which
						},
						async: false,
						contentType: "application/x-www-form-urlencoded;charset=utf-8",
						success : function(data) {
							
							if (data == "notfound") {
								$('body').addClass('loaded');
								alertMessaage(25);	
								addownerdetails('1');
								
								if(which == '1'){
									document.getElementById('nationalid').value = val;
									document.getElementById('nationalid').disabled = true;
								}if(which == '2')
									{document.getElementById('birthCertificateId').value = val;
									document.getElementById('birthCertificateId').disabled = true;}
							
							} else {
								//alert("insdie else");
								//alert(data);
								showdataBasedonNationalId(data);
								document.getElementById('firstname').disabled = true;
								document.getElementById('middlename').disabled = true;
								document.getElementById('lastname').disabled = true;
								/*document.getElementById('relativename').disabled = true;
								document.getElementById('relationtype').disabled = true;*/
			
								document.getElementById("searchbynationid").value = "1";
								document.getElementById('upazilaDropDown1').style.display = "block";								
								document.getElementById('mouzaDropdown1').style.display = "block";									
							   	document.getElementById('upazilaDropDown2').style.display = "none";									
								document.getElementById('mouzaDropdown2').style.display = "none";
								$('body').addClass('loaded');
								
							}
							
							document.getElementById('ownerDetailsFieldDiv').style.display = "block";
						}
					});
	 	}		
	}


function checkvalidateforMutation(which) {
	document.getElementById('ownerDetailsFieldDiv').style.display = "none";
	try {
		var ln = 0;
		var chks = document.getElementsByName("selectformutation");
		if (chks.length > 0) {
			for ( var i = 0; i < chks.length; i++) {

				if (chks[i].checked == true) {
					ln++;  
				}
			}
			if (ln == 0) {
				/* alert("Please select atleast one khatian number"); */
				alertMessaage(26);	
				if (which == 1) {
					document.getElementById('radio1').checked = false;
				}
				if (which == 2) {
					document.getElementById('radio2').checked = false;
				}
				return false;
			}
			
			//for check the total owner share is equal to new owner share	
		
			
			var ownerShareCheck = newOwnerShareEquals2TotalOwnerShare();
			if( ownerShareCheck != false){
				try {
				var khatianid = document
							.getElementById('selectedKhatian').value;
					var mouzaid = document.getElementById('mouzaid').value;
					var chks = document
							.getElementsByName("selectformutation");
					var arr = new Array(chks.length);
					var ownerarr = [];
					var newarr = new Array(chks.length);
					if (chks.length > 0) {
						for ( var i = 0; i < chks.length; i++) {
							if (chks[i].checked == true) {
								arr[i] = chks[i].value.split("##")[0];
								var result = contains(ownerarr,
										chks[i].value.split("##")[0]);

								if (result == 1) {

								} else {
									ownerarr
											.push(chks[i].value.split("##")[0]);
								}
							}

						}
						var str = arr.join(',');
						document.getElementById('arrayList').value = str;
						if (ownerarr.length == document
								.getElementById('ownersize').value) {

						} else {

							loadTbl(
									'tbl_buyer',
									'getuncheckedOwnerList',
									'arrystring='
											+ document
													.getElementById('arrayList').value
											+ '&khatianIdd=' + khatianid
											+ '&mouzaid=' + mouzaid);
							document.getElementById('tbl_buyer_div').style.display = "block";
						}
					}

				} catch (e) {
					alert(e);
				}
				return true;
			}
		}
	} catch (e) {
		alert(e);
	}

}

function contains(val1, val2) {
	//alert(val2)
	var i = val1.length;
	while (i--) {
		if (val1[i] === val2) {
			return 1;
		}
	}
	return 2;
}

function checkforownervalidate() {	
	if (document.getElementById("nationalid").value == "" && document.getElementById("birthCertificateId").value == "") {
		alertMessaage(32);	
		document.getElementById("nationalid").focus();
		return false;
	}		
	else if (document.getElementById("firstname").value.trim() == "") {
		/* alert("Please enter first name"); */
		alertMessaage(33);	
		document.getElementById("firstname").focus();
		return false;
	}
	else if (document.getElementById("relationtype").value == "") {
		alertMessaage(34);	
		
		document.getElementById("relationtype").focus();
		return false;
	} else if (document.getElementById("relativename").value.trim() == "") {
		alertMessaage(35);	
		document.getElementById("relativename").value = "";
		document.getElementById("relativename").focus();

		return false;
	}	
	return true;
}
	  


function submitMutationRequest() {
	alert("1111");
debugger
	if (document.getElementById("mutationtype1").value != "20") { // for land
		// acquisition
		
		if(document.getElementById('rowcountidentify').value != ""){
		  	alertMessaage(52);
			return false;
		}
		if (document.getElementById('radio1').checked == false
				&& document.getElementById('radio2').checked == false) {
			alertMessaage(36);
			document.getElementById('radio1').focus();
			document.getElementById('radio2').focus();
			return false;
		}

		var len = document.getElementsByName("fullname");
		if (len.length <= 0) {
			alertMessaage(10);
			return false;
		}

		document.getElementById("uploadparam").value = "upload";
		if (document.getElementById("reqownno").checked == true) {

			if (document.getElementById("requestername").value.trim() == "") {
				alertMessaage(37);
				document.getElementById("requestername").focus();
				return false;
			} else if (document.getElementById("requestermobile").value.trim() == "") {
				alertMessaage(38);
				document.getElementById("requestermobile").focus();
				return false;
			} else if (document.getElementById("requesternationalid").value
					.trim() == "") {
				alertMessaage(39);
				document.getElementById("requesternationalid").focus();
				return false;
			} else if (document.getElementById("requesteraddress").value.trim() == "") {
				alertMessaage(40);
				document.getElementById("requesteraddress").focus();
				return false;
			} else if (document.getElementById("requesterrelationtype").value == "") {
				alertMessaage(41);
				document.getElementById("requesterrelationtype").focus();
				return false;
			} else if (document.getElementById("requesterImagehidden").value == "") {
				alertMessaage(42);
				return false;
			}else {

				var nid = document.getElementById("requesternationalid").value;
				var allIds = document.getElementsByName("nationalids");
				var flag = 0;
				for ( var i = 0; i < allIds.length; i++) {
					if (nid == allIds[i].value) {
						flag = 1;
					}
				}
				if (flag == 1) {
					alertMessaage(13);
					document.getElementById("requesternationalid").focus();
					return false;
				}
			}

		}

	} else {
		// for mutation id 20 land acquisition

		var allCheckBox = document.getElementsByName("selectformutation");
		var flag = 0;
		for ( var i = 0; i < allCheckBox.length; i++) {
			if (allCheckBox[i].checked == true) {
				flag = 1;
			}
		}
		if (flag == 0) {
			alertMessaage(26);
			/* alert("Please Select atleast one khatian Number"); */
			return false;
		}
		if (document.getElementById("LAdepartmentName").value.trim() == "") {
			alertMessaage(43);
			document.getElementById("LAdepartmentName").focus();
			return false;
		} else if (document.getElementById("LAownershare").value.trim() == "") {
			alert("Please Enter Owner Share");
			document.getElementById("LAownershare").focus();
			return false;
		}
		if (document.getElementById("LAmouzaname").value == "") {
			document.getElementById("LAmouzanameEngDesc").value = "-";
		} else {
			document.getElementById("LAmouzanameEngDesc").value = document
					.getElementById("LAmouzaname").options[document
					.getElementById('LAmouzaname').selectedIndex].text;
		}
	}

	var uplen = document.getElementsByName("documentno");
	if (uplen.length == 0) {
		alertMessaage(44);
		document.getElementById("addList").focus();
		return false;
	}

	var textdata = document.getElementsByName("sharetosell");
	var shr = document.getElementsByName("selectformutation");
	var textfinal = document.getElementsByName("owneridarray");

	var finalString = "";
	var finalval = "";

	for ( var i = 0; i < shr.length; i++) {
		if (shr[i].checked == true) {
			finalString = finalString + "," + textdata[i].value;
		}
		if (!shr[i].checked == true) {
			finalval = finalval + "," + textfinal[i].value;
		}
	}
	if (finalval.charAt(0) === ',')
		finalval = finalval.slice(1);

	document.getElementById("sharetosold").value = finalString;

	document.getElementById("notseller").value = finalval;

	var ownersharearray = document.getElementsByName("ownersharecount");
	var mytotalownershare = 0;
	for ( var i = 0; i < ownersharearray.length; i++) {
		mytotalownershare = parseFloat(mytotalownershare)
				+ parseFloat(ownersharearray[i].value);
		var share = ownersharearray[i].value;
	}

	var result = NumberLessThenOne(mytotalownershare, '1');

	if (result == false) {
		return false;
	}
	document.getElementById("sellerdetails").value = document
			.getElementById("arrayList").value;
	
	document.saveform.action = "uploadMutationDocs";
	$('#load').attr('id', 'loader');
	$('body').removeClass('loaded');
	document.saveform.submit();
}



function requesterImageUpload() {
	// alert("saveImage");
	// alert(val);
	if (document.getElementById("requesterImagefile").value == "") {
		alertMessaage(45);
		return false;
	}

	imageVal = document.getElementById("requesterImagefile").value
			.split('.');
	var ext = imageVal[imageVal.length - 1].toLowerCase();
	if ((ext != 'jpg') && (ext != 'jpeg') && (ext != 'gif')
			&& (ext != 'png')) {
		alertMessaage(28);
		return false;
	}
	var filesize = ((document.getElementById("requesterImagefile").files[0].size) / (1024 * 1024))
			.toFixed(2);
	if (filesize > 2) {
		alertMessaage(29);
		return false;
	}

	var oMyForm = new FormData();
	oMyForm.append("upfile",
			document.getElementById("requesterImagefile").files[0]);
	oMyForm.append("requester", "requester");
	oMyForm.append("divisionhierarchy", document
			.getElementById("divisionId").value
			+ "##"
			+ document.getElementById("districtid").value.split("##")[0]
			+ "##"
			+ document.getElementById("upazillaid").value.split("##")[0]
			+ "##" + document.getElementById("mouzaid").value);

	//alert(oMyForm);

	$
			.ajax({
				url : 'formImageFileUpload',
				data : oMyForm,
				dataType : 'text',
				processData : false,
				contentType : false,
				type : 'POST',
				success : function(data) {
					var result = data.split("#");
					if (result[0] == "failed") {
						alertMessaage(9);
						return false;
					} else {
						alertMessaage(46);
						document.getElementById("requesterImagehidden").value = data;
						// alert("hai:"+document.getElementById("requesterImagehidden").value);
						return true;
					}
				}
			});
}



function checkownersharevalue(ownershare) {
	debugger;

	var rowct = ownershare.split("##")[1];
	if(document.getElementById("mutationtype1").value == ""){
		alertMessaage(1);
		document.getElementById("mutationtype1").focus();
		document.getElementById("chkboxseller" + rowct).checked = false;
		return false;		
		}
	
	
	var check = checkLandProofDocument();
	if(!check){
		document.getElementById("chkboxseller" + rowct).checked = false;
		return false;
	}
	var tempownerid = ownershare.split("##")[2];
	var ownerAreaTemp  = ownershare.split("##")[3];
	var mutationtypeId = document.getElementById("mutationtype1").value;	
 	if(mutationtypeId == "19"){
		var chkArr = document.getElementsByName("selectformutation");
		if(document.getElementById("chkboxseller" + rowct).checked == true){
		
			for(var i = 0; i< chkArr.length; i++){
				
				var fullCheckBoxValue = chkArr[i].value;
			
				var tOwnerId = fullCheckBoxValue.split("##")[0];
				var tempcount = fullCheckBoxValue.split("@@")[1];		
				if(tOwnerId == tempownerid ){
					if(document.getElementById("chkboxseller" + tempcount).checked == false){
						document.getElementById("chkboxseller" + tempcount).click();
					}	
				}	
			}
		}else{
			
				for(var i = 0; i< chkArr.length; i++){
				var fullCheckBoxValue = chkArr[i].value;
				var tOwnerId = fullCheckBoxValue.split("##")[0];
				var tempcount = fullCheckBoxValue.split("@@")[1];
				
				
				if(tOwnerId == tempownerid ){
					
					if(document.getElementById("chkboxseller" + tempcount).checked == true){
						document.getElementById("chkboxseller" + tempcount).click();
					}	
				}	
			}
		}
		
	}	 
	var id = document.getElementById("chkboxseller" + rowct).value;
	var fullid = id + "##" + ownerAreaTemp+"##"+ document.getElementById('khatianid').value;
	
	if (document.getElementById("chkboxseller" + rowct).checked == true) {
	
		/* loadTblToAssginValue('remainingSownerShare','calculateOwnerPercent','fullid='+fullid);
				var dbOwnerValue = document.getElementById("remainingSownerShare").value; */			
				/* document.getElementById("sharetosell" + rowct).value = ownershare.split("##")[0]; */
				document.getElementById("sharetosell" + rowct).value = document.getElementById("newOwnerShare" + rowct).value;
			document.getElementById("areatosell" + rowct).value = document
					.getElementById("ownerarea" + rowct).value;
			if (document.getElementById("percent" + rowct).value == "0.00" || document.getElementById("percent" + rowct).value == "") {
				document.getElementById("percent" + rowct).value = '100';
					}	

			if(mutationtypeId != "19"|| mutationtypeId != "10"){
				
			document.getElementById("areatosell" + rowct).removeAttribute("readonly");
		document.getElementById("percent" + rowct).removeAttribute("readonly");
				}
	}
		 else {
				alert("hello");
		document.getElementById("percent" + rowct).setAttribute('readonly',
				'readonly');
		document.getElementById("areatosell" + rowct).setAttribute(
				'readonly', 'readonly');
		
		document.getElementById("percent" + rowct).value = "";
			document.getElementById("areatosell" + rowct).value = "";
			document.getElementById("sharetosell" + rowct).value = "";
			/* document.getElementById("remainingAreaToSell" + rowct).innerHTML  = "";
				document.getElementById("areaInProgress" + rowct).innerHTML = ""; */
	}

}


function calculateownershare(percent, share, rowct) {	
	
	
	if (document.getElementById("percent" + rowct).value > 100) {
		alertMessaage(47);
		document.getElementById("percent" + rowct).focus();
		return false;
	}
	
	if (document.getElementById("percent" + rowct).value < 0) {
		alert("Percenatge cannot be less than 0");
		document.getElementById("percent" + rowct).focus();
		return false;
	}
	
	
	if (document.getElementById("percent" + rowct).value == "" || document.getElementById("percent" + rowct).value == ".") {
		document.getElementById("percent" + rowct).value = "0.00";
		document.getElementById("sharetosell" + rowct).value = "0.0000";
		document.getElementById("areatosell" + rowct).value = "0.0000";
			
	}		
	else{
		var val = share * (percent / 100);
		var areaval = document.getElementById("ownerarea" + rowct).value
				* (percent / 100);
		document.getElementById("sharetosell" + rowct).value = val
				.toFixed(4);
		document.getElementById("areatosell" + rowct).value = areaval
				.toFixed(4);
		
		document.getElementById("percent" + rowct).value = parseFloat(document.getElementById("percent" + rowct).value).toFixed(2);	
	}
	

	if(document.getElementById("percent" + rowct).value == "0.00"){
	 document.getElementById("chkboxseller" + rowct).checked = false; 
		checkFunctionForRequestMutation('1','selectformutation');
			}else{
				 document.getElementById("chkboxseller" + rowct).checked = true; 
				checkFunctionForRequestMutation('1','selectformutation');
				}
}


function checkareatosell(area, rowct, name, plotno) {
	
	if(document.getElementById("areatosell" + rowct).value == "" || document.getElementById("areatosell" + rowct).value == "." ){
		 if(document.getElementById("chkboxseller" + rowct).checked == true){
			 document.getElementById("percent" + rowct).value = "0.00";
				document.getElementById("sharetosell" + rowct).value = "0.0000";
				document.getElementById("areatosell" + rowct).value = "0.0000"; 
		 }else{
		 return false;
		 }
		
	}
	else if (area > document.getElementById("ownerarea" + rowct).value) {
		alert(name + " can sell maximum "
				+ document.getElementById("ownerarea" + rowct).value
				+ " in parcel number " + plotno);
		document.getElementById("areatosell" + rowct).focus();
		return false;
	} else {
		var percenttocalc = (area / document.getElementById("ownerarea"
				+ rowct).value) * 100;
		var percenttoshow = percenttocalc.toFixed(2);
		document.getElementById("percent" + rowct).value = percenttoshow;
		var shareval = parseFloat(parseFloat(document
				.getElementById("newOwnerShare" + rowct).value)
				* parseFloat(document.getElementById("percent" + rowct).value)) / 100;
		document.getElementById("sharetosell" + rowct).value = shareval
				.toFixed(4);			
		document.getElementById("areatosell" + rowct).value = parseFloat(document.getElementById("areatosell" + rowct).value).toFixed(4);	
	}
	if(document.getElementById("areatosell" + rowct).value == 0.0000){
		 document.getElementById("chkboxseller" + rowct).checked = false; 
		checkFunctionForRequestMutation('1','selectformutation');
	}else{
		 document.getElementById("chkboxseller" + rowct).checked = true; 
	checkFunctionForRequestMutation('1','selectformutation');
		}
}


function CalculateAreaWithNewOwnerShare(area,rowcount,totalownerShareFlag,ownerId){
	
	var calculateArea = parseFloat(document.getElementById("newOwnerShare" + rowcount).value * area).toFixed(4);
	document.getElementById("ownerAreaDiv" + rowcount).innerHTML = calculateArea;
	document.getElementById("ownerarea" + rowcount).value = calculateArea;
 	if(document.getElementById("chkboxseller"+rowcount).checked == true)
		{ 
			document.getElementById("areatosell" + rowcount).value = calculateArea;
			document.getElementById("sharetosell" + rowcount).value = document.getElementById("newOwnerShare"+rowcount).value;
		}
	var chbk = document.getElementsByName("OwnerIdofornewOwnerShare");
 	var totalSharearr = totalownerShareFlag.split("&&");
	for(var i = 0 ; i < chbk.length ; i++){
		var valuearr = chbk[i].value.split("@@");
		if(ownerId == valuearr[0]){
			document.getElementById("newOwnerShare"+valuearr[1]).value = document.getElementById("newOwnerShare"+rowcount).value;			
			document.getElementById("ownerAreaDiv" + valuearr[1]).innerHTML = calculateArea;
			document.getElementById("ownerarea" + valuearr[1]).value = calculateArea;
			if(document.getElementById("chkboxseller"+valuearr[1]).checked == true)
			{ 
				document.getElementById("areatosell" + valuearr[1]).value = calculateArea;
				document.getElementById("sharetosell" + valuearr[1]).value = document.getElementById("newOwnerShare"+rowcount).value;
			}
				
		}
			
	}
 	
	/* var totalSharearr = totalownerShareFlag.split("&&");
	var chbk = document.getElementsByName("totalOnwerShareflag");
	var totalSum = 0;
	
	for(var i = 0 ; i < chbk.length ; i++){
		var valuearr = chbk[i].value.split("@@");
		if(totalSharearr[0] == valuearr[0].split("&&")[0]){
			totalSum = parseFloat(totalSum)+parseFloat(document.getElementById("newOwnerShare"+valuearr[1]).value);
		}
	}
	var floatTatolShare  = parseFloat(totalSharearr[1]).toFixed(4);
	if(floatTatolShare != totalSum ){
		alert("Total owner Share Must be:"+floatTatolShare);
		document.getElementById("newOwnerShare"+rowcount).focus();
		
	} */
}


function gotokhatiansearch() {
	document.saveform.action = "khatianSearch";
	document.saveform.submit(); 
	/* window.location.href = "khatianSearch"; */
}

function postalCodeinlength(evt) {
	if (postalcode.value != '' && postalcode.value.length != 0) {
		if (postalcode.value.length < 4) {
			alertMessaage(16);
			document.getElementById("postalcode").focus();
			return false;
		}
	}
	return true;
}


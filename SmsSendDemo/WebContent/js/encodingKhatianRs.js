function deleteplotRowForDynamicTable(id, row, plot, name) {
	debugger;
	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("newdetailstable");

	var possplotNo = document.getElementsByName("plotSrNo");
	var plott=document
			.getElementById("plotnos" + dltRowcount).value;
	 if (document.getElementById('editplotcountidentifyplot').value != "") {
		   alert("Cannot delete Details while Editing");
			return false;
		}
	 
	 

		if (possplotNo.length > 0) {
			for ( var j = 1; j <= possplotNo.length; j++) {
				var pplot=document
						.getElementById("plotSrNo" + j).value;
				if (parseInt(converBanglaToNumeric(plott).trim())== parseInt(converBanglaToNumeric(pplot.trim()))) {
					
					// alert("<spring:message code="script.removelinked"/>");
					alert("ILFS Technologies :Please remove the linked Row first");
					return false;
				}
			}
		}
	var valueplot = document.getElementById("deleteplothidden@" + dltRowcount).value;
	if (valueplot == 'existing' ||valueplot == 'edited') {
		if (confirm("Do you really want to delete this plot") == true) {
			var deletedexistingplot = document
					.getElementById("deletedexistingplot").value;
			if (deletedexistingplot == "")
				document.getElementById("deletedexistingplot").value = plot;
			else
				document.getElementById("deletedexistingplot").value = deletedexistingplot
						+ "#" + plot;

			table.deleteRow(dltRowcount);
			var rowlength = table.rows.length;

			for ( var i = dltRowcount; i < rowlength; i++) {
				var tempRow = parseInt(i) + 1;

				document.getElementById("deletePlot@" + tempRow).id = "deletePlot@"
						+ i;
				document.getElementById("deleteplothidden@" + tempRow).id = "deleteplothidden@"
						+ i;
				document.getElementById("editplothiddenflag@" + tempRow).id = "editplothiddenflag@"
						+ i;
				document.getElementById("editplothidden@" + tempRow).id = "editplothidden@"
						+ i;
				document.getElementById("editedplothidden@" + tempRow).id = "editedplothidden@"
					+ i;
				document.getElementById("plotnos" + tempRow).id = "plotnos"
					+ i;
				document.getElementById("plotids" + tempRow).id = "plotids"
					+ i;
				
				document.getElementById("editPlot@" + tempRow).id = "editPlot@"
					+ i;
				 document.getElementById("addrowPlotSymbol@"+tempRow).id = "addrowPlotSymbol@"+i;	
				 document.getElementById("addrowPlotSymbol1@"+tempRow).id = "addrowPlotSymbol1@"+i;
				 document.getElementById("addrowPlotSymbol2@"+tempRow).id = "addrowPlotSymbol2@"+i;
				 document.getElementById("addrowPlotSymbol3@"+tempRow).id = "addrowPlotSymbol3@"+i;
				 document.getElementById("addrowPlotSymbol4@"+tempRow).id = "addrowPlotSymbol4@"+i;
				 document.getElementById("addrowPlotSymbol5@"+tempRow).id = "addrowPlotSymbol5@"+i;
				 document.getElementById("addrowPlotSymbol6@"+tempRow).id = "addrowPlotSymbol6@"+i;
				 document.getElementById("addrowPlotSymbol7@"+tempRow).id = "addrowPlotSymbol7@"+i;
				document.getElementById("plotSymbol" + tempRow).id = "plotSymbol"
					+ i;
				
			}

			var deletedexistingplotrows = document
					.getElementById("deletedexistingplotrows").value;
			if (deletedexistingplotrows == "")
				document.getElementById("deletedexistingplotrows").value = 1;
			else
				document.getElementById("deletedexistingplotrows").value = +deletedexistingplotrows
						+ +1;
		}
	} else {

		table.deleteRow(dltRowcount);
		var rowlength = table.rows.length;
		for ( var i = dltRowcount; i < rowlength; i++) {
			var tempRow = parseInt(i) + 1;
			document.getElementById("deletePlot@" + tempRow).id = "deletePlot@"
					+ i;
			document.getElementById("deleteplothidden@" + tempRow).id = "deleteplothidden@"
					+ i;
			
			document.getElementById("editplothiddenflag@" + tempRow).id = "editplothiddenflag@"
				+ i;
		document.getElementById("editplothidden@" + tempRow).id = "editplothidden@"
				+ i;
		document.getElementById("editedplothidden@" + tempRow).id = "editedplothidden@"
			+ i;
		document.getElementById("plotnos" + tempRow).id = "plotnos"
			+ i;
		document.getElementById("plotids" + tempRow).id = "plotids"
				+ i;
		document.getElementById("editPlot@" + tempRow).id = "editPlot@"
			+ i;
		 document.getElementById("addrowPlotSymbol@"+tempRow).id = "addrowPlotSymbol@"+i;	
		 document.getElementById("addrowPlotSymbol1@"+tempRow).id = "addrowPlotSymbol1@"+i;
		 document.getElementById("addrowPlotSymbol2@"+tempRow).id = "addrowPlotSymbol2@"+i;
		 document.getElementById("addrowPlotSymbol3@"+tempRow).id = "addrowPlotSymbol3@"+i;
		 document.getElementById("addrowPlotSymbol4@"+tempRow).id = "addrowPlotSymbol4@"+i;
		 document.getElementById("addrowPlotSymbol5@"+tempRow).id = "addrowPlotSymbol5@"+i;
		 document.getElementById("addrowPlotSymbol6@"+tempRow).id = "addrowPlotSymbol6@"+i;
		 document.getElementById("addrowPlotSymbol7@"+tempRow).id = "addrowPlotSymbol7@"+i;
		document.getElementById("plotSymbol" + tempRow).id = "plotSymbol"
			+ i;

		}

	}
	  var plotnos=document.getElementsByName("plotnos").value;
	  	var plottable = document.getElementById("newdetailstable");
	  	var plotrowCount = plottable.rows.length;
	  	
	  	//alert("comboplot.length"+comboplot.length);
	  	
	  	removeplot();

	  		var plotCombo = document
	  				.getElementById("possessionPlot");
	  	for(var i=1;i<plotrowCount;i++)
	  	{
	  	
	  		var plotNum=document.getElementById("plotnos"+ i).value;
	  		var plotid=document.getElementById("plotids"+ i).value;
	  		
	  	if (plotNum.trim() != "" || plotNum.trim() != null) {
	  	
	  		var option = document.createElement("option");
	  		var plotNo = converToBanglaNumeric(plotNum);
	  		option.text = plotNo;
	  		option.value = plotid+"@"+plotNum;
	  	
	  			plotCombo.add(option, plotCombo[i]);
	  		

	  	} 
	  	}
	var rowCount = table.rows.length;
	if(rowCount=='1'){
		var row = table.insertRow(rowCount);
		var a=row.insertCell(0);
		//row.insertCell(1);								
		a.colSpan = "12";
		a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
		a.className='text-center';
		document.getElementById("plotvaluecheck").value=1;
	}	
	
	}
function deleteOwnerRowForDynamicTable(id, ownerid,addressid) {
	debugger;


	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("ownerTable");
	var possownername = document.getElementsByName("pownername");
	var ownername=document
			.getElementById("ownername@" + dltRowcount).value;
	
	var ownerrow=document
	.getElementById("rowcount@" + dltRowcount).value;
	  var flag = false;
	
	

	
	  if (document.getElementById('editcountidentify').value != "") {
		  alert("Cannot delete Details while Editing");
		   //alert("<spring:message code="script.cantdelete"/>");
			return false;
		}
	
     
	  
		
		var ownerrelationCheck = document.getElementById("relsame"+dltRowcount).checked;
		var ownerShareCheck = document.getElementById("shsame"+dltRowcount).checked;
		if(ownerShareCheck ==true ||ownerrelationCheck==true){
		

			var checkrowlength = table.rows.length;
			if((checkrowlength-1) != dltRowcount){
				var inct = parseInt(dltRowcount)+1;
				
				var prv= parseInt(dltRowcount)-1;
			//	var prvvalue1 = document.getElementById("relsame"+inct).checked;
				//var prvvalue = document.getElementById("shsame"+inct).checked;
				
				
				var value1 = document.getElementById("relsame"+inct).checked;
				var value = document.getElementById("shsame"+inct).checked;
				if((value == true && ownerShareCheck ==false)||(value1 == true && ownerrelationCheck ==false)){
					
					 if (confirm("all linked row will be deleted are you sure you want to delete")== false){
						   return false;
					   }else{
						flag = true;   
					   }
				}else if (confirm("Do you really want to delete this owner") == true) {		   

					 if (possownername.length > 0){
						for ( var j = 1; j <= possownername.length; j++) {
							var prowcount=document
									.getElementById("prowcount" + j).value;
							   var  posswnerid= document.getElementById("pownerid"+j).value.trim();
								if(ownerid=="0")
									{
							if (prowcount.trim()==ownerrow.trim()) {
								alert("ILFS Technologies :Please remove the linked Row first");
//							  /alert("<spring:message code="script.removelinked"/>");
								return false;
							}
									}
								else
									{
									if (posswnerid.trim()==ownerid.trim()) {
										alert("ILFS Technologies :Please remove the linked Row first");
//											 / alert("<spring:message code="script.removelinked"/>");
										return false;
									}
									
									}
									}
						}
					
					  
						 
						 var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
							if (valueowner == 'existing' || valueowner == 'edited') {
							
									var deletedexistingowner = document
											.getElementById("deletedexistingowner").value;
									if (deletedexistingowner == "")
										document.getElementById("deletedexistingowner").value = ownerid+"@"+addressid;
									else
										document.getElementById("deletedexistingowner").value = deletedexistingowner
												+ "#" + ownerid+"@"+addressid;

									table.deleteRow(dltRowcount);
									var rowlength = table.rows.length;


										updateId(dltRowcount,rowlength);				
								

									var deletedexistingownerrows = document
											.getElementById("deletedexistingownerrows").value;
									if (deletedexistingownerrows == "")
										document.getElementById("deletedexistingownerrows").value = 1;
									else
										document.getElementById("deletedexistingownerrows").value = +deletedexistingownerrows
												+ +1;
								
							}	
							else
								{
								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;
								updateId(dltRowcount,rowlength)	;
						 
						 
						 }
							RemoveAndAddOwner();
 
				   
				   
				   
			 
			 }
		
		}else if (confirm("Do you really want to delete this owner") == true) {		   

			 if (possownername.length > 0){
				for ( var j = 1; j <= possownername.length; j++) {
					var prowcount=document
					.getElementById("prowcount" + j).value;
			   var  posswnerid= document.getElementById("pownerid"+j).value.trim();
				if(ownerid=="0")
					{
			if (prowcount.trim()==ownerrow.trim()) {
//				  /alert("<spring:message code="script.removelinked"/>");
				alert("ILFS Technologies :Please remove the linked Row first");
				return false;
			}
					}
				else
					{
					if (posswnerid.trim()==ownerid.trim()) {
						alert("ILFS Technologies :Please remove the linked Row first");
//								/  alert("<spring:message code="script.removelinked"/>");
						return false;
					}
					
					}
					}
			}
		
		
			
			
			
			 var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
				if (valueowner == 'existing' || valueowner == 'edited') {
				
						var deletedexistingowner = document
								.getElementById("deletedexistingowner").value;
						if (deletedexistingowner == "")
							document.getElementById("deletedexistingowner").value = ownerid+"@"+addressid;
						else
							document.getElementById("deletedexistingowner").value = deletedexistingowner
									+ "#" + ownerid+"@"+addressid;

						table.deleteRow(dltRowcount);
						var rowlength = table.rows.length;

						updateId(dltRowcount,rowlength)	;

						var deletedexistingownerrows = document
								.getElementById("deletedexistingownerrows").value;
						if (deletedexistingownerrows == "")
							document.getElementById("deletedexistingownerrows").value = 1;
						else
							document.getElementById("deletedexistingownerrows").value = +deletedexistingownerrows
									+ +1;
					
				}	
				else
					{
					table.deleteRow(dltRowcount);
					var rowlength = table.rows.length;
					updateId(dltRowcount,rowlength)	;
			 
			 
			 
			 }
				RemoveAndAddOwner();

	   
	   
	   

}
	
		
		}else{
			
			
			var checkrowlength = table.rows.length;
			if((checkrowlength-1) != dltRowcount){
				var inct = parseInt(dltRowcount)+1;
				
				var value1 = document.getElementById("relsame"+inct).checked;
				var value = document.getElementById("shsame"+inct).checked;
				if(value == true || value1 ==true){
					
					 if (confirm("all linked row will be deleted are you sure you want to delete")== false){
						   return false;
					   }else{
						flag = true;   
					   }
				}else{
					if (confirm("are you sure you want to delete") == false) {
						   return false;
					   }else {
					
							 if (possownername.length > 0){
								for ( var j = 1; j <= possownername.length; j++) {
							var prowcount=document
									.getElementById("prowcount" + j).value;
							   var  posswnerid= document.getElementById("pownerid"+j).value.trim();
								if(ownerid=="0")
									{
							if (prowcount.trim()==ownerrow.trim()) {
//								 / alert("<spring:message code="script.removelinked"/>");
								alert("ILFS Technologies :Please remove the linked Row first");
								return false;
							}
									}
								else
									{
									if (posswnerid.trim()==ownerid.trim()) {
									alert("ILFS Technologies :Please remove the linked Row first");
												//  alert("<spring:message code="script.removelinked"/>");
										return false;
									}
									
									}
									}
							}
						
						   var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
							if (valueowner == 'existing' || valueowner == 'edited') {
							
									var deletedexistingowner = document
											.getElementById("deletedexistingowner").value;
									if (deletedexistingowner == "")
										document.getElementById("deletedexistingowner").value = ownerid+"@"+addressid;
									else
										document.getElementById("deletedexistingowner").value = deletedexistingowner
												+ "#" + ownerid+"@"+addressid;

									table.deleteRow(dltRowcount);
									var rowlength = table.rows.length;
									updateId(dltRowcount,rowlength)	;

									var deletedexistingownerrows = document
											.getElementById("deletedexistingownerrows").value;
									if (deletedexistingownerrows == "")
										document.getElementById("deletedexistingownerrows").value = 1;
									else
										document.getElementById("deletedexistingownerrows").value = +deletedexistingownerrows
												+ +1;
								
							}	
							else
								{
								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;
								updateId(dltRowcount,rowlength);	
								}
					   
							RemoveAndAddOwner();	
							   
					   
					   }
	
				}
			
			 }
			else{
				if (confirm("are you sure you want to delete") == false) {
					   return false;
				   }else {
					 	 if (possownername.length > 0){
							for ( var j = 1; j <= possownername.length; j++) {
								var prowcount=document
								.getElementById("prowcount" + j).value;
						   var  posswnerid= document.getElementById("pownerid"+j).value.trim();
							if(ownerid=="0")
								{
						if (prowcount.trim()==ownerrow.trim()) {
							 // alert("<spring:message code="script.removelinked"/>");
							alert("ILFS Technologies :Please remove the linked Row first");
							return false;
						}
								}
							else
								{
								if (posswnerid.trim()==ownerid.trim()) {
									//  alert("<spring:message code="script.removelinked"/>");
									alert("ILFS Technologies :Please remove the linked Row first");
									return false;
								}
								
								}
								}
						}
					
					   var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
						if (valueowner == 'existing' || valueowner == 'edited') {
						
								var deletedexistingowner = document
										.getElementById("deletedexistingowner").value;
								if (deletedexistingowner == "")
									document.getElementById("deletedexistingowner").value = ownerid+"@"+addressid;
								else
									document.getElementById("deletedexistingowner").value = deletedexistingowner
											+ "#" + ownerid+"@"+addressid;

								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;
								updateId(dltRowcount,rowlength);	

								var deletedexistingownerrows = document
										.getElementById("deletedexistingownerrows").value;
								if (deletedexistingownerrows == "")
									document.getElementById("deletedexistingownerrows").value = 1;
								else
									document.getElementById("deletedexistingownerrows").value = +deletedexistingownerrows
											+ +1;
							
						}	
						else
							{
							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;
							updateId(dltRowcount,rowlength)	;
					 
							}
						RemoveAndAddOwner();
				   }
		}
		}
	 
	 
		if(flag == true){
		
		var rowlength = table.rows.length;
			if(dltRowcount<rowlength)
				{
			 var relsame  =document.getElementsByName("relsame[]");
				var pownername1= new Array();
				if(relsame.length>1){
					var count=1;
					for(var k=dltRowcount ;k<=relsame.length;k++)
						{
						var x=parseInt(dltRowcount)+parseInt(count);
					
					if(x<=relsame.length)
						{
					if((document.getElementById("relsame"+x).checked==true) || (document.getElementById("shsame"+x).checked==true))
					{
					count++;	
					}
					
					else {
						break;
					}}
						}
				
					
			    for(var j=0 ;j<count;j++)
			     {
			    	var y=parseInt(dltRowcount)+parseInt(j);
			    	 var ownername  =  document.getElementById("ownername@"+y).value;
			    	 var ownerrow  =  document.getElementById("rowcount@"+y).value;
					    var powner= document.getElementsByName("pownername");
					    var ownerIds  =  document.getElementById("ownerid@"+y).value;
					    
					    for ( var t = 1; t <= powner.length; t++) 
					    	{
							var prowcount=document
							.getElementById("prowcount" + t).value;
					   var  posswnerid= document.getElementById("pownerid"+t).value.trim();
						if(ownerid=="0")
							{
					if (prowcount.trim()==ownerrow.trim()) {
						//  alert("<spring:message code="script.removelinked"/>");
						alert("ILFS Technologies :Please remove the linked Row first");
						return false;
					}
							}
						else
							{
							if (posswnerid.trim()==ownerIds.trim()) {
								//  alert("<spring:message code="script.removelinked"/>");
								alert("ILFS Technologies :Please remove the linked Row first");
								return false;
							}
							
							}
							}
						//table.deleteRow(y);
						
						pownername1.push(ownername);
			     }
						
						 for(var j=0 ;j<count;j++)
					     {
						var valueplot = document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
						
						if (valueplot == 'existing' || valueplot == 'edited') {
							var ownerId=document.getElementById("ownerid@"+dltRowcount).value;
							var addressId=document.getElementById("addressid@"+dltRowcount).value;
								var deletedexistingowner = document
										.getElementById("deletedexistingowner").value;
								if (deletedexistingowner == "")
									document.getElementById("deletedexistingowner").value = ownerId+"@"+addressId;
								else
									document.getElementById("deletedexistingowner").value = deletedexistingowner
											+ "#" + ownerId+"@"+addressId;

								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;
 
								updateId(dltRowcount,rowlength)	;

								var deletedexistingownerrows = document
										.getElementById("deletedexistingownerrows").value;
								if (deletedexistingownerrows == "")
									document.getElementById("deletedexistingownerrows").value = 1;
								else
									document.getElementById("deletedexistingownerrows").value = +deletedexistingownerrows
											+ +1;
							
						}						
						else {

								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;
								updateId(dltRowcount,rowlength);	

				
						
			       }
			    
			
					     }  
				
	 
		}
				
				RemoveAndAddOwner();
		
				
}
			}
		var rowCount = table.rows.length;
		if(rowCount=='1'){
			var row = table.insertRow(rowCount);
			var a=row.insertCell(0);
			//row.insertCell(1);								
			a.colSpan = "11";
			a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
			a.className='text-center';
			document.getElementById("ownervaluecheck").value=1;
		}		
		resetownerdetails();
}

function addRow(ownerTable) {
	debugger;
	var firstname = document.getElementById('firstname').value;
	var middlename = document.getElementById('middlename').value;
	var lastname = document.getElementById('lastname').value;
	var address = document.getElementById('address').value;
	var LawDueFrom = document.getElementById('Law_DueFrom').value;
	var RulesSpecialContext = document.getElementById('Rules_SpecialContext').value;
	
		
	
	var LawDueFromCheck;
	if(LawDueFrom=="")
		{
		LawDueFromCheck="-";
		}
	else
		{
		LawDueFromCheck=LawDueFrom;
		}
	
	var RulesSpecialContextCheck;
	if(RulesSpecialContext=="")
	{
		RulesSpecialContextCheck="-";
	}
else
	{
	RulesSpecialContextCheck=RulesSpecialContext;
	}
	
	
	//var hno = document.getElementById('houseno').value;

	//var stnm = document.getElementById('streetname').value;
	//var locnm = document.getElementById('localityname').value;

	var relationnamevalue = document.getElementById('relationname').value;
	var relationtypeid = document.getElementById('relationtype').value;
	var relationtypeText = document.getElementById('relationtype').options[document
			.getElementById('relationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('ownerShareTypeid').value;
	var ownerShipTypeText = document.getElementById('ownerShareTypeid').options[document
			.getElementById('ownerShareTypeid').selectedIndex].text;
	
	var ownersharsymbole = document.getElementById('symbol').value;
			var revenue = document.getElementById('revenue').value;
	var ownershare = document.getElementById('ownershare').value;
	
	
	var relation;
		 
		 
		 
		 if (firstname == "") {
	alert("Please enter first name");
	document.getElementById('firstname').focus();
	return false;	
	}
	
	if (relationtypeid == "" && document.getElementById('relationTypeCheck').checked == false ){
		alert("Please select relation");
		document.getElementById('relationtype').focus();
		return false;	
		}
	if (relationnamevalue == "" && document.getElementById('relationTypeCheck').checked == false ) {
		alert("Please enter relative name");
		document.getElementById('relationname').focus();
		return false;		
		}
	if (ownershipTypeid == ""&& document.getElementById('shareCheck').checked == false ) {
		alert("Please select owner type");
		document.getElementById('ownerShareTypeid').focus();
		return false;	
		}
	
	 
	
	if ((ownershare == "" && ownersharsymbole=="")&& document.getElementById('shareCheck').checked == false && ownershipTypeid!="3") {
		alert("Please enter owner share");
		document.getElementById('ownershare').focus();
		return false;
		}else if((ownershare == "" && ownersharsymbole=="")&& document.getElementById('shareCheck').checked == true)
			{
			
			}
	

	if(ownersharsymbole=='')
		ownersharsymbole="0";
	
	if (ownershipTypeid =='' && document.getElementById('shareCheck').checked == true ) {
		ownerShipTypeText="";
		ownershipTypeid ="0";
		
		}
	if(relationtypeid=='')
	{
	relation="";
	
}
else
	relation=relationtypeText + ":" + relationnamevalue;

var ownername=firstname.trim()+ " " + middlename.trim()+ " " +lastname.trim();
	var table = document.getElementById(ownerTable);
	var size=document.getElementById('ownersize').value;
	var ownervaluecheck=document.getElementById('ownervaluecheck').value;
	   if(size=='0' || ownervaluecheck==1){
		   table.deleteRow(1);
	   }
	var rowCount = table.rows.length;

	var prvownerShipid="";
	var addressid="";
	var prvrelationd="";
	var sequence="";
	var addedflag="";
	if(rowCount>1)
		{
		
 var prv=parseInt(rowCount)-1;

	
	var isrelationsame;
	var issharesame;
	if( document.getElementById('relationTypeCheck').checked==true)
		{
		 addedflag = document.getElementById('addedflag@'+prv).value;
		 addressid = document.getElementById('addressid@'+prv).value;
		 prvrelationd = document.getElementById('relationid@'+prv).value;
		if(addedflag=="existing" || addedflag=="edited"){
		isrelationsame="1"+"@"+addressid+"@"+prvrelationd;
		
		relationtypeid=prvrelationd;
		}
	else if(addedflag=="added")
		{
		for(var i=prv;i>=1;i--)
			{
			if(document.getElementById("relsame"+i).checked==false)
			{
				 addressid = document.getElementById('addressid@'+i).value;
				 sequence = document.getElementById('sequence@'+i).value;
			     prvrelationd = document.getElementById('relationid@'+i).value;

				
				break;
			}
			
			
			
			}
		isrelationsame="1"+"@"+addressid+"@"+prvrelationd;
		relationtypeid=prvrelationd;
		}
		}
	else if( document.getElementById('relationTypeCheck').checked==false)
		{
	
			isrelationsame="0"+"@"+"NA"+"@"+"NA";
			addressid="NA";
			
		}
	if(document.getElementById('shareCheck').checked==true)
		{
		 addedflag = document.getElementById('addedflag@'+prv).value;
		
		 sequence = document.getElementById('sequence@'+prv).value;
		 prvownerShipid = document.getElementById('ownerShipid@'+prv).value;
		if(addedflag=="existing"|| addedflag=="edited"){
		issharesame="1"+"@"+prvownerShipid+"@"+sequence;
		ownershipTypeid=prvownerShipid;
		}
		else if(addedflag=="added")
		{
		debugger;
			
			for(var i=prv;i>=1;i--)
			{
			if(document.getElementById("shsame"+i).checked==false)
			{
				sequence = document.getElementById('sequence@'+i).value;
		
				if(sequence=='')
					{
					sequence="NA";
					}
				 prvownerShipid = document.getElementById('ownerShipid@'+i).value;
		
			break;
			}
	
		}
			issharesame="1"+"@"+prvownerShipid+"@"+sequence;
			ownershipTypeid=prvownerShipid;
		}
		}
	else if( document.getElementById('shareCheck').checked==false)
	{

		issharesame="0"+"@"+ownershipTypeid+"@"+"NA";
		sequence="NA";
		
	}
	
	
		}else {
			addressid="NA";
			sequence="NA";
		isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
		issharesame="0"+"@"+ownershipTypeid+"@"+"NA";
		}

	

	var row = table.insertRow(rowCount);
		
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	cell1.appendChild(element1);
	cell1.innerHTML = ownername;
	if(prvownerShipid!="")
		{
		ownershipTypeid=prvownerShipid;
		}
	



	var cell2 = row.insertCell(1);
	cell2.innerHTML = relation;
	var cell3 = row.insertCell(2);
	cell3.innerHTML = address+
			'<input type="hidden" id="addressid@'+rowCount+'" name="addressid" value="'+addressid+'" />'
			+'<input type="hidden" id="relationid@'+rowCount+'" name="relationid" value="'+relationtypeid+'" />';
	
	var cell4 = row.insertCell(3);
	cell4.innerHTML = revenue;
	var cell5 = row.insertCell(4);
	cell5.innerHTML = ownerShipTypeText+
	'<input type="hidden" id="ownername@'+rowCount+'" name="ownername" value="'+ownername+'" />'+
	'<input type="hidden" id="ownerid@'+rowCount+'" name="ownerid" value="NA" />'+
'<input type="hidden" id="ownerShipid@'+rowCount+'" name="ownerShipid" value="'+ownershipTypeid+'" />';;

	var cell6=row.insertCell(5);
		var ownerSymbol = document.getElementById('symbol').value.trim();
	 var symbolValue= converBanglaToNumeric(ownerSymbol);
	
		var finalImage ='<span id="addrowSymbol@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol1@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol2@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol3@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol4@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol5@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol6@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol7@'+rowCount+'" class="symbolImg"></span>';
		
	cell6.innerHTML =finalImage+'<input type="hidden" id="ownerSymbol'+rowCount+'" name="ownerSymbol" value="'+ownerSymbol+'";">';
	
	if(symbolValue!="")
	{
		debugger;
		getSymbolImage('addrowSymbolID@'+rowCount,symbolValue,"");
	 }
	
	
	
	
	
	
	
	
	var cell7 = row.insertCell(6);
	cell7.innerHTML = ownershare;
	
	if(ownershare=='')
	{
	ownershare="0";
	}
	if(ownerSymbol=='')
	{
		ownerSymbol="0";
	}
if(revenue=='')
{

	revenue="0";
}
if(middlename=='')
{
	middlename="-";

}
if(lastname=='')
{
	lastname="-";

}


var ownerValues = firstname + "@" + middlename + "@" + lastname+"@"
+ converBanglaToNumeric(revenue) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"
+ converBanglaToNumeric(ownerSymbol)+"@"+rowCount+"@"+"NA"+"@"+LawDueFromCheck+"@"+RulesSpecialContextCheck+"@"+issharesame;
if(address=='')
	address="-";
	var owneraddress= address + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;
	debugger;
	
	
	var cell8 = row.insertCell(7);
	cell8.innerHTML = LawDueFrom;	
	
	var cell9 = row.insertCell(8);
	cell9.innerHTML = RulesSpecialContext;
	

	
	var cell10 = row.insertCell(9);
	cell10.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'edit@'

			+ rowCount
			+ '\' onclick="editOwnerdetails(this.id); return false;" /></span>'
			+ '<input type="hidden" id="editHidden@'
			+ rowCount
			+ '" name="editHidden" value="'
			+ ownerValues
			+ '">'
			+ '<input type="hidden" id="editHiddenAddress@'
			+ rowCount
			+ '" name="editHiddenAddress" value="'
			+ owneraddress
			+ '">'
			+ '<input type="hidden" id="addedflag@'
			+ rowCount
			+ '" name="addedflag" value="added">'
			+ '<input type="hidden" id="editHiddenowner@'
			+ rowCount
			+ '" name="editHiddenowner" value="">'
			+ '<input type="hidden" id="editHiddenownerAddress@'
			+ rowCount
			+ '" name="editHiddenownerAddress" value="">'
			+'<input type="hidden" id="rowcount@'
			+ rowCount
			+ '" name="rowcount" value="'+rowCount+'">'
			+'<input type="hidden" id="sequence@'
			+ rowCount
			+ '" name="sequence" value="'+sequence+'">';
	
	var cell11 = row.insertCell(10);
	cell11.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'deleteowner@'
			+ rowCount
			+ '\' onclick="deleteOwnerRowForDynamicTable(this.id,0); return false;" /><input type="hidden" id=\'deleteOwnerhidden@'
			+ rowCount + '\' value="added"/></span>';
	  
	  if( document.getElementById('relationTypeCheck').checked == true){
	   var cell12=row.insertCell(11);
	   cell12.className="text-center";
	  cell12.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]" checked="checked">'
	  +'<input type="hidden" id="isRelationSame@'
		+ rowCount
		+ '" name="isRelationSame" value="1">';
	  
	  }else{
		  var cell12=row.insertCell(11);
		   cell12.className="text-center";
		  cell12.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]">'
		  +'<input type="hidden" id="isRelationSame@'
			+ rowCount
			+ '" name="isRelationSame" value="0">';
		  
	  }
	  
	  
	  if( document.getElementById('shareCheck').checked == true){
		  var cell13=row.insertCell(12);
	   cell13.className="text-center";
	  cell13.innerHTML ='<input type="checkbox" id="shsame'+rowCount+'" disabled="true" name="shsame[]" checked="checked">';
	  }else{
		  var cell13=row.insertCell(12);
		   cell13.className="text-center";
		  cell13.innerHTML ='<input type="checkbox" id="shsame'+rowCount+'" disabled="true" name="shsame[]">';
		  
	  }
	
	
	
	
	table.rows[rowCount].className = "success";
	
	 if(document.getElementById('ownerShareTypeid').value =="3" || document.getElementById('ownerShareTypeid').value =="4" || document.getElementById('ownerShareTypeid').value =="5" ||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5")	
	  {
	var table = document.getElementById("ownerTable");

	 rowCount = table.rows.length;
	 var combo = document.getElementById("possessionOwnerName");

		if(combo.length>1)
		{
	    for(var k=combo.length;k>=1;k--)
	    {   
	    	combo.remove(k);
	    	
	    }
		}
	  }
	for(var i=1;i<rowCount;i++)
	{
	

		 if(document.getElementById('ownerShareTypeid').value =="3" || document.getElementById('ownerShareTypeid').value =="4" || document.getElementById('ownerShareTypeid').value =="5" ||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5")	
		  {

			 var ownernametext = document.getElementById("ownername@"+i).value;
			 var ownerid = document.getElementById("ownerid@"+i).value;
							 var ownershipid = document.getElementById("ownerShipid@"+i).value;
							
							 if(ownershipid=='3'||ownershipid=='4'||ownershipid=='5')
				{
				var ownernamevalue=ownernametext+"@"+i+"@"+ownerid;
				var option = document.createElement("option");
			
				option.text = ownernametext;
				option.value = ownernamevalue;
			
					combo.add(option, combo[i]);
				
				}
		


	} 
	}
	
	
	
	

var comboplot = document.getElementById("possessionPlot");
	 if(document.getElementById('ownerShareTypeid').value =="3" || document.getElementById('ownerShareTypeid').value =="4" || document.getElementById('ownerShareTypeid').value =="5"||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5" )	
	  {
  var firstName = document.getElementById("firstname");
  var middleName = document.getElementById("middlename");
  var LastName = document.getElementById("lastname");
 
	
//	var plotnos=document.getElementsByName("plotnos").value;
	var plottable = document.getElementById("newdetailstable");
	var plotrowCount = plottable.rows.length;
	

	//alert("comboplot.length"+comboplot.length);
	
	removeplot();
	
		var plotCombo = document
				.getElementById("possessionPlot");
	
	if(document.getElementById("plotvaluecheck").value!=1)
			{
	for(var i=1;i<plotrowCount;i++)
	{
		
		
		var plotNum=document.getElementById("plotnos"+ i).value;
		var plotid=document.getElementById("plotids"+ i).value;
		
	if (plotNum.trim() != "" || plotNum.trim() != null) {
	
		var option = document.createElement("option");
		var plotNo = converToBanglaNumeric(plotNum);
		option.text = plotNo;
		option.value = plotid+"@"+plotNum;
	
			plotCombo.add(option, plotCombo[i]);
		

	} 
	}
	  }
	  }
	 document.getElementById('ownervaluecheck').value="";
	 document.getElementById('ownersize').value="";
	 document.getElementById('rowcountidentifyrows').value=1;
	 resetownerdetails();
	 addownerdetails();
	 return true;
	 
}
	
	

function addPlotDetails(newdetailstable) {
debugger;
//var adjvarPlotNo = document.getElementById('AdjplotNo').value;
	var plotNo = document.getElementById('plotNo').value;
	if(plotNo=='')
		{
		alert("Please enter plot no");
		document.getElementById('plotNo').focus();
		return false;
		}
	
	
	var agricultureTypeidValue = document.getElementById('agricultureTypeid').value;

	var agricultureTypeidText = document.getElementById('agricultureTypeid').options[document
			.getElementById('agricultureTypeid').selectedIndex].text;

	var nonagricultureTypeidValue = document
			.getElementById('nonagricultureTypeid').value;

	var nonagricultureTypeidText = document
			.getElementById('nonagricultureTypeid').options[document
			.getElementById('nonagricultureTypeid').selectedIndex].text;
	var six = document.getElementById('six').value;
	var six1 = document.getElementById('six1').value;
	var six1NumericShow = converBanglaToNumeric(six1);
	if (six1NumericShow == 0. ||  six1NumericShow == 0.0 || six1NumericShow == 0.00 ||six1NumericShow == 0.000 ||six1NumericShow == 0.0000){
		six1NumericShow = "";
	}else{
		six1NumericShow =six1NumericShow;
		
	}
	var six1BanglaShow = converToBanglaNumeric(six1NumericShow);
	var symbol1 = document.getElementById('symbol1').value;
	var seven = document.getElementById('seven').value;
	if(symbol1==''&&seven=='')
		{
		alert("Please enter values in 7th column");
		document.getElementById('seven').focus();
		return false;
		}
	
	
	var eight = document.getElementById('eight').value;
	var eight1 = document.getElementById('eight1').value;
var plotremark=document.getElementById('Adjremarks').value;

if(agricultureTypeidValue=="0")
{
	agricultureTypeidText="";
}

if(nonagricultureTypeidValue=="0")
{
	nonagricultureTypeidText="";
}
	var allValuesPlot = converBanglaToNumeric(plotNo) + "@" +agricultureTypeidText+"@"+nonagricultureTypeidText+"@"+converBanglaToNumeric(six) + "@" + six1NumericShow + "@" + converBanglaToNumeric(seven)
			+ "@" + converBanglaToNumeric(eight) + "@" + converBanglaToNumeric(eight1)+"@"+converBanglaToNumeric(symbol1)+"@"+"@"+(plotremark==''?"-":plotremark)+"@"+agricultureTypeidValue+"@"
			+ nonagricultureTypeidValue;

	
	
	var table = document.getElementById(newdetailstable);
	var plotsize=document.getElementById("plotsize").value;
	var plotvaluecheck=document.getElementById('plotvaluecheck').value;
	 if(plotsize=='0' || plotvaluecheck==1){
		   table.deleteRow(1);
	   }
	
	var rowCount = table.rows.length;
	if(rowCount >1)
	{
var plotnum=converBanglaToNumeric(plotNo).trim();

for(var i=1;i<rowCount;i++)
	{
      var plot =document.getElementById("plotnos"+i).value;
	  if(parseInt(plot.trim())==parseInt(plotnum))
		  {
		  alert ("Plot can  not be duplicate");
		   resetPlotDetails();
		   return false;
		  }
	}

	}
	
	
	var row = table.insertRow(rowCount);
		
	
	/*var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	cell1.appendChild(element1);
	cell1.innerHTML = adjvarPlotNo+'<input type="hidden" id="AdjplotHidden'+rowCount+'" name="AdjplotTypeArr" value="'+converBanglaToNumeric(adjvarPlotNo)+'";">';;*/
	var cell1 = row.insertCell(0);
	cell1.innerHTML = plotNo+'<input type="hidden" id="plotnos'+rowCount+'" name="plotnos" value="'+converBanglaToNumeric(plotNo)+'";">'+
	'<input type="hidden" id="plotids'+rowCount+'" name="plotids" value="new";">';;
	var cell2 = row.insertCell(1);
	cell2.innerHTML = agricultureTypeidText;
	var cell3 = row.insertCell(2);
	cell3.innerHTML = nonagricultureTypeidText;
	var cell4 = row.insertCell(3);
	cell4.innerHTML = six;
	var cell5 = row.insertCell(4);
	cell5.innerHTML = six1BanglaShow;
	  var symbolValue= converBanglaToNumeric(symbol1);
	 
	var finalImage ='<span id="addrowPlotSymbol@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol2@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol4@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol6@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowCount+'" class="symbolImg"></span>';
	    
	var cell6 = row.insertCell(5);
	cell6.innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowCount+'" name="plotSymbol" value="'+symbol1+'";">';
	  if(symbolValue!="")
		{
	    	getSymbolImage('addrowPlotSymbolID@'+rowCount,symbol1,"");
		}
	var cell7 = row.insertCell(6);

	cell7.innerHTML =seven;
	var cell8 = row.insertCell(7);
	
	cell8.innerHTML = eight;
	var cell9 = row.insertCell(8);

	cell9.innerHTML = eight1;
	
	var cell10 = row.insertCell(9);
	cell10.innerHTML =plotremark+'<input type="hidden" id="AdjplotremarkHidden'+rowCount+'" name="AdjplotremarkTypeArr" value="'+plotremark+'";">';;
	var cell11 = row.insertCell(10);
	cell11.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'editPlot@'
			+ rowCount
			+ '\' onclick="editplotdetails(this.id); return false;" /></span>'
			+ '<input type="hidden" id="editplothidden@'
			+ rowCount
			+ '" name="editplothidden" value="'
			+ allValuesPlot
			+ '">'
			+ '<input type="hidden" id="editplothiddenflag@'
			+ rowCount
			+ '" name="editplothiddenflag" value="added">'
			+'<input type="hidden" id="editedplothidden@'
			+ rowCount
			+ '" name="editedplothidden" value="">'
			+'<input type="hidden" id="plotrowcount@'
			+ rowCount
			+ '" name="plotrowcount" value="'+rowCount+'">';
	var cell12 = row.insertCell(11);
	cell12.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" name=\'deletePlot@'
			+ rowCount
			+ '\' id=\'deletePlot@'
			+ rowCount
			+ '\' onclick="deleteplotRowForDynamicTable(this.id,'+rowCount+','+converBanglaToNumeric(plotNo)+',this.name); return false;" />'
			+'<input type="hidden" value="added" id=\'deleteplothidden@'+ rowCount + '\'></span>';
	// table.row.style
	table.rows[rowCount].className = "success";
	/* if (document.getElementById("possessionOwnerName").length > 1) {
	  var cmb=document.getElementById("possessionPlot").length;
	   var comboplot = document.getElementById("possessionPlot");  
	    var option = document.createElement("option");
	    option.text = plotNo ;
	    option.value ="new@"+converBanglaToNumeric(plotNo);
	    comboplot.add(option,null);
	  }*/
	document.getElementById("plotsize").value="";
	 document.getElementById("plotvaluecheck").value="";
	 resetPlotDetails();
	 return true;

}
function submitform() {
	
	var table = document.getElementById("ownerTable");
	var rowCount = table.rows.length;
	
	var tableplot = document.getElementById("newdetailstable");

	var rowCountplot = tableplot.rows.length;
	
		
		if(document.getElementById("imagesSize").value != document.getElementById("imageClickCount").value){
			alert("please encode  the images");
			return false;
		}
		
		
		var khatno=document.getElementById("khatianno").value;
		if(khatno=='')
		{
		alert("Khatian no can not be blank");
		document.getElementById("khatianno").focus();
		return false;
		}
		var khatiannumber=document.getElementById("khatianNolist").value;
		var khatId=document.getElementById("khatId").value;
		var khatianid=document.getElementById("khatianid").value;
	/*	
	var	khatnos=khatiannumber.split("@");
	var	khatids=khatId.split("@");
		var count=0;
		
		for(var i=0;i<khatnos.length;i++)
			{
			
		
		if(khatnos[i]==converBanglaToNumeric(khatno))
				{
			
			if(khatids[i]==khatianid){				
			
			}
			else 
				{
				alert("Khatian no can not be duplicate");
				document.getElementById("khatianno").focus();
				return false;
				}
				}
			}*/
	 
		var touzino=document.getElementById("touzino").value;
		/*if(touzino=="")
			{
			alert("Please enter Touji no");
			document.getElementById('touzino').focus();
			return false;
			}*/
		var ownervaluecheck=document.getElementById("ownervaluecheck").value;
		if(ownervaluecheck==1)
		{
		alert("Please add atleast one owner");
		//document.getElementById("khatianno").focus();
		return false;
		}
		
		var plotvaluecheck=document.getElementById("plotvaluecheck").value;
		if(plotvaluecheck==1)
		{
		alert("Please add atleast one plot");
		//document.getElementById("khatianno").focus();
		return false;
		}
		
		var jlno=document.getElementById("jlno").value;
		var rsno=document.getElementById("rasa").value;
			var khatianRemarks=document.getElementById("remarks").value;
		var lawcasenum=document.getElementById("lawcasenum").value;
	
		if(khatianRemarks=='')
			{
			khatianRemarks="NA";
			}
		else
			khatianRemarks=khatianRemarks;
		

		if(lawcasenum=='')
			{
			lawcasenum="NA";
			}
		else
			lawcasenum=lawcasenum;
	
		document.getElementById("editedkhatianjlno").value=converToBanglaNumeric(khatno)+"@"+converBanglaToNumeric(jlno)+"@"+rsno+"@"+converBanglaToNumeric(touzino)+"@"+khatianRemarks+"@"+lawcasenum;
	

		var tablepossession = document.getElementById("Possessiontable");

		var rowCountpossession = tablepossession.rows.length;
		  var ownerLength=document.getElementById("possessionOwnerName");
		 
		    var plotLength=document.getElementById("possessionPlot");
		    
		   
		    var possessionvaluecheck=document.getElementById("possessionvaluecheck").value;
		     if(possessionvaluecheck==1)
			   {
			  rowCountpossession=0;
			   }
		   if(ownerLength.length>1 && plotLength.length >1 && rowCountpossession=="1" )
		  	  {
			  // alert("<spring:message code="script.clickforposs"/>");
		  	 alert("click here to add possession");
		  	$("#inputFillPossession").show();
		     	document.getElementById("possessionOwnerName").focus();
		  		return false;
		  		
		  	  } 
		   	else if(ownerLength.length>1 && plotLength.length>1)
		    {
		  	
		      var counterValue=0;
		    	var posseesionOwner=document.getElementsByName("pownerid");
		    	 for (var i = 1; i < ownerLength.length; i++)
		    	 {
		    		 for (var j = 1; j <=posseesionOwner.length; j++) 
		    			 {
		    			 var pwe=document.getElementById("pownerid"+j).value;
		    			 var pwecount=document.getElementById("prowcount"+j).value;
		    			var ownerrow=ownerLength.options[i].value.split("@")[2];
		    			var ownerrowcount=ownerLength.options[i].value.split("@")[1];
		    			if(ownerrow=='NA')
		    				{
		    				ownerdropvalue=ownerrow.trim()+ownerrowcount.trim();
		    				pownervalue=pwe.trim()+pwecount.trim();
		    				 if (ownerdropvalue.trim() == pownervalue.trim())
				    		   {
				    	 			counterValue++;  
				    			  break;
				    	        }
				    				
		    				}
		    			else if (ownerrow.trim() == pwe.trim())
		    		   {
		    	 			counterValue++;  
		    			  break;
		    	        }
		    				
		    	
		    			 }
		    	
		    	} 
		     
		    	if(counterValue	!= (ownerLength.length-1))
		    		{
		    		//alert("<spring:message code="script.addpossforowner"/>");
		    		alert("Please Add Possession Share for Owner.");
		        	return false;
		    		}
		    		
		    		
		    	
}
		
	
	var i;
	for (i = 1; i < rowCount; i++) {
		debugger;
		var flag = document.getElementById("addedflag@" + i).value;
		if (flag == "added") {
			
			var valueadded = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="addedValues' + rowCount
							+ '" name="addedValues" value="' + valueadded
							+ '" />');
			var editHiddenAddress = document.getElementById("editHiddenAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="addedaddress' + rowCount
							+ '" name="addedaddress" value="' + editHiddenAddress
							+ '" />');
		}
		if (flag == "existing") {
			var existingvalues = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingValues' + rowCount
							+ '" name="existingValues" value="'
							+ existingvalues + '" />');

		}
		if (flag == "edited") {
			var existingvaluesOwner = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedValuesowner' + rowCount
							+ '" name="editedValuesowner" value="'
							+ existingvaluesOwner + '" />');
			var existingOwnerAddress = document.getElementById("editHiddenAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingOwnerAddress' + rowCount
							+ '" name="existingOwnerAddress" value="'
							+ existingOwnerAddress + '" />');
			
			var editHiddenowner = document.getElementById("editHiddenowner@" + i).value;
	
			$('#saveform').append(
					'<input type="hidden" id="editHiddenownerValue' + rowCount
							+ '" name="editHiddenownerValue" value="'
							+ editHiddenowner + '" />');
			var editedOwnerAddress = document.getElementById("editHiddenownerAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedOwnerAddress' + rowCount
							+ '" name="editedOwnerAddress" value="'
							+ editedOwnerAddress + '" />');
		}

	}
	


	for ( var i = 1; i < rowCountplot; i++) {
		debugger;
		var flagplot = document.getElementById("editplothiddenflag@" + i).value;

		if (flagplot == "added") {
			var valueaddedplot = document.getElementById("editplothidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="addedPlotValues@' + rowCount
							+ '" name="addedPlotValues" value="'
							+ valueaddedplot + '" />');
		}
		if (flagplot == "existing") {
			var existingvaluesplot = document.getElementById("editplothidden@"
					+ i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingPlotValues@' + rowCount
							+ '" name="existingPlotValues" value="'
							+ existingvaluesplot + '" />');

		}
		if (flagplot == "edited") {
			//for existing
			var editedvaluesPlot = document.getElementById("editplothidden@"
					+ i).value;

			$('#saveform').append(
					'<input type="hidden" id="editedValuesPlot' + rowCount
							+ '" name="editedValuesPlot" value="'	
						+ editedvaluesPlot + '" />');
			//for edited
			var editedPlotvalues = document.getElementById("editedplothidden@"
					+ i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedPlotValues' + rowCount
							+ '" name="editedPlotValues" value="'
							+ editedPlotvalues + '" />');
			
		}

	}
	var possessionvaluecheck=document.getElementById("possessionvaluecheck").value;
	if(possessionvaluecheck!=1)
		{
	for ( var i = 1; i < rowCountpossession; i++) {
		
		var flagpossession = document.getElementById("editPossessionhiddenflag@" + i).value;

		if (flagpossession == "added") {
	
			
			var valueaddedpossession = document.getElementById("editPossessiondetails@" + i).value;
			var possessionrowcount = document.getElementsByName("editPossessiondetails" + i).value;
		
			$('#saveform').append(
					'<input type="hidden" id="addedPossessionValues@' + rowCount
							+ '" name="addedPossessionValues" value="'
							+ valueaddedpossession + '" />');
			$('#saveform').append(
					'<input type="hidden" id="addedPossessionrowcount@' + rowCount
							+ '" name="addedPossessionrowcount" value="'
							+ possessionrowcount + '" />');
		}
	}
		}
	if(rowCount < 2){
		alert("Please add atleast one owner");
		return false;
	  }
	else if(rowCountplot < 2){
		alert("Please add atleast one plot");
		return false;
	   }
	
	if(document.getElementById("flagvalue").value==1){
		var flag = caseNoandDoc();
		if(flag == false){
		return false;
		}
	}
		
	 var oMyForm = new FormData();
		oMyForm.append("upfile",
				document.getElementById("file").files[0]);			
		UploaddMultipartData('filepath','UploadPhoto',oMyForm);  	
	  
		if (document.getElementById("filepath").value == "InvalidFile") {
			alert("::Trying to Upload Invalid File Formate::");
			return false;
		}
		if (document.getElementById("filepath").value == "failed") {
			alert("upload Failed");
			return false;
		}
	
	
	  if( confirm("Are you sure to submit data?") == true)
	    {
	    	document.saveform.action = "saveencodeddataRS";
	    	document.saveform.submit();
	    }
	      
}

function editplotdetails(id) {
	clearPlotDetails();
debugger;

var row = id.split("@")[1];
var edittedval = document.getElementById("editedplothidden@" + row).value;

if(edittedval=='')
{

var val = document.getElementById("editplothidden@" + row).value;
res = val.split("@");
}
else
{
	res = edittedval.split("@");
}



var possplotNo = document.getElementsByName("plotSrNo");
var plott=document
		.getElementById("plotnos" + row).value;
 
if (possplotNo.length > 0) {
	for ( var j = 1; j <= possplotNo.length; j++) {
		var pplot=document
				.getElementById("plotSrNo" + j).value;
		if (parseInt(converBanglaToNumeric(plott).trim())== parseInt(converBanglaToNumeric(pplot.trim()))) {
			//alert("<spring:message code="script.removelinked"/>");
			alert("ILFS Technologies :Please remove the linked Row first");
			return false;
		}
	}
}
	document.getElementById("editplotcountidentifyplot").value="1";
	
	
	document.getElementById('plotNo').value = converToBanglaNumeric(res[0]);
	//alert("res[13] isss"+res[13]);
	document.getElementById('plotId').value = res[13];
	document.getElementById('agricultureTypeid').value=res[11];
	document.getElementById('nonagricultureTypeid').value=res[12];
	
	document.getElementById('six').value = converToBanglaNumeric(res[3]);
	document.getElementById('six1').value = converToBanglaNumeric(res[4]);
	
	document.getElementById('eight').value = converToBanglaNumeric(res[6]);
	document.getElementById('eight1').value = converToBanglaNumeric(res[7]);
	//document.getElementById('AdjplotNo').value = converToBanglaNumeric(res[9]);
	//alert("res[10]::"+res[10]);
	document.getElementById('Adjremarks').value = res[10]=='-'?'':res[10];
	if(res[8]=="0")
	{
res[8]="";
	}
	if(res[8]!="")
	{
document.getElementById('symbol1').value = converToBanglaNumeric(res[8]);
document.getElementById('seven').disabled =true;
var symbolValue= converBanglaToNumeric(res[8]);

getSymbolImage('symbol1',symbolValue,"");
	}
else{
document.getElementById('symbol1').disabled =true;
}
	if(res[5]=="0" || (converBanglaToNumeric(res[5])=="0.0000"))
	{
	res[5]="";
	}

	
	if(res[5]!="")
	{
document.getElementById('seven').value = converToBanglaNumeric(res[5]);
document.getElementById('symbol1').disabled =true;
 
	}
else{
document.getElementById('seven').disabled =true;
}
	document.getElementById('rowcountidentifyplot').value = row;
	$("#addPlotButton").hide();
	$("#editPlotButton").show();
	document.getElementById("plotNo").focus();
	$("#inputFillParcel").show();
}

function UpdatePlotDetails() {
	var table = document.getElementById("newdetailstable");
	var plotNo = document.getElementById('plotNo').value;
	//var AdjplotNo = document.getElementById('AdjplotNo').value;
	
	
	var Adjremarks = document.getElementById('Adjremarks').value;
	var agricultureTypeidValue = document.getElementById('agricultureTypeid').value;

	var agricultureTypeidText = document.getElementById('agricultureTypeid').options[document
			.getElementById('agricultureTypeid').selectedIndex].text;

	var nonagricultureTypeidValue = document
			.getElementById('nonagricultureTypeid').value;

	var nonagricultureTypeidText = document
			.getElementById('nonagricultureTypeid').options[document
			.getElementById('nonagricultureTypeid').selectedIndex].text;
	
	if(agricultureTypeidValue=="0")
	{
		agricultureTypeidText="";
	}
	
	if(nonagricultureTypeidValue=="0")
	{
		nonagricultureTypeidText="";
	}
	var six = document.getElementById('six').value;
	var six1 = document.getElementById('six1').value;
	var symbol1 = document.getElementById('symbol1').value;
	var seven = document.getElementById('seven').value;
	var eight = document.getElementById('eight').value;
	var eight1 = document.getElementById('eight1').value;
	var plotId = document.getElementById('plotId').value;
	var rowcountidentifyplot = document.getElementById('rowcountidentifyplot').value;
	//table.rows[rowcountidentifyplot].cells[0].innerHTML = AdjplotNo;
	

	if(plotId=="")
		{
		plotId="NA"
		}

	
	
	table.rows[rowcountidentifyplot].cells[0].innerHTML = plotNo
	+'<input type="hidden" id="plotnos'+rowcountidentifyplot+'" name="plotnos" value="'+plotNo+'" >'+
	'<input type="hidden" id="plotids'+rowcountidentifyplot+'" name="plotids" value="'+plotId+'"  >';
	table.rows[rowcountidentifyplot].cells[1].innerHTML = agricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[2].innerHTML = nonagricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[3].innerHTML = six;
	table.rows[rowcountidentifyplot].cells[4].innerHTML = six1;
	 	  
	  
	  var symbolValue= converBanglaToNumeric(symbol1);
		 
		var finalImage ='<span id="addrowPlotSymbol@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol2@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol4@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol6@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowcountidentifyplot+'" class="symbolImg"></span>';
		    
		 table.rows[rowcountidentifyplot].cells[5].innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowcountidentifyplot+'" name="plotSymbol" value="'+symbol1+'";">';
		  if(symbolValue!="")
			{
		    	getSymbolImage('addrowPlotSymbolID@'+rowcountidentifyplot,symbol1,"");
			}
	   
		  
	/*table.rows[rowcountidentifyplot].cells[6].innerHTML = symbol1;*/
	table.rows[rowcountidentifyplot].cells[6].innerHTML = seven;
	table.rows[rowcountidentifyplot].cells[7].innerHTML = eight;
	table.rows[rowcountidentifyplot].cells[8].innerHTML = eight1;
	table.rows[rowcountidentifyplot].cells[9].innerHTML = Adjremarks;
	 
	table.rows[rowcountidentifyplot].className = "danger";
var flagplot=document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value;
if(symbol1=='')
{
	symbol1="0";
}
if(seven=='')
{
	seven="0";
}


var values=converBanglaToNumeric(plotNo) + '@'
+ agricultureTypeidText
+ '@'
+ nonagricultureTypeidValue
+ '@'
+converBanglaToNumeric(six)
+ '@'
+ converBanglaToNumeric(six1)
+ '@'
+ converBanglaToNumeric(seven)
+ '@'
+ converBanglaToNumeric(eight)
+ '@'
+ converBanglaToNumeric(eight1)
+'@'
+converBanglaToNumeric(symbol1)
+'@'
+"NA"
+'@'
+Adjremarks
+ '@'
+ agricultureTypeidValue
+ '@'
+ nonagricultureTypeidValue
+ '@' + plotId;

	if(flagplot=='added')
	{
		document.getElementById("editplothidden@" + rowcountidentifyplot).value = values;
document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'added';
}
if(flagplot=='existing' || flagplot=='edited')
{
	document.getElementById("editedplothidden@" + rowcountidentifyplot).value = values;
	document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'edited';
}
document.getElementById('editplotcountidentifyplot').value ="";
resetPlotDetails();

}

function editOwnerdetails(id)
{
	debugger;
	addownerdetails();
	var row = id.split("@")[1];
	
	var edittedval = document.getElementById("editHiddenowner@" + row).value;
	var res;
	var valAddress;
	var resAddress;
	if(edittedval=='')
		{
		
	var val = document.getElementById("editHidden@" + row).value;

	 res = val.split("@");
 valAddress = document.getElementById("editHiddenAddress@" + row).value;
	 resAddress = valAddress.split("@");

		}
	else
	{
		
		var val = document.getElementById("editHiddenowner@" + row).value;
		
	 res = val.split("@");
		valAddress = document.getElementById("editHiddenownerAddress@" + row).value;
		 resAddress = valAddress.split("@");
	}
	
	if(document.getElementById('shsame'+row).checked == true){
	alert("Updation not allowed please delete and insert new row");
		return false;
	}

	var addedglag = document.getElementById("addedflag@" + row).value;
if(addedglag=='existing' || addedglag=='edited')
	{
	var ownerId = document.getElementById("ownerid@" + row).value;
	var  ownerNo=document.getElementsByName("pownername");
		
if(ownerNo.length>0){
	
 for(var j=1;j<=ownerNo.length;j++)
 {		
 if(ownerId.trim() ==(document.getElementById("pownerid"+j).value.trim()))
	{
	// alert("<spring:message code="script.removelinked"/>");
	alert("Please remove the linked Possession Share first For Updating Owner");
		return false;
		
	}	
 }
 }
}else if(addedglag=='added')
		{
		
		var rowcount = document.getElementById("rowcount@" + row).value;
		var  ownerNo=document.getElementsByName("pownername");
		if(ownerNo.length>0){
			 for(var j=1;j<=ownerNo.length;j++)
	 {
			
	 if(rowcount.trim() ==(document.getElementById("prowcount"+j).value.trim()))
		{
		 //alert("<spring:message code="script.removelinked"/>");
		alert("Please remove the linked Possession Share first For Updating Owner");
		addownerdetails();
		resetOwner1();
		return false;
			
		}	
	 }
	 }
	
		}
var table = document.getElementById("ownerTable");
var rowlength=table.rows.length;
if(row<rowlength)
{
var relsame  =document.getElementsByName("relsame[]");
if(relsame.length>1){
	var count=1;
	for(var k=row ;k<=relsame.length;k++)
		{
		var x=parseInt(row)+parseInt(count);
	
	if(x<=relsame.length)
		{
	if((document.getElementById("relsame"+x).checked==true) || (document.getElementById("shsame"+x).checked==true))
	{
	count++;	
	}
	
	else {
		break;
	}}
		}

	
for(var j=1 ;j<count;j++)
{
	var y=parseInt(row)+parseInt(j);
	    var flagValue = document.getElementById("addedflag@" + y).value;
		var  ownerNo=document.getElementsByName("pownername");
		if(ownerNo.length>0){
	    if(flagValue=='added')
		{
		
		var rowcount = document.getElementById("rowcount@" + y).value;
	
	 for(var j=1;j<=ownerNo.length;j++)
	 {
			
	 if(rowcount.trim() ==(document.getElementById("prowcount"+j).value.trim()))
		{
		 //alert("<spring:message code="script.removelinked"/>");
		alert("Please remove the linked Possession Share first For Updating Owner");
		
		return false;
			
		}	
	 }
	 }else if(flagValue=='existing' || flagValue=='edited')
		{
			var ownerId = document.getElementById("ownerid@" + y).value;
			var  ownerNo=document.getElementsByName("pownername");
				
		if(ownerNo.length>0){
			
		 for(var j=1;j<=ownerNo.length;j++)
		 {		
			
		 if(ownerId.trim() ==(document.getElementById("pownerid"+j).value.trim()))
			{
			 //alert("<spring:message code="script.removelinked"/>");
			alert("Please remove the linked Possession Share first For Updating Owner");
		
			return false;
				
			}	
		 }
		 }

		}
}

 }


}

//************//

}
	document.getElementById('editcountidentify').value="1";
	if(row=="1"){
		document.getElementById('rowcountidentify').value="1";
}else
	document.getElementById('rowcountidentify').value="";
	var ownername = document.getElementById("ownername@" + row).value;

	
if(document.getElementById('relsame'+row).checked == true){
	
	 document.getElementById("relationtype").disabled = true;
	 document.getElementById("relationname").disabled = true;
	 document.getElementById("address").disabled = true;
	 /*document.getElementById("houseno").disabled = true;
	 document.getElementById("streetname").disabled = true;
	 document.getElementById("localityname").disabled = true;
	 document.getElementById("districtname").disabled = true;
	 document.getElementById("upazillaname").disabled = true;
	 document.getElementById("mouzaname").disabled = true;
	 document.getElementById("districtname").value= "0";
	 document.getElementById("upazillaname").disabled = "0";
	 document.getElementById("mouzaname").disabled = "0";
*/
	}








	

	
	
if(document.getElementById('relsame'+row).checked == true)
	{
	$('#relationTypeCheck').prop("checked",true);
	}
if(document.getElementById('shsame'+row).checked == true)
	{
	$('#shareCheck').prop("checked",true);
	
	
	
	}
	document.getElementById('firstname').value = res[0];
if(res[1]=="-")
	{
	res[1]="";
	}
if(res[2]=="-")
{
res[2]="";
}
if(resAddress[0]=="-")
{
	resAddress[0]="";
}

if( res[9]=="-")
	{
	 res[9]="";
	}
if( res[10]=="-")
{
 res[10]="";
}

/*if(resAddress[1]=="-")
{
	resAddress[1]="";
}
if(resAddress[2]=="-")
{
	resAddress[2]="";
}*/
	document.getElementById('middlename').value = res[1];
	document.getElementById('lastname').value = res[2];
	//alert("res[8]:::::"+res[9]);

	document.getElementById('Law_DueFrom').value = res[9];
	document.getElementById('Rules_SpecialContext').value = res[10];
	//document.getElementById('khatianremarks').value = res[11];

	
	$('#relationtype').val(resAddress[1]);
	document.getElementById('relationname').value = resAddress[2];

	document.getElementById('address').value = resAddress[0];
	/*document.getElementById('streetname').value = resAddress[1];
	document.getElementById('localityname').value = resAddress[2];*/
	
	if((res[5]=='0' || res[5]=='')  && (res[6]=='' || res[6]=='0') )
	{
	document.getElementById('symbol').disabled =true;
	document.getElementById('ownershare').disabled =true;
	}

if(res[5]!='0')
{

	document.getElementById('ownershare').value=converToBanglaNumeric(res[5]);


}else if(document.getElementById('shsame'+row).checked == true && res[5]=='0')
	{
	document.getElementById('ownershare').disable=true;
	}
 else if(document.getElementById('relsame'+row).checked == true && res[5]=='0')
	{
	document.getElementById('ownershare').disable=true;
	}
 else if(document.getElementById('relsame'+row).checked == false && res[5]=='0')
	{
		document.getElementById('ownershare').disable=true;
		}
else
	{
	
	document.getElementById('symbol').disabled =true;
	
	
	}
	
if((res[6]=='' || res[6]=='0') && document.getElementById('shsame'+row).checked == false && (res[5]!="0"))
{
	document.getElementById('symbol').disabled =true;
	document.getElementById('ownershare').value=converToBanglaNumeric(res[5]);
}	
else if((res[6]=='' || res[6]=='0')&& document.getElementById('shsame'+row).checked == true)
	{
	document.getElementById('symbol').disabled =true;
	document.getElementById('ownershare').disabled =true;
	}
else if(res[6]!='0'){

document.getElementById('symbol').value = converToBanglaNumeric(res[6]);
document.getElementById('ownershare').disabled =true;
var symbolValue= converBanglaToNumeric(res[6]);
 
 getSymbolImage('symbol',symbolValue,"");
	}

	document.getElementById('ownerid').value =res[7];
	document.getElementById('addressid').value = resAddress[8];


if(resAddress[0]=="0")
	{  
	document.getElementById('address').value ="0";
	
	}else
		document.getElementById('address').value =resAddress[0];
/*if(resAddress[4]=="0")
{  
document.getElementById('upazillaname').value ="0";

}else
	{
		$('#upazillaname').val(resAddress[4]);
	}

if(resAddress[3]=="0")
{  
document.getElementById('mouzaname').value ="0";


}else
	{
	//document.getElementById('mouzaname').value =resAddress[3];
$('#mouzaname').val(resAddress[3]);
	}
*/
	/*$('#upazillaname').val(resAddress[4]);
	$('#mouzaname').val(resAddress[3]);*/
	document.getElementById('revenue').value = converToBanglaNumeric(res[3]);
	$('#ownerShareTypeid').val(res[4]);
	
/*	if(res[5]=='0')
	{
document.getElementById('ownershare').disabled=true;
	}else
		{
		document.getElementById('ownershare').value=converToBanglaNumeric(res[5]);
	
		
		
		}*/
	

	document.getElementById('rowcountidentifyowner').value = row;
	$("#addOwnerButton").hide();
	$("#editOwnerButton").show();
	document.getElementById("firstname").focus();
	$("#inputFillOwner").show();
}
function clearOwnerDetails() {
	/*document.getElementById('houseno').value = "";
	document.getElementById('streetname').value = "";
	document.getElementById('localityname').value = "";
	document.getElementById('districtname').value = "";*/
	document.getElementById('relationname').value = "";
	document.getElementById('firstname').value = "";
	document.getElementById('middlename').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('ownershare').value = "";
	document.getElementById('relationtype').value = "";
	document.getElementById('revenue').value = "";
	document.getElementById('ownerShareTypeid').value = "";
	document.getElementById('Law_DueFrom').value = "";
	document.getElementById('Rules_SpecialContext').value = "";
	document.getElementById('address').value = "";
	//document.getElementById('upazillaname').value = "";
	document.getElementById('symbol').value = "";
	document.getElementById('relationname').disabled = false;
	document.getElementById('relationtype').disabled = false;
	/*document.getElementById('houseno').disabled = false;
	document.getElementById('streetname').disabled = false;
	document.getElementById('localityname').disabled = false;
	document.getElementById('mouzaname').disabled = false;
	document.getElementById('upazillaname').disabled = false;
	document.getElementById('districtname').disabled = false;*/
	document.getElementById("relationTypeCheck").checked = false;
	document.getElementById('ownershare').disabled = false;
	document.getElementById("shareCheck").checked = false;
	document.getElementById("address").checked = false;
	
}
function UpdateOwnerDetails() {
	
//var flag=document.getElementById("addedflag@"+rowcountidentifyowner ).value;
/*	
	if(flag=='added')
		{
		addrow('ownerTable');
		}
	*/
	var rowcountidentifyowner = document
	.getElementById('rowcountidentifyowner').value;
	var table = document.getElementById("ownerTable");
	var firstname = document.getElementById('firstname').value;
	var middlename = document.getElementById('middlename').value;
	var lastname = document.getElementById('lastname').value;
	var address = document.getElementById('address').value;
	var Law_DueFrom = document.getElementById('Law_DueFrom').value;
	var Rules_SpecialContext = document.getElementById('Rules_SpecialContext').value;
	
	var LawDueFromCheck;
	if(Law_DueFrom=="")
		{
		LawDueFromCheck="-"
		}
	else
		{
		LawDueFromCheck=Law_DueFrom;
		}
	
	var RulesSpecialContextCheck;
	if(Rules_SpecialContext=="")
	{
		RulesSpecialContextCheck="-";
	}
else
	{
	RulesSpecialContextCheck=Rules_SpecialContext;
	}
		
	var relationnamevalue = document.getElementById('relationname').value;
	var relationtypeid = document.getElementById('relationtype').value;
	var relationtypeText = document.getElementById('relationtype').options[document
			.getElementById('relationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('ownerShareTypeid').value;
	//alert("ownershipTypeid"+ownershipTypeid);
	var ownerShareTypeText = document.getElementById('ownerShareTypeid').options[document
			.getElementById('ownerShareTypeid').selectedIndex].text;
	
	var ownersharsymbole = document.getElementById('symbol').value;
	
	var revenue = document.getElementById('revenue').value;
	var ownershare = document.getElementById('ownershare').value;
	var ownerid = document.getElementById('ownerid@'+rowcountidentifyowner).value;

	var addressid = document.getElementById('addressid').value;
	var seqid = document.getElementById('sequence@'+rowcountidentifyowner).value;

	
	 
	 if (firstname == "") {
alert("Please enter first name");
document.getElementById('firstname').focus();
return false;	
}

if (relationtypeid == "" && document.getElementById('relationTypeCheck').checked == false ){
	alert("Please select relation");
	document.getElementById('relationtype').focus();
	return false;	
	}
if (relationnamevalue == "" && document.getElementById('relationTypeCheck').checked == false ) {
	alert("Please enter relative name");
	document.getElementById('relationname').focus();
	return false;		
	}
if (ownershipTypeid == ""&& document.getElementById('shareCheck').checked == false ) {
	alert("Please select owner type");
	document.getElementById('ownerShareTypeid').focus();
	return false;	
	}



if ((ownershare == "" && ownersharsymbole=="")&& document.getElementById('shareCheck').checked == false && ownershipTypeid!="3") {
	alert("Please enter owner share");
	document.getElementById('ownershare').focus();
	return false;
	}else if((ownershare == "" && ownersharsymbole=="")&& document.getElementById('shareCheck').checked == true)
		{
		
		}


var revenueText;
if (revenue == "0") {
		revenueText = "";
		
	}else 
		revenueText=revenue;
	var ownersharetext;
	if (ownersharsymbole =='' ) {
		ownersharsymbole = "0";
	
		
	}
	if (ownershare =='' ) {
		ownersharetext = "";
		ownershare ="0";
		
	}else 
		ownersharetext=ownershare;
	if (addressid == "0") {
		addressid = "NA";
		
	}
if(ownersharsymbole=='')
	ownersharsymbole="0";

if (ownershipTypeid =='' && document.getElementById('shareCheck').checked == true ) {
	ownerShareTypeText="";
	ownershipTypeid ="0";
	
	}
if(relationtypeid=='' && document.getElementById('relationTypeCheck').checked == true )
{
relation="";

}
else
relation=relationtypeText + ":" + relationnamevalue;

	
	
	var totalrowcount = table.rows.length;

var name=firstname + " "+ middlename + " " + lastname;
	table.rows[rowcountidentifyowner].cells[0].innerHTML = firstname + " "+ middlename + " " + lastname;
	
	/*
	if(middlename=='')
	{
		middlename="-";

	}
	if(lastname=='')
	{
		lastname="-";

	}*/

	var allValues;
	var addressvalue;
	var issharesame;
	var k=parseInt(rowcountidentifyowner)-1;
	var isRelationSameflag= document.getElementById('isRelationSame@'+rowcountidentifyowner).value;
if(document.getElementById('relationTypeCheck').checked == false && document.getElementById('shareCheck').checked == false )
	{var addressid = document.getElementById('addressid@'+rowcountidentifyowner).value;
	var seqno=document.getElementById('sequence@'+rowcountidentifyowner).value;
	issharesame="0"+"@"+ownershipTypeid+"@"+seqno;
	 allValues = firstname + "@" + middlename + "@" + lastname +"@"
		+ converBanglaToNumeric(revenueText) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
			converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ LawDueFromCheck+ "@"+ RulesSpecialContextCheck+"@"+issharesame+"@"+isRelationSameflag;;
	//alert("allValues :::"+converBanalert(isRelationSameflag);
		var	isrelationsame="0"+"@"+addressid+"@"+relationtypeid;
 addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame+"@"+isRelationSameflag ;
	}
else if(document.getElementById('relationTypeCheck').checked == true && document.getElementById('shareCheck').checked == true )
	{
		var seqno = document.getElementById('sequence@'+k).value;
		var prvownershipTypeid = document.getElementById('ownerShipid@'+k).value;
		issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
	//	isrelshale="1"+"@"+prvownershipTypeid+"@"+seqno;
		var prvaddressid = document.getElementById('addressid@'+k).value;
		
		var editvalue;
		var k=parseInt(rowcountidentifyowner)-1;
		var edittedval = document.getElementById("editHiddenowner@" +k).value;
		var resultownervalue;
		var valAddress;
		if(edittedval=='')
			{
			
			var val= document.getElementById("editHidden@" +k).value;
	 valAddress = document.getElementById("editHiddenAddress@" +k).value;
	 resultownervalue = val.split("@");
	 resAddress = valAddress.split("@");

			}
		else
		{
			
			var val = document.getElementById("editHiddenowner@" +k).value;
				
			valAddress = document.getElementById("editHiddenownerAddress@" + k).value;
			resultownervalue = val.split("@");
			 resAddress = valAddress.split("@");
		}
		resultownervalue[0]=firstname;
		resultownervalue[1]=middlename;
		resultownervalue[2]=lastname;
		resultownervalue[3]=converBanglaToNumeric(revenue);
		if(resultownervalue[5]=='')
		{
		resultownervalue[5]="0";
		}else
			resultownervalue[5]=converBanglaToNumeric(resultownervalue[5]);
	if(resultownervalue[6]=='')
	{
	resultownervalue[6]="0";
	}else
		resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
		resultownervalue[7]=rowcountidentifyowner;
		resultownervalue[8]=ownerid;
		resultownervalue[9]=LawDueFromCheck;
		resultownervalue[10]=RulesSpecialContextCheck;
		editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;
		allValues=editvalue;
		
		relationtypeid=resAddress[1];
		resAddress[3]=prvaddressid;
		var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
		addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame+"@"+"0";;
	//	document.getElementById('addressid@'+rowcountidentifyowner).value=prvaddressid;
	//	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=prvownershipTypeid;
		//document.getElementById('sequence@'+rowcountidentifyowner).value=seqno;
		//isrelationsame="0"+"@"+"NA"+"@"+"NA"
	
		ownershipTypeid=prvownershipTypeid;
		addressid=prvaddressid;
	}
	else if(document.getElementById('relationTypeCheck').checked == true && document.getElementById('shareCheck').checked == false )
	{
		var seqno=document.getElementById('sequence@'+rowcountidentifyowner).value;
		issharesame="0"+"@"+ownershipTypeid+"@"+seqno;
		var prvaddressid = document.getElementById('addressid@'+k).value;
		var k=parseInt(rowcountidentifyowner)-1;
		var edittedval = document.getElementById("editHiddenowner@" +k).value;
		var valAddress;
		if(edittedval=='')
			{
			
			
	 valAddress = document.getElementById("editHiddenAddress@" +k).value;
	
	 resAddress = valAddress.split("@");

			}
		else
		{
		
			
	
	 valAddress = document.getElementById("editHiddenAddress@" +k).value;
	
	 resAddress = valAddress.split("@");

		}
		
	allValues= firstname + "@" + middlename + "@" + lastname +"@"
		+ converBanglaToNumeric(revenue) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
		converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ LawDueFromCheck+ "@"+ RulesSpecialContextCheck+"@"+issharesame;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
	resAddress[3]=prvaddressid;
	relationtypeid=resAddress[1];
	addressid=prvaddressid;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
	addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame+"@"+"0";
	}
	else if(document.getElementById('relationTypeCheck').checked == false && document.getElementById('shareCheck').checked == true )
	{var seqno = document.getElementById('sequence@'+k).value;
	var prvownershipTypeid = document.getElementById('ownerShipid@'+k).value;
	
	issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
		var k=parseInt(rowcountidentifyowner)-1;
		var edittedval = document.getElementById("editHiddenowner@" +k).value;
		var resultownervalue;
		if(edittedval=='')
			{
						
			var val= document.getElementById("editHidden@" +k).value;
			resultownervalue = val.split("@");
	
			}
		else
		{
			
			var val= document.getElementById("editHidden@" +k).value;
			resultownervalue = val.split("@");
			
		}
		resultownervalue[0]=firstname;
		resultownervalue[1]=middlename;
		resultownervalue[2]=lastname;
		resultownervalue[3]=converBanglaToNumeric(revenue);
		if(resultownervalue[5]=='')
		{
		resultownervalue[5]="0";
		}else
			resultownervalue[5]=converBanglaToNumeric(resultownervalue[5]);
	if(resultownervalue[6]=='')
	{
	resultownervalue[6]="0";
	}else
		resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
		resultownervalue[7]=rowcountidentifyowner;
		resultownervalue[8]=ownerid;
		resultownervalue[9]=LawDueFromCheck;
		resultownervalue[10]=RulesSpecialContextCheck;
	var	editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;
		allValues=editvalue;
		ownershipTypeid=prvownershipTypeid;
		relationtypeid=relationtypeid;
	var	isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
		addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame+"@"+isRelationSameflag; ;
	//	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=prvownershipTypeid;
	///	document.getElementById('addressid@'+rowcountidentifyowner).value=prvaddressid;
	//	document.getElementById('sequence@'+rowcountidentifyowner).value=seqno;
	}

	
	
	
	
	
	
	
	
	
	table.rows[rowcountidentifyowner].cells[1].innerHTML =relation;
	table.rows[rowcountidentifyowner].cells[2].innerHTML = address+
			'<input type="hidden" id="addressid@'+rowcountidentifyowner+'" name="addressid" value="'+addressid+'" />'+
			'<input type="hidden" id="relationid@'+rowcountidentifyowner+'" name="relationid" value="'+relationtypeid+'" />'
			;
	table.rows[rowcountidentifyowner].cells[3].innerHTML = revenue;
	table.rows[rowcountidentifyowner].cells[4].innerHTML = ownerShareTypeText+
	'<input type="hidden" id="ownername@'+rowcountidentifyowner+'" name="ownername" value="'+name+'" />'+
	'<input type="hidden" id="ownerid@'+rowcountidentifyowner+'" name="ownerid" value="'+ownerid+'" />'+
   '<input type="hidden" id="ownerShipid@'+rowcountidentifyowner+'" name="ownerShipid" value="'+ownershipTypeid+'" />';;

	var symbolValue= converBanglaToNumeric(ownersharsymbole);
	var finalImage ='<span id="addrowSymbol@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol1@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowSymbol2@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol3@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowSymbol4@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol5@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowSymbol6@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol7@'+rowcountidentifyowner+'" class="symbolImg"></span>';
	
	table.rows[rowcountidentifyowner].cells[5].innerHTML=finalImage+'<input type="hidden" id="ownerSymbol'+rowcountidentifyowner+'" name="ownerSymbol" value="'+symbolValue+'";">';
//alert("symbolValue::"+symbolValue);
if(symbolValue!="")
{
	debugger;
	getSymbolImage('addrowSymbolID@'+rowcountidentifyowner,symbolValue,"");
 }
	
	
	table.rows[rowcountidentifyowner].cells[6].innerHTML = ownersharetext;
	
	//alert("Law_DueFrom"+Law_DueFrom);
	table.rows[rowcountidentifyowner].cells[7].innerHTML = Law_DueFrom;
	table.rows[rowcountidentifyowner].cells[8].innerHTML = Rules_SpecialContext;
	
	
	  if( document.getElementById('relationTypeCheck').checked == true){
		 
		  table.rows[rowcountidentifyowner].cells[11].innerHTML ='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]" checked="checked">';
		  }else{
			 
			  table.rows[rowcountidentifyowner].cells[11].innerHTML ='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]">';
		  }
	  
	  
	  if( document.getElementById('shareCheck').checked == true){
			 
		  table.rows[rowcountidentifyowner].cells[12].innerHTML ='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]" checked="checked">';
		  }else{
			 
			  table.rows[rowcountidentifyowner].cells[12].innerHTML ='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]">';
		  }
	

	/*
	 * table.rows[rowcountidentifyowner].cells[6].innerHTML = eight;
	 * table.rows[rowcountidentifyowner].cells[7].innerHTML = eight1;
	 */
	
	table.rows[rowcountidentifyowner].className = "danger";
		
	var flag=document.getElementById("addedflag@"+rowcountidentifyowner ).value;
	
	
	if(flag=='added')
		{
	document.getElementById("editHidden@" + rowcountidentifyowner).value = allValues;
	document.getElementById("editHiddenAddress@" + rowcountidentifyowner).value = addressvalue;
	document.getElementById("addedflag@" + rowcountidentifyowner).value = 'added';
	document.getElementById('addressid@'+rowcountidentifyowner).value=addressid;
	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=ownershipTypeid;
	document.getElementById('sequence@'+rowcountidentifyowner).value=seqno;
	document.getElementById("ownername@" + rowcountidentifyowner).value=firstname +" "+ middlename + " " + lastname;
		}
if(flag=='existing'|| flag=='edited')
	{
	
	document.getElementById("editHiddenowner@" + rowcountidentifyowner).value = allValues;
	document.getElementById("editHiddenownerAddress@" + rowcountidentifyowner).value = addressvalue;
		document.getElementById("addedflag@" + rowcountidentifyowner).value = 'edited';

		document.getElementById("ownerid@" + rowcountidentifyowner).value=ownerid;
		document.getElementById("ownername@" + rowcountidentifyowner).value=firstname +" "+ middlename + " " + lastname;
		document.getElementById('addressid@'+rowcountidentifyowner).value=addressid;
		document.getElementById("ownerShipid@" + rowcountidentifyowner).value=ownershipTypeid;
		document.getElementById('sequence@'+rowcountidentifyowner).value=seqno;
	
	
	}



/*
if(document.getElementById('relationTypeCheck').checked == false ||document.getElementById('shareCheck').checked == false)
{*/
	
	var z=parseInt(rowcountidentifyowner)+1;
	if(z<totalrowcount)
		{	
for(var i=z;i<totalrowcount;i++)
	{
	
	var flag=document.getElementById("addedflag@"+i).value;

	
if(document.getElementById("shsame"+i).checked==true ||document.getElementById("relsame"+i).checked==true)
{
	var k=parseInt(i)-1;

	var nextchangedvalues="";
	var nextchangedvaluesaddress="";
	var edittedval = document.getElementById("editHiddenowner@" +k).value;
	var res;
	var valAddress;
	var resAddress;
	if(edittedval=='')
		{
		
	var val = document.getElementById("editHidden@" +k).value;

	 res = val.split("@");
 valAddress = document.getElementById("editHiddenAddress@" +k).value;
	 resAddress = valAddress.split("@");

		}
	else
	{
		
		var val = document.getElementById("editHiddenowner@" +k).value;
		
	 res = val.split("@");
		valAddress = document.getElementById("editHiddenownerAddress@" + k).value;
		 resAddress = valAddress.split("@");
	}

		
	
if((document.getElementById("shsame"+i).checked==true) &&(document.getElementById("relsame"+i).checked==false))
{
	debugger;
	
var edithiddenvalue=document.getElementById("editHidden@" + i).value;
var resultownervalue=edithiddenvalue.split("@");
var seqno = document.getElementById('sequence@'+k).value;
var prvownershipTypeid = document.getElementById('ownerShipid@'+k).value;
var addressId = document.getElementById('addressid@'+i).value;
var relationId = document.getElementById('relationid@'+i).value;
issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
//resultownervalue[3]=converBanglaToNumeric(revenue);

resultownervalue[4]=converBanglaToNumeric(res[4]);
resultownervalue[5]=converBanglaToNumeric(res[5]);
resultownervalue[6]=converBanglaToNumeric(res[6]);
resultownervalue[7]=i;
resultownervalue[9]=res[9];
resultownervalue[10]=res[10];
nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;

var edithiddenaddress=document.getElementById("editHiddenAddress@" + i).value;
var values=edithiddenaddress.split("@");
var isrelationsame="0"+"@"+addressId+"@"+values[1];

var edithiddenvalueaddress=values[0]+"@"+values[1]+"@"+values[2]+"@"+isrelationsame+"@"+"0";


document.getElementById('sequence@'+i).value=seqno;
document.getElementById('ownerShipid@'+i).value=prvownershipTypeid;
if(flag=='added')
{

document.getElementById("editHidden@" + i).value = nextchangedvalues;
document.getElementById("addedflag@" + i).value = 'added';
document.getElementById("relationid@" + i).value = relationId;
document.getElementById("ownerShipid@" + i).value=converBanglaToNumeric(res[4]);


}
if(flag=='existing'||flag=='edited')
{

document.getElementById("editHiddenowner@" + i).value = nextchangedvalues;
document.getElementById("addedflag@" + i).value = 'edited';
document.getElementById("relationid@" + i).value = relationId;
document.getElementById("editHiddenownerAddress@" + i).value=edithiddenvalueaddress;
}

table.rows[i].className = "danger";


}else if((document.getElementById("relsame"+i).checked==true) && (document.getElementById("shsame"+i).checked==false))
{
	var seqno = document.getElementById('sequence@'+i).value;
	var ownershipid = document.getElementById('ownerShipid@'+i).value;
	
	issharesame="0"+"@"+ownershipid+"@"+seqno;
	var addressId = document.getElementById('addressid@'+k).value;

	var edithiddenvalue=document.getElementById("editHidden@" + i).value;
var editaddressvalue=document.getElementById("editHiddenAddress@" + i).value;
var resultownervalue= edithiddenvalue.split("@");
var resultaddress=editaddressvalue.split("@");
resultaddress[0]=resAddress[0];
resultaddress[1]=resAddress[1];
resultaddress[2]=resAddress[2];
resultownervalue[4]=converBanglaToNumeric(resultownervalue[4]);
resultownervalue[5]=converBanglaToNumeric(resultownervalue[5]);
resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
var isrelationsame="1"+"@"+addressId+"@"+resultaddress[1];
if(resultaddress[0]=='')
{
resultaddress[0]="-";
}
nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame+"@"+"0";

nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;

document.getElementById('addressid@'+i).value=addressId;




if(flag=='added')
{
	document.getElementById("editHidden@" + i).value=nextchangedvalues;
document.getElementById("editHiddenAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedflag@" + i).value = 'added';
document.getElementById("relationid@" + i).value = resultaddress[1];
//document.getElementById("addressid@" + i).value = addressId;


}
if(flag=='existing'||flag=='edited')
{
	document.getElementById("editHiddenowner@" + i).value = nextchangedvalues;
document.getElementById("editHiddenownerAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedflag@" + i).value = 'edited';
document.getElementById("relationid@" + i).value = resultaddress[1];
//document.getElementById("addressid@" + i).value = addressId;


}
table.rows[i].className = "danger";
}
else if((document.getElementById("shsame"+i).checked==true) &&(document.getElementById("relsame"+i).checked==true))
	{ 
	var seqno = document.getElementById('sequence@'+k).value;
	var prvownershipTypeid = document.getElementById('ownerShipid@'+k).value;
	var prvrelationid=document.getElementById("relationid@" + k).value;
	issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
	var addressId = document.getElementById('addressid@'+k).value;
	var edithiddenvalue=document.getElementById("editHidden@" + i).value;
	var resultownervalue=edithiddenvalue.split("@");
	
	//alert("prvownershipTypeid"+prvownershipTypeid);
//alert("res[4]"+res[4]);
	resultownervalue[4]=converBanglaToNumeric(res[4]);
	resultownervalue[5]=converBanglaToNumeric(res[5]);
	resultownervalue[6]=converBanglaToNumeric(res[6]);
	resultownervalue[7]=i;
	resultownervalue[9]=res[9];
	resultownervalue[10]=res[10];
	
	nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
	converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
	"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;

	var editaddressvalue=document.getElementById("editHiddenAddress@" +i ).value;
	var resultaddress=editaddressvalue.split("@");
	resultaddress[0]=resAddress[0];
	resultaddress[1]=resAddress[1];
	resultaddress[2]=resAddress[2];

	if(resultaddress[0]=='')
		{
		resultaddress[0]="-";
		}
	var isrelationsame="1"+"@"+addressId+"@"+resultaddress[1];
	nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame+"@"+"0";
	
	document.getElementById('sequence@'+i).value=seqno;
	document.getElementById('ownerShipid@'+i).value=prvownershipTypeid;
	if(flag=='added')
	{
	document.getElementById("editHidden@" + i).value=nextchangedvalues;
	document.getElementById("editHiddenAddress@" + i).value = nextchangedvaluesaddress;
	document.getElementById("addedflag@" + i).value = 'added';
	document.getElementById("relationid@" + i).value = resultaddress[1];
	document.getElementById("addressid@" + i).value = addressId;
	document.getElementById("ownerShipid@" + i).value=prvownershipTypeid;

	}
	if(flag=='existing'||flag=='edited')
	{
		
	document.getElementById("editHiddenowner@" + i).value = nextchangedvalues;
	document.getElementById("editHiddenownerAddress@" + i).value = nextchangedvaluesaddress;
	document.getElementById("addedflag@" + i).value = 'edited';
	document.getElementById("relationid@" + i).value = resultaddress[1];
	document.getElementById("addressid@" + i).value = addressId;
//	document.getElementById("editHiddenowner@" + i).value = edithiddenvalue;
	document.getElementById("ownerShipid@" + i).value=prvownershipTypeid;
	}
	table.rows[i].className = "danger";
	
	
	
	}
}else 
	break;
	}
}
//}



	document.getElementById('rowcountidentify').value="";

addownerdetails();resetOwner1();resetownerdetails();
document.getElementById('editcountidentify').value = "";
$("#inputFillOwner").show();
}
function resetownerdetails() {
	clearOwnerDetails();
	$("#editOwnerButton").hide();
	$("#addOwnerButton").show();
	$("#addOwnerButton").show();
	//document.getElementById("upazillaname").value="0";
	//document.getElementById("districtname").value="0";
	//document.getElementById("mouzaname").value="0";
	document.getElementById("ownerShareTypeid").disabled=false;
	document.getElementById("symbol").disabled=false;
	document.getElementById("address").disabled=false;
	//document.getElementById("firstname").focus();
/*	$(".symbolImg").hide();
	$("#symbol").removeAttr("readonly");*/
//	$("#inputFillOwner").show();

}
function resetPlotDetails() {
	clearPlotDetails();
	$("#editPlotButton").hide();
	$("#addPlotButton").show();
	//document.getElementById("AdjplotNo").value="";
	document.getElementById("Adjremarks").value="";
	document.getElementById("editplotcountidentifyplot").value="";
	
	document.getElementById("plotNo").focus();
	$("#inputFillParcel").show();

}



function relationTypecheckFunction(){
	if(document.getElementById("relationTypeCheck").checked == true){
		var tableRow=document.getElementById("ownerTable").rows.length;
		
		var ownervaluecheck=document.getElementById("ownervaluecheck").value;
			
		if(tableRow > 1 && ownervaluecheck!=1){
		var newtableRow ="";
		if(document.getElementById('rowcountidentify').value != "") {
			 if(document.getElementById('rowcountidentify').value == 1){
						 alert("It is not applicable for the first record");
						 document.getElementById("relationTypeCheck").checked = false;
						 return false;
					 }
				 newtableRow = parseInt(tableRow) - 2;
				// alert("ffaasaf");
				 document.getElementById('relationnamehid').value = document.getElementById('relationname').value;
			     //document.getElementById('housenohid').value = 	document.getElementById('houseno').value;
			   // document.getElementById('streetnamehid').value = document.getElementById('streetname').value;
			    // document.getElementById('localitynamehid').value = document.getElementById('localityname').value;
			   //  document.getElementById('mouzanamehid').value = document.getElementById('mouzaname').value;
			   //  document.getElementById('upazillanamehid').value =  document.getElementById('upazillaname').value;
			   //  document.getElementById('districtnamehid').value = document.getElementById('districtname').value;
			     document.getElementById('relationtypehid').value = document.getElementById('relationtype').value;
			     document.getElementById('addresshid').value = document.getElementById('address').value;
				}else {
				 newtableRow = parseInt(tableRow) - 1;
				}	
		
			var allform = document.getElementById("editHidden@"+newtableRow).value;	
			selectBtn(allform);
		             }
		else {
			alert("It is not applicable for the first record");
			document.getElementById("relationTypeCheck").checked = false;
		return false;
		}
	}
	else{
	 	 if(document.getElementById('rowcountidentify').value != "") {
	 		document.getElementById('relationname').value = document.getElementById('relationnamehid').value;
	 		document.getElementById('address').value = document.getElementById('addresshid').value;
		   /* document.getElementById('houseno').value = 	document.getElementById('housenohid').value;
		    document.getElementById('streetname').value = document.getElementById('streetnamehid').value;
		    document.getElementById('localityname').value = document.getElementById('localitynamehid').value;
		    document.getElementById('mouzaname').value = document.getElementById('mouzanamehid').value;
		    document.getElementById('upazillaname').value =  document.getElementById('upazillanamehid').value;
		    document.getElementById('districtname').value = document.getElementById('districtnamehid').value;*/
		    document.getElementById('relationtype').value = document.getElementById('relationtypehid').value;
			document.getElementById('relationname').disabled = false;
			document.getElementById('relationtype').disabled = false; 
			document.getElementById('address').disabled = false; 
			/*document.getElementById('houseno').disabled = false;
			document.getElementById('streetname').disabled = false;
			document.getElementById('localityname').disabled = false;
			document.getElementById('mouzaname').disabled = false;
			document.getElementById('upazillaname').disabled = false; 
			document.getElementById('districtname').disabled = false;*/
			document.getElementById('relationnamehid').value=  "";
			document.getElementById('addresshid').value=  "";
			/*document.getElementById('housenohid').value = "";
			document.getElementById('streetnamehid').value = "";
		    document.getElementById('localitynamehid').value = "";
		    document.getElementById('mouzanamehid').value = "";
			document.getElementById('upazillanamehid').value = "";
		    document.getElementById('districtnamehid').value = "";
		    document.getElementById('postalcodehid').value = "";*/
			document.getElementById('relationtypehid').value = "";
			  /* document.getElementById('mouzaname').value="0";
			   document.getElementById('upazillaname').value="0";
			   document.getElementById('districtname').value="0";*/
	}else{
		   document.getElementById('relationname').value=  "";
		   document.getElementById('address').value=  "";
		  /* document.getElementById('houseno').value = "";
		   document.getElementById('streetname').value = "";
	       document.getElementById('localityname').value = "";
	       document.getElementById('mouzaname').value = "";
		   document.getElementById('upazillaname').value = "";
	       document.getElementById('districtname').value = "";*/
		   document.getElementById('relationtype').value = "";
		   document.getElementById('relationname').disabled = false;
		   document.getElementById('relationtype').disabled = false; 
		   document.getElementById('address').disabled = false; 
		  /* document.getElementById('houseno').disabled = false;
		   document.getElementById('streetname').disabled = false;
		   document.getElementById('localityname').disabled = false;
		   document.getElementById('mouzaname').disabled = false;
		   document.getElementById('upazillaname').disabled = false; 
		   document.getElementById('districtname').disabled = false;
		   
		   document.getElementById('mouzaname').value="0";
		   document.getElementById('upazillaname').value="0";
		   document.getElementById('districtname').value="0";*/
		   
		   
		   
		   
		/*   document.getElementById('upazilaDropDown1').style.display = "none";
		   document.getElementById('mouzaDropdown1').style.display = "none";
	   	   document.getElementById('upazilaDropDown2').style.display = "block";
		   document.getElementById('mouzaDropdown2').style.display = "block";*/
		}
	}
	
}
function selectBtn(val) {
	/*document.getElementById('upazilaDropDown1').style.display = "block";
	document.getElementById('mouzaDropdown1').style.display = "block";
   	document.getElementById('upazilaDropDown2').style.display = "none";
	document.getElementById('mouzaDropdown2').style.display = "none";*/
	val = "amit"+"##"+val;
    var res = val.split("##");
	document.getElementById('relationname').value=  "";
	//document.getElementById('houseno').value = "";
	//document.getElementById('streetname').value = "";
   // document.getElementById('localityname').value = "";
   // document.getElementById('mouzaname').value = "";
	//document.getElementById('upazillaname').value = "";
  //  document.getElementById('districtname').value = "";
	document.getElementById('relationtype').value = "";
	document.getElementById('address').value=  "";
	document.getElementById('relationname').disabled = true;
	document.getElementById('relationtype').disabled = true; 
	document.getElementById('address').disabled = true; 
	//document.getElementById('houseno').disabled = true;
	//document.getElementById('streetname').disabled = true;
	//document.getElementById('localityname').disabled = true;
	//document.getElementById('mouzaname').disabled = true;
	//document.getElementById('upazillaname').disabled = true; 
	//document.getElementById('districtname').disabled = true;
	 //  document.getElementById('mouzaname').value="0";
	  // document.getElementById('upazillaname').value="0";
	 //  document.getElementById('districtname').value="0";
	}
function OwnerShareCheck(){
	if(document.getElementById("shareCheck").checked == true){
		prev = 1;
		var tableRow=document.getElementById("ownerTable").rows.length;
		var ownervaluecheck=document.getElementById("ownervaluecheck").value;
		if(tableRow > 1 && ownervaluecheck!=1){
		if(document.getElementById('rowcountidentify').value != "") {
		prev = 2;
		if(document.getElementById('rowcountidentify').value == 1){
				 alert("It is not applicable for the first record");
				 document.getElementById("shareCheck").checked = false;
					return false;
			 }else{
				 var tableRow=document.getElementById("ownerTable").rows.length; 
					document.getElementById('ownershare').value = "";
					document.getElementById('ownershare').disabled=  true;
					document.getElementById('symbol').disabled=  true;
					document.getElementById('symbol').value=  "";
					var newrow = parseInt(tableRow)-1;
					//document.getElementById('ownerShipHidd').value = document.getElementById('ownerShareTypeIdarr'+newrow).value;
					document.getElementById('ownerShareTypeid').value = "";
					document.getElementById('ownerShareTypeid').disabled = true;
			 }
		 }else{
			 
			 var tableRow=document.getElementById("ownerTable").rows.length; 
				document.getElementById('ownershare').value = "";
				document.getElementById('ownershare').disabled=  true;
				document.getElementById('symbol').disabled=  true;
				document.getElementById('symbol').value=  "";
				var newrow = parseInt(tableRow)-1;
				//document.getElementById('ownerShipHidd').value = document.getElementById('ownerShareTypeIdarr'+newrow).value;
				document.getElementById('ownerShareTypeid').value = "";
				document.getElementById('ownerShareTypeid').disabled = true;
		 }
		}
		else {
			alert("It is not applicable for the first record");
			document.getElementById("shareCheck").checked = false;
		return false;
		}
	}
	else{ 
		document.getElementById('ownershare').disabled=  false;	
		document.getElementById('symbol').disabled=  false;
		document.getElementById('ownerShareTypeid').disabled = false;
		document.getElementById('ownerShareTypeid').value = "";
	}
             }


function disableSeven()
 {
	  if(document.getElementById('seven').value!="" && document.getElementById('symbol1').value!="")
		  {
		  document.getElementById("symbol1").disabled = true;
		  document.getElementById("symbol1").value = "";
		  }
	  else if(document.getElementById('seven').value!="" && document.getElementById('symbol1').value=="")
	  
		  {
		  document.getElementById("symbol1").disabled = true;
		  }
		  else
		  {
		  document.getElementById("symbol1").disabled = false;
		  }
 }

function NumberLessThenOne(id) {
	var value = document.getElementById(id).value;
	var value1 = converBanglaToNumeric(value);
	if (value1 > 1) {
		alert("ILFS Technologies :Owner Share Must Not be greater then 1");
		document.getElementById(id).focus();
		return false;
	}
	
}
function addPossessionDetails(tableID){

	 
	var possessionShare=document.getElementById("possessionShare").value;
	var possessionOwnerName = document.getElementById('possessionOwnerName').options[document
	    .getElementById('possessionOwnerName').selectedIndex].text;
	var possessionOwnerValue=document.getElementById('possessionOwnerName').value;
var prowcount=possessionOwnerValue.split("@")[1];
var pownerids=possessionOwnerValue.split("@")[2];
	var possessionPlotno = document.getElementById('possessionPlot').options[document
	    .getElementById('possessionPlot').selectedIndex].text;
	   	var possessionPlotnoValue=document.getElementById('possessionPlot').value;
	   	var ownerLength=document.getElementById('possessionOwnerName');
		var plotLength=document.getElementById('possessionPlot');
		  var result =checkForPossessionValidation();
		   if (result== true)	
		{	
	   	
	  var 	possessionvalue=possessionOwnerValue+"@"+converBanglaToNumeric(possessionPlotnoValue)+"@"+converBanglaToNumeric(possessionShare);
	
	  var table = document.getElementById("Possessiontable");
	  var psize=document.getElementById('possesionsize').value;
	  var posvaluecheck=document.getElementById('possessionvaluecheck').value;
	  if(psize=='0' || posvaluecheck=='1'){
		   table.deleteRow(1);
		  
	   }
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		cell1.appendChild(element1);
		cell1.innerHTML = possessionPlotno+
		'<input type="hidden"   id="plotSrNo'+rowCount+'" name="plotSrNo" value="'+converToBanglaNumeric(possessionPlotno)+'">'
		+'<input type="hidden"   id="plotid'+rowCount+'" name="plotid" value="'+converToBanglaNumeric(possessionPlotno)+'">';
		var cell2 = row.insertCell(1);
		cell2.innerHTML = possessionOwnerName+
		'<input type="hidden"   id="pownername'+rowCount+'" name="pownername" value="'+possessionOwnerName+'">'
		+'<input type="hidden"   id="prowcount'+rowCount+'" name="prowcount" value="'+prowcount+'">'
		+'<input type="hidden"   id="pownerid'+rowCount+'" name="pownerid" value="'+pownerids+'">';
		var cell3 = row.insertCell(2);
		cell3.innerHTML = possessionShare+
		'<input type="hidden" id="editPossessionhiddenflag@'
		+ rowCount
		+ '" name="editPossessionhiddenflag" value="added">'
		+ '<input type="hidden" id="editPossessiondetails@'
		+ rowCount
		+ '" name="editPossessiondetails" value="'+possessionvalue+'">'
		+ '<input type="hidden" id="editedPossessionhidden@'
		+ rowCount
		+ '" name="editedPossessionhidden" value="">'	;

	/*	var cell4 = row.insertCell(3);
		cell4.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'edit@'
				+ rowCount
				+ '@added\' onclick="editPossession(this.id); return false;" /></span>'
				+'<input type="hidden" id="editPossessionhiddenflag@'
					+ rowCount
					+ '" name="editPossessionhiddenflag" value="added">'
					+ '<input type="hidden" id="editPossessiondetails@'
					+ rowCount
					+ '" name="editPossessiondetails" value="'+possessionvalue+'">'	;
		
				
			*/
			
		var cell4 = row.insertCell(3);
		/*cell5.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'deleteowner@'
				+ rowCount
				+ '\' onclick="deletePossessionRowForDynamicTable(this.id,1,1,this.name); return false;" /><input type="hidden" id=\'deleteOwnerhidden@'
				+ rowCount + '\' value="added"/></span>';*/
		
		cell4.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" name="deletePossession" id=\'deletePossession@'+ rowCount
			+ '\' onclick="deletePossessionRowForDynamicTable(this.id,1,1,this.name); return false;" /><input type="hidden" name="deletePossessionhidden" id=\'deletePossessionhidden@'
			+ rowCount + '\' value="added"/>			</span>';
		
		table.rows[rowCount].className = "success";
	
	
		
		}
		   document.getElementById('possesionsize').value="";
		   document.getElementById('possessionvaluecheck').value="";
		   resetPossessionDetails();
}


function removeplot()
{
	var comboplot = document.getElementById("possessionPlot");
	if(comboplot.length>1)
{
    for(var k=comboplot.length;k>=1;k--)
    {   
    	comboplot.remove(k);
    	
    }}
	}

function deletePossessionRowForDynamicTable(id,plotid,ownerid,name)
{    
	//alert("deletePossessionRowForDynamicTable");
	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("Possessiontable");
	var valueplot = document.getElementById("deletePossessionhidden@" + dltRowcount).value;
	if (confirm("Do you really want to delete this possession") == true) {
		if (valueplot == 'existing') {
		
			var deletedexistingpossession = document
					.getElementById("deletedexistingpossession").value;
			if (deletedexistingpossession == "")
				document.getElementById("deletedexistingpossession").value = plotid+"@"+ownerid;
			else
				document.getElementById("deletedexistingpossession").value = deletedexistingpossession
						+ "#" + plotid+"@"+ownerid;

			table.deleteRow(dltRowcount);
			
			var rowlength = table.rows.length;

			for ( var i = dltRowcount; i < rowlength; i++) {
				var tempRow = parseInt(i) + 1;

				document.getElementById("deletePossession@" + tempRow).id = "deletePossession@"
						+ i;
				document.getElementById("deletePossessionhidden@" + tempRow).id = "deletePossessionhidden@"
						+ i;
				document.getElementById("editPossessionhiddenflag@" + tempRow).id = "editPossessionhiddenflag@"
						+ i;
				document.getElementById("editedPossessionhidden@" + tempRow).id = "editedPossessionhidden@"
						+ i;
				document.getElementById("pownername" + tempRow).id = "pownername"
					+ i;
				document.getElementById("plotSrNo" + tempRow).id = "plotSrNo"
					+ i;
				document.getElementById("prowcount" + tempRow).id = "prowcount"
					+ i;
				document.getElementById("plotid" + tempRow).id = "plotid"
					+ i;
				document.getElementById("editPossessiondetails@" + tempRow).id = "editPossessiondetails@"
					+ i;
				document.getElementById("pownerid" + tempRow).id = "pownerid"
					+ i;
			}

			var deletedexistingplotrows = document
					.getElementById("deletedexistingpossessionrows").value;
			if (deletedexistingplotrows == "")
				document.getElementById("deletedexistingpossessionrows").value = 1;
			else
				document.getElementById("deletedexistingpossessionrows").value = +deletedexistingplotrows
						+ +1;
		}
	 else {

		table.deleteRow(dltRowcount);
		var rowlength = table.rows.length;
		for ( var i = dltRowcount; i < rowlength; i++) {
			var tempRow = parseInt(i) + 1;

			document.getElementById("deletePossession@" + tempRow).id = "deletePossession@"
					+ i;
			document.getElementById("deletePossessionhidden@" + tempRow).id = "deletePossessionhidden@"
					+ i;
			document.getElementById("editPossessionhiddenflag@" + tempRow).id = "editPossessionhiddenflag@"
					+ i;
			document.getElementById("editedPossessionhidden@" + tempRow).id = "editedPossessionhidden@"
					+ i;
			document.getElementById("pownername" + tempRow).id = "pownername"
				+ i;
			document.getElementById("prowcount" + tempRow).id = "prowcount"
				+ i;
			document.getElementById("plotSrNo" + tempRow).id = "plotSrNo"
				+ i;
			document.getElementById("plotid" + tempRow).id = "plotid"
				+ i;
			document.getElementById("editPossessiondetails@" + tempRow).id = "editPossessiondetails@"
				+ i;
			document.getElementById("pownerid" + tempRow).id = "pownerid"
				+ i;
		}
	 }
	}
	var rowCount = table.rows.length;
	if(rowCount=='1'){
		var row = table.insertRow(rowCount);
		var a=row.insertCell(0);
		//row.insertCell(1);								
		a.colSpan = "4";
		a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
		a.className='text-center';
		document.getElementById("possessionvaluecheck").value=1;
	}		
}
function editPossession(id)
{

	
	
	resetPossessionDetails();
	var row = id.split("@")[1];
	var val = document.getElementById("editPossessiondetails@" + row).value;
	var res = val.split("@");
	var ownervalue=res[0]+"@"+row+"@"+res[3];
	var plotvalue=res[4]+"@"+res[1];
	
	$('#possessionPlot').val(plotvalue);
	$('#possessionOwnerName').val(ownervalue);
	document.getElementById('possessionShare').value = res[2];
	$("#addPossession").hide();
	$("#editPossessionButton").show();
	document.getElementById("possessionPlot").focus();
	$("#inputFillPossession").show();
	
	}
function resetPossessionDetails() {
	clearPossesionDetails();
	$("#editPossessionButton").hide();
	$("#addPossession").show();
	document.getElementById("possessionPlot").focus();
	$("#inputFillPossession").show();

}
function clearPossesionDetails() {
	document.getElementById('possessionPlot').value = "";
	document.getElementById('possessionOwnerName').value = "";
	document.getElementById('possessionShare').value = "";
	
} 


	
	function addownerdetails(){
		/* 	var div="img";
			var div1="img1";
			var div2="img2";
			var div3="img3"; */
				/*document.getElementById('houseno').value = "";
				document.getElementById('streetname').value="" ;
				document.getElementById('localityname').value="";
				document.getElementById('districtname').value="";*/
		
		document.getElementById('address').value="";
				document.getElementById('relationname').value="";
				document.getElementById('firstname').value="";
				document.getElementById('middlename').value="";
				document.getElementById('lastname').value="";
				document.getElementById('ownershare').value = "";
				document.getElementById('relationtype').value ="";
				document.getElementById('revenue').value = "";
				document.getElementById('ownerShareTypeid').value="";	
				document.getElementById('symbol').value="";		
				document.getElementById('Law_DueFrom').value="";	
				document.getElementById('Rules_SpecialContext').value="";	
			   /* document.getElementById('upazilaDropDown2').style.display = "block";
				document.getElementById('mouzaDropdown2').style.display = "block";
		   		document.getElementById('upazilaDropDown1').style.display = "none";
				document.getElementById('mouzaDropdown1').style.display = "none";*/
				document.getElementById('relationname').disabled = false;
				document.getElementById('relationtype').disabled = false; 
				/*document.getElementById('houseno').disabled = false;
				document.getElementById('streetname').disabled = false;
				document.getElementById('localityname').disabled = false;
				document.getElementById('mouzaname').disabled = false;
				document.getElementById('upazillaname').disabled = false; 
				document.getElementById('districtname').disabled = false;*/
				document.getElementById("address").checked = false;
				document.getElementById("relationTypeCheck").checked = false;
				document.getElementById('ownershare').disabled=  false;	
				document.getElementById("shareCheck").checked = false;
			/* 	 document.getElementById(div).innerHTML='<span id="img"></span>';
				 document.getElementById(div1).innerHTML='<span id="img1"></span>';
				 document.getElementById(div2).innerHTML='<span id="img2"></span> '; 
				 document.getElementById(div3).innerHTML='<span id="img3"></span> ';  */
				 getSymbolImage('symbol',"");
			}
	
	
	function checkForPossessionValidation(){
		debugger;
		var possShare=document.getElementById("possessionShare").value;
		 var possessionShare=converBanglaToNumeric(possShare);
		 if( possessionShare >1.0000){
				
				alert(" Please Enter Owner Possession Share");
				document.getElementById("possessionShare").focus();
			       return false;
				}
		 else if (document.getElementById("possessionShare").value == "")
			 {
			 alert(" Please Enter Owner Possession Share");
				document.getElementById("possessionShare").focus();
			       return false;
			 }
		 else if(document.getElementById("possessionOwnerName").value == ""){
			alert(" Please Select Owner Name");
			
			document.getElementById("possessionOwnerName").focus();
		       return false;
			}
		

		else if(document.getElementById("possessionPlot").value == "" ) {
	
		document.getElementById("possessionPlot").focus();
	       return false;
		}
		else 
		{

			var button =document.getElementById("addPossession").value.trim();
			
			var possOwnerName  =document.getElementById("possessionOwnerName").value.trim();
			var possPlot=document.getElementById("possessionPlot").value.trim();;
			var plotNo=converBanglaToNumeric(possPlot);
			var  possOwnerNo=document.getElementsByName("pownername");
			
			var possessionOwnerName = document.getElementById('possessionOwnerName').options[document
			    .getElementById('possessionOwnerName').selectedIndex].text;
			var possessionPlotno = document.getElementById('possessionPlot').options[document
			                                                                 	    .getElementById('possessionPlot').selectedIndex].text;
			
			
			if(possOwnerNo.length >0)
				{
			for(var i=1;i<=possOwnerNo.length;i++)
				{
			     var owner= document.getElementById("pownername"+i).value.trim();
				  var plot =document.getElementById("plotSrNo"+i).value.trim();
				  
				  if(owner.trim()==possessionOwnerName.trim() && possessionPlotno.trim()==plot.trim())
					  {
					  
					  alert ("Owner Name or Plot should not be duplicate. ");
					  return false;
					  }
				}
		
				}
			
		
		
		}
		
		return true;
	}
	
	function resetOwner1()
	 {
		var x= document.getElementById("ownershare").value;
		if(document.getElementById("ownershare").value!="" && document.getElementById("symbol").value=="")
			 {
		 document.getElementById("ownershare").disabled = false;
		 document.getElementById("symbol").disabled = true;
		 document.getElementById("symbol").value="";
			 }
		 else if(document.getElementById("ownershare").value!="" && document.getElementById("symbol").value!="")
			 {
			 document.getElementById("ownershare").disabled = true;
			 document.getElementById("symbol").disabled = false;
			 }
		 else if(document.getElementById("shareCheck").checked==true)
			 {
			 document.getElementById("ownershare").disabled = true;
			 document.getElementById("symbol").disabled = true;
			 document.getElementById("symbol").value = "";
			 }		
		 else{
		 document.getElementById("ownershare").disabled = false;
		 document.getElementById("symbol").disabled = false;
		 document.getElementById("symbol").value = "";
		     }
		 document.getElementById("ownerShareTypeid").disabled = false;
	    }
	
	
	 function forwardImageCount(action)
	 {
		if(action == 1){
	 	var totalImages = document.getElementById("imagesSize").value;
	 	var count = document.getElementById("imageClickCount").value;
	 	totalImages  = parseInt(totalImages);
	 	count = parseInt(count);
	 	if(count < totalImages){
	 		count++;
	 			}
		}
		else{
		 	var totalImages = document.getElementById("imagesSize").value;
		 	var count = document.getElementById("imageClickCount").value;
		 	if(count > 1){
		 		count--;
		 			}
		}
	 	document.getElementById("imageClickCount").value = count;
	 	document.getElementById("pageNoSpan").innerHTML = count;
	 }
	 function NumberLessThenOnePoss(id) {
			var value = document.getElementById(id).value;
			var value1 = converBanglaToNumeric(value);
			if (value1 > 1) {
				alert("ILFS Technologies :Possession Share Must Not be greater then 1");
				document.getElementById(id).focus();
				return false;
			}
			
		}
function RemoveAndAddOwner()
{
	var table = document.getElementById("ownerTable");

	var rowCount = table.rows.length;
	 var combo = document.getElementById("possessionOwnerName");

		if(combo.length>1)
		{
	    for(var k=combo.length;k>=1;k--)
	    {   
	    	combo.remove(k);
	    	
	    }
		}

	for(var i=1;i<rowCount;i++)
	{
		

		 if(document.getElementById('ownerShipid@'+i).value =="3" || document.getElementById('ownerShipid@'+i).value =="4" || document.getElementById('ownerShipid@'+i).value =="5")	
		  {
			 var ownernametext = document.getElementById("ownername@"+i).value;
			 var ownerid = document.getElementById("ownerid@"+i).value;
							 var ownershipid = document.getElementById("ownerShipid@"+i).value;
							
							 if(ownershipid=='3'||ownershipid=='4'||ownershipid=='5')
				{
				var ownernamevalue=ownernametext+"@"+i+"@"+ownerid;
				var option = document.createElement("option");
			
				option.text = ownernametext;
				option.value = ownernamevalue;
			
					combo.add(option, combo[i]);
				
				}
		


	} 
	}	}

function backForm(request,dashid)
{
	
var encodeddashid = btoa(dashid);
	 document.saveform.dashboardId.value = encodeddashid; 
    
     
     
     var encodedrequest = btoa(request);
	 document.saveform.request.value = encodedrequest; 
    
     
		document.saveform.action="ACLandViewController";
			document.saveform.submit();


	}
function updateId(dltRowcount,rowlength)
{
debugger;	
	for ( var i = dltRowcount; i < rowlength; i++) {
		var tempRow = parseInt(i) + 1;
		document.getElementById("deleteowner@" + tempRow).id = "deleteowner@"
			+ i;
	document.getElementById("deleteOwnerhidden@" + tempRow).id = "deleteOwnerhidden@"
			+ i;
	document.getElementById("addedflag@" + tempRow).id = "addedflag@"
			+ i;
	document.getElementById("editHidden@" + tempRow).id = "editHidden@"
			+ i;

	document.getElementById("editHiddenAddress@" + tempRow).id = "editHiddenAddress@"
		+ i;
	document.getElementById("editHiddenowner@" + tempRow).id = "editHiddenowner@"
		+ i;
	document.getElementById("editHiddenownerAddress@" + tempRow).id = "editHiddenownerAddress@"
		+ i;
	
	document.getElementById("ownername@" + tempRow).id = "ownername@"
		+ i;
	document.getElementById("ownerid@" + tempRow).id = "ownerid@"
		+ i;
	document.getElementById("addressid@" + tempRow).id = "addressid@"
		+ i;
	document.getElementById("sequence@" + tempRow).id = "sequence@"
		+ i;
	document.getElementById("relationid@" + tempRow).id = "relationid@"
		+ i;
	document.getElementById("rowcount@" + tempRow).id = "rowcount@"
		+ i;
	document.getElementById("ownerShipid@" + tempRow).id = "ownerShipid@"
		+ i;
	document.getElementById("relsame" + tempRow).id = "relsame"
		+ i;
	document.getElementById("shsame" + tempRow).id = "shsame"
		+ i;
	document.getElementById("edit@" + tempRow).id = "edit@"
		+ i;
	document.getElementById("addrowSymbol@" + tempRow).id = "addrowSymbol@"
		+ i;
	document.getElementById("addrowSymbol1@" + tempRow).id = "addrowSymbol1@"
		+ i;
	document.getElementById("addrowSymbol2@" + tempRow).id = "addrowSymbol2@"
		+ i;
	document.getElementById("addrowSymbol3@" + tempRow).id = "addrowSymbol3@"
		+ i;
	document.getElementById("addrowSymbol4@" + tempRow).id = "addrowSymbol4@"
		+ i;
	document.getElementById("addrowSymbol5@" + tempRow).id = "addrowSymbol5@"
		+ i;
	document.getElementById("addrowSymbol6@" + tempRow).id = "addrowSymbol6@"
		+ i;
	document.getElementById("addrowSymbol7@" + tempRow).id = "addrowSymbol7@"
		+ i;
	document.getElementById("ownerSymbol"+tempRow).id = "ownerSymbol"
		+ i;
	document.getElementById("isRelationSame@"+tempRow).id = "isRelationSame@"
		+ i;
	}
	}
function ResetEncodingFormRS(){
    if (confirm("Are you sure to Reset the Form?") == true) {
			document.saveform.action="DataEncodingRS";
			document.saveform.submit();

}
}
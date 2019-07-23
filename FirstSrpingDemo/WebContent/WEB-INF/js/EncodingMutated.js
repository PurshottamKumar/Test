function deleteOwnerRowForDynamicTable(id, ownerid,addressid) {
	debugger;

	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("tbl_owner");
	var rowlength = table.rows.length;
	/*var ownername=document
			.getElementById("ownername@" + dltRowcount).value;*/
	  var flag = false;

		
	  if (document.getElementById('editcountidentify').value != "") {
		   alert("Cannot delete Details while Editing");
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

					 /*if (possownername.length > 0){
						for ( var j = 1; j <= possownername.length; j++) {
							var pownername=document
									.getElementById("pownername" + j).value;
								if (pownername.trim()==ownername.trim()) {
								alert("ILFS Technologies :Please remove the linked Row first");
								return false;
							}
						}
					}*/
				
						 
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
								updateId(dltRowcount,rowlength);						 
						 }
						//	RemoveAndAddOwner();
 
				   
				   
				   
			 
			 }
		
		}else if (confirm("Do you really want to delete this owner") == true) {		   

			 /*if (possownername.length > 0){
				for ( var j = 1; j <= possownername.length; j++) {
					var pownername=document
							.getElementById("pownername" + j).value;
						if (pownername.trim()==ownername.trim()) {
						alert("ILFS Technologies :Please remove the linked Row first");
						return false;
					}
				}
			}*/
		
		
			
			
			
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
					updateId(dltRowcount,rowlength);
			 
			 
			 
			 }
				//RemoveAndAddOwner();

	   
	   
	   

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
					/*
							 if (possownername.length > 0){
								for ( var j = 1; j <= possownername.length; j++) {
									var pownername=document
											.getElementById("pownername" + j).value;
										if (pownername.trim()==ownername.trim()) {
										alert("ILFS Technologies :please remove the linked Row first");
										return false;
									}
								}
							}*/
						
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
								updateId(dltRowcount,rowlength);
						 
								}
					   
						//	RemoveAndAddOwner();	
					   
					   
					   
					   
					   
					   
					   
					   
					   
					   
					   
					   }
				
				
				
				
				
				}
			
			 }
			else{
				if (confirm("are you sure you want to delete") == false) {
					   return false;
				   }else {
					 	 /*if (possownername.length > 0){
							for ( var j = 1; j <= possownername.length; j++) {
								var pownername=document
										.getElementById("pownername" + j).value;
									if (pownername.trim()==ownername.trim()) {
									alert("ILFS Technologies :please remove the linked Row first");
									return false;
								}
							}
						}*/
					
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
							updateId(dltRowcount,rowlength);
					 
							}
					//	RemoveAndAddOwner();
				   }
		}
		}
	 
	 
		if(flag == true){
		debugger;
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
				
					
			    /*for(var j=0 ;j<count;j++)
			     {
			    	var y=parseInt(dltRowcount)+parseInt(j);
			    	 var ownername  =  document.getElementById("ownername@"+y).value;
					    var powner= document.getElementsByName("pownername");
					    for ( var t = 1; t <= powner.length; t++) 
					    	{
					    		  var possowner= document.getElementById("pownername"+t).value;
					    	
					    	if(possowner.trim() == ownername.trim())
					    	{
					    		
								alert("ILFS Technologies: please remove the linked Possesion Details first");
								return false;
								}	
					    	
					    	}
						//table.deleteRow(y);
						
						//pownername1.push(ownername);
			     }*/
						
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

								updateId(dltRowcount,rowlength);

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
}
			}var rowCount = table.rows.length;
			if(rowCount=='1'){
				var row = table.insertRow(rowCount);
				var a=row.insertCell(0);
				//row.insertCell(1);								
				a.colSpan = "13";
				a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
				a.className='text-center';
				document.getElementById("ownervaluecheck").value=1;
			}		
		resetownerdetails();
}

function deleteplotRowForDynamicTable(id, row, plot, name) {
	debugger;
	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("newdetailstable");

	var possplotNo = document.getElementsByName("plotSrNo");
	var plott=document
			.getElementById("plotnos" + dltRowcount).value;
	 if (document.getElementById('editplotcountidentifyplot').value != "") {
		   alert("Cannot delete Details whileEditing");
			return false;
		}
	 
	 /*
	if (possplotNo.length > 0) {
		for ( var j = 1; j <= possplotNo.length; j++) {
			var pplot=document
					.getElementById("plotSrNo" + j).value;
			if (parseInt(converBanglaToNumeric(plott).trim())== parseInt(converBanglaToNumeric(pplot.trim()))) {
				
				alert("ILFS Technologies :please remove the linked Row first");
				return false;
			}
		}
	}*/
	var valueplot = document.getElementById("deleteplothidden@" + dltRowcount).value;
	if (valueplot == 'existing' || valueplot=='edited') {
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
				
				document.getElementById("editPlot@" + tempRow).id = "editPlot@"
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
		 if (confirm("Do you really want to delete this owner") == true) {
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
		
		document.getElementById("editPlot@" + tempRow).id = "editPlot@"
			+ i;

		}

	} }
 /*  var plotCombo = document.getElementById("possessionPlot");
   	     for (i=1;i<plotCombo.length; i++) {
	    
	       if (plotCombo.options[i].text==plott) {
	    	   plotCombo.remove(i);
	       }
	    }*/
   	     
   	  var plotnos=document.getElementsByName("plotnos").value;
  	var plottable = document.getElementById("newdetailstable");
  	var plotrowCount = plottable.rows.length;
  	

  	//alert("comboplot.length"+comboplot.length);
  	
  	/*removeplot();

  		var plotCombo = document
  				.getElementById("possessionPlot");
  	for(var i=1;i<plotrowCount;i++)
  	{
  		debugger;
  		var plotNum=document.getElementById("plotnos"+ i).value;
  		var plotid=document.getElementById("plotids"+ i).value;
  		
  	if (plotNum.trim() != "" || plotNum.trim() != null) {
  	
  		var option = document.createElement("option");
  		var plotNo = converToBanglaNumeric(plotNum);
  		option.text = plotNo;
  		option.value = plotid+"@"+plotNum;
  	
  			plotCombo.add(option, plotCombo[i]);
  		

  	} 
  	}*/
  	var rowCount = table.rows.length;
	if(rowCount=='1'){
		var row = table.insertRow(rowCount);
		var a=row.insertCell(0);
		//row.insertCell(1);								
		a.colSpan = "14";
		a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
		a.className='text-center';
		document.getElementById("plotvaluecheck").value=1;
	}
	}


function addRow(ownerTable) {
	debugger;
	var firstname = document.getElementById('firstname').value;
	var middlename = document.getElementById('middlename').value;
	var lastname = document.getElementById('lastname').value;

	var hno = document.getElementById('houseno').value;
	var stnm = document.getElementById('streetname').value;
	var locnm = document.getElementById('localityname').value;

	var relationnamevalue = document.getElementById('relationname').value;
	var relationtypeid = document.getElementById('relationtype').value;
	var relationtypeText = document.getElementById('relationtype').options[document
			.getElementById('relationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('ownerShareTypeid').value;
	var ownerShipTypeText = document.getElementById('ownerShareTypeid').options[document
			.getElementById('ownerShareTypeid').selectedIndex].text;
	var mouzaid = document.getElementById('mouzaname').value;
	var mouzanameText = document.getElementById('mouzaname').options[document
			.getElementById('mouzaname').selectedIndex].text;

	var upzillaid = document.getElementById('upazillaname').value;
	var upazillanameText = document.getElementById('upazillaname').options[document
			.getElementById('upazillaname').selectedIndex].text;

	var districtid = document.getElementById('districtname').value;
	var districtnameText = document.getElementById('districtname').options[document
			.getElementById('districtname').selectedIndex].text;

	var ownersharsymbole = document.getElementById('symbol').value;
	
		var revenue = document.getElementById('revenue').value;
	var ownershare = document.getElementById('ownershare').value;
	
	var revenueDue = document.getElementById('revenueDue').value;
	var spclRuleContext = document.getElementById('spclRuleContext').value;
	
	
	var relation; var revenuefrom; var specialrules;
		 
		 
		 
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
	
	if (mouzaid == "0") {
		mouzanameText = "";
		
	}
	if (upzillaid == "0") {
		upazillanameText = "";
		
	}
	if (districtid == "0") {
		districtnameText = "";
		
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

	if (mouzaid == "0") {
		mouzanameText = "";
		
	}
	
	if(revenueDue=='')
		revenuefrom="0";
	else
		revenuefrom=revenueDue;  
	
		if(spclRuleContext=='')
			specialrules="0";
		else
			specialrules=spclRuleContext;
	
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
		if(addedflag=="existing" || addedflag=="edited" ){
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
	
			isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
			addressid="NA";
			
		}
	if(document.getElementById('shareCheck').checked==true)
		{
		 addedflag = document.getElementById('addedflag@'+prv).value;
		
		 sequence = document.getElementById('sequence@'+prv).value;
		 prvownerShipid = document.getElementById('ownerShipid@'+prv).value;

		if(addedflag=="existing" || addedflag=="edited" ){
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
	
	
		}else 
			{
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
	cell3.innerHTML = hno + " " + stnm + " " + locnm + " " + mouzanameText
			+ " " + upazillanameText + " " + districtnameText+
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
		+ converBanglaToNumeric(ownerSymbol)+"@"+rowCount+"@"+"NA"+"@"+issharesame+"@"+ revenuefrom +"@"+ specialrules;


	
	if (hno == "") {
		hno = "-";
	
	}
	if (stnm == "") {
		stnm = "-";
	
		
	}
	if (locnm == "") {
		locnm = "-";
	
		
	}
	if (mouzaid == "") {
		mouzaid = "-";
		
	}
	if (upzillaid == "") {
		upzillaid = "-";
		
	}
	if (districtid == "") {
		districtid = "-";
		
	}
	var owneraddress= hno
	+ "@" + stnm + "@" + locnm + "@" + mouzaid + "@" + upzillaid + "@"
	+ districtid + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;
	
	var cell8 = row.insertCell(7);
	cell8.innerHTML = revenueDue;
	
	var cell9 = row.insertCell(8);
	cell9.innerHTML = spclRuleContext;
	
	
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
			+ '\' onclick="deleteOwnerRowForDynamicTable(this.id,0,0); return false;" /><input type="hidden" id=\'deleteOwnerhidden@'
			+ rowCount + '\' value="added"/></span>';
	  
	  if( document.getElementById('relationTypeCheck').checked == true){
	   var cell12=row.insertCell(11);
	   cell12.className="text-center";
	  cell12.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]" checked="checked">';
	  }else{
		  var cell12=row.insertCell(11);
		   cell12.className="text-center";
		  cell12.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]">';
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
	document.getElementById('ownervaluecheck').value="";
	
	 if(document.getElementById('ownerShareTypeid').value =="3" || document.getElementById('ownerShareTypeid').value =="4" || document.getElementById('ownerShareTypeid').value =="5" ||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5")	
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
	  }
	for(var i=1;i<rowCount;i++)
	{
		debugger;

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
	for(var i=1;i<plotrowCount;i++)
	{
		debugger;
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
	
	/*
	
   var option = document.createElement("option");
   
   option.text = firstName.value+" "+middleName.value+" "+LastName.value;
   option.value = firstName.value+""+middleName.value+""+LastName.value+"@"+rowCount+"@"+"NA";
   
   // var rowCount1= document.getElementById("rowcountidentify").value;
   
        try {
 			//  combo.remove(rowCount1);
   		   combo.add(option, combo[rowCount]);
			
	

   }catch(error) {
   	alert(error.message);
   }*/
	 // }
	/* else
		 {

		removeplot();
		 }*/
	 document.getElementById('ownersize').value="";
document.getElementById('ownervaluecheck').value="";
	 document.getElementById('rowcountidentifyrows').value=1;
	 resetownerdetails ();
	 return true;
	 
}
	

function addPlotDetails(newdetailstable) {
debugger;
var adjvarPlotNo = document.getElementById('AdjplotNo').value;
var sabeekplotNo = document.getElementById('sabeekplotNo').value;
	var plotNo = document.getElementById('plotNo').value;
	if(plotNo=='')
		{
		alert("Please enter RS plot no");
		document.getElementById('plotNo').focus();
		return false;
		}
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
	
	
	
	var agricultureTypeidText;var nonagricultureTypeidText;
	var agricultureTypeidValue = document.getElementById('agricultureTypeid').value;

	 agricultureTypeidText = document.getElementById('agricultureTypeid').options[document
			.getElementById('agricultureTypeid').selectedIndex].text;

	var nonagricultureTypeidValue = document
			.getElementById('nonagricultureTypeid').value;

	 nonagricultureTypeidText = document
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
	agricultureTypeidText=agricultureTypeidValue=="" ? "" : agricultureTypeidText;
	nonagricultureTypeidText=nonagricultureTypeidValue=="" ? "" : nonagricultureTypeidText;
	
	agricultureTypeidValue=agricultureTypeidValue=="" ? "0" : agricultureTypeidValue;
	nonagricultureTypeidValue=nonagricultureTypeidValue=="" ? "0" : nonagricultureTypeidValue;
	//sabeekplotNo=sabeekplotNo=="" ? "০" : sabeekplotNo;
	var six1BanglaShow = converToBanglaNumeric(six1NumericShow);
	var symbol1 = document.getElementById('symbol1').value;
	var seven = document.getElementById('seven').value;
	if(symbol1==''&&seven=='')
		{
		alert("Please enter ‍Share");
		document.getElementById('seven').focus();
		return false;
		}
	
	
	var eight = document.getElementById('eight').value;
	var eight1 = document.getElementById('eight1').value;
var plotremark=document.getElementById('Adjremarks').value;



	var allValuesPlot = converBanglaToNumeric(plotNo) + "@" +agricultureTypeidText+"@"+nonagricultureTypeidText+"@"+converBanglaToNumeric(six) + "@" + six1NumericShow + "@" + converBanglaToNumeric(seven)
			+ "@" + converBanglaToNumeric(eight) + "@" + converBanglaToNumeric(eight1)+"@"+converBanglaToNumeric(symbol1)+"@"+converBanglaToNumeric(adjvarPlotNo)+"@"+(plotremark==''?"-":plotremark)+"@"+agricultureTypeidValue+"@"
			+ nonagricultureTypeidValue +"@"+ "NA" + "@"+ converBanglaToNumeric(sabeekplotNo=="" ? "০" : sabeekplotNo);

		
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	cell1.appendChild(element1);
	cell1.innerHTML = adjvarPlotNo+'<input type="hidden" id="AdjplotHidden'+rowCount+'" name="AdjplotTypeArr" value="'+converBanglaToNumeric(adjvarPlotNo)+'";">';;
	
	
	var cell2= row.insertCell(1);
	cell2.innerHTML = sabeekplotNo+'<input type="hidden" id="sabeekplotNoHidden'+rowCount+'" name="sabeekplotNoTypeArr" value="'+converBanglaToNumeric(sabeekplotNo)+'";">';;
	var cell3 = row.insertCell(2);
	cell3.innerHTML = plotNo+'<input type="hidden" id="plotnos'+rowCount+'" name="plotnos" value="'+converBanglaToNumeric(plotNo)+'";">'+
	'<input type="hidden" id="plotids'+rowCount+'" name="plotids" value="new";">';;
	var cell4 = row.insertCell(3);
	cell4.innerHTML = agricultureTypeidText;
	var cell5 = row.insertCell(4);
	cell5.innerHTML = nonagricultureTypeidText;
	var cell6 = row.insertCell(5);
	cell6.innerHTML = six;
	var cell7 = row.insertCell(6);
	cell7.innerHTML = six1BanglaShow;
	  var symbolValue= converBanglaToNumeric(symbol1);
	 
	var finalImage ='<span id="addrowPlotSymbol@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol2@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol4@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowCount+'" class="symbolImg"></span>'+
	'<span id="addrowPlotSymbol6@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowCount+'" class="symbolImg"></span>';
	    
	var cell8 = row.insertCell(7);
	cell8.innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowCount+'" name="plotSymbol" value="'+symbol1+'";">';
	  if(symbolValue!="")
		{
	    	getSymbolImage('addrowPlotSymbolID@'+rowCount,symbol1,"");
		}
	var cell9 = row.insertCell(8);

	cell9.innerHTML =seven;
	var cell10 = row.insertCell(9);
	
	cell10.innerHTML = eight;
	var cell11 = row.insertCell(10);

	cell11.innerHTML = eight1;
	
	var cell12 = row.insertCell(11);
	cell12.innerHTML =plotremark+'<input type="hidden" id="AdjplotremarkHidden'+rowCount+'" name="AdjplotremarkTypeArr" value="'+plotremark+'";">';;
	var cell13 = row.insertCell(12);
	cell13.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'editPlot@'
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
	var cell14 = row.insertCell(13);
	cell14.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" name=\'deletePlot@'
			+ rowCount
			+ '\' id=\'deletePlot@'
			+ rowCount
			+ '\' onclick="deleteplotRowForDynamicTable(this.id,'+rowCount+','+converBanglaToNumeric(plotNo)+',this.name); return false;" />'
			+'<input type="hidden" value="added" id=\'deleteplothidden@'+ rowCount + '\'></span>';
	// table.row.style
	table.rows[rowCount].className = "success";
	document.getElementById('plotvaluecheck').value="";
	/* if (document.getElementById("possessionOwnerName").length > 1) {
		 
		 
		 
	

			//alert("comboplot.length"+comboplot.length);
			
			removeplot();
			
			var plottable = document.getElementById("newdetailstable");
			var plotrowCount = plottable.rows.length;
			

				var plotCombo = document
						.getElementById("possessionPlot");
			for(var i=1;i<plotrowCount;i++)
			{
				debugger;
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
		 
	 }*/
		 
		 
		 
	/*	 
		 
	  var cmb=document.getElementById("possessionPlot").length;
	   var comboplot = document.getElementById("possessionPlot");  
	    var option = document.createElement("option");
	    option.text = plotNo ;
	    option.value ="new@"+converBanglaToNumeric(plotNo);
	    comboplot.add(option,null);
	  }*/
	document.getElementById("plotsize").value="";
	document.getElementById('plotvaluecheck').value="";
	clearPlotDetails();
	 return true;

}
function submitform() {
	var table = document.getElementById("tbl_owner");
	var rowCount = table.rows.length;
	
	var tableplot = document.getElementById("newdetailstable");

	var rowCountplot = tableplot.rows.length;
	
		
		/*if(document.getElementById("imagesSize").value != document.getElementById("imageClickCount").value){
			alert("please encode  the images");
			return false;
		}*/
		
		
		var khatno=document.getElementById("khatianno").value;
		if(khatno=='')
		{
		alert("Khatian no can not be blank");
		document.getElementById("khatianno").focus();
		return false;
		}
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
		
		
		var khatiannumber=document.getElementById("khatianno").value;
		var jlno=document.getElementById("jlno").value;
		var rasa=document.getElementById("rasa").value;
		
		var prekhatianNo=document.getElementById("prekhatianNo").value;
		var Saabekkhatianno=document.getElementById("Saabekkhatianno").value;
		var caseno=document.getElementById("caseno").value;
		
		var values=converBanglaToNumeric(khatiannumber)+"@"+
		converBanglaToNumeric(jlno=="" ?"০" : jlno)+"@"+converBanglaToNumeric(rasa=="" ?"০" : rasa)+"@"+
		converBanglaToNumeric(prekhatianNo=="" ?"০" : prekhatianNo)+"@"+converBanglaToNumeric(Saabekkhatianno=="" ?"০" : Saabekkhatianno)+"@"+
		converBanglaToNumeric(caseno=="" ?"০" : caseno);
		document.getElementById("editedkhatianjlno").value=values;
		
		
		/*var lcaseno=document.getElementById("lcaseno").value;
		var lcasenohidden=document.getElementById("lcasenohidden").value;*/
		
		/*if(lcasenohidden=="" && lcaseno==""){
			//no insert no update
			
		}else if(lcaseno=="" && lcasenohidden!=""){
			//update null
		}else if(lcaseno!="" && lcasenohidden==""){
			//update value
		}else if(lcaseno!="" && lcasenohidden==""){
			//update
		}*/
			//document.getElementById("lcasenohidden").value;
		
		
		/*var khatiannumber=document.getElementById("editedkhatianjlno").value;
		var khatId=document.getElementById("khatId").value;
		var khatianid=document.getElementById("khatianid").value;
		
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
			}
	 
		var jlno=document.getElementById("jlno").value;
		var rsno=document.getElementById("rasa").value;
		var formtype=document.getElementById("formTypeId").value;
		var khatianoldremarks=document.getElementById("khatianoldremarks").value;
		var khatianRemarks=document.getElementById("remarks").value;
	
		if(khatianRemarks=='')
			{
			khatianRemarks="NA";
			}
		else
		khatianRemarks=khatianRemarks;
		
		
		document.getElementById("editedkhatianjlno").value=converBanglaToNumeric(khatno)+"@"+converBanglaToNumeric(jlno)+"@"+converBanglaToNumeric(rsno)+"@"+converBanglaToNumeric(formtype)+"@"+khatianRemarks;
		var tablepossession = document.getElementById("Possessiontable");

		var rowCountpossession = tablepossession.rows.length;
		  var ownerLength=document.getElementById("possessionOwnerName");
		    var plotLength=document.getElementById("possessionPlot");
		   	if(ownerLength.length==rowCountpossession)
		   		{
		   		
		   		}
		   	else if(ownerLength.length>1 && plotLength.length >1 && rowCountpossession=="1" )
		  	  {
		  	  alert("click here to add possession");
		  	$("#inputFillPossession").show();
		     	document.getElementById("possessionOwnerName").focus();
		  		return false;
		  		
		  	  } else if(ownerLength.length>1 && plotLength.length>1)
		    {
		  		
		  		
		      var counterValue=0;
		    	var posseesionOwner=document.getElementsByName("pownername");
		    	 for (var i = 1; i < ownerLength.options.length; i++)
		    	 {
		    		 for (var j = 1; j < posseesionOwner.length; j++) 
		    			 {
		    			 var pwe=document.getElementById("pownername"+j).value;
		    		
		    					if (ownerLength.options[i].text.trim() == document.getElementById("pownername"+j).value)
		    		   {
		    	 			counterValue++;  
		    			  break;
		    	        }
		    				
		    	
		    			 }
		    	
		    	} 
		    
		    	if(counterValue	!= (ownerLength.length-1))
		    		{
		    		alert("Please Add Possession Share for Owner.");
		        	return false;
		    		}
		    		
		    		
		    	}*/
		var ownersize=document.getElementById('ownersize').value;
		//   if(ownersize!='0'){
			   //table.deleteRow(1);
		  // }		
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
	

		//   }
		   var plotsize=document.getElementById("plotsize").value;  
//if(plotsize!='0'){		   
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
//}
	/*
	for ( var i = 1; i < rowCountpossession; i++) {
		debugger;
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
	}*/
	
	
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
		  var khat=document.getElementById('khatianId').value;
		  document.getElementById('khatianId').value= khat; 
	    	document.saveform.action = "saveDataEncodingMutated";
	    	document.saveform.submit();
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
		//var val = document.getElementById("editplothidden@" + row).value;
		//var res = val.split("@");
		document.getElementById("editplotcountidentifyplot").value="1";
		
		document.getElementById('plotNo').value = converToBanglaNumeric(res[0]);
		document.getElementById('plotId').value = res[13];
		document.getElementById('agricultureTypeid').value=res[11]=="0" ? "" : res[11] ;
		document.getElementById('nonagricultureTypeid').value=res[12]=="0" ? "" : res[12];
		document.getElementById('sabeekplotNo').value=converToBanglaNumeric(res[14]=="0" ? "" : res[14]);
		document.getElementById('six').value = converToBanglaNumeric(res[3]);
		document.getElementById('six1').value = converToBanglaNumeric(res[4]);
		/*if (res[5] != "") {
			document.getElementById('seven').value = converToBanglaNumeric(res[5]);
			document.getElementById('seven').disabled = false;
		} else {
			document.getElementById('seven').disabled = true;
		}*/
		document.getElementById('eight').value = converToBanglaNumeric(res[6]);
		document.getElementById('eight1').value = converToBanglaNumeric(res[7]);
		document.getElementById('AdjplotNo').value = converToBanglaNumeric(res[9]);
		document.getElementById('Adjremarks').value = res[10]=='-'?'':res[10];
		if(res[8]!="")
		{
	document.getElementById('symbol1').value = converToBanglaNumeric(res[8]);
	document.getElementById('seven').disabled =true;

	 var symbolValue= res[8];
	 getSymbolImage('symbol1',symbolValue,"");
		}
	else{
	document.getElementById('symbol1').disabled =true;
	}
		
		
		if(res[5]!="")
		{
	document.getElementById('seven').value = converToBanglaNumeric(res[5]);
	document.getElementById('symbol1').disabled =true;
	 
		}
	else{
	document.getElementById('seven').disabled =true;
	}
		document.getElementById('editplotcountidentifyplot').value=1;
		
		document.getElementById('rowcountidentifyplot').value = row;
		$("#addPlotButton").hide();
		$("#editPlotButton").show();
		document.getElementById("plotNo").focus();
		$("#inputFillParcel").show();
	}
	
	
	
	
	
	
	
	
	
	/*clearPlotDetails();
debugger;
	var row = id.split("@")[1];
	var val = document.getElementById("editplothidden@" + row).value;
	var res = val.split("@");
	document.getElementById("editplotcountidentifyplot").value="1";
	
	document.getElementById('plotNo').value = converToBanglaNumeric(res[0]);
	document.getElementById('plotId').value = res[13];
	document.getElementById('agricultureTypeid').value=res[11];
	document.getElementById('nonagricultureTypeid').value=res[12];
	document.getElementById('sabeekplotNo').value=converToBanglaNumeric(res[13]);
	document.getElementById('six').value = converToBanglaNumeric(res[3]);
	document.getElementById('six1').value = converToBanglaNumeric(res[4]);
	if (res[4] != "") {
		document.getElementById('seven').value = converToBanglaNumeric(res[5]);
	} else {
		document.getElementById('seven').disabled = true;
	}
	document.getElementById('eight').value = converToBanglaNumeric(res[6]);
	document.getElementById('eight1').value = converToBanglaNumeric(res[7]);
	document.getElementById('AdjplotNo').value = converToBanglaNumeric(res[9]);
	document.getElementById('Adjremarks').value = res[10]=='-'?'':res[10];
	if(res[8]!="")
	{
document.getElementById('symbol1').value = converToBanglaNumeric(res[8]);
document.getElementById('seven').disabled =true;

 var symbolValue= res[8];
 getSymbolImage('symbol1',symbolValue,"");
	}
else{
document.getElementById('symbol1').disabled =true;
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
}*/
function clearPlotDetails() {
	document.getElementById('AdjplotNo').value = "";
	document.getElementById('plotNo').value = "";
	document.getElementById('six').value = "";
	document.getElementById('six1').value = "";
	document.getElementById('seven').value = "";
	document.getElementById('symbol1').value = "";
	document.getElementById('eight').value = "";
	document.getElementById('eight1').value = "";
	document.getElementById('agricultureTypeid').value = "";
	document.getElementById('nonagricultureTypeid').value = "";
	document.getElementById('symbol1').disabled = false;
	document.getElementById('seven').disabled = false;
	document.getElementById('Adjremarks').value = "";
	document.getElementById('sabeekplotNo').value="";
	
	 getSymbolImage('symbol1',"");
	 document.getElementById('editplotcountidentifyplot').value="";
	 $("#editPlotButton").hide();
		$("#addPlotButton").show();
}
function UpdatePlotDetails() {
	var table = document.getElementById("newdetailstable");
	var plotNo = document.getElementById('plotNo').value;
	var AdjplotNo = document.getElementById('AdjplotNo').value;
	var sabeekplotNo=document.getElementById('sabeekplotNo').value;
	
	var Adjremarks = document.getElementById('Adjremarks').value;
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
	var symbol1 = document.getElementById('symbol1').value;
	var seven = document.getElementById('seven').value;
	if(symbol1==''&& seven=='')
		{
		alert("Please enter values in 7th column");
		document.getElementById('seven').focus();
		return false;
		}
	if(agricultureTypeidValue=="0")
	{
		agricultureTypeidText="";
	}
	
	if(nonagricultureTypeidValue=="0")
	{
		nonagricultureTypeidText="";
	}
	agricultureTypeidText=agricultureTypeidValue=="" ? "" : agricultureTypeidText;
	nonagricultureTypeidText=nonagricultureTypeidValue=="" ? "" : nonagricultureTypeidText;
	
	agricultureTypeidValue=agricultureTypeidValue=="" ? "0" : agricultureTypeidValue;
	nonagricultureTypeidValue=nonagricultureTypeidValue=="" ? "0" : nonagricultureTypeidValue;
	

	
	var eight = document.getElementById('eight').value;
	var eight1 = document.getElementById('eight1').value;
	var plotId = document.getElementById('plotId').value;
	var rowcountidentifyplot = document.getElementById('rowcountidentifyplot').value;
	table.rows[rowcountidentifyplot].cells[0].innerHTML = AdjplotNo;
	
	table.rows[rowcountidentifyplot].cells[1].innerHTML = sabeekplotNo;
	
	table.rows[rowcountidentifyplot].cells[2].innerHTML = plotNo
	+'<input type="hidden" id="plotnos'+rowcountidentifyplot+'" name="plotnos" value="${cnt.plotNo}"  >'+
	'<input type="hidden" id="plotids'+rowcountidentifyplot+'" name="plotids" value="${cnt.plotId}"  >';
	table.rows[rowcountidentifyplot].cells[3].innerHTML = agricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[4].innerHTML = nonagricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[5].innerHTML = six;
	table.rows[rowcountidentifyplot].cells[6].innerHTML = six1;
	 	  
	  
	  var symbolValue= converBanglaToNumeric(symbol1);
		 
		var finalImage ='<span id="addrowPlotSymbol@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol2@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol4@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol6@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowcountidentifyplot+'" class="symbolImg"></span>';
		    
		 table.rows[rowcountidentifyplot].cells[7].innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowcountidentifyplot+'" name="plotSymbol" value="'+symbol1+'";">';
		  if(symbolValue!="")
			{
		    	getSymbolImage('addrowPlotSymbolID@'+rowcountidentifyplot,symbol1,"");
			}
	   
		  
	/*table.rows[rowcountidentifyplot].cells[6].innerHTML = symbol1;*/
	table.rows[rowcountidentifyplot].cells[8].innerHTML = seven;
	table.rows[rowcountidentifyplot].cells[9].innerHTML = eight;
	table.rows[rowcountidentifyplot].cells[10].innerHTML = eight1;
	table.rows[rowcountidentifyplot].cells[11].innerHTML = Adjremarks;
	 
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
	if(flagplot=='added')
	{
		document.getElementById("editplothidden@" + rowcountidentifyplot).value = converBanglaToNumeric(plotNo)
	+ '@'
		+agricultureTypeidText
		+ '@'
		+nonagricultureTypeidText
		+'@'
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
		+converBanglaToNumeric(AdjplotNo)
		+'@'
		+Adjremarks
		+ '@'
		+ agricultureTypeidValue
		+ '@'
		+ nonagricultureTypeidValue
		
		+ '@' + plotId +'@'+converBanglaToNumeric(sabeekplotNo=="" ? "০" : sabeekplotNo);
		
document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'added';
}
if(flagplot=='existing'||flagplot=='edited')
{document.getElementById("editedplothidden@" + rowcountidentifyplot).value = converBanglaToNumeric(plotNo)
	+ '@'
	+agricultureTypeidText
	+ '@'
	+nonagricultureTypeidText
	+'@'
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
	+converBanglaToNumeric(AdjplotNo)
	+'@'
	+Adjremarks
	+ '@'
	+ agricultureTypeidValue
	+ '@'
	+ nonagricultureTypeidValue
	
	+ '@' + plotId + '@'+converBanglaToNumeric(sabeekplotNo=="" ? "০" : sabeekplotNo);
	document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'edited';
}
document.getElementById('editplotcountidentifyplot').value ="";
//document.getElementById('checkplotediting').value="";
resetPlotDetails();
	
}
	
	
	
	
	
	
	
	/*var table = document.getElementById("newdetailstable");
	var plotNo = document.getElementById('plotNo').value;
	var AdjplotNo = document.getElementById('AdjplotNo').value;
	var sabeekplotNo=document.getElementById('sabeekplotNo').value;
	
	var Adjremarks = document.getElementById('Adjremarks').value;
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
	var symbol1 = document.getElementById('symbol1').value;
	var seven = document.getElementById('seven').value;
	if(symbol1==''&& seven=='')
		{
		alert("Please enter values in 7th column");
		document.getElementById('seven').focus();
		return false;
		}
	
	var eight = document.getElementById('eight').value;
	var eight1 = document.getElementById('eight1').value;
	var plotId = document.getElementById('plotId').value;
	var rowcountidentifyplot = document.getElementById('rowcountidentifyplot').value;
	table.rows[rowcountidentifyplot].cells[0].innerHTML = AdjplotNo; 
	table.rows[rowcountidentifyplot].cells[1].innerHTML = sabeekplotNo; 
	table.rows[rowcountidentifyplot].cells[2].innerHTML = plotNo
	+'<input type="hidden" id="plotnos'+rowcountidentifyplot+'" name="plotnos" value="${cnt.plotNo}"  >'+
	'<input type="hidden" id="plotids'+rowcountidentifyplot+'" name="plotids" value="${cnt.plotId}"  >';
	table.rows[rowcountidentifyplot].cells[3].innerHTML = agricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[4].innerHTML = nonagricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[5].innerHTML = six;
	table.rows[rowcountidentifyplot].cells[6].innerHTML = six1;
	 	  
	  
	  var symbolValue= converBanglaToNumeric(symbol1);
		 
		var finalImage ='<span id="addrowPlotSymbol@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol2@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol4@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol6@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowcountidentifyplot+'" class="symbolImg"></span>';
		    
		 table.rows[rowcountidentifyplot].cells[7].innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowcountidentifyplot+'" name="plotSymbol" value="'+symbol1+'";">';
		  if(symbolValue!="")
			{
		    	getSymbolImage('addrowPlotSymbolID@'+rowcountidentifyplot,symbol1,"");
			}
	   
		  
	table.rows[rowcountidentifyplot].cells[6].innerHTML = symbol1;
	table.rows[rowcountidentifyplot].cells[8].innerHTML = seven;
	table.rows[rowcountidentifyplot].cells[9].innerHTML = eight;
	table.rows[rowcountidentifyplot].cells[10].innerHTML = eight1;
	table.rows[rowcountidentifyplot].cells[11].innerHTML = Adjremarks;
	 
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
	if(flagplot=='added')
	{
		document.getElementById("editplothidden@" + rowcountidentifyplot).value = converBanglaToNumeric(plotNo)
		+ '@'
		+ agricultureTypeidValue
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
		+converBanglaToNumeric(AdjplotNo)
		+'@'
		+Adjremarks
		+ '@' + plotId + '@' + sabeekplotNo;
		
document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'added';
}
if(flagplot=='existing'||flagplot=='edited')
{document.getElementById("editedplothidden@" + rowcountidentifyplot).value = converBanglaToNumeric(plotNo)
	+ '@'
	+ agricultureTypeidValue
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
	+converBanglaToNumeric(AdjplotNo)
	+'@'
	+Adjremarks
	+ '@' + plotId + '@' + sabeekplotNo;
	document.getElementById("editplothiddenflag@" + rowcountidentifyplot).value = 'edited';
}
document.getElementById('editplotcountidentifyplot').value ="";
resetPlotDetails();
	
}*/

function editOwnerdetails(id) {
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
	
	document.getElementById('editcountidentify').value="1";
	
	if(row=="1"){
			document.getElementById('rowcountidentify').value="1";
	}else
		document.getElementById('rowcountidentify').value="";
	var ownername = document.getElementById("ownername@" + row).value;

	var  ownerNo=document.getElementsByName("pownername");
if(ownerNo.length>0){
 for(var j=1 ;j<ownerNo.length;j++)
 {
	
 if(ownername.trim() ==(document.getElementById("pownername"+j).value.trim()))
	{

	alert("Please remove the linked Possession Share first For Updating Owner");
	document.getElementById("addOwnerButton").value = "Add Owner";
	addownerdetails();
	resetOwner1();
	return false;
		
	}	
 }
 }
	
if(document.getElementById('relsame'+row).checked == true){
	
	 document.getElementById("relationtype").disabled = true;
	 document.getElementById("relationname").disabled = true;
	 document.getElementById("houseno").disabled = true;
	 document.getElementById("streetname").disabled = true;
	 document.getElementById("localityname").disabled = true;
	 document.getElementById("districtname").disabled = true;
	 document.getElementById("upazillaname").disabled = true;
	 document.getElementById("mouzaname").disabled = true;
	 document.getElementById("districtname").value= "0";
	 document.getElementById("upazillaname").value = "0";
	 document.getElementById("mouzaname").value = "0";

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
if(resAddress[1]=="-")
{
	resAddress[1]="";
}
if(resAddress[2]=="-")
{
	resAddress[2]="";
}
	document.getElementById('middlename').value = res[1];
	document.getElementById('lastname').value = res[2];
	$('#relationtype').val(resAddress[6]);
	document.getElementById('relationname').value = resAddress[7];
	document.getElementById('revenue').value = converToBanglaNumeric(res[3]=="0" ? "" : res[3]);
	document.getElementById('houseno').value = resAddress[0];
	document.getElementById('streetname').value = resAddress[1];
	document.getElementById('localityname').value = resAddress[2];
	
	document.getElementById('revenueDue').value = res[12]=="0" ? "" : res[12] ;
	document.getElementById('spclRuleContext').value = res[13]=="0" ? "" : res[13] ;

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
	
	if((res[6]=='' || res[6]=='0') && document.getElementById('shsame'+row).checked == false)
	{
	
		
		document.getElementById('symbol').disabled =true;
	
		
		document.getElementById('ownershare').value=converToBanglaNumeric(res[5]);
	}	
	else if((res[6]=='' || res[6]=='0')&& document.getElementById('shsame'+row).checked == true)
		{
		document.getElementById('symbol').disabled =true;
		document.getElementById('ownershare').disabled =true;
		}
	else{

document.getElementById('symbol').value = converToBanglaNumeric(res[6]);
document.getElementById('ownershare').disabled =true;
 var symbolValue= converBanglaToNumeric(res[6]);

 getSymbolImage('symbol',symbolValue,"");
	}

	document.getElementById('ownerid').value =res[7];
	document.getElementById('addressid').value = resAddress[8];

if(resAddress[5]=="0")
	{  
	document.getElementById('districtname').value ="0";
	
	}else{
	//	$('#districtname').val(resAddress[5]).change();
		document.getElementById('districtname').value =resAddress[5];
		
		//loadTbl1();
	}
if(resAddress[4]=="0")
{  
document.getElementById('upazillaname').value ="0";

}else
	{
	var param="districtId="+resAddress[5]+"&executeId=1";
	loadTblProg('upazillaname','getUpazillaFromDistrict',param,resAddress[4]);
	//document.getElementById('upazillaname').value=resAddress[4];
	//	$("#upazillaname").trigger("change");
		//$('#upazillaname').val(resAddress[4]);
	//$('#upazillaname').val(resAddress[4]);
	//$('#upazillaname').change();
	
	}

if(resAddress[3]=="0")
{  
document.getElementById('mouzaname').value ="0";


}else
	{
	var param="upazillaId="+resAddress[4]+"&executeId=1";
	loadTblProg('mouzaname','getMouzaFromUpazilla',param,resAddress[3]);	//$('#upazillaname').val(resAddress[4]);
	
	//document.getElementById('mouzaname').value =resAddress[3];
//$('#mouzaname').val(resAddress[3]);
	}

	/*$('#upazillaname').val(resAddress[4]);
	$('#mouzaname').val(resAddress[3]);
	document.getElementById('revenue').value = converToBanglaNumeric(res[3]);*/
	$('#ownerShareTypeid').val(res[4]);
	
/*	if(res[5]=='0')
	{
document.getElementById('ownershare').disabled=true;
	}else
		{
		document.getElementById('ownershare').value=converToBanglaNumeric(res[5]);
	
		
		
		}*/
	
	if(res[12]=='0')
		document.getElementById('revenueDue').value='';
	else
		document.getElementById('revenueDue').value=res[12];
	if(res[13]=='0')
		document.getElementById('spclRuleContext').value='';
	else
		document.getElementById('spclRuleContext').value=res[13];
	

	document.getElementById('rowcountidentifyowner').value = row;
	$("#addOwnerButton").hide();
	$("#editOwnerButton").show();
	document.getElementById("firstname").focus();
	$("#inputFillOwner").show();
}
function clearOwnerDetails() {
	document.getElementById('houseno').value = "";
	document.getElementById('streetname').value = "";
	document.getElementById('localityname').value = "";
	document.getElementById('districtname').value = "";
	document.getElementById('relationname').value = "";
	document.getElementById('firstname').value = "";
	document.getElementById('middlename').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('ownershare').value = "";
	document.getElementById('relationtype').value = "";
	document.getElementById('revenue').value = "";
	document.getElementById('ownerShareTypeid').value = "";
	document.getElementById('upazillaname').value = "";
	document.getElementById('symbol').value = "";
	document.getElementById('relationname').disabled = false;
	document.getElementById('relationtype').disabled = false;
	document.getElementById('houseno').disabled = false;
	document.getElementById('streetname').disabled = false;
	document.getElementById('localityname').disabled = false;
	document.getElementById('mouzaname').disabled = false;
	document.getElementById('upazillaname').disabled = false;
	document.getElementById('districtname').disabled = false;
	document.getElementById("relationTypeCheck").checked = false;
	document.getElementById('ownershare').disabled = false;
	document.getElementById("shareCheck").checked = false;
	document.getElementById('revenueDue').value = "";
	document.getElementById('spclRuleContext').value = "";
	
}
function UpdateOwnerDetails() {
	debugger;
	var rowcountidentifyowner = document
	.getElementById('rowcountidentifyowner').value;
	var table = document.getElementById("tbl_owner");
	var firstname = document.getElementById('firstname').value;
	var middlename = document.getElementById('middlename').value;
	var lastname = document.getElementById('lastname').value;

	var hno = document.getElementById('houseno').value;
	var stnm = document.getElementById('streetname').value;
	var locnm = document.getElementById('localityname').value;

	var relationnamevalue = document.getElementById('relationname').value;
	var relationtypeid = document.getElementById('relationtype').value;
	var relationtypeText = document.getElementById('relationtype').options[document
			.getElementById('relationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('ownerShareTypeid').value;
	var ownerShareTypeText = document.getElementById('ownerShareTypeid').options[document
			.getElementById('ownerShareTypeid').selectedIndex].text;
	var mouzaid = document.getElementById('mouzaname').value;
	var mouzanameText = document.getElementById('mouzaname').options[document
			.getElementById('mouzaname').selectedIndex].text;

	var upzillaid = document.getElementById('upazillaname').value;
	var upazillanameText = document.getElementById('upazillaname').options[document
			.getElementById('upazillaname').selectedIndex].text;

	var districtid = document.getElementById('districtname').value;
	var districtnameText = document.getElementById('districtname').options[document
			.getElementById('districtname').selectedIndex].text;

	var ownersharsymbole = document.getElementById('symbol').value;
	var revenue = document.getElementById('revenue').value;
	var ownershare = document.getElementById('ownershare').value;
	var ownerid = document.getElementById('ownerid@'+rowcountidentifyowner).value;
	
	var revenueDue = document.getElementById('revenueDue').value;
	var spclRuleContext = document.getElementById('spclRuleContext').value;
	
var revenueText; var revenuefrom; var specialrule;
	var addressid = document.getElementById('addressid').value;

	if (mouzaid == "0") {
		mouzanameText = "";
		
	}
	if (upzillaid == "0") {
		upazillanameText = "";
		
	}
	if (districtid == "0") {
		districtnameText = "";
		
	}
	 
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
if (revenue == "") {
		revenueText = "0";
		
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

	
	
if (revenueDue == "")
	revenuefrom = "0";
else
	revenuefrom=revenueDue;  
	
	if (spclRuleContext == "")
		specialrule = "0";
	else
		specialrule=spclRuleContext;
	
	
	
	
	
	
	/*if (ownershipTypeid == "" && document.getElementById("shareCheck").checked == false) {
		alert("Please select ownership type ");
		return false;
	} else if (relationtypeid == "" && document.getElementById("shareCheck").checked == true) {
		ownerShareTypeText="";
	}*/
	var totalrowcount = table.rows.length;

	
	
	
/*	var isrelationsame;
	var issharesame;
	if(document.getElementById("relationTypeCheck").checked == false)
	{
	
		isrelationsame="0"+"@"+addressid+"@"+relationtypeid;
		
	}
if(document.getElementById("shareCheck").checked == false)
{
	issharesame="0"+"@"+ownershipTypeid+"@"+"NA";
	
}
*/
	var name=firstname + " "+ middlename + " " + lastname;

	table.rows[rowcountidentifyowner].cells[0].innerHTML = firstname + " "+ middlename + " " + lastname;


	if(middlename=='')
	{
		middlename="-";

	}
	if(lastname=='')
	{
		lastname="-";

	}
	
	
	
	
	var allValues;
	var addressvalue;
	var issharesame;
	var k=parseInt(rowcountidentifyowner)-1;
if(document.getElementById('relationTypeCheck').checked == false && document.getElementById('shareCheck').checked == false )
	{var addressid = document.getElementById('addressid@'+rowcountidentifyowner).value;
	var seqno=document.getElementById('sequence@'+rowcountidentifyowner).value;
	issharesame="0"+"@"+ownershipTypeid+"@"+seqno;
	var allValues = firstname + "@" + middlename + "@" + lastname +"@"
	+ converBanglaToNumeric(revenueText) + "@" + ownershipTypeid + "@" + parseInt(converBanglaToNumeric(ownershare)) + "@"
 + converBanglaToNumeric(ownersharsymbole)+"@"+rowcountidentifyowner+"@"+ ownerid+"@"+issharesame+"@"+revenuefrom+"@"+specialrule;

	 
		var	isrelationsame="0"+"@"+addressid+"@"+relationtypeid;
		 addressvalue=hno+ "@" + stnm + "@" + locnm + "@" + mouzaid + "@" + upzillaid + "@"
		+ districtid + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;

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
		resultownervalue[12]=revenuefrom;
		resultownervalue[13]=specialrule;
		if(resultownervalue[5]=='')
		{
		resultownervalue[5]="0";
		}else
			resultownervalue[5]=parseInt(converBanglaToNumeric(resultownervalue[5]));
	if(resultownervalue[6]=='')
	{
	resultownervalue[6]="0";
	}else
		resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
		resultownervalue[7]=rowcountidentifyowner;
		resultownervalue[8]=ownerid;
		editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+issharesame+"@"+revenuefrom+"@"+specialrule;
		allValues=editvalue;
		
		relationtypeid=resAddress[6];
		//resAddress[3]=prvaddressid;
		var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[6];
		addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+resAddress[3]+"@"+resAddress[4]+"@"+resAddress[5]+"@"+resAddress[6]+"@"+resAddress[7]+"@"+isrelationsame;
	
	
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
		+ converBanglaToNumeric(revenueText) + "@" + ownershipTypeid + "@" + parseInt(converBanglaToNumeric(ownershare)) + "@"+
		converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ rowcountidentifyowner+ "@"+ rowcountidentifyowner+"@"+issharesame+"@"+revenuefrom+"@"+specialrule;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
	resAddress[3]=prvaddressid;
	relationtypeid=resAddress[6];
	addressid=prvaddressid;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[6];
	addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+resAddress[3]+"@"+resAddress[4]+"@"+resAddress[5]+"@"+resAddress[6]+"@"+resAddress[7]+"@"+isrelationsame;
	
	
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
		resultownervalue[12]=revenuefrom;
		resultownervalue[13]=specialrule;
		if(resultownervalue[5]=='')
		{
		resultownervalue[5]="0";
		}else
			resultownervalue[5]=parseInt(converBanglaToNumeric(resultownervalue[5]));
	if(resultownervalue[6]=='')
	{
	resultownervalue[6]="0";
	}else
		resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
		resultownervalue[7]=rowcountidentifyowner;
		resultownervalue[8]=ownerid;
		var	editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+issharesame+"@"+revenuefrom+"@"+specialrule;;
		allValues=editvalue;
		ownershipTypeid=prvownershipTypeid;
		relationtypeid=relationtypeid;
	var	isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
	 addressvalue=hno+ "@" + stnm + "@" + locnm + "@" + mouzaid + "@" + upzillaid + "@"
		+ districtid + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;

	}

	
	
	
	
	
	
	


	table.rows[rowcountidentifyowner].cells[1].innerHTML =relation;
	table.rows[rowcountidentifyowner].cells[2].innerHTML = hno + " " + stnm
			+ " " + locnm + " " + mouzanameText + " " + upazillanameText + " "
			+ districtnameText+
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
	//table.rows[rowcountidentifyowner].cells[9].innerHTML=1;
	//	table.rows[rowcountidentifyowner].cells[10].innerHTML=2;
	
	
	if(document.getElementById("relationTypeCheck").checked == true)
		{
		table.rows[rowcountidentifyowner].cells[11].innerHTML='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]" checked="checked">';

		}else
			table.rows[rowcountidentifyowner].cells[11].innerHTML='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]">';
	if(document.getElementById("shareCheck").checked == true)
	{
		table.rows[rowcountidentifyowner].cells[12].innerHTML='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]" checked="checked">';
		
	}else
		table.rows[rowcountidentifyowner].cells[12].innerHTML='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]" >';
	
	
if(symbolValue!="")
{
	debugger;
	getSymbolImage('addrowSymbolID@'+rowcountidentifyowner,symbolValue,"");
 }
	
	
	table.rows[rowcountidentifyowner].cells[6].innerHTML = ownersharetext;
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
if(flag=='existing'|| flag=='edited' )
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

		
	
	
	var nextchangedvalues="";
	var nextchangedvaluesaddress="";
	


if((document.getElementById("shsame"+i).checked==true) &&(document.getElementById("relsame"+i).checked==false))
{
	var seqno = document.getElementById('sequence@'+k).value;
	var prvownershipTypeid = document.getElementById('ownerShipid@'+k).value;
	var addressId = document.getElementById('addressid@'+i).value;
	var relationId = document.getElementById('relationid@'+i).value;
	issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
var edithiddenvalue=document.getElementById("editHidden@" + i).value;
var resultownervalue=edithiddenvalue.split("@");
resultownervalue[4]=converBanglaToNumeric(res[4]);
resultownervalue[5]=parseInt(converBanglaToNumeric(res[5]));
resultownervalue[6]=converBanglaToNumeric(res[6]);
resultownervalue[7]=i;

nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
resultownervalue[3]+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+issharesame+"@"+resultownervalue[12]+"@"+resultownervalue[13];

var edithiddenaddress=document.getElementById("editHiddenAddress@" + i).value;
var values=edithiddenaddress.split("@");
var isrelationsame="0"+"@"+addressId+"@"+relationId;
addressvalue=values[0]+"@"+values[1]+"@"+values[2]+"@"+values[3]+"@"+values[4]+"@"+values[5]+"@"+values[6]+"@"+values[7]+"@"+isrelationsame;



if(flag=='added')
{

document.getElementById("editHidden@" + i).value = nextchangedvalues;
document.getElementById("addedflag@" + i).value = 'added';
document.getElementById("relationid@" + i).value = relationId;
document.getElementById("ownerShipid@" + i).value=converBanglaToNumeric(res[5]);


}
if(flag=='existing'||flag=='edited')
{

document.getElementById("editHiddenowner@" + i).value = nextchangedvalues;
document.getElementById("addedflag@" + i).value = 'edited';
document.getElementById("relationid@" + i).value = relationId;
document.getElementById("editHiddenownerAddress@" + i).value=edithiddenvalueaddress;
document.getElementById("ownerShipid@" + i).value=converBanglaToNumeric(res[5]);
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
resultaddress[3]=resAddress[3];
resultaddress[4]=resAddress[4];
resultaddress[5]=resAddress[5];
resultaddress[6]=resAddress[6];
resultaddress[7]=resAddress[7];
resultownervalue[4]=converBanglaToNumeric(resultownervalue[4]);
resultownervalue[5]=parseInt(converBanglaToNumeric(resultownervalue[5]));
resultownervalue[6]=converBanglaToNumeric(resultownervalue[6]);
var isrelationsame="1"+"@"+addressId+"@"+resultaddress[6];
if(resultaddress[0]=='')
{
resultaddress[0]="-";
}
nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + resultaddress[3] + "@" + resultaddress[4] + "@"
+ resultaddress[5] + "@" + resultaddress[6] + "@" + resultaddress[7]+"@"+isrelationsame;

nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame+"@"+resultownervalue[12]+"@"+resultownervalue[13];

document.getElementById('addressid@'+i).value=addressId;

if(flag=='added')
{
	document.getElementById("editHidden@" + i).value=nextchangedvalues;
document.getElementById("editHiddenAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedflag@" + i).value = 'added';
document.getElementById("relationid@" + i).value = resultaddress[6];
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
	var ownerid=document.getElementById("ownerid@" + i).value;
	//a
	
	issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
	var edithiddenvalue=document.getElementById("editHidden@" + i).value;
	var resultownervalue=edithiddenvalue.split("@");
	resultownervalue[3]=converBanglaToNumeric(revenue);
	resultownervalue[4]=converBanglaToNumeric(res[4]);
	resultownervalue[5]=parseInt(converBanglaToNumeric(res[5]));
	resultownervalue[6]=converBanglaToNumeric(res[6]);
	resultownervalue[7]=i;
	resultownervalue[8]=ownerid;
	nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
	resultownervalue[3]+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
	"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+issharesame+"@"+resultownervalue[12]+"@"+resultownervalue[13];;
	
	var editaddressvalue=document.getElementById("editHiddenAddress@" + i).value;
	var resultaddress=editaddressvalue.split("@");

	resultaddress[0]=resAddress[0];
	resultaddress[1]=resAddress[1];
	resultaddress[2]=resAddress[2];
	resultaddress[3]=resAddress[3];
	resultaddress[4]=resAddress[4];
	resultaddress[5]=resAddress[5];
	resultaddress[6]=resAddress[6];
	resultaddress[7]=resAddress[7];
	if(resultaddress[0]=='')
	{
	resultaddress[0]="-";
	}
var isrelationsame="1"+"@"+addressId+"@"+resultaddress[6];
	nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + resultaddress[3] + "@" + resultaddress[4] + "@"
	+ resultaddress[5] + "@" + resultaddress[6] + "@" + resultaddress[7]+"@"+isrelationsame;
	document.getElementById('sequence@'+i).value=seqno;
	document.getElementById('ownerShipid@'+i).value=prvownershipTypeid;
	document.getElementById("ownerid@" + i).value=ownerid;
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
	document.getElementById("relationid@" + i).value = resultaddress[6];
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

//RemoveAndAddOwner();

addownerdetails();resetOwner1();resetownerdetails();
document.getElementById('editcountidentify').value = "";
$("#inputFillOwner").show();
document.getElementById('rowcountidentify').value="";
}
function resetownerdetails() {
	clearOwnerDetails();
	$("#editOwnerButton").hide();
	$("#addOwnerButton").show();
	//$("#addOwnerButton").show();
	document.getElementById("upazillaname").value="0";
	document.getElementById("districtname").value="0";
	document.getElementById("mouzaname").value="0";
	document.getElementById("ownerShareTypeid").disabled=false;
	document.getElementById("symbol").disabled=false;
	//document.getElementById("firstname").focus();
/*	$(".symbolImg").hide();
	$("#symbol").removeAttr("readonly");*/
	//$("#inputFillOwner").show();

}
function resetPlotDetails() {
	clearPlotDetails();
	$("#editPlotButton").hide();
	$("#addPlotButton").show();
	document.getElementById("AdjplotNo").value="";
	document.getElementById("Adjremarks").value="";
	
	$("#plotImg").hide();
	document.getElementById("plotNo").focus();
	$("#inputFillParcel").show();

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
function RemoveZero(obj) {
	var chks = document.all(obj).value;
	if(chks !=""){
		 var value = parseFloat(converBanglaToNumeric(chks));
		 if( value <= 0 || chks=="."){
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

function relationTypecheckFunction(){
	if(document.getElementById("relationTypeCheck").checked == true){
		var tableRow=document.getElementById("tbl_owner").rows.length; 
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
				 document.getElementById('relationnamehid').value = document.getElementById('relationname').value;
			     document.getElementById('housenohid').value = 	document.getElementById('houseno').value;
			     document.getElementById('streetnamehid').value = document.getElementById('streetname').value;
			     document.getElementById('localitynamehid').value = document.getElementById('localityname').value;
			     document.getElementById('mouzanamehid').value = document.getElementById('mouzaname').value;
			     document.getElementById('upazillanamehid').value =  document.getElementById('upazillaname').value;
			     document.getElementById('districtnamehid').value = document.getElementById('districtname').value;
			     document.getElementById('relationtypehid').value = document.getElementById('relationtype').value;
				}else {
				 newtableRow = parseInt(tableRow) - 1;
				}	
		
			var allform = document.getElementById("editHidden@"+newtableRow).value;	
			selectBtn(allform);
		             }
		else {
			alert("Please add  at least one record");
			document.getElementById("relationTypeCheck").checked = false;
		return false;
		}
	}
	else{
	 	 if(document.getElementById('rowcountidentify').value != "") {
	 		document.getElementById('relationname').value = document.getElementById('relationnamehid').value;
		    document.getElementById('houseno').value = 	document.getElementById('housenohid').value;
		    document.getElementById('streetname').value = document.getElementById('streetnamehid').value;
		    document.getElementById('localityname').value = document.getElementById('localitynamehid').value;
		    document.getElementById('mouzaname').value = document.getElementById('mouzanamehid').value;
		    document.getElementById('upazillaname').value =  document.getElementById('upazillanamehid').value;
		    document.getElementById('districtname').value = document.getElementById('districtnamehid').value;
		    document.getElementById('relationtype').value = document.getElementById('relationtypehid').value;
			document.getElementById('relationname').disabled = false;
			document.getElementById('relationtype').disabled = false; 
			document.getElementById('houseno').disabled = false;
			document.getElementById('streetname').disabled = false;
			document.getElementById('localityname').disabled = false;
			document.getElementById('mouzaname').disabled = false;
			document.getElementById('upazillaname').disabled = false; 
			document.getElementById('districtname').disabled = false;
			document.getElementById('relationnamehid').value=  "";
			document.getElementById('housenohid').value = "";
			document.getElementById('streetnamehid').value = "";
		    document.getElementById('localitynamehid').value = "";
		    document.getElementById('mouzanamehid').value = "";
			document.getElementById('upazillanamehid').value = "";
		    document.getElementById('districtnamehid').value = "";
		    document.getElementById('postalcodehid').value = "";
			document.getElementById('relationtypehid').value = "";
			   document.getElementById('mouzaname').value="0";
			   document.getElementById('upazillaname').value="0";
			   document.getElementById('districtname').value="0";
	}else{
		   document.getElementById('relationname').value=  "";
		   document.getElementById('houseno').value = "";
		   document.getElementById('streetname').value = "";
	       document.getElementById('localityname').value = "";
	       document.getElementById('mouzaname').value = "";
		   document.getElementById('upazillaname').value = "";
	       document.getElementById('districtname').value = "";
		   document.getElementById('relationtype').value = "";
		   document.getElementById('relationname').disabled = false;
		   document.getElementById('relationtype').disabled = false; 
		   document.getElementById('houseno').disabled = false;
		   document.getElementById('streetname').disabled = false;
		   document.getElementById('localityname').disabled = false;
		   document.getElementById('mouzaname').disabled = false;
		   document.getElementById('upazillaname').disabled = false; 
		   document.getElementById('districtname').disabled = false;
		   
		   document.getElementById('mouzaname').value="0";
		   document.getElementById('upazillaname').value="0";
		   document.getElementById('districtname').value="0";
		   
		   
		   
		   
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
	document.getElementById('houseno').value = "";
	document.getElementById('streetname').value = "";
    document.getElementById('localityname').value = "";
    document.getElementById('mouzaname').value = "";
	document.getElementById('upazillaname').value = "";
    document.getElementById('districtname').value = "";
	document.getElementById('relationtype').value = "";
	document.getElementById('relationname').disabled = true;
	document.getElementById('relationtype').disabled = true; 
	document.getElementById('houseno').disabled = true;
	document.getElementById('streetname').disabled = true;
	document.getElementById('localityname').disabled = true;
	document.getElementById('mouzaname').disabled = true;
	document.getElementById('upazillaname').disabled = true; 
	document.getElementById('districtname').disabled = true;
	   document.getElementById('mouzaname').value="0";
	   document.getElementById('upazillaname').value="0";
	   document.getElementById('districtname').value="0";
	}
function OwnerShareCheck(){
	if(document.getElementById("shareCheck").checked == true){
		prev = 1;
		var tableRow=document.getElementById("tbl_owner").rows.length; 
		var ownervaluecheck=document.getElementById("ownervaluecheck").value;
		if(tableRow > 1 && ownervaluecheck!=1){
		if(document.getElementById('rowcountidentify').value != "") {
		prev = 2;
		if(document.getElementById('rowcountidentify').value == 1){
				 alert("It is not applicable for the first record");
				 document.getElementById("shareCheck").checked = false;
					return false;
			 }else{
				 var tableRow=document.getElementById("tbl_owner").rows.length; 
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
			 
			 var tableRow=document.getElementById("tbl_owner").rows.length; 
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
			alert("Insert at least one record");
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


/*function getSymbolImage(id,idvalue,flag){
	//by ashish.kumar(8-2-2016) to symbol images according to symbol value
	//flag will be pass only in the case of addowner on qc page..in addrow method
	var div="";
	var div1="";
	var div2="";
	var value = "";
	if(id != "symbol" && id != "symbol1"){
		  value = id.split("[").pop().split("]").shift();
	}
	
	if(id.startsWith("frameOneMsOwnerDEList")){
		 div="ownerOne["+value+"]Img";
		 div1="ownerOne["+value+"]Img1";
		 div2="ownerOne["+value+"]Img2";
	}else if(id.startsWith("frameTwoMsOwnerDEList")){
		 div="ownerTwo["+value+"]Img";
		 div1="ownerTwo["+value+"]Img1";
		 div2="ownerTwo["+value+"]Img2";
	}else if(id.startsWith("ownerSymbol1")){
		 div="ownerQC["+value+"]Img";
		 div1="ownerQC["+value+"]Img1";
		 div2="ownerQC["+value+"]Img2";
	}else if(id == "symbol"){
		//owner in de1,de2
		 div="img1";
		 div1="img2";
		 div2="img3";
	}else if(id == "symbol1"){
		//plot in de1,de2
		 div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2";
	}else if (id.startsWith("frameOneMsPlotDeList") ){
		 div="plotOne["+value+"]Img";
		 div1="plotOne["+value+"]Img1";
		 div2="plotOne["+value+"]Img2";
	}
	else if (id.startsWith("frameTwoMsPlotDeList") ){
		 div="plotTwo["+value+"]Img";
		 div1="plotTwo["+value+"]Img1";
		 div2="plotTwo["+value+"]Img2";
	}
	else if (id.startsWith("plotSymbol1") ){
		 div="plotQc["+value+"]Img";
		 div1="plotQc["+value+"]Img1";
		 div2="plotQc["+value+"]Img2";
	}

 osvalue=idvalue;
  var symbolValue= converBanglaToNumeric(osvalue);
 if(osvalue !="")
 {
	 osvaluesplit=symbolValue.slice(1).split("#");
	  for(var i=0;i<osvaluesplit.length;i++){
		 if(i==0){
			 var first=osvaluesplit[i];
			 if(flag != "addownerpopAddrow"){
				 document.getElementById(div).innerHTML = '<img src="images/'+first+'.png" class="symbolImg" >';
			 	 document.getElementById(div1).innerHTML="<span id="+div1+" class='symbolImg'></span>";
				 document.getElementById(div2).innerHTML="<span id="+div2+" class='symbolImg'></span>";
			 }else{
				 window.opener.document.getElementById(div).innerHTML = '<img src="images/'+first+'.png" class="symbolImg" >';
				 window.opener.document.getElementById(div1).innerHTML="<span id="+div1+" class='symbolImg'></span>";
				 window.opener.document.getElementById(div2).innerHTML="<span id="+div2+" class='symbolImg'></span>";
			 }
			
		  }
		 else  if(i==1){
			 var first=osvaluesplit[i];
			 if(flag != "addownerpopAddrow"){
			 var symbolImage= converBanglaToNumeric(first);
			 document.getElementById(div1).innerHTML = '<img src="images/'+first+'.png" class="symbolImg">';
		 	 document.getElementById(div2).innerHTML="<span id="+div2+"></span>";
			 }else{
				 window.opener.document.getElementById(div1).innerHTML = '<img src="images/'+first+'.png" class="symbolImg">';
				 window.opener.document.getElementById(div2).innerHTML="<span id="+div2+"></span>";
			 }
	 } 
		 else if(i==2){
			 var first=osvaluesplit[i];
			 var symbolImage= converBanglaToNumeric(first);
			 if(flag != "addownerpopAddrow"){
			 document.getElementById(div2).innerHTML = '<img src="images/'+first+'.png" class="symbolImg">';
			 }else{
				 window.opener.document.getElementById(div2).innerHTML = '<img src="images/'+first+'.png" class="symbolImg">';
				 }
			 }
			 
		}
 	}else{
 		 document.getElementById(div).innerHTML = "<span id="+div+" class='symbolImg'></span>";
	 	 document.getElementById(div1).innerHTML="<span id="+div1+" class='symbolImg'></span>";
		 document.getElementById(div2).innerHTML="<span id="+div2+" class='symbolImg'></span>";
 	}
}*/
/*function keypressOnwerSymbol(evt,dis) {
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
 Numeric and Hash allow 

	 if ((("০১২৩৪৫৬৭৮৯#").indexOf(keychar) == -1))
		 {
		 alert("Please Enter in Numeric");
		 //alert("ashsih<spring:message code="script.ilfs"/><spring:message code="script.enterinnumeric"/>")
			return false;
		}
	switch(len){
	case 0 : 
	case 3 :
	case 6 :
		if(key != 35){
			alert("please enter correct symbol.");
			return false;
			
		}
		break;

	case 1 :
		if ((("০১").indexOf(keychar) == -1))
		 {
			alert("please enter correct symbol.");
			return false;
		}
		break;
	case 2 :
		var charr = dis.value.charAt(1);
		//alert(charr);
		
		if(charr == '০'){
			if ((("১২৩৪৫৬৭৮৯").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		else if(charr == '১'){
			if ((("০১২৩৪৫৬").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		
		break;
		
	case 4 :
	case 7 :
		if ((("০১২").indexOf(keychar) == -1))
		 {
			alert("please enter correct symbol.");
			return false;
		}
		break;

	case 5 :
		var charr = dis.value.charAt(4);
		//alert(charr);
		if(charr == '০'){
			if ((("১২৩৪৫৬৭৮৯").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		else if(charr == '১'){
			if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		else{
			if ((("০").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		break;
		
	case 8 :
		var charr = dis.value.charAt(7);
		//alert(charr);
		if(charr == '০'){
			if ((("১২৩৪৫৬৭৮৯").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		else if(charr == '১'){
			if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		else{
			if ((("০").indexOf(keychar) == -1))
			 {
				alert("please enter correct symbol.");
				return false;
			}
		}
		break;
		
	default :
		return false;
	}
}*/

function NumberLessThenOnePlot(id) {
	var value = document.getElementById(id).value;
	var value1 = converBanglaToNumeric(value);
	if (value1 > 1) {
		alert("ILFS Technologies :Plot Share Must Not be greater then 1");
		document.getElementById(id).focus();
		return false;
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
function NumberLessThenOne(id) {
	var value = document.getElementById(id).value;
	var value1 = converBanglaToNumeric(value);
	if (value1 > 1) {
		alert("ILFS Technologies :Owner Share Must Not be greater then 1");
		document.getElementById(id).focus();
		return false;
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

function addPossessionDetails(tableID){

	 
	var possessionShare=document.getElementById("possessionShare").value;
	var possessionOwnerName = document.getElementById('possessionOwnerName').options[document
	    .getElementById('possessionOwnerName').selectedIndex].text;
	var possessionOwnerValue=document.getElementById('possessionOwnerName').value;

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
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		cell1.appendChild(element1);
		cell1.innerHTML = possessionPlotno+
		'<input type="hidden"   id="plotSrNo'+rowCount+'" name="plotSrNo" value="'+converToBanglaNumeric(possessionPlotno)+'">';
		var cell2 = row.insertCell(1);
		cell2.innerHTML = possessionOwnerName+
		'<input type="hidden"   id="pownername'+rowCount+'" name="pownername" value="'+possessionOwnerName+'">';
		var cell3 = row.insertCell(2);
		cell3.innerHTML = possessionShare+
		'<input type="hidden" id="editPossessionhiddenflag@'
		+ rowCount
		+ '" name="editPossessionhiddenflag" value="added">'
		+ '<input type="hidden" id="editPossessiondetails@'
		+ rowCount
		+ '" name="editPossessiondetails" value="'+possessionvalue+'">'	;
;
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
		
		cell4.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'deleteowner@'+ rowCount
			+ '\' onclick="deletePossessionRowForDynamicTable(this.id,1,1,this.name); return false;" /><input type="hidden" name="deletePossessionhidden" id=\'deletePossessionhidden@'
			+ rowCount + '\' value="added"/>			</span>';
		
		table.rows[rowCount].className = "success";
		resetPossessionDetails();
	}
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
{    debugger;
	//alert("deletePossessionRowForDynamicTable");
	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("Possessiontable");
	var valueplot = document.getElementById("deletePossessionhidden@" + dltRowcount).value;
	if (valueplot == 'existing') {
		if (confirm("Do you really want to delete this possession") == true) {
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
				document.getElementById("pownerid" + tempRow).id = "pownerid"
					+ i;
				document.getElementById("plotid" + tempRow).id = "plotid"
					+ i;
				document.getElementById("editPossessiondetails@" + tempRow).id = "editPossessiondetails@"
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
	} else {

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
			document.getElementById("pownerid" + tempRow).id = "pownerid"
				+ i;
			document.getElementById("plotSrNo" + tempRow).id = "plotSrNo"
				+ i;
			document.getElementById("plotid" + tempRow).id = "plotid"
				+ i;
			document.getElementById("editPossessiondetails@" + tempRow).id = "editPossessiondetails@"
				+ i;
		}

	}
}
function editPossession(id)
{

	debugger;
	
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
function getSymbolImage(id,idvalue,flag){
	//by ashish.kumar(8-2-2016) to symbol images according to symbol value
	//flag will be pass only in the case of addowner on qc page..in addrow method
	
	var div="";
	var div1="";
	var div2="";
	var value = "";
	var divArr = [];
	if(id != "symbol" && id != "symbol1"){
		  value = id.split("[").pop().split("]").shift();
	}
	
	if(id.startsWith("frameOneMsOwnerDEList")){
		 div="ownerOne["+value+"]Img";
		 div1="ownerOne["+value+"]Img1";
		 div2="ownerOne["+value+"]Img2";
	}/* else if(id.startsWith("frameTwoMsOwnerDEList")){
		 div="ownerTwo["+value+"]Img";
		 div1="ownerTwo["+value+"]Img1";
		 div2="ownerTwo["+value+"]Img2";
	}else if(id.startsWith("ownerSymbol1")){
		 div="ownerQC["+value+"]Img";
		 div1="ownerQC["+value+"]Img1";
		 div2="ownerQC["+value+"]Img2";
	} */
	else if(id == "symbol"){
		//owner in de1,de2
	/* 	
		 div="img";
		 div1="img1";
		 div2="img2";
		  */
		// divArr.push("img","img1","img2","img3","img4","img5","img6","img7","img8","img9");
		divArr.push("img","img1","img2","img3","img4","img5","img6","img7");
				
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
	else if(id.startsWith("addrowPlotSymbolID@")){
		//plot in de1,de2
		/*  div="plotImg";
		 div1="plotImg1";
		 div2="plotImg2"; */
		// divArr.push("plotImg","plotImg1","plotImg2","plotImg3","plotImg4","plotImg5","plotImg6","plotImg7","plotImg8","plotImg9");
		 var count = id.split("@")[1];
		 divArr.push("addrowPlotSymbol@"+count,"addrowPlotSymbol1@"+count,"addrowPlotSymbol2@"+count,"addrowPlotSymbol3@"+count,"addrowPlotSymbol4@"+count,"addrowPlotSymbol5@"+count,"addrowPlotSymbol6@"+count,"addrowPlotSymbol7@"+count);
	}/* else if (id.startsWith("frameOneMsPlotDeList") ){
		 div="plotOne["+value+"]Img";
		 div1="plotOne["+value+"]Img1";
		 div2="plotOne["+value+"]Img2";
	}
	else if (id.startsWith("frameTwoMsPlotDeList") ){
		 div="plotTwo["+value+"]Img";
		 div1="plotTwo["+value+"]Img1";
		 div2="plotTwo["+value+"]Img2";
	}
	else if (id.startsWith("plotSymbol1") ){
		 div="plotQc["+value+"]Img";
		 div1="plotQc["+value+"]Img1";
		 div2="plotQc["+value+"]Img2";
	} */

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
			 document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 symbolCount++;
		 }else if((i ==0 || i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21) && osvalue.charAt(i) == '%' ){
			 var first  = parseInt(i)+1;
			 var last = parseInt(first)+2;
			 var imageNo = osvalue.substring(first, last);
			 var imageNo = "1"+imageNo;
			 document.getElementById(divArr[symbolCount]).innerHTML = '<img src="images/'+imageNo+'.png" class="symbolImg" >';
			 symbolCount++;
		}
		  i = i+3;
	}
	
		
 
	
 }else{
 		for(var i = 0 ; i <divArr.length; i++){
 			 document.getElementById(divArr[i]).innerHTML = "<span id="+divArr[i]+" class='symbolImg'></span>";
 		}
 		
	 	/*  document.getElementById(div1).innerHTML="<span id="+div1+" class='symbolImg'></span>";
		 document.getElementById(div2).innerHTML="<span id="+div2+" class='symbolImg'></span>"; */
 	}
 	
	for(var j = symbolCount ; j <divArr.length; j++){
		 document.getElementById(divArr[j]).innerHTML = "<span id="+divArr[j]+" class='symbolImg'></span>";
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
	function addownerdetails(){
		/* 	var div="img";
			var div1="img1";
			var div2="img2";
			var div3="img3"; */
				document.getElementById('houseno').value = "";
				document.getElementById('streetname').value="" ;
				document.getElementById('localityname').value="";
				document.getElementById('districtname').value="";
				document.getElementById('relationname').value="";
				document.getElementById('firstname').value="";
				document.getElementById('middlename').value="";
				document.getElementById('lastname').value="";
				document.getElementById('ownershare').value = "";
				document.getElementById('relationtype').value ="";
				document.getElementById('revenue').value = "";
				document.getElementById('ownerShareTypeid').value="";	
				document.getElementById('symbol').value="";	
				document.getElementById('revenueDue').value="";	
				document.getElementById('spclRuleContext').value="";	
			   /* document.getElementById('upazilaDropDown2').style.display = "block";
				document.getElementById('mouzaDropdown2').style.display = "block";
		   		document.getElementById('upazilaDropDown1').style.display = "none";
				document.getElementById('mouzaDropdown1').style.display = "none";*/
				document.getElementById('relationname').disabled = false;
				document.getElementById('relationtype').disabled = false; 
				document.getElementById('houseno').disabled = false;
				document.getElementById('streetname').disabled = false;
				document.getElementById('localityname').disabled = false;
				document.getElementById('mouzaname').disabled = false;
				document.getElementById('upazillaname').disabled = false; 
				document.getElementById('districtname').disabled = false;
				document.getElementById("relationTypeCheck").checked = false;
				document.getElementById('ownershare').disabled=  false;	
				document.getElementById("shareCheck").checked = false;
				document.getElementById('symbol').disabled=  false;	
				document.getElementById('mouzaname').value = "0";
				document.getElementById('upazillaname').value = "0"; 
				document.getElementById('districtname').value = "0";
				 getSymbolImage('symbol',"");
				 $("#addOwnerButton").show();
					$("#editOwnerButton").hide();
					document.getElementById("firstname").focus();
					$("#inputFillOwner").show();
			}
	function ResetEncodingForm(){
		     if (confirm("Are you sure to Reset the Form?") == true) {
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
					document.saveform.action="DataEncodingMutated";
					document.saveform.submit();
		
		}
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
			if(button =="Add Possession")
				{
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
	var table = document.getElementById("tbl_owner");

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
		debugger;

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

function verifyKhatNo(khatianId,KhatNo,khatianTypeid)
{alert("hello");
	debugger;
	var status="";
	var xml = new ajaxRequest();
	var url = "verifyKhatianNo";
	var params = "khatianId="+khatianid+"khatianNo="+KhatNo+"khatianTypeId="+khatianTypeid+"&flag=1";
	//alert(params);
			var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    {
			  if (xmlhttp.responseText==="true") {
                  return true;
              } 
			
			 $('#loader').attr('id','load');
			 $('body').addClass('loaded'); 
			 
					
			  
			 
		   // document.getElementById("demo").innerHTML=xmlhttp.responseText;
		    }
		  }
		
		
		xmlhttp.open("POST",url,true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
		xmlhttp.send(params);
		
		
		
	
	
	}
function backForm()
{
	  
			document.saveform.action="ACLandViewController?request=DataEncoding&dashboardId=204";
			document.saveform.submit();


	}
function upzillaload(id){
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
	
	if(resAddress[4]=="0")
	{  
	document.getElementById('upazillaname').value ="0";

	}else
		{
		document.getElementById('upazillaname').value=resAddress[4];
			//$('#upazillaname').val(resAddress[4]);
			$("#upazillaname").trigger("change");
			//$('#upazillaname').val(resAddress[4]);
		//$('#upazillaname').val(resAddress[4]);
		//$('#upazillaname').change();
		
		}

	
	
}
function mouzaload(id){
	
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



if(resAddress[3]=="0")
{  
document.getElementById('mouzaname').value ="0";


}else
	{
	document.getElementById('mouzaname').value =resAddress[3];
//$('#mouzaname').val(resAddress[3]);
	}

}

function loadTblProg(div,url,param,id) {
	try {
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {             
			if (xml.readyState == 4 || xml.readyState == "complete") {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					document.getElementById(div).innerHTML = xml.responseText;			
						document.getElementById(div).value=id;						
				} else {					
				}
			}
		};
		xml.open("POST", url, true);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(param);	
		//alert("xml.responseText:" + params);
	} catch (e) {
		$('body').addClass('loaded');
		alert(e);
	}

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
	}
	}


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
	 
	 
	if (possplotNo.length > 0) {
		for ( var j = 1; j <= possplotNo.length; j++) {
			var pplot=document
					.getElementById("plotSrNo" + j).value;
			if (parseInt(converBanglaToNumeric(plott).trim())== parseInt(converBanglaToNumeric(pplot.trim()))) {
				
				alert("ILFS Technologies :please remove the linked Row first");
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
/*   var plotCombo = document.getElementById("possessionPlot");
   	     for (i=1;i<plotCombo.length; i++) {
	    
	       if (plotCombo.options[i].text==plott) {
	    	   plotCombo.remove(i);
	       }
	    }
	*/
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


function deleteOwnerRowForDynamicTable(id, ownerid,addressid) {
	debugger;

	var dltRowcount = id.split("@")[1];
	var table = document.getElementById("ownerTable");
	var rowlength = table.rows.length;
	var possownername = document.getElementsByName("pownername");
	var ownername=document
			.getElementById("ownername@" + dltRowcount).value;
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
				
				var value1 = document.getElementById("relsame"+inct).checked;
				var value = document.getElementById("shsame"+inct).checked;
				if((value == true && ownerShareCheck ==false)||(value1 == true && ownerrelationCheck ==false)){
					
					 if (confirm("all linked row will be deleted are you sure you want to delete")== false){
						   return false;
					   }else{
						flag = true;   
					   }
				}else if (confirm("Do you really want to delete this owner") == true) {		   
						 
						 var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
							if (valueowner == 'existing'||valueowner == 'edited') {
							
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
							   
				   
				   
			 
			 }
		
		}else if (confirm("Do you really want to delete this owner") == true) {		   

				
			
			 var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
				if (valueowner == 'existing'||valueowner == 'edited') {
				
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
					   
						
					   
					   
					   }
				
				}
			
			 }
			else{
				if (confirm("are you sure you want to delete") == false) {
					   return false;
				   }else {
					 	   var valueowner= document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
						if (valueowner == 'existing'||valueowner == 'edited') {
						
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
			
				   }
		}
		}
	 

		if(flag == true){
		debugger;
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
				
					
					
			/*    for(var j=0 ;j<count;j++)
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
					    	
					    	}*/
						//table.deleteRow(y);
						
						pownername1.push(ownername);
			     }
						
						 for(var j=0 ;j<count;j++)
					     {
						var valueplot = document.getElementById("deleteOwnerhidden@" + dltRowcount).value;
						if (valueplot == 'existing'||valueplot == 'edited') {
					var ownerId=document.getElementById("ownerid@"+dltRowcount).value;
					var addressId=document.getElementById("addressid@"+dltRowcount).value;
								var deletedexistingowner = document
										.getElementById("deletedexistingowner").value;
								if (deletedexistingowner == "")
									{
									document.getElementById("deletedexistingowner").value = ownerId+"@"+addressId;
									}
								else
									{
										document.getElementById("deletedexistingowner").value = deletedexistingowner
											+ "#" + ownerId+"@"+addressId;
									}

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
//	var LawDueFrom = document.getElementById('Law_DueFrom').value;
	var RulesSpecialContext = document.getElementById('Rules_SpecialContext').value;
	
		
	
	/*var LawDueFromCheck;
	if(LawDueFrom=="")
		{
		LawDueFromCheck="-";
		}
	else
		{
		LawDueFromCheck=LawDueFrom;
		}
	*/
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
		//	var revenue = document.getElementById('revenue').value;
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
		if(addedflag=="existing"){
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
		if(addedflag=="existing"){
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
	
	/*var cell4 = row.insertCell(3);
	cell4.innerHTML = revenue;*/
	var cell4 = row.insertCell(3);
	cell4.innerHTML = ownerShipTypeText+
	'<input type="hidden" id="ownername@'+rowCount+'" name="ownername" value="'+ownername+'" />'+
	'<input type="hidden" id="ownerid@'+rowCount+'" name="ownerid" value="NA" />'+
'<input type="hidden" id="ownerShipid@'+rowCount+'" name="ownerShipid" value="'+ownershipTypeid+'" />';;

	var cell5=row.insertCell(4);
		var ownerSymbol = document.getElementById('symbol').value.trim();
	 var symbolValue= converBanglaToNumeric(ownerSymbol);
	
		var finalImage ='<span id="addrowSymbol@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol1@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol2@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol3@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol4@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol5@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol6@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowSymbol7@'+rowCount+'" class="symbolImg"></span>';
		
	cell5.innerHTML =finalImage+'<input type="hidden" id="ownerSymbol'+rowCount+'" name="ownerSymbol" value="'+ownerSymbol+'";">';
	
	if(symbolValue!="")
	{
		debugger;
		getSymbolImage('addrowSymbolID@'+rowCount,symbolValue,"");
	 }
	
	
	
	
	
	
	
	
	var cell6 = row.insertCell(5);
	cell6.innerHTML = ownershare;
	
	if(ownershare=='')
	{
	ownershare="0";
	}
	if(ownerSymbol=='')
	{
		ownerSymbol="0";
	}
/*if(revenue=='')
{

	revenue="0";
}*/
if(middlename=='')
{
	middlename="-";

}
if(lastname=='')
{
	lastname="-";

}

if(address=='')
	address="-";
var ownerValues = firstname + "@" + middlename + "@" + lastname+"@"
+"0"+ "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"
+ converBanglaToNumeric(ownerSymbol)+"@"+rowCount+"@"+"NA"+"@"+"NA"+"@"+RulesSpecialContextCheck+"@"+issharesame;

	var owneraddress= address + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;
	debugger;
	
	
	var cell7 = row.insertCell(6);
	cell7.innerHTML =  RulesSpecialContext;
	
	var cell8 = row.insertCell(7);
	cell8.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'edit@'

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


	
	var cell9 = row.insertCell(8);
	cell9.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'deleteowner@'
		+ rowCount
		+ '\' onclick="deleteOwnerRowForDynamicTable(this.id,0); return false;" /><input type="hidden" id=\'deleteOwnerhidden@'
		+ rowCount + '\' value="added"/></span>';
	
	
	  
	  if( document.getElementById('relationTypeCheck').checked == true){
		  var cell10 = row.insertCell(9);
		  cell10.className="text-center";
		  cell10.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]" checked="checked">';
	  }else{
		  var cell10 = row.insertCell(9);
		  cell10.className="text-center";
		  cell10.innerHTML ='<input type="checkbox" id="relsame'+rowCount+'" disabled="true" name="relsame[]">';
	  }
	  
	  
	  if( document.getElementById('shareCheck').checked == true){
		  var cell11=row.insertCell(10);
		  cell11.className="text-center";
		  cell11.innerHTML ='<input type="checkbox" id="shsame'+rowCount+'" disabled="true" name="shsame[]" checked="checked">';
	  }else{
		  var cell11=row.insertCell(10);
		  cell11.className="text-center";
		  cell11.innerHTML ='<input type="checkbox" id="shsame'+rowCount+'" disabled="true" name="shsame[]">';
		  
	  }
	
	
	
	
	table.rows[rowCount].className = "success";

	document.getElementById('ownersize').value="";
	document.getElementById('ownervaluecheck').value="";
	 resetownerdetails();
	 addownerdetails();
	 return true;
	 
}
	
	

function addPlotDetails(newdetailstable) {
	debugger;
	var adjvarPlotNo = document.getElementById('AdjplotNo').value;
		var plotNo = document.getElementById('plotNo').value;
		if(plotNo=='')
			{
			alert("Please enter plot no");
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


		var allValuesPlot = converBanglaToNumeric(plotNo) + "@" +agricultureTypeidText+"@"+nonagricultureTypeidText+"@"+converBanglaToNumeric(six) + "@" + six1NumericShow + "@" + converBanglaToNumeric(seven)
				+ "@" + converBanglaToNumeric(eight) + "@" + converBanglaToNumeric(eight1)+"@"+converBanglaToNumeric(symbol1)+"@"+converBanglaToNumeric(adjvarPlotNo)+"@"+(plotremark==''?"-":plotremark)+"@"+agricultureTypeidValue+"@"
				+ nonagricultureTypeidValue;

		if(agricultureTypeidValue=="0")
		{
			agricultureTypeidText="";
		}
		
		if(nonagricultureTypeidValue=="0")
		{
			nonagricultureTypeidText="";
		}
		var row = table.insertRow(rowCount);
		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		cell1.appendChild(element1);
		cell1.innerHTML = adjvarPlotNo+'<input type="hidden" id="AdjplotHidden'+rowCount+'" name="AdjplotTypeArr" value="'+converBanglaToNumeric(adjvarPlotNo)+'";">';;
		var cell2 = row.insertCell(1);
		cell2.innerHTML = plotNo+'<input type="hidden" id="plotnos'+rowCount+'" name="plotnos" value="'+converBanglaToNumeric(plotNo)+'";">'+
		'<input type="hidden" id="plotids'+rowCount+'" name="plotids" value="new";">';;
		var cell3 = row.insertCell(2);
		cell3.innerHTML = agricultureTypeidText;
		var cell4 = row.insertCell(3);
		cell4.innerHTML = nonagricultureTypeidText;
		var cell5 = row.insertCell(4);
		cell5.innerHTML = six;
		var cell6 = row.insertCell(5);
		cell6.innerHTML = six1BanglaShow;
		  var symbolValue= converBanglaToNumeric(symbol1);
		 
		var finalImage ='<span id="addrowPlotSymbol@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol2@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol4@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowCount+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol6@'+rowCount+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowCount+'" class="symbolImg"></span>';
		    
		var cell7 = row.insertCell(6);
		cell7.innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowCount+'" name="plotSymbol" value="'+symbol1+'";">';
		  if(symbolValue!="")
			{
		    	getSymbolImage('addrowPlotSymbolID@'+rowCount,symbol1,"");
			}
		var cell8 = row.insertCell(7);

		cell8.innerHTML =seven;
		var cell9 = row.insertCell(8);
		
		cell9.innerHTML = eight;
		var cell10 = row.insertCell(9);

		cell10.innerHTML = eight1;
		
		var cell11 = row.insertCell(10);
		cell11.innerHTML =plotremark+'<input type="hidden" id="AdjplotremarkHidden'+rowCount+'" name="AdjplotremarkTypeArr" value="'+plotremark+'";">';;
		var cell12 = row.insertCell(11);
		cell12.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'editPlot@'
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
		var cell13 = row.insertCell(12);
		cell13.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" name=\'deletePlot@'
				+ rowCount
				+ '\' id=\'deletePlot@'
				+ rowCount
				+ '\' onclick="deleteplotRowForDynamicTable(this.id,'+rowCount+','+converBanglaToNumeric(plotNo)+',this.name); return false;" />'
				+'<input type="hidden" value="added" id=\'deleteplothidden@'+ rowCount + '\'></span>';
		// table.row.style
		table.rows[rowCount].className = "success";
		 document.getElementById("plotvaluecheck").value="";
	/*	 if (document.getElementById("possessionOwnerName").length > 1) {
			 
			 
			 
		

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
				 }
			 */
		
			 
			 
			 
		/*	 
			 
		  var cmb=document.getElementById("possessionPlot").length;
		   var comboplot = document.getElementById("possessionPlot");  
		    var option = document.createElement("option");
		    option.text = plotNo ;
		    option.value ="new@"+converBanglaToNumeric(plotNo);
		    comboplot.add(option,null);
		  }*/
		 document.getElementById("plotsize").value="";
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
		
		
		var khatiannumber=document.getElementById("khatianNolist").value;
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
	 
		var touzino=document.getElementById("touzino").value;
		if(touzino=="")
			{
			alert("Please enter Touji no");
			document.getElementById('touzino').focus();
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
		
		var revenueRecievedPerson=document.getElementById("revenueRecievedPerson").value;
		var listVariousKhatian=document.getElementById("listVariousKhatian").value;
			var totalAreaRights=document.getElementById("totalAreaRights").value;
			if(revenueRecievedPerson=='')
			{
				revenueRecievedPerson="NA";
			}
		else
			revenueRecievedPerson=revenueRecievedPerson;
			if(listVariousKhatian=='')
			{
				listVariousKhatian="NA";
			}
		else
			listVariousKhatian=listVariousKhatian;
		
			if(totalAreaRights=='')
			{
				totalAreaRights="NA";
			}
		else
			totalAreaRights=totalAreaRights;
		
		
		document.getElementById("editedkhatianjlno").value=converToBanglaNumeric(khatno)+"@"+converBanglaToNumeric(jlno)+"@"+rsno+"@"+converBanglaToNumeric(touzino)+"@"+khatianRemarks+"@"+lawcasenum+"@"+revenueRecievedPerson+"@"+listVariousKhatian+"@"+totalAreaRights;
	

	
	var i;
	for (i = 1; i < rowCount; i++) {
		debugger;
		var flag = document.getElementById("addedflag@" + i).value;
		if (flag == "added") {
			
			var valueadded = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="addedValues' + i
							+ '" name="addedValues" value="' + valueadded
							+ '" />');
			var editHiddenAddress = document.getElementById("editHiddenAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="addedaddress' + i
							+ '" name="addedaddress" value="' + editHiddenAddress
							+ '" />');
		}
		if (flag == "existing") {
			var existingvalues = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingValues' + i
							+ '" name="existingValues" value="'
							+ existingvalues + '" />');

		}
		if (flag == "edited") {
			var existingvaluesOwner = document.getElementById("editHidden@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedValuesowner' + i
							+ '" name="editedValuesowner" value="'
							+ existingvaluesOwner + '" />');
			var existingOwnerAddress = document.getElementById("editHiddenAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingOwnerAddress' + i
							+ '" name="existingOwnerAddress" value="'
							+ existingOwnerAddress + '" />');
			
			var editHiddenowner = document.getElementById("editHiddenowner@" + i).value;
	
			$('#saveform').append(
					'<input type="hidden" id="editHiddenownerValue' + i
							+ '" name="editHiddenownerValue" value="'
							+ editHiddenowner + '" />');
			var editedOwnerAddress = document.getElementById("editHiddenownerAddress@" + i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedOwnerAddress' + i
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
					'<input type="hidden" id="addedPlotValues@' + i
							+ '" name="addedPlotValues" value="'
							+ valueaddedplot + '" />');
		}
		if (flagplot == "existing") {
			var existingvaluesplot = document.getElementById("editplothidden@"
					+ i).value;
			$('#saveform').append(
					'<input type="hidden" id="existingPlotValues@' + i
							+ '" name="existingPlotValues" value="'
							+ existingvaluesplot + '" />');

		}
		if (flagplot == "edited") {
			//for existing
			var editedvaluesPlot = document.getElementById("editplothidden@"
					+ i).value;

			$('#saveform').append(
					'<input type="hidden" id="editedValuesPlot' + i
							+ '" name="editedValuesPlot" value="'	
						+ editedvaluesPlot + '" />');
			//for edited
			var editedPlotvalues = document.getElementById("editedplothidden@"
					+ i).value;
			$('#saveform').append(
					'<input type="hidden" id="editedPlotValues' + i
							+ '" name="editedPlotValues" value="'
							+ editedPlotvalues + '" />');
			
		}
	}
		
		var oldtable = document.getElementById("oldownerTable");
		var oldrowCount = oldtable.rows.length;
		var oldownervaluecheck=document.getElementById("oldownervaluecheck").value;
		
			var k;
			if(oldownervaluecheck!=1)
				{
		for (k = 2; k < oldrowCount; k++) {
			debugger;
			var flag = document.getElementById("addedoldflag@" + k).value;
			if (flag == "added") {

				var valueaddedold = document.getElementById("editoldHidden@" + k).value;
			
				$('#saveform').append(
						'<input type="hidden" id="addedValuesOld' + k
								+ '" name="addedValuesOld" value="' + valueaddedold
								+ '" />');
				var editHiddenAddressold = document.getElementById("editHiddenoldAddress@" + k).value;
				$('#saveform').append(
						'<input type="hidden" id="addedaddressOld' + k
								+ '" name="addedaddressOld" value="' + editHiddenAddressold
								+ '" />');
			}
			if (flag == "existing") {
				var existingvaluesold = document.getElementById("editoldHidden@" + k).value;
				$('#saveform').append(
						'<input type="hidden" id="existingValuesOld' + k
								+ '" name="existingValuesOld" value="'
								+ existingvaluesold + '" />');

			}
			if (flag == "edited") {
				var existingvaluesOwnerold = document.getElementById("editoldHidden@" + k).value;
				$('#saveform').append(
						'<input type="hidden" id="editHiddenownerValueOld' + k
								+ '" name="editHiddenownerValueOld" value="'
								+ existingvaluesOwnerold + '" />');
				var existingOwnerAddressold = document.getElementById("editHiddenoldAddress@" + k).value;
				$('#saveform').append(
						'<input type="hidden" id="existingOwnerAddressOld' + k
								+ '" name="existingOwnerAddressOld" value="'
								+ existingOwnerAddressold + '" />');
				
				var editHiddenownerold = document.getElementById("editHiddenoldowner@" + k).value;
		
				$('#saveform').append(
						'<input type="hidden" id="editedValuesownerOld' + k
								+ '" name="editedValuesownerOld" value="'
								+ editHiddenownerold + '" />');
				var editedOwnerAddressold = document.getElementById("editHiddenoldownerAddress@" + k).value;
		
				$('#saveform').append(
						'<input type="hidden" id="editedOwnerAddressOld' + k
								+ '" name="editedOwnerAddressOld" value="'
								+ editedOwnerAddressold + '" />');
			}

		}
		
				}
		
		var Batatable = document.getElementById("tbl_bata");
		var batarowCount = Batatable.rows.length;
	var batacheck=document.getElementById("batacheck").value;
			var k;
			if(batacheck!=1)
				{
		for (k = 1; k < batarowCount; k++) {
			debugger;
			var flag = document.getElementById("BataFlag" + k).value;
			if (flag == "added") {

				var valueaddedbata = document.getElementById("BeditHidden" + k).value;
			
				$('#saveform').append(
						'<input type="hidden" id="addedValuesbata' + k
								+ '" name="addedValuesbata" value="' + valueaddedbata
								+ '" />');
			}
			if (flag == "edited") {
				
				var EditedBataValuebata = document.getElementById("BataValueEdited" + k).value;
				var EditedBataValueseq = document.getElementById("seq" + k).value;
			var bataseq=EditedBataValuebata+"#"+EditedBataValueseq;
				$('#saveform').append(
						'<input type="hidden" id="EditedBataValue' + k
								+ '" name="EditedBataValue" value="'
								+ bataseq + '" />');
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
	    	document.saveform.action = "saveencodeddataSA";
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
	
		document.getElementById("editplotcountidentifyplot").value="1";
		
		document.getElementById('plotNo').value = converToBanglaNumeric(res[0]);
		document.getElementById('plotId').value = res[13];
		document.getElementById('agricultureTypeid').value=res[11];
		document.getElementById('nonagricultureTypeid').value=res[12];
		
		document.getElementById('six').value = converToBanglaNumeric(res[3]);
		document.getElementById('six1').value = converToBanglaNumeric(res[4]);
		
		document.getElementById('eight').value = converToBanglaNumeric(res[6]);
		document.getElementById('eight1').value = converToBanglaNumeric(res[7]);
		document.getElementById('AdjplotNo').value = converToBanglaNumeric(res[9]);
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
	var AdjplotNo = document.getElementById('AdjplotNo').value;
	
	
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
	if(plotId=="")
		{
		plotId="NA";
		}
	
	
	//alert(agricultureTypeidValue);
	if(agricultureTypeidValue=="0")
	{
		agricultureTypeidText="";
	}
	
	if(nonagricultureTypeidValue=="0")
	{
		nonagricultureTypeidText="";
	}
	var rowcountidentifyplot = document.getElementById('rowcountidentifyplot').value;
	table.rows[rowcountidentifyplot].cells[0].innerHTML = AdjplotNo;
	table.rows[rowcountidentifyplot].cells[1].innerHTML = plotNo
	+'<input type="hidden" id="plotnos'+rowcountidentifyplot+'" name="plotnos" value="${cnt.plotNo}"  >'+
	'<input type="hidden" id="plotids'+rowcountidentifyplot+'" name="plotids" value="${cnt.plotId}"  >';
	table.rows[rowcountidentifyplot].cells[2].innerHTML = agricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[3].innerHTML = nonagricultureTypeidText;
	table.rows[rowcountidentifyplot].cells[4].innerHTML = six;
	table.rows[rowcountidentifyplot].cells[5].innerHTML = six1;
	 	  
	  
	  var symbolValue= converBanglaToNumeric(symbol1);
		 
		var finalImage ='<span id="addrowPlotSymbol@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol1@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol2@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol3@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol4@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol5@'+rowcountidentifyplot+'" class="symbolImg"></span>'+
		'<span id="addrowPlotSymbol6@'+rowcountidentifyplot+'" class="symbolImg"></span>'+'<span id="addrowPlotSymbol7@'+rowcountidentifyplot+'" class="symbolImg"></span>';
		    
		 table.rows[rowcountidentifyplot].cells[6].innerHTML = finalImage+'<input type="hidden" id="plotSymbol'+rowcountidentifyplot+'" name="plotSymbol" value="'+symbol1+'";">';
		  if(symbolValue!="")
			{
		    	getSymbolImage('addrowPlotSymbolID@'+rowcountidentifyplot,symbol1,"");
			}
	   
		  
	/*table.rows[rowcountidentifyplot].cells[6].innerHTML = symbol1;*/
	table.rows[rowcountidentifyplot].cells[7].innerHTML = seven;
	table.rows[rowcountidentifyplot].cells[8].innerHTML = eight;
	table.rows[rowcountidentifyplot].cells[9].innerHTML = eight1;
	table.rows[rowcountidentifyplot].cells[10].innerHTML = Adjremarks;
	 
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
		
		+ '@' + plotId;
		
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
	
	+ '@' + plotId;
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

	//document.getElementById('Law_DueFrom').value = res[9];
	document.getElementById('Rules_SpecialContext').value = res[10];
	//document.getElementById('khatianremarks').value = res[11];

	
	$('#relationtype').val(resAddress[1]);
	document.getElementById('relationname').value = resAddress[2];

	document.getElementById('address').value = resAddress[0];
	/*document.getElementById('streetname').value = resAddress[1];
	document.getElementById('localityname').value = resAddress[2];*/
	


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
//alert("res[6]:::"+res[6]);
document.getElementById('symbol').value = converToBanglaNumeric(res[6]);
document.getElementById('ownershare').disabled =true;
 var symbolValue= converBanglaToNumeric(res[6]);
 
 getSymbolImage('symbol',symbolValue,"");
	}

	document.getElementById('ownerid').value =(res[7]);
	document.getElementById('addressid').value = resAddress[3];

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
//	document.getElementById('revenue').value = converToBanglaNumeric(res[3]);
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
	
	document.getElementById('relationname').value = "";
	document.getElementById('firstname').value = "";
	document.getElementById('middlename').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('ownershare').value = "";
	document.getElementById('relationtype').value = "";
	//document.getElementById('revenue').value = "";
	document.getElementById('ownerShareTypeid').value = "";
	document.getElementById('address').value = "";
	
	document.getElementById('symbol').value = "";
	document.getElementById('Rules_SpecialContext').value = "";
	document.getElementById('relationname').disabled = false;
	document.getElementById('relationtype').disabled = false;
	
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
	//	var Law_DueFrom = document.getElementById('Law_DueFrom').value;
		var Rules_SpecialContext = document.getElementById('Rules_SpecialContext').value;
		
		/*var LawDueFromCheck;
		if(Law_DueFrom=="")
			{
			LawDueFromCheck="-"
			}
		else
			{
			LawDueFromCheck=Law_DueFrom;
			}*/
		
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
		
		//var revenue = document.getElementById('revenue').value;
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


/*	var revenueText;
	if (revenue == "0") {
			revenueText = "";
			
		}else 
			revenueText=revenue;*/
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
		 allValues = firstname + "@" + middlename + "@" + lastname +"@"
			+ "0" + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
				converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+"NA"+ "@"+ RulesSpecialContextCheck+"@"+issharesame;
		//alert("allValues :::"+converBanglaToNumeric(ownersharsymbole));
		 
			var	isrelationsame="0"+"@"+addressid+"@"+relationtypeid;
	 addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame ;
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
			//resultownervalue[3]=converBanglaToNumeric(revenue);
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
			resultownervalue[9]="NA";
			resultownervalue[10]=RulesSpecialContextCheck;
			editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
			converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
			"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;
			allValues=editvalue;
			
			relationtypeid=resAddress[1];
			resAddress[3]=prvaddressid;
			var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
			addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame;
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
			+ "0" + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
			converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ "NA"+ "@"+ RulesSpecialContextCheck+"@"+issharesame;
		var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
		resAddress[3]=prvaddressid;
		relationtypeid=resAddress[1];
		addressid=prvaddressid;
		var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
		addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame;
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
			//resultownervalue[3]=converBanglaToNumeric(revenue);
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
			resultownervalue[9]="NA";
			resultownervalue[10]=RulesSpecialContextCheck;
		var	editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
			converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
			"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;
			allValues=editvalue;
			ownershipTypeid=prvownershipTypeid;
			relationtypeid=relationtypeid;
		var	isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
			addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame ;
		//	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=prvownershipTypeid;
		///	document.getElementById('addressid@'+rowcountidentifyowner).value=prvaddressid;
		//	document.getElementById('sequence@'+rowcountidentifyowner).value=seqno;
		}

		
		
		
		
		
		
		
		
		
		table.rows[rowcountidentifyowner].cells[1].innerHTML =relation;
		table.rows[rowcountidentifyowner].cells[2].innerHTML = address+
				'<input type="hidden" id="addressid@'+rowcountidentifyowner+'" name="addressid" value="'+addressid+'" />'+
				'<input type="hidden" id="relationid@'+rowcountidentifyowner+'" name="relationid" value="'+relationtypeid+'" />'
				;
		//table.rows[rowcountidentifyowner].cells[3].innerHTML = revenue;
		table.rows[rowcountidentifyowner].cells[3].innerHTML = ownerShareTypeText+
		'<input type="hidden" id="ownername@'+rowcountidentifyowner+'" name="ownername" value="'+name+'" />'+
		'<input type="hidden" id="ownerid@'+rowcountidentifyowner+'" name="ownerid" value="'+ownerid+'" />'+
	   '<input type="hidden" id="ownerShipid@'+rowcountidentifyowner+'" name="ownerShipid" value="'+ownershipTypeid+'" />';;

		var symbolValue= converBanglaToNumeric(ownersharsymbole);
		var finalImage ='<span id="addrowSymbol@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol1@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol2@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol3@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol4@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol5@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
		'<span id="addrowSymbol6@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowSymbol7@'+rowcountidentifyowner+'" class="symbolImg"></span>';
		
		table.rows[rowcountidentifyowner].cells[4].innerHTML=finalImage+'<input type="hidden" id="ownerSymbol'+rowcountidentifyowner+'" name="ownerSymbol" value="'+symbolValue+'";">';
	//alert("symbolValue::"+symbolValue);
	if(symbolValue!="")
	{
		debugger;
		getSymbolImage('addrowSymbolID@'+rowcountidentifyowner,symbolValue,"");
	 }
		
		
		table.rows[rowcountidentifyowner].cells[5].innerHTML = ownersharetext;
		
		//alert("Law_DueFrom"+Law_DueFrom);
		//table.rows[rowcountidentifyowner].cells[6].innerHTML = Law_DueFrom;
		table.rows[rowcountidentifyowner].cells[6].innerHTML = Rules_SpecialContext;
		
		
		  if( document.getElementById('relationTypeCheck').checked == true){
			 
			  table.rows[rowcountidentifyowner].cells[9].innerHTML ='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]" checked="checked">';
			  }else{
				 
				  table.rows[rowcountidentifyowner].cells[9].innerHTML ='<input type="checkbox" id="relsame'+rowcountidentifyowner+'" disabled="true" name="relsame[]">';
			  }
		  
		  
		  if(document.getElementById('shareCheck').checked == true){
				 
			  table.rows[rowcountidentifyowner].cells[10].innerHTML ='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]" checked="checked">';
			  }else{
				 
				  table.rows[rowcountidentifyowner].cells[10].innerHTML ='<input type="checkbox" id="shsame'+rowcountidentifyowner+'" disabled="true" name="shsame[]">';
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
	resultownervalue[5]="0";
	resultownervalue[6]=converBanglaToNumeric(res[6]);
	resultownervalue[7]=i;
	resultownervalue[9]="NA";
	resultownervalue[10]=res[10];
	nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
	converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
	"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+issharesame;

	var edithiddenaddress=document.getElementById("editHiddenAddress@" + i).value;
	var values=edithiddenaddress.split("@");
	var isrelationsame="0"+"@"+addressId+"@"+values[1];

	var edithiddenvalueaddress=values[0]+"@"+values[1]+"@"+values[2]+"@"+isrelationsame;


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
	nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame;

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
		resultownervalue[5]="0";
		resultownervalue[6]=converBanglaToNumeric(res[6]);
		resultownervalue[7]=i;
		resultownervalue[9]="NA";
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
		nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame;
		
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
//		document.getElementById("editHiddenowner@" + i).value = edithiddenvalue;
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
	
	document.getElementById("ownerShareTypeid").disabled=false;
	document.getElementById("symbol").disabled=false;
	document.getElementById("address").disabled=false;
	document.getElementById('editcountidentify').value = "";
	//document.getElementById("firstname").focus();
	//$("#inputFillOwner").show();

}

function resetPlotDetails() {
	clearPlotDetails();
	$("#editPlotButton").hide();
	$("#addPlotButton").show();
	document.getElementById("AdjplotNo").value="";
	document.getElementById("Adjremarks").value="";
	document.getElementById("agricultureTypeid").value="0";
	document.getElementById("nonagricultureTypeid").value="0";
	document.getElementById("editplotcountidentifyplot").value="";
	
	document.getElementById("plotNo").focus();
	$("#inputFillParcel").show();

}

/*function isEnterNumber3(evt,action) {
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
 Numeric and Forward Slash allow 
	if(action ==1){
	 if ((("০১২৩৪৫৬৭৮৯/").indexOf(keychar) > -1))
		return true;
	else {
		 alert("Please enter in  Numeric.");
		return false;
	}
	}
Alpha Numeric and Forward Slash allow 
	if(action ==2){
		if ((("০১২৩৪৫৬৭৮৯/িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in Alpha Numeric.");
			return false;
		}
		}
Only Numeric allow 
	if(action ==3){
		if ((("০১২৩৪৫৬৭৮৯").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in  Numeric.");
			return false;
		}
		}
Alpha Numeric with Comma allow 
	if(action ==4){
		if ((("০১২৩৪৫৬৭৮৯,িৃনেিডা্্বহকতদমসগড়ঙপুুটজরযওচ্র্র্র্র্র").indexOf(keychar) > -1))
			return true;
		else {
			 alert("Please enter in Alpha Numeric.");
			return false;
		}
		}
Numeric with Dot allow 
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
		
 Numeric and Hash allow 
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
}*/

function relationTypecheckFunction(){
	if(document.getElementById("relationTypeCheck").checked == true){
		var oldtableRow=document.getElementById("ownerTable").rows.length; 
		var ownervaluecheck= document.getElementById('ownervaluecheck').value;
		if(oldtableRow > 1 && ownervaluecheck!=1){
				var newtableRow ="";
		if(document.getElementById('rowcountidentify').value != "") {
			 if(document.getElementById('rowcountidentify').value == 1){
						 alert("Please add at least one record,it is not applicable for the first record");
						 document.getElementById("relationTypeCheck").checked = false;
						 return false;
					 }
				 newtableRow = parseInt(oldtableRow) - 2;
			
				 document.getElementById('relationnamehid').value = document.getElementById('relationname').value;
			    
			     document.getElementById('relationtypehid').value = document.getElementById('relationtype').value;
			     document.getElementById('addresshid').value = document.getElementById('address').value;
				}else {
				 newtableRow = parseInt(oldtableRow) - 1;
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
	 		document.getElementById('address').value = document.getElementById('addresshid').value;
		  
		    document.getElementById('relationtype').value = document.getElementById('relationtypehid').value;
			document.getElementById('relationname').disabled = false;
			document.getElementById('relationtype').disabled = false; 
			document.getElementById('address').disabled = false; 
			
			document.getElementById('relationnamehid').value=  "";
			document.getElementById('addresshid').value=  "";
			
			document.getElementById('relationtypehid').value = "";
			
	}else{
		   document.getElementById('relationname').value=  "";
		   document.getElementById('address').value=  "";
		  
		   document.getElementById('relationtype').value = "";
		   document.getElementById('relationname').disabled = false;
		   document.getElementById('relationtype').disabled = false; 
		   document.getElementById('address').disabled = false; 
		 
		}
	}
	
}
function selectBtn(val) {
	
	val = "amit"+"##"+val;
    var res = val.split("##");
	document.getElementById('relationname').value=  "";
	
	document.getElementById('relationtype').value = "";
	document.getElementById('address').value=  "";
	document.getElementById('relationname').disabled = true;
	document.getElementById('relationtype').disabled = true; 
	document.getElementById('address').disabled = true; 
	
	}
function OwnerShareCheck(){
	if(document.getElementById("shareCheck").checked == true){
		prev = 1;
		var tableRow=document.getElementById("ownerTable").rows.length; 
		var ownervaluecheck= document.getElementById('ownervaluecheck').value
		if(tableRow > 1 && ownervaluecheck!=1){
		if(document.getElementById('rowcountidentify').value != "") {
		prev = 2;
		if(document.getElementById('rowcountidentify').value == 1){
				 alert("Is relation not for first record");
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

	
	function addownerdetails(){
		//addownerdetails('old');
				document.getElementById('relationname').value="";
				document.getElementById('firstname').value="";
				document.getElementById('middlename').value="";
				document.getElementById('lastname').value="";
				document.getElementById('ownershare').value = "";
				document.getElementById('relationtype').value ="";
				document.getElementById('ownerShareTypeid').value="";	
				document.getElementById('symbol').value="";	
				
				document.getElementById('relationname').disabled = false;
				document.getElementById('relationtype').disabled = false; 
	
				document.getElementById("relationTypeCheck").checked = false;
				document.getElementById('ownershare').disabled=  false;	
	
				 getSymbolImage('symbol',"");
			}
	function ResetEncodingFormSA(){
		     if (confirm("Are you sure to Reset the Form?") == true) {
					document.saveform.action="DataEncodingSA";
					document.saveform.submit();
		
		}
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
			
				
				}
		


	} 
	}	}







//#########################################################################

// Script Start for old owner 

function addRowold(oldownerTable) {
	debugger;
	var firstname = document.getElementById('oldfirstname').value;
	var middlename = document.getElementById('oldmiddlename').value;
	var lastname = document.getElementById('oldlastname').value;
	var address = document.getElementById('oldaddress').value;
	
	var totalpaycess = document.getElementById('TPayCess').value;
	var totaleducationcess = document.getElementById('TPayEduCess').value;
	var tpay1revenue = document.getElementById('TPay1Revenue').value;
	var tpay1educess = document.getElementById('TPay1EduCess').value;
	
	var relationnamevalue = document.getElementById('oldrelationname').value;
	var relationtypeid = document.getElementById('oldrelationtype').value;
	var relationtypeText = document.getElementById('oldrelationtype').options[document
			.getElementById('oldrelationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('oldownerShareTypeid').value;
	var ownerShipTypeText = document.getElementById('oldownerShareTypeid').options[document
			.getElementById('oldownerShareTypeid').selectedIndex].text;

	var ownersharsymbole = document.getElementById('Nsymbol').value;
	
	var revenue = document.getElementById('oldrevenue').value;
	var ownershare = document.getElementById('oldownershare').value;
	var khatianremarks = document.getElementById('khatianremarks').value;
	
	var relation;
		 
		 
		 
		 if (firstname == "") {
	alert("Please enter first name");
	document.getElementById('oldfirstname').focus();
	return false;	
	}
	
	if (relationtypeid == "" && document.getElementById('oldrelationTypeCheck').checked == false ){
		alert("Please select relation");
		document.getElementById('oldrelationtype').focus();
		return false;	
		}
	if (relationnamevalue == "" && document.getElementById('oldrelationTypeCheck').checked == false ) {
		alert("Please enter relative name");
		document.getElementById('oldrelationname').focus();
		return false;		
		}
	if (ownershipTypeid == ""&& document.getElementById('oldshareCheck').checked == false ) {
		alert("Please select owner type");
		document.getElementById('oldownerShareTypeid').focus();
		return false;	
		}
	
	 
	
	if ((ownershare == "" && ownersharsymbole=="")&& document.getElementById('oldshareCheck').checked == false && ownershipTypeid!="3") {
		alert("Please enter owner share");
		document.getElementById('oldownershare').focus();
		return false;
		}else if((ownershare == "" && ownersharsymbole=="")&& document.getElementById('oldshareCheck').checked == true)
			{
			
			}
	
	/*if ( khatianremarks == "") {
		alert("Please enter remarks");
		document.getElementById('khatianremarks').focus();
		return false;	
		}*/
		
	if(ownersharsymbole=='')
		ownersharsymbole="0";
	
	if (ownershipTypeid =='' && document.getElementById('oldshareCheck').checked == true ) {
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
	var table = document.getElementById(oldownerTable);
	var size=document.getElementById('oldownersize').value;
	var ownervaluecheck=document.getElementById('oldownervaluecheck').value;
	   if(size=='0' || ownervaluecheck==1){
		   table.deleteRow(2);
	   }
	var oldrowCount = table.rows.length;

	var prvownerShipid="";
	var addressid="";
	var prvrelationd="";
	var sequence="";
	var addedoldflag="";
	if(oldrowCount>1)
		{
		
 var prv=parseInt(oldrowCount)-1;

	
	var isrelationsame;
	var issharesame;
	if( document.getElementById('oldrelationTypeCheck').checked==true)
		{
		addedoldflag = document.getElementById('addedoldflag@'+prv).value;
		 addressid = document.getElementById('oldaddressid@'+prv).value;
		 prvrelationd = document.getElementById('oldrelationid@'+prv).value;
		if(addedoldflag=="existing"){
		isrelationsame="1"+"@"+addressid+"@"+prvrelationd;
		
		relationtypeid=prvrelationd;
		}
	else if(addedoldflag=="added")
		{
		for(var i=prv;i>1;i--)
			{
			if(document.getElementById("oldrelsame"+i).checked==false)
			{
				 addressid = document.getElementById('oldaddressid@'+i).value;
				 sequence = document.getElementById('oldsequence@'+i).value;
			     prvrelationd = document.getElementById('oldrelationid@'+i).value;

				
				break;
			}
			
			
			
			}
		isrelationsame="1"+"@"+addressid+"@"+prvrelationd;
		relationtypeid=prvrelationd;
		}
		}
	else if( document.getElementById('oldrelationTypeCheck').checked==false)
		{
	
			isrelationsame="0"+"@"+"NA"+"@"+"NA";
			addressid="NA";
			
		}
	if(document.getElementById('oldshareCheck').checked==true)
		{
		addedoldflag = document.getElementById('addedoldflag@'+prv).value;
		
		 sequence = document.getElementById('oldsequence@'+prv).value;
		 prvownerShipid = document.getElementById('oldownerShipid@'+prv).value;

		if(addedoldflag=="existing"){
		issharesame="1"+"@"+prvownerShipid+"@"+sequence;
		ownershipTypeid=prvownerShipid;
		}
		else if(addedoldflag=="added")
		{
		debugger;
			
			for(var i=prv;i>1;i--)
			{
			if(document.getElementById("oldshsame"+i).checked==false)
			{
				sequence = document.getElementById('oldsequence@'+i).value;
				 prvownerShipid = document.getElementById('oldownerShipid@'+i).value;
		
			break;
			}
	
		}
			issharesame="1"+"@"+prvownerShipid+"@"+sequence;
			ownershipTypeid=prvownerShipid;
		}
		}
	else if( document.getElementById('oldshareCheck').checked==false)
	{

		issharesame="0"+"@"+ownershipTypeid+"@"+"NA";
		sequence="NA";
		
	}
	
	
		}else 
			{
			addressid="NA";
			isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
			issharesame="0"+"@"+ownershipTypeid+"@"+"NA";
			}

	

	var row = table.insertRow(oldrowCount);
		
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
			'<input type="hidden" id="oldaddressid@'+oldrowCount+'" name="oldaddressid" value="'+addressid+'" />'
			+'<input type="hidden" id="oldrelationid@'+oldrowCount+'" name="oldrelationid" value="'+relationtypeid+'" />';
	
	
	
	
	
	var cell4 = row.insertCell(3);
	cell4.innerHTML = ownershare;
	
	if(ownershare=='')
	{
	ownershare="0";
	}
	if(ownerSymbol=='')
	{
		ownerSymbol="0";
	}
	
	
	
	var cell5=row.insertCell(4);
	var ownerSymbol = document.getElementById('Nsymbol').value.trim();
	 var symbolValue= converBanglaToNumeric(ownerSymbol);
	
		var finalImage ='<span id="addrowNSymbol@'+oldrowCount+'" class="symbolImg"></span>'+'<span id="addrowNSymbol1@'+oldrowCount+'" class="symbolImg"></span>'+
		'<span id="addrowNSymbol2@'+oldrowCount+'" class="symbolImg"></span>'+'<span id="addrowNSymbol3@'+oldrowCount+'" class="symbolImg"></span>'+
		'<span id="addrowNSymbol4@'+oldrowCount+'" class="symbolImg"></span>'+'<span id="addrowNSymbol5@'+oldrowCount+'" class="symbolImg"></span>'+
		'<span id="addrowNSymbol6@'+oldrowCount+'" class="symbolImg"></span>'+'<span id="addrowNSymbol7@'+oldrowCount+'" class="symbolImg"></span>';
		
		cell5.innerHTML =finalImage+'<input type="hidden" id="ownerSymbol'+oldrowCount+'" name="ownerSymbol" value="'+ownerSymbol+'";">';
	
	if(symbolValue!="")
	{
		debugger;
		getSymbolImage('addrowNSymbolID@'+oldrowCount,symbolValue,"");
	 }
	
	
	
	
	var cell6 = row.insertCell(5);
	cell6.innerHTML = ownerShipTypeText+
	'<input type="hidden" id="oldownername@'+oldrowCount+'" name="oldownername" value="'+ownername+'" />'+
	'<input type="hidden" id="oldownerid@'+oldrowCount+'" name="oldownerid" value="NA" />'+
'<input type="hidden" id="oldownerShipid@'+oldrowCount+'" name="oldownerShipid" value="'+ownershipTypeid+'" />';;

	

var cell7 = row.insertCell(6);
cell7.innerHTML = revenue;


if(middlename=='')
{
	middlename="-";

}
if(lastname=='')
{
	lastname="-";

}

var cell8 = row.insertCell(7);
cell8.innerHTML = totalpaycess;	

var cell9 = row.insertCell(8);
cell9.innerHTML = totaleducationcess;


var cell10 = row.insertCell(9);
cell10.innerHTML = tpay1revenue;	

var cell11 = row.insertCell(10);
cell11.innerHTML = tpay1educess;
/*
if(revenue=='')
	{
	revenue="0";
	}
if(totalpaycess=='')
{
	totalpaycess="0";
}
if(totaleducationcess=='')
{
	totaleducationcess="0";
}

if(tpay1revenue=='')
{
	tpay1revenue="0";
}
if(tpay1educess=='')
{
	tpay1educess="0";
}*/
 var ownerValues = firstname + "@" + middlename + "@" + lastname+"@"
		+ converBanglaToNumeric(revenue) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"
		+ converBanglaToNumeric(ownerSymbol)+"@"+oldrowCount+"@"+"NA"+"@"+converBanglaToNumeric(totalpaycess)+"@"+converBanglaToNumeric(totaleducationcess)+"@"+converBanglaToNumeric(tpay1revenue)+"@"+converBanglaToNumeric(tpay1educess)+"@"+khatianremarks+"@"+issharesame;
 if(address=='')
		address="-";


	var owneraddress= address + "@" + relationtypeid + "@" + relationnamevalue+"@"+isrelationsame ;
	debugger;
	
	
	var cell12 = row.insertCell(11);
	cell12.innerHTML = khatianremarks;
	
	
	
	var cell13 = row.insertCell(12);
	cell13.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/edit.png" class="editIcon" id=\'edit@'
			+ oldrowCount
			+ '\' onclick="editoldOwnerdetails(this.id); return false;" /></span>'
			+ '<input type="hidden" id="editoldHidden@'
			+ oldrowCount
			+ '" name="editoldHidden" value="'
			+ ownerValues
			+ '">'
			+ '<input type="hidden" id="editHiddenoldAddress@'
			+ oldrowCount
			+ '" name="editHiddenoldAddress" value="'
			+ owneraddress
			+ '">'
			+ '<input type="hidden" id="addedoldflag@'
			+ oldrowCount
			+ '" name="addedoldflag" value="added">'
			+ '<input type="hidden" id="editHiddenoldowner@'
			+ oldrowCount
			+ '" name="editHiddenoldowner" value="">'
			+ '<input type="hidden" id="editHiddenoldownerAddress@'
			+ oldrowCount
			+ '" name="editHiddenoldownerAddress" value="">'
			+'<input type="hidden" id="rowcount@'
			+ oldrowCount
			+ '" name="rowcount" value="'+oldrowCount+'">'
			+'<input type="hidden" id="oldsequence@'
			+ oldrowCount
			+ '" name="oldsequence" value="'+sequence+'">';
	
	var cell14 = row.insertCell(13);
	cell14.innerHTML = '<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'olddeleteowner@'
			+ oldrowCount
			+ '\' onclick="deleteoldOwnerRowForDynamicTable(this.id,0,0); return false;" /><input type="hidden" id=\'deleteoldOwnerhidden@'
			+ oldrowCount + '\' value="added"/></span>';
	  
	  if( document.getElementById('oldrelationTypeCheck').checked == true){
	   
		  var cell15=row.insertCell(14);
		  cell15.className="text-center";
		  cell15.innerHTML ='<input type="checkbox" id="oldrelsame'+oldrowCount+'" disabled="true" name="oldrelsame[]" checked="checked">';
	  }else{
		  var cell15=row.insertCell(14);
		  cell15.className="text-center";
		  cell15.innerHTML ='<input type="checkbox" id="oldrelsame'+oldrowCount+'" disabled="true" name="oldrelsame[]">';
	  }
	  
	  
	  if( document.getElementById('oldshareCheck').checked == true){
		  var cell16=row.insertCell(15);
		  cell16.className="text-center";
		  cell16.innerHTML ='<input type="checkbox" id="oldshsame'+oldrowCount+'" disabled="true" name="oldshsame[]" checked="checked">';
	  }else{
		  var cell16=row.insertCell(15);
		  cell16.className="text-center";
		  cell16.innerHTML ='<input type="checkbox" id="oldshsame'+oldrowCount+'" disabled="true" name="oldshsame[]">';
		  
	  }
	
	
	
	
	table.rows[oldrowCount].className = "success";
	 /*if(document.getElementById('oldownerShareTypeid').value =="3" || document.getElementById('oldownerShareTypeid').value =="4" || document.getElementById('oldownerShareTypeid').value =="5" ||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5")	
	  {
	var table = document.getElementById("oldownerTable");

	var oldrowCount = table.rows.length;
	  }
	for(var i=1;i<oldrowCount;i++)
	{
		debugger;

		 if(document.getElementById('oldownerShareTypeid').value =="3" || document.getElementById('oldownerShareTypeid').value =="4" || document.getElementById('oldownerShareTypeid').value =="5" ||prvownerShipid=="3"||prvownerShipid=="4"||prvownerShipid=="5")	
		  {

			 var ownernametext = document.getElementById("oldownername@"+i).value;
			 var ownerid = document.getElementById("oldownerid@"+i).value;
							 var ownershipid = document.getElementById("oldownerShipid@"+i).value;
							
							 if(ownershipid=='3'||ownershipid=='4'||ownershipid=='5')
				{
				var ownernamevalue=ownernametext+"@"+i+"@"+ownerid;
				var option = document.createElement("option");
			
				option.text = ownernametext;
				option.value = ownernamevalue;
			
					//combo.add(option, combo[i]);
				
				}
		
	      } 
	}
	*/
	document.getElementById('oldownersize').value="";
	document.getElementById("oldownervaluecheck").value="";
	resetoldownerdetails();
	 return true;
	 
}

function resetoldownerdetails() {
	clearoldOwnerDetails();
	$("#editoldOwnerButton").hide();
	$("#addoldOwnerButton").show();
	
	document.getElementById("oldownerShareTypeid").disabled=false;
	document.getElementById("oldrelationtype").disabled=false;
	document.getElementById("Nsymbol").disabled=false;
	document.getElementById("oldaddress").disabled=false;
	document.getElementById("oldeditcountidentify").value="";

//	$("#inputFillOldOwner").show();

}

function  clearoldOwnerDetails(){
	
	document.getElementById('oldrelationname').value = "";
	document.getElementById('oldfirstname').value = "";
	document.getElementById('oldmiddlename').value = "";
	document.getElementById('oldlastname').value = "";
	document.getElementById('oldownershare').value = "";
	document.getElementById('oldrelationtype').value = "";
	document.getElementById('oldrevenue').value = "";
	document.getElementById('oldownerShareTypeid').value = "";
	document.getElementById('oldaddress').value = "";
	
	document.getElementById('khatianremarks').value = "";
	
	
	document.getElementById('TPayCess').value = "";
	document.getElementById('TPayEduCess').value = "";
	document.getElementById('TPay1Revenue').value = "";
	document.getElementById('TPay1EduCess').value = "";
	
	
	document.getElementById('Nsymbol').value = "";
	document.getElementById('oldrelationname').disabled = false;

	document.getElementById("oldrelationTypeCheck").checked = false;
	document.getElementById('oldownershare').disabled = false;
	document.getElementById("oldshareCheck").checked = false;
	document.getElementById("oldaddress").checked = false;
	
	
}






function editoldOwnerdetails(id){

	addoldownerdetails();
	var row = id.split("@")[1];
	var edittedval = document.getElementById("editHiddenoldowner@" + row).value;
	var res;
	var valAddress;
	var resAddress;
	if(edittedval=='')
		{
		
	var val = document.getElementById("editoldHidden@" + row).value;

	 res = val.split("@");
 valAddress = document.getElementById("editHiddenoldAddress@" + row).value;
	 resAddress = valAddress.split("@");

		}
	else
	{
		
		var val = document.getElementById("editHiddenoldowner@" + row).value;
		
	 res = val.split("@");
		valAddress = document.getElementById("editHiddenoldownerAddress@" + row).value;
		 resAddress = valAddress.split("@");
	}
	
	
	if(document.getElementById('oldshsame'+row).checked == true){
	alert("Updation not allowed please delete and insert new row");
		return false;
	}
	if(row=="1"){
		document.getElementById('oldrowcountidentify').value="1";
}else
	document.getElementById('oldrowcountidentify').value="";
	document.getElementById('oldeditcountidentify').value="1";
	var ownername = document.getElementById("oldownername@" + row).value;

	
if(document.getElementById('oldrelsame'+row).checked == true){
	
	 document.getElementById("oldrelationtype").disabled = true;
	 document.getElementById("oldrelationname").disabled = true;
	 document.getElementById("oldaddress").disabled = true;
	 
	}

	
	
if(document.getElementById('oldrelsame'+row).checked == true)
	{
	$('#oldrelationTypeCheck').prop("checked",true);
	}
if(document.getElementById('oldshsame'+row).checked == true)
	{
	$('#oldshareCheck').prop("checked",true);
	
	
	
	}
	document.getElementById('oldfirstname').value = res[0];
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

	document.getElementById('oldmiddlename').value = res[1];
	document.getElementById('oldlastname').value = res[2];
	document.getElementById('oldrevenue').value = converToBanglaNumeric(res[3]);
	document.getElementById('TPayCess').value = converToBanglaNumeric(res[9]);
	document.getElementById('TPayEduCess').value = converToBanglaNumeric(res[10]);
	document.getElementById('TPay1Revenue').value = converToBanglaNumeric(res[11]);
	document.getElementById('TPay1EduCess').value = converToBanglaNumeric(res[12]);
	
	document.getElementById('khatianremarks').value = res[13];
	
	$('#oldrelationtype').val(resAddress[1]);
	document.getElementById('oldrelationname').value = resAddress[2];

	document.getElementById('oldaddress').value = resAddress[0];
	/*document.getElementById('streetname').value = resAddress[1];
	document.getElementById('localityname').value = resAddress[2];*/
	


if(res[5]!='0')
{

	document.getElementById('oldownershare').value=converToBanglaNumeric(res[5]);


}else if(document.getElementById('oldshsame'+row).checked == true && res[5]=='0')
	{
	document.getElementById('oldownershare').disable=true;
	}
 else if(document.getElementById('oldrelsame'+row).checked == true && res[5]=='0')
	{
	document.getElementById('oldownershare').disable=true;
	}
 else if(document.getElementById('oldrelsame'+row).checked == false && res[5]=='0')
	{
		document.getElementById('oldownershare').disable=true;
		}
else
	{
	
	document.getElementById('Nsymbol').disabled =true;
	
	
	}
	
	if((res[6]=='' || res[6]=='0') && document.getElementById('oldshsame'+row).checked == false)
	{
	
		
		document.getElementById('Nsymbol').disabled =true;
	
		
		document.getElementById('oldownershare').value=converToBanglaNumeric(res[5]);
	}	
	else if((res[6]=='' || res[6]=='0')&& document.getElementById('oldshsame'+row).checked == true)
		{
		document.getElementById('Nsymbol').disabled =true;
		document.getElementById('oldownershare').disabled =true;
		}
	else{
//alert("res[6]:::"+res[6]);
document.getElementById('Nsymbol').value = converToBanglaNumeric(res[6]);
document.getElementById('oldownershare').disabled =true;
 var symbolValue= converBanglaToNumeric(res[6]);
 
 getSymbolImage('Nsymbol',symbolValue,"");
	}

	
if(resAddress[0]=="0")
	{  
	document.getElementById('oldaddress').value ="0";
	
	}else
		document.getElementById('oldaddress').value =resAddress[0];

	document.getElementById('oldrevenue').value = converToBanglaNumeric(res[3]);
	$('#oldownerShareTypeid').val(res[4]);
	


	document.getElementById('rowcountidentifyoldowner').value = row;
	$("#addoldOwnerButton").hide();
	$("#editoldOwnerButton").show();
	document.getElementById("oldfirstname").focus();
	$("#inputFillOldOwner").show();

		
}




function addoldownerdetails(){

	        document.getElementById('oldaddress').value="";
			document.getElementById('oldrelationname').value="";
			document.getElementById('oldfirstname').value="";
			document.getElementById('oldmiddlename').value="";
			document.getElementById('oldlastname').value="";
			document.getElementById('oldownershare').value = "";
			document.getElementById('oldrelationtype').value ="";
			document.getElementById('oldrevenue').value = "";
			document.getElementById('oldownerShareTypeid').value="";	
			document.getElementById('Nsymbol').value="";	
			document.getElementById('khatianremarks').value="";
			
			document.getElementById('TPayCess').value="";	
			document.getElementById('TPayEduCess').value="";	
			document.getElementById('TPay1Revenue').value="";	
			document.getElementById('TPay1EduCess').value="";	
			
			
			document.getElementById('oldrelationname').disabled = false;
			document.getElementById('oldrelationtype').disabled = false; 
			
			document.getElementById("oldaddress").checked = false;
			document.getElementById("oldrelationTypeCheck").checked = false;
			document.getElementById('oldownershare').disabled=  false;	
			document.getElementById("oldshareCheck").checked = false;
		
			 getSymbolImage('Nsymbol',"");
		}



function UpdateoldOwnerDetails(){
	
	var rowcountidentifyowner = document
	.getElementById('rowcountidentifyoldowner').value;
	var table = document.getElementById("oldownerTable");
	var firstname = document.getElementById('oldfirstname').value;
	var middlename = document.getElementById('oldmiddlename').value;
	var lastname = document.getElementById('oldlastname').value;

	var address = document.getElementById('oldaddress').value;
	
	
	var totalpaycess = document.getElementById('TPayCess').value;
	var totaleducationcess = document.getElementById('TPayEduCess').value;
	var tpay1revenue = document.getElementById('TPay1Revenue').value;
	var tpay1educess = document.getElementById('TPay1EduCess').value;
	
	
	var oldownnerremarks = document.getElementById('khatianremarks').value;
	
	
	var relationnamevalue = document.getElementById('oldrelationname').value;
	var relationtypeid = document.getElementById('oldrelationtype').value;
	var relationtypeText = document.getElementById('oldrelationtype').options[document
			.getElementById('oldrelationtype').selectedIndex].text;
	var ownershipTypeid = document.getElementById('oldownerShareTypeid').value;
	var ownerShareTypeText = document.getElementById('oldownerShareTypeid').options[document
			.getElementById('oldownerShareTypeid').selectedIndex].text;
	
	var ownersharsymbole = document.getElementById('Nsymbol').value;
	
	var revenue = document.getElementById('oldrevenue').value;
	var ownershare = document.getElementById('oldownershare').value;
	var ownerid = document.getElementById('oldownerid@'+rowcountidentifyowner).value;

	var addressid = document.getElementById('oldaddressid@'+rowcountidentifyowner).value;
	 if (firstname == "") {
alert("Please enter first name");
document.getElementById('oldfirstname').focus();
return false;	
}

if (relationtypeid == "" && document.getElementById('oldrelationTypeCheck').checked == false ){
	alert("Please select relation");
	document.getElementById('oldrelationtype').focus();
	return false;	
	}
if (relationnamevalue == "" && document.getElementById('oldrelationTypeCheck').checked == false ) {
	alert("Please enter relative name");
	document.getElementById('oldrelationname').focus();
	return false;		
	}
if (ownershipTypeid == ""&& document.getElementById('oldshareCheck').checked == false ) {
	alert("Please select owner type");
	document.getElementById('oldownerShareTypeid').focus();
	return false;	
	}



if ((ownershare == "" && ownersharsymbole=="")&& document.getElementById('oldshareCheck').checked == false && ownershipTypeid!="3") {
	alert("Please enter owner share");
	document.getElementById('oldownershare').focus();
	return false;
	}else if((ownershare == "" && ownersharsymbole=="")&& document.getElementById('oldshareCheck').checked == true)
		{
		
		}


/*var revenueText;
if (revenue == "0" || revenue == "") {
		revenueText = "-";
		
	}else 
		revenueText=revenue;*/
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

if (ownershipTypeid =='' && document.getElementById('oldshareCheck').checked == true ) {
	ownerShareTypeText="";
	ownershipTypeid ="0";
	
	}
if(relationtypeid=='' && document.getElementById('oldrelationTypeCheck').checked == true )
{
relation="";

}
else
relation=relationtypeText + ":" + relationnamevalue;

	
	














	var totalrowcount = table.rows.length;

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
	

	
	
	
		
	
	table.rows[rowcountidentifyowner].cells[1].innerHTML =relation;
	table.rows[rowcountidentifyowner].cells[2].innerHTML = address+
			'<input type="hidden" id="oldaddressid@'+rowcountidentifyowner+'" name="oldaddressid" value="'+addressid+'" />'+
			'<input type="hidden" id="oldrelationid@'+rowcountidentifyowner+'" name="oldrelationid" value="'+relationtypeid+'" />'
			;table.rows[rowcountidentifyowner].cells[3].innerHTML = ownersharetext;
	
	var symbolValue= converBanglaToNumeric(ownersharsymbole);
	var finalImage ='<span id="addrowNSymbol@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowNSymbol1@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowNSymbol2@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowNSymbol3@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowNSymbol4@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowNSymbol5@'+rowcountidentifyowner+'" class="symbolImg"></span>'+
	'<span id="addrowNSymbol6@'+rowcountidentifyowner+'" class="symbolImg"></span>'+'<span id="addrowNSymbol7@'+rowcountidentifyowner+'" class="symbolImg"></span>';
	
	table.rows[rowcountidentifyowner].cells[4].innerHTML=finalImage+'<input type="hidden" id="ownerNSymbol'+rowcountidentifyowner+'" name="ownerNSymbol" value="'+symbolValue+'";">';
//alert("symbolValue::"+symbolValue);
if(symbolValue!="")
{
	debugger;
	getSymbolImage('addrowNSymbolID@'+rowcountidentifyowner,symbolValue,"");
 }
	
	
	
table.rows[rowcountidentifyowner].cells[5].innerHTML = ownerShareTypeText+
'<input type="hidden" id="oldownername@'+rowcountidentifyowner+'" name="oldownername" value="'+name+'" />'+
'<input type="hidden" id="oldownerid@'+rowcountidentifyowner+'" name="oldownerid" value="'+ownerid+'" />'+
'<input type="hidden" id="oldownerShipid@'+rowcountidentifyowner+'" name="oldownerShipid" value="'+ownershipTypeid+'" />';;

	
    table.rows[rowcountidentifyowner].cells[6].innerHTML = revenue;
	
	table.rows[rowcountidentifyowner].cells[7].innerHTML = totalpaycess;
	table.rows[rowcountidentifyowner].cells[8].innerHTML = totaleducationcess;
	table.rows[rowcountidentifyowner].cells[9].innerHTML = tpay1revenue;
	table.rows[rowcountidentifyowner].cells[10].innerHTML = tpay1educess;
	
	table.rows[rowcountidentifyowner].cells[11].innerHTML = oldownnerremarks;
	
	 if( document.getElementById('oldrelationTypeCheck').checked == true){
		 
		  table.rows[rowcountidentifyowner].cells[14].innerHTML ='<input type="checkbox" id="oldrelsame'+rowcountidentifyowner+'" disabled="true" name="oldrelsame[]" checked="checked">';
		  }else{
			 
			  table.rows[rowcountidentifyowner].cells[14].innerHTML ='<input type="checkbox" id="oldrelsame'+rowcountidentifyowner+'" disabled="true" name="oldrelsame[]">';
		  }
	  
	  
	  if( document.getElementById('oldshareCheck').checked == true){
			 
		  table.rows[rowcountidentifyowner].cells[15].innerHTML ='<input type="checkbox" id="oldshsame'+rowcountidentifyowner+'" disabled="true" name="oldshsame[]" checked="checked">';
		  }else{
			 
			  table.rows[rowcountidentifyowner].cells[15].innerHTML ='<input type="checkbox" id="oldshsame'+rowcountidentifyowner+'" disabled="true" name="oldshsame[]">';
		  }
	
	var allValues;
	var addressvalue;
	var issharesame;
	var k=parseInt(rowcountidentifyowner)-1;
if(document.getElementById('oldrelationTypeCheck').checked == false && document.getElementById('oldshareCheck').checked == false )
	{
	var addressid = document.getElementById('oldaddressid@'+rowcountidentifyowner).value;
	var seqno=document.getElementById('oldsequence@'+rowcountidentifyowner).value;
	issharesame="0"+"@"+ownershipTypeid+"@"+seqno;
	 allValues = firstname + "@" + middlename + "@" + lastname +"@"
		+ converBanglaToNumeric(revenue) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
			converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ converBanglaToNumeric(totalpaycess)+"@"+converBanglaToNumeric(totaleducationcess)+"@"+converBanglaToNumeric(tpay1revenue)+"@"+converBanglaToNumeric(tpay1educess)+"@"+oldownnerremarks+"@"+issharesame;
	//alert("allValues :::"+converBanglaToNumeric(ownersharsymbole));
	 
		var	isrelationsame="0"+"@"+addressid+"@"+relationtypeid;
addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame ;
	}
else if(document.getElementById('oldrelationTypeCheck').checked == true && document.getElementById('oldshareCheck').checked == true )
	{
		var seqno = document.getElementById('oldsequence@'+k).value;
		var prvownershipTypeid = document.getElementById('oldownerShipid@'+k).value;
		issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
	//	isrelshale="1"+"@"+prvownershipTypeid+"@"+seqno;
		var prvaddressid = document.getElementById('oldaddressid@'+k).value;
		
		var editvalue;
		var k=parseInt(rowcountidentifyowner)-1;
		var edittedval = document.getElementById("editHiddenoldowner@" +k).value;
		var resultownervalue;
		var valAddress;
		if(edittedval=='')
			{
			
			var val= document.getElementById("editoldHidden@" +k).value;
	 valAddress = document.getElementById("editHiddenoldAddress@" +k).value;
	 resultownervalue = val.split("@");
	 resAddress = valAddress.split("@");

			}
		else
		{
			
			var val = document.getElementById("editHiddenoldowner@" +k).value;
			valAddress = document.getElementById("editHiddenoldownerAddress@" + k).value;
			resultownervalue = val.split("@");
			 resAddress = valAddress.split("@");
		}
		resultownervalue[0]=firstname;
		resultownervalue[1]=middlename;
		resultownervalue[2]=lastname;
		resultownervalue[3]=converBanglaToNumeric(revenue);
		resultownervalue[9]=converBanglaToNumeric(totalpaycess);
		resultownervalue[10]=converBanglaToNumeric(totaleducationcess);
		resultownervalue[11]=converBanglaToNumeric(tpay1revenue);
		resultownervalue[12]=converBanglaToNumeric(tpay1educess);
		resultownervalue[13]=oldownnerremarks;
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
		
		editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+resultownervalue[11]+"@"+resultownervalue[12]+"@"+resultownervalue[13]+"@"+issharesame;
		allValues=editvalue;
		
		relationtypeid=resAddress[1];
		resAddress[3]=prvaddressid;
		var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
		addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame;
	//	document.getElementById('addressid@'+rowcountidentifyowner).value=prvaddressid;
	//	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=prvownershipTypeid;
		//document.getElementById('oldsequence@'+rowcountidentifyowner).value=seqno;
		//isrelationsame="0"+"@"+"NA"+"@"+"NA"
	
		ownershipTypeid=prvownershipTypeid;
		addressid=prvaddressid;
	}
	else if(document.getElementById('oldrelationTypeCheck').checked == true && document.getElementById('oldshareCheck').checked == false )
	{var k=parseInt(rowcountidentifyowner)-1;
	
		var seqno=document.getElementById('oldsequence@'+rowcountidentifyowner).value;
	
		issharesame="0"+"@"+ownershipTypeid+"@"+seqno;
		var prvaddressid = document.getElementById('oldaddressid@'+k).value;
				var edittedval = document.getElementById("editHiddenoldowner@" +k).value;
		var valAddress;
		if(edittedval=='')
			{
			
			
	 valAddress = document.getElementById("editHiddenoldAddress@" +k).value;
	
	 resAddress = valAddress.split("@");

			}
		else
		{
		
			
	
	 valAddress = document.getElementById("editHiddenoldownerAddress@" +k).value;
	
	 resAddress = valAddress.split("@");

		}
		
		 allValues = firstname + "@" + middlename + "@" + lastname +"@"
			+ converBanglaToNumeric(revenue) + "@" + ownershipTypeid + "@" + converBanglaToNumeric(ownershare) + "@"+
				converBanglaToNumeric(ownersharsymbole) +"@"+rowcountidentifyowner+"@" + ownerid +"@"+ converBanglaToNumeric(totalpaycess)+"@"+converBanglaToNumeric(totaleducationcess)+"@"+converBanglaToNumeric(tpay1revenue)+"@"+converBanglaToNumeric(tpay1educess)+"@"+oldownnerremarks+"@"+issharesame;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
	resAddress[3]=prvaddressid;
	relationtypeid=resAddress[1];
	addressid=prvaddressid;
	var	isrelationsame="1"+"@"+prvaddressid+"@"+resAddress[1];
	addressvalue=resAddress[0]+"@"+resAddress[1]+"@"+resAddress[2]+"@"+isrelationsame;
	}
	else if(document.getElementById('oldrelationTypeCheck').checked == false && document.getElementById('oldshareCheck').checked == true )
	{var seqno = document.getElementById('oldsequence@'+k).value;
	var prvownershipTypeid = document.getElementById('oldownerShipid@'+k).value;
	
	issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
		var k=parseInt(rowcountidentifyowner)-1;
		var edittedval = document.getElementById("editHiddenoldowner@" +k).value;
		var resultownervalue;
		if(edittedval=='')
			{
						
			var val= document.getElementById("editoldHidden@" +k).value;
			resultownervalue = val.split("@");
	
			}
		else
		{
			
			var val= document.getElementById("editHiddenoldowner@" +k).value;
			resultownervalue = val.split("@");
			
		}
		resultownervalue[0]=firstname;
		resultownervalue[1]=middlename;
		resultownervalue[2]=lastname;
		resultownervalue[3]=converBanglaToNumeric(revenue);
		resultownervalue[9]=converBanglaToNumeric(totalpaycess);
		resultownervalue[10]=converBanglaToNumeric(totaleducationcess);
		resultownervalue[11]=converBanglaToNumeric(tpay1revenue);
		resultownervalue[12]=converBanglaToNumeric(tpay1educess);
		resultownervalue[13]=oldownnerremarks;
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
	
	var	editvalue=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
		converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
		"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+resultownervalue[11]+"@"+resultownervalue[12]+"@"+resultownervalue[13]+"@"+issharesame;
		allValues=editvalue;
		ownershipTypeid=prvownershipTypeid;
		relationtypeid=relationtypeid;
	var	isrelationsame="0"+"@"+"NA"+"@"+relationtypeid;
		addressvalue=address + "@" + relationtypeid + "@" + relationnamevalue+"@"+ isrelationsame ;
	//	document.getElementById("ownerShipid@" + rowcountidentifyowner).value=prvownershipTypeid;
	///	document.getElementById('addressid@'+rowcountidentifyowner).value=prvaddressid;
	//	document.getElementById('oldsequence@'+rowcountidentifyowner).value=seqno;
	
	}

	
	
	
	table.rows[rowcountidentifyowner].className = "danger";
		
	var flag=document.getElementById("addedoldflag@"+rowcountidentifyowner ).value;
	

	if(flag=='added')
		{
	document.getElementById("editoldHidden@" + rowcountidentifyowner).value = allValues;
	document.getElementById("editHiddenoldAddress@" + rowcountidentifyowner).value = addressvalue;
	document.getElementById("addedoldflag@" + rowcountidentifyowner).value = 'added';
	document.getElementById('oldaddressid@'+rowcountidentifyowner).value=addressid;
	document.getElementById("oldownerShipid@" + rowcountidentifyowner).value=ownershipTypeid;
	document.getElementById('oldsequence@'+rowcountidentifyowner).value=seqno;
	document.getElementById("ownername@" + rowcountidentifyowner).value=firstname +" "+ middlename + " " + lastname;
		}
if(flag=='existing'|| flag=='edited')
	{
	
	document.getElementById("editHiddenoldowner@" + rowcountidentifyowner).value = allValues;
	document.getElementById("editHiddenoldownerAddress@" + rowcountidentifyowner).value = addressvalue;
		document.getElementById("addedoldflag@" + rowcountidentifyowner).value = 'edited';

		document.getElementById("ownerid@" + rowcountidentifyowner).value=ownerid;
		document.getElementById("ownername@" + rowcountidentifyowner).value=firstname +" "+ middlename + " " + lastname;
		document.getElementById('oldaddressid@'+rowcountidentifyowner).value=addressid;
		document.getElementById("oldownerShipid@" + rowcountidentifyowner).value=ownershipTypeid;
		document.getElementById('oldsequence@'+rowcountidentifyowner).value=seqno;
	
	
	}



var z=parseInt(rowcountidentifyowner)+1;
if(z<totalrowcount)
	{	
for(var i=z;i<totalrowcount;i++)
{

var flag=document.getElementById("addedoldflag@"+i).value;


if(document.getElementById("oldshsame"+i).checked==true ||document.getElementById("oldrelsame"+i).checked==true)
{
var k=parseInt(i)-1;

var nextchangedvalues="";
var nextchangedvaluesaddress="";
var edittedval = document.getElementById("editHiddenoldowner@" +k).value;
var res;
var valAddress;
var resAddress;
if(edittedval=='')
	{
	
var val = document.getElementById("editoldHidden@" +k).value;

 res = val.split("@");
valAddress = document.getElementById("editHiddenoldAddress@" +k).value;
 resAddress = valAddress.split("@");

	}
else
{
	
	var val = document.getElementById("editHiddenoldowner@" +k).value;
	
 res = val.split("@");
	valAddress = document.getElementById("editHiddenoldownerAddress@" + k).value;
	 resAddress = valAddress.split("@");
}

	

if((document.getElementById("oldshsame"+i).checked==true) &&(document.getElementById("oldrelsame"+i).checked==false))
{
debugger;

var edithiddenvalue=document.getElementById("editoldHidden@" + i).value;
var resultownervalue=edithiddenvalue.split("@");
var seqno = document.getElementById('oldsequence@'+k).value;
var prvownershipTypeid = document.getElementById('oldownerShipid@'+k).value;
var addressId = document.getElementById('oldaddressid@'+i).value;
var relationId = document.getElementById('oldrelationid@'+i).value;
issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
//resultownervalue[3]=converBanglaToNumeric(revenue);

resultownervalue[4]=converBanglaToNumeric(res[4]);
resultownervalue[5]="0";
resultownervalue[6]="0";
resultownervalue[7]=i;
resultownervalue[9]=res[9];
resultownervalue[10]=res[10];
nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+resultownervalue[11]+"@"+resultownervalue[12]+"@"+resultownervalue[13]+"@"+issharesame;

var edithiddenaddress=document.getElementById("editHiddenoldAddress@" + i).value;
var values=edithiddenaddress.split("@");
var isrelationsame="0"+"@"+addressId+"@"+values[1];

var edithiddenvalueaddress=values[0]+"@"+values[1]+"@"+values[2]+"@"+isrelationsame;


document.getElementById('oldsequence@'+i).value=seqno;
document.getElementById('oldownerShipid@'+i).value=prvownershipTypeid;
if(flag=='added')
{

document.getElementById("editoldHidden@" + i).value = nextchangedvalues;
document.getElementById("addedoldflag@" + i).value = 'added';
document.getElementById("oldrelationid@" + i).value = relationId;
document.getElementById("oldownerShipid@" + i).value=converBanglaToNumeric(res[4]);


}
if(flag=='existing'||flag=='edited')
{

document.getElementById("editHiddenoldowner@" + i).value = nextchangedvalues;
document.getElementById("addedoldflag@" + i).value = 'edited';
document.getElementById("oldrelationid@" + i).value = relationId;
document.getElementById("editHiddenoldownerAddress@" + i).value=edithiddenvalueaddress;
}

table.rows[i].className = "danger";


}else if((document.getElementById("oldrelsame"+i).checked==true) && (document.getElementById("oldshsame"+i).checked==false))
{
var seqno = document.getElementById('oldsequence@'+i).value;
var ownershipid = document.getElementById('oldownerShipid@'+i).value;

issharesame="0"+"@"+oldownerShipid+"@"+seqno;
var addressId = document.getElementById('oldaddressid@'+k).value;

var edithiddenvalue=document.getElementById("editoldHidden@" + i).value;
var editaddressvalue=document.getElementById("editHiddenoldAddress@" + i).value;
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
nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame;

nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+resultownervalue[11]+"@"+resultownervalue[12]+"@"+resultownervalue[13]+"@"+issharesame;

document.getElementById('oldaddressid@'+i).value=addressId;




if(flag=='added')
{
document.getElementById("editoldHidden@" + i).value=nextchangedvalues;
document.getElementById("editHiddenoldAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedoldflag@" + i).value = 'added';
document.getElementById("oldrelationid@" + i).value = resultaddress[1];
//document.getElementById("oldaddressid@" + i).value = addressId;


}
if(flag=='existing'||flag=='edited')
{
document.getElementById("editHiddenoldowner@" + i).value = nextchangedvalues;
document.getElementById("editHiddenoldownerAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedoldflag@" + i).value = 'edited';
document.getElementById("oldrelationid@" + i).value = resultaddress[1];
//document.getElementById("oldaddressid@" + i).value = addressId;


}
table.rows[i].className = "danger";
}
else if((document.getElementById("oldshsame"+i).checked==true) &&(document.getElementById("oldrelsame"+i).checked==true))
{ 
var seqno = document.getElementById('oldsequence@'+k).value;
var prvownershipTypeid = document.getElementById('oldownerShipid@'+k).value;
var prvrelationid=document.getElementById("oldrelationid@" + k).value;
issharesame="1"+"@"+prvownershipTypeid+"@"+seqno;
var addressId = document.getElementById('oldaddressid@'+k).value;
var edithiddenvalue=document.getElementById("editoldHidden@" + i).value;
var resultownervalue=edithiddenvalue.split("@");

//alert("prvownershipTypeid"+prvownershipTypeid);
//alert("res[4]"+res[4]);
resultownervalue[4]=converBanglaToNumeric(res[4]);
resultownervalue[5]="0";
resultownervalue[6]="0";
resultownervalue[7]=i;
resultownervalue[9]=res[9];
resultownervalue[10]=res[10];

nextchangedvalues=resultownervalue[0]+"@"+resultownervalue[1]+"@"+resultownervalue[2]+"@"+
converBanglaToNumeric(resultownervalue[3])+"@"+resultownervalue[4]+"@"+resultownervalue[5]+"@"+resultownervalue[6]+
"@"+resultownervalue[7]+"@"+resultownervalue[8]+"@"+resultownervalue[9]+"@"+resultownervalue[10]+"@"+resultownervalue[11]+"@"+resultownervalue[12]+"@"+resultownervalue[13]+"@"+issharesame;

var editaddressvalue=document.getElementById("editHiddenoldAddress@" +i ).value;
var resultaddress=editaddressvalue.split("@");
resultaddress[0]=resAddress[0];
resultaddress[1]=resAddress[1];
resultaddress[2]=resAddress[2];

if(resultaddress[0]=='')
	{
	resultaddress[0]="-";
	}
var isrelationsame="1"+"@"+addressId+"@"+resultaddress[1];
nextchangedvaluesaddress=resultaddress[0]+ "@" + resultaddress[1] + "@" + resultaddress[2] + "@" + isrelationsame;

document.getElementById('oldsequence@'+i).value=seqno;
document.getElementById('oldownerShipid@'+i).value=prvownershipTypeid;
if(flag=='added')
{
document.getElementById("editoldHidden@" + i).value=nextchangedvalues;
document.getElementById("editHiddenoldAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedoldflag@" + i).value = 'added';
document.getElementById("oldrelationid@" + i).value = resultaddress[1];
document.getElementById("oldaddressid@" + i).value = addressId;
document.getElementById("oldownerShipid@" + i).value=prvownershipTypeid;

}
if(flag=='existing'||flag=='edited')
{
	
document.getElementById("editHiddenoldowner@" + i).value = nextchangedvalues;
document.getElementById("editHiddenoldownerAddress@" + i).value = nextchangedvaluesaddress;
document.getElementById("addedoldflag@" + i).value = 'edited';
document.getElementById("oldrelationid@" + i).value = resultaddress[1];
document.getElementById("oldaddressid@" + i).value = addressId;
//document.getElementById("editHiddenowner@" + i).value = edithiddenvalue;
document.getElementById("oldownerShipid@" + i).value=prvownershipTypeid;
}
table.rows[i].className = "danger";



}
}else 
break;
}
}
//}



addoldownerdetails();
resetoldownerdetails();
document.getElementById('oldrowcountidentify').value="";
document.getElementById('oldeditcountidentify').value = "";
//$("#inputFillOldOwner").show();
}
	


function oldchangeOnOwnerShareTye(dis){
	var value = dis.value;
	if(value == "3"){
		document.getElementById("oldownershare").disabled  = true;
		document.getElementById("oldownershare").value  = "";
		document.getElementById("Nsymbol").disabled  = true;
		document.getElementById("Nsymbol").value  = "";
	}else{
		document.getElementById("oldownershare").disabled  = false;
		document.getElementById("Nsymbol").disabled  = false;
	    document.getElementById("oldownershare").value = "";
		document.getElementById("Nsymbol").value = ""; 
		 getSymbolImage('Nsymbol',"");
		 
	}
}


function resetOwnerold()
{
	var x= document.getElementById("oldownershare").value;
	if(document.getElementById("oldownershare").value!="" && document.getElementById("Nsymbol").value=="")
		 {
	 document.getElementById("oldownershare").disabled = false;
	 document.getElementById("Nsymbol").disabled = true;
	 document.getElementById("Nsymbol").value="";
		 }
	 else if(document.getElementById("oldownershare").value!="" && document.getElementById("Nsymbol").value!="")
		 {
		 document.getElementById("oldownershare").disabled = true;
		 document.getElementById("Nsymbol").disabled = false;
		 }
	 else if(document.getElementById("oldshareCheck").checked==true)
		 {
		 document.getElementById("oldownershare").disabled = true;
		 document.getElementById("Nsymbol").disabled = true;
		 document.getElementById("Nsymbol").value = "";
		 }		
	 else{
	 document.getElementById("oldownershare").disabled = false;
	 document.getElementById("Nsymbol").disabled = false;
	 document.getElementById("Nsymbol").value = "";
	     }
	 document.getElementById("oldownerShareTypeid").disabled = false;
   }



function disableShareold(id,dis){
	var osvalue=dis.value;
	if(osvalue !=""){
		var flag = checkSymbolCorrect(osvalue);
		if(!flag){
			alert("Please put % or #  only in the 1,4,7,10,13,16,19,22 position  and put value in the range of 00-20 for % and in the range of 00-22 for #");
			document.getElementById(id).focus();
			return false;
		}
 			var len = dis.value.length;
 		 	
 			if(len != 3 && len != 6 && len != 9 && len != 12 && len != 15 && len != 18 && len != 21 && len != 24){
 		 		alert("Invalid symbol value");
 				document.getElementById(id).focus();
 				return false;	
				}
 			
 		
 			 document.getElementById("oldownershare").disabled = true;
 			 document.getElementById("oldownershare").value = ""; 
 			
 			getSymbolImage(dis.id,dis.value);
	}
	else 
	 {
	 document.getElementById("oldownershare").value = "";
	 document.getElementById("oldownershare").disabled = false; 
	
	 
	 getSymbolImage(dis.id,dis.value);
	 }	
 }




//####################  Relation type check for old owner ##########################//

function oldrelationTypecheckFunction(){
	debugger;
	if(document.getElementById("oldrelationTypeCheck").checked == true){
		var tableRow=document.getElementById("oldownerTable").rows.length; 
		var oldownervaluecheck=document.getElementById("oldownervaluecheck").value; 
		
		if(tableRow > 2 && oldownervaluecheck!=1){
		var oldtableRow ="";
		if(document.getElementById('oldrowcountidentify').value != "") {
			 if(document.getElementById('oldrowcountidentify').value == 1){
						 alert("It is not applicable for the first record");
						 document.getElementById("oldrelationTypeCheck").checked = false;
						 return false;
					 }
			 oldtableRow = parseInt(tableRow) - 2;
				
				 document.getElementById('oldrelationnamehid').value = document.getElementById('oldrelationname').value;
			    
			     document.getElementById('oldrelationnamehid').value = document.getElementById('oldrelationtype').value;
			     document.getElementById('oldaddresshid').value = document.getElementById('oldaddress').value;
				}else {
					oldtableRow = parseInt(tableRow) - 1;
				}	
		
			var allform = document.getElementById("editoldHidden@"+oldtableRow).value;
			oldselectBtn(allform);
		             }
		else {
			alert("It is not applicable for the first record");
			document.getElementById("oldrelationTypeCheck").checked = false;
		return false;
		}
	}
	else{
	 	 if(document.getElementById('oldrowcountidentify').value != "") {
	 		document.getElementById('oldrelationname').value = document.getElementById('oldrelationnamehid').value;
	 		document.getElementById('oldaddress').value = document.getElementById('oldaddresshid').value;
		   
		    document.getElementById('oldrelationtype').value = document.getElementById('oldrelationtypehid').value;
			document.getElementById('oldrelationname').disabled = false;
			document.getElementById('oldrelationtype').disabled = false; 
			document.getElementById('oldaddress').disabled = false; 
			document.getElementById('oldrelationnamehid').value=  "";
			document.getElementById('oldaddresshid').value=  "";
			document.getElementById('oldrelationtypehid').value = "";
			 
	}else{
		   document.getElementById('oldrelationname').value= "";
		   document.getElementById('oldaddress').value= "";
		   document.getElementById('oldrelationtype').value = "";
		   document.getElementById('oldrelationname').disabled = false;
		   document.getElementById('oldrelationtype').disabled = false; 
		   document.getElementById('oldaddress').disabled = false; 
		 
		}
	}
	
}



function oldselectBtn(val) {
	
	val = "ajay"+"##"+val;
    var res = val.split("##");
	document.getElementById('oldrelationname').value=  "";
	
	document.getElementById('oldrelationtype').value = "";
	document.getElementById('oldaddress').value=  "";
	document.getElementById('oldrelationname').disabled = true;
	document.getElementById('oldrelationtype').disabled = true; 
	document.getElementById('oldaddress').disabled = true; 
	
	}


//#################### Owner Share Check for old owner ##########################//

function oldOwnerShareCheck(){
	if(document.getElementById("oldshareCheck").checked == true){
		prev = 1;
		var tableRow=document.getElementById("oldownerTable").rows.length;
		var oldownervaluecheck=document.getElementById("oldownervaluecheck").value;
		
		if(tableRow > 2 && oldownervaluecheck!=1){
		if(document.getElementById('oldrowcountidentify').value != "") {
		prev = 2;
		if(document.getElementById('oldrowcountidentify').value == 1){
				 alert("It is not applicable for the first record");
				 document.getElementById("oldshareCheck").checked = false;
					return false;
			 }else{
				 var tableRow=document.getElementById("oldownerTable").rows.length; 
					document.getElementById('oldownershare').value = "";
					document.getElementById('oldownershare').disabled=  true;
					document.getElementById('Nsymbol').disabled=  true;
					document.getElementById('Nsymbol').value=  "";
					var newrow = parseInt(tableRow)-1;
					document.getElementById('oldownerShareTypeid').value = "";
					document.getElementById('oldownerShareTypeid').disabled = true;
			 }
		 }else{
			 
			 var tableRow=document.getElementById("oldownerTable").rows.length; 
				document.getElementById('oldownershare').value = "";
				document.getElementById('oldownershare').disabled=  true;
				document.getElementById('Nsymbol').disabled=  true;
				document.getElementById('Nsymbol').value=  "";
				var newrow = parseInt(tableRow)-1;
				document.getElementById('oldownerShareTypeid').value = "";
				document.getElementById('oldownerShareTypeid').disabled = true;
		 }
		}
		else {
			alert("It is not applicable for the first record");
			document.getElementById("oldshareCheck").checked = false;
		return false;
		}
	}
	else{ 
		document.getElementById('oldownershare').disabled=  false;	
		document.getElementById('Nsymbol').disabled=  false;
		document.getElementById('oldownerShareTypeid').disabled = false;
		document.getElementById('oldownerShareTypeid').value = "";
	}
             }





//################### delete for old owner ################//

function deleteoldOwnerRowForDynamicTable(id, ownerid,addressid) {

var dltRowcount = id.split("@")[1];

var table = document.getElementById("oldownerTable");
var rowlength = table.rows.length;

var ownername=document
		.getElementById("oldownername@" + dltRowcount).value;
  var flag = false;

debugger;


  if (document.getElementById('oldeditcountidentify').value != "") {
	   alert("Cannot delete Details while Editing");
		return false;
	}

	
	var ownerrelationCheck = document.getElementById("oldrelsame"+dltRowcount).checked;
	var ownerShareCheck = document.getElementById("oldshsame"+dltRowcount).checked;
	if(ownerShareCheck ==true ||ownerrelationCheck==true){
	
	
		 if (confirm("Do you really want to delete this owner") == true) {		   

					 var valueowner= document.getElementById("deleteoldOwnerhidden@" + dltRowcount).value;
						if (valueowner == 'existing'||valueowner == 'edited') {
						
								var deletedexistingowner = document
										.getElementById("deletedexistingownerOld").value;
								if (deletedexistingowner == "")
									document.getElementById("deletedexistingownerOld").value = ownerid+"@"+addressid;
								else
									document.getElementById("deletedexistingownerOld").value = deletedexistingowner
											+ "#" + ownerid+"@"+addressid;

								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;

								updateIdOld(dltRowcount,rowlength);

								var deletedexistingownerrows = document
										.getElementById("deletedexistingownerrowsOld").value;
								if (deletedexistingownerrows == "")
									document.getElementById("deletedexistingownerrowsOld").value = 1;
								else
									document.getElementById("deletedexistingownerrowsOld").value = +deletedexistingownerrows
											+ +1;
							
						}	
						else
							{
							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;
							updateIdOld(dltRowcount,rowlength);
					 
					 }
						//RemoveAndAddOwnerold();

		 }
	
	}else{
		var checkrowlength = table.rows.length;
		if((checkrowlength-1) != dltRowcount){
			var inct = parseInt(dltRowcount)+1;
			
			var value1 = document.getElementById("oldrelsame"+inct).checked;
			var value = document.getElementById("oldshsame"+inct).checked;
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
				
					   var valueowner= document.getElementById("deleteoldOwnerhidden@" + dltRowcount).value;
						if (valueowner == 'existing' ||valueowner == 'edited') {
						
								var deletedexistingowner = document
										.getElementById("deletedexistingownerOld").value;
								if (deletedexistingowner == "")
									document.getElementById("deletedexistingownerOld").value = ownerid+"@"+addressid;
								else
									document.getElementById("deletedexistingownerOld").value = deletedexistingowner
											+ "#" + ownerid+"@"+addressid;

								table.deleteRow(dltRowcount);
								var rowlength = table.rows.length;

								updateIdOld(dltRowcount,rowlength);
								var deletedexistingownerrows = document
										.getElementById("deletedexistingownerrowsOld").value;
								if (deletedexistingownerrows == "")
									document.getElementById("deletedexistingownerrowsOld").value = 1;
								else
									document.getElementById("deletedexistingownerrowsOld").value = +deletedexistingownerrows
											+ +1;
							
						}	
						else
							{
							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;
							updateIdOld(dltRowcount,rowlength);
					 
							}
				   
						//RemoveAndAddOwnerold();	
				   
				   }
			
			
			}
		
		 }
		else{
			if (confirm("are you sure you want to delete") == false) {
				   return false;
			   }else {
				 	 
				   var valueowner= document.getElementById("deleteoldOwnerhidden@" + dltRowcount).value;
					if (valueowner == 'existing' ||valueowner == 'edited') {
					
							var deletedexistingowner = document
									.getElementById("deletedexistingownerOld").value;
							if (deletedexistingowner == "")
								document.getElementById("deletedexistingownerOld").value = ownerid+"@"+addressid;
							else
								document.getElementById("deletedexistingownerOld").value = deletedexistingowner
										+ "#" + ownerid+"@"+addressid;

							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;

							updateIdOld(dltRowcount,rowlength);

							var deletedexistingownerrows = document
									.getElementById("deletedexistingownerrowsOld").value;
							if (deletedexistingownerrows == "")
								document.getElementById("deletedexistingownerrowsOld").value = 1;
							else
								document.getElementById("deletedexistingownerrowsOld").value = +deletedexistingownerrows
										+ +1;
						
					}	
					else
						{
						table.deleteRow(dltRowcount);
						var rowlength = table.rows.length;
						updateIdOld(dltRowcount,rowlength);
						}
					//RemoveAndAddOwnerold();
			   }
	}
	}
 
 
	if(flag == true){
	debugger;
	var rowlength = table.rows.length;
		if(dltRowcount<rowlength-1)
			{
		 var oldrelsame  =document.getElementsByName("oldrelsame[]");
		 
			var pownername1= new Array();
			if(oldrelsame.length>1){
				var count=1;
				for(var k=dltRowcount ;k<=oldrelsame.length;k++)
					{
					var x=parseInt(dltRowcount)+parseInt(count);
				
				if(x<=oldrelsame.length+1)
					{
				if((document.getElementById("oldrelsame"+x).checked==true) || (document.getElementById("oldshsame"+x).checked==true))
				{
				count++;	
				}
				
				else {
					break;
				}}
					}
			
				
		/*    for(var j=0 ;j<count;j++)
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
					
					pownername1.push(ownername);
		     }*/
					
					 for(var j=0 ;j<count;j++)
				     {
					var valueplot = document.getElementById("deleteoldOwnerhidden@" + dltRowcount).value;
					if (valueplot == 'existing'|| valueplot == 'edited') {
					
							var deletedexistingowner = document
									.getElementById("deletedexistingownerOld").value;
							if (deletedexistingowner == "")
								document.getElementById("deletedexistingownerOld").value = ownerid+"@"+addressid;
							else
								document.getElementById("deletedexistingownerOld").value = deletedexistingowner
										+ "#" + ownerid+"@"+addressid;

							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;

							updateIdOld(dltRowcount,rowlength);

							var deletedexistingownerrows = document
									.getElementById("deletedexistingownerrowsOld").value;
							if (deletedexistingownerrows == "")
								document.getElementById("deletedexistingownerrowsOld").value = 1;
							else
								document.getElementById("deletedexistingownerrowsOld").value = +deletedexistingownerrows
										+ +1;
						
					}						
					else {

							table.deleteRow(dltRowcount);
							var rowlength = table.rows.length;
							updateIdOld(dltRowcount,rowlength);

		       }
		    
		
			 }  
			
	}
			
//RemoveAndAddOwnerold();
	
}
		}

  	var rowCount = table.rows.length;
	if(rowCount=='2'){
		var row = table.insertRow(rowCount);
		var a=row.insertCell(0);
		//row.insertCell(1);								
		a.colSpan = "16";
		a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
		a.className='text-center';
		document.getElementById("oldownervaluecheck").value=1;
	}
	resetoldownerdetails();

}



function RemoveAndAddOwnerold()
{
	var table = document.getElementById("oldownerTable");

	var rowCount = table.rows.length;
	
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
			
				
				}
		


	} 
	}	}








function backForm(request,dashid)
{
	// document.getElementById("dashboardId").value=dashid;
	
	 //document.getElementById("request").value=request;
	 
	// var loginid = document.getElementById('loginId').value;	 
	 
var encodeddashid = btoa(dashid);
	 document.saveform.dashboardId.value = encodeddashid; 
    
     
     var encodedrequest = btoa(request);
	 document.saveform.request.value = encodedrequest; 
    
		document.saveform.action="ACLandViewController";
			document.saveform.submit();


	}
function addBata(tableID){
	
		if(document.getElementById('bata').value == ""){
		alert("ILFS Technologies: Please Enter Bata Khatian No.");
		document.getElementById('bata').focus();
		return false;
	}

		var Batano = document.getElementById("bata").value;
    	var finalBataArray = document.getElementsByName("bataIdarr");
 
    	
    	if(document.getElementById('rowcountidentifyBata').value == ""){
    		
    		for (var i = 0; i < finalBataArray.length; i++) {
    			if(finalBataArray[i].value == Batano ){
    				alert("ILFS Technologies:Bata Khatian Should not be duplicate");
    				document.getElementById("bata").focus();
    				return false;
    			}
    		}
    	}else{
    		for (var i = 0; i < finalBataArray.length; i++) {
    			var HidId = document.getElementById('rowcountidentifyBata').value ;
    			var originalId = finalBataArray[i].id.split("@")[1];
    			if(finalBataArray[i].value == Batano && HidId != originalId ){
    				alert("ILFS Technologies: Bata Khatian Should not be duplicate");
    				document.getElementById("bata").focus();
    				return false;
    			}
    		}
    	}
	
/*
		var finalrowcntafterdel = 0;
        if(document.getElementById('rowcountidentifyBata').value != "") {
			  var rowtodel = document.getElementById('rowcountidentifyBata').value;
			  finalrowcntafterdel = editRowBata('tbl_bata',rowtodel);	  
			  }
		
		var rowCount = 0;
    	var table=document.getElementById(tableID);	
    	 if(document.getElementById('rowcountidentifyBata').value != "") {
        	 rowCount= document.getElementById('rowcountidentifyBata').value;
        	 }else{
        	 rowCount=table.rows.length;  	 
        	 }*/
    	var table=document.getElementById(tableID);	
    	var size=document.getElementById('batasize').value;
    	var batacheck=document.getElementById('batacheck').value;

    	   if(size=='0' || batacheck==1){
    		   table.deleteRow(1);
    	   }
    	 rowCount=table.rows.length;  	 
        var row=table.insertRow(rowCount);	
        
        document.getElementById('batarowcount').value=row;
    var batacount = document.getElementById('bata').value;
    var cell1=row.insertCell(0);
	var element1 = document.createElement("input");
	var bata = document.getElementById('bata').value;
	cell1.innerHTML =bata+'<input type="hidden" id="bataHidden@'+rowCount+'" name="bataIdarr" value="'+bata+'";">';
	
	
	    var cell2=row.insertCell(1);

		cell2.className = 'padding_0 text-left';
		cell2.innerHTML = '<span style="padding:3px; display:block; width:100%;  solid #9cb2d2;"><img src="./images/edit.png" class="editIcon" id=\'editBata@'+ rowCount+'\' onclick="EditBataDetails(this.id); return false;" /></span>'+
    	'<input type="hidden" id="BeditHidden'+rowCount+'" name="BeditHidden" value="'+converBanglaToNumeric(bata)+'";">'
    	+'<input type="hidden" id="BataFlag'+rowCount+'" name="BataFlag" value="added">'
    	+'<input type="hidden" id="BataValueEdited'+rowCount+'" name="BataValueEdited" value="">'
    	+'<input type="hidden" id="seq'+rowCount+'" name="seq" value="">';
		
		var cell3=row.insertCell(2);
		cell3.className="text-left";
		cell3.innerHTML ='<span style="padding:3px; display:block; width:100%;"><img src="./images/removeIcon.png" class="editIcon" id=\'deleteBata@'+ rowCount+'\' onclick="deleteRowForBata(this.id,0); return false;" /></span>';
		table.rows[rowCount].className = "success";
	document.getElementById('tbl_bata').style.display = "table";
	document.getElementById('bataKhatianDiv').style.display = "block";
	document.getElementById('batacheck').value="";
	//document.getElementById('rowcountidentify').value = ""; 
	document.getElementById('batasize').value="";
   clearBataDetails();
    return true;
}
/*function editRowBata(tableid,rowCount){
	var table=document.getElementById(tableid);
	var rowcountt=table.rows.length;
	table.deleteRow(rowCount);	
    var retrow = rowcountt-1;
    document.getElementById("rowcountidentifyBata").value = rowCount;
    return retrow;
    } 
	*/
	
function clearBataDetails(){
	document.getElementById('bata').value = "";
	document.getElementById('rowcountidentifyBata').value ="";
	document.getElementById("editingflag").value="";
$("#bataButtion").show();
$("#updateButtion").hide();
}
function EditBataDetails(id)	
{
	clearBataDetails();
	var row = id.split("@")[1];
	document.getElementById("batarowcount").value=row;
	var flag = document.getElementById("BataFlag" + row).value;

	if(flag=="edited")
		{
		var val = document.getElementById("BataValueEdited"+row).value;
		}else
			var val = document.getElementById("BeditHidden"+row).value;
	document.getElementById("editingflag").value="1";
	document.getElementById('rowcountidentifyBata').value= row;
	
	document.getElementById('bata').value = converToBanglaNumeric(val);
	document.getElementById('bata').focus();
     $("#updateButtion").show();
     $("#bataButtion").hide();
     
	$("#inputFillBataKhatian").show();
}
function updateBata(tableID){
	debugger;
	if(document.getElementById('bata').value == ""){
		alert("ILFS Technologies: Please Enter Bata Khatian No.");
		document.getElementById('bata').focus();
		return false;
	}

		var Batano = document.getElementById("bata").value;
    	var finalBataArray = document.getElementsByName("bataIdarr");
 
    	var editrow=document.getElementById('batarowcount').value;
    	/*if(document.getElementById('rowcountidentifyBata').value == ""){
    		
    		for (var i = 0; i < finalBataArray.length; i++) {
    			if(finalBataArray[i].value == Batano ){
    				alert("ILFS Technologies:Bata Khatian Should not be duplicate");
    				document.getElementById("bata").focus();
    				return false;
    			}
    		}
    	}else{*/
    		for (var i = 0; i < finalBataArray.length; i++) {
    			var HidId = document.getElementById('rowcountidentifyBata').value ;
    			var originalId = finalBataArray[i].id.split("@")[1];
    			if(finalBataArray[i].value == Batano && HidId != originalId ){
    				alert("ILFS Technologies: Bata Khatian Should not be duplicate");
    				document.getElementById("bata").focus();
    				return false;
    			}
    		}
    	
    
    	var table=document.getElementById(tableID);	
      var bata = document.getElementById('bata').value;
	table.rows[editrow].cells[0].innerHTML=bata
	+'<input type="hidden" id="bataHidden@'+editrow+'" name="bataIdarr" value="'+bata+'";">';
	table.rows[editrow].className = "danger";

var flag=document.getElementById("BataFlag"+editrow ).value;
	

	if(flag=='added')
		{
	document.getElementById("BeditHidden" + editrow).value =  converBanglaToNumeric(bata);
	document.getElementById("BataFlag" + editrow).value = "added";
	
		}
if(flag=='existing'|| flag=='edited')
	{
	
	document.getElementById("BataValueEdited" + editrow).value =  converBanglaToNumeric(bata);
	document.getElementById("BataFlag" + editrow).value = "edited";
	
	}
document.getElementById('rowcountidentifyBata').value= "";
document.getElementById("editingflag").value="";
$("#updateButtion").hide();
$("#bataButtion").show();

   clearBataDetails();
    return true;
}
function deleteRowForBata(id,seq){

		if(document.getElementById('editingflag').value !=""){
			alert("Can not delete while Editing.");
			return false;
		}
	
		
		   var table = document.getElementById("tbl_bata");
			
			 var dltRowcount = id.split("@")[1];
		
			 var batano=document.getElementById("BeditHidden"+dltRowcount).value;
	 		var valueflag = document.getElementById("BataFlag" + dltRowcount).value;

			if (confirm("are you sure you want to delete") == true) {
				if (valueflag == 'existing'||valueflag == 'edited') {
					debugger;
				var deletedexistingbata = document
						.getElementById("deletedexistingBata").value;
		
				if (deletedexistingbata == "")
					document.getElementById("deletedexistingBata").value = batano+"@"+seq;
				else
					document.getElementById("deletedexistingBata").value = deletedexistingbata
							+ "#" + bata+"@"+seq;

				table.deleteRow(dltRowcount);
				var rowlength = table.rows.length;

				for ( var i = dltRowcount; i < rowlength; i++) {
					var tempRow = parseInt(i) + 1;

					document.getElementById("editBata@" + tempRow).id = "editBata@"
							+ i;
					document.getElementById("BeditHidden" + tempRow).id = "BeditHidden"
							+ i;
					document.getElementById("BataFlag" + tempRow).id = "BataFlag"
							+ i;
					document.getElementById("BataValueEdited" + tempRow).id = "BataValueEdited"
						+ i;
					document.getElementById("bataHidden@" + tempRow).id = "bataHidden@"
						+ i;
					document.getElementById("seq" + tempRow).id = "seq"
						+ i;
					
					document.getElementById("deleteBata@" + tempRow).id = "deleteBata@"
						+ i;
					
				}

				}else {

				table.deleteRow(dltRowcount);
				var rowlength = table.rows.length;
				for ( var i = dltRowcount; i < rowlength; i++) {
					var tempRow = parseInt(i) + 1;
					document.getElementById("editBata@" + tempRow).id = "editBata@"
						+ i;
				document.getElementById("BeditHidden" + tempRow).id = "BeditHidden"
						+ i;
				document.getElementById("BataFlag" + tempRow).id = "BataFlag"
						+ i;
				document.getElementById("BataValueEdited" + tempRow).id = "BataValueEdited"
					+ i;
				document.getElementById("bataHidden@" + tempRow).id = "bataHidden@"
					+ i;
				document.getElementById("seq" + tempRow).id = "seq"
					+ i;
				document.getElementById("deleteBata@" + tempRow).id = "deleteBata@"
					+ i;
				}

			}
		} 
			var rowCount = table.rows.length;
			if(rowCount=='1'){
				var row = table.insertRow(rowCount);
				var a=row.insertCell(0);
				//row.insertCell(1);								
				a.colSpan = "3";
				a.textContent = "অনুরূপ কোনো রেকর্ড পাওয়া যায় নাই !";
				a.className='text-center';
				document.getElementById("batacheck").value=1;
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
function updateIdOld(dltRowcount,rowlength)
{
debugger;	
for ( var i = dltRowcount; i < rowlength; i++) {
	var tempRow = parseInt(i) + 1;
	document.getElementById("olddeleteowner@" + tempRow).id = "olddeleteowner@"
		+ i;
document.getElementById("deleteoldOwnerhidden@" + tempRow).id = "deleteoldOwnerhidden@"
		+ i;
document.getElementById("addedoldflag@" + tempRow).id = "addedoldflag@"
		+ i;
document.getElementById("editoldHidden@" + tempRow).id = "editoldHidden@"
		+ i;

document.getElementById("editHiddenoldAddress@" + tempRow).id = "editHiddenoldAddress@"
	+ i;
document.getElementById("editHiddenoldowner@" + tempRow).id = "editHiddenoldowner@"
	+ i;
document.getElementById("editHiddenoldownerAddress@" + tempRow).id = "editHiddenoldownerAddress@"
	+ i;

document.getElementById("oldownername@" + tempRow).id = "oldownername@"
	+ i;
document.getElementById("oldownerid@" + tempRow).id = "oldownerid@"
	+ i;
document.getElementById("oldaddressid@" + tempRow).id = "oldaddressid@"
	+ i;
document.getElementById("oldsequence@" + tempRow).id = "oldsequence@"
	+ i;
document.getElementById("oldrelationid@" + tempRow).id = "oldrelationid@"
	+ i;
document.getElementById("oldrowcount@" + tempRow).id = "oldrowcount@"
	+ i;
document.getElementById("oldownerShipid@" + tempRow).id = "oldownerShipid@"
	+ i;
document.getElementById("oldrelsame" + tempRow).id = "oldrelsame"
	+ i;
document.getElementById("oldshsame" + tempRow).id = "oldshsame"
	+ i;
document.getElementById("editOld@" + tempRow).id = "editOld@"
	+ i;

document.getElementById("addrowNSymbol@" + tempRow).id = "addrowNSymbol@"
	+ i;
document.getElementById("addrowNSymbol1@" + tempRow).id = "addrowNSymbol1@"
	+ i;
document.getElementById("addrowNSymbol2@" + tempRow).id = "addrowNSymbol2@"
	+ i;
document.getElementById("addrowNSymbol3@" + tempRow).id = "addrowNSymbol3@"
	+ i;
document.getElementById("addrowNSymbol4@" + tempRow).id = "addrowNSymbol4@"
	+ i;
document.getElementById("addrowNSymbol5@" + tempRow).id = "addrowNSymbol5@"
	+ i;
document.getElementById("addrowNSymbol6@" + tempRow).id = "addrowNSymbol6@"
	+ i;
document.getElementById("addrowNSymbol7@" + tempRow).id = "addrowNSymbol7@"
	+ i;
document.getElementById("ownerNSymbol"+tempRow).id = "ownerNSymbol"
	+ i;
}

	}
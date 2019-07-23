	var textId = "";
	$(document).ready(function(){
	$(document).mousemove(function(e){
           mouseX = e.pageX;
           mouseY = e.pageY;
           //To Get the relative position
           if( this.offsetLeft !=undefined)
             mouseX = e.pageX - this.offsetLeft;
           if( this.offsetTop != undefined)
             mouseY = e.pageY; - this.offsetTop;

           if(mouseX < 0)
                mouseX =0;
           if(mouseY < 0)
               mouseY = 0;

           windowWidth  = $(window).width()+$(window).scrollLeft();
           windowHeight = $(window).height()+$(window).scrollTop();
   });

    $(".symbolIcon").click(function(){
    	
    	/*if(document.getElementById("shareCheck").checked == true ||  document.getElementById("ownerShareTypeid").value == "3"||document.getElementById("ownershare").value != "" ||document.getElementById("saven").value != ""){
    		
    		return false;
    	}*/
    	
if( document.getElementById("shareCheck").checked == true||document.getElementById("ownershare").value != ""||document.getElementById("ownerShareTypeid").value == "3"|| document.getElementById("seven").value != ""){
    		
    		return false;
    	}
    	
       $(".symbolPan").toggle();
	   
	   var popupWidth  = $(".symbolPan").outerWidth();
      var popupHeight =  $(".symbolPan").outerHeight();

      if(mouseX+popupWidth > windowWidth)
        popupLeft = mouseX-popupWidth;
      else
       popupLeft = mouseX;

      if(mouseY+popupHeight > windowHeight)
        popupTop = mouseY-popupHeight-15;
      else
        popupTop = mouseY+15; 

    if( popupLeft < $(window).scrollLeft()){
     popupLeft = $(window).scrollLeft();
    }

    if( popupTop < $(window).scrollTop()){
     popupTop = $(window).scrollTop();
    }

     if(popupLeft < 0 || popupLeft == undefined)
           popupLeft = 0;
      if(popupTop < 0 || popupTop == undefined)
           popupTop = 0;
	   $(".symbolPan").offset({top:popupTop,left:popupLeft});
   
       textId = this.id;
    });


	
	
	
	var content = "<table id='table' class='symabolTable'>";
	var imgCount=0;
	content+="<tr id='row1'><th id='prev' class='prev'> << </th><th colspan='3' style='background:none;' id='rowTH1'> Symbol(#০০-#২২)</th><th id='next' class='next'>>></th></tr>";
	
for(var i=1; i<6; i++){
content+="<tr>";
for(var j=1; j<6; j++){
	if(imgCount<10){
		content += "<td><img src='images/0"+imgCount+".png' id='0"+imgCount+"' class='symbols' /></td>";
		imgCount++;
	}
	else if(imgCount<23){
		content += "<td><img src='images/"+imgCount+".png' id='"+imgCount+"' class='symbols' /></td>";
		imgCount++;
	}
	else
	break;
}
content+="</tr>";
}
content += "</table>";


 content += "<table id='table1' class='symabolTable1' style='display:none;'>";
	var imgCount1=100;
	content+="<tr id='row2'><th id='prev1' class='prev1'> << </th><th colspan='3' style='background:none;' id='rowTH1'> Symbol(%০০-%২০)</th><th id='next1' class='next1'>>></th></tr>";
	
for(var i=1; i<6; i++){
content+="<tr>";
for(var j=1; j<6; j++){
	if(imgCount1<121){
		content += "<td width='20px'><img src='images/"+imgCount1+".png' id='"+imgCount1+"' class='symbols' /></td>";
		imgCount1++;
	}
	
}
content+="</tr>";
}
content+= "</table>";


$('.symbolPan').html(content);

	$(".next").click(function(){
	$('.symabolTable').hide();
	$('.symabolTable1').show();
	
   });
   
   $(".prev1").click(function(){
   $('.symabolTable1').hide();
	$('.symabolTable').show();
	
   });
$(".symbols").click(function(){
	
	var name = $("#"+textId).val();
	var id = event.target.id.toString().length;
	if(id==2){
	var symbol = '#';
    var id1= symbol + event.target.id;
	}
   else if(id==3){
   var symbol = '%';
    var id1= symbol + event.target.id.substr(1);
   }
	if(name.length >= 24){
		alert("Maximum 8 symbols are allowed");
		return false;
	}
	
	name+= id1;

	$("#"+textId).val(converToBanglaNumeric(name));
	$("#"+textId).blur();
	
	});



$(document).mouseup(function (e)
{
   var container = $(".symbolPan");

   if (!container.is(e.target) // if the target of the click isn't the container...
       && container.has(e.target).length === 0) // ... nor a descendant of the container
   {
       container.hide();
   }
});
});
	
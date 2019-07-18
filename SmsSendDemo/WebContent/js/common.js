/*$.getScript("Verhoeff.js");*/

/*function vhCheck(val)
 {
 var strVal = val;
 if (strVal.length < 12) // Minimum length.
 return false;
 return strVal.verhoeffCheck();
 };
 */
function ConfirmForDeletion() {
	if (confirm("Are you sure you want to delete this record!")) {
		document.getElementById("delConfirm").value = "true";
		return true;
	} else
		document.getElementById("delConfirm").value = "false";
	return false;
}
/* Added by Harit Grover */
function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    document.getElementById("error").style.display = ret ? "none" : "inline";
   // alert("Please  number.");
    return ret;
}
 

/*


 Added by Harit Grover 
function isNumber(evt) {

	var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
		    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)){
		        alert("Please provide details in numeric");
		    	return false;
}
		    return true;
		}    


*/
function checklimit(ctrl, minVal, maxVal, str) {
	if (ctrl.value != "") {
		if (ctrl.value > maxVal || ctrl.value < minVal) {
			alert("Not a valid " + str)
			window.event.keyCode = 0
			return false;
		}
	}

}

function checkSpecialKeys(e) {
	if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38
			&& e.keyCode != 39 && e.keyCode != 40)
		return false;
	else
		return true;
}
function checkNumber(ctrl, digitBeforePoint, digitAfterPoint) {
	var arrVal = ctrl.value.split(".")
	if (digitAfterPoint == 0) {
		if (ctrl.value.length >= digitBeforePoint) {
			window.event.keyCode = 0
			return false;
		}
	} else if (digitAfterPoint > 0) {
		if (arrVal.length == 1) {
			if (arrVal[0].length == digitBeforePoint
					&& window.event.keyCode != 46) {
				window.event.keyCode = 0
				return false;
			}
		} else if (arrVal.length == 2) {
			if (window.event.keyCode == 46) {
				window.event.keyCode = 0
				return false;
			}
			if (arrVal[1].length > digitAfterPoint) {
				window.event.keyCode = 0
				return false;
			}
		}
	}
	var curLoc = (GetCursorLocation(ctrl))
	var ch = window.event.keyCode
	if (ch == 46 && digitAfterPoint == 0) {
		CallDiv(ctrl.id, "Dot(.) not allowed. Please enter numeric value only");
		window.event.keyCode = 0
		return false;
	} else if (ch == 46) {
		return true;
	} else if (ch == 45 && curLoc == 0 && ctrl.value.search("-") < 0) {
		return true;
	} else if (isNaN(String.fromCharCode(ch)) || ch == 32)// .toString()+String.fromCharCode(ch)
	{
		CallDiv(ctrl.id, "Not a number. Please enter numeric value only");
		window.event.keyCode = 0
		return false;
	}
}
function GetCursorLocation(CurrentTextBox) {
	var CurrentSelection, FullRange, SelectedRange, LocationIndex = -1;
	if (typeof CurrentTextBox.selectionStart == "number") {
		LocationIndex = CurrentTextBox.selectionStart;
	} else if (document.selection && CurrentTextBox.createTextRange) {
		CurrentSelection = document.selection;
		if (CurrentSelection) {
			SelectedRange = CurrentSelection.createRange();
			FullRange = CurrentTextBox.createTextRange();
			FullRange.setEndPoint("EndToStart", SelectedRange);
			LocationIndex = FullRange.text.length;
		}
	}
	return LocationIndex;
}
function checkDot(ctl) {
	if (ctl.value == "")
		return false;
	if (ctl.value == ".")
		ctl.value = "";
	else
		ctl.value = eval(ctl.value);
}
function formatNumber(ctl) {
	if (ctl.value != "") {
		ctl.value = parseFloat(ctl.value).toFixed(2);
	}
}
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
var divTag = document.createElement("div");
function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [ curleft, curtop ];
}

function CallDiv(ctrl, msg) {

	var pos = findPos(document.getElementById(ctrl));
	divTag.id = "divDyn";
	divTag.innerHTML = "";
	divTag.className = "formError";
	divTag.style.left = pos[0] - 1 + "px";
	divTag.style.top = pos[1] - 31 + "px";
	divTag.style.textAlign = "left";
	divTag.style.padding = "2px 5px 2px 5px";
	divTag.style.visibility = "visible";
	divTag.style.position = "absolute";
	divTag.style.zIndex = "999";
	divTag.style.width = "260px";
	// divTag.style.min-width = "250px";
	// divTag.style.min-width = "320px";
	divTag.style.opacity = "0.87";

	var AA = document.createElement('div');
	AA.className = 'formErrorContent';
	AA.innerHTML = msg;
	divTag.appendChild(AA);

	var iDivA = document.createElement('div');
	iDivA.className = 'formErrorArrow';

	var A = document.createElement('div');
	A.className = 'line10';
	iDivA.appendChild(A);
	var B = document.createElement('div');
	B.className = 'line9';
	iDivA.appendChild(B);
	var C = document.createElement('div');
	C.className = 'line8';
	iDivA.appendChild(C);
	var D = document.createElement('div');
	D.className = 'line7';
	iDivA.appendChild(D);
	var E = document.createElement('div');
	E.className = 'line6';
	iDivA.appendChild(E);
	var F = document.createElement('div');
	F.className = 'line5';
	iDivA.appendChild(F);
	var G = document.createElement('div');
	G.className = 'line4';
	iDivA.appendChild(G);
	var H = document.createElement('div');
	H.className = 'line3';
	iDivA.appendChild(H);
	var I = document.createElement('div');
	I.className = 'line2';
	iDivA.appendChild(I);
	var J = document.createElement('div');
	J.className = 'line1';
	iDivA.appendChild(J);

	divTag.appendChild(iDivA);

	document.body.appendChild(divTag);
	setTimeout("HideCtrl()", 100000);
	if (document.getElementById(ctrl).addEventListener) {
		document.getElementById(ctrl).addEventListener("keydown", HideCtrl,
				false);
		document.getElementById(ctrl).addEventListener("change", HideCtrl,
				false);
		document.getElementById(ctrl).addEventListener("focusout", HideCtrl,
				false);
	} else if (document.getElementById(ctrl).attachEvent) {
		document.getElementById(ctrl).attachEvent('onkeydown', HideCtrl);
		document.getElementById(ctrl).attachEvent('onchange', HideCtrl);
		document.getElementById(ctrl).attachEvent('onfocusout', HideCtrl);
	}
}

function HideCtrl() {
	divTag.style.visibility = "hidden";

}
function CheckMinMaxLength(ctrl, minLength, maxLength, errMsg) {
	if (document.getElementById(ctrl)) {
		var lengthVal = trim(document.all(ctrl).value, " ").length
		if (lengthVal < minLength || lengthVal > maxLength) {
			CallDiv(ctrl, errMsg);
			document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}

// ///////////////////----------Yuvraj-''''''''''''''''''
function checkTextAreaMaxLength(ctrl, maxLength, errMsg) {
	// alert(4)
	if (document.getElementById(ctrl)) {
		var lengthVal = trim(document.all(ctrl).value, " ").length
		if (lengthVal > maxLength) {
			CallDiv(ctrl, errMsg);
			document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}

function validateDate(ctrl, msg) {
	if (document.getElementById(ctrl)) {
		if (trim(document.getElementById(ctrl).value, " ") == "dd-Mon-yyyy"
				|| trim(document.getElementById(ctrl).value, " ") == "") {
			CallDiv(ctrl, msg + " can not be left blank")
			document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}

function validateDateOfDdl(ctrl, msg) {
	if (document.getElementById(ctrl + "_ddlDay").value == "00"
			|| document.getElementById(ctrl + "_ddlMonth").value == "---"
			|| document.getElementById(ctrl + "_ddlYear").value == "0000") {
		CallDiv(ctrl, msg + " can not be left blank")
		document.getElementById(ctrl + "_ddlDay").focus();
		return false;
	} else
		return true;
}
function is_notmatch(ctrl1, ctrl2, msg) {
	if (document.getElementById(ctrl2)) {
		if (trim(document.getElementById(ctrl1).value, " ") != trim(document
				.getElementById(ctrl2).value, " ")) {
			CallDiv(ctrl2, msg)
			document.getElementById(ctrl2).value = ""
			if (document.getElementById(ctrl2).disabled == false)
				document.getElementById(ctrl2).focus();
			return false;
		}
	}
	return true;
}
function isBlank(ctrl, msg) {
	if (document.getElementById(ctrl)) {
		if (trim(document.getElementById(ctrl).value, " ") == "") {
			CallDiv(ctrl, msg + " can not be left blank")
			document.getElementById(ctrl).value = ""
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}
function isZero(ctrl, msg) {
	if (document.getElementById(ctrl)) {
		if (trim(document.getElementById(ctrl).value, " ") == "0") {
			CallDiv(ctrl, msg + " can not be left blank")
			document.getElementById(ctrl).value = "0"
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}
// d==========================================================================
function isalphabets(ctrl, msg) {
	var ch = 0
	correct = false
	ch = (window.event.keyCode)
	ch = parseInt(ch)
	if (document.getElementById(ctrl)) {
		if (ch != 0) {
			if ((ch < 65 || ch > 90) && (correct == false))
				if (ch < 97 || ch > 122) // between 'a' & 'z'
				{
					if (ch != 32 && ch != 46) // space allowed
					{
						CallDiv(ctrl, msg + "Only alphabates are allowed")
						document.getElementById(ctrl).value = ""
						if (document.getElementById(ctrl).disabled == false)
							document.getElementById(ctrl).focus();
						window.event.keyCode = 0;
					}
				}
		}
	}
	return true;
}
function isBlankNumber(ctrl, msg) {
	if (document.getElementById(ctrl)) {
		if (trim(document.getElementById(ctrl).value, " ") == ""
				|| parseFloat(trim(document.getElementById(ctrl).value, " ")) == 0
				|| trim(document.getElementById(ctrl).value, " ") == ".") {
			CallDiv(ctrl, msg + " can not be left blank");
			document.getElementById(ctrl).value = ""
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
	}
	return true;
}

function isSelected(ctrl, msg) {
	if (document.getElementById(ctrl)
			&& document.getElementById(ctrl).value == "") {
		CallDiv(ctrl, "Please Select " + msg);
		document.getElementById(ctrl).focus();
		return false;
	}
	if (document.getElementById(ctrl)
			&& document.getElementById(ctrl).value == "0") {
		CallDiv(ctrl, "Please Select " + msg);
		document.getElementById(ctrl).focus();
		return false;
	}
	return true;
}

function compareDates(minDate, maxDate, errMsg) {
	// date format = 31/Jan/2009 dd/Mon/yyyy
	minDate = getDateString(minDate)
	maxDate = getDateString(maxDate)
	date1 = minDate.split("/")
	minDt = new Date(date1[2], date1[1] - 1, date1[0])
	date1 = maxDate.split("/")
	maxDt = new Date(date1[2], date1[1] - 1, date1[0])
	if (minDt > maxDt) {
		alert(errMsg)
		return false;
	} else
		return true;
	return false
}

function getDateString(dt) {
	// converting from dd-Mon-yyyy format to dd/mm/yyyyy

	var arrDt = dt.split("-")

	if (arrDt[1].length > 2) {
		return arrDt[0] + "/" + getMonthNumber(arrDt[1]) + "/" + arrDt[2]
	} else {
		return arrDt[0] + "/" + arrDt[1] + "/" + arrDt[2]
	}
}

function MonthName(t) {
	arr_mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
			'Sep', 'Oct', 'Nov', 'Dec');

	return arr_mon[t];

}
function getMonthNumber(mn) {
	if (mn == "Jan")
		return "01"
	else if (mn == "Feb")
		return "02"
	else if (mn == "Mar")
		return "03"
	else if (mn == "Apr")
		return "04"
	else if (mn == "May")
		return "05"
	else if (mn == "Jun")
		return "06"
	else if (mn == "Jul")
		return "07"
	else if (mn == "Aug")
		return "08"
	else if (mn == "Sep")
		return "09"
	else if (mn == "Oct")
		return "10"
	else if (mn == "Nov")
		return "11"
	else if (mn == "Dec")
		return "12"
}

function compareDatesWithTime(minDate, maxDate, errMsg) {
	// date format = 31/01/2009 24:00
	// if Date format is 31-Jan-2009 23:59
	if (minDate.indexOf("-") > 0) {
		var dt = minDate.split("-")
		minDate = dt[0] + "/" + getMonthNumber(dt[1]) + "/" + dt[2]
		var dt = maxDate.split("-")
		maxDate = dt[0] + "/" + getMonthNumber(dt[1]) + "/" + dt[2]
	}
	dtTime = minDate.split(" ")
	date1 = dtTime[0].split("/")
	time1 = dtTime[1].split(":")
	minDt = new Date(date1[2], date1[1] - 1, date1[0], time1[0], time1[1])

	dtTime = maxDate.split(" ")
	date1 = dtTime[0].split("/")
	time1 = dtTime[1].split(":")
	maxDt = new Date(date1[2], date1[1] - 1, date1[0], time1[0], time1[1])

	if (minDt > maxDt) {
		alert(errMsg)
		return false;
	} else
		return true;
	return false
}

function UL(act) {
	if (act == "over")
		window.event.srcElement.style.cursor = "hand"
	else
		window.event.srcElement.style.cursor = "none"
}
arr_month = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
arr_days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
var mm1, mm;

function isDate(val) {
	dt = val
	arr_mon = new Array("", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
			"Aug", "Sep", "Oct", "Nov", "Dec")
	dd = dt.substring(0, dt.indexOf("-"))
	mm1 = dt.substring(dt.indexOf("-") + 1, dt.lastIndexOf("-"))
	for (i = 1; i < 13; i++) {
		if (mm1.toUpperCase().indexOf(arr_mon[i].toUpperCase(), 0) >= 0) {
			mm = i;
			break;
		}
	}

	yy = dt.substring(dt.lastIndexOf("-") + 1, dt.length)
	if (dd < 10)
		dd = "0" + dd
	if (mm < 10)
		mm = "0" + mm
	dt = dd + "." + mm + "." + yy
	arr_dt = dt.split(".")

	if (parseInt(arr_dt[2], 10))
		checkLeap(arr_dt[2])

	if ((arr_dt[1] < 1) || (arr_dt[1] > 12)) {
		msg = "Invalid Work Order Date."
		// alert(msg)
		return false;
	}

	for (i = 0; i < 12; i++) {
		if (arr_month[i] == arr_dt[1]) {
			if ((arr_dt[0] > arr_days[i]) || (arr_dt[0] < 1)) {
				msg = "Invalid Work Order Date."
				return false;
			}
		}
	}
	return true;
}

// ---------Check Leap Year----------

function checkLeap(year) {
	if ((eval(year) % eval(4)) == 0) {
		if ((eval(year) % eval(100)) == 0) {
			if ((eval(year) % eval(400)) == 0) {
				arr_days[1] = 29
			} else {
				arr_days[1] = 28
			}
		} else {
			arr_days[1] = 29
		}
	} else {
		arr_days[1] = 28
	}
}


function capital() {
	// var temp =event.srcElement.id ;
	// alert(temp)
	// document.all(temp).value=document.all(temp).value.toUpperCase();
}

function checkAllkey() {
	checkAlphabets()
	capital()
}
function checkAllkey1() {
	checkAlphanumeric()
	capital()
}

function checkAlphanumeric(func_Name) {
	var ch = 0, intexist = 0
	correct = false
	ch = (window.event.keyCode)
	ch = parseInt(ch)

	if (ch != 0) {
		if ((ch < 48 || ch > 57) && (correct == false)) // numeric(0
		// to 9)
		{
			if (ch < 65 || ch > 90)
				if (ch < 97 || ch > 122) // 'a' to 'z'
					if ((ch != 32) && (ch != 44) && (ch != 46) && (ch != 45)
							&& (ch != 40) && (ch != 41) && (ch != 47)) // space
					{
						alert("Only alphabets and numerals and '.' , ',' ,'(' , ')' , '/' , '-' are allowed");

						window.event.keyCode = 0;
					}
		}
	}
}

/*
 * ==================================================================
 * Purpose:Alphabates-To check key pressed (0-9) Input : function name which is
 * called when ENTER key is pressed Called by: keypress event
 * ====================================================================
 */

function checkAlphabets(func_Name) {
	var ch = 0
	correct = false
	ch = (window.event.keyCode)
	ch = parseInt(ch)
	if (ch != 0) {
		if ((ch < 65 || ch > 90) && (correct == false))
			if (ch < 97 || ch > 122) // between 'a' & 'z'
			{
				if (ch != 32 && ch != 46) // space allowed
				{
					alert("Only alphabates are allowed");
					window.event.keyCode = 0;
				}
			}
	}
}
function checknumeric(func_Name) {
	correct = false
	ch = (window.event.keyCode);

	if ((ch < "48" || ch > "57") && (correct == false)) // between 0 & 9
	{
		if (ch != 44 && ch != 45 && ch != 40 && ch != 41) {
			alert("Only numerics and - , ( ) are allowed");
			window.event.keyCode = 0;
		}
	}
}

function allValidChars(email) {
	var parsed = true;
	var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
	for ( var i = 0; i < email.length; i++) {
		var letter = email.charAt(i).toLowerCase();
		if (validchars.indexOf(letter) != -1)
			continue;
		parsed = false;
		break;
	}
	return parsed;
}

// --------------------------------------Special Character
// Validation--------------------------------

function checkSpecialChar() {
	var ch = 0, intexist = 0
	correct = false
	ch = (window.event.keyCode)
	ch = parseInt(ch)
	if (ch != 0) {
		if ((ch != 44) && (ch != 45) && (ch != 95) && (ch != 47) && (ch != 92)) {
			alert("Only Special Characters are allowed '-' or '_' or ',' or '/' or '\'");
			window.event.keyCode = 0;
		}
	}
}
// ------------------------------------------Validation for Check
// Lengh---------------------------------
function CheckLength(ctl, length) {
	var lengthVal = new String();
	if (document.all(ctl)) {
		lengthVal = document.all(ctl).value
		if (lengthVal.length > length) {
			lengthVal = lengthVal.substring(0, length)
			document.all(ctl).value = lengthVal
			return false;
		}
	}
}
/**
 * DHTML date validation script. Courtesy of SmartWebby.com
 * (http://www.smartwebby.com/dhtml/)
 */
// Declaring valid date character, minimum year and maximum year
var dtCh = "/";
var minYear = 1900;
var maxYear = 2100;

function isInteger(s) {
	var i;
	for (i = 0; i < s.length; i++) {
		// Check that current character is number.
		var c = s.charAt(i);
		if (((c < "0") || (c > "9")))
			return false;
	}
	// All characters are numbers.
	return true;
}
function stripCharsInBag(s, bag) {
	var i;
	var returnString = "";
	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (bag.indexOf(c) == -1)
			returnString += c;
	}
	return returnString;
}
function daysInFebruary(year) {
	return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29
			: 28);
}
function DaysArray(n) {
	for ( var i = 1; i <= n; i++) {
		this[i] = 31
		if (i == 4 || i == 6 || i == 9 || i == 11) {
			this[i] = 30
		}
		if (i == 2) {
			this[i] = 29
		}
	}
	return this
}
function isDate1(dtStr) {
	var daysInMonth = DaysArray(12)
	var pos1 = dtStr.indexOf(dtCh)
	var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
	var strMonth = dtStr.substring(pos1 + 1, pos2)
	var strDay = dtStr.substring(0, pos1)
	var strYear = dtStr.substring(pos2 + 1)
	strYr = strYear
	if (strDay.charAt(0) == "0" && strDay.length > 1)
		strDay = strDay.substring(1)
	if (strMonth.charAt(0) == "0" && strMonth.length > 1)
		strMonth = strMonth.substring(1)
	for ( var i = 1; i <= 3; i++) {
		if (strYr.charAt(0) == "0" && strYr.length > 1)
			strYr = strYr.substring(1)
	}
	month = parseInt(strMonth)
	day = parseInt(strDay)
	year = parseInt(strYr)
	if (pos1 == -1 || pos2 == -1) {
		alert("The date format should be : dd/mm/yyyy")
		return false
	}
	if (strMonth.length < 1 || month < 1 || month > 12) {
		alert("Please enter a valid month")
		return false
	}
	if (strDay.length < 1 || day < 1 || day > 31
			|| (month == 2 && day > daysInFebruary(year))
			|| day > daysInMonth[month]) {
		alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
		alert("Please enter a valid 4 digit year between " + minYear + " and "
				+ maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh, pos2 + 1) != -1
			|| isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
		if (dtStr.value != "dd/mm/yyyy") {
			alert("Please enter a valid date")
			return false
		}

	}
	return true
}
function ValidateForm(ctrl) {
	var dt = document.all(ctrl)
	if (dt.value != "") {
		if (dt.value != "dd/mm/yyyy") {
			if (isDate1(dt.value) == false) {
				dt.value = "dd/mm/yyyy"
				return false
			}
		}
	}
	return true
}
// ---------------Function For Adding Slash To Dates Automatically
function AppendSlashOnDate(ctl) {
	var lengthVal = new String();
	if ((ctl.value.length % 2 == 0 && ctl.value.length != 0 && ctl.value.length < 3)
			|| (ctl.value.length % 2 != 0 && ctl.value.length > 3)
			&& (ctl.value.length < 6)) {
		ctl.value = ctl.value + "/"
	}
}
function ClearDate(ctl) {
	if (ctl.value.trim() == "dd/mm/yyyy") {
		ctl.value = ""
	}
}
function ClearDate1(ctl) {
	if (ctl.value.trim() == "dd/MMM/yyyy") {
		ctl.value = ""
	}
}
function FillDate1(ctl) {
	if (ctl.value.trim() == "") {
		ctl.value = "dd/MMM/yyyy"
	}
}
function FillDate(ctl) {
	if (ctl.value.trim() == "") {
		ctl.value = "dd/mm/yyyy"
	}
}
function compareDatesWithSlash(minDate, maxDate, errMsg) {
	date1 = minDate.split("/")
	minDt = new Date(date1[2], date1[1] - 1, date1[0])
	date1 = maxDate.split("/")
	maxDt = new Date(date1[2], date1[1] - 1, date1[0])
	if (minDt > maxDt) {
		alert(errMsg)
		return false;
	} else
		return true;
	return false
}

// ////============
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
		alert("Special Characters are not allowed ....!!")
		return false;
	}
	return false;
}

// /////========================================
function letternumberIFSC(e) {
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
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789").indexOf(keychar) > -1))
		return true;
	else {
		alert("Please Do Not Use This Character....!!")
		return false;
	}
	return false;
}

// //==============With - & /==================
function letternumber2(e) {
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
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789-/ ").indexOf(keychar) > -1))
		return true;
	else {
		alert("Please Do Not Use This Character....!!")
		return false;
	}
	return false;
}

// =================Number With Decimal
function checkNumberNew(ctrl, digitBeforePoint, digitAfterPoint) {
	if (digitAfterPoint == 0) {
		if (ctrl.value.length >= digitBeforePoint) {
			window.event.keyCode = 0
			return false;
		}
	} else if (digitAfterPoint > 0) {
		var arrVal = ctrl.value.split(".")
		if (arrVal.length == 1) {
			if (arrVal[0].length == digitBeforePoint
					&& window.event.keyCode != 46) {
				window.event.keyCode = 0
				return false;
			}
		} else if (arrVal.length == 2) {
			if (window.event.keyCode == 46) {
				window.event.keyCode = 0
				return false;
			}
			if (arrVal[1].length >= digitAfterPoint) {
				window.event.keyCode = 0
				return false;
			}
		}
	}

	var ch = window.event.keyCode
	if (ch == 47) {
		alert("Not a number. Please enter numiric value only")
		window.event.keyCode = 0
		return false;
	}
	if (ch == 46 && digitAfterPoint == 0) {
		alert("Dot(.) not allowed. Please enter numiric value only")
		window.event.keyCode = 0
		return false;
	}
	if (!(ch > 47 && ch < 58) && digitAfterPoint == 0) {
		alert("Not a number. Please enter numiric value only")
		window.event.keyCode = 0
		return false;
	} else if (!(ch > 45 && ch < 58)) {
		alert("Not a number. Please enter numiric value only")
		window.event.keyCode = 0
		return false;
	}
}

// ==========Numbers Only====================
function NumbersOnly(e) {
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
		// CallDiv(ctrl.id,"Dot(.) not allowed. Please enter numeric value
		// only");
		alert("Not a Number....!!")
		return false;
	}
	return false;
}


function checkAlphanumericdiv(ctrl, msg) {
	if (document.getElementById(ctrl)) {
		var ch = 0, intexist = 0
		correct = false
		ch = (window.event.keyCode)
		ch = parseInt(ch)

		if (ch != 0) {
			if ((ch < 48 || ch > 57) && (correct == false)) // numeric(0
			// to 9)
			{
				if (ch < 65 || ch > 90) {
					if (ch < 97 || ch > 122) { // 'a' to 'z'
						if ((ch != 32) && (ch != 44) && (ch != 46)
								&& (ch != 45) && (ch != 40) && (ch != 41)
								&& (ch != 47)) // space
						{
							// document.getElementById(ctrl).value = "";
							CallDiv(ctrl,
									"Only alphabets and numerals and '.' , ',' ,'(' , ')' , '/' , '-' are allowed");
							if (document.getElementById(ctrl).disabled == false) {
								document.getElementById(ctrl).focus();
							}
							return false;
						}
					}
				}
			}
		}
	}
	return true;
}
// /////----------Email Check-----------////////////
function letternumberemail(e) {
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
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789_@.").indexOf(keychar) > -1))
		return true;
	else {
		alert("Please Do Not Use This Character....!!")
		return false;
	}
	return false;
}

function letteraddress(e) {
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
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789-/.,() ").indexOf(keychar) > -1))
		return true;
	else {
		alert("Please Do Not Use This Character....!!")
		return false;
	}
	return false;
}

// ////====================Only alphabets=======================
function isalphabetsOnly(e) {
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
	else if ((("abcdefghijklmnopqrstuvwxyz ,/@_-").indexOf(keychar) > -1))
		return true;
	else {
		alert("Alphabets Only")
		return false;
	}
	return false;
}

// //==============erturn DatePicker Value
function GetDateValueFromDdl(ctrl) {
	return document.getElementById(ctrl + "_ddlDay").value
			+ "-"
			+ document.getElementById(ctrl + "_ddlMonth")(
					document.getElementById(ctrl + "_ddlMonth").selectedIndex).text
			+ "-" + document.getElementById(ctrl + "_ddlYear").value
}

function validateDate2(ctrl, msg) {
	if (document.getElementById(ctrl + "_ddlDay")) {
		if (document.getElementById(ctrl + "_ddlDay").value == "00"
				|| document.getElementById(ctrl + "_ddlMonth").value == "00"
				|| document.getElementById(ctrl + "_ddlMonth").value == "---"
				|| document.getElementById(ctrl + "_ddlYear").value == "0000") {
			alert("" + msg + " can't be left blank.")
			document.getElementById(ctrl + "_ddlDay").focus();
			return false;
		}
	}
	return true;
}

// ////====================Only alphabets=======================

function isalphabetsOnlyNew(ctrl, msg) {
	if (document.getElementById(ctrl)) {

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
		if ((key == null) || (key == 0) || (key == 8) || (key == 9)
				|| (key == 13) || (key == 27))
			return true;
		else if ((("abcdefghijklmnopqrstuvwxyz0123456789. ,/@_")
				.indexOf(keychar) > -1))
			return true;
		else {
			CallDiv(ctrl, "Please enter Aplphabets only");
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
		return false;
	}
	return true;
}

function isNumbersOnlyf(e, ctrl, msg) {
	if (document.getElementById(ctrl)) {

		var key;
		var keychar;
		key = e.which ? e.which : e.keyCode;
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		if ((key == null) || (key == 0) || (key == 8) || (key == 9)
				|| (key == 13) || (key == 27))
			return true;
		else if ((("0123456789").indexOf(keychar) > -1))
			return true;
		else {
			CallDiv(ctrl, "Dot(.) not allowed. Please enter numeric value only");
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
		return false;
	}
	return true;
}

function email_checkf(e, ctrl, msg) {
	if (document.getElementById(ctrl)) {
		var key;
		var keychar;
		key = e.which ? e.which : e.keyCode;
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		if (key == 8 || key == 46) {
			return true;
		}
		if ((key == null) || (key == 0) || (key == 8) || (key == 9)
				|| (key == 13) || (key == 27))
			return true;
		else if ((("abcdefghijklmnopqrstuvwxyz0123456789_@.-").indexOf(keychar) > -1))
			return true;
		else {
			CallDiv(ctrl, "Please Do Not Use This Character....!!");
			if (document.getElementById(ctrl).disabled == false)
				document.getElementById(ctrl).focus();
			return false;
		}
		return false;
	}
	return true;
}

function checkAlphanumericf(e, ctrl) {
	var ch = 0;
	intexist = 0;
	correct = false;
	ch = e.keyCode ? e.keyCode : e.which;
	ch = parseInt(ch)
	if (ch == 8 || ch == 46) {
		return true;
	}
	if (ch != 0) {
		if ((ch < 48 || ch > 57) && (correct == false)) // numeric(0 to
		// 9)
		{
			if (ch < 65 || ch > 90)
				if (ch < 97 || ch > 122 || ch == 13) // 'a' to 'z'
					if ((ch != 32) && (ch != 44) && (ch != 46) && (ch != 45)
							&& (ch != 40) && (ch != 41) && (ch != 47)) // space
					{
						CallDiv(ctrl.id,
								"Only alphabets and numerals and '.' , ',' ,'(' , ')' , '/' , '-' are allowed ");
						ctrl.focus();
						return false;
					}
		}
	}
}

/* Ajax methods added by avdhesh */

function ajaxRequest() {
	var activexmodes = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ]; // activeX
	// versions
	// to check
	// for in IE
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

/**
 * Common Method to call a jsp and paste it in a div by ajax without chakri
 * Please only use.... dont alter!!!
 * 
 * 
 * 
 */

function loadData(url, div, params) {
	/*alert(url);
	alert(div);
	alert(params);*/
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					console.log("xml.responseText:" + xml.responseText);

					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("An error has occured making the request");
				}
			}
		};

		xml.open("POST", url, true);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

}
function loadDataAS(url, div, params) {

	try {
		alert(url);
		alert(params);
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					console.log("xml.responseText:" + xml.responseText);

					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("An error has occured making the request");
				}
			}
		};

		xml.open("POST", url, true);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

}
/* load waiting image and remove waiting image */

OffsetX = 10; // MODIFY THESE VALUES TO
OffsetY = 2; // CHANGE THE POSITION.
var old = (document.all);
var skn = (document.all);
var iex = (document.all);
var yyy = -1000;
var ns4 = document.layers;
var ns6 = document.getElementById && !document.all;
var ie4 = document.all;

function loader(chakri) {

	// alert(chakri);

	if (ns4) {
		skn = document.chakri;
	} else if (ns6) {
		// alert("value1111"+document.getElementById(chakri).style);
		skn = document.getElementById(chakri).style;
	} else if (ie4) {
		skn = document.getElementById(chakri).style;
	} else {
		skn = document.getElementById(chakri).style;
	}

	if (ns4) {
		document.captureEvents(Event.MOUSEMOVE);
	} else {
		skn.visibility = "visible";
		skn.display = "none";
	}

	skn.left = 480;
	skn.top = 230;

	var content = "<div id='dialog-overlay'>" + "<div class='preloader'>"
			+ " <img src='images/AnimatedProgressBar.gif'>" + "</div>"
			+ "</div>";

	// var content = "<div id='dialog-overlay'>rkgrlegk</div>";

	$('#dialog-overlay').fadeTo(800, 0.3);

	yyy = OffsetY;
	if (ns4) {
		skn.document.write(content);
		skn.document.close();
		skn.visibility = "visible";
	}
	if (ns6) {
		document.getElementById(chakri).innerHTML = content;
		skn.display = '';
	}
	if (ie4) {
		document.getElementById(chakri).innerHTML = content;
		skn.display = '';
		skn.position = 'absolute';
	}

	$('#dialog-overlay').fadeTo(400, 0.6);

}

function remove_popup(chakri) {

	// alert(chakri);
	yyy = -1000;
	if (ns4) {
		skn.visibility = "hidden";
	} else if (ns6 || ie4)
		skn.display = "none";
	document.getElementById(chakri).style.visibility = '';
}

function saveMukhyaData() {
	if (validateMukhiya()) {
		var xml = new ajaxRequest();
		var villagePanchayat = "";
		var villageEnglish = "";
		var villageHindi = "";
		var blokSamiti = "";
		var ward = "";
		var streetEnglish = "";
		var streetHindi = "";
		var landMarkEnglish = "";
		var landMarkHindi = "";
		var city = "";
		var district = "";
		if (document.getElementById("rural").checked) {
			isRural = "Y";
		} else {
			isRural = "N";
		}

		if (isRural == 'Y') {
			landMarkEnglish = document.getElementById("landMarkEnglish").value;
			villagePanchayat = document.getElementById("villagePanchayat").value;
			villageEnglish = document.getElementById("villageEnglish").value;
			landMarkHindi = document.getElementById("landMarkHindi").value;
			streetEnglish = document.getElementById("streetEnglish").value;
			streetHindi = document.getElementById("streetHindi").value;
			blokSamiti = document.getElementById("blokSamiti").value;
			district = document.getElementById("district_").value;
		} else {
			ward = document.getElementById("ward").value;
			city = document.getElementById("city").value;
			streetEnglish = document.getElementById("streetEnglish").value;
			streetHindi = document.getElementById("streetHindi").value;
			landMarkEnglish = document.getElementById("landMarkEnglish").value;
			landMarkHindi = document.getElementById("landMarkHindi").value;
			district = document.getElementById("district").value;

		}

		var hofAdhaar = "";

		if (document.getElementById("hofAdhaar") != null) {
			hofAdhaar = document.getElementById("hofAdhaar").value;
		}

		var eId = "";
		if (document.getElementById("eId") != null) {
			eId = document.getElementById("eId").value;
		}
		// alert("hofAdhaar:" + hofAdhaar);
		var hId = document.getElementById("hId").value;
		var bhamashahId = document.getElementById("bhamashahId").value;

		var hofEngName = document.getElementById("hofEngName").value;
		var hofHindiName = document.getElementById("hofHindiName").value;

		var casteEng = document.getElementById("casteEng").value;
		var familyCategory = document.getElementById("familyCategory").value;
		var casteHind = document.getElementById("casteHind").value;

		var ownerType = document.getElementById("ownerType").value;
		var landType = document.getElementById("landType").value;
		var ques1 = document.getElementById("ques1").value;

		var houseNoEnglish = document.getElementById("houseNoEnglish").value;
		// var apartmentEnglish = document.getElementById("apartmentEnglish").value;

		var apartmentEnglish = "";
		// var villagePanchayat = document.getElementById("villagePanchayat").value;
		// var tehsil = document.getElementById("tehsil").value;
		var tehsil = "";

		var state = ""; // document.getElementById("state").value;
		var pincode = document.getElementById("pincode").value;
		var telephone = document.getElementById("telephone").value;

		var mobileNo = document.getElementById("mobileNo").value;
		var email = document.getElementById("email").value;
		var houseType = document.getElementById("houseType").value;

		var houseSituation = document.getElementById("houseSituation").value;
		var familyBankName = document.getElementById("familyBankName").value;
		var familyBankAccount = document.getElementById("familyBankAccount").value;

		var futureAddress = document.getElementById("futureAddress").value;
		var familyRelationWithHof = document
				.getElementById("familyRelationWithHof").value;
		var nameEnglish = "";// document.getElementById("nameEnglish").value;

		var nameHindi = "";// document.getElementById("nameHindi").value;
		var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
		var motherNameEnglish = document.getElementById("motherNameEnglish").value;
		var spouseNameEnglish = document.getElementById("spouseNameEnglish").value;
		var spouseNameHindi = document.getElementById("spouseNameHindi").value;
		var motherNameHindi = document.getElementById("motherNameHindi").value;
		var fatherNameHindi = document.getElementById("fatherNameHindi").value;

		var gasConnNo = document.getElementById("gasConnNo").value;
		var rationCard = document.getElementById("rationCard").value;
		var rationCardNo = document.getElementById("rationCardNo").value;
		//alert(rationCardNo);
		var electricityAccNo = document.getElementById("electricityAccNo").value;
		var waterAccNo = document.getElementById("waterAccNo").value;
		var gasAgencyName = document.getElementById("gasAgencyName").value;
		var bplNo = document.getElementById("bplNo").value;
		var gandhiCardNo = document.getElementById("gandhiCardNo").value;
		var healthInsuranceNo = document.getElementById("healthInsuranceNo").value;
		var specialRemarks = document.getElementById("specialRemarks").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var residenceCategory = document.getElementById("residenceCategory").value;
		normalizeTextArea("addressEng");
		normalizeTextArea("addressHnd");
		var addressEng = document.getElementById("addressEng").value;
		var addressHnd = document.getElementById("addressHnd").value;
		addressEng = addressEng.trim();
		addressHnd = addressHnd.trim();

		var localityEnglish = document.getElementById("localityEnglish").value;
		var localityHindi = document.getElementById("localityHindi").value;

		var houseNoHindi = document.getElementById("houseNoHindi").value;

		var maritalStatus = document.getElementById("maritalStatus").value;
		var education = document.getElementById("education").value;
		var gender = document.getElementById("gender").value;
		var specialPlan = document.getElementById("specialPlan").value;
		var familyBankBranch = document.getElementById("familyBankBranch").value;
		var dob = document.getElementById("dob").value;
		var isimagesaved = document.getElementById("isImageSaved").value;
		var voterId = document.getElementById("voterId").value;
		var panCardNo = document.getElementById("panCardNo").value;
		var dlId = document.getElementById("dlId").value;
		var passportId = document.getElementById("passportId").value;
		var nprId = document.getElementById("nprId").value;
		var pppNo = document.getElementById("pppNo").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var employementRegNo = document.getElementById("employementRegNo").value;
		var foodSecurityBillNumber = document
				.getElementById("foodSecurityBillNumber").value;
		var age = document.getElementById("age").value;
		var ageFlag = document.getElementById("ageFlag").value;
		// written by suraj
		var disabilityCatEng = document.getElementById("disabilityCatEng").value;
		// written by suraj

		/*if(confirm('???? ?? ???? ??? ???? ????? ?? ?')== true)
			{
		 */
		var params = "hId=" + hId + "&bhamashahId=" + bhamashahId
				+ "&hofEngName=" + hofEngName + "&gasConnNo=" + gasConnNo
				+ "&landMarkEnglish=" + landMarkEnglish + "&landMarkHindi="
				+ landMarkHindi + "&rationCard=" + rationCard
				+ "&rationCardNo=" + rationCardNo + "&electricityAccNo="
				+ electricityAccNo + "&waterAccNo=" + waterAccNo
				+ "&gasAgencyName=" + gasAgencyName + "&bplNo=" + bplNo
				+ "&gandhiCardNo=" + gandhiCardNo + "&healthInsuranceNo="
				+ healthInsuranceNo + "&specialRemarks=" + specialRemarks
				+ "&annualIncome=" + annualIncome + "&residenceCategory="
				+ residenceCategory + "&hofHindiName=" + hofHindiName
				+ "&casteEng=" + casteEng + "&familyCategory=" + familyCategory
				+ "&casteHind=" + casteHind + "&ownerType=" + ownerType
				+ "&landType=" + landType + "&ques1=" + ques1
				+ "&houseNoEnglish=" + houseNoEnglish + "&apartmentEnglish="
				+ apartmentEnglish + "&streetEnglish=" + streetEnglish
				+ "&casteHind=" + casteHind + "&villageEnglish="
				+ villageEnglish + "&villageHindi=" + villageHindi
				+ "&villagePanchayat=" + villagePanchayat + "&tehsil=" + tehsil
				+ "&district=" + district + "&state=" + state + "&pincode="
				+ pincode + "&telephone=" + telephone + "&mobileNo=" + mobileNo
				+ "&email=" + email + "&houseType=" + houseType
				+ "&houseSituation=" + houseSituation + "&familyBankName="
				+ familyBankName + "&familyBankAccount=" + familyBankAccount
				+ "&futureAddress=" + futureAddress + "&familyRelationWithHof="
				+ familyRelationWithHof + "&nameEnglish=" + nameEnglish
				+ "&nameHindi=" + nameHindi + "&fatherNameEnglish="
				+ fatherNameEnglish + "&motherNameEnglish=" + motherNameEnglish
				+ "&spouseNameEnglish=" + spouseNameEnglish
				+ "&spouseNameHindi=" + spouseNameHindi + "&isRural=" + isRural
				+ "&blokSamiti=" + blokSamiti + "&ward=" + ward
				+ "&motherNameHindi=" + motherNameHindi + "&fatherNameHindi="
				+ fatherNameHindi + "&hofAdhaar=" + hofAdhaar + "&addressEng="
				+ addressEng + "&addressHnd=" + addressHnd
				+ "&localityEnglish=" + localityEnglish + "&localityHindi="
				+ localityHindi + "&houseNoHindi=" + houseNoHindi
				+ "&streetHindi=" + streetHindi + "&maritalStatus="
				+ maritalStatus + "&education=" + education + "&gender="
				+ gender + "&specialPlan=" + specialPlan + "&familyBankBranch="
				+ familyBankBranch + "&dob=" + dob + "&city=" + city + "&eId="
				+ eId + "&voterId=" + voterId + "&panCardNo=" + panCardNo
				+ "&dlId=" + dlId + "&passportId=" + passportId + "&nprId="
				+ nprId + "&pppNo=" + pppNo + "&govEmpId=" + govEmpId
				+ "&employementRegNo=" + employementRegNo
				+ "&foodSecurityBillNumber=" + foodSecurityBillNumber + "&age="
				+ age + "&disabilityCatEng=" + disabilityCatEng + "&ageFlag="+ageFlag;
		loader('chakri');
				//alert(params);
		xml.onreadystatechange = function() {
			/*
			 * if (!chakri == "") { loader(chakri); }
			 */
			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert('Data saved successfully');
					if (xml.responseText == "1") {
						if (document.getElementById("length").value != "0") {
							ViewMemberDataForEdit(1);
						} else {
							finalSave();
						}

					} else {
						alert('There is some  proplem in saving kindly check it.');
					}

				} else {
					alert('There is some  proplem in saving kindly check it.');
				}

				/*
				 * if (!chakri == "") { remove_popup(chakri); }
				 */
			}
		};

		xml.open("POST", "UpdateMukhiyaDataAfterEdit", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);

		/*}*/
	}

}

/* Re Edit*/
function saveMukhyaDataEMEdit() {
	if (validateMukhiyaEM()) {
		var xml = new ajaxRequest();
		var villagePanchayat = "";
		var villageEnglish = "";
		var villageHindi = "";
		var blokSamiti = "";
		var ward = "";
		var streetEnglish = "";
		var streetHindi = "";
		var landMarkEnglish = "";
		var landMarkHindi = "";
		var city = "";
		var district = "";
		if (document.getElementById("rural").checked) {
			isRural = "Y";
		} else {
			isRural = "N";
		}

		if (isRural == 'Y') {
			landMarkEnglish = document.getElementById("landMarkEnglish").value;
			villagePanchayat = document.getElementById("villagePanchayat").value;
			villageEnglish = document.getElementById("villageEnglish").value;
			landMarkHindi = document.getElementById("landMarkHindi").value;
			streetEnglish = document.getElementById("streetEnglish").value;
			streetHindi = document.getElementById("streetHindi").value;
			blokSamiti = document.getElementById("blokSamiti").value;
			district = document.getElementById("district_").value;
		} else {
			ward = document.getElementById("ward").value;
			city = document.getElementById("city").value;
			streetEnglish = document.getElementById("streetEnglish").value;
			streetHindi = document.getElementById("streetHindi").value;
			landMarkEnglish = document.getElementById("landMarkEnglish").value;
			landMarkHindi = document.getElementById("landMarkHindi").value;
			district = document.getElementById("district").value;

		}

		var hofAdhaar = "";

		if (document.getElementById("hofAdhaar") != null) {
			hofAdhaar = document.getElementById("hofAdhaar").value;
		}

		var eId = "";
		if (document.getElementById("eId") != null) {
			eId = document.getElementById("eId").value;
		}
		// alert("hofAdhaar:" + hofAdhaar);
		var hId = document.getElementById("hId").value;
		var bhamashahId = document.getElementById("bhamashahId").value;

		var hofEngName = document.getElementById("hofEngName").value;
		var hofHindiName = document.getElementById("hofHindiName").value;

		var casteEng = document.getElementById("casteEng").value;
		var familyCategory = document.getElementById("familyCategory").value;
		var casteHind = document.getElementById("casteHind").value;

		var ownerType = document.getElementById("ownerType").value;
		var landType = document.getElementById("landType").value;
		var ques1 = document.getElementById("ques1").value;

		var houseNoEnglish = document.getElementById("houseNoEnglish").value;
		// var apartmentEnglish = document.getElementById("apartmentEnglish").value;

		var apartmentEnglish = "";
		// var villagePanchayat = document.getElementById("villagePanchayat").value;
		// var tehsil = document.getElementById("tehsil").value;
		var tehsil = "";

		var state = ""; // document.getElementById("state").value;
		var pincode = document.getElementById("pincode").value;
		var telephone = document.getElementById("telephone").value;

		var mobileNo = document.getElementById("mobileNo").value;
		var email = document.getElementById("email").value;
		var houseType = document.getElementById("houseType").value;

		var houseSituation = document.getElementById("houseSituation").value;
		var familyBankName = document.getElementById("familyBankName").value;
		var familyBankAccount = document.getElementById("familyBankAccount").value;

		var futureAddress = document.getElementById("futureAddress").value;
		var familyRelationWithHof = document
				.getElementById("familyRelationWithHof").value;
		var nameEnglish = "";// document.getElementById("nameEnglish").value;

		var nameHindi = "";// document.getElementById("nameHindi").value;
		var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
		var motherNameEnglish = document.getElementById("motherNameEnglish").value;
		var spouseNameEnglish = document.getElementById("spouseNameEnglish").value;
		var spouseNameHindi = document.getElementById("spouseNameHindi").value;
		var motherNameHindi = document.getElementById("motherNameHindi").value;
		var fatherNameHindi = document.getElementById("fatherNameHindi").value;

		var gasConnNo = document.getElementById("gasConnNo").value;
		var rationCard = document.getElementById("rationCard").value;
		var rationCardNo = document.getElementById("rationCardNo").value;
		//alert(rationCardNo);
		var electricityAccNo = document.getElementById("electricityAccNo").value;
		var waterAccNo = document.getElementById("waterAccNo").value;
		var gasAgencyName = document.getElementById("gasAgencyName").value;
		var bplNo = document.getElementById("bplNo").value;
		var gandhiCardNo = document.getElementById("gandhiCardNo").value;
		var healthInsuranceNo = document.getElementById("healthInsuranceNo").value;
		var specialRemarks = document.getElementById("specialRemarks").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var residenceCategory = document.getElementById("residenceCategory").value;
		normalizeTextArea("addressEng");
		normalizeTextArea("addressHnd");
		var addressEng = document.getElementById("addressEng").value;
		var addressHnd = document.getElementById("addressHnd").value;
		addressEng = addressEng.trim();
		addressHnd = addressHnd.trim();

		var localityEnglish = document.getElementById("localityEnglish").value;
		var localityHindi = document.getElementById("localityHindi").value;

		var houseNoHindi = document.getElementById("houseNoHindi").value;

		var maritalStatus = document.getElementById("maritalStatus").value;
		var education = document.getElementById("education").value;
		var gender = document.getElementById("gender").value;
		var specialPlan = document.getElementById("specialPlan").value;
		var familyBankBranch = document.getElementById("familyBankBranch").value;
		var dob = document.getElementById("dob").value;
		var isimagesaved = document.getElementById("isImageSaved").value;
		var voterId = document.getElementById("voterId").value;
		var panCardNo = document.getElementById("panCardNo").value;
		var dlId = document.getElementById("dlId").value;
		var passportId = document.getElementById("passportId").value;
		var nprId = document.getElementById("nprId").value;
		var pppNo = document.getElementById("pppNo").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var employementRegNo = document.getElementById("employementRegNo").value;
		var foodSecurityBillNumber = document
				.getElementById("foodSecurityBillNumber").value;
		var age = document.getElementById("age").value;
		// written by suraj
		var disabilityCatEng = document.getElementById("disabilityCatEng").value;
		// written by suraj
		var reqName = document.getElementById("requesterName").value;
		var reqMobile = document.getElementById("requestermobile").value;
		var reqMail = document.getElementById("requestermail").value;

		/*if(confirm('???? ?? ???? ??? ???? ????? ?? ?')== true)
			{
		 */
		var params = "hId=" + hId + "&bhamashahId=" + bhamashahId
				+ "&hofEngName=" + hofEngName + "&gasConnNo=" + gasConnNo
				+ "&landMarkEnglish=" + landMarkEnglish + "&landMarkHindi="
				+ landMarkHindi + "&rationCard=" + rationCard
				+ "&rationCardNo=" + rationCardNo + "&electricityAccNo="
				+ electricityAccNo + "&waterAccNo=" + waterAccNo
				+ "&gasAgencyName=" + gasAgencyName + "&bplNo=" + bplNo
				+ "&gandhiCardNo=" + gandhiCardNo + "&healthInsuranceNo="
				+ healthInsuranceNo + "&specialRemarks=" + specialRemarks
				+ "&annualIncome=" + annualIncome + "&residenceCategory="
				+ residenceCategory + "&hofHindiName=" + hofHindiName
				+ "&casteEng=" + casteEng + "&familyCategory=" + familyCategory
				+ "&casteHind=" + casteHind + "&ownerType=" + ownerType
				+ "&landType=" + landType + "&ques1=" + ques1
				+ "&houseNoEnglish=" + houseNoEnglish + "&apartmentEnglish="
				+ apartmentEnglish + "&streetEnglish=" + streetEnglish
				+ "&casteHind=" + casteHind + "&villageEnglish="
				+ villageEnglish + "&villageHindi=" + villageHindi
				+ "&villagePanchayat=" + villagePanchayat + "&tehsil=" + tehsil
				+ "&district=" + district + "&state=" + state + "&pincode="
				+ pincode + "&telephone=" + telephone + "&mobileNo=" + mobileNo
				+ "&email=" + email + "&houseType=" + houseType
				+ "&houseSituation=" + houseSituation + "&familyBankName="
				+ familyBankName + "&familyBankAccount=" + familyBankAccount
				+ "&futureAddress=" + futureAddress + "&familyRelationWithHof="
				+ familyRelationWithHof + "&nameEnglish=" + nameEnglish
				+ "&nameHindi=" + nameHindi + "&fatherNameEnglish="
				+ fatherNameEnglish + "&motherNameEnglish=" + motherNameEnglish
				+ "&spouseNameEnglish=" + spouseNameEnglish
				+ "&spouseNameHindi=" + spouseNameHindi + "&isRural=" + isRural
				+ "&blokSamiti=" + blokSamiti + "&ward=" + ward
				+ "&motherNameHindi=" + motherNameHindi + "&fatherNameHindi="
				+ fatherNameHindi + "&hofAdhaar=" + hofAdhaar + "&addressEng="
				+ addressEng + "&addressHnd=" + addressHnd
				+ "&localityEnglish=" + localityEnglish + "&localityHindi="
				+ localityHindi + "&houseNoHindi=" + houseNoHindi
				+ "&streetHindi=" + streetHindi + "&maritalStatus="
				+ maritalStatus + "&education=" + education + "&gender="
				+ gender + "&specialPlan=" + specialPlan + "&familyBankBranch="
				+ familyBankBranch + "&dob=" + dob + "&city=" + city + "&eId="
				+ eId + "&voterId=" + voterId + "&panCardNo=" + panCardNo
				+ "&dlId=" + dlId + "&passportId=" + passportId + "&nprId="
				+ nprId + "&pppNo=" + pppNo + "&govEmpId=" + govEmpId
				+ "&employementRegNo=" + employementRegNo
				+ "&foodSecurityBillNumber=" + foodSecurityBillNumber + "&age="
				+ age + "&disabilityCatEng=" + disabilityCatEng + "&reqName="
				+ reqName + "&reqMobile=" + reqMobile + "&reqMail=" + reqMail;
		loader('chakri');
		//alert(params);
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					if (xml.responseText == "1") {
						remove_popup('chakri');
						alert("Data Saved Successfully");
						window.opener.document.mukhiyaDataForm.action = "getDetailsForUpdate?"
								+ document.getElementById("queryString").value;
						window.opener.document.mukhiyaDataForm.submit();
						window.close();
						/*document.mukhiyaDataForm.action = "RedirectPage";
						document.mukhiyaDataForm.submit();*/

					} else {
						alert('There is some  proplem in saving kindly check it.afdaf');
					}

				} else {
					alert('There is some  proplem in saving kindly check it.adf');
				}

				/*
				 * if (!chakri == "") { remove_popup(chakri); }
				 */
			}
		};

		xml.open("POST", "updateMukhiyaDataAfterEMEdit", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);

		/*}*/
	}

}

function saveDataMemberEAEdit() {
	if (validateMemberDetailsEM()) {
		var xml = new ajaxRequest();

		var hId = document.getElementById("hId").value;
		var bhamashahId = document.getElementById("bhId").value;
		var memberId = document.getElementById("memberId").value;

		// var rdbadharId= document.getElementById("rdbadharId").value;
		var eId = "";
		if (document.getElementById("eId") != null) {
			eId = document.getElementById("eId").value;
		}
		var noneId = "";
		// document.getElementById("noneId").value;

		var aadharId = "";
		if (document.getElementById("aadharId") != null) {
			aadharId = document.getElementById("aadharId").value;
		}
		var nameEnglish = document.getElementById("nameEnglish").value;
		var nameHindi = document.getElementById("nameHindi").value;

		var familyRelationWithHof = document
				.getElementById("familyRelationWithHof").value;
		var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
		var fatherNameHindi = document.getElementById("fatherNameHindi").value;

		var motherNameEnglish = document.getElementById("motherNameEnglish").value;
		var motherNameHindi = document.getElementById("motherNameHindi").value;
		var dob = document.getElementById("dob").value;
		var age = document.getElementById("age").value;

		var gender = document.getElementById("gender").value;
		var maritalStatus = document.getElementById("maritalStatus").value;
		var spouseNameEnglish = document.getElementById("spouseNameEng").value;
		// var spouseNameEnglish =
		// document.getElementById("spouseNameEnglish").value;
		var spouseNameHindi = document.getElementById("spouseNameHnd").value;
		// var spouseNameHindi = document.getElementById("spouseNameHindi").value;
		var education = document.getElementById("education").value;
		var specialPlan = document.getElementById("specialPlan").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var specialRemarks = document.getElementById("specialRemarks").value;
		var residenceCategory = document.getElementById("residenceCategory").value;

		var remarks = document.getElementById("remarks").value;

		var bankBranchNameHindi = document.getElementById("familyBankBranch").value;
		var bankAccountNo = document.getElementById("bankAccountNo").value;
		var panCardNo = document.getElementById("panCardNo").value;

		var dlId = document.getElementById("dlId").value;
		var passportId = document.getElementById("passportId").value;
		var nprId = document.getElementById("nprId").value;

		var incomeRegistration = document.getElementById("incomeRegistration").value;
		var govEmpIdss = document.getElementById("govEmpId").value;
		var socialSecurityNo = "";//document.getElementById("socialSecurityNo").value;

		var mobileNo = document.getElementById("mobileNo").value;
		var voterId = document.getElementById("voterId").value;
		// var familyBankAccount=
		// document.getElementById("familyBankAccount").value;

		var aadharId;//= document.getElementById("aadharId").value;
		if (document.getElementById("aadharId").value == null) {
			aadharId = "";
		}
		var passportId = document.getElementById("passportId").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var bankName = document.getElementById("bankName").value;
		// var bankBranchName= document.getElementById("bankBranchName").value;

		// var bankAccountNo = document.getElementById("bankAccountNo").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var incomeRegistration = document.getElementById("incomeRegistration").value;

		var pinCodeId = "";//document.getElementById("pinCodeId").value;
		var remarks = document.getElementById("remarks").value;
		var incomeRegistration = document.getElementById("incomeRegistration").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var socialSecurityNo = "";//document.getElementById("socialSecurityNo").value;
		var mobileNo = document.getElementById("mobileNo").value;

		var pppNo = document.getElementById("pppNo").value;
		var reqName = document.getElementById("requesterName").value;
		var reqMobile = document.getElementById("requestermobile").value;
		var reqMail = document.getElementById("requestermail").value;

		var params = "hId=" + hId + "&bhamashahId=" + bhamashahId
				+ "&memberId=" + memberId
				// +"&rdbadharId="+rdbadharId
				+ "&eId=" + eId + "&noneId=" + noneId + "&aadharId=" + aadharId
				+ "&socialSecurityNo=" + socialSecurityNo + "&mobileNo="
				+ mobileNo + "&incomeRegistration=" + incomeRegistration
				+ "&govEmpId=" + govEmpId + "&pinCodeId=" + pinCodeId
				+ "&remarks=" + remarks + "&nameEnglish=" + nameEnglish
				+ "&nameHindi=" + nameHindi + "&familyRelationWithHof="
				+ familyRelationWithHof + "&fatherNameEnglish="
				+ fatherNameEnglish + "&fatherNameHindi=" + fatherNameHindi
				+ "&motherNameEnglish=" + motherNameEnglish
				+ "&motherNameHindi=" + motherNameHindi + "&dob=" + dob
				+ "&gender=" + gender + "&maritalStatus=" + maritalStatus
				+ "&spouseNameEnglish=" + spouseNameEnglish
				+ "&spouseNameHindi=" + spouseNameHindi + "&education="
				+ education + "&specialPlan=" + specialPlan + "&annualIncome="
				+ annualIncome + "&specialRemarks=" + specialRemarks
				+ "&residenceCategory=" + residenceCategory + "&remarks="
				+ remarks + "&bankName=" + bankName + "&bankBranchNameHindi="
				+ bankBranchNameHindi + "&bankAccountNo=" + bankAccountNo
				+ "&panCardNo=" + panCardNo + "&dlId=" + dlId + "&passportId="
				+ passportId + "&nprId=" + nprId + "&incomeRegistration="
				+ incomeRegistration + "&govEmpIdss=" + govEmpIdss
				+ "&socialSecurityNo=" + socialSecurityNo + "&mobileNo="
				+ mobileNo + "&voterId=" + voterId
				// +"&familyBankAccount="+familyBankAccount
				+ "&aadharId=" + aadharId + "&annualIncome=" + annualIncome
				+ "&govEmpId=" + govEmpId + "&incomeRegistration="
				+ incomeRegistration + "&passportId=" + passportId + "&pppNo="
				+ pppNo + "&age=" + age + "&reqName=" + reqName + "&reqMobile="
				+ reqMobile + "&reqMail=" + reqMail;
		//alert(params);
		loader('chakri');

		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert('Data save successfully.');
					if (xml.responseText == "2") {
						alert("Data Saved Successfully");
						//document.memberDataForm.action = "RedirectPage";
						//document.memberDataForm.submit();<input type="hidden" value="${map.queryString}" id="queryString"></input>
						window.opener.document.mukhiyaDataForm.action = "getDetailsForUpdate?"
								+ document.getElementById("queryString").value;
						window.opener.document.mukhiyaDataForm.submit();
						window.close();
					} else {
						alert('Data not saved, Kindly check it.');
					}

				} else {
					alert('Data not saved, Kindly check it.');
				}

			}
		};

		xml.open("POST", "UpdateMemberDataAfterEAEdit", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);

	}

}

function finalSaveReEdit() {
	/*
	 * if (document.getElementById("memberId").value == "") { } else { }
	 */

	if (confirm('???? ?? ???? ??? ???? ????? ?? ?') == true) {
		var indexId = document.getElementById("indexId").value;
		var length = document.getElementById("length").value;
		if (length == "0") {
			if (!validateMukhiya())
				return false;
		} else {
			if (!validateMemberDetails())
				return false;
		}
		var params = "bhId=" + document.getElementById("bhId").value
				+ "&length=" + length + "&indexId=" + indexId;//+ "adfcf";
		var xml = new ajaxRequest();
		//loader('chakri');
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					if (xml.responseText == "1") {
						alert('Data saved successfully');
						showSearchPageForReEdit();
					} else if (xml.responseText == "2") {
						alert('Session Timeout, Kindly login again.');
						goToLoginPage();
					} else {
						remove_popup("chakri");
						alert('There is some  proplem in saving kindly check it.');
					}

				} else {
					remove_popup("chakri");
					alert('There is some proplem in saving kindly check it.');
				}

				/*
				 * if (!chakri == "") { remove_popup(chakri); }
				 */
			}

		};

		xml.open("POST", "finalDataSaveREEdit", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
		// document.memberDataForm.action = "finalDataSave";
		// document.memberDataForm.submit();
	} else {
		remove_popup("chakri");
	}
}

function showSearchPageForReEdit() {
	if (document.getElementById("indexId").value == "0") {
		document.mukhiyaDataForm.action = "showSearchPageForREEdit";
		document.mukhiyaDataForm.submit();
	} else {
		document.memberDataForm.action = "showSearchPageForREEdit";
		document.memberDataForm.submit();
	}
}

/*Re Edit*/

function saveDataMember() {
	if (validateMemberDetails()) {
		var xml = new ajaxRequest();

		var hId = document.getElementById("hId").value;
		var bhamashahId = document.getElementById("bhId").value;
		var memberId = document.getElementById("memberId").value;

		// var rdbadharId= document.getElementById("rdbadharId").value;
		var eId = "";
		if (document.getElementById("eId") != null) {
			eId = document.getElementById("eId").value;
		}
		var noneId = "";
		// document.getElementById("noneId").value;

		var aadharId = "";
		if (document.getElementById("aadharId") != null) {
			aadharId = document.getElementById("aadharId").value;
		}
		var nameEnglish = document.getElementById("nameEnglish").value;
		var nameHindi = document.getElementById("nameHindi").value;

		var familyRelationWithHof = document
				.getElementById("familyRelationWithHof").value;
		var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
		var fatherNameHindi = document.getElementById("fatherNameHindi").value;

		var motherNameEnglish = document.getElementById("motherNameEnglish").value;
		var motherNameHindi = document.getElementById("motherNameHindi").value;
		var dob = document.getElementById("dob").value;
		var age = document.getElementById("age").value;

		var gender = document.getElementById("gender").value;
		var maritalStatus = document.getElementById("maritalStatus").value;
		var spouseNameEnglish = document.getElementById("spouseNameEng").value;
		// var spouseNameEnglish =
		// document.getElementById("spouseNameEnglish").value;
		var spouseNameHindi = document.getElementById("spouseNameHnd").value;
		// var spouseNameHindi = document.getElementById("spouseNameHindi").value;
		var education = document.getElementById("education").value;
		var specialPlan = document.getElementById("specialPlan").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var specialRemarks = document.getElementById("specialRemarks").value;
		var residenceCategory = document.getElementById("residenceCategory").value;

		var remarks = document.getElementById("remarks").value;

		var bankBranchNameHindi = document.getElementById("familyBankBranch").value;
		var bankAccountNo = document.getElementById("bankAccountNo").value;
		var panCardNo = document.getElementById("panCardNo").value;

		var dlId = document.getElementById("dlId").value;
		var passportId = document.getElementById("passportId").value;
		var nprId = document.getElementById("nprId").value;

		var incomeRegistration = document.getElementById("incomeRegistration").value;
		var govEmpIdss = document.getElementById("govEmpId").value;
		var socialSecurityNo = "";//document.getElementById("socialSecurityNo").value;

		var mobileNo = document.getElementById("mobileNo").value;
		var voterId = document.getElementById("voterId").value;
		// var familyBankAccount=
		// document.getElementById("familyBankAccount").value;

		var aadharId;//= document.getElementById("aadharId").value;
		if (document.getElementById("aadharId").value == null) {
			aadharId = "";
		}
		var passportId = document.getElementById("passportId").value;

		var annualIncome = document.getElementById("annualIncome").value;
		var bankName = document.getElementById("bankName").value;
		// var bankBranchName= document.getElementById("bankBranchName").value;

		// var bankAccountNo = document.getElementById("bankAccountNo").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var incomeRegistration = document.getElementById("incomeRegistration").value;

		var pinCodeId = "";//document.getElementById("pinCodeId").value;
		var remarks = document.getElementById("remarks").value;
		var incomeRegistration = document.getElementById("incomeRegistration").value;
		var govEmpId = document.getElementById("govEmpId").value;
		var socialSecurityNo = "";//document.getElementById("socialSecurityNo").value;
		var mobileNo = document.getElementById("mobileNo").value;
		var indexId = document.getElementById("indexId").value;
		var length = document.getElementById("length").value;
		var pppNo = document.getElementById("pppNo").value;
		var ageFlag = document.getElementById("ageFlag").value;

		var params = "hId=" + hId + "&bhamashahId=" + bhamashahId
				+ "&memberId=" + memberId
				// +"&rdbadharId="+rdbadharId
				+ "&eId=" + eId + "&noneId=" + noneId + "&aadharId=" + aadharId
				+ "&socialSecurityNo=" + socialSecurityNo + "&mobileNo="
				+ mobileNo + "&incomeRegistration=" + incomeRegistration
				+ "&govEmpId=" + govEmpId + "&pinCodeId=" + pinCodeId
				+ "&remarks=" + remarks + "&nameEnglish=" + nameEnglish
				+ "&nameHindi=" + nameHindi + "&familyRelationWithHof="
				+ familyRelationWithHof + "&fatherNameEnglish="
				+ fatherNameEnglish + "&fatherNameHindi=" + fatherNameHindi
				+ "&motherNameEnglish=" + motherNameEnglish
				+ "&motherNameHindi=" + motherNameHindi + "&dob=" + dob
				+ "&gender=" + gender + "&maritalStatus=" + maritalStatus
				+ "&spouseNameEnglish=" + spouseNameEnglish
				+ "&spouseNameHindi=" + spouseNameHindi + "&education="
				+ education + "&specialPlan=" + specialPlan + "&annualIncome="
				+ annualIncome + "&specialRemarks=" + specialRemarks
				+ "&residenceCategory=" + residenceCategory + "&remarks="
				+ remarks + "&bankName=" + bankName + "&bankBranchNameHindi="
				+ bankBranchNameHindi + "&bankAccountNo=" + bankAccountNo
				+ "&panCardNo=" + panCardNo + "&dlId=" + dlId + "&passportId="
				+ passportId + "&nprId=" + nprId + "&incomeRegistration="
				+ incomeRegistration + "&govEmpIdss=" + govEmpIdss
				+ "&socialSecurityNo=" + socialSecurityNo + "&mobileNo="
				+ mobileNo + "&voterId=" + voterId
				// +"&familyBankAccount="+familyBankAccount
				+ "&aadharId=" + aadharId + "&annualIncome=" + annualIncome
				+ "&govEmpId=" + govEmpId + "&incomeRegistration="
				+ incomeRegistration + "&passportId=" + passportId + "&pppNo="
				+ pppNo + "&age=" + age + "&ageFlag="+ageFlag;
		//alert(params);
		loader('chakri');

		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert('Data save successfully.');
					if (xml.responseText == "1") {
						if (indexId == length && length != "0") {
							finalSave();
						} else {
							ViewMemberDataForEdit(1);
						}
					} else {
						alert('Data not saved, Kindly check it.');
					}

				} else {
					alert('Data not saved, Kindly check it.');
				}

			}
		};

		xml.open("POST", "UpdateMemberDataAfterEdit", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);

	}

}

function loadId(url, id, chakri, params) {

	var check = "";
	var arr = "";
	var str = "";
	var flag = "";
	var bhamaId = document.getElementById('bhamashahId').value
	if (checkBhamashahId(bhamaId, "1")) {

		if (document.getElementById('bhamashahId').value == "") {
			alert("??????? ???? ?????? ????|");
		} else {

			try {

				var xml = ajaxRequest();
				xml.onreadystatechange = function() {
					loader(chakri);
					if (xml.readyState == 4) {

						if (xml.status == 200
								|| window.location.href.indexOf("http") == -1) {
							// alert("xml.responseText:" + xml.responseText);

							arr = xml.responseText;

						} else {
							alert("Please try again");
						}

						remove_popup(chakri);
					}
				};

				xml.open("POST", url, false);
				xml.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xml.send(params);
			} catch (e) {
				alert(e);
			}

			str = arr.split("#");
			check = str[0];
			flag = str[1];

			if (check == 17) {

				alert("Under Re-Editing Process");

			}

			else if (check == 18) {

				alert("Ready for Printing.Cannot Access.");

			}

			else if (check == 25 || flag=="T") {

				hideSpan("mainData");
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????? ???? ?????? ?? ????? ????????? ?? ??? ???? ?? ???? ?? |";
				hideSpan("docBtn");
				
				return false;

			}

			else if (flag == "Y") {

				document.verificationform.action = "mukhiyaDetailsPopulate";
				document.verificationform.submit();
				loader(chakri);

			}

			else if (check == "A" & flag == "N") {

				hideSpan("mainData");

				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "???? ??????? ???? ?????? ??? ??|";
				hideSpan("docBtn");
				return false;
			} else if (flag == "N") {

				hideSpan("mainData");
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????? ???? ?????? ?? QC ???? ?? ?????? ?? ??  ???? ??  ?";
				hideSpan("docBtn");
				return false;

			}

			else if (flag == "F") {

				var z;
				var p;
				if (check == 2 || check == 4) {
					z = confirm("Do you want to RE-QC it? ");

					if (z) {

						document.verificationform.action = "mukhiyaDetailsPopulate";
						document.verificationform.submit();
						loader(chakri);
					}

					else {

					}

				}

				else if (check == 7) {

					p = confirm("Do you want to RE-QC it ,after Verification ? ");

					if (p) {

						document.verificationform.action = "mukhiyaDetailsPopulate";
						document.verificationform.submit();
						loader(chakri);
					}

					else {

					}

				}

				else if (check == 3) {

					alert("This Bhamashah Id is under Editing, Cannot access");

				}

				else if (check == 5) {

					alert("This Bhamashah Id is UnderFreezingProcess, Cannot access");

				} else if (check == 6) {

					alert("This Bhamashah ID is Block Verified, Cannot access");

				}

				else if (check == 10) {

					alert("This record has been rejected by State-Quality Control");

					document.verificationform.action = "mukhiyaDetailsPopulate";
					document.verificationform.submit();
					loader(chakri);

				}

				else if (check == 8 | check == 9 | check == 11 | check == 13) {

					alert("This Bhamashah Id is Under State-QC Process, Cannot access");

				}

				else if (check == 15 | check == 16 | check == 17 | check == 18) {

					alert("Need Re-Editing rights to access");

				}

				else if (check == 12) {

					alert("This Bhamashah Id is under second verification process, Cannot access");

				}

				else if (check == 0 | check == 1 | check == 14) {

					document.verificationform.action = "mukhiyaDetailsPopulate";
					document.verificationform.submit();
					loader(chakri);

				}

				else {

					hideSpan("mainData");

					var fieldError = document.getElementById("messg");
					fieldError.style.display = "inline";
					fieldError.innerHTML = "???? ??????? ???? ?????? ??? ??|";
					hideSpan("docBtn");
					return false;

				}
			}
		}

	}

}

function finalSave() {
	/*
	 * if (document.getElementById("memberId").value == "") { } else { }
	 */

	if (confirm('???? ?? ???? ??? ???? ????? ?? ?') == true) {
		var indexId = document.getElementById("indexId").value;
		var length = document.getElementById("length").value;
		if (length == "0") {
			if (!validateMukhiya())
				return false;
		} else {
			if (!validateMemberDetails())
				return false;
		}
		var params = "bhId=" + document.getElementById("bhId").value
				+ "&length=" + length + "&indexId=" + indexId;//+ "adfcf";
		var xml = new ajaxRequest();
		//loader('chakri');
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					if (xml.responseText == "1") {
						alert('Data saved successfully');
						showSearchPage();
					} else if (xml.responseText == "2") {
						alert('Session Timeout, Kindly login again.');
						goToLoginPage();
					} else {
						remove_popup("chakri");
						alert('There is some  proplem in saving kindly check it.');
					}

				} else {
					remove_popup("chakri");
					alert('There is some proplem in saving kindly check it.');
				}

				/*
				 * if (!chakri == "") { remove_popup(chakri); }
				 */
			}

		};

		xml.open("POST", "finalDataSave", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
		// document.memberDataForm.action = "finalDataSave";
		// document.memberDataForm.submit();
	} else {
		remove_popup("chakri");
	}
}

function loadCaptchaHofFreezeCheck() {

	document.verificationform.action = "mukhiyaDetailsFreezedNext";
	document.verificationform.submit();
	loader('chakri');

}

function loadCaptchaMemberFreeze() {

	document.verificationform.action = "memberDetailsFreezed";
	document.verificationform.submit();
	loader('chakri');

}

function loadReport(url, div, chakri, params) {
	hideSpan(div);
	date1 = document.getElementById('fromDate').value.split("/")
	minDt = new Date(date1[2], date1[1] - 1, date1[0])
	date1 = document.getElementById('toDate').value.split("/")
	maxDt = new Date(date1[2], date1[1] - 1, date1[0])
	if (minDt > maxDt) {
		alert("[From-Date] Cannot be Greater Than [To-Date]")
		return false;
	} else {

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {

				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);

						document.getElementById(div).innerHTML = xml.responseText;
						showSpan(div);

					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
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
}
function openNewWindowforDistrictFamilyCount(id) {
	//display District family count
	var QCVerification = document.getElementById('QCVerification').value;
	var memberCount = document.getElementById('memberCount').value;
	var AadharAndBank = document.getElementById('AadharAndBankValue').value;
	var loginId = document.getElementById('loginId').value;
	var url = 'getUrbanAndRuraFamilyCount?districtId=' + id
			+ '&QCVerification=' + QCVerification + '&memberCount='
			+ memberCount + '&AadharAndBank=' + AadharAndBank + '&loginId='
			+ loginId;
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=1200, height=700');
}
function openNewWindowRuralFamilyCount(id) {
	//display Rural family count
	var QCVerification = document.getElementById('QCVerification').value;
	var memberCount = document.getElementById('memberCount').value;
	var AadharAndBank = document.getElementById('AadharAndBankValue').value;
	var loginId = document.getElementById('loginId').value;
	var districtId = document.getElementById('districtId').value;
	var url = 'getPanchayatFamilyCount?BlockId=' + id + '&districtId='
			+ districtId + '&QCVerification=' + QCVerification
			+ '&memberCount=' + memberCount + '&AadharAndBank=' + AadharAndBank
			+ '&loginId=' + loginId;
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=1200, height=700');
}
function openNewWindowUrbanFamilyCount(cityid) {
	//display city family count
	var QCVerification = document.getElementById('QCVerification').value;
	var memberCount = document.getElementById('memberCount').value;
	var AadharAndBank = document.getElementById('AadharAndBankValue').value;
	var districtId = document.getElementById('districtId').value;
	var loginId = document.getElementById('loginId').value;
	var url = 'getWardFamilyCount?cityId=' + cityid + '&QCVerification='
			+ QCVerification + '&memberCount=' + memberCount
			+ '&AadharAndBank=' + AadharAndBank + '&loginId=' + loginId
			+ '&districtId=' + districtId;
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowDistrict(id, name) {
	// alert("URL:"+url)

	var url = 'getUrbanAndRura?districtId=' + id + '&fromDate='
			+ document.getElementById('distFromDate').value + '&toDate='
			+ document.getElementById('distToDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&districtName='
			+ name;
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowUrban(id, name) {
	// alert("URL:"+url)

	var url = 'getWardReport?cityId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&cityName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window2',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowRural(id, name) {
	// alert("URL:"+url)

	var url = 'getPanchayatReport?blockId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&blockName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window1',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowPanchayat(id, name) {
	// alert("URL:"+url)

	var url = 'getDateWisePanchayatReport?panchayatId=' + id + '&blockId='
			+ document.getElementById('blockId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&GramName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window3',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowWard(id, name) {

	var url = 'getDateWiseWardReport?wardId=' + id + '&cityId='
			+ document.getElementById('cityId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&wardName=' + name;

	//alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window4',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowAfterWard(id) {

	var url = 'getQcListAFterWardReport?date=' + id + '&wardId='
			+ document.getElementById('wardId').value + '&cityId='
			+ document.getElementById('cityId').value + '&districtId='
			+ document.getElementById('districtId').value + '&flagCheck='
			+ document.getElementById('flagCheck').value;

	//	 alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window5',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowAfterGP(id) {

	var url = 'getQcListAFterPanchayatReport?date=' + id + '&panchayatId='
			+ document.getElementById('panchayatId').value + '&blockId='
			+ document.getElementById('blockId').value + '&districtId='
			+ document.getElementById('districtId').value + '&flagCheck='
			+ document.getElementById('flagCheck').value;

	// alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window6',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowAfterGP(id) {

	var url = 'getQcListAFterPanchayatReport?date=' + id + '&panchayatId='
			+ document.getElementById('panchayatId').value + '&blockId='
			+ document.getElementById('blockId').value + '&districtId='
			+ document.getElementById('districtId').value + '&flagCheck='
			+ document.getElementById('flagCheck').value;

	// alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window6',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openTotalWindowPanchayat() {
	// alert("URL:"+url)

	var url = 'getTotalDateWisePanchayatReport?panchayatId='
			+ document.getElementById('panchayatId').value + '&blockId='
			+ document.getElementById('blockId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window7',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openTotalWindowWard() {

	var url = 'getTotalDateWiseWardReport?wardId='
			+ document.getElementById('wardId').value + '&cityId='
			+ document.getElementById('cityId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value;

	//alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window8',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function validateCaseSensitiveEmail(id) {
	var email = document.getElementById(id).value;
	if (email.length != 0) {
		var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

		if (reg.test(email)) {
			return true;
		} else {

			alert('Please Enter Valid Email Address');
			email.value = "";
			email.focus();
			return false;
		}
	} else {

		alert('Please Enter Valid Email Address');
		email.value = "";
		email.focus();
		return false;
	}

}

function aadharValidation(aadharId) {
	var aadharNo = document.getElementById(aadharId).value;
	if (aadharNo.value == "") {
		alert("You didn't enter a aadhar number.");
		aadharNo.value = "";
		aadharNo.focus();
		return false;
	} else if (isNaN(aadharNo.value)) {
		alert("The aadhar number contains illegal characters.");
		aadharNo.value = "";
		aadharNo.focus();
		return false;
	} else if (!(aadharNo.value.length == 10)) {
		alert("Please enter 12 digit aadhar number");
		aadharNo.value = "";
		aadharNo.focus();
		return false;
	}

}

function ValidateMobNumber(mobileNoId) {
	var mobileNo = document.getElementById(mobileNoId).value;

	if (mobileNo.value == "") {
		alert("You didn't enter a mobile  number.");
		mobileNo.value = "";
		mobileNo.focus();
		return false;
	} else if (isNaN(mobileNo.value)) {
		alert("The mobile number contains illegal characters.");
		mobileNo.value = "";
		mobileNo.focus();
		return false;
	} else if (!(mobileNo.value.length == 10)) {
		alert("Please enter 10 digit mobile number.");
		mobileNo.value = "";
		mobileNo.focus();
		return false;
	}

}
function ValidatePinCode(pincodeId) {
	var pinCode = document.getElementById(pincodeId).value;

	if (isNaN(pinCode.value)) {
		alert("The pin number contains illegal characters.");
		pinCode.value = "";
		pinCode.focus();
		return false;
	} else if (!(pinCode.value.length == 6)) {
		alert("Please enter 6 digit mobile no.");
		pinCode.value = "";
		pinCode.focus();
		return false;
	}

}

function ConvertToCamelCase(elementId) {

	var elementValue = document.getElementById(elementId).value;
	// alert("Calleed======capitalize===" + elementValue);
	// if type = all, capitalize first letter of each word
	// if (type === 'all') {
	array = elementValue.toLowerCase().split(' '); // split on spaces
	capitalized = '';

	$.each(array, function(index, value) {
		capitalized += value.charAt(0).toUpperCase() + value.slice(1);

		if (array.length != (index + 1))
			capitalized += ' '; // add a space if not end of array
	});
	document.getElementById(elementId).value = capitalized;
	// }

}

function hideSpan(field) {
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
}

function showSpan(field) {
	//alert("aaa"+field)
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "block";

}

function loadFreezeId(url, id, chakri, params) {

	var check = "";
	var bhamaId = document.getElementById('bhamashahId').value
	if (checkBhamashahId(bhamaId, "3")) {

		if (document.getElementById('bhamashahId').value == "") {

			alert("??????? ???? ?????? ????|");
		} else {

			try {

				var xml = ajaxRequest();
				xml.onreadystatechange = function() {
					loader(chakri);
					if (xml.readyState == 4) {

						if (xml.status == 200
								|| window.location.href.indexOf("http") == -1) {
							// alert("xml.responseText:" + xml.responseText);

							check = xml.responseText;

						} else {
							alert("Please try again");
						}

						remove_popup(chakri);
					}
				};

				xml.open("POST", url, false);
				xml.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xml.send(params);
			} catch (e) {
				alert(e);
			}

			if (check == 25) {

				hideSpan("mainData");
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????? ???? ?????? ?? ????? ????????? ?? ??? ???? ?? ???? ?? |";
				hideSpan("docBtn");
				return false;
			}

			else if (check < 4) {

				alert("This Bhamashah Id is Not Ready For Freezing, Cannot access");

			}

			else if (check == 4 | check == 5 | check == 18) {

				document.verificationform.action = "mukhiyaFreezedDetailsPopulate";
				document.verificationform.submit();
				loader(chakri);

			} else {

				alert("This Bhamashah Id is already verified");

			}

		}
	}
}

function showSearchPage() {
	if (document.getElementById("indexId").value == "0") {
		document.mukhiyaDataForm.action = "showSearchPage";
		document.mukhiyaDataForm.submit();
	} else {
		document.memberDataForm.action = "showSearchPage";
		document.memberDataForm.submit();
	}
}
function validateMukhiya() {
	var xml = new ajaxRequest();
	var hofAdhaar = "";
	//var isRural = "N";
	var district = "";

	if (document.getElementById("rural").checked) {
		isRural = "Y";
	} else {
		isRural = "N";
	}

	if (isRural == 'N') {
		district = document.getElementById("district").value;

	} else {
		district = document.getElementById("district_").value;
	}

	if (document.getElementById("hofAdhaar") != null) {
		hofAdhaar = document.getElementById("hofAdhaar").value;
	}

	var eId = "";

	if (document.getElementById("eId") != null) {
		eId = document.getElementById("eId").value;
	}
	// alert("hofAdhaar:" + hofAdhaar);
	var hId = document.getElementById("hId").value;
	var bhamashahId = document.getElementById("bhamashahId").value;

	var hofEngName = document.getElementById("hofEngName").value;
	var hofHindiName = document.getElementById("hofHindiName").value;

	var casteEng = document.getElementById("casteEng").value;
	var familyCategory = document.getElementById("familyCategory").value;
	var casteHind = ""; //document.getElementById("casteHind").value;

	var ownerType = document.getElementById("ownerType").value;
	var landType = document.getElementById("landType").value;
	var ques1 = document.getElementById("ques1").value;

	var houseNoEnglish = document.getElementById("houseNoEnglish").value;
	// var apartmentEnglish = document.getElementById("apartmentEnglish").value;

	var apartmentEnglish = "";
	// var villagePanchayat = document.getElementById("villagePanchayat").value;
	// var tehsil = document.getElementById("tehsil").value;
	var tehsil = "";
	/*var district;// = document.getElementById("district_").value;
	if(document.getElementById("district_").value != null)
		{
		district = document.getElementById("district_").value ;
		}
	 */
	var state = ""; // document.getElementById("state").value;
	var pincode = document.getElementById("pincode").value;
	var telephone = document.getElementById("telephone").value;

	var mobileNo = document.getElementById("mobileNo").value;
	var email = document.getElementById("email").value;
	var houseType = document.getElementById("houseType").value;

	var houseSituation = document.getElementById("houseSituation").value;
	var familyBankName = document.getElementById("familyBankName").value;
	var familyBankAccount = document.getElementById("familyBankAccount").value;

	var futureAddress = document.getElementById("futureAddress").value;
	var familyRelationWithHof = document
			.getElementById("familyRelationWithHof").value;
	var nameEnglish = "";// document.getElementById("nameEnglish").value;

	var nameHindi = "";// document.getElementById("nameHindi").value;
	var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
	var motherNameEnglish = document.getElementById("motherNameEnglish").value;
	var spouseNameEnglish = document.getElementById("spouseNameEnglish").value;
	var spouseNameHindi = document.getElementById("spouseNameHindi").value;
	var motherNameHindi = document.getElementById("motherNameHindi").value;
	var fatherNameHindi = document.getElementById("fatherNameHindi").value;

	var gasConnNo = document.getElementById("gasConnNo").value;
	var rationCard = document.getElementById("rationCard").value;
	var rationCardNo = document.getElementById("rationCardNo").value;
	var electricityAccNo = document.getElementById("electricityAccNo").value;
	var waterAccNo = document.getElementById("waterAccNo").value;
	var gasAgencyName = document.getElementById("gasAgencyName").value;
	var bplNo = document.getElementById("bplNo").value;
	var gandhiCardNo = document.getElementById("gandhiCardNo").value;
	var healthInsuranceNo = document.getElementById("healthInsuranceNo").value;
	var specialRemarks = document.getElementById("specialRemarks").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var residenceCategory = document.getElementById("residenceCategory").value;

	var addressEng = document.getElementById("addressEng").value;
	var addressHnd = document.getElementById("addressHnd").value;

	var localityEnglish = document.getElementById("localityEnglish").value;
	var localityHindi = document.getElementById("localityHindi").value;

	var houseNoHindi = document.getElementById("houseNoHindi").value;

	var maritalStatus = document.getElementById("maritalStatus").value;
	var education = document.getElementById("education").value;
	var gender = document.getElementById("gender").value;
	var specialPlan = document.getElementById("specialPlan").value;
	var familyBankBranch = document.getElementById("familyBankBranch").value;
	var dob = document.getElementById("dob").value;
	var isimagesaved = document.getElementById("isImageSaved").value;
	var voterId = document.getElementById("voterId").value;
	var panCardNo = document.getElementById("panCardNo").value;
	var villagePanchayat = document.getElementById("villagePanchayat").value;
	if (document.getElementById("AdhaarError2") != null
			|| document.getElementById("AdhaarError3") != null) {
		if (document.getElementById("hofAdhaar") != null || eId != "") {
			if (hofAdhaar == "" && eId == "") {
				alert("???? ?????? ???? |");
				return false;
			}
		}
	}
	if (eId != "" && eId.length < 28) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}
	if (isRural == 'Y') {
		district = document.getElementById("district").value;
		var blokSamiti = document.getElementById("blokSamiti").value;
		var villagePanchayat = document.getElementById("villagePanchayat").value;
		var villageEnglish = document.getElementById("villageEnglish").value;
		if (district == 0) {
			alert("???? ??? ???? |");
			return false;
		}
		if (blokSamiti == 0) {
			alert("?????? ????? ??? ????|");
			return false;
		}
		if (villagePanchayat == 0) {
			alert("????? ??????  ??? ????|");
			return false;
		}
		if (villageEnglish == 0) {
			alert("????? ??? ????|");
			return false;
		}

	} else {
		district = document.getElementById("district_").value;
		var city = document.getElementById("city").value;
		var ward = document.getElementById("ward").value;
		if (district == 0) {
			alert("???? ??? ???? |");
			return false;
		}
		if (city == 0) {
			alert("??? ??? ???? |");
			return false;
		}
		if (ward == 0) {
			alert("????? ??? ???? |");
			return false;
		}
	}

	/*if(){
		if()
			{
			alert("????  ???? ?????? ???? |");
			return false;
			}
	}
	 */
	/*if(eId.length == 0 )
	{
		alert("????? ???? ???? ?????? ??? |");
		return false;
	}*/
	if (isNaN(hofAdhaar)) {
		alert('????? ???? ?????? ???? ??? ????|');
		return false;
	}

	if (hofEngName == "" || hofHindiName == "") {
		alert("????? ?????? ?? ?????? ??  ??? ????|");
		return false;
	}
	if (casteEng == "") {
		alert("????? ???? ??  ??? ????|");
		return false;
	}

	/*if (isRural == "0") {
		alert("????? ??????? ???????  ??? ????|");
		return false;
	}*/

	if (district == "0") {
		alert("????? ????  ??? ????|");
		return false;
	}
	if (isNaN(pincode)) {
		alert('????? ??? ?????? ???? ??? ????|');
		return false;
	}
	if (isNaN(futureAddress)) {
		alert('????? ??????? ??? ?? ????? ?? ????  ???? ??? ????|');
		return false;
	}
	if (dob == "") {
		alert("????? ???? ???? ????|");
		return false;
	}
	if (familyBankName != "0" || familyBankBranch != "0"
			|| familyBankAccount != "") {
		if (familyBankName == "0") {
			alert("????? ???? ?? ??? ??? ????|");
			return false;
		}
		if (familyBankBranch == "0") {
			alert("????? ???? ???? ?? ??? ??? ????|");
			return false;
		}
		if (familyBankAccount == "") {
			alert("????? ???? ???? ?????? ????|");
			return false;
		}
	}
	if (document.getElementById("familyBankAccount").className != "text"
			&& familyBankAccount != ""
			&& (familyBankAccount.length < 9 || familyBankAccount.length > 18)) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}

	if ((document.getElementById("mobileNo").className != "text")
			&& ((mobileNo != "" && mobileNo.length < 10) || mobileNo[0] == "0")) {
		alert("????? ??? ?????? ???? ????|");
		return false;
	}
	if ((document.getElementById("panCardNo").className != "text")
			&& panCardNo != "" && panCardNo.length < 10) {
		alert("????? ???  ??? ????? ????|");
		return false;
	}

	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var ordrYr = dob.split("/")[2];
	var age = document.getElementById("age").value;

	if (age != "" && age > 150) {
		alert("???  150 ???? ?? ???? ????  ???? ????? |");
		return false;
	}

	if (age != "" && age < 18) {
		alert("???  18 ???? ?? ??  ????  ???? ?????  |");
		return false;
	}
	if (age == "") {
		alert("????? ???? ????|");
		return false;
	}

	if (familyBankAccount == "") {
		alert("????? ???? ???? ?????? ????|");
		return false;
	}
	if (isNaN(familyBankAccount)) {
		alert("????? ???? ???? ??????  ???? ??? ????|");
		return false;
	}
	if (familyBankBranch == "0") {
		alert("????? ????  ????  ??? ????|");
		return false;
	}
	if (familyBankName == "0") {
		alert("????? ????????? ???? ?? ??? ??? ????|");
		return false;
	}

	if (familyRelationWithHof == 0) {
		alert("????? ?????? ?? ?????? ?? ????? ??? ????|");
		return false;
	}

	if (fatherNameEnglish == "" || fatherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (motherNameEnglish == "" || motherNameHindi == "") {
		alert("????? ???? ?? ??? ????|");
		return false;
	}

	if (gender == "0") {
		alert("????? ???? ??? ????|");
		return false;
	}

	if (maritalStatus == "0") {
		alert("????? ??????? ?????? ??? ????|");
		return false;
	}

	if (maritalStatus == "7"
			&& (spouseNameEnglish == "" || spouseNameHindi == "")) {
		alert("????? ??? / ????? ?? ??? ????|");
		return false;
	}

	if (isNaN(healthInsuranceNo)) {
		alert("??????? ???? ????? ???????  ??????  ???? ??? ????|");
		return false;
	}
	if (email != "") {
		//var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");

		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
			alert("?????  ???  ?-??? ????|");
			email.value = "";
			email.focus();
			return false;
		}

		/*if (reg.test(email)) {
			return true;
		} else {
			alert('?????  ???  ?-??? ????|');
			
			email.value = "";
			email.focus();
			return false;
		}*/
	}

	return true;
}

function validateMemberDetails() {

	var hId = document.getElementById("hId").value;
	var bhamashahId = document.getElementById("bhId").value;
	var memberId = document.getElementById("memberId").value;

	// var rdbadharId= document.getElementById("rdbadharId").value;
	var eId = "";
	if (document.getElementById("eId") != null) {
		eId = document.getElementById("eId").value;
	}
	var noneId = "";
	// document.getElementById("noneId").value;

	var aadharId = "";
	if (document.getElementById("aadharId") != null) {
		aadharId = document.getElementById("aadharId").value;
	}
	var nameEnglish = document.getElementById("nameEnglish").value;
	var nameHindi = document.getElementById("nameHindi").value;

	var familyRelationWithHof = document
			.getElementById("familyRelationWithHof").value;
	var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
	var fatherNameHindi = document.getElementById("fatherNameHindi").value;

	var motherNameEnglish = document.getElementById("motherNameEnglish").value;
	var motherNameHindi = document.getElementById("motherNameHindi").value;
	var dob = document.getElementById("dob").value;

	var gender = document.getElementById("gender").value;
	var maritalStatus = document.getElementById("maritalStatus").value;
	var spouseNameEnglish = document.getElementById("spouseNameEng").value;
	// var spouseNameEnglish =
	// document.getElementById("spouseNameEnglish").value;
	var spouseNameHindi = document.getElementById("spouseNameHnd").value;
	// var spouseNameHindi = document.getElementById("spouseNameHindi").value;
	var education = document.getElementById("education").value;
	var specialPlan = document.getElementById("specialPlan").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var specialRemarks = document.getElementById("specialRemarks").value;
	var residenceCategory = document.getElementById("residenceCategory").value;

	var remarks = document.getElementById("remarks").value;

	var bankBranchNameHindi = document.getElementById("familyBankBranch").value;
	var bankAccountNo = document.getElementById("bankAccountNo").value;
	var panCardNo = document.getElementById("panCardNo").value;

	var dlId = document.getElementById("dlId").value;
	var passportId = document.getElementById("passportId").value;
	var nprId = document.getElementById("nprId").value;

	var incomeRegistration = document.getElementById("incomeRegistration").value;
	var govEmpIdss = document.getElementById("govEmpId").value;
	//var socialSecurityNo = document.getElementById("socialSecurityNo").value;

	var mobileNo = document.getElementById("mobileNo").value;
	var voterId = document.getElementById("voterId").value;
	// var familyBankAccount=
	// document.getElementById("familyBankAccount").value;

	var passportId = document.getElementById("passportId").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var bankName = document.getElementById("bankName").value;

	var govEmpId = document.getElementById("govEmpId").value;
	var incomeRegistration = document.getElementById("incomeRegistration").value;

	var remarks = document.getElementById("remarks").value;
	var incomeRegistration = document.getElementById("incomeRegistration").value;
	var govEmpId = document.getElementById("govEmpId").value;
	//var socialSecurityNo = document.getElementById("socialSecurityNo").value;
	var mobileNo = document.getElementById("mobileNo").value;
	var isimagesaved = document.getElementById("isImageSaved").value;
	var ageFlag = document.getElementById("ageFlag").value;
	var age = document.getElementById("age").value;
	/*
	if(bankName != 0)
		{
		if(bankBranchNameHindi == 0)
			{
			alert("?????  ???? ???? ?? ??? ??? ????|"); 
			return false; 
			}
		}*/

	/*if(isimagesaved != "y"){
		alert("????? ???? ?????|"); 
		return false; 
	}*/
	if (aadharId != "" && aadharId.length < 12) {
		alert("????? ??? ???? ?????? ????|");
		return false;
	}
	if (eId != "" && eId.length < 28) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}
	if (familyRelationWithHof == 0) {
		alert("????? ?????? ?? ?????? ?? ????? ??? ????|");
		return false;
	}
	if (age == "") {
		alert("????? ???? ????|");
		return false;
	}

	/*	if(eId.length == 0){ 
			alert("????? ???? ???? ?????? ??? |"); 
			return false; 
		}*/

	if (nameEnglish == "" || nameHindi == "") {
		alert("????? ??? ????|");
		return false;
	}

	if (fatherNameEnglish == "" || fatherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (motherNameEnglish == "" || motherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (gender == "0") {
		alert("????? ???? ??? ????|");
		return false;
	}

	if (dob == "") {
		alert("????? ???? ???? ????|");
		return false;
	}
	if (bankName != "0" || bankBranchNameHindi != "0" || bankAccountNo != "") {
		if (bankName == "0") {
			alert("????? ???? ?? ??? ??? ????|");
			return false;
		}
		if (bankBranchNameHindi == "0") {
			alert("????? ???? ???? ?? ??? ??? ????|");
			return false;
		}
		if (bankAccountNo == "") {
			alert("????? ???? ???? ?????? ????|");
			return false;
		}
	}
	if (document.getElementById("bankAccountNo").className != "text"
			&& bankAccountNo != ""
			&& (bankAccountNo.length < 9 || bankAccountNo.length > 18)) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}

	if ((document.getElementById("mobileNo").className != "text")
			&& ((mobileNo != "" && mobileNo.length < 10) || mobileNo[0] == "0")) {
		alert("????? ??? ?????? ???? ????|");
		return false;
	}
	if ((document.getElementById("panCardNo").className != "text")
			&& panCardNo != "" && panCardNo.length < 10) {
		alert("????? ???  ??? ????? ????|");
		return false;
	}
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var current_month = currentDate.getMonth();
	/*var ordrYr = dob.split("/")[2];
	var month = dob.split("/")[1];
	var age = Math.floor(year - ordrYr);
	var month_ = Math.floor(current_month - month);*/
	var idate = document.getElementById("dob"), dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
	if (isFutureDate(idate.value)) {
		// resultDiv.innerHTML = "Entered date is a future date";
		alert("????? ??? ???? ???? ???? |");
		return false;
	}
	/*		if (age > 125) {
	 alert("???  125 ???? ?? ???? ????  ???? ????? |");
	 return false;
	 } */
	
	if (age < 0) {
		alert("????? ??? ???? ???? ???? |");
		return false;
	}
	/*if(maritalStatus == "0"){ 
		alert("????? ??????? ?????? ??? ????|"); 
	  return false; 
	}*/

	if (maritalStatus == "7"
			&& (spouseNameEnglish == "" || spouseNameHindi == "")) {
		alert("????? ??? / ????? ?? ??? ????|");
		return false;
	}
	return true;
}

function isFutureDate(idate) {
	
	idate = idate.replace(/-/g,"/");
	var today = new Date().getTime(), idate = idate.split("/");

	idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
	return (today - idate) < 0 ? true : false;
}

function goToLoginPage() {
	if (document.getElementById("indexId").value == "0") {
		document.mukhiyaDataForm.action = "login";
		document.mukhiyaDataForm.submit();
	} else {

		
		document.memberDataForm.action = "login";
		document.memberDataForm.submit();
	}
}

/*function loadTbl(div) {
	hideSpan('tbl1');
	params = 'id=' + document.getElementById('district').value;

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById('tbl2').innerHTML = xml.responseText;

				} else {
					alert("Please try again");
				}

			}
		};

		xml.open("POST", "onclick", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

}*/
function setCalendarDate() {
	var age = document.getElementById("age").value;
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	document.getElementById("dob").value = "01/01/" + (year - age);
}

function isNumeric(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
		alert('????? ???? ??? ????|');
		document.getElementById("age").value = document.getElementById("age").value
				.replace(/[^0-9\\\/ ]/g, "");
		return false;
	} else if (document.getElementById("age").value > 150) {
		alert("???? 150 ???? ?? ???? ??? ?? ????|");
		document.getElementById("age").value = "";
		return false;
	} else {
		return true;
	}
}

function loadDataQCE(url, div, params) {
	try {
		var xml = ajaxRequest();
		loader('chakri');

		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					remove_popup("chakri");
					console.log("xml.responseText:" + xml.responseText);

					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("An error has occured making the request");
					remove_popup("chakri");
				}
			}
		};

		if (div == "blokSamiti") {
			document.getElementById("villagePanchayat").innerHTML = "<option value='0'>????? ??????  ??? ????</option>";
			document.getElementById("villageEnglish").innerHTML = "<option value='0'>????? ??? ????</option>";
		}
		if (div == "villagePanchayat") {
			document.getElementById("villageEnglish").innerHTML = "<option value='0'>????? ??? ????</option>";
		}

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert("ERROR MESSAGE");
		alert(e);
	}

}

function goBackToMisDashBoard() {

	document.verificationform.action = "misDashBoard";
	document.verificationform.submit();

}
function loadVReport(url, id, chakri, params) {

	/*alert(url);
	alert(id);
	alert(chakri);*/
	alert(params);

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById(id).value = xml.responseText;

					alert("DATA SAVE SUCCESSFULLY");

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
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

function loadJReport(url, id, chakri, params) {

	/*alert(url);
	alert(id);
	alert(chakri);*/
	/*	alert(params);*/
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById(id).value = xml.responseText;

					/*alert("DATA SAVE SUCCESSFULLY");*/

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
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

function normalizeTextArea(id) {

	var html = "";
	var lines = document.getElementById(id).value.split('\n');
	for ( var i = 0; i < lines.length; i++) {
		// code here using lines[i] which will give you each line
		html += lines[i];
		html += " ";
	}
	html = html.substring(0, html.length - 1);
	document.getElementById(id).value = html;
	return true;
}

function loadJdata(url, div, chakri, params) {
	//alert(url);
	//alert(div);
	//alert(params);
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					console.log("xml.responseText:" + xml.responseText);
					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
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

function openNewWindowBankAccount(lvl, isrular, disid, blkid, cityid, gpid,
		wardid) {
	// alert("URL:"+url)

	var url = 'gethofwithAadharandnoBankaccount?districtId=' + disid
			+ '&fromDate=' + document.getElementById('distFromDate').value
			+ '&toDate=' + document.getElementById('distToDate').value
			+ '&flagCheck=' + document.getElementById('flagCheck').value
			+ '&lvl=' + lvl + '&isrular=' + isrular + '&blkid=' + blkid
			+ '&gpid=' + gpid + '&wardid=' + wardid + '&cityid=' + cityid;

	popupWin = window.open(url, 'open_window32',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowBankAccount1(lvl, isrular, disid, blkid, cityid, gpid,
		wardid) {
	// alert("URL:"+url)

	var url = 'gethofwithAadharandnoBankaccount?districtId=' + disid
			+ '&fromDate=' + document.getElementById('fromDate').value
			+ '&toDate=' + document.getElementById('toDate').value
			+ '&flagCheck=' + document.getElementById('flagCheck').value
			+ '&lvl=' + lvl + '&isrular=' + isrular + '&blkid=' + blkid
			+ '&gpid=' + gpid + '&wardid=' + wardid + '&cityid=' + cityid;

	popupWin = window.open(url, 'open_window54',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowBankAccount3(lvl, isrular, disid, blkid, cityid, gpid,
		wardid) {
	// alert("URL:"+url)

	var url = 'gethofwithAadharandnoBankaccount?districtId=' + disid
			+ '&fromDate=' + document.getElementById('fromDate').value
			+ '&toDate=' + document.getElementById('toDate').value
			+ '&flagCheck=' + document.getElementById('flagCheck').value
			+ '&lvl=' + lvl + '&isrular=' + isrular + '&blkid=' + blkid
			+ '&gpid=' + gpid + '&wardid=' + wardid + '&cityid=' + cityid;

	popupWin = window.open(url, 'open_window55',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowBankAccount4(lvl, isrular, disid, blkid, cityid, gpid,
		wardid, fromdate) {
	// alert("URL:"+url)

	var url = 'gethofwithAadharandnoBankaccount?districtId=' + disid
			+ '&fromDate=' + fromdate + '&toDate=' + fromdate + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&lvl=' + lvl
			+ '&isrular=' + isrular + '&blkid=' + blkid + '&gpid=' + gpid
			+ '&wardid=' + wardid + '&cityid=' + cityid;

	popupWin = window.open(url, 'open_window56',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function loadTbl(div, url, params) {
	try {

		
		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
             
			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById(div).innerHTML = xml.responseText;

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

function loadTbl1(div, url, params) {
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {

			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById('blocklist').innerHTML = xml.responseText;

				} else {
					alert("Please try again");
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

function loadECardId(url, id, chakri, params) {

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					check = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (check == 1) {

		//alert("QR Code load kare");
		url = 'generateECARD?bhamashahId=' + id;

		popupWin = window.open(url, 'open_window',
				'scrollbars=yes, dependent, width=1200, height=700');
	} else if (check == 2) {

		alert("QR Code Not Available");

	} else {

		alert("No Records found");

	}

}

function loadQRCode(url, id, chakri, params) {

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					check = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (check == 1) {

		//alert("QR Code load kare");

		url = 'generateECARD?bhamashahId=' + id;

		popupWin = window.open(url, 'open_window',
				'scrollbars=yes, dependent, width=1200, height=700');
	} else if (check == 2) {

		alert("QR Code Not Available");

	}

}

function loadECardName(url, id, chakri, params) {

	var check = "";
	/*alert(url);
	alert(id);
	alert(chakri);
	alert(params);*/

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById("data").innerHTML = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
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

function loadCheckAadhar(id) {

	var check = "0";
	var params = "aadharId=" + id.value+"&mainId="+document.getElementById("mainId").value;
	var url = "checkAadharDuplicacy";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					check = xml.responseText;
				} else {
					alert("Please try again");
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
	if (check == "1")

	{
		alert("???? ?????? ???? ?? ????? ?? |");
		document.getElementById("aadharId").value = "";
	}

	else {
		document.getElementById("eId").value = "";
		document.getElementById("eId").disabled = true;
	}

}

function checkAdharIdExists() {

	if ((document.getElementById("aadharId").value.length != document
			.getElementById("adhartemp").value.length)
			&& (document.getElementById("aadharId").value != "")) {
		alert("?????? ????? ???? ?????? ????|");
		return false;
	}
	if (document.getElementById("aadharId").value == "") {
		var params = "memberId=" + document.getElementById("memberId").value
				+ "&bhamashahId=" + document.getElementById("bhId").value;
		var xml = new ajaxRequest();
		loader('chakri');

		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if (xml.responseText == "1") {
						alert("in if");
						remove_popup('chakri');
						saveDataMemberEAEdit();
					} else {
						remove_popup('chakri');
						alert('?????? ???? ?????? ????|');
						return false;
					}

				} else {
					alert('There is some  proplem in saving kindly check it.');
				}
			}
		};

		xml.open("POST", "checkAdharExistsForFamily", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} else {
		saveDataMemberEAEdit();
	}
}

function validateekyc(val) {

	var check = "0";
	loader("chakri");
	var aadharId = document.getElementById("txtAadhar").value;
	var finger = document.getElementById("ddlfinger").value;
	var params = "encdata=" + encodeURIComponent(val) + "&aadharId=" + aadharId
			+ "&finger=" + finger;
	
	var flag = document.getElementById("flag").value;

	//alert(">>>>>>>>flag>>>>>>>>>>>>"+flag);

	var url = "validateEKYC";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					// check= xml.responseText;
					var res = xml.responseText;

					remove_popup("chakri");

					if (res == "0") {
						window.opener.document.getElementById("aadharId").value = "";
						alert("Failed Authentication");

						if (flag == "0") {
							window.opener.document.getElementById("hofEngName").value = "";
						}
						if (flag == "1") {
							window.opener.document
									.getElementById("nameEnglish").value = "";
						}

						window.opener.document.getElementById("dob").value = "";
						window.opener.document.getElementById("mobileNo").value = "";
						window.opener.document.getElementById("email").value = "";

						window.opener.document
								.getElementById("fatherNameEnglish").value = "";
						;

						window.opener.document.getElementById("houseNoEnglish").value = "";
						window.opener.document.getElementById("streetEnglish").value = "";
						window.opener.document
								.getElementById("landMarkEnglish").value = "";
						window.opener.document
								.getElementById("localityEnglish").value = "";
						window.opener.document.getElementById("pincode").value = "";

						window.opener.document.getElementById("gender").value = "0";

						window.opener.document.getElementById("aadharId").disabled = false;

					    window.close();

					}

					else {

						window.opener.document.getElementById("aadharId").disabled = true;

						res = res.split("#");
						/*
						 * name + "#" + dob + "#" + sex + "#" + phone + "#" +
						 * email + "#" + co + "#" + houseno + "#" + street + "#" +
						 * landmark + "#" + locality + "#" + vtc + "#" + po +
						 * "#" + distict + "#" + subdistict + "#" + state + "#" +
						 * pincode + "#" + photo + "#" + nameHindi + "#" +
						 * coHindi + "#" + houseNoHindi + "#" + streetHindi +
						 * "#" + landmarkHindi + "#" + localityHindi+"#"+txn
						 * +"#"+err;
						 */

						/*
						 * document.getElementById("d1").innerHTML=res[0] ;
						 * document.getElementById("d2").innerHTML=res[1] ;
						 * document.getElementById("d3").innerHTML=res[3] ;
						 */

						
						if (flag == "0") {
						window.opener.document.getElementById("hofEngName").value = res[0];
						}
						
						if (flag == "1") {
							window.opener.document.getElementById("nameEnglish").value = res[0];
							}
						
						
						
						
						window.opener.document.getElementById("dob").value = res[1];
						
						window.opener.document.getElementById("mobileNo").value = res[3];
						if (flag == "0") {
						window.opener.document.getElementById("email").value = res[4];
						}

						if (res[5] == null | res[5] == "") {

						} else {
							var a = res[5].split(":");
							window.opener.document
									.getElementById("fatherNameEnglish").value = a[1];
						}
						
						if (flag == "0") {
						window.opener.document.getElementById("houseNoEnglish").value = res[6];
						window.opener.document.getElementById("streetEnglish").value = res[7];
						window.opener.document
								.getElementById("landMarkEnglish").value = res[8];
						window.opener.document
								.getElementById("localityEnglish").value = res[9];
						window.opener.document.getElementById("pincode").value = res[15];
						}
						res[1] = res[1].replace("-", "/");
						window.opener.document.getElementById("dob").value = res[1]
								.replace("-", "/");

						if (res[2] == "M") {

							window.opener.document.getElementById("gender").value = "3";

						}

						else if (res[2] == "F") {

							window.opener.document.getElementById("gender").value = "4";
						}

						else if (res[3] == "T") {
							window.opener.document.getElementById("gender").value = "5";

						}

						alert("Authenticated");

						window.close();

					}

				} else {
					alert("Please try again");
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

	/*if(res=="1")
		
		{
		alert("Verification Done !");
		//document.getElementById("aadharId").value="";
		}
	
	
	else{
	}*/

}

function loadCheckEid(id) {

	var check = "0";
	var params = "eId=" + id.value+"&mainId="+document.getElementById("mainId").value;
	var url = "checkEidDuplicacy";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					check = xml.responseText;
				} else {
					alert("Please try again");
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

	if (check == "1")

	{
		document.getElementById("eId").value = "";
		alert("???? ???? ?????? ???? ?? ????? ?? |");

		document.getElementById("aadharId").value = "";
		document.getElementById("aadharId").disabled = false;
	}

	else {

		loadCheckEidFormat(id);

		//	document.getElementById("aadharId").value="";
		//document.getElementById("aadharId").disabled=true;
	}
}

function loadWebCam(id, flag) {

	var data = "0";

	var params = "encodedString=" + encodeURIComponent(id) + "&flag=" + flag;
	var url = "saveClientImage";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					data = xml.responseText;
					if (data != "2") {
						window.opener.document.getElementById("byteimg").innerHTML = "<img width='110' src=data:image/png;base64,"
								+ data + " />";
						window.opener.document.getElementById("isImageSaved").value = "y";

					} else {
						alert(" can not save image");
						window.opener.document.getElementById("isImageSaved").value = "n";
					}
				} else {
					alert("Please try again");
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

	window.close();
}

function validateMemberDetailsEM() {
	var hId = document.getElementById("hId").value;
	var bhamashahId = document.getElementById("bhId").value;
	var memberId = document.getElementById("memberId").value;

	// var rdbadharId= document.getElementById("rdbadharId").value;
	var eId = "";
	if (document.getElementById("eId") != null) {
		eId = document.getElementById("eId").value;
	}
	var noneId = "";
	// document.getElementById("noneId").value;

	var aadharId = "";
	if (document.getElementById("aadharId") != null) {
		aadharId = document.getElementById("aadharId").value;
	}
	var nameEnglish = document.getElementById("nameEnglish").value;
	var nameHindi = document.getElementById("nameHindi").value;

	var familyRelationWithHof = document
			.getElementById("familyRelationWithHof").value;
	var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
	var fatherNameHindi = document.getElementById("fatherNameHindi").value;

	var motherNameEnglish = document.getElementById("motherNameEnglish").value;
	var motherNameHindi = document.getElementById("motherNameHindi").value;
	var dob = document.getElementById("dob").value;

	var gender = document.getElementById("gender").value;
	var maritalStatus = document.getElementById("maritalStatus").value;
	var spouseNameEnglish = document.getElementById("spouseNameEng").value;
	// var spouseNameEnglish =
	// document.getElementById("spouseNameEnglish").value;
	var spouseNameHindi = document.getElementById("spouseNameHnd").value;
	// var spouseNameHindi = document.getElementById("spouseNameHindi").value;
	var education = document.getElementById("education").value;
	var specialPlan = document.getElementById("specialPlan").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var specialRemarks = document.getElementById("specialRemarks").value;
	var residenceCategory = document.getElementById("residenceCategory").value;

	var remarks = document.getElementById("remarks").value;

	var bankBranchNameHindi = document.getElementById("familyBankBranch").value;
	var bankAccountNo = document.getElementById("bankAccountNo").value;
	var panCardNo = document.getElementById("panCardNo").value;

	var dlId = document.getElementById("dlId").value;
	var passportId = document.getElementById("passportId").value;
	var nprId = document.getElementById("nprId").value;

	var incomeRegistration = document.getElementById("incomeRegistration").value;
	var govEmpIdss = document.getElementById("govEmpId").value;
	//var socialSecurityNo = document.getElementById("socialSecurityNo").value;

	var mobileNo = document.getElementById("mobileNo").value;
	var voterId = document.getElementById("voterId").value;
	// var familyBankAccount=
	// document.getElementById("familyBankAccount").value;

	var passportId = document.getElementById("passportId").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var bankName = document.getElementById("bankName").value;

	var govEmpId = document.getElementById("govEmpId").value;
	var incomeRegistration = document.getElementById("incomeRegistration").value;

	var remarks = document.getElementById("remarks").value;
	var incomeRegistration = document.getElementById("incomeRegistration").value;
	var govEmpId = document.getElementById("govEmpId").value;
	//var socialSecurityNo = document.getElementById("socialSecurityNo").value;
	var mobileNo = document.getElementById("mobileNo").value;
	var isimagesaved = document.getElementById("isImageSaved").value;
	var ageFlag = document.getElementById("ageFlag").value;
	var age = document.getElementById("age").value;
	/*
	if(bankName != 0)
		{
		if(bankBranchNameHindi == 0)
			{
			alert("?????  ???? ???? ?? ??? ??? ????|"); 
			return false; 
			}
		}*/

	/*if(isimagesaved != "y"){
		alert("????? ???? ?????|"); 
		return false; 
	}*/
	if (eId != "" && eId.length < 28) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}
	if (familyRelationWithHof == 0) {
		alert("????? ?????? ?? ?????? ?? ????? ??? ????|");
		return false;
	}
	if (age == "") {
		alert("????? ???? ????|");
		return false;
	}

	/*	if(eId.length == 0){ 
			alert("????? ???? ???? ?????? ??? |"); 
			return false; 
		}*/

	if (nameEnglish == "" || nameHindi == "") {
		alert("????? ??? ????|");
		return false;
	}

	if (fatherNameEnglish == "" || fatherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (motherNameEnglish == "" || motherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (gender == "0") {
		alert("????? ???? ??? ????|");
		return false;
	}

	if (dob == "") {
		alert("????? ???? ???? ????|");
		return false;
	}
	if (bankName != "0" || bankBranchNameHindi != "0" || bankAccountNo != "") {
		if (bankName == "0") {
			alert("????? ???? ?? ??? ??? ????|");
			return false;
		}
		if (bankBranchNameHindi == "0") {
			alert("????? ???? ???? ?? ??? ??? ????|");
			return false;
		}
		if (bankAccountNo == "") {
			alert("????? ???? ???? ?????? ????|");
			return false;
		}
	}
	if (document.getElementById("bankAccountNo").className != "text"
			&& bankAccountNo != ""
			&& (bankAccountNo.length < 9 || bankAccountNo.length > 18)) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}

	if ((document.getElementById("mobileNo").className != "text")
			&& ((mobileNo != "" && mobileNo.length < 10) || mobileNo[0] == "0")) {
		alert("????? ??? ?????? ???? ????|");
		return false;
	}
	if ((document.getElementById("panCardNo").className != "text")
			&& panCardNo != "" && panCardNo.length < 10) {
		alert("????? ???  ??? ????? ????|");
		return false;
	}
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var current_month = currentDate.getMonth();
	var ordrYr = dob.split("/")[2];
	var month = dob.split("/")[1];
	var age = Math.floor(year - ordrYr);
	var month_ = Math.floor(current_month - month);

	var idate = document.getElementById("dob"), dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
	if (isFutureDate(idate.value)) {
		// resultDiv.innerHTML = "Entered date is a future date";
		alert("????? ??? ????? ?? ??? ??? |");
		return false;
	}

	/*		if (age > 125) {
	 alert("???  125 ???? ?? ???? ????  ???? ????? |");
	 return false;
	 } */
	/*if (age < 0) {
		alert("????? ??? ????? ?? ??? ??? |");
		return false;
	}*/

	/*if(maritalStatus == "0"){ 
		alert("????? ??????? ?????? ??? ????|"); 
	  return false; 
	}*/

	if (maritalStatus == "7"
			&& (spouseNameEnglish == "" || spouseNameHindi == "")) {
		alert("????? ??? / ????? ?? ??? ????|");
		return false;
	}
	return true;
}

function validateMukhiyaEM() {
	var xml = new ajaxRequest();
	var hofAdhaar = "";
	//var isRural = "N";
	var district = "";

	if (document.getElementById("rural").checked) {
		isRural = "Y";
	} else {
		isRural = "N";
	}

	if (isRural == 'N') {
		district = document.getElementById("district").value;

	} else {
		district = document.getElementById("district_").value;
	}

	if (document.getElementById("hofAdhaar") != null) {
		hofAdhaar = document.getElementById("hofAdhaar").value;
	}

	var eId = "";

	if (document.getElementById("eId") != null) {
		eId = document.getElementById("eId").value;
	}
	// alert("hofAdhaar:" + hofAdhaar);
	var hId = document.getElementById("hId").value;
	var bhamashahId = document.getElementById("bhamashahId").value;

	var hofEngName = document.getElementById("hofEngName").value;
	var hofHindiName = document.getElementById("hofHindiName").value;

	var casteEng = document.getElementById("casteEng").value;
	var familyCategory = document.getElementById("familyCategory").value;
	var casteHind = ""; //document.getElementById("casteHind").value;

	var ownerType = document.getElementById("ownerType").value;
	var landType = document.getElementById("landType").value;
	var ques1 = document.getElementById("ques1").value;

	var houseNoEnglish = document.getElementById("houseNoEnglish").value;
	// var apartmentEnglish = document.getElementById("apartmentEnglish").value;

	var apartmentEnglish = "";
	// var villagePanchayat = document.getElementById("villagePanchayat").value;
	// var tehsil = document.getElementById("tehsil").value;
	var tehsil = "";
	/*var district;// = document.getElementById("district_").value;
	if(document.getElementById("district_").value != null)
		{
		district = document.getElementById("district_").value ;
		}
	 */
	var state = ""; // document.getElementById("state").value;
	var pincode = document.getElementById("pincode").value;
	var telephone = document.getElementById("telephone").value;

	var mobileNo = document.getElementById("mobileNo").value;
	var email = document.getElementById("email").value;
	var houseType = document.getElementById("houseType").value;

	var houseSituation = document.getElementById("houseSituation").value;
	var familyBankName = document.getElementById("familyBankName").value;
	var familyBankAccount = document.getElementById("familyBankAccount").value;

	var futureAddress = document.getElementById("futureAddress").value;
	var familyRelationWithHof = document
			.getElementById("familyRelationWithHof").value;
	var nameEnglish = "";// document.getElementById("nameEnglish").value;

	var nameHindi = "";// document.getElementById("nameHindi").value;
	var fatherNameEnglish = document.getElementById("fatherNameEnglish").value;
	var motherNameEnglish = document.getElementById("motherNameEnglish").value;
	var spouseNameEnglish = document.getElementById("spouseNameEnglish").value;
	var spouseNameHindi = document.getElementById("spouseNameHindi").value;
	var motherNameHindi = document.getElementById("motherNameHindi").value;
	var fatherNameHindi = document.getElementById("fatherNameHindi").value;

	var gasConnNo = document.getElementById("gasConnNo").value;
	var rationCard = document.getElementById("rationCard").value;
	var rationCardNo = document.getElementById("rationCardNo").value;
	var electricityAccNo = document.getElementById("electricityAccNo").value;
	var waterAccNo = document.getElementById("waterAccNo").value;
	var gasAgencyName = document.getElementById("gasAgencyName").value;
	var bplNo = document.getElementById("bplNo").value;
	var gandhiCardNo = document.getElementById("gandhiCardNo").value;
	var healthInsuranceNo = document.getElementById("healthInsuranceNo").value;
	var specialRemarks = document.getElementById("specialRemarks").value;

	var annualIncome = document.getElementById("annualIncome").value;
	var residenceCategory = document.getElementById("residenceCategory").value;

	var addressEng = document.getElementById("addressEng").value;
	var addressHnd = document.getElementById("addressHnd").value;

	var localityEnglish = document.getElementById("localityEnglish").value;
	var localityHindi = document.getElementById("localityHindi").value;

	var houseNoHindi = document.getElementById("houseNoHindi").value;

	var maritalStatus = document.getElementById("maritalStatus").value;
	var education = document.getElementById("education").value;
	var gender = document.getElementById("gender").value;
	var specialPlan = document.getElementById("specialPlan").value;
	var familyBankBranch = document.getElementById("familyBankBranch").value;
	var dob = document.getElementById("dob").value;
	var isimagesaved = document.getElementById("isImageSaved").value;
	var voterId = document.getElementById("voterId").value;
	var panCardNo = document.getElementById("panCardNo").value;
	var villagePanchayat = document.getElementById("villagePanchayat").value;
	if (document.getElementById("AdhaarError2") != null
			|| document.getElementById("AdhaarError3") != null) {
		if (document.getElementById("hofAdhaar") != null || eId != "") {
			if (hofAdhaar == "" && eId == "") {
				alert("???? ?????? ???? |");
				return false;
			}
		}
	}
	if (eId != "" && eId.length < 28) {
		alert("???? ???? ?????? 28 ???? ?? ?? ???? ???? ????? !");
		return false;
	}
	if (isRural == 'Y') {
		district = document.getElementById("district").value;
		var blokSamiti = document.getElementById("blokSamiti").value;
		var villagePanchayat = document.getElementById("villagePanchayat").value;
		var villageEnglish = document.getElementById("villageEnglish").value;
		if (district == 0) {
			alert("???? ??? ???? |");
			return false;
		}
		if (blokSamiti == 0) {
			alert("?????? ????? ??? ????|");
			return false;
		}
		if (villagePanchayat == 0) {
			alert("????? ??????  ??? ????|");
			return false;
		}
		if (villageEnglish == 0) {
			alert("????? ??? ????|");
			return false;
		}

	} else {
		district = document.getElementById("district_").value;
		var city = document.getElementById("city").value;
		var ward = document.getElementById("ward").value;
		if (district == 0) {
			alert("???? ??? ???? |");
			return false;
		}
		if (city == 0) {
			alert("??? ??? ???? |");
			return false;
		}
		if (ward == 0) {
			alert("????? ??? ???? |");
			return false;
		}
	}

	/*if(){
		if()
			{
			alert("????  ???? ?????? ???? |");
			return false;
			}
	}
	 */
	/*if(eId.length == 0 )
	{
		alert("????? ???? ???? ?????? ??? |");
		return false;
	}*/
	if (isNaN(hofAdhaar)) {
		alert('????? ???? ?????? ???? ??? ????|');
		return false;
	}

	if (hofEngName == "" || hofHindiName == "") {
		alert("????? ?????? ?? ?????? ??  ??? ????|");
		return false;
	}
	if (casteEng == "") {
		alert("????? ???? ??  ??? ????|");
		return false;
	}

	/*if (isRural == "0") {
		alert("????? ??????? ???????  ??? ????|");
		return false;
	}*/

	if (district == "0") {
		alert("????? ????  ??? ????|");
		return false;
	}
	if (isNaN(pincode)) {
		alert('????? ??? ?????? ???? ??? ????|');
		return false;
	}
	if (isNaN(futureAddress)) {
		alert('????? ??????? ??? ?? ????? ?? ????  ???? ??? ????|');
		return false;
	}
	if (dob == "") {
		alert("????? ???? ???? ????|");
		return false;
	}
	if (familyBankName != "0" || familyBankBranch != "0"
			|| familyBankAccount != "") {
		if (familyBankName == "0") {
			alert("????? ???? ?? ??? ??? ????|");
			return false;
		}
		if (familyBankBranch == "0") {
			alert("????? ???? ???? ?? ??? ??? ????|");
			return false;
		}
		if (familyBankAccount == "") {
			alert("????? ???? ???? ?????? ????|");
			return false;
		}
	}
	if (document.getElementById("familyBankAccount").className != "text"
			&& familyBankAccount != ""
			&& (familyBankAccount.length < 9 || familyBankAccount.length > 18)) {
		alert("????? ??? ???? ???? ?????? ????|");
		return false;
	}

	if ((document.getElementById("mobileNo").className != "text")
			&& ((mobileNo != "" && mobileNo.length < 10) || mobileNo[0] == "0")) {
		alert("????? ??? ?????? ???? ????|");
		return false;
	}
	if ((document.getElementById("panCardNo").className != "text")
			&& panCardNo != "" && panCardNo.length < 10) {
		alert("????? ???  ??? ????? ????|");
		return false;
	}
	/*if(familyBankAccount.length < 9 || familyBankAccount.length > 18){
		alert("????? ??? ???? ?????? ????|");
		return false;
	}
	if(mobileNo == "" && mobileNo.length < 10){
		alert("????? ??? ?????? ???? ????|");
		return false;
	}
	if(panCardNo == "" && panCardNo.length < 10){
		alert("????? ???  ??? ????? ????|");
		return false;
	}*/
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var ordrYr = dob.split("/")[2];
	var age = document.getElementById("age").value;

	if (age != "" && age > 150) {
		alert("???  150 ???? ?? ???? ????  ???? ????? |");
		return false;
	}

	if (age != "" && age < 18) {
		alert("???  18 ???? ?? ??  ????  ???? ?????  |");
		return false;
	}
	if (age == "") {
		alert("????? ???? ????|");
		return false;
	}

	if (familyBankAccount == "") {
		alert("????? ???? ???? ?????? ????|");
		return false;
	}
	if (isNaN(familyBankAccount)) {
		alert("????? ???? ???? ??????  ???? ??? ????|");
		return false;
	}
	if (familyBankBranch == "0") {
		alert("????? ????  ????  ??? ????|");
		return false;
	}
	if (familyBankName == "0") {
		alert("????? ????????? ???? ?? ??? ??? ????|");
		return false;
	}

	if (familyRelationWithHof == 0) {
		alert("????? ?????? ?? ?????? ?? ????? ??? ????|");
		return false;
	}

	if (fatherNameEnglish == "" || fatherNameHindi == "") {
		alert("????? ????  ?? ??? ????|");
		return false;
	}

	if (motherNameEnglish == "" || motherNameHindi == "") {
		alert("????? ???? ?? ??? ????|");
		return false;
	}

	if (gender == "0") {
		alert("????? ???? ??? ????|");
		return false;
	}

	if (maritalStatus == "0") {
		alert("????? ??????? ?????? ??? ????|");
		return false;
	}

	if (maritalStatus == "7"
			&& (spouseNameEnglish == "" || spouseNameHindi == "")) {
		alert("????? ??? / ????? ?? ??? ????|");
		return false;
	}

	if (isNaN(healthInsuranceNo)) {
		alert("??????? ???? ????? ???????  ??????  ???? ??? ????|");
		return false;
	}
	if (email != "") {
		//var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");

		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
			alert("?????  ???  ?-??? ????|");
			email.value = "";
			email.focus();
			return false;
		}

		/*if (reg.test(email)) {
			return true;
		} else {
			alert('?????  ???  ?-??? ????|');
			
			email.value = "";
			email.focus();
			return false;
		}*/
	}

	return true;
}

function EmailAddressValidator(id) {

	var email = document.getElementById(id).value;

	if (email.indexOf('@') == -1) {
		alert("???? ???? ????|");
		// alert("Invalid email id...!\nIt must have an at sign(@) sign before
		// domain name.\nPlease check and try again.");

		return true;
	}
	if (email.match(/@/g).length > 1) {
		alert("???? ???? ????...|\n?? ????? ??? ?? ???? ?? ????? ?? (@) ?? ????????? ???? ?????? ??.\n???? ???? ?? ???: ?????? ???? |");
		return true;
	}
	if (email.length < 5) {
		alert("???? ???? ????...|\n???? ???? ?? ???: ?????? ???? |");
		return true;
	}

	var atsignplace = email.lastIndexOf('@');
	var dotplace = email.indexOf('.', atsignplace);

	if (dotplace < 0) {
		alert("????? ??? ???? ???? ???? |");
		return true;
	}

	if (email.substring(atsignplace + 1, dotplace).trim().length == 0) {
		alert("????? ??? ???? ???? ???? |");
		return true;
	}

	if (email.substr(dotplace + 1).trim().length == 0) {
		alert("???? ???? ????...|\n???? ???? ?? ???: ?????? ???? |");
		return true;
	} else {
		return false;
	}

}

function loadCheckMemberAadhar(chakri, params) {

	var check = "";
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					check = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
			}
		};

		xml.open("POST", "checkIfMemberAadharExists", false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (params == "1") {
		if (check == "1") {

			var x = "???? ?? ????? ??? ???? ????? ?? ?";
			if (confirm(x)) {

				document.memberDataForm.action = 'emitraFinalEnrollSave';
				document.memberDataForm.submit();
				loader("chakri");
			}

		}

		else {
			alert("???? ?? ??????? ??? ?? ???? ?? ????? ?? ???? ?????? ?????? ??? ?? |");
		}
	}
	
	
	else if (params == "7") {
		if (check == "1") {

			var x = "???? ?? ????? ??? ???? ????? ?? ?";
			if (confirm(x)) {

				document.memberDataForm.action = 'citizenEnrollSave';
				document.memberDataForm.submit();
				loader("chakri");
			}

		}

		else {
			alert("???? ?? ??????? ??? ?? ???? ?? ????? ?? ???? ?????? ?????? ??? ?? |");
		}
	}
	else if (params == "9") {
		if (check == "1") {

			var x = "???? ?? ????? ??? ???? ????? ?? ?";
			if (confirm(x)) {

				document.memberDataForm.action = 'citizenReEnrollSave';
				document.memberDataForm.submit();
				loader("chakri");
			}

		}

		else {
			alert("???? ?? ??????? ??? ?? ???? ?? ????? ?? ???? ?????? ?????? ??? ?? |");
		}
	}
	else {

		if (check == "1") {

			var x = "???? ?? ????? ??? ???? ????? ?? ?";
			if (confirm(x)) {
				document.memberDataForm.action = 'emitraFinalMemberAddition';
				document.memberDataForm.submit();
				loader('chakri');
			}

		}

		else {
			alert("???? ?? ??????? ??? ?? ???? ?? ????? ?? ???? ?????? ?????? ??? ?? |");
		}

	}

}

function loadReceipt(url, div, chakri, params) {
	//alert(url);
	//alert(div);
	//alert(params);
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					//	console.log("xml.responseText:" + xml.responseText);
					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
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

function loadCheckCug(url, chakri, params) {
	//alert(url);
	//alert(div);
	//alert(params);
	var check = "";
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					//	console.log("xml.responseText:" + xml.responseText);
					check = xml.responseText;

				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (check == 1) {

		if (params == 1) {
			document.dashBoardForm.action = "emitraGenerateEnrollBhamashahId";
			document.dashBoardForm.submit();
			loader("chakri");

		}

		else if (params == 2) {
			document.dashBoardForm.action = "familyEnrollment";
			document.dashBoardForm.submit();
			loader("chakri");

		}

		else if (params == 3) {
			document.dashBoardForm.action = "emitraReEnrollmentForm";
			document.dashBoardForm.submit();
			loader("chakri");

		}

	}

	else if (check == 2) {
		alert("?? ?? ?? ??? ?????? ???? ?? | ??? ?????? ?? ?? ?????? ?? ??????? ???? ?? ???? |")
	}

	else if (check == 3) {
		//alert("???? ??? ?????? ???? ?? | ??? ?????? ?? ?? ?????? ?? ??????? ???? ?? ???? |");
		alert("Please retry after some time");

	} else {

	}

}

function checkAadharExists(elem, type) {
	if (type == 1) {
		if (elem.value.length != 0) {
			if (elem.value.length != 12) {
				alert("???? ?????? 12 ???? ?? ?? ???? ???? ?????  !");
				//elem.value = ""; // Reset the textbox
				return false;
			}
		}
	} else {
		if (elem.value.length != 0) {
			if (elem.value.length != 28) {
				alert("???? ???? ?????? 28 ???? ?? ?? ???? ???? ?????  !");
				//elem.value = ""; // Reset the textbox
				return false;
			}
		}
	}

	var xml = new ajaxRequest();
	var params = "adharId=" + elem.value + "&type=" + type;
	xml.onreadystatechange = function() {

		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert('Data saved successfully');
				if (xml.responseText != 0) {
					if (type == 1) {
						alert("?? ???? ?????? ???? ?? ????? ??|");
						elem.value = document.getElementById("adhartemp").value;
						return false;
					} else {
						alert("?? ???? ???? ?????? ???? ?? ????? ??|");
						elem.value = document.getElementById("eIdtemp").value;
						return false;
					}

				}
			} else {
				alert('There is some  proplem in saving kindly check it.');
			}
		}
	};

	xml.open("POST", "checkAdharExists", false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);
}
function openNewWindowMachine(eCode) {
	// alert("URL:"+url)
	var url = 'getMAList?eCode=' + eCode + '&fromDate='
			+ document.getElementById('distFromDate').value + '&toDate='
			+ document.getElementById('distToDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&heading='
			+ document.getElementById('mHeading').value;
	popupWin = window.open(url, 'open_windowma',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function loadCheckMemberDuplicacy(url, chakri, params, flag) {
	//alert(url);
	//alert(flag);
	//alert(params);
	var check = "";
	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					//	console.log("xml.responseText:" + xml.responseText);
					check = xml.responseText;
					//alert(check);
				} else {
					alert("Please try again");
				}

				remove_popup(chakri);
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (flag == "F") {

		if (check > 0) {
			alert("?? ????? ???? ?? ???? ?? ???? ?? |");

		} else {
			document.memberDataForm.action = 'emitraUpdateMemberDataAfterEnrollment';
			document.memberDataForm.submit();
			loader("chakri");

		}
	}

	else if (flag == "R") {

		if (check > 0) {
			alert("?? ????? ???? ?? ???? ?? ???? ?? |");

		} else {
			document.memberDataForm.action = 'emitraReUpdateMemberDataAfterEnrollment';
			document.memberDataForm.submit();
			loader("chakri");

		}
	}

	else if (flag == "M") {

		if (check > 0) {
			alert("?? ????? ???? ?? ???? ?? ???? ?? |");

		} else {
			document.memberDataForm.action = 'emitraUpdateMemberDataAfterAddition';
			document.memberDataForm.submit();
			loader("chakri");

		}

	}
	
	else if (flag == "C") {

		if (check > 0) {
			alert("?? ????? ???? ?? ???? ?? ???? ?? |");

		} else {
			document.memberDataForm.action = 'updateMemberData';
			document.memberDataForm.submit();
			loader("chakri");

		}

	}

	
	else if (flag == "CE") {

		if (check > 0) {
			alert("?? ????? ???? ?? ???? ?? ???? ?? |");

		} else {
			document.memberDataForm.action = 'updateReMemberData';
			document.memberDataForm.submit();
			loader("chakri");

		}

	}
}

function loadCheckEidFormat(id) {

	var check = "0";
	var params = "eId=" + id.value;
	var url = "checkEidFormat";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					check = xml.responseText;
				} else {
					alert("Please try again");
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

	if (check == "1") {
		document.getElementById("eId").value = "";
		alert("???? ???? ?????? ??? ?? |");
		document.getElementById("aadharId").value = "";
		document.getElementById("aadharId").disabled = false;
	} else {
		document.getElementById("aadharId").value = "";
		document.getElementById("aadharId").disabled = true;
	}
}

function openNewWindowExp(id) {
	// alert("URL:"+url)

	var url = 'getBlkcityexp?distId=' + id;

	popupWin = window.open(url, 'open_windowexp',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewBankDistrict(id, name) {
	// alert("URL:"+url)

	var url = 'getNoBankAccblkCity?districtId=' + id + '&fromDate='
			+ document.getElementById('distFromDate').value + '&toDate='
			+ document.getElementById('distToDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&districtName='
			+ name;
	popupWin = window.open(url, 'open_windowgetNoBankAccblkCity',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewBankCityList(id, name) {
	// alert("URL:"+url)

	var url = 'getBankCityList?cityId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&cityName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_windowBankCityList',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewBankblockList(id, name) {
	// alert("URL:"+url)

	var url = 'getBankBlockList?blockId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&blockName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_windowBankblockList',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowBankhofList(bnkID, isrular, disid, blkid, cityid) {
	// alert("URL:"+url)

	var url = 'getBankWiseList?districtId=' + disid + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&bnkID=' + bnkID
			+ '&isrular=' + isrular + '&blkid=' + blkid + '&cityid=' + cityid;

	popupWin = window.open(url, 'open_window32BankhofList',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowDistrictALL(id, name) {
	// alert("URL:"+url)

	var url = 'getUrbanAndRuralALL?districtId=' + id + '&fromDate='
			+ document.getElementById('distFromDate').value + '&toDate='
			+ document.getElementById('distToDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&districtName='
			+ name + '&rType=' + document.getElementById('rType').value;
	popupWin = window.open(url, 'open_windowALL',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNewWindowUrbanALL(id, name) {
	// alert("URL:"+url)

	var url = 'getWardReportALL?cityId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&cityName=' + name
			+ '&rType=' + document.getElementById('rType').value;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window2ALL',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowRuralALL(id, name) {
	// alert("URL:"+url)

	var url = 'getPanchayatReportALL?blockId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&blockName=' + name
			+ '&rType=' + document.getElementById('rType').value;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window1ALL',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowWardALL(id, name) {

	var url = 'getDateWiseWardReportALL?wardId=' + id + '&cityId='
			+ document.getElementById('cityId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&wardName=' + name
			+ '&rType=' + document.getElementById('rType').value;
	/*
	
	//alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window4ALL',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowPanchayatALL(id, name) {
	// alert("URL:"+url)

	var url = 'getDateWisePanchayatReportALL?panchayatId=' + id + '&blockId='
			+ document.getElementById('blockId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&GramName=' + name
			+ '&rType=' + document.getElementById('rType').value;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window3ALL',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function checkBhamashahId(id, type) {
	if (id.substring(0, 4) == '9999') {
		if (type == "1") {
			alert("?? ??????? ???? ?????? QC ?? ??? ?????? ???? ???|");
		} else if (type == "2") {
			alert("?? ??????? ???? ?????? QC Editing ?? ??? ?????? ???? ???|");
		} else if (type == "3") {
			alert("?? ??????? ???? ?????? Verification ?? ??? ?????? ???? ???|");
		} else if (type == "4") {
			alert("?? ??????? ???? ?????? 2nd Verification ?? ??? ?????? ???? ???|");
		}
		return false;
	}
	
	else if(id.substring(0, 4) == '0000')
		{
		
		if(id.substring(5, 9) == '1111')
			{
		if (type == "1") {
			alert("?? ??????? ???? ?????? QC ?? ??? ?????? ???? ???|");
		} else if (type == "2") {
			alert("?? ??????? ???? ?????? QC Editing ?? ??? ?????? ???? ???|");
		} else if (type == "3") {
			alert("?? ??????? ???? ?????? Verification ?? ??? ?????? ???? ???|");
		} else if (type == "4") {
			alert("?? ??????? ???? ?????? 2nd Verification ?? ??? ?????? ???? ???|");
		}
		return false;
			}
		return false;
}
	return true;
}

function loadEmitraId(url, id, chakri, params, modCheck) {
	/*alert(url);
	alert(id);
	alert(chakri);
	alert(params);
	alert(modCheck);*/
	var check = "";
	var arr = "";
	var str = "";
	var flag = "";
	
	var k=document.getElementById('bhamashahId').value;
	if (document.getElementById('bhamashahId').value == "") {

		alert("??????? ???? ?????? ????|");
	} 
	else if (k.substring(0, 4) != '9999' & modCheck == "1")
		{
		alert("?? ??????? ???? ?????? ?????????? ?? ??? ?????? ???? ???|");
		}
	
	else if (k.substring(0, 4) != '9999' & modCheck == "2")
	{
	alert("?? ??????? ???? ?????? QC ?? ??? ?????? ???? ???|");
	}
	else {

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
					//	 alert("xml.responseText:" + xml.responseText);

						check = xml.responseText;

					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		} catch (e) {
			alert(e);
		}

		if (modCheck == "1") {
			if (check == 25) {
				hideSpan("mainData");
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????? ???? ?????? ?? ????? ????????? ?? ??? ???? ?? ???? ?? |";
				hideSpan("docBtn");
				return false;
			}
			
			
			else if(check == "null" | check == null | check =="")
				{
				
				alert("???? ??????? ???? ?????? ??? ??|");
				}
			else if(check == "X")
			{
			alert("?? ??????? ???? ?????? ?? ??????????? ???? ?????? ?????? ???? ???? ??? ?? |");
			}
			else if (check < 4) {
				alert("This Bhamashah Id is Not Ready For Freezing, Cannot access");
			} else if ( check == 5) {
				//alert(check);
				document.verificationform.action = "emitraMukhiyaVerificationDetails";
				document.verificationform.submit();
				loader(chakri);

			} else if (check > 5) {
				alert("?? ??????? ???? ?????? ?? ?????????? ?? ??? ??|");
			}
			
			else{
				alert("???? ??????? ???? ?????? ??? ??|");
			}
		}
		else if (modCheck == "2") {
			
			if (check == "null" |check==null| check =="") {
				alert("???? ??????? ???? ?????? ??? ??|");
			}
			else if(check==25)
				{
				hideSpan("mainData");
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????? ???? ?????? ?? ????? ????????? ?? ??? ???? ?? ???? ?? |";
				hideSpan("docBtn");
				return false;
				
				}
			
			else if(check == "X")
			{
			alert("?? ??????? ???? ?????? ?? ??????????? ???? ?????? ?????? ???? ???? ??? ?? |");
			}
			else if (check == 0 | check==1 | check==2 |check==18 ) {
				document.verificationform.action = "emitraMukhiyaQcForm";
				document.verificationform.submit();
				loader(chakri);
			} 
			else if(check ==  5 ){
				

				alert("This Bhamashah ID is under verification, can�t access");

				alert("This Bhamashah ID is under verification, canӴ access");

			}
			else if(check ==  3 | check== 4 ){
				
				alert("?? ??????? ???? ?????? QC ?? ??? ?????? ???? ??|");
			}
			
			else if(check ==  6  ){
				
				alert("?? ??????? ???? ?????? ?? ?????????? ?? ??? ??|");
			}
			
			else if(check > 6  ){
				
				alert("?? ??????? ???? ?????? QC ?? ??? ?????? ???? ??|");
			}
		}
	}
}

function openNewWindowDistrictBhamashah(id, name) {
	// alert("URL:"+url)

	var url = 'getUrbanAndRuralBhamashah?districtId=' + id + '&fromDate='
			+ document.getElementById('distFromDate').value + '&toDate='
			+ document.getElementById('distToDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&districtName='
			+ name;
	popupWin = window.open(url, 'open_windowBhamashah',
			'scrollbars=yes, dependent, width=1200, height=700');
}

function openNoewWindowUrbanBhamashah(id, name) {
	// alert("URL:"+url)

	var url = 'getWardBhamashahReport?cityId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&cityName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window2bhamashah',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowRuralBhamashah(id, name) {
	// alert("URL:"+url)

	var url = 'getPanchayatBhamashahReport?blockId=' + id + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&blockName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window1Bhamashah',
			'scrollbars=yes, dependent, width=1100, height=700');
}

function openNewWindowBhWard(id, name) {

	var url = 'getDateWiseWardBhamashahReport?wardId=' + id + '&cityId='
			+ document.getElementById('cityId').value + '&districtId='
			+ document.getElementById('districtId').value + '&fromDate='
			+ document.getElementById('fromDate').value + '&toDate='
			+ document.getElementById('toDate').value + '&flagCheck='
			+ document.getElementById('flagCheck').value + '&wardName=' + name;

	//alert("URL:"+url)
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_window4bhWard',
			'scrollbars=yes, dependent, width=1000, height=700');
}

function openNewWindowBhPanchayat(id, name) {
	// alert("URL:"+url)

	var url = 'getDateWisePanchayatBhamashahReport?panchayatId=' + id
			+ '&blockId=' + document.getElementById('blockId').value
			+ '&districtId=' + document.getElementById('districtId').value
			+ '&fromDate=' + document.getElementById('fromDate').value
			+ '&toDate=' + document.getElementById('toDate').value
			+ '&flagCheck=' + document.getElementById('flagCheck').value
			+ '&GramName=' + name;
	/*
	 * popupWin1 = window.open(url, 'open_window', 'scrollbars=yes, dependent,
	 * width=1200, height=700');
	 */
	Win = window.open(url, 'open_windowBh',
			'scrollbars=yes, dependent, width=1000, height=700');
}
//Nakul Code
function loadCardReasont(url, id, chakri, params) {

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
		//	loader(chakri);
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					document.getElementById(id).innerHTML = xml.responseText;

					/*alert("DATA SAVE SUCCESSFULLY");*/

				} else {
					alert("Please try again");
				}

			//	remove_popup(chakri);
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


//==============================================Nakul Code End===============================================================
function loadCheckBank(url, id, chakri, params, modCheck) {

	var check = "";
	var arr = "";
	var str = "";
	var flag = "";
	
	
	//alert(params);

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);

						check = xml.responseText;

					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		} catch (e) {
			alert(e);
		}

	if(check=="X")
		{
		hideSpan("mainData");
		alert("?? ??????? ???? ??????/???? ?????? ??? ?? | ");
		
		}
	else if (check=="K")
	{
	hideSpan("mainData");
	alert("?? ???? ?????? ???? ??????? ???? ???? ?? ??? ?????? ???? ?? |");
	

	}
	else if (check=="Y")
		{
		hideSpan("mainData");
		alert("?? ??????? ????/???? ?????? ???? ????? ???? ???? ?? ??? ?????? ???? ?? |");
	
		}
	
	else if (check=="N")
	{
	hideSpan("mainData");
	alert(" ?? ?????? ?? ???? ?? ????? ?? ???? ??????? ??????? ??? ???? ?? | \n ??? ?????? ?? ??????? ???? /???? ?????? ???? \n  ????? ???? ???? ?? ??? ?????? ???? ?? |");

	}
	
	
	else{
		//
		document.mukhiyaDataCorrectionForm.action = "emitraShowFamilyBankBranchDetailsPopulate";
		document.mukhiyaDataCorrectionForm.submit();
		loader('chakri');
		showSpan("mainData");
		
	}
		
}
	


function loadCheckCitizenAadhar(id) {

	var check = "0";
	var params = "aadharId=" + id.value+"&mainId="+document.getElementById("mainId").value;
	var url = "checkCitizenAadharDuplicacy";

	try {

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);
					check = xml.responseText;
				} else {
					alert("Please try again");
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
	if (check == "1")

	{
		document.getElementById("aadharId").value = "";
		alert("???? ?????? ???? ?? ????? ?? |");
		
	}

	else {
	/*	document.getElementById("eId").value = "";
		document.getElementById("eId").disabled = true;*/
	}
	
	
}
	
	function loadCheckMobile(id) {

		var check = "0";
		var params = "mobileNo=" + id.value;
		var url = "checkMobileDuplicacy";

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						check = xml.responseText;
					} else {
						alert("Please try again");
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
		if (check == "1")

		{
			document.getElementById("mobileNo").value = "";
			alert("?????? ?????? ???? ?? ????? ?? |");
			return false;
		}

		else {
			
		}
}
	
	

	function loadCheckBankAadhar(id,dId,mid) {

		var check = "0";
		var params = "aadharId=" + id.value+"&mainId="+mid;
		var url = "checkAadharDuplicacy";

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						check = xml.responseText;
					} else {
						alert("Please try again");
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
		if (check == "1")

		{
			alert("???? ?????? ???? ?? ????? ?? |");
			id.value = "";
			document.getElementById(dId).value = "";
			document.getElementById(dId).disabled = false;
		}

		else {
			document.getElementById(dId).value = "";
			document.getElementById(dId).disabled = true;
		}

	}
	function loadCheckBankEid(id,dId,mId) {

		var check = "0";
		var params = "eId=" + id.value+"&mainId="+mId;
		var url = "checkEidDuplicacy";

		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						check = xml.responseText;
					} else {
						alert("Please try again");
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

		if (check == "1")

		{
				id.value = "";
			alert("???? ???? ?????? ???? ?? ????? ?? |");

			document.getElementById(dId).value = "";
			document.getElementById(dId).disabled = false;
		}

		else {
			document.getElementById(dId).value="";
			document.getElementById(dId).disabled=true;
		}
	}
	
	
	
	
	
	
	function loadCitizenEnrollment(url, id, chakri, params) {

		var check = "";
		var arr = "";
		var str = "";
		var flag = "";
	
		if(document.getElementById("registrationId").value=="")
		 {
			 alert("????? ??????????? ?????? ??? |");
			 }
		else if (document.getElementById("registrationId").value.length<8)

			{
			
			alert("??????????? ?????? 8 ???? ?? ?? ???? ???? ?????|");
			}
		
		else{
				try {

					var xml = ajaxRequest();
					xml.onreadystatechange = function() {
						loader(chakri);
						if (xml.readyState == 4) {

							if (xml.status == 200
									|| window.location.href.indexOf("http") == -1) {
								// alert("xml.responseText:" + xml.responseText);

								arr = xml.responseText;
								
								
							
								
								
								

							} else {
								alert("Please try again");
							}

							remove_popup(chakri);
						}
					};

					xml.open("POST", url, false);
					xml.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xml.send(params);
				} catch (e) {
					alert(e);
				}
				
				if(arr=="X")
					{
					
					var fieldError = document.getElementById("messg");
					fieldError.style.display = "inline";
					fieldError.innerHTML = "?? ??????????? ?????? ?? ??????? ?????? ??? ?? |";
				
					}
				
				else if(arr=="Y")
				{
				
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "?? ??????????? ?????? ?? ??????? ??????? ?? ???? ?? |";
			
				}
			
				else{
					document.citizenform.action = "citizenEnrollmentForm";
					document.citizenform.submit();
					loader('chakri');
		
				}
		}				
				
				}



	function loadSendRegistration(url, id, chakri, params) {

		var check = "";
		var arr = "";
		var str = "";
		var flag = "";
	
		if(document.getElementById("mobileNo").value=="")
		 {
			 alert("????? ?????? ?????? ??? |");
			 }
		else if (document.getElementById("mobileNo").value.length<10)

			{
			
			alert("?????? ?????? 10 ???? ?? ?? ???? ???? ?????|");
			}
		
		else{
				try {

					var xml = ajaxRequest();
					xml.onreadystatechange = function() {
						loader(chakri);
						if (xml.readyState == 4) {

							if (xml.status == 200
									|| window.location.href.indexOf("http") == -1) {
								// alert("xml.responseText:" + xml.responseText);

								arr = xml.responseText;
								
								
							
								
								
								

							} else {
								alert("Please try again");
							}

							remove_popup(chakri);
						}
					};

					xml.open("POST", url, false);
					xml.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xml.send(params);
				} catch (e) {
					alert(e);
				}
				
				if(arr=="X")
					{
					
					var fieldError = document.getElementById("messg");
					fieldError.style.display = "inline";
					fieldError.innerHTML = "?? ?????? ?????? ?? ??????? ?????? ??? ?? |";
				
					}
				
				else if(arr=="Y")
				{
				
				var fieldError = document.getElementById("messg");
				fieldError.style.display = "inline";
				fieldError.innerHTML = "???? ????????? ???? ?? ??????????? ?????? ???? ?? ???? ?? ????? ??????????? ?????? ??? ?? ????????? ??? |";
			
				}
			
				else{
					var fieldError = document.getElementById("messg");
					fieldError.style.display = "inline";
					fieldError.innerHTML = "????? ??? ?????? ???? |";
					
				}
		}				
				
				}


	function isAlphaNumericComa(evt) {

        var charCode = (evt.which) ? evt.which : event.keyCode;

        if ((charCode >= 65 && charCode <= 90)  || (charCode == 32) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57) || (charCode == 8) || (charCode == 32) || (charCode == 45) || (charCode == 44)) {

            return true;

        }

        else {

            alert('????? ???? ?? ??????  ??? ????');

            return false;

        }
    }

	function loadCitizenReceipt(url, check, chakri, params) {
		//alert(url);
		//alert(div);
		//alert(params);
		
		var a ;
		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						//	console.log("xml.responseText:" + xml.responseText);
						a = xml.responseText;

					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		} catch (e) {
			alert(e);
		}
		
		
		
		if (a=="X")
			{
			if(check==1)
				document.getElementById("messg").innerHTML = "??????? ???? ?????? ?? ??????? ?????? ??? ??  |";	
			else if(check==2)
				document.getElementById("messg").innerHTML = "??????????? ?????? ?? ??????? ?????? ??? ??  |";
			else
				document.getElementById("messg").innerHTML = "???? ?????? ?? ??????? ?????? ??? ??  |";				
				
			}
		else if(a=="Y")
			{
			
			
		if(check==2)
				document.getElementById("messg").innerHTML = "??????????? ?????? ?? ??????? ??? ??? ?? |  |";
			else
				document.getElementById("messg").innerHTML = "???? ?????? ?? ??????????? ?????? ?? ??????? ??? ??? ?? |";	
			}
		else{
			document.ackReceiptForm.action = "citizenReceipt";
			document.ackReceiptForm.submit();
			loader("chakri"); 
		}

	}
	function loadCitizenAuthentication(url, check, chakri, params) {
	//	alert(url);
	//alert(div);
		//alert(params);
		
		var status;
		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						//	console.log("xml.responseText:" + xml.responseText);
						status= xml.responseText;
//alert(status);
					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		} catch (e) {
			alert(e);
		}
		
		
		
		if (status=="X")
			{
			document.getElementById("messg").innerHTML = "??????? ???? ?????? ?? ??????? ?????? ??? ??  |";	
			}
		

		else if (status=="Y")
			{
			document.getElementById("messg").innerHTML = "????? ??? ??? ??? ?????? ???? |";	
			
			}
		
		else{
			
			document.getElementById("messg").innerHTML ="???? ????????? ???? ?? O.T.P ?????? ???? ?? ???? ?? ????? O.T.P ??? ?? ????????? ??? |";
			showSpan("otpDiv");
			hideSpan("bhDiv");
		}

	}
	
	function loadCitizenOtp(url, check, chakri, params) {
		//alert(url);
		//alert(div);
		//alert(params);
		
		var a ;
		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						//	console.log("xml.responseText:" + xml.responseText);
						a = xml.responseText;

					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		} catch (e) {
			alert(e);
		}
		
		
		
		if (a=="X")
			{
			document.getElementById("messg").innerHTML ="? ?? ?? ?????? ???? ?????  |";
			}
		else if (a=="Y")
		{
			document.getElementById("messg").innerHTML ="????? ??? ??? ??? ?????? ???? |";	
		}
		
		else{
			document.citizenform.action = "citizenReEnrollmentForm";
			document.citizenform.submit();
			loader("chakri"); 
		}

	}
	
	
	
	function loadHindiTrans(url,chakri, params,pos) {
		//alert(url);
		//alert(div);
		//alert(params);
		
		var a ;
		try {

			var xml = ajaxRequest();
			xml.onreadystatechange = function() {
				loader(chakri);
				if (xml.readyState == 4) {

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("xml.responseText:" + xml.responseText);
						//	console.log("xml.responseText:" + xml.responseText);
						a = xml.responseText;
						var html = "";
						var lines = document.getElementById("english").value.split('\n');
						for ( var i = 0; i < lines.length; i++) {
							// code here using lines[i] which will give you each line
							html += lines[i];
							html += " ";
						}
						html = html.substring(0, html.length - 1);
					
						var test= html.substring(0,pos);
						var test1= html.substring(pos,html.length+1 );
						var arr  = test.split(" ");
						arr[arr.length-1]=a;
						var t ="";
						for(var n=0;n<arr.length;n++)
							{
							
							if(n==0)
							t=arr[n];
							
							else
								t=t+" "+arr[n];
							}
						
						
						
						document.getElementById("english").value=t + ""+ test1;
						
					} else {
						alert("Please try again");
					}

					remove_popup(chakri);
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
	
	
	
	
	
	function changeDesignation(field) {
		/*loadDataNew('getdesigPerUserType.do', 'designation', 'desigChakeri',
				'userTypeId=' + document.userform.userTypeId.value);*/
		//alert("ashish");
		alert(document.userform.userTypeId.value);
		loadTbl(field,'getdesigPerUserType','userTypeId=' + document.userform.userTypeId.value)
	}
	

	
	/*function loadDataForUser(url, div, params) {
		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {
				if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
					 
					if (xml.responseText == "301") {

						document.getElementById(div).innerHTML = "Login Id '"
								+ document.getElementById('loginId').value
								+ "' already exists |"; // params.substring(8)
						showSpan(div);

					}

					if (xml.responseText == "302") {
						document.getElementById(div).innerHTML = "Mail Id '"
								+ document.getElementById('mailId').value
								+ "' already exists |";// params.substring(7)
						document.getElementById('mailId').value="";
						showSpan(div);
					}

					}

				} else {

					alert("An error has occured making the request");
				}

			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xml.send(params);

	}*/





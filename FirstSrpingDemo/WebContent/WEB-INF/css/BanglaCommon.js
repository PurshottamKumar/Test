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

/* Added by Harit Grover, changed by umesh batra */
/*function isNumber(name,evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode == 47)) {
		alert("Please enter "+name+" in number");
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

function isValidEmail(email) {
	if (email == null) {
		// alert("Please Enter Valid E-mail Id")
		return true;
	}
	if (email.length == 0) {
		// alert("Please Enter Valid E-mail Id")
		return true;
	}
	if (!allValidChars(email)) { // check to make sure all characters are
		// valid
		alert("Please Enter Valid E-mail Id")

		return false;
	}
	if (email.indexOf("@") < 1) { // must contain @, and it must not be the
		// first character
		alert("Please Enter Valid E-mail Id")

		return false;
	} else if (email.lastIndexOf(".") <= email.indexOf("@")) { // last dot must
		// be after the
		// @
		alert("Please Enter Valid E-mail Id")

		return false;
	} else if (email.indexOf("@") == email.length) { // @ must not be the
		// last character
		alert("Please Enter Valid E-mail Id")

		return false;
	} else if (email.indexOf("..") >= 0) { // two periods in a row is not valid
		alert("Please Enter Valid E-mail Id")

		return false;
	} else if (email.indexOf(".") == email.length
			|| (email.length - email.lastIndexOf(".")) < 3) { // . must not be
		// the last
		// character
		alert("Please Enter Valid E-mail Id")
		return false;
	}
	return true;
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
		alert("Please Do Not Use This Character....!!")
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
function isNumbersOnly(ctrl, msg) {
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
//to check alphanumeric
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

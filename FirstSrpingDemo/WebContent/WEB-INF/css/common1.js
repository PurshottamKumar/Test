function stopRKey(evt) {
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement
			: null);
	if ((evt.keyCode == 13) && (node.type == "text")) {
		return false;
	}
}

document.onkeypress = stopRKey;

function ajaxRequest() {
	var activexmodes = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ]; // activeX
	// versions
	// to check
	// for in IE
	if (window.ActiveXObject) {
		// Test for support for ActiveXObject in IE
		// first (as XMLHttpRequest in IE7 is broken)if

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

function balanceIrrigatedAreaTax1() {
	// alert("11111");

	if (document.landRevenueDetails.laganpaid1.value != ""
			|| document.getElementById('laganpaid').value != "") {

		if (parseFloat(document.landRevenueDetails.laganpaid1.value) >= document
				.getElementById('laganpaid').value) {
			// alert("22222");
			document.landRevenueDetails.laganpaid11.value = (parseFloat(document.landRevenueDetails.laganpaid1.value) - document
					.getElementById('laganpaid').value).toFixed(3);
			/*
			 * document.landRevenueDetails.comchtreasTotal.value =
			 * (parseFloat(document.getElementById('compaid11').value)+
			 * parseFloat(document.getElementById('divpaid11').value)+parseFloat(document.getElementById('otherspaid11').value)+parseFloat(document.getElementById('cesspaid11').value)+parseFloat(document.getElementById('laganpaid11').value)).toFixed(3);
			 */document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
					.getElementById('compaid11').value
					+ document.getElementById('divpaid11').value
					+ document.getElementById('otherspaid11').value
					+ document.getElementById('cesspaid11').value
					+ document.getElementById('laganpaid11').value)).toFixed(3);

		} else {
			var laganp = document.getElementById("laganp");
			laganp.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("laganp").innerHTML = errorMsg;
		}
	}
}
function balanceLaganToPaid() {

	if (document.landRevenueDetails.laganpaid1.value != ""
			|| document.getElementById('laganpaid').value != "") {

		if (parseFloat(document.landRevenueDetails.laganpaid1.value) >= document
				.getElementById('laganpaid').value) {
			document.landRevenueDetails.laganchtreas.value = (parseFloat(document.landRevenueDetails.laganpaid1.value) - document
					.getElementById('laganpaid').value).toFixed(2);
			document.landRevenueDetails.laganpaid2.value = document.landRevenueDetails.laganchtreas.value;
			document.landRevenueDetails.laganchtreas1.value = document.landRevenueDetails.laganchtreas.value;

		} else {

			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.laganpaid.value = "";
			return false;
		}
	}
}
function balanceLaganToPaid2() {

	if (document.landRevenueDetails.laganpaid2.value != ""
			|| document.getElementById('laganpaid11').value != "") {

		if (parseFloat(document.landRevenueDetails.laganpaid2.value) >= document
				.getElementById('laganpaid11').value) {
			document.landRevenueDetails.laganchtreas1.value = (parseFloat(document.landRevenueDetails.laganpaid2.value) - document
					.getElementById('laganpaid11').value).toFixed(2);

		} else {
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.laganpaid11.value = "";
			return false;
		}
	}
}

function balanceIrrigatedAreaTax2() {

	if (document.landRevenueDetails.cesspaid1.value != ""
			|| document.getElementById('cesspaid').value != "") {
		if (parseFloat(document.landRevenueDetails.cesspaid1.value) >= document
				.getElementById('cesspaid').value) {

			document.landRevenueDetails.cesspaid11.value = (parseFloat(document.landRevenueDetails.cesspaid1.value) - document
					.getElementById('cesspaid').value).toFixed(3);
			document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
					.getElementById('compaid11').value
					+ document.getElementById('divpaid11').value
					+ document.getElementById('otherspaid11').value
					+ document.getElementById('cesspaid11').value
					+ document.getElementById('laganpaid11').value)).toFixed(3);
		} else {
			var laganp = document.getElementById("laganp");
			laganp.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("laganp").innerHTML = errorMsg;
		}
	}
}
function balanceCessToPaid() {

	if (document.landRevenueDetails.cesspaid1.value != ""
			|| document.getElementById('cesspaid').value != "") {
		if (parseFloat(document.landRevenueDetails.cesspaid1.value) >= document
				.getElementById('cesspaid').value) {

			document.landRevenueDetails.cesschtreas.value = (parseFloat(document.landRevenueDetails.cesspaid1.value) - document
					.getElementById('cesspaid').value).toFixed(2);
			document.landRevenueDetails.cesspaid2.value = document.landRevenueDetails.cesschtreas.value;
			document.landRevenueDetails.cesschtreas1.value = document.landRevenueDetails.cesschtreas.value;

		} else {
			// var laganp = document.getElementById("laganp");
			// laganp.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.cesspaid.value = "";
			return false;
		}
	}
}
function balanceCessToPaid2() {

	if (document.landRevenueDetails.cesspaid2.value != ""
			|| document.getElementById('cesspaid11').value != "") {
		if (parseFloat(document.landRevenueDetails.cesspaid2.value) >= document
				.getElementById('cesspaid11').value) {

			document.landRevenueDetails.cesschtreas1.value = (parseFloat(document.landRevenueDetails.cesspaid2.value) - document
					.getElementById('cesspaid11').value).toFixed(2);

		} else {
			// var laganp = document.getElementById("laganp");
			// laganp.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.cesspaid11.value = "";
			return false;
		}
	}
}

function balanceIrrigatedAreaTax3() {

	if (document.landRevenueDetails.otherspaid1.value != ""
			|| document.getElementById('otherspaid').value != "") {
		if (parseFloat(document.landRevenueDetails.otherspaid1.value) >= document
				.getElementById('otherspaid').value) {

			document.landRevenueDetails.otherspaid11.value = (parseFloat(document.landRevenueDetails.otherspaid1.value) - document
					.getElementById('otherspaid').value).toFixed(3);
			document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
					.getElementById('compaid11').value
					+ document.getElementById('divpaid11').value
					+ document.getElementById('otherspaid11').value
					+ document.getElementById('cesspaid11').value
					+ document.getElementById('laganpaid11').value)).toFixed(3);
		} else {
			var laganp = document.getElementById("laganp");
			laganp.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("laganp").innerHTML = errorMsg;
		}
	}
}
function balanceOthersPaid() {

	if (document.landRevenueDetails.otherspaid1.value != ""
			|| document.getElementById('otherspaid').value != "") {
		if (parseFloat(document.landRevenueDetails.otherspaid1.value) >= document
				.getElementById('otherspaid').value) {

			document.landRevenueDetails.otherchtreas.value = (parseFloat(document.landRevenueDetails.otherspaid1.value) - document
					.getElementById('otherspaid').value).toFixed(2);
			document.landRevenueDetails.otherspaid2.value = document.landRevenueDetails.otherchtreas.value;
			document.landRevenueDetails.otherchtreas1.value = document.landRevenueDetails.otherchtreas.value;

			/**/
		} else {
			// var laganp = document.getElementById("laganp");
			// laganp.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.otherspaid.value = "";
			// document.getElementById("laganp").innerHTML = errorMsg;
			return false;
		}
	}
}
function balanceOthersPaid2() {

	if (document.landRevenueDetails.otherspaid2.value != ""
			|| document.getElementById('otherspaid11').value != "") {
		if (parseFloat(document.landRevenueDetails.otherspaid2.value) >= document
				.getElementById('otherspaid11').value) {

			document.landRevenueDetails.otherchtreas1.value = (parseFloat(document.landRevenueDetails.otherspaid2.value) - document
					.getElementById('otherspaid11').value).toFixed(2);
			/**/
		} else {
			// var laganp = document.getElementById("laganp");
			// laganp.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.otherspaid11.value = "";
			// document.getElementById("laganp").innerHTML = errorMsg;
			return false;
		}
	}
}

function balanceIrrigatedAreaTax4() {

	if (document.landRevenueDetails.divpaid1.value != ""
			|| document.getElementById('divpaid').value != "") {
		if (parseFloat(document.landRevenueDetails.divpaid1.value) >= document
				.getElementById('divpaid').value) {

			document.landRevenueDetails.divpaid11.value = (parseFloat(document.landRevenueDetails.divpaid1.value) - document
					.getElementById('divpaid').value).toFixed(3);
			document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
					.getElementById('compaid11').value
					+ document.getElementById('divpaid11').value
					+ document.getElementById('otherspaid11').value
					+ document.getElementById('cesspaid11').value
					+ document.getElementById('laganpaid11').value)).toFixed(3);
		} else {
			var laganp = document.getElementById("laganp");
			laganp.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("laganp").innerHTML = errorMsg;
		}
	}
}
function balanceDivPaid() {

	if (document.landRevenueDetails.divpaid1.value != ""
			|| document.getElementById('divpaid').value != "") {
		if (parseFloat(document.landRevenueDetails.divpaid1.value) >= document
				.getElementById('divpaid').value) {

			document.landRevenueDetails.divchtreas.value = (parseFloat(document.landRevenueDetails.divpaid1.value) - document
					.getElementById('divpaid').value).toFixed(2);
			document.landRevenueDetails.divpaid2.value = document.landRevenueDetails.divchtreas.value;
			document.landRevenueDetails.divchtreas1.value = document.landRevenueDetails.divchtreas.value;

		} else {
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.divpaid.value = "";
			return false;
		}
	}
}
function balanceDivPaid2() {

	if (document.landRevenueDetails.divpaid2.value != ""
			|| document.getElementById('divpaid11').value != "") {
		if (parseFloat(document.landRevenueDetails.divpaid2.value) >= document
				.getElementById('divpaid11').value) {

			document.landRevenueDetails.divchtreas1.value = (parseFloat(document.landRevenueDetails.divpaid2.value) - document
					.getElementById('divpaid11').value).toFixed(2);
		} else {
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.divpaid11.value = "";
			return false;
		}
	}
}

function balanceIrrigatedAreaTax5() {

	if (document.landRevenueDetails.compaid1.value != ""
			|| document.getElementById('compaid').value != "") {
		if (parseFloat(document.landRevenueDetails.compaid1.value) >= document
				.getElementById('compaid').value) {

			document.landRevenueDetails.compaid11.value = (parseFloat(document.landRevenueDetails.compaid1.value) - document
					.getElementById('compaid').value).toFixed(3);
			document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
					.getElementById('compaid11').value
					+ document.getElementById('divpaid11').value
					+ document.getElementById('otherspaid11').value
					+ document.getElementById('cesspaid11').value
					+ document.getElementById('laganpaid11').value)).toFixed(3);
		} else {
			var laganp = document.getElementById("laganp");
			laganp.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("laganp").innerHTML = errorMsg;
		}
	}
}
function balanceComPaid() {

	if (document.landRevenueDetails.compaid1.value != ""
			|| document.getElementById('compaid').value != "") {
		if (parseFloat(document.landRevenueDetails.compaid1.value) >= document
				.getElementById('compaid').value) {

			document.landRevenueDetails.comchtreas.value = (parseFloat(document.landRevenueDetails.compaid1.value) - document
					.getElementById('compaid').value).toFixed(2);
			document.landRevenueDetails.compaid2.value = document.landRevenueDetails.comchtreas.value;
			document.landRevenueDetails.comchtreas1.value = document.landRevenueDetails.comchtreas.value;

		} else {
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.compaid.value = "";
			return false;
		}
	}
}
function balanceComPaid2() {

	if (document.landRevenueDetails.compaid2.value != ""
			|| document.getElementById('compaid11').value != "") {
		if (parseFloat(document.landRevenueDetails.compaid2.value) >= document
				.getElementById('compaid11').value) {

			document.landRevenueDetails.comchtreas1.value = (parseFloat(document.landRevenueDetails.compaid2.value) - document
					.getElementById('compaid11').value).toFixed(2);

		} else {
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			document.landRevenueDetails.compaid11.value = "";
			return false;
		}
	}
}

function DatePopUp1(field) {
	document.getElementById('lagandt').value = field;
	document.getElementById('cessdt').value = field;
	document.getElementById('otherdt').value = field;
	document.getElementById('divdt').value = field;
	document.getElementById('comdt').value = field;
}
function DatePopUp2(field) {
	document.getElementById('lagandttreas').value = field;
	document.getElementById('cessdttreas').value = field;
	document.getElementById('otherdttreas').value = field;
	document.getElementById('divdttreas').value = field;
	document.getElementById('comdttreas').value = field;
}

function ChallanNoUpdate() {

	var text1 = document.landRevenueDetails.challanNoTotal.value;
	// alert("text1--"+text1);
	// document.landRevenueDetails.challanNo1.value =text1;
	document.getElementById('laganchtreas').value = text1;
	document.getElementById('cesschtreas').value = text1;
	document.getElementById('otherchtreas').value = text1;
	document.getElementById('divchtreas').value = text1;
	document.getElementById('comchtreas').value = text1;
}
function ChallanNoUpdateDiversion() {
	var text1 = document.bhookhandRevenueDetails.challanNo.value;

	// document.landRevenueDetails.challanNo1.value =text1;
	document.getElementById('challanNo1').value = text1;
	document.getElementById('challanNo2').value = text1;
	document.getElementById('challanNo3').value = text1;
	document.getElementById('challanNo4').value = text1;
	document.getElementById('challanNo5').value = text1;
	document.getElementById('challanNo6').value = text1;
	document.getElementById('challanNo7').value = text1;
	document.getElementById('challanNo8').value = text1;
	document.getElementById('challanNo9').value = text1;

}
function DatePopUpDiversion(field) {
	document.getElementById('challanDate1').value = field;
	document.getElementById('challanDate2').value = field;
	document.getElementById('challanDate3').value = field;
	document.getElementById('challanDate4').value = field;
	document.getElementById('challanDate5').value = field;
	document.getElementById('challanDate6').value = field;
	document.getElementById('challanDate7').value = field;
	document.getElementById('challanDate8').value = field;
	document.getElementById('challanDate9').value = field;

}
function calLoanDetail() {
	if (document.landRevenueDetails.compaidToatlAmount.value == document.landRevenueDetails.compaidTotal.value) {
		document.getElementById('laganpaid').value = document
				.getElementById('laganpaid1').value;
		document.getElementById('cesspaid').value = document
				.getElementById('cesspaid1').value;
		document.getElementById('otherspaid').value = document
				.getElementById('otherspaid1').value;
		document.getElementById('divpaid').value = document
				.getElementById('divpaid1').value;
		document.getElementById('compaid').value = document
				.getElementById('compaid1').value;
		balanceIrrigatedAreaTax1();

		balanceIrrigatedAreaTax2();

		balanceIrrigatedAreaTax3();

		balanceIrrigatedAreaTax4();

		balanceIrrigatedAreaTax5();
		document.landRevenueDetails.comchtreasTotal.value = (parseFloat(document
				.getElementById('compaid11').value
				+ document.getElementById('divpaid11').value
				+ document.getElementById('otherspaid11').value
				+ document.getElementById('cesspaid11').value
				+ document.getElementById('laganpaid11').value)).toFixed(3);
	} else {
		// document.landRevenueDetails.compaidToatlAmount.value="";
		document.getElementById('laganpaid').value = "";
		document.getElementById('cesspaid').value = "";
		document.getElementById('otherspaid').value = "";
		document.getElementById('divpaid').value = "";
		document.getElementById('compaid').value = "";
	}
}

function ArrNoDupe(a) {
	var temp = {};
	for ( var i = 0; i < a.length; i++)
		temp[a[i]] = true;
	var r = [];
	for ( var k in temp)
		r.push(k);
	return r;
}

function calLoanDetailDiversion() {

	if (document.bhookhandRevenueDetails.compaidToatlAmountDiversion.value == document.bhookhandRevenueDetails.compaidTotalDiversion.value) {
		document.getElementById('totalPremium1').value = document
				.getElementById('totalPremium').value;
		document.getElementById('annualRent1').value = document
				.getElementById('annualRent').value;
		document.getElementById('prevYearBakaya1').value = document
				.getElementById('prevYearBakaya').value;
		document.getElementById('approvedPenality1').value = document
				.getElementById('approvedPenality').value;
		document.getElementById('panchayatKar1').value = document
				.getElementById('panchayatKar').value;
		document.getElementById('upkar1').value = document
				.getElementById('upkar').value;

		document.bhookhandRevenueDetails.totalPremium2.value = (parseFloat(document.bhookhandRevenueDetails.totalPremium.value) - document
				.getElementById('totalPremium1').value).toFixed(3);
		document.bhookhandRevenueDetails.annualRent2.value = (parseFloat(document.bhookhandRevenueDetails.annualRent.value) - document
				.getElementById('annualRent1').value).toFixed(3);
		document.bhookhandRevenueDetails.prevYearBakaya2.value = (parseFloat(document.bhookhandRevenueDetails.prevYearBakaya.value) - document
				.getElementById('prevYearBakaya1').value).toFixed(3);
		document.bhookhandRevenueDetails.approvedPenality2.value = (parseFloat(document.bhookhandRevenueDetails.approvedPenality.value) - document
				.getElementById('approvedPenality1').value).toFixed(3);
		document.bhookhandRevenueDetails.panchayatKar2.value = (parseFloat(document.bhookhandRevenueDetails.panchayatKar.value) - document
				.getElementById('panchayatKar1').value).toFixed(3);
		document.bhookhandRevenueDetails.upkar2.value = (parseFloat(document.bhookhandRevenueDetails.upkar.value) - document
				.getElementById('upkar1').value).toFixed(3);

		document.bhookhandRevenueDetails.comDiversionTotal.value = (parseFloat(document
				.getElementById('totalPremium2').value
				+ document.getElementById('annualRent2').value
				+ document.getElementById('prevYearBakaya2').value
				+ document.getElementById('approvedPenality2').value
				+ document.getElementById('panchayatKar2').value
				+ document.getElementById('upkar2').value)).toFixed(3);
	} else {
		// document.landRevenueDetails.compaidToatlAmount.value="";
		document.getElementById('totalPremium1').value = "";
		document.getElementById('annualRent1').value = "";
		document.getElementById('prevYearBakaya1').value = "";
		document.getElementById('approvedPenality1').value = "";
		document.getElementById('panchayatKar1').value = "";
		document.getElementById('upkar1').value = "";
		document.bhookhandRevenueDetails.comDiversionTotal.value = document.bhookhandRevenueDetails.compaidToatlAmountDiversion.value
				- document.bhookhandRevenueDetails.compaidTotalDiversion.value;
	}
}
function dateComparison1(field) {
	// alert("field"+field);

	// fnInitCalendar(field,
	// 'loanPayDate','top=20,left=20,drag=false,close=true');

	/* if (document.taxLoanform.loanPayDate.value!="") { */
	document.taxLoanform.loanOrderDate.value = field;
	/* } */

}
function dateComparison2(field) {
	document.taxLoanform.loanPayDate.value = field;

}

function userAddSubmit(sndTeh) {

	var yearId = document.arrearform.yearId.value;
	var laganpaid = document.arrearform.laganpaid.value;
	var cesspaid = document.arrearform.cesspaid.value;
	var otherspaid = document.arrearform.otherspaid.value;
	var divpaid = document.arrearform.divpaid.value;
	var compaid = document.arrearform.compaid.value;
	var nilambitpaid = document.arrearform.nilambitpaid.value;

	var laganchtreas = document.arrearform.laganchtreas.value;
	var cesschtreas = document.arrearform.cesschtreas.value;
	var otherchtreas = document.arrearform.otherchtreas.value;
	var divchtreas = document.arrearform.divchtreas.value;
	var comchtreas = document.arrearform.comchtreas.value;
	var nilambitchtreas = document.arrearform.nilambitchtreas.value;

	var bhuktankarta = document.arrearform.bhuktankarta.value;
	var jamakarta = document.arrearform.jamakarta.value;

	var lagandue = document.arrearform.lagandue.value;
	var cessdue = document.arrearform.cessdue.value;
	var othersdue = document.arrearform.othersdue.value;
	var divdue = document.arrearform.divdue.value;
	var comdue = document.arrearform.comdue.value;
	var nilambitdue = document.arrearform.nilambitdue.value;
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}

	loadContent('saveArrearUser.do', '&laganpaid=' + laganpaid + '&cesspaid='
			+ cesspaid + '&otherspaid=' + otherspaid + '&divpaid=' + divpaid
			+ '&compaid=' + compaid + '&nilambitpaid=' + nilambitpaid +

			'&laganchtreas=' + laganchtreas + '&cesschtreas=' + cesschtreas
			+ '&otherchtreas=' + otherchtreas + '&divchtreas=' + divchtreas
			+ '&comchtreas=' + comchtreas + '&nilambitchtreas='
			+ nilambitchtreas + '&yearId=' + yearId +

			'&lagandue=' + lagandue + '&cessdue=' + cessdue + '&othersdue='
			+ othersdue + '&divdue=' + divdue + '&comdue=' + comdue
			+ '&nilambitdue=' + nilambitdue +

			'&bhuktankarta=' + bhuktankarta + '&jamakarta=' + jamakarta);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}
}

function saveLandOwnerDetails() {

	var areaLeasedencroached = document.landOwnerDetailsform.areaLeasedencroached.value;
	var leaseDuration = document.landOwnerDetailsform.leaseDuration.value;
	var leaseAmount = document.landOwnerDetailsform.leaseAmount.value;
	var cropAmount = document.landOwnerDetailsform.cropAmount.value;

	loadContent('saveLeaseDetails.do', '&areaLeasedencroached='
			+ areaLeasedencroached + '&leaseDuration=' + leaseDuration
			+ '&leaseAmount=' + leaseAmount + '&cropAmount=' + cropAmount);

}

function savePersonalInfo(sndTeh) {
	// alert("saveupdate");

	// var ownerId = document.personalForm.radioid.value;
	var ownerId = "";
	var changeRecord = "";
	var sequenceId = "";
	ownerId = document.getElementById("ownerIdOne").value;
	sequenceId = document.getElementById("sequenceNoOne").value;
	if (ownerId == "" && sequenceId == "") {
		inputSubmit = document.getElementById("finalSubmit");
		var isSelected = false;
		for ( var i = 0; i < document.personalForm.elements.length; i++) {
			if (document.personalForm.elements[i].type == "radio") {
				if (document.personalForm.elements[i].checked)
					isSelected = true;
			}
		}
		if (!isSelected) {

			alert("संशोधन के लिए कम से कम एक रिकॉर्ड का चयन करें |");

			// remove_popup('adhyatanChakeriPatwari');

			// alert("2222");
			return false;
		}
		// alert("33333");

		ownerId = $("input:radio[name='radioid']:checked").val();
		changeRecord = "new";

	} else {
		ownerId = document.getElementById("ownerIdOne").value;

	}
	var name = document.personalForm.name.value;
	/* var address = document.personalForm.address.value; */
	var pancard = document.personalForm.pancard.value;
	var emailId = document.personalForm.emailId.value;
	var mobileNo = document.personalForm.mobileNo.value;
	var adharCard = document.personalForm.adharCard.value;
	var drivingLicense = document.personalForm.drivingLicense.value;
	var passport = document.personalForm.passport.value;
	var voterIdCard = document.personalForm.voterIdCard.value;
	var kishanCreditCard = document.personalForm.kishanCreditCard.value;
	var rasanCard = document.personalForm.rasanCard.value;
	// var bankName = document.personalForm.bankName.value;
	var bankAcNo = document.personalForm.bankAcNo.value;
	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	var valueId = "saveUpdate";
	/*
	 * var e = document.getElementById("bankId"); var bankId =
	 * e.options[e.selectedIndex].value; if (bankId == 0) { alert(" बैंक का चयन
	 * करें "); return false;
	 */
	if (name == null || name == "") {
		alert("कृपया नाम दर्ज करें |");

		// remove_popup('adhyatanChakeriPatwari');
		return false;
	}

	if (adharCard != null && adharCard != "" && adharCard.length != 12) {
		// remove_popup('adhyatanChakeriPatwari');
		// alert("आधार कार्ड दर्ज करें ");
		alert("कृपया वैध आधार कार्ड आईडी दर्ज करें |");
		return false;

	}

	if (pancard != null && pancard != ""
			&& !validateCaseSensitivePan('pancard')) {
		return false;
	}

	if (passport != null && passport != ""
			&& !validateCaseSensitivePassport('passport')) {
		return false;
	}

	if (emailId != null && emailId != ""
			&& !validateCaseSensitiveEmail('emailId')) {
		return false;
	}

	if (mobileNo != null && mobileNo != "" && mobileNo.length != 10) {
		// remove_popup('adhyatanChakeriPatwari');
		// alert("mobileNo दर्ज करें ");
		alert("कृपया वैध मोबाइल नंबर दर्ज करें |");
		return false;

	} else if (mobileNo.charAt(0) == "0") {
		alert(" मोबाइल नंबर का प्रथम पत्र 0  नहीं हो सकता |");
		return false;
	}

	/*
	 * var a = "1/3"; var split = a.split('/'); var result = (parseInt(split[0],
	 * 10) / parseInt(split[1], 10)).toFixed(3); alert(result);
	 */
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}

	loadContent('savePersonalInfo.do', '&voterIdCard=' + voterIdCard
			+ '&rasanCard=' + rasanCard + '&passport=' + passport + '&bankId='
			+ bankId + '&bankAcNo=' + bankAcNo + '&name=' + name
			+ '&drivingLicense=' + drivingLicense + '&adharCard=' + adharCard
			+ '&mobileNo=' + mobileNo + '&emailId=' + emailId + '&pancard='
			+ pancard + '&kishanCreditCard=' + kishanCreditCard + '&valueId='
			+ valueId + '&sequenceId=' + sequenceId + '&ownerId=' + ownerId
			+ '&changeRecord=' + changeRecord);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}

	var msg = document.getElementById('messageOne').value;

	if (msg != null || msg != "" || msg.length > 0) {

		callfnValidateMessage(document.getElementById('messageOne').value);
	}

}
function savePersonalInfoNew() {

	inputSubmit = document.getElementById("finalSubmitAdd");
	var isSelected = false;
	for ( var i = 0; i < document.personalForm.elements.length; i++) {
		if (document.personalForm.elements[i].type == "radio") {
			if (document.personalForm.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {

		alert("संशोधन के लिए कम से कम एक रिकॉर्ड का चयन करें |");

		// remove_popup('adhyatanChakeriPatwari');

		return false;
	}
	var name = document.personalForm.name.value;

	if (name == null || name == "") {
		// remove_popup('adhyatanChakeriPatwari');
		alert("कृपया नाम दर्ज करें  |");
		return false;

	}

	var ownerId = $("input:radio[name='radioid']:checked").val();
	// var ownerId = document.personalForm.radioid.value;
	/* var address = document.personalForm.address.value; */
	var pancard = document.personalForm.pancard.value;
	var emailId = document.personalForm.emailId.value;
	var mobileNo = document.personalForm.mobileNo.value;
	var adharCard = document.personalForm.adharCard.value;
	var drivingLicense = document.personalForm.drivingLicense.value;
	var passport = document.personalForm.passport.value;
	var voterIdCard = document.personalForm.voterIdCard.value;
	var kishanCreditCard = document.personalForm.kishanCreditCard.value;
	var rasanCard = document.personalForm.rasanCard.value;
	// var bankName = document.personalForm.bankName.value;
	var bankAcNo = document.personalForm.bankAcNo.value;
	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	var valueId = "addNew";
	var sequenceId = "5";

	if (name == null || name == "") {
		alert("कृपया नाम दर्ज करें |");

		// remove_popup('adhyatanChakeriPatwari');
		return false;
	}

	if (adharCard != null && adharCard != "" && adharCard.length != 12) {
		// remove_popup('adhyatanChakeriPatwari');
		// alert("आधार कार्ड दर्ज करें ");
		alert("कृपया वैध आधार कार्ड आईडी दर्ज करें |");
		return false;

	}

	if (pancard != null && pancard != ""
			&& !validateCaseSensitivePan('pancard')) {
		return false;
	}

	if (passport != null && passport != ""
			&& !validateCaseSensitivePassport('passport')) {
		return false;
	}

	if (emailId != null && emailId != ""
			&& !validateCaseSensitiveEmail('emailId')) {
		return false;
	}

	if (mobileNo != null && mobileNo != "" && mobileNo.length != 10) {
		// remove_popup('adhyatanChakeriPatwari');
		// alert("mobileNo दर्ज करें ");
		alert("कृपया वैध मोबाइल नंबर दर्ज करें |");
		return false;

	}

	/*
	 * var e = document.getElementById("bankId"); var bankId =
	 * e.options[e.selectedIndex].value; if (bankId == 0) { alert(" बैंक का चयन
	 * करें "); return false;
	 */

	loader('adhyatanChakeriPatwari');
	loadContent('savePersonalInfo.do', '&voterIdCard=' + voterIdCard
			+ '&rasanCard=' + rasanCard + '&passport=' + passport + '&bankId='
			+ bankId + '&bankAcNo=' + bankAcNo + '&name=' + name
			+ '&drivingLicense=' + drivingLicense + '&adharCard=' + adharCard
			+ '&mobileNo=' + mobileNo + '&emailId=' + emailId + '&pancard='
			+ pancard + '&kishanCreditCard=' + kishanCreditCard + '&valueId='
			+ valueId + '&sequenceId=' + sequenceId + '&ownerId=' + ownerId);
	// remove_popup('adhyatanChakeriPatwari');

}

function userAddSubmitTax(sndTeh) {
	var laganpaid = document.landRevenueDetails.laganpaid.value;
	var lagandt = document.landRevenueDetails.lagandt.value;
	var lagandttreas = document.landRevenueDetails.lagandttreas.value;
	var laganchtreas = document.landRevenueDetails.laganchtreas.value;
	var challanNo1 = document.landRevenueDetails.challanNo1.value;

	var laganpaid2 = document.landRevenueDetails.laganpaid2.value;
	var cesspaid2 = document.landRevenueDetails.cesspaid2.value;
	var otherspaid2 = document.landRevenueDetails.otherspaid2.value;
	var divpaid2 = document.landRevenueDetails.divpaid2.value;
	var compaid2 = document.landRevenueDetails.compaid2.value;

	var cesspaid = document.landRevenueDetails.cesspaid.value;
	var cessdt = document.landRevenueDetails.cessdt.value;
	var cessdttreas = document.landRevenueDetails.cessdttreas.value;
	var cesschtreas = document.landRevenueDetails.cesschtreas.value;
	var challanNo2 = document.landRevenueDetails.challanNo2.value;

	var otherspaid = document.landRevenueDetails.otherspaid.value;
	var otherdt = document.landRevenueDetails.otherdt.value;
	var otherdttreas = document.landRevenueDetails.otherdttreas.value;
	var otherchtreas = document.landRevenueDetails.otherchtreas.value;
	var challanNo3 = document.landRevenueDetails.challanNo3.value;

	var divpaid = document.landRevenueDetails.divpaid.value;
	var divdt = document.landRevenueDetails.divdt.value;
	var divdttreas = document.landRevenueDetails.divdttreas.value;
	var divchtreas = document.landRevenueDetails.divchtreas.value;
	var challanNo4 = document.landRevenueDetails.challanNo4.value;

	var compaid = document.landRevenueDetails.compaid.value;
	var comdt = document.landRevenueDetails.comdt.value;
	var comdttreas = document.landRevenueDetails.comdttreas.value;
	var comchtreas = document.landRevenueDetails.comchtreas.value;
	var challanNo5 = document.landRevenueDetails.challanNo5.value;

	var laganpaid11 = document.landRevenueDetails.laganpaid11.value;
	var lagandt1 = document.landRevenueDetails.lagandt1.value;
	var lagandttreas1 = document.landRevenueDetails.lagandttreas1.value;
	var laganchtreas1 = document.landRevenueDetails.laganchtreas1.value;
	var challanNo11 = document.landRevenueDetails.challanNo11.value;

	var cesspaid11 = document.landRevenueDetails.cesspaid11.value;
	var cessdt1 = document.landRevenueDetails.cessdt1.value;
	var cessdttreas1 = document.landRevenueDetails.cessdttreas1.value;
	var cesschtreas1 = document.landRevenueDetails.cesschtreas1.value;
	var challanNo21 = document.landRevenueDetails.challanNo21.value;

	var otherspaid11 = document.landRevenueDetails.otherspaid11.value;
	var otherdt1 = document.landRevenueDetails.otherdt1.value;
	var otherdttreas1 = document.landRevenueDetails.otherdttreas1.value;
	var otherchtreas1 = document.landRevenueDetails.otherchtreas1.value;
	var challanNo31 = document.landRevenueDetails.challanNo31.value;

	var divpaid11 = document.landRevenueDetails.divpaid11.value;
	var divdt1 = document.landRevenueDetails.divdt1.value;
	var divdttreas1 = document.landRevenueDetails.divdttreas1.value;
	var divchtreas1 = document.landRevenueDetails.divchtreas1.value;
	var challanNo41 = document.landRevenueDetails.challanNo41.value;

	var compaid11 = document.landRevenueDetails.compaid11.value;
	var comdt1 = document.landRevenueDetails.comdt1.value;
	var comdttreas1 = document.landRevenueDetails.comdttreas1.value;
	var comchtreas1 = document.landRevenueDetails.comchtreas1.value;
	var challanNo51 = document.landRevenueDetails.challanNo51.value;

	// var nilambitpaid=document.landRevenueDetails.nilambitpaid.value;

	// var nilambitdt=document.landRevenueDetails.nilambitdt.value;

	// var nilambitdttreas=document.landRevenueDetails.nilambitdttreas.value;

	// var nilambitchtreas=document.landRevenueDetails.nilambitchtreas.value;

	var bhuktankarta = document.landRevenueDetails.bhuktankarta.value;
	var jamakarta = document.landRevenueDetails.jamakarta.value;
	var bhuktankarta1 = document.landRevenueDetails.bhuktankarta1.value;
	var jamakarta1 = document.landRevenueDetails.jamakarta1.value;

	var Lagantopay = document.landRevenueDetails.Lagantopay.value;
	var cesstopay = document.landRevenueDetails.cesstopay.value;
	var otherstopay = document.landRevenueDetails.otherstopay.value;
	var divtopay = document.landRevenueDetails.divtopay.value;
	var comtopay = document.landRevenueDetails.comtopay.value;
	var laganpaidinst1 = document.landRevenueDetails.laganpaidinst1.value;
	var cesspaidinst1 = document.landRevenueDetails.cesspaidinst1.value;
	var otherspaidinst1 = document.landRevenueDetails.otherspaidinst1.value;
	var divpaidinst1 = document.landRevenueDetails.divpaidinst1.value;
	var compaidinst1 = document.landRevenueDetails.compaidinst1.value;

	var laganpaidinst2 = document.landRevenueDetails.laganpaidinst2.value;
	var cesspaidinst2 = document.landRevenueDetails.cesspaidinst2.value;
	var otherspaidins2 = document.landRevenueDetails.otherspaidinst2.value;
	var divpaidinst2 = document.landRevenueDetails.divpaidinst2.value;
	var compaidinst2 = document.landRevenueDetails.compaidinst2.value;

	var nilambit = document.landRevenueDetails.nilambit.value;
	var vilmukta = document.landRevenueDetails.vilmukta.value;
	var remarks = document.landRevenueDetails.remarks.value;
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}
	loadContent('saveViewTax.do', '&laganpaid=' + laganpaid + '&cesspaid='
			+ cesspaid + '&otherspaid=' + otherspaid + '&divpaid=' + divpaid
			+ '&divdttreas=' + divdttreas + '&comdttreas=' + comdttreas
			+ '&compaid=' + compaid + '&lagandt=' + lagandt + '&cessdt='
			+ cessdt + '&otherdt=' + otherdt + '&divdt=' + divdt + '&comdt='
			+ comdt + '&divchtreas=' + divchtreas + '&comchtreas=' + comchtreas
			+ '&lagandttreas=' + lagandttreas + '&laganchtreas=' + laganchtreas
			+ '&cessdttreas=' + cessdttreas + '&cesschtreas=' + cesschtreas
			+ '&otherdttreas=' + otherdttreas + '&otherchtreas=' + otherchtreas
			+ '&Lagantopay=' + Lagantopay + '&cesstopay=' + cesstopay
			+ '&otherstopay=' + otherstopay + '&divtopay=' + divtopay
			+ '&comtopay=' + comtopay + '&laganpaidinst1=' + laganpaidinst1
			+ '&cesspaidinst1=' + cesspaidinst1 + '&otherspaidinst1='
			+ otherspaidinst1 + '&divpaidinst1=' + divpaidinst1
			+ '&compaidinst1=' + compaidinst1 + '&laganpaidinst2='
			+ laganpaidinst2 + '&cesspaidinst2=' + cesspaidinst2
			+ '&otherspaidins2=' + otherspaidins2 + '&divpaidinst2='
			+ divpaidinst2 + '&compaidinst2=' + compaidinst2 + '&nilambit='
			+ nilambit + '&vilmukta=' + vilmukta + '&remarks=' + remarks
			+ '&bhuktankarta=' + bhuktankarta + '&jamakarta=' + jamakarta
			+ '&bhuktankarta1=' + bhuktankarta1 + '&jamakarta1=' + jamakarta1

			+ '&laganpaid11=' + laganpaid11 + '&lagandt1=' + lagandt1
			+ '&lagandttreas1=' + lagandttreas1 + '&laganchtreas1='
			+ laganchtreas1 + '&challanNo11=' + challanNo11 + '&cesspaid11='
			+ cesspaid11 + '&cessdt1=' + cessdt1 + '&cessdttreas1='
			+ cessdttreas1 + '&cesschtreas1=' + cesschtreas1 + '&challanNo21='
			+ challanNo21 + '&otherspaid11=' + otherspaid11 + '&otherdt1='
			+ otherdt1 + '&otherdttreas1=' + otherdttreas1 + '&otherchtreas1='
			+ otherchtreas1 + '&challanNo31=' + challanNo31 + '&divpaid11='
			+ divpaid11 + '&divdt1=' + divdt1 + '&divdttreas1=' + divdttreas1
			+ '&divchtreas1=' + divchtreas1 + '&challanNo41=' + challanNo41
			+ '&compaid11=' + compaid11 + '&comdt1=' + comdt1 + '&comdttreas1='
			+ comdttreas1 + '&comchtreas1=' + comchtreas1 + '&challanNo51='
			+ challanNo51 + '&laganpaid2=' + laganpaid2 + '&cesspaid2='
			+ cesspaid2 + '&otherspaid2=' + otherspaid2 + '&divpaid2='
			+ divpaid2 + '&compaid2=' + compaid2 + '&challanNo1=' + challanNo1
			+ '&challanNo2=' + challanNo2 + '&challanNo3=' + challanNo3
			+ '&challanNo4=' + challanNo4 + '&challanNo5=' + challanNo5);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}
}

function userAddSubmitCollection() {

	var laganpaid = document.landRevenueDetails.laganpaid.value;
	var cesspaid = document.landRevenueDetails.cesspaid.value;
	var otherspaid = document.landRevenueDetails.otherspaid.value;
	var divpaid = document.landRevenueDetails.divpaid.value;
	var compaid = document.landRevenueDetails.compaid.value;

	// var nilambitpaid=document.landRevenueDetails.nilambitpaid.value;
	var lagandt = document.landRevenueDetails.lagandt.value;
	var cessdt = document.landRevenueDetails.cessdt.value;
	var otherdt = document.landRevenueDetails.otherdt.value;
	var divdt = document.landRevenueDetails.divdt.value;
	var comdt = document.landRevenueDetails.comdt.value;
	// var nilambitdt=document.landRevenueDetails.nilambitdt.value;

	var lagandttreas = document.landRevenueDetails.lagandttreas.value;
	var cessdttreas = document.landRevenueDetails.cessdttreas.value;
	var otherdttreas = document.landRevenueDetails.otherdttreas.value;
	var divdttreas = document.landRevenueDetails.divdttreas.value;
	var comdttreas = document.landRevenueDetails.comdttreas.value;
	// var nilambitdttreas=document.landRevenueDetails.nilambitdttreas.value;

	var laganchtreas = document.landRevenueDetails.laganchtreas.value;
	var cesschtreas = document.landRevenueDetails.cesschtreas.value;
	var otherchtreas = document.landRevenueDetails.otherchtreas.value;
	var divchtreas = document.landRevenueDetails.divchtreas.value;
	var comchtreas = document.landRevenueDetails.comchtreas.value;
	// var nilambitchtreas=document.landRevenueDetails.nilambitchtreas.value;

	var bhuktankarta = document.landRevenueDetails.bhuktankarta.value;
	var jamakarta = document.landRevenueDetails.jamakarta.value;

	var Lagantopay = document.landRevenueDetails.Lagantopay.value;
	var cesstopay = document.landRevenueDetails.cesstopay.value;
	var otherstopay = document.landRevenueDetails.otherstopay.value;
	var divtopay = document.landRevenueDetails.divtopay.value;
	var comtopay = document.landRevenueDetails.comtopay.value;
	var laganpaidinst1 = document.landRevenueDetails.laganpaidinst1.value;
	var cesspaidinst1 = document.landRevenueDetails.cesspaidinst1.value;
	var otherspaidinst1 = document.landRevenueDetails.otherspaidinst1.value;
	var divpaidinst1 = document.landRevenueDetails.divpaidinst1.value;
	var compaidinst1 = document.landRevenueDetails.compaidinst1.value;

	var laganpaidinst2 = document.landRevenueDetails.laganpaidinst2.value;
	var cesspaidinst2 = document.landRevenueDetails.cesspaidinst2.value;
	var otherspaidins2 = document.landRevenueDetails.otherspaidinst2.value;
	var divpaidinst2 = document.landRevenueDetails.divpaidinst2.value;
	var compaidinst2 = document.landRevenueDetails.compaidinst2.value;

	var laganpaid11 = document.landRevenueDetails.laganpaid11.value;
	var cesspaid11 = document.landRevenueDetails.cesspaid11.value;
	var otherspaid11 = document.landRevenueDetails.otherspaid11.value;
	var divpaid11 = document.landRevenueDetails.divpaid11.value;
	var compaid11 = document.landRevenueDetails.compaid11.value;

	var nilambit = document.landRevenueDetails.nilambit.value;
	var vilmukta = document.landRevenueDetails.vilmukta.value;
	var remarks = document.landRevenueDetails.remarks.value;
	if (laganpaid == "" && cesspaid == "" && otherspaid == "" && divpaid == ""
			&& compaid == "") {
		var errorSpan = document.getElementById("errorSpan");
		errorSpan.style.display = "inline";
		errorMsg = "रकम  दर्ज करें .";
		document.getElementById("errorSpan").innerHTML = errorMsg;
		return false;
	}
	loadContent('saveViewCollection.do', '&laganpaid=' + laganpaid
			+ '&cesspaid=' + cesspaid + '&otherspaid=' + otherspaid
			+ '&divpaid=' + divpaid + '&divdttreas=' + divdttreas
			+ '&comdttreas=' + comdttreas + '&compaid=' + compaid + '&lagandt='
			+ lagandt + '&cessdt=' + cessdt + '&otherdt=' + otherdt + '&divdt='
			+ divdt + '&comdt=' + comdt + '&divchtreas=' + divchtreas
			+ '&comchtreas=' + comchtreas + '&lagandttreas=' + lagandttreas
			+ '&laganchtreas=' + laganchtreas + '&cessdttreas=' + cessdttreas
			+ '&cesschtreas=' + cesschtreas + '&otherdttreas=' + otherdttreas
			+ '&otherchtreas=' + otherchtreas + '&Lagantopay=' + Lagantopay
			+ '&cesstopay=' + cesstopay + '&otherstopay=' + otherstopay
			+ '&divtopay=' + divtopay + '&comtopay=' + comtopay
			+ '&laganpaidinst1=' + laganpaidinst1 + '&cesspaidinst1='
			+ cesspaidinst1 + '&otherspaidinst1=' + otherspaidinst1
			+ '&divpaidinst1=' + divpaidinst1 + '&compaidinst1=' + compaidinst1
			+ '&laganpaidinst2=' + laganpaidinst2 + '&cesspaidinst2='
			+ cesspaidinst2 + '&otherspaidins2=' + otherspaidins2
			+ '&divpaidinst2=' + divpaidinst2 + '&compaidinst2=' + compaidinst2
			+ '&nilambit=' + nilambit + '&vilmukta=' + vilmukta + '&remarks='
			+ remarks + '&bhuktankarta=' + bhuktankarta + '&jamakarta='
			+ jamakarta + '&laganpaid11=' + laganpaid11 + '&cesspaid11='
			+ cesspaid11 + '&otherspaid11=' + otherspaid11 + '&divpaid11='
			+ divpaid11 + '&compaid11=' + compaid11);

}
function userAddSubmitDiversion() {

	var bhuktankarta = document.bhookhandRevenueDetails.bhuktankarta.value;
	var jamakarta = document.bhookhandRevenueDetails.jamakarta.value;
	var challanNo = document.bhookhandRevenueDetails.challanNo.value;
	var challanDate = document.bhookhandRevenueDetails.challanDate.value;

	// var nilambitpaid=document.landRevenueDetails.nilambitpaid.value;
	var compaidTotalDiversion = document.bhookhandRevenueDetails.compaidTotalDiversion.value;
	var compaidToatlAmountDiversion = document.bhookhandRevenueDetails.compaidToatlAmountDiversion.value;
	var comDiversionTotal = document.bhookhandRevenueDetails.comDiversionTotal.value;
	var paymentThrough = document.bhookhandRevenueDetails.paymentThrough.value;
	var comDiversionDate = document.bhookhandRevenueDetails.comDiversionDate.value;
	// var nilambitdt=document.landRevenueDetails.nilambitdt.value;

	if (challanNo == "" && compaidToatlAmountDiversion == "" && challanNo == "") {
		var errorSpan = document.getElementById("errorSpan");
		errorSpan.style.display = "inline";
		errorMsg = "रकम  दर्ज करें .";
		document.getElementById("errorSpan").innerHTML = errorMsg;
		return false;
	}
	loadContent('saveViewDiversion.do', '&challanDate=' + challanDate
			+ '&compaidTotalDiversion=' + compaidTotalDiversion
			+ '&compaidToatlAmountDiversion=' + compaidToatlAmountDiversion
			+ '&comDiversionTotal=' + comDiversionTotal + '&paymentThrough='
			+ paymentThrough + '&paymentThrough=' + paymentThrough
			+ '&comDiversionDate=' + comDiversionDate + '&bhuktankarta='
			+ bhuktankarta + '&jamakarta=' + jamakarta + '&challanNo='
			+ challanNo);

}

function balanceIrrigatedArea() {

	var irrigArea = new Number(document.getElementById("irrigArea").value);
	var sinchitArea = parseFloat(document.cropFrom.sinchitArea.value);
	var totalSinchit = parseFloat(document.cropFrom.sinchitAreaRem.value)
			+ sinchitArea;

	$("#sinchitArea1").hide();
	totalSinchit = irrigArea - totalSinchit;
	/*
	 * alert("111111"+document.getElementById('irrigArea').value );
	 * alert("2222222"+document.getElementById('sinchitArea').value );
	 */
	if (document.cropFrom.irrigArea.value != ""
			|| document.cropFrom.sinchitArea.value != "") {
		if (parseFloat(document.cropFrom.irrigArea.value) >= parseFloat(document.cropFrom.sinchitArea.value)) {

			document.cropFrom.sinchitAreaRem.value = parseFloat(
					document.cropFrom.sinchitAreaRem.value
							- document.cropFrom.sinchitArea.value).toFixed(3);

		} else {
			var sinchitArea = document.getElementById("sinchitArea1");
			sinchitArea.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("sinchitArea1").innerHTML = errorMsg;
			$("#sinchitArea1").show();

		}
	}
}

function balanceUnIrrigatedArea() {
	$('#asinchitArea1').hide();
	if (document.cropFrom.unIrrigArea.value != ""
			|| document.cropFrom.asinchitArea.value != "") {
		if (parseFloat(document.cropFrom.unIrrigArea.value) >= parseFloat(document.cropFrom.asinchitArea.value)) {

			document.cropFrom.asinchitAreaRem.value = (parseFloat(document.cropFrom.asinchitAreaRem.value) - parseFloat(document.cropFrom.asinchitArea.value))
					.toFixed(3);
		} else {
			var asinchitArea = document.getElementById("asinchitArea1");
			asinchitArea.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है|";
			document.getElementById("asinchitArea1").innerHTML = errorMsg;
			$('#asinchitArea1').show();
		}
	}
}
function LagantopayGet() {
	if (document.landRevenueDetails.Lagantopay.value != "") {
		document.landRevenueDetails.Lagantopay1.value = document.landRevenueDetails.Lagantopay.value;

	}
}
function cesstopayGet() {
	if (document.landRevenueDetails.cesstopay.value != "") {
		document.landRevenueDetails.cesstopay1.value = document.landRevenueDetails.cesstopay.value;

	}
}
function otherstopayGet() {
	if (document.landRevenueDetails.otherstopay.value != "") {
		document.landRevenueDetails.otherstopay1.value = document.landRevenueDetails.otherstopay.value;

	}
}
function divtopayGet() {
	if (document.landRevenueDetails.divtopay.value != "") {
		document.landRevenueDetails.divtopay1.value = document.landRevenueDetails.divtopay.value;

	}
}
function comtopayGet() {
	if (document.landRevenueDetails.comtopay.value != "") {
		document.landRevenueDetails.comtopay1.value = document.landRevenueDetails.comtopay.value;

	}
}

function laganpaidinst11() {
	if (document.landRevenueDetails.laganpaidinst1.value != ""
			|| document.landRevenueDetails.laganpaidinst2.value != ""
			|| document.landRevenueDetails.nilambit.value != "") {
		document.landRevenueDetails.laganpaidinst2.value = 0;
		var total = parseFloat(document.landRevenueDetails.laganpaidinst1.value)
				+ parseFloat(document.landRevenueDetails.laganpaidinst2.value);
		var totalRebet = parseFloat(document.landRevenueDetails.nilambit.value);
		var totalDemand = parseFloat(document.landRevenueDetails.Lagantopay1.value);

		if ((parseFloat(document.landRevenueDetails.laganpaidinst1.value) > parseFloat(document.landRevenueDetails.Lagantopay1.value))
				|| (parseFloat(document.landRevenueDetails.nilambit.value) > parseFloat(document.landRevenueDetails.Lagantopay1.value))) {

			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			laganPaidToCalculate.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;
			document.landRevenueDetails.laganpaidinst1.value = "";
			document.landRevenueDetails.nilambit.value = "";
			return false;
		}

		if (total + totalRebet <= totalDemand) {

			document.landRevenueDetails.laganpaid1.value = document.landRevenueDetails.laganpaidinst1.value;
			var three = document.landRevenueDetails.Lagantopay1.value
					- document.landRevenueDetails.nilambit.value;
			document.landRevenueDetails.laganchtreas.value = document.landRevenueDetails.laganpaidinst1.value
					- document.landRevenueDetails.laganpaid.value;
			document.landRevenueDetails.laganpaidinst2.value = (parseFloat(three) - parseFloat(document.landRevenueDetails.laganpaidinst1.value))
					.toFixed(2);

			document.landRevenueDetails.laganpaid2.value = parseFloat(
					document.landRevenueDetails.laganpaidinst2.value)
					.toFixed(2);
			document.landRevenueDetails.laganchtreas.value = document.landRevenueDetails.laganpaidinst1.value;
			document.landRevenueDetails.laganchtreas1.value = document.landRevenueDetails.laganpaidinst2.value;

		} else {
			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			laganPaidToCalculate.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है |");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;
			document.landRevenueDetails.nilambit.value = "";
			document.landRevenueDetails.laganpaidinst1.value = "";
			return false;
		}
	}
}

function cesspaidinst11() {
	if (document.landRevenueDetails.cesspaidinst1.value != ""
			|| document.landRevenueDetails.cesspaidinst2.value != "") {
		document.landRevenueDetails.cesspaidinst2.value = 0;

		if (parseFloat(document.landRevenueDetails.cesspaidinst1.value)
				+ parseFloat(document.landRevenueDetails.cesspaidinst2.value) <= parseFloat(document.landRevenueDetails.cesstopay1.value)) {
			document.landRevenueDetails.cesspaid1.value = document.landRevenueDetails.cesspaidinst1.value;
			document.landRevenueDetails.cesspaidinst2.value = (parseFloat(document.landRevenueDetails.cesstopay1.value) - parseFloat(document.landRevenueDetails.cesspaidinst1.value))
					.toFixed(2);
			document.landRevenueDetails.cesschtreas.value = document.landRevenueDetails.cesspaidinst1.value
					- document.landRevenueDetails.cesspaid.value;
			document.landRevenueDetails.cesspaid2.value = document.landRevenueDetails.cesspaidinst2.value;
			document.landRevenueDetails.cesschtreas.value = document.landRevenueDetails.cesspaidinst1.value;
			document.landRevenueDetails.cesschtreas1.value = document.landRevenueDetails.cesspaidinst2.value;
		} else {
			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			// laganPaidToCalculate.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;
			return false;
		}
	}
}
function otherspaidinst11() {
	if (document.landRevenueDetails.otherspaidinst1.value != ""
			|| document.landRevenueDetails.otherspaidinst2.value != "") {
		document.landRevenueDetails.otherspaidinst2.value = 0;
		if (parseFloat(document.landRevenueDetails.otherspaidinst1.value)
				+ parseFloat(document.landRevenueDetails.otherspaidinst2.value) <= parseFloat(document.landRevenueDetails.otherstopay1.value)) {

			document.landRevenueDetails.otherspaid1.value = document.landRevenueDetails.otherspaidinst1.value;
			document.landRevenueDetails.otherspaidinst2.value = (parseFloat(document.landRevenueDetails.otherstopay1.value) - parseFloat(document.landRevenueDetails.otherspaidinst1.value))
					.toFixed(2);
			document.landRevenueDetails.otherchtreas.value = document.landRevenueDetails.otherspaidinst1.value
					- document.landRevenueDetails.otherspaid.value;
			document.landRevenueDetails.otherspaid2.value = document.landRevenueDetails.otherspaidinst2.value;
			document.landRevenueDetails.otherchtreas.value = document.landRevenueDetails.otherspaidinst1.value;
			document.landRevenueDetails.otherchtreas1.value = document.landRevenueDetails.otherspaidinst2.value;

		} else {
			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			laganPaidToCalculate.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;
			return false;
		}
	}
}
function divpaidinst11() {
	if (document.landRevenueDetails.divpaidinst1.value != ""
			|| document.landRevenueDetails.divpaidinst2.value != "") {
		document.landRevenueDetails.divpaidinst2.value = 0;

		if (parseFloat(document.landRevenueDetails.divpaidinst1.value)
				+ parseFloat(document.landRevenueDetails.divpaidinst2.value) <= parseFloat(document.landRevenueDetails.divtopay1.value)) {

			document.landRevenueDetails.divpaid1.value = document.landRevenueDetails.divpaidinst1.value;
			document.landRevenueDetails.divpaidinst2.value = (parseFloat(document.landRevenueDetails.divtopay1.value) - parseFloat(document.landRevenueDetails.divpaidinst1.value))
					.toFixed(2);
			document.landRevenueDetails.divchtreas.value = document.landRevenueDetails.divpaidinst1.value
					- document.landRevenueDetails.divpaid.value;
			document.landRevenueDetails.divpaid2.value = document.landRevenueDetails.divpaidinst2.value;
			document.landRevenueDetails.divchtreas.value = document.landRevenueDetails.divpaidinst1.value;
			document.landRevenueDetails.divchtreas1.value = document.landRevenueDetails.divpaidinst2.value;
		} else {
			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			// laganPaidToCalculate.style.display = "inline";
			alert("म्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;

			return false;
		}
	}
}
function compaidinst11() {
	if (document.landRevenueDetails.compaidinst1.value != ""
			|| document.landRevenueDetails.compaidinst2.value != "") {
		document.landRevenueDetails.compaidinst2.value = 0;

		if (parseFloat(document.landRevenueDetails.compaidinst1.value)
				+ parseFloat(document.landRevenueDetails.compaidinst2.value) <= parseFloat(document.landRevenueDetails.comtopay1.value)) {

			document.landRevenueDetails.compaid1.value = document.landRevenueDetails.compaidinst1.value;
			document.landRevenueDetails.compaidinst2.value = (parseFloat(document.landRevenueDetails.comtopay1.value) - parseFloat(document.landRevenueDetails.compaidinst1.value))
					.toFixed(2);
			document.landRevenueDetails.comchtreas.value = document.landRevenueDetails.compaidinst1.value
					- document.landRevenueDetails.compaid.value;
			document.landRevenueDetails.compaid2.value = document.landRevenueDetails.compaidinst2.value;
			document.landRevenueDetails.comchtreas.value = document.landRevenueDetails.compaidinst1.value;
			document.landRevenueDetails.comchtreas1.value = document.landRevenueDetails.compaidinst2.value;
		} else {
			var laganPaidToCalculate = document
					.getElementById("laganPaidToCalculate");
			// laganPaidToCalculate.style.display = "inline";
			alert("सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.");
			// document.getElementById("laganPaidToCalculate").innerHTML =
			// errorMsg;

			return false;

		}
	}
}

function balanceDoubleCropArea() {
	$("#doubleCrop1").hide();
	if (document.cropFrom.doubleCropArea.value != ""
			|| document.cropFrom.sinchitArea.value != "") {

		if (parseFloat(document.cropFrom.doubleCropArea.value) >= parseFloat(document.cropFrom.doubleCrop.value)) {

			document.cropFrom.doubleCropRem.value = (parseFloat(document.cropFrom.doubleCropRem.value) - parseFloat(document.cropFrom.doubleCrop.value))
					.toFixed(3);
		} else {
			var sinchitArea = document.getElementById("doubleCrop1");
			sinchitArea.style.display = "inline";
			errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है.";
			document.getElementById("doubleCrop1").innerHTML = errorMsg;

			// document.cropFrom.doubleCrop.value = "";
			$("#doubleCrop1").show();
			return false;

		}
	}
}
function cropDetail() {
	document.cropFrom.action = "cropDtlFromCropgrpId.do";
	document.cropFrom.submit();

}

function loadContent(url, params) {
	// alert("called");
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				if ((mypostrequest.responseText) == "ok") {
					alert("आप का खसरा सफलतापूर्वक डाइवर्ट हो गया हे|");
					$("#divertKhasraId").hide();

				}

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById("container").innerHTML = mypostrequest.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;

			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);
	tabs();

}

function loadContentx(url, params) {
	// alert("4444");
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					// document.getElementById("container").innerHTML =
					// mypostrequest.responseText;
					// alert(mypostrequest.responseText);
					if (mypostrequest.responseText == "401") {
						alert("संशोधित  खसरा  तहसीलदार के अनुमोदन के लिए भेज दिया गया है |");
						//alert(" संसोधित खसरा सफलतापूर्वक सेव किया गया है |");
						loadContent('khasraSelection.do', 'null');
					}
					if (mypostrequest.responseText == "403") {

						// alert("सभी डाटा रीसेट किया गेया !");
						// alert("5555");
						loadContent('khasraSelection.do', 'null');
					}

					if (mypostrequest.responseText == "402") {
						alert("कॉलम-5,6,7 में कम से कम एक मौसम के लिए सिंचित और असिंचित का कुल योग शुद्ध बोया मान होना चाहिए अथवा कॉलम 12 में सिंचाई साधन संख्या दर्ज करें |");
						loadContent('crop.do', 'null');
					}
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;

			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);
	tabs();

}
function loadContentPatwari(url, params, reqstngPage) {
	/* alert(params); */
	if (myFunctionInfo(reqstngPage, 'noSndTeh')) {
		// alert("tru called:"+reqstngPage);
		// alert("tru called url:"+url);
		var mypostrequest = new ajaxRequest();
		mypostrequest.onreadystatechange = function() {
			loader('adhyatanChakeriPatwari');
			if (mypostrequest.readyState == 4) {
				if (mypostrequest.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById("container").innerHTML = mypostrequest.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById("container").innerHTML =
					// mypostrequest.responseText;
				} else {
					alert("An error has occured making the request");
				}
			}
			// remove_popup('adhyatanChakeriPatwari');
		};
		mypostrequest.open("POST", url, false);
		mypostrequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		mypostrequest.send(params);
		tabs();
	}
}

function loadDataNew(url, div, chakri, params) {
	
	/* alert("div:" + div); alert("url:" + url); alert("params:" + params);*/
	

	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {

		/*
		 * if(xml.readyState==1) {
		 */
		if (!chakri == "") {
			loader(chakri);
		}
		// }
		// alert("xml.readyState:" + xml.readyState);

		if (xml.readyState == 4) {
			// alert("1:"+xml.status);
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert("2");
				// alert("xml.responseText:" + xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					$("#divertKhasraId").show();
					document.getElementById(div).innerHTML = xml.responseText;
					//alert("xml.responseText="+xml.responseText);
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(div).innerHTML = xml.responseText;

			} else {
				// alert("3");
				alert("An error has occured making the request");
			}

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}
	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

// new method for khasra land selection patwari
function loadDataNewKhsraPat(url, div, chakri, params) {
	// alert("div:" + div);
	// alert("url:" + url);
	// alert("params:" + params);

	var idsendToUncheckradio = null;

	if (div == "tehsilId")/* di */
	{
		idsendToUncheckradio = "riId";
	}

	if (div == "riId")/* teh */
	{
		idsendToUncheckradio = "villageId";
	}

	if (div == "halkaId")/* ri */
	{
		idsendToUncheckradio = "villageId";
	}

	if (div == "villageId")/* halka */
	{
		// idsendToUncheckradio = "landTypeId";
		idsendToUncheckradio = "khasraRadio";
	}

	if (div == "updatedKhasraPatwari") {
		idsendToUncheckradio = "khasraRadio";
	}

	if (div == 'updatedKhasraPatwari') {

		// alert("11");

		if (inputCheck('khasraRadio')) {

			// alert("12");

			var xml = new ajaxRequest();
			xml.onreadystatechange = function() {

				/*
				 * if(xml.readyState==1) {
				 */

				loader(chakri);
				// }
				// alert("xml.readyState:" + xml.readyState);
				if (xml.readyState == 4) {
					// alert("1:"+xml.status);

					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {
						// alert("2");
						// alert("xml.responseText:" + xml.responseText);

						if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
							document.getElementById(div).innerHTML = xml.responseText;
						} else {
							top.location.href = 'SessionExpired.do';
						}

						// document.getElementById(div).innerHTML =
						// xml.responseText;
					} else {
						// alert("3");
						alert("An error has occured making the request");
					}
					remove_popup(chakri);
					/* unCheckRadio(idsendToUncheckradio); */
				}
			};

			xml.open("POST", url, false);
			xml.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			xml.send(params);
		}
	}
	if (div != 'updatedKhasraPatwari') {

		// alert("2");
		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) {
			 */

			loader(chakri);
			// }
			// alert("xml.readyState:" + xml.readyState);
			if (xml.readyState == 4) {
				// alert("1:"+xml.status);

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("2");
					// alert("xml.responseText:" + xml.responseText);

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(div).innerHTML = xml.responseText;

						if (div == "tehsilId") {
							$("#" + div + " option:first").text(
									"---तहसील चयन करें---");
						}
						if (div == "riId") {
							$("#" + div + " option:first").text(
									"---रा. नि. मं. चयन करें---");
						}
						if (div == "halkaId") {
							$("#" + div + " option:first").text(
									"---पटवारी हल्का चयन करें---");
						}
						if (div == "villageId") {
							$("#" + div + " option:first").text(
									"---गाँव चयन करें---");
						}

						unCheckRadio(idsendToUncheckradio);
					} else {
						top.location.href = 'SessionExpired.do';
					}

					/*
					 * document.getElementById(div).innerHTML =
					 * xml.responseText;
					 * 
					 * if(div == "tehsilId"){ $("#"+div+"
					 * option:first").text("---तहसील चयन करें---"); } if(div ==
					 * "riId"){ $("#"+div+" option:first").text("---रा. नि. मं.
					 * चयन करें---"); } if(div == "halkaId"){ $("#"+div+"
					 * option:first").text("---पटवारी हल्का चयन करें---"); }
					 * if(div == "villageId"){ $("#"+div+"
					 * option:first").text("---गाँव चयन करें---"); }
					 * 
					 * unCheckRadio(idsendToUncheckradio);
					 */
				} else {
					// alert("3");
					alert("An error has occured making the request");
				}
				remove_popup(chakri);
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	}
}

OffsetX = 10; // MODIFY THESE VALUES TO
OffsetY = 2; // CHANGE THE POSITION.
var old = (document.all);
var skn = (document.all);
var iex = (document.all);
var yyy = -1000;
var ns4 = document.layers;
var ns6 = document.getElementById && !document.all;
var ie4 = document.all;

function loaderPatwari(chakri) {
	if (ns4) {
		skn = document.chakri;
	}/*
		 * else if (ns6) { skn = document.getElementById(chakri).style; }
		 */else if (ie4) {
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
	/*
	 * var content = "<div style='position:absolute;z-index:10;" +
	 * 
	 * "left:expression((this.offsetParent.clientWidth/2)-(this.clientWidth/2)+this.offsetParent.scrollLeft);" +
	 * 
	 * "top:expression((this.offsetParent.clientHeight/2)-(this.clientHeight/2)+this.offsetParent.scrollTop);" +
	 * "background:#FFFFFF; border-width:0px;border-color:#a5d8ed;
	 * border-style:solid'>" + "<Table cellspacing=0 cellpadding=0 border=0
	 * width=100%>" + "<tr><td align=left valign=middle height=30>" + " <img
	 * src='images/process.gif' height='25' width='25'>" + "</td>" + "<td align=left valign=middle height=30>" + "
	 * <font color=red size=2> <b>&nbsp;कृपया प्रतीक्षा करें....</b></font>" + "</td>" + "</tr><Table></div>";
	 */

	var content = "<div id='dialog-overlay'>" + "<div class='preloader'>"
			+ " <img src='images/AnimatedProgressBar.gif'>" + "</div>"
			+ "</div>";
	$('#dialog-overlay').fadeTo(800, 0.3);

	yyy = OffsetY;
	if (ns4) {
		skn.document.write(content);
		skn.document.close();
		skn.visibility = "visible";
	}
	/*
	 * if (ns6) { document.getElementById(chakri).innerHTML = content;
	 * skn.display = ''; }
	 */
	if (ie4) {
		document.getElementById(chakri).innerHTML = content;
		skn.display = '';
		skn.position = 'absolute';
	}
	$('#dialog-overlay').fadeTo(400, 0.2);
}

function remove_popup(chakri) {
	alert(chakri);
	yyy = -1000;
	if (ns4) {
		skn.visibility = "hidden";
	} else if (ns6 || ie4)
		skn.display = "none";
	document.getElementById(chakri).style.visibility = '';
}

function callGeneralInfoView() {

	var villageId = document.khasraform.villageId.value;
	var landTypeId = document.khasraform.landTypeId.value;
	var halkaId = document.khasraform.halkaId.value;
	var riId = document.khasraform.riId.value;
	var tehsilId = document.khasraform.tehsilId.value;
	var distId = document.khasraform.districtId.value;
	var requestType = "view";
	var khasraId = "";

	if (riId == 0) {
		var spanRi = document.getElementById("spanRi");
		spanRi.style.display = "inline";
		errorMsg = "कृपया रा.नि.मं. चयन करें |";
		// document.getElementById("spanRi").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}

	if (halkaId == 0) {
		var spanHalka = document.getElementById("spanHalka");
		spanHalka.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें|";
		// document.getElementById("spanHalka").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}

	if (villageId == 0) {
		var spanvillage = document.getElementById("spanvillage");
		spanvillage.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें|";
		// document.getElementById("spanvillage").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}
	if (landTypeId == 0) {
		var spanvillage = document.getElementById("spanLandType");
		spanvillage.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें|";
		// document.getElementById("spanLandType").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}
	/*
	 * if ($('#khasraRadio').is(':checked')) { khasraId =
	 * document.khasraform.khasraId.value; } else if
	 * ($('#basraRadio').is(':checked')) { khasraId =
	 * document.khasraform.basraId.value; } else { var spanRedio =
	 * document.getElementById("spanRedio"); spanRedio.style.display = "inline";
	 * errorMsg = "किसी भी रेडियो बटन का चयन करें.";
	 * document.getElementById("spanRedio").innerHTML = errorMsg; return false; }
	 * 
	 * if (khasraId == 0) { var spanKhasraBasra =
	 * document.getElementById("spanKhasraBasra"); spanKhasraBasra.style.display =
	 * "inline"; errorMsg = "कॉम्बो सूची में से चयन करें.";
	 * document.getElementById("spanKhasraBasra").innerHTML = errorMsg; return
	 * false; }
	 */

	khasraId = document.khasraform.khasraId.value;
	if (khasraId == 0) {

		alert(" खसरा संख्या  चयन करें|");

		return false;
	}

	var vilNmID = $("#villageId option:selected").text();
	/*
	 * loader('adhyatanChakeriPatwari');
	 */loadContent('generalInfo.do', 'villageId=' + vilNmID + '&halkaId='
			+ halkaId + '&riId=' + riId + '&tehsilId=' + tehsilId + '&distId='
			+ distId + '&khasraId=' + khasraId + '&requestType=' + requestType);
	/*
	 * remove_popup('adhyatanChakeriPatwari');
	 */}

function callfnValidate(field) {
	// alert("check value"+field);
	if (field == null || field == "") {
		message = "खसरा चयन टैब से खसरा का चयन करें.";
		// alert(message);
		return false;
	} else {
		loader('tehsildarChakeri');
		// alert("22222");
		loadContentx('finalSaveTehsildar.do', 'null');
		// message = " संशोधित खसरा तहसीलदार को भेजा गेया .";
		// alert(message);
		remove_popup('tehsildarChakeri');
	}

}
function callfnValidateTotal(field) {

	if (field == null || field == "") {
		message = "खसरा चयन टैब से खसरा का चयन करें.";
		alert(message);
		return false;
	} else {
		loader('tehsildarChakeri');
		loadContentx('finalSaveTehsildar.do', 'check=oneAll');
		message = "सभी डेटा सफलतापूर्वक रिसेट कर दिया गया है |";
		alert(message);
		remove_popup('tehsildarChakeri');
	}

}
function myFunctionInfoTotal(reqstngPage, sndTeh) {
	var x;
	// if (reqstngPage == "lndOnr" && sndTeh=="sndTehCancel") {
	x = confirm("डेटा रिसेट करने हेतु OK बटन पर क्लिक करें अन्यथा Cancel बटन पर क्लिक करें |");
	if (x) {
		callfnValidateTotal(document.getElementById('message').value);
	}
	if (!x) {
		return false;
	}
	// }
}
function myFunctionInfo(reqstngPage, sndTeh) {
	var txtKhasraNo = $("#message").val();
	// alert("rrr"+reqstngPage);
	var CheckData = $("#CheckData").val();

	var x;

	if (reqstngPage != "lndOnr") {

		/*
		 * var r = confirm(" डेटा को सेव करना चाहते हैं!अन्यथा डेटा सेव नहीं
		 * होगा!");
		 * 
		 * if (r == true) { x = "You pressed OK!";
		 */

		switch (reqstngPage) {
		case 'ownEdit':
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;

		case 'genInfo':
			if (CheckData == 'NO' && sndTeh == 'sndTeh') {
				x = confirm(" आप ने इस  खसरा    "
						+ txtKhasraNo
						+ "  में कोई भी अद्यतन नहीं किया है | क्या आप इस खसरे को अनुमोदन के लिए तहसीलदार को भेजना चाहते हैं ?");
				if (x) {
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			if (sndTeh == 'noSndTeh') {
				saveCropGeneral(sndTeh);
			}
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					saveCropGeneral(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'irri':
			if (sndTeh == 'noSndTeh') {
				orderDateCheck = document.getElementById("orderNo1").disabled;

				if (!orderDateCheck) {

					var orderNo = $("#orderNo1").val();
					var orderBy = $("#orderBy1").val();
					var orderDate = $("#orderDate1").val();
					var orderRemarks = $("#orderRemarks1").val();
					var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
					for (var i = 0; i < orderNo.length; i++) {
					    if (iChars.indexOf(orderNo.charAt(i)) != -1) {
					    alert("कृपया आदेश संख्या अक्षरांकीय भरें |");
					    document.getElementById("orderNo1").focus();
					    return false;
					        }
					    }
					for (var i = 0; i < orderBy.length; i++) {
					    if (iChars.indexOf(orderBy.charAt(i)) != -1) {
					    alert("कृपया आदेश द्वारा अक्षरांकीय भरें |");
					    document.getElementById("orderBy1").focus();
					    return false;
					        }
					    }
				
					if (orderNo != "" && orderBy != "" && orderDate != ""
							&& orderRemarks != "") {

						saveIrriInfo();

					} else {
						x = confirm("क्या आप डेटा सेव करना चाहते हैं");
						if (x) {

							if (!saveIrriInfo()) {
								return false;
							}
						}
					}

				}

			}
			if (sndTeh == 'sndTeh') {
				var orderNo = $("#orderNo1").val();
				var orderBy = $("#orderBy1").val();
				var orderDate = $("#orderDate1").val();
				var orderRemarks = $("#orderRemarks1").val();
						
				orderDateCheck = document.getElementById("orderNo1").disabled;

				if (!orderDateCheck) {
					if (orderNo != "" && orderBy != "" && orderDate != ""
							&& orderRemarks != "") {

						saveIrriInfo();
					} else {
						y = confirm("क्या आप डेटा सेव करना चाहते हैं");
						if (y) {

							if (!saveIrriInfo()) {
								return false;
							}

						}

					}

				}

				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");

				if (x) {
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}

			}
			break;
		case 'khasraArea':
			/*
			 * if (sndTeh == 'noSndTeh') { userAddSubmit(sndTeh); }
			 */

			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					// userAddSubmit(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'arrReco':
			/*
			 * if (sndTeh == 'noSndTeh') { userAddSubmit(sndTeh); }
			 */

			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					// userAddSubmit(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'landowner':

			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;

		case 'lndUsg':
			if (sndTeh == 'noSndTeh') {
				saveLandUsage(sndTeh);
			}
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					saveLandUsage(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'crp':
			if (sndTeh == 'noSndTeh') {
				// alert("1111");

				saveCropDetails(sndTeh);
				// var flagrere= testfunction('finalSaveCrop.do', 'null');
				// alert("flagrere:"+flagrere);
				// return flagrere;

			}
			if (sndTeh == 'sndTeh') {
				// alert("2222");

				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा | ");
				if (x) {
					saveCropDetails(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'irgSrc':
			if (sndTeh == 'noSndTeh') {
				saveWaterRes(sndTeh);
			}
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					saveWaterRes(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'treeDtl':
			if (sndTeh == 'noSndTeh') {
				// saveTreeDetailsWithOrder(sndTeh);
				// saveTreeDetails(sndTeh);

				if (!saveTreeDetails(sndTeh)) {
					return false;

				}

			}
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					// saveTreeDetails(sndTeh);
					// callfnValidate(document.getElementById('message').value);

					if (saveTreeDetails('sChk'))

					{

						callfnValidate(document.getElementById('message').value);
					} else {
						return false;
					}

				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'lndRvnDtl':
			/*
			 * if (sndTeh == 'noSndTeh') { // userAddSubmitTax(sndTeh); }
			 */
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
				if (x) {
					// userAddSubmitTax(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'khasraCrp':
			if (sndTeh == 'noSndTeh') {
				saveCropDetails(sndTeh);
			}
			if (sndTeh == 'sndTeh') {
				x = confirm(" यह अद्यतित खसरा    "
						+ txtKhasraNo
						+ "  तहसीलदार को अनुमोदन के लिए भेजना है| अन्यथा यह अद्यतन सेव नहीं होगा | ");
				if (x) {
					saveCropDetails(sndTeh);
					callfnValidate(document.getElementById('message').value);
				}
				if (!x) {
					return false;
				}
			}
			break;
		case 'khraLnEdt':
			// alert("come");
			$("#bankId").removeClass('heighfieldDate');
			$("#bankAddress").removeClass('heighfieldDate');
			$("#loanAmount").removeClass('heighfieldDate');
			// $("#loanPayDate").removeClass('heighfieldDate');
			$("#loanOrderNo").removeClass('heighfieldDate');
			$("#loanAccountNo").removeClass('heighfieldDate');

			var mandtFld = true;
			var allEmpty = false;
			bankId = $("#bankId").val();
			bankAddress = $("#bankAddress").val();
			loanAmount = $("#loanAmount").val();
			loanPayDate = $("#loanPayDate").val();
			loanOrderNo = $("#loanOrderNo").val();
			loanAccountNo = $("#loanAccountNo").val();
			loanDate = $("#loanDate").val();
			bandhakArea = $("#bandhakArea").val();
			officerName = $("#officerName").val();
			officerDesignation = $("#officerDesignation").val();
			remark = $("#remark").val();
			subsidyAmount = $("#subsidyAmount").val();

			if (bankId == "0" && bankAddress == "" && loanAmount == ""
					&& loanOrderNo == "" && loanAccountNo == ""
					&& loanDate == "" && bandhakArea == "" && officerName == ""
					&& officerDesignation == "" && remark == ""
					&& subsidyAmount == "") {

				if (sndTeh == 'sndTeh') {
					// alert("1111");
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						// userAddTaxLoanSubmitAdd(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}
			if (bankId != "0" && bankAddress != "" && loanAmount != "") {
				if (sndTeh == 'noSndTeh') {
					userAddTaxLoanSubmitAdd(sndTeh);
				}
				if (sndTeh == 'sndTeh') {
					// alert("1111");
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						userAddTaxLoanSubmitAdd(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}
			if (subsidyAmount != "") {
				if (sndTeh == 'noSndTeh') {
					userAddTaxLoanSubmitAdd(sndTeh);
				}
				if (sndTeh == 'sndTeh') {
					// alert("1111");
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						userAddTaxLoanSubmitAdd(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}
			if (bankId == "0" && bankAddress == "" && loanAmount == ""
					&& loanOrderNo == "" && loanAccountNo == "") {
				allEmpty = true;
				if (sndTeh == 'sndTeh') {
					// alert("2222");
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						// userAddTaxLoanSubmitAdd(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}

			if (bankId != "0"
					&& (bankAddress == "" || loanAmount == ""
							|| loanOrderNo == "" || loanAccountNo == "")
					&& allEmpty == false) {
				mandtFld = false;
			}

			if (bankAddress != ""
					&& (bankId == "0" || loanAmount == "" || loanOrderNo == "" || loanAccountNo == "")
					&& allEmpty == false) {
				mandtFld = false;
			}

			if (loanAmount != ""
					&& (bankId == "0" || bankAddress == "" || loanOrderNo == "" || loanAccountNo == "")
					&& allEmpty == false) {
				mandtFld = false;
			}

			/*
			 * if (loanPayDate != "" && (bankId == "0" || bankAddress == "" ||
			 * loanAmount == "" || loanOrderNo == "" || loanAccountNo == "") &&
			 * allEmpty == false) { mandtFld = false; }
			 */

			if (loanOrderNo != ""
					&& (bankId == "0" || bankAddress == "" || loanAmount == "" || loanAccountNo == "")
					&& allEmpty == false) {
				mandtFld = false;
			}

			if (loanAccountNo != ""
					&& (bankId == "0" || bankAddress == "" || loanAmount == "" || loanOrderNo == "")
					&& allEmpty == false) {
				mandtFld = false;
			}

			if (mandtFld == false && allEmpty == false) {
				/*
				 * var r = confirm("डेटा सेव करने के लिए अनिवार्य डाटा भरे
				 * अन्यथा पुनः प्रयास करें "); $("#loanAccountNo").attr('class',
				 * 'heighfield input_w1'); $("#bankId").attr('class',
				 * 'heighfield input_w1'); $("#bankAddress").attr('class',
				 * 'heighfield input_w1'); $("#loanAmount").attr('class',
				 * 'heighfield input_w1'); $("#loanPayDate").attr('class',
				 * 'heighfield input_w1'); $("#loanOrderNo").attr('class',
				 * 'heighfield input_w1');
				 */
				if (r == true) {
					return false;
				}
			}

			break;
		case 'persInfo':
			$("#name").removeClass('heighfieldDate');

			var mandtFld1 = true;
			var mandtFld2 = true;

			var allEmpty = false;

			name = $("#name").val();
			var ownerId = "";
			var sequenceId = "";
			ownerId = document.getElementById("ownerIdOne").value;
			sequenceId = document.getElementById("sequenceNoOne").value;
			var isSelected = false;

			if (ownerId == "" && sequenceId == "") {
				inputSubmit = document.getElementById("finalSubmit");
				for ( var i = 0; i < document.personalForm.elements.length; i++) {
					if (document.personalForm.elements[i].type == "radio") {
						if (document.personalForm.elements[i].checked)
							isSelected = true;
					}
				}
			}
			// alert("select"+isSelected);
			if (name != "" && isSelected) {
				// alert("save");
				if (sndTeh == 'noSndTeh') {
					savePersonalInfo(sndTeh);
				}
				if (sndTeh == 'sndTeh') {
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						savePersonalInfo(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}

			if (name == "" && !isSelected) {
				allEmpty = true;
				if (sndTeh == 'sndTeh') {
					x = confirm(" यह अद्यतित खसरा    "
							+ txtKhasraNo
							+ "  तहसीलदार को अनुमोदन के लिए भेजना है | अन्यथा यह अद्यतन सेव नहीं होगा |");
					if (x) {
						// savePersonalInfo(sndTeh);
						callfnValidate(document.getElementById('message').value);
					}
					if (!x) {
						return false;
					}
				}
			}
			if (name == "" && isSelected) {
				// alert("11111");

				mandtFld1 = false;

			}

			if (name != "" && !isSelected) {
				// alert("2222");
				mandtFld2 = false;

			}

			if (mandtFld1 == false && allEmpty == false) {
				var r = confirm("डेटा सेव करने के लिए नाम भरे  अन्यथा पुनः प्रयास करें |");
				$("#name").attr('class', 'heighfield input_w1');

				if (r == true) {
					return false;

				}
			}
			if (mandtFld2 == false && allEmpty == false) {
				var r = confirm("डेटा सेव करने के लिए रेकॉर्ड चयन करे  अन्यथा पुनः प्रयास करें |");

				if (r == true) {
					return false;
				}
			}

			break;
		}
		/* saveGeneralInfo(); */
		// callfnValidateMessage(document.getElementById('messageOne').value);
		/* javascript: loadContent('landOwner.do', 'null'); */
		return true;
	}
	/*
	 * else { x = "You pressed Cancel!"; javascript: loadContent('landOwner.do',
	 * 'null'); return true; } } if(reqstngPage == "lndOnr") { x = "You pressed
	 * Cancel!"; javascript: loadContent('landOwner.do', 'null'); return true; }
	 */
}
function callfnValidateMessage(field) {
	// Please donot delete this alert(For Document sent to tehsildar and
	// successfully updated records)
	if (field != null && field != '')
		alert(field);
	/*
	 * if (field == null || field == "") { message = "खसरा चयन टैब से खसरा का
	 * चयन करें."; alert(message); return false; } else {
	 * loadContent('finalSaveTehsildar.do', 'null'); message = "दस्तावेज़
	 * तहसीलदार के लिए भेजा."; alert(message); }
	 */

}
function callGeneralInfoEdit() {
	var villageId = document.khasraform.villageId.value;
	// var landTypeId = document.khasraform.landTypeId.value;
	var halkaId = document.khasraform.halkaId.value;
	var riId = document.khasraform.riId.value;
	var tehsilId = document.khasraform.tehsilId.value;
	var distId = document.khasraform.districtId.value;
	var requestType = "edit";
	var khasraId = "";
	var check = "oneKhasra";

	if (riId == 0) {
		var spanRi = document.getElementById("spanRi");
		spanRi.style.display = "inline";
		errorMsg = "कृपया रा.नि.मं. चयन करें |";
		// document.getElementById("spanRi").innerHTML = errorMsg;
		alert(errorMsg); 
		return false;

	}

	if (halkaId == 0) {
		var spanHalka = document.getElementById("spanHalka");
		spanHalka.style.display = "inline";
		errorMsg = "कृपया पटवारी हल्का चयन करें |";
		// document.getElementById("spanHalka").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}

	if (villageId == 0) {
		var spanvillage = document.getElementById("spanvillage");
		spanvillage.style.display = "inline";
		errorMsg = "कृपया गाँव चयन करें |";
		// document.getElementById("spanvillage").innerHTML = errorMsg;
		alert(errorMsg);
		return false;

	}
	/*
	 * if (landTypeId == 0) { var spanvillage =
	 * document.getElementById("spanLandType"); spanvillage.style.display =
	 * "inline"; errorMsg = "कॉम्बो सूची में से चयन करें."; //
	 * document.getElementById("spanLandType").innerHTML = errorMsg;
	 * alert(errorMsg); return false; }
	 */
	/*
	 * if ($('#khasraRadio').is(':checked')) { khasraId =
	 * document.khasraform.khasraId.value; } else if
	 * ($('#basraRadio').is(':checked')) { khasraId =
	 * document.khasraform.basraId.value; } else { var spanRedio =
	 * document.getElementById("spanRedio"); spanRedio.style.display = "inline";
	 * errorMsg = "किसी भी रेडियो बटन का चयन करें.";
	 * document.getElementById("spanRedio").innerHTML = errorMsg; return false; }
	 */
	/*
	 * if (khasraId == 0) { var spanKhasraBasra =
	 * document.getElementById("spanKhasraBasra"); spanKhasraBasra.style.display =
	 * "inline"; errorMsg = "कॉम्बो सूची में से चयन करें.";
	 * document.getElementById("spanKhasraBasra").innerHTML = errorMsg; return
	 * false; }
	 */
	khasraId = document.khasraform.khasraId.value;
	if (khasraId == 0) {

		alert(" कृपया खसरा संख्या चयन करें |");

		return false;
	}
	var vilNmID = $("#villageId option:selected").text();
	loader('adhyatanChakeriPatwari');

	// loaderKhoje('adhyatanChakeriPatwari');

	loadContent('generalInfo.do', '&villageId=' + vilNmID + '&halkaId='
			+ halkaId + '&riId=' + riId + '&tehsilId=' + tehsilId + '&distId='
			+ distId + '&khasraId=' + khasraId + '&requestType=' + requestType
			+ '&check=' + check);
	// remove_popup('adhyatanChakeriPatwari');
}

function callSeachInfoPat() {

	var riId = document.khasraform.riId.value;

	if (riId == 0) {

		errorMsg = "पहले से ही रीसेट है.";
		alert(errorMsg);
		return false;

	} else {
		loader('adhyatanChakeriPatwari');

		// loaderKhoje('adhyatanChakeriPatwari');

		loadContent('khasraSelection.do', 'null');
		// remove_popup('adhyatanChakeriPatwari');
	}

}

function callGeneralInfoEditCollection() {
	var villageId = document.khasraform.villageId.value;
	var halkaId = document.khasraform.halkaId.value;
	var riId = document.khasraform.riId.value;
	var tehsilId = document.khasraform.tehsilId.value;
	var distId = document.khasraform.districtId.value;
	var requestType = "edit";
	var khasraId = "";

	if (riId == 0) {
		var spanRi = document.getElementById("spanRi");
		spanRi.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanRi").innerHTML = errorMsg;
		return false;

	}

	if (halkaId == 0) {
		var spanHalka = document.getElementById("spanHalka");
		spanHalka.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanHalka").innerHTML = errorMsg;
		return false;

	}

	if (villageId == 0) {
		var spanvillage = document.getElementById("spanvillage");
		spanvillage.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanvillage").innerHTML = errorMsg;
		return false;

	}

	if ($('#khasraRadio').is(':checked')) {
		khasraId = document.khasraform.khasraId.value;
	} else if ($('#basraRadio').is(':checked')) {
		khasraId = document.khasraform.basraId.value;
	} else {
		var spanRedio = document.getElementById("spanRedio");
		spanRedio.style.display = "inline";
		errorMsg = "किसी भी रेडियो बटन का चयन करें.";
		document.getElementById("spanRedio").innerHTML = errorMsg;
		return false;

	}

	if (khasraId == 0) {
		var spanKhasraBasra = document.getElementById("spanKhasraBasra");
		spanKhasraBasra.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanKhasraBasra").innerHTML = errorMsg;
		return false;

	}

	loadContent('generalInfoCollection.do', 'villageId=' + villageId
			+ '&halkaId=' + halkaId + '&riId=' + riId + '&tehsilId=' + tehsilId
			+ '&distId=' + distId + '&khasraId=' + khasraId + '&requestType='
			+ requestType);

}
function callGeneralInfoEditBhookhand() {
	var villageId = document.khasraform.villageId.value;
	var halkaId = document.khasraform.halkaId.value;
	var riId = document.khasraform.riId.value;
	var tehsilId = document.khasraform.tehsilId.value;
	var distId = document.khasraform.districtId.value;
	var requestType = "edit";
	var khasraId = "";

	if (riId == 0) {
		var spanRi = document.getElementById("spanRi");
		spanRi.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanRi").innerHTML = errorMsg;
		return false;

	}

	if (halkaId == 0) {
		var spanHalka = document.getElementById("spanHalka");
		spanHalka.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanHalka").innerHTML = errorMsg;
		return false;

	}

	if (villageId == 0) {
		var spanvillage = document.getElementById("spanvillage");
		spanvillage.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanvillage").innerHTML = errorMsg;
		return false;

	}

	if ($('#khasraRadio').is(':checked')) {
		khasraId = document.khasraform.bhookhandId.value;
		// alert("22222" + khasraId);
	} else if ($('#basraRadio').is(':checked')) {
		khasraId = document.khasraform.basraId.value;
	} else {
		var spanRedio = document.getElementById("spanRedio");
		spanRedio.style.display = "inline";
		errorMsg = "किसी भी रेडियो बटन का चयन करें.";
		document.getElementById("spanRedio").innerHTML = errorMsg;
		return false;

	}

	if (khasraId == 0) {
		var spanKhasraBasra = document.getElementById("spanKhasraBasra");
		spanKhasraBasra.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें.";
		document.getElementById("spanKhasraBasra").innerHTML = errorMsg;
		return false;

	}

	loadContent('generalInfoDiversion.do', 'villageId=' + villageId
			+ '&halkaId=' + halkaId + '&riId=' + riId + '&tehsilId=' + tehsilId
			+ '&distId=' + distId + '&khasraId=' + khasraId + '&requestType='
			+ requestType);

}
function saveIrriInfo(sndTeh) {
	if (validateOrderDetailsSinchit()) {
		var orderNo = $("#orderNo1").val();
		var orderBy = $("#orderBy1").val();
		/*
		 * if (/[^a-zA-Z0-9-\\\/ ]/.test(orderNo)) { alert("कृपया आदेश संख्या
		 * अक्षरांकीय भरें |"); document.getElementById("orderNo1").focus();
		 * return false; } if (/[^a-zA-Z0-9-\\\/ ]/.test(orderBy)) {
		 * alert("कृपया आदेश द्वारा अक्षरांकीय भरें |");
		 * document.getElementById("orderBy1").focus(); return false; }
		 */

		var orderDate = $("#orderDate1").val();
		var orderRemarks = $("#orderRemarks1").val();
		var chkSncht = $("#chkSncht").val();
		var orderDateCheck = document.getElementById("orderDate1").disabled;

		if (sndTeh == 'sChk') {
			loader('adhyatanChakeriPatwari');
		}

		loadContent('saveIrrigated.do', '&orderNo=' + orderNo + '&orderBy='
				+ orderBy + '&orderDate=' + orderDate + '&orderDateCheck='
				+ orderDateCheck + '&chkSncht=' + chkSncht + '&orderRemarks='
				+ orderRemarks);

		if (sndTeh == 'sChk') {
			// remove_popup('adhyatanChakeriPatwari');
		}
		return true;
	} else {
		return false;
	}

}
function saveGeneralInfo(sndTeh) {
	// var khasraId = document.genralInfo.khasraId.value;
	// var khasraArea = document.genralInfo.khasraArea.value;
	// var holdingType = document.genralInfo.holdTypeValue.value;
	// var landType = document.genralInfo.landTypeValue.value;
	var localName = $("#localName").val();
	var soilTypeArray = new Array();
	soilTypeArray = $("#soilType").val().split("-");
	var soilType = soilTypeArray[0];
	/*
	 * var orderNo = $("#orderNo1").val(); var orderBy = $("#orderBy1").val();
	 * var orderDate = $("#orderDate1").val(); var orderRemarks =
	 * $("#orderRemarks1").val();
	 */
	/*
	 * var orderDateCheck = document.getElementById("orderDate1").disabled;
	 */// var shamilKhasras = document.genralInfo.shamilKhasras.value;
	// var remarks = document.genralInfo.remarks.value;
	/*
	 * var owner = 'Y'; var pattedar = 'Y'; var encrocher = 'Y'; if
	 * (document.genralInfo.owner.checked) { owner == 'Y'; } else { owner = 'N'; }
	 * if (document.genralInfo.pattedar.checked) { pattedar == 'Y'; } else {
	 * pattedar = 'N'; } if (document.genralInfo.encrocher.checked) { encrocher ==
	 * 'Y'; } else { encrocher = 'N'; }
	 */
	// var requestId = document.genralInfo.requestId.value;
	var soilList = "";
	$('#soilTypeTbl input[type="checkbox"]:checked').each(
			function() {
				// alert("111");
				var $row = $(this).parents('tr');
				soilList = soilList + "#" + $row.find('td:eq(0) input').val()
						+ "@" + $row.find('td:eq(1) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val() + "@"
						+ $row.find('td:eq(4) input').val()

						+ "@" + $row.find('td:eq(5) input').val();
			});
	$('#soilTypeTbl input[type="checkbox"]:not(:checked)').each(
			function() {
				var $row = $(this).parents('tr');
				soilList = soilList + "#" + $row.find('td:eq(0) input').val()
						+ "@" + $row.find('td:eq(1) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val() + "@"
						+ $row.find('td:eq(4) input').val()

						+ "@" + $row.find('td:eq(5) input').val();
			});

	soilList = soilList.substring(1, soilList.length);
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}
	/*
	 * loadContent('saveGeneralInfo.do', '&soilList=' + soilList + '&soilType=' +
	 * soilType + '&orderNo=' + orderNo + '&orderBy=' + orderBy + '&orderDate=' +
	 * orderDate + '&orderDateCheck=' + orderDateCheck + '&orderRemarks=' +
	 * orderRemarks + '&localName=' + localName);
	 */
	loadContent('saveGeneralInfo.do', '&soilList=' + soilList + '&soilType='
			+ soilType + '&localName=' + localName);
	/*
	 * if (sndTeh == 'sChk') { remove_popup('adhyatanChakeriPatwari'); }
	 */
}
// function used in validateOrderDetails, sendTOAddRowOneUpdate ,
// addRowOneUpdate
function validateOrderDetailsSinchit() {

	$("#orderNo1").removeClass('heighfieldDate');
	$("#orderBy1").removeClass('heighfield');
	$("#orderDate1").removeClass('heighfieldDate');

	var orderNo = $("#orderNo1").val();
	var orderBy = $("#orderBy1").val();
	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for (var i = 0; i < orderNo.length; i++) {
	    if (iChars.indexOf(orderNo.charAt(i)) != -1) {
	    alert("कृपया आदेश संख्या अक्षरांकीय भरें |");
	    document.getElementById("orderNo1").focus();
	    return false;
	        }
	    }
	for (var i = 0; i < orderBy.length; i++) {
	    if (iChars.indexOf(orderBy.charAt(i)) != -1) {
	    alert("कृपया आदेश द्वारा अक्षरांकीय भरें |");
	    document.getElementById("orderBy1").focus();
	    return false;
	        }
	    }
	/*if (/[^a-zA-Z0-9-\\\/ ]/.test(orderNo)) {
		alert("कृपया आदेश संख्या अक्षरांकीय भरें |");
		document.getElementById("orderNo1").focus();
		return false;
	}
	if (/[^a-zA-Z0-9-\\\/ ]/.test(orderBy)) {
		alert("कृपया आदेश द्वारा अक्षरांकीय भरें |");
		document.getElementById("orderBy1").focus();
		return false;
	}*/

	var orderDate = $("#orderDate1").val();
	var orderRemarks = $("#orderRemarks1").val();

	orderDateCheck = document.getElementById("orderNo1").disabled;

	// alert("iherihihetr------------"+orderDateCheck);

	if (!orderDateCheck) {
		if (orderNo == "" && orderBy == "" && orderDate == ""
				&& orderRemarks == "") {
			alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo != ""
				&& (orderBy == "" && orderDate == "" && orderRemarks == "")) {
			alert("आदेश विवरण (आदेश द्वारा, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderBy != ""
				&& (orderNo == "" && orderDate == "" && orderRemarks == "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderDate != ""
				&& (orderNo == "" && orderBy == "" && orderRemarks == "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश टिप्पणी  भरें|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderRemarks != ""
				&& (orderNo == "" && orderBy == "" && orderDate == "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश दिनांक|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo != "" && orderBy != ""
				&& (orderDate == "" && orderRemarks == "")) {
			alert("आदेश विवरण (आदेश दिनांक, आदेश टिप्पणी  भरें|)");
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo == "" && orderBy == "")
				&& (orderDate != "" && orderRemarks != "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा |)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo == "" && orderDate == "")
				&& (orderBy != "" && orderRemarks != "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश दिनांक|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo == "" && orderRemarks == "")
				&& (orderBy != "" && orderDate != "")) {
			alert("आदेश विवरण (आदेश संख्या, आदेश टिप्पणी  भरें |)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderBy == "" && orderRemarks == "")
				&& (orderNo != "" && orderDate != "")) {
			alert("आदेश विवरण (आदेश द्वारा , आदेश टिप्पणी  भरें |)");
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderDate == "" && orderRemarks == "")
				&& (orderNo != "" && orderBy != "")) {
			alert("आदेश विवरण (आदेश दिनांक , आदेश टिप्पणी  भरें |)");
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo != "" && orderBy != "" && orderDate != "")
				&& orderRemarks == "") {
			alert(" कृपया आदेश टिप्पणी / टिप्पणी  भरें |");
			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderRemarks != "" && orderBy != "" && orderDate != "")
				&& orderNo == "") {
			alert("कृपया आदेश संख्या भरें | ");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo != "" && orderRemarks != "" && orderDate != "")
				&& orderBy == "") {
			alert("आदेश विवरण (आदेश द्वारा भरें|)");
			$("#orderBy1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if ((orderNo != "" && orderBy != "" && orderRemarks != "")
				&& orderDate == "") {
			alert("आदेश विवरण (आदेश दिनांक|)");
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo == "") {
			alert("आदेश संख्या भरें.|)");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderBy == "") {
			alert("आदेश द्वारा भरें.|)");
			$("#orderBy1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "डेटा सफलतापूर्वक संशोधित नहीं किया गया है.";
			return false;
		}

		if (orderDate == "") {
			alert("आदेश दिनांक भरें.|)");
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo == "" && orderBy == "") {
			alert("आदेश टिप्पणी  (आदेश संख्या, आदेश द्वारा भरें.|))");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo == "" && orderDate == "") {
			alert("आदेश टिप्पणी  (आदेश संख्या, आदेश दिनांक भरें.|))");
			$("#orderNo1").attr('class', 'heighfieldDate input_w1');
			$("#orderDate1").attr('class', 'heighfieldDate input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderBy == "" && orderDate == "") {
			alert("आदेश विवरण (आदेश द्वारा, आदेश दिनांक भरें.|)");
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderDate1").attr('class', 'inputFieldPatMod input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		if (orderNo == "" && orderBy == "" && orderDate == "") {
			alert("आदेश टिप्पणी  (आदेश संख्या, आदेश द्वारा, आदेश दिनांक भरें.|)");
			$("#orderNo1").attr('class', 'heighfield input_w1');
			$("#orderBy1").attr('class', 'heighfield input_w1');
			$("#orderDate1").attr('class', 'heighfield input_w1');

			$("#orderRemarks1").attr('class', 'heighfield input_w1');
			document.getElementById('messageOne').value = "आदेश विवरण भरें.";
			return false;
		}

		else {
			return true;
		}

	}

}
function validateOrderDetails() {
	$("#orderNo").removeClass('heighfieldDate');
	$("#orderBy").removeClass('heighfield');
	$("#orderDate").removeClass('heighfieldDate');

	var orderNo = $("#orderNo").val();
	var orderBy = $("#orderBy").val();
	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for (var i = 0; i < orderNo.length; i++) {
	    if (iChars.indexOf(orderNo.charAt(i)) != -1) {
	    alert("कृपया आदेश संख्या अक्षरांकीय भरें |");
	    document.getElementById("orderNo").focus();
	    return false;
	        }
	    }
	for (var i = 0; i < orderBy.length; i++) {
	    if (iChars.indexOf(orderBy.charAt(i)) != -1) {
	    alert("कृपया आदेश द्वारा अक्षरांकीय भरें |");
	    document.getElementById("orderBy").focus();
	    return false;
	        }
	    }
	var orderDate = $("#orderDate").val();
	var orderRemarks = $("#orderRemarks").val();
	var ordrDt = new Number(orderDate.split("/")[0]);
	var ordrMnth = new Number(orderDate.split("/")[1]);
	var ordrYr = new Number(orderDate.split("/")[2]);
	var today = $("#todayDate").val();

	var tdyDate = new Number(today.split("/")[0]);
	var tdyMnth = new Number(today.split("/")[1]);
	var tdYr = new Number(today.split("/")[2]);

	/*
	 * if(orderNo !="" && orderBy != "" && orderDate != ""){ if(orderRemarks!=
	 * ""){
	 * $('#orderRemarks').val($("#orderRemarks").val()+orderNo+orderBy+orderDate); }
	 * else{ $('#orderRemarks').val(orderNo+orderBy+orderDate); } }
	 */

	/*
	 * if (ordrDt > tdyDate) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfieldDate input_w1'); return false; }
	 * 
	 * if (ordrMnth > tdyMnth) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfield input_w1'); return false; }
	 * 
	 * if (ordrYr > tdYr) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfield input_w1'); return false; }
	 */
	if (orderNo == "" && orderBy == "" && orderDate == "" && orderRemarks == "") {
		alert("कृपया आदेश संख्या भरें |");

		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें | ";
		return false;
	}

	if (orderNo != ""
			&& (orderBy == "" && orderDate == "" && orderRemarks == "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश द्वारा भरें |");
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy != ""
			&& (orderNo == "" && orderDate == "" && orderRemarks == "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");

		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderDate != ""
			&& (orderNo == "" && orderBy == "" && orderRemarks == "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderRemarks != ""
			&& (orderNo == "" && orderBy == "" && orderDate == "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo != "" && orderBy != ""
			&& (orderDate == "" && orderRemarks == "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश दिनांक भरें |");
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderBy == "")
			&& (orderDate != "" && orderRemarks != "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderDate == "")
			&& (orderBy != "" && orderRemarks != "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderRemarks == "")
			&& (orderBy != "" && orderDate != "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderBy == "" && orderRemarks == "")
			&& (orderNo != "" && orderDate != "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश द्वारा भरें |");
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderDate == "" && orderRemarks == "")
			&& (orderNo != "" && orderBy != "")) {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश दिनांक भरें |");

		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderBy != "" && orderDate != "")
			&& orderRemarks == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश टिप्पणी भरें |");
		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderRemarks != "" && orderBy != "" && orderDate != "")
			&& orderNo == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderRemarks != "" && orderDate != "")
			&& orderBy == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश द्वारा भरें |");
		$("#orderBy").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderBy != "" && orderRemarks != "")
			&& orderDate == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश दिनांक भरें |");
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "") {
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy == "") {
		alert("कृपया आदेश द्वारा भरें |");
		$("#orderBy").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "डेटा सफलतापूर्वक संशोधित नहीं किया गया है.";
		return false;
	}

	if (orderDate == "") {
		alert("कृपया आदेश दिनांक भरें |");
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderBy == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderDate == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfieldDate input_w1');
		$("#orderDate").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy == "" && orderDate == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश द्वारा भरें |");
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderDate").attr('class', 'inputFieldPatMod input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderBy == "" && orderDate == "") {
		// alert("कृपया आदेश विवरण /टिप्पणी भरें");
		alert("कृपया आदेश संख्या भरें |");
		$("#orderNo").attr('class', 'heighfield input_w1');
		$("#orderBy").attr('class', 'heighfield input_w1');
		$("#orderDate").attr('class', 'heighfield input_w1');

		$("#orderRemarks").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	else {
		return true;
	}

}

function validateOrderDetailsOne() {
	$("#orderNo1").removeClass('heighfieldDate');
	$("#orderBy1").removeClass('heighfield');
	$("#orderDate1").removeClass('heighfieldDate');

	var orderNo = $("#orderNo1").val();
	var orderBy = $("#orderBy1").val();
	var orderDate = $("#orderDate1").val();
	var orderRemarks = $("#orderRemarks1").val();
	var ordrDt = new Number(orderDate.split("/")[0]);
	var ordrMnth = new Number(orderDate.split("/")[1]);
	var ordrYr = new Number(orderDate.split("/")[2]);
	var today = $("#todayDate").val();

	var tdyDate = new Number(today.split("/")[0]);
	var tdyMnth = new Number(today.split("/")[1]);
	var tdYr = new Number(today.split("/")[2]);

	/*
	 * if(orderNo !="" && orderBy != "" && orderDate != ""){ if(orderRemarks!=
	 * ""){
	 * $('#orderRemarks').val($("#orderRemarks").val()+orderNo+orderBy+orderDate); }
	 * else{ $('#orderRemarks').val(orderNo+orderBy+orderDate); } }
	 */

	/*
	 * if (ordrDt > tdyDate) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfieldDate input_w1'); return false; }
	 * 
	 * if (ordrMnth > tdyMnth) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfield input_w1'); return false; }
	 * 
	 * if (ordrYr > tdYr) { alert("आदेश दिनांक भविष्य की तारीख नहीं होनी
	 * चाहिए."); document.getElementById('messageOne').value = "आदेश विवरण,आदेश
	 * संख्या, आदेश द्वारा."; $("#orderDate").val("");
	 * $("#orderDate").attr('class', 'heighfield input_w1'); return false; }
	 */
	if (orderNo == "" && orderBy == "" && orderDate == "" && orderRemarks == "") {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo != ""
			&& (orderBy == "" && orderDate == "" && orderRemarks == "")) {
		alert("आदेश विवरण (आदेश द्वारा, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy != ""
			&& (orderNo == "" && orderDate == "" && orderRemarks == "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश दिनांक, आदेश टिप्पणी  भरें|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderDate != ""
			&& (orderNo == "" && orderBy == "" && orderRemarks == "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश टिप्पणी  भरें|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderRemarks != ""
			&& (orderNo == "" && orderBy == "" && orderDate == "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश दिनांक|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo != "" && orderBy != ""
			&& (orderDate == "" && orderRemarks == "")) {
		alert("आदेश विवरण (आदेश दिनांक, आदेश टिप्पणी  भरें|)");
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderBy == "")
			&& (orderDate != "" && orderRemarks != "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा |)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderDate == "")
			&& (orderBy != "" && orderRemarks != "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश दिनांक|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo == "" && orderRemarks == "")
			&& (orderBy != "" && orderDate != "")) {
		alert("आदेश विवरण (आदेश संख्या, आदेश टिप्पणी  भरें |)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderBy == "" && orderRemarks == "")
			&& (orderNo != "" && orderDate != "")) {
		alert("आदेश विवरण (आदेश द्वारा , आदेश टिप्पणी  भरें |)");
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderDate == "" && orderRemarks == "")
			&& (orderNo != "" && orderBy != "")) {
		alert("आदेश विवरण (आदेश दिनांक , आदेश टिप्पणी  भरें |)");
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderBy != "" && orderDate != "")
			&& orderRemarks == "") {
		alert("आदेश विवरण (आदेश टिप्पणी  भरें|)");
		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderRemarks != "" && orderBy != "" && orderDate != "")
			&& orderNo == "") {
		alert("आदेश विवरण (आदेश संख्या|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderRemarks != "" && orderDate != "")
			&& orderBy == "") {
		alert("आदेश विवरण (आदेश द्वारा भरें|)");
		$("#orderBy1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if ((orderNo != "" && orderBy != "" && orderRemarks != "")
			&& orderDate == "") {
		alert("आदेश विवरण (आदेश दिनांक|)");
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "") {
		alert("आदेश संख्याभरें.|)");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy == "") {
		alert("आदेश द्वारा भरें.|)");
		$("#orderBy1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "डेटा सफलतापूर्वक संशोधित नहीं किया गया है.";
		return false;
	}

	if (orderDate == "") {
		alert("आदेश दिनांक भरें.|)");
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderBy == "") {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा भरें.|))");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderDate == "") {
		alert("आदेश विवरण (आदेश संख्या, आदेश दिनांक भरें.|))");
		$("#orderNo1").attr('class', 'heighfieldDate input_w1');
		$("#orderDate1").attr('class', 'heighfieldDate input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderBy == "" && orderDate == "") {
		alert("आदेश विवरण (आदेश द्वारा, आदेश दिनांक भरें.|)");
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderDate1").attr('class', 'inputFieldPatMod input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	if (orderNo == "" && orderBy == "" && orderDate == "") {
		alert("आदेश विवरण (आदेश संख्या, आदेश द्वारा, आदेश दिनांक भरें.|)");
		$("#orderNo1").attr('class', 'heighfield input_w1');
		$("#orderBy1").attr('class', 'heighfield input_w1');
		$("#orderDate1").attr('class', 'heighfield input_w1');

		$("#orderRemarks1").attr('class', 'heighfield input_w1');
		document.getElementById('messageOne').value = "आदेश विवरण भरें.";
		return false;
	}

	else {
		return true;
	}

}

function sendCropAdd() {
	var sudhBya = $("#txtSudhBoya").val();
	var remainingSudhBya = $("#remainingSudhBya").val();
	var cropId = $("#cropId").val();
	var sinchitArea = $("#sinchitArea").val();
	var asinchitArea = $("#asinchitArea").val();
	var waterResourceId = $("#waterResourceId").val();
	var sourceOfIrrigationId = $("#sourceOfIrrigationId").val()/* .split("-")[1] */;
	var seasonId = $("#seasonId").val().split("-")[0];
	var seasonName = $("#seasonId").val().split("-")[1];
	var cropGroupId = $("#cropGroupId").val().split("-")[1];
	var cropGroupName = $("#cropGroupId").val().split("-")[1];
	var crpSeasonChk = true;
	var seasonWiseUsedArea = 0;
	var crpSeasonChkArray = new Array();
	var dupRowIdArray = new Array();
	$("div.cropCheck :input").each(function() {
		crpSeasonChkArray.push($(this).attr('id'));
	});

	// alert("sinchitArea--->>"+sinchitArea);
	// alert("asinchitArea--->>"+asinchitArea);
	// alert("sudhBya--->>"+sudhBya);

	// alert("crpSeasonChkArray and its length "+crpSeasonChkArray+"
	// "+crpSeasonChkArray.length);

	if (crpSeasonChkArray.length > 0) {
		for ( var i = 0; i < crpSeasonChkArray.length; i++) {
			var ssnCrpId = "seasonCrop" + crpSeasonChkArray[i];
			var ssnCrop = $('[name="' + ssnCrpId + '"]').val();
			// alert("ssnCrop check in table"+ssnCrop);
			if (ssnCrop == seasonName) {
				dupRowIdArray.push(crpSeasonChkArray[i]);
			}
		}
	}
	// alert("dupRowIdArray "+dupRowIdArray);
	if (dupRowIdArray.length > 0) {
		for ( var j = 0; j < dupRowIdArray.length; j++) {
			var usedSinchitArea = parseFloat($(
					"#dataSinchitArea" + String(dupRowIdArray[j])).val());
			var usedASinchitArea = parseFloat($(
					"#dataAsinchitArea" + String(dupRowIdArray[j])).val());
			seasonWiseUsedArea = parseFloat(seasonWiseUsedArea)
					+ parseFloat(usedSinchitArea)
					+ parseFloat(usedASinchitArea);
		}
		crpSeasonChk = false;
	}

	// alert("seasonWiseUsedArea "+seasonWiseUsedArea);

	if (seasonId == 0) {
		alert("मौसमी फसल चुने .|");
		$("#seasonId").attr('class', 'select_w1 heighfield');
		return false;
	}

	if (cropGroupId == 0) {
		alert("फसल समूह चुने .|");
		$("#cropGroupId").attr('class', 'select_w1 heighfield');
		return false;

	}

	if (cropId == 0) {
		alert("कृपया फसल चयन करें.");
		$("#cropId").attr('class', 'input_w1 heighfield');
	} else {
		var disableCheckAsinchit = $("#asinchitArea").is('[disabled=disabled]');
		var disableCheckSinchit = $("#sinchitArea").is('[disabled=disabled]');

		if (sinchitArea == "" && disableCheckAsinchit) {
			alert("कुल सिंचित विवरण भरें |");
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
		}

		if (asinchitArea == "" && disableCheckSinchit) {
			alert("कुल असिंचित विवरण भरें |");
			$("#asinchitArea").attr('class', 'input_w1 heighfield');
		}

		if (asinchitArea == "" && sinchitArea == "") {
			alert("कुल सिंचित अथवा  कुल असिंचित विवरण भरें |");
			$("#asinchitArea").attr('class', 'input_w1 heighfield');
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
		}

		if (sinchitArea != "" && asinchitArea == "") {
			if (isValidDecimal(sinchitArea)) {
				if (crpSeasonChk == false) {
					// seasonWiseUsedArea =
					// parseFloat(parseFloat(seasonWiseUsedArea).toFixed(3)+
					// parseFloat(sinchitArea).toFixed(3)).toFixed(3);

					seasonWiseUsedArea = (parseFloat(seasonWiseUsedArea) + parseFloat(sinchitArea))
							.toFixed(3);

					// alert("seasonWiseUsedArea--11-->>"+seasonWiseUsedArea);

					if (seasonWiseUsedArea <= sudhBya) {

						// alert("---1--");
						if (waterResourceId == 0) {
							alert("सिचाई स्त्रोत चुने .|");
							$("#waterResourceId").attr('class',
									'select_w1 heighfield');
							// $("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#waterResourceId").val(
									$("#waterResourceId option:first").val());
							$("#sinchitArea").attr('disabled', false);
							$("#asinchitArea").attr('disabled', true);
							// $("#waterResourceId").attr('disabled', false);
							// $("#sourceOfIrrigationId").attr('disabled',
							// false);
						}

						if (sourceOfIrrigationId == 0) {
							alert("सिचाई साधन चुने .|");
							$("#sourceOfIrrigationId").attr('class',
									'select_w1 heighfield');
							// $("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#sourceOfIrrigationId").val(
									$("#sourceOfIrrigationId option:first")
											.val());
							$("#sinchitArea").attr('disabled', false);
							$("#asinchitArea").attr('disabled', true);
							// $("#waterResourceId").attr('disabled', false);
							// $("#sourceOfIrrigationId").attr('disabled',
							// false);
						}

						if ((waterResourceId != 0 && sourceOfIrrigationId != 0)
								&& (cropId != 0 && cropId != 0)) {
							addRowOneUpdate('dataTable', 'cropId',
									'sinchitArea', 'asinchitArea',
									'doubleCrop', 'waterResourceId',
									'sourceOfIrrigationId');
						}
					} else {
						// alert("---11--");
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").attr('class', 'input_w1 heighfield');
						$("#sinchitArea").attr("style", "text-align: right;");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						$("#sinchitArea").attr('disabled', false);
						$("#asinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
					}
				}
				if (crpSeasonChk == true) {
					if (sinchitArea <= sudhBya) {

						// alert("---3--");

						if (waterResourceId == 0) {
							alert("सिचाई स्त्रोत चुने .|");
							$("#waterResourceId").attr('class',
									'select_w1 heighfield');
							// $("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#waterResourceId").val(
									$("#waterResourceId option:first").val());
							$("#sourceOfIrrigationId").val(
									$("#sourceOfIrrigationId option:first")
											.val());
							$("#sinchitArea").attr('disabled', false);
							$("#asinchitArea").attr('disabled', true);
							// $("#waterResourceId").attr('disabled', false);
							// $("#sourceOfIrrigationId").attr('disabled',
							// false);
						}

						if (sourceOfIrrigationId == 0) {
							alert("सिचाई साधन चुने .|");
							$("#sourceOfIrrigationId").attr('class',
									'select_w1 heighfield');
							// $("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#sourceOfIrrigationId").val(
									$("#sourceOfIrrigationId option:first")
											.val());
							$("#sinchitArea").attr('disabled', false);
							$("#asinchitArea").attr('disabled', true);
							// $("#waterResourceId").attr('disabled', true);
							// $("#sourceOfIrrigationId").attr('disabled',
							// true);
						}

						if ((waterResourceId != 0 && sourceOfIrrigationId != 0)
								&& (cropId != 0 && cropId != 0)) {
							addRowOneUpdate('dataTable', 'cropId',
									'sinchitArea', 'asinchitArea',
									'doubleCrop', 'waterResourceId',
									'sourceOfIrrigationId');
						}
					} else {

						// alert("---4--");

						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").attr('class', 'input_w1 heighfield');
						$("#sinchitArea").attr("style", "text-align: right;");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						$("#sinchitArea").attr('disabled', false);
						$("#asinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
					}
				}
			}
		}
		if (asinchitArea != "" && sinchitArea == "") {
			if (isValidDecimal(asinchitArea)) {
				if (crpSeasonChk == false) {
					/*
					 * seasonWiseUsedArea =
					 * parseFloat(parseFloat(seasonWiseUsedArea) +
					 * parseFloat(asinchitArea));
					 */

					// alert("parseFloat(asinchitArea).toFixed(3)).toFixed(3)--2-->>"+parseFloat(asinchitArea).toFixed(3));
					seasonWiseUsedArea = (parseFloat(seasonWiseUsedArea) + parseFloat(asinchitArea))
							.toFixed(3);

					// alert("seasonWiseUsedArea--2-->>"+seasonWiseUsedArea);

					if (seasonWiseUsedArea <= sudhBya) {
						if (cropId == 0) {
							alert("फसल चयन करें.|");
							$("#cropId").attr('class', 'select_w1 heighfield');
							$("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#seasonId").val(
									$("#seasonId option:first").val());
							$("#cropGroupId").val(
									$("#cropGroupId option:first").val());
							$("#cropId").val($("#cropId option:first").val());
							$("#waterResourceId").val(
									$("#waterResourceId option:first").val());
							$("#sourceOfIrrigationId").val(
									$("#sourceOfIrrigationId option:first")
											.val());
							$("#sinchitArea").attr('disabled', true);
							$("#asinchitArea").attr('disabled', false);
							$("#waterResourceId").attr('disabled', true);
							$("#sourceOfIrrigationId").attr('disabled', true);
						}

						if (cropId != 0) {
							waterResourceId = "";
							sourceOfIrrigationId = "";

							addRowOneUpdate('dataTable', 'cropId',
									'sinchitArea', 'asinchitArea',
									'doubleCrop', 'waterResourceId',
									'sourceOfIrrigationId');
						}
					} else {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#asinchitArea").attr('class', 'input_w1 heighfield');
						$("#asinchitArea").attr("style", "text-align: right;");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						$("#sinchitArea").attr('disabled', false);
						$("#asinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
					}
				}
				if (crpSeasonChk == true) {
					if (asinchitArea <= sudhBya) {
						if (cropId == 0) {
							alert("फसल चयन करें.|");
							$("#cropId").attr('class', 'select_w1 heighfield');
							$("#sinchitArea").val("");
							$("#asinchitArea").val("");
							$("#seasonId").val(
									$("#seasonId option:first").val());
							$("#cropGroupId").val(
									$("#cropGroupId option:first").val());
							$("#cropId").val($("#cropId option:first").val());
							$("#waterResourceId").val(
									$("#waterResourceId option:first").val());
							$("#sourceOfIrrigationId").val(
									$("#sourceOfIrrigationId option:first")
											.val());
							$("#sinchitArea").attr('disabled', false);
							$("#asinchitArea").attr('disabled', false);
							$("#waterResourceId").attr('disabled', false);
							$("#sourceOfIrrigationId").attr('disabled', false);
						}
						if (cropId != 0) {
							waterResourceId = "";
							sourceOfIrrigationId = "";

							addRowOneUpdate('dataTable', 'cropId',
									'sinchitArea', 'asinchitArea',
									'doubleCrop', 'waterResourceId',
									'sourceOfIrrigationId');
						}
					} else {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");

						$("#asinchitArea").attr('class', 'input_w1 heighfield');
						$("#asinchitArea").attr("style", "text-align: right;");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						$("#sinchitArea").attr('disabled', false);
						$("#asinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
					}
				}
			}
		}
	}
}

/* Added By Vivek TIWARI to Validate and add row in Crop */

function sendTOAddRowOneUpdate() {

	/*
	 * $("#orderNo").removeClass('heighfield');
	 * $("#orderBy").removeClass('heighfield');
	 * $("#orderDate").removeClass('heighfield');
	 * $("#orderRemarks").removeClass('heighfield');
	 */
	$("#cropId").removeClass('heighfield');
	$("#sinchitArea").removeClass('heighfield');
	$("#asinchitArea").removeClass('heighfield');
	$("#waterResourceId").removeClass('heighfield');
	$("#sourceOfIrrigationId").removeClass('heighfield');
	$("#cropGroupId").removeClass('heighfield');
	$("#seasonId").removeClass('heighfield');
	var sinchitArea = $("#sinchitArea").val();
	var asinchitArea = $("#asinchitArea").val();
	var sinchitDisable = $("#sinchitArea").is('[disabled=disabled]');
	var asinchitDisable = $("#asinchitArea").is('[disabled=disabled]');
	// var orderNoDsblChk = $("#orderNo").is('[disabled=disabled]');
	// var orderByDsblChk = $("#orderBy").is('[disabled=disabled]');
	// var orderDateDsblChk = $("#orderDate").is('[disabled=disabled]');
	// var orderRemarksDsblChk = $("#orderRemarks").is('[disabled=disabled]');

	/*
	 * if (orderNoDsblChk == false && orderByDsblChk == false &&
	 * orderDateDsblChk == false && orderRemarksDsblChk == false) { if
	 * (sinchitDisable == false && asinchitDisable == true) { if (sinchitArea == "" &&
	 * asinchitArea != "" ) { alert("सिंचित क्षेत्रफल दर्ज करें .");
	 * $("#sinchitArea").val(""); $("#sinchitArea").attr('class', 'input_w1
	 * heighfield'); } } if (sinchitDisable == true) { } if (sinchitDisable ==
	 * true && asinchitDisable == false) { if (asinchitArea == "" && sinchitArea != "" ) {
	 * alert("असिंचित क्षेत्रफल दर्ज करें ."); $("#sinchitArea").val("");
	 * $("#sinchitArea").attr('class', 'input_w1 heighfield'); } }
	 * 
	 * if (sinchitDisable == true && asinchitDisable == true) { var cropIdDisble =
	 * $("#cropId").is('[disabled=disabled]'); if (cropIdDisble == true) { var
	 * cropGroupIdDisble = $("#cropGroupId").is( '[disabled=disabled]'); if
	 * (cropGroupIdDisble == true) { alert("मौसमी फसल चयन करें"); } else {
	 * alert("फसल समूह चयन करें"); } } else { alert("फसल चयन करें"); } }
	 * 
	 * if (sinchitDisable == false && asinchitDisable == false) { if
	 * (asinchitArea == "" && asinchitArea == "") { alert("सिंचित अथवा असिंचित
	 * क्षेत्रफल दर्ज करें ."); $("#sinchitArea").val("");
	 * $("#sinchitArea").attr('class', 'input_w1 heighfield');
	 * $("#sinchitArea").val(""); $("#sinchitArea").attr('class', 'input_w1
	 * heighfield'); } }
	 * 
	 * if (validateOrderDetails()) { if (sinchitArea != "" && asinchitArea ==
	 * "") { if (sinchitArea == 0 || sinchitArea == 0.0 || sinchitArea == 0.00 ||
	 * sinchitArea == 0.000) { $("#sinchitArea").val("");
	 * $("#sinchitArea").attr('disabled', false);
	 * $("#asinchitArea").attr('disabled', false);
	 * $("#sinchitArea").attr('class', 'input_w1 heighfield');
	 * $("#waterResourceId").val( $("waterResourceId option:first").val());
	 * $("#waterResourceId").attr('disabled', true);
	 * $("#sourceOfIrrigationId").val( $("#sourceOfIrrigationId
	 * option:first").val()); $("#sourceOfIrrigationId").attr('disabled', true);
	 * alert("सिंचित क्षेत्रफल शुन्य नहीं हो सकता."); } else { sendCropAdd(); } }
	 * if (asinchitArea != "" && sinchitArea == "") { if (asinchitArea == 0 ||
	 * asinchitArea == 0.0 || asinchitArea == 0.00 || asinchitArea == 0.000) {
	 * $("#asinchitArea").val(""); $("#sinchitArea").attr('disabled', false);
	 * $("#asinchitArea").attr('disabled', false);
	 * $("#asinchitArea").attr('class', 'input_w1 heighfield');
	 * $("#waterResourceId").val( $("waterResourceId option:first").val());
	 * $("#waterResourceId").attr('disabled', true);
	 * $("#sourceOfIrrigationId").val( $("#sourceOfIrrigationId
	 * option:first").val()); $("#sourceOfIrrigationId").attr('disabled', true);
	 * alert("असिंचित क्षेत्रफल शुन्य नहीं हो सकता"); } else { sendCropAdd(); } } } }
	 * 
	 *//*
		 * if (orderNoDsblChk == true && orderByDsblChk == true &&
		 * orderDateDsblChk == true && orderRemarksDsblChk == true) {
		 */
	if (sinchitDisable == false && asinchitDisable == true) {
		if (sinchitArea == "" /* && asinchitArea != "" */) {
			alert("कृपया सिंचित  क्षेत्रफल  दर्ज करें |");
			$("#sinchitArea").val("");
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
		}
	}
	if (sinchitDisable == true) {

	}
	if (sinchitDisable == true && asinchitDisable == false) {
		if (asinchitArea == "" /* && sinchitArea != "" */) {
			alert("कृपया असिंचित   क्षेत्रफल  दर्ज करें |");
			$("#sinchitArea").val("");
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
		}
	}

	if (sinchitDisable == true && asinchitDisable == true) {
		var cropIdDisble = $("#cropId").is('[disabled=disabled]');
		if (cropIdDisble == true) {
			var cropGroupIdDisble = $("#cropGroupId").is('[disabled=disabled]');
			if (cropGroupIdDisble == true) {
				alert("कृपया मौसम चयन करें |");
			} else {
				alert("कृपया फसल समूह चयन करें |");
			}
		} else {
			alert("कृपया फसल चयन करें |");
		}
	}

	if (sinchitDisable == false && asinchitDisable == false) {
		if (asinchitArea == "" && asinchitArea == "") {
			alert("कृपया सिंचित अथवा असिंचित क्षेत्रफल दर्ज करें |");
			$("#sinchitArea").val("");
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
			$("#sinchitArea").val("");
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
		}
	}
	if (sinchitArea != "" && asinchitArea == "") {
		if (sinchitArea == 0 || sinchitArea == 0.0 || sinchitArea == 0.00
				|| sinchitArea == 0.000) {
			$("#sinchitArea").val("");
			$("#sinchitArea").attr('disabled', false);
			$("#asinchitArea").attr('disabled', false);
			$("#sinchitArea").attr('class', 'input_w1 heighfield');
			$("#waterResourceId").val($("waterResourceId option:first").val());
			$("#waterResourceId").attr('disabled', true);
			$("#sourceOfIrrigationId").val(
					$("#sourceOfIrrigationId option:first").val());
			$("#sourceOfIrrigationId").attr('disabled', true);
			alert("कृपया सिंचित  क्षेत्रफल  शुन्य नहीं हो सकता |");
		} else {
			sendCropAdd();
		}
	}
	if (asinchitArea != "" && sinchitArea == "") {
		if (asinchitArea == 0 || asinchitArea == 0.0 || asinchitArea == 0.00
				|| asinchitArea == 0.000) {
			$("#asinchitArea").val("");
			$("#sinchitArea").attr('disabled', false);
			$("#asinchitArea").attr('disabled', false);
			$("#asinchitArea").attr('class', 'input_w1 heighfield');
			$("#waterResourceId").val($("waterResourceId option:first").val());
			$("#waterResourceId").attr('disabled', true);
			$("#sourceOfIrrigationId").val(
					$("#sourceOfIrrigationId option:first").val());
			$("#sourceOfIrrigationId").attr('disabled', true);
			alert("कृपया असिंचित  क्षेत्रफल  शुन्य नहीं हो सकता |");
		} else {

			sendCropAdd();
		}
	}
}

// function validate positive integer Added By Vivek TIWARI

function validateInteger(number) {
	var integerRegex = /^\d+$/;
	if (integerRegex.test(number)) {
		while (number.substr(0, 1) == '0' && number.length > 1) {
			number = number.substr(1, 9999);
		}
		/* alert("valid Number ******** " + number); */
		return number;
	} else {
		alert("कृपया सही अंक दर्ज करें |");
		return 0;
	}
}
function validateIntegerTree(number) {
	var integerRegex = /^\d+$/;
	if (integerRegex.test(number)) {
		while (number.substr(0, 1) == '0' && number.length > 1) {
			number = number.substr(1, 9999);
		}
		/* alert("valid Number ******** " + number); */
		return number;
	} else {
		alert("कृपया पेड़ विवरण दर्ज करें |");
		return 0;
	}
}
function addWaterRes(tableID, waterResId, govcnt, prvcnt) {
	$("#countGovt").removeClass('heighfield');
	$("#countPrivate").removeClass('heighfield');
	$("#waterResId").removeClass('heighfield');
	
	var id1 = document.getElementById(waterResId).value;
	var index = id1.lastIndexOf("-");
	var lenth = id1.length;
	var waterResId1 = id1.substring(0, index);
	var waterResName1 = id1.substring(index + 1, lenth);

	var govcnt1 = document.getElementById(govcnt).value;
	var prvcnt1 = document.getElementById(prvcnt).value;

	// alert(id1);

	if (id1 == 0) {

		alert("कृपया जल संसाधन चयन करें |");
		// $("#countGovt").val("");
		// $("#countPrivate").val("");

		// $("#countGovt").attr('class', 'input_w1 heighfield');
		// $("#countPrivate").attr('class', 'input_w1 heighfield');
		return false;
	}
	if (govcnt1 == "" && prvcnt1 == "") {

		alert("कृपया शासकीय संख्या / निजी संख्या (जल संसाधन) दर्ज करें |");
		$("#countGovt").val("");
		$("#countPrivate").val("");

		$("#countGovt").attr('class', 'input_w1 heighfield');
		$("#countPrivate").attr('class', 'input_w1 heighfield');

		return false;

	} else if (govcnt1 != "" && prvcnt1 == "") {
		var govtCount = validateInteger(govcnt1);

		if (id1 == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#waterResId").attr('class', 'select_w1 heighfield');
			return false;
		} else if (govtCount == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#countGovt").val("");
			$("#countGovt").attr('class', 'input_w1 heighfield');
			return false;
		}
		/*
		 * var table = document.getElementById(tableID); for ( var r = 0, n =
		 * table.rows.length; r < n; r++) { for ( var c = 0, m =
		 * table.rows[r].cells.length; c < m; c++) { val =
		 * table.rows[r].cells[c].innerHTML;
		 * 
		 * if (val) { if (val.indexOf(waterResId1) != -1) { var spanTreeResource =
		 * document .getElementById("spanTreeResource");
		 * spanTreeResource.style.display = "inline"; errorMsg = "आप तालिका में
		 * डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं.";
		 * document.getElementById("spanTreeResource").innerHTML = errorMsg;
		 * alert("आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे
		 * हैं."); return false; } } } }
		 */

		if (IsDuplicateRow(tableID, 0, waterResId1) != true) {
			alert("आप सिचाई साधन में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");
			return false;
		}

		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);

		var cell1 = row.insertCell(0);
		cell1.setAttribute("style", "text-align: center;");
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name = "chkbox[]";
		element1.setAttribute('value', waterResId1);

		cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.setAttribute("class", "input_w");
		element2.name = "txtbox167";
		element2.setAttribute("value", waterResName1);
		element2.setAttribute("size", 30);
		element2.setAttribute('type', 'hidden');
		element2.setAttribute("readonly", "true");
		cell2.appendChild(element2);

		var cell2 = row.insertCell(1);
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.setAttribute("class", "input_w");
		element2.name = "txtbox156";
		element2.setAttribute("value", waterResName1);
		element2.setAttribute("readonly", "true");
		cell2.appendChild(element2);

		var cell22 = row.insertCell(2);
		var element22 = document.createElement("input");
		element22.type = "text";
		element22.setAttribute("class", "input_w");
		element22.name = "txtbox2";
		element22.setAttribute("value", govcnt1);
		element22.setAttribute("style", "text-align: right;");
		element22.setAttribute("size", 20);
		element22.setAttribute("readonly", "true");
		cell22.appendChild(element22);

		var cell3 = row.insertCell(3);
		var element3 = document.createElement("input");
		element3.type = "text";
		element3.setAttribute("class", "input_w");
		element3.name = "txtbox";
		element3.setAttribute("value", "");
		element3.setAttribute("size", 20);
		element3.setAttribute("readonly", "true");
		cell3.appendChild(element3);
		
		$("#waterResId").val($("#waterResId option:first").val());
		
		$("#countGovt").val("");
		$("#countPrivate").val("");
		
	} else if (govcnt1 == "" && prvcnt1 != "") {
		var prvtCount = validateInteger(prvcnt1);

		if (id1 == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#waterResId").attr('class', 'select_w1 heighfield');
			return false;
		} else if (prvtCount == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#countGovt").val("");
			$("#countPrivate").attr('class', 'input_w1 heighfield');
			return false;
		}
		/*
		 * var table = document.getElementById(tableID); for ( var r = 0, n =
		 * table.rows.length; r < n; r++) { for ( var c = 0, m =
		 * table.rows[r].cells.length; c < m; c++) { val =
		 * table.rows[r].cells[c].innerHTML; if (val) { if
		 * (val.indexOf(waterResId1) != -1) { alert("आप तालिका में डुप्लिकेट
		 * रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं."); return false; } } } }
		 */

		if (IsDuplicateRow(tableID, 0, waterResId1) != true) {
			alert("आप सिचाई साधन में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");
			return false;
		}

		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);

		var cell1 = row.insertCell(0);
		cell1.setAttribute("style", "text-align: center;");
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name = "chkbox[]";
		element1.setAttribute('value', waterResId1);

		cell1.appendChild(element1);

		var cell2 = row.insertCell(1);
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.setAttribute("class", "input_w");
		element2.name = "txtbox1";
		element2.setAttribute("value", waterResName1);
		element2.setAttribute("style", "text-align: left;");
		element2.setAttribute("size", 30);
		element2.setAttribute('type', 'hidden');
		element2.setAttribute("readonly", "true");
		cell2.appendChild(element2);

		var cell2 = row.insertCell(1);
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.name = "txtbox1";
		element2.setAttribute("class", "input_w");
		element2.setAttribute("style", "text-align: left;");
		element2.setAttribute("value", waterResName1);
		element2.setAttribute("readonly", "true");
		cell2.appendChild(element2);

		var cell22 = row.insertCell(2);
		var element22 = document.createElement("input");
		element22.type = "text";
		element22.setAttribute("class", "input_w");
		element22.setAttribute("style", "text-align: left;");
		element22.name = "txtbox2";
		element22.setAttribute("value", "");
		element22.setAttribute("size", 20);
		element22.setAttribute("readonly", "true");
		cell22.appendChild(element22);

		var cell3 = row.insertCell(3);
		var element3 = document.createElement("input");
		element3.type = "text";
		element3.setAttribute("class", "input_w");
		element3.setAttribute("style", "text-align: right;");
		element3.name = "txtbox";
		element3.setAttribute("value", prvcnt1);
		element3.setAttribute("size", 20);
		element3.setAttribute("readonly", "true");

		cell3.appendChild(element3);
		$("#waterResId").val($("#waterResId option:first").val());
		$("#countGovt").val("");
		$("#countPrivate").val("");
	} else if (govcnt1 != "" && prvcnt1 != "") {
		var govtCount = validateInteger(govcnt1);
		var prvtCount = validateInteger(prvcnt1);

		if (govtCount == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#countGovt").val("");
			$("#countGovt").attr('class', 'input_w1 heighfield');
			return false;
		}

		if (prvtCount == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#countGovt").val("");
			$("#countPrivate").attr('class', 'input_w1 heighfield');
			return false;
		}

		if (govtCount == 0 && prvtCount == 0) {
			alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
			$("#countGovt").val("");
			$("#countPrivate").val("");
			$("#countGovt").attr('class', 'input_w1 heighfield');
			$("#countPrivate").attr('class', 'input_w1 heighfield');
			return false;
		}

		if (govtCount != 0 && prvtCount != 0) {
			if (id1 == 0) {
				alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
				$("#waterResId").attr('class', 'select_w1 heighfield');
				return false;
			} else if (govcnt1 == "") {
				alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
				$("#countGovt").attr('class', 'input_w1 heighfield');
				return false;
			} else if (prvcnt1 == "") {
				alert("कृपया सिंचाई साधन का विवरण दर्ज करें |");
				$("#countPrivate").attr('class', 'input_w1 heighfield');
				return false;
			}
			/*
			 * var table = document.getElementById(tableID); for ( var r = 0, n =
			 * table.rows.length; r < n; r++) { for ( var c = 0, m =
			 * table.rows[r].cells.length; c < m; c++) { val =
			 * table.rows[r].cells[c].innerHTML; if (val) { if
			 * (val.indexOf(waterResId1) != -1) { alert("आप तालिका में डुप्लिकेट
			 * रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं."); return false; } } } }
			 */

			if (IsDuplicateRow(tableID, 0, waterResId1) != true) {
				alert("आप सिचाई साधन में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");
				return false;
			}

			var table = document.getElementById(tableID);
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			cell1.setAttribute("style", "text-align: center;");
			var element1 = document.createElement("input");
			element1.type = "checkbox";
			element1.name = "chkbox[]";
			element1.setAttribute('value', waterResId1);

			cell1.appendChild(element1);

			var cell2 = row.insertCell(1);
			var element2 = document.createElement("input");
			element2.type = "text";
			element2.setAttribute("class", "input_w");
			element2.name = "txtbox1";
			element2.setAttribute("value", waterResName1);
			element2.setAttribute("size", 30);
			element2.setAttribute('type', 'hidden');
			element2.setAttribute("readonly", "true");
			cell2.appendChild(element2);

			var cell2 = row.insertCell(1);
			var element2 = document.createElement("input");
			element2.type = "text";
			element2.setAttribute("class", "input_w");
			element2.name = "txtbox1";
			element2.setAttribute("value", waterResName1);
			element2.setAttribute("readonly", "true");
			cell2.appendChild(element2);

			var cell22 = row.insertCell(2);
			var element22 = document.createElement("input");
			element22.type = "text";
			element22.setAttribute("class", "input_w");
			element22.setAttribute("style", "text-align: right;");
			element22.name = "txtbox2";
			element22.setAttribute("value", govcnt1);
			element22.setAttribute("size", 20);
			element22.setAttribute("readonly", "true");
			cell22.appendChild(element22);

			var cell3 = row.insertCell(3);
			var element3 = document.createElement("input");
			element3.type = "text";
			element3.setAttribute("class", "input_w");
			element3.setAttribute("style", "text-align: right;");
			element3.name = "txtbox";
			element3.setAttribute("value", prvcnt1);
			element3.setAttribute("size", 20);
			element3.setAttribute("readonly", "true");

			cell3.appendChild(element3);
			$("#waterResId").val($("#waterResId option:first").val());
			$("#countGovt").val("");
			$("#countPrivate").val("");
		}
	}
}

function addWaterResGovt(tableID, waterResId, govcnt) {

	$("#countGovt").removeClass('heighfield');
	$("#waterResId").removeClass('heighfield');

	var id1 = document.getElementById(waterResId).value;
	var index = id1.lastIndexOf("-");
	var lenth = id1.length;
	var waterResId1 = id1.substring(0, index);
	var waterResName1 = id1.substring(index + 1, lenth);

	var govcnt1 = document.getElementById(govcnt).value;

	// alert(id1);

	if (id1 == 0) {

		alert("कृपया जल संसाधन चयन करें |");
		// $("#countGovt").val("");
		// $("#countPrivate").val("");

		// $("#countGovt").attr('class', 'input_w1 heighfield');
		// $("#countPrivate").attr('class', 'input_w1 heighfield');
		return false;
	}
	if (govcnt1 == "") {

		alert("कृपया शासकीय संख्या (जल संसाधन) दर्ज करें |");
		$("#countGovt").val("");

		$("#countGovt").attr('class', 'input_w1 heighfield');

		return false;

	}

	/*
	 * var table = document.getElementById(tableID); for ( var r = 0, n =
	 * table.rows.length; r < n; r++) { for ( var c = 0, m =
	 * table.rows[r].cells.length; c < m; c++) { val =
	 * table.rows[r].cells[c].innerHTML;
	 * 
	 * if (val) { if (val.indexOf(waterResId1) != -1) { var spanTreeResource =
	 * document .getElementById("spanTreeResource");
	 * spanTreeResource.style.display = "inline"; errorMsg = "आप तालिका में
	 * डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं.";
	 * document.getElementById("spanTreeResource").innerHTML = errorMsg;
	 * alert("आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं.");
	 * return false; } } } }
	 */

	if (IsDuplicateRow(tableID, 0, waterResId1) != true) {
		alert("आप सिचाई साधन में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");
		return false;
	}

	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	cell1.setAttribute("style", "text-align: center;");
	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.name = "chkbox[]";
	element1.setAttribute('value', waterResId1);

	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	cell2.setAttribute("style", "text-align: left;");
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.setAttribute("class", "input_w");
	element2.name = "txtbox1";
	element2.setAttribute("value", waterResName1);
	element2.setAttribute("size", 30);
	element2.setAttribute('type', 'hidden');
	element2.setAttribute("readonly", "true");
	cell2.appendChild(element2);

	var cell2 = row.insertCell(1);
	cell2.setAttribute("style", "text-align: left;");
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.setAttribute("class", "input_w");
	element2.name = "txtbox1";
	element2.setAttribute("value", waterResName1);
	element2.setAttribute("readonly", "true");
	cell2.appendChild(element2);

	var cell22 = row.insertCell(2);
	cell22.setAttribute("style", "text-align: left;");
	var element22 = document.createElement("input");
	element22.type = "text";
	element22.setAttribute("class", "input_w");
	element22.name = "txtbox2";
	element22.setAttribute("value", govcnt1);
	element22.setAttribute("style", "text-align: right;");
	element22.setAttribute("size", 20);
	element22.setAttribute("readonly", "true");
	cell22.appendChild(element22);

	$("#waterResId").val($("#waterResId option:first").val());
	$("#countGovt").val("");

}
function checkKhasraStatusPatwari(url, param) {
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				var successCode = xml.responseText;
				if (successCode == 501) {

					// alert("Khasra Id Already in process");

					alert("खसरा संख्या पहले से ही प्रक्रिया में |");

				}

			} else {
				alert("An error has occured making the request");
			}

			// remove_popup();
		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(param);
}

function addTreeOwnership(tableID, treeResId, treeCount, treeType) {

	$("#treeCont").removeClass('heighfield');
	$("#treeResId").removeClass('heighfield');
	$("#treeTypeResId").removeClass('heighfield');

	var isExist = document.getElementById("isExist").value;

	// alert(isExist);

	var treeType = document.getElementById(treeType).value;

	// alert(treeType);

	var treeTypeVal = treeType.split("-")[1];

	var id1 = document.getElementById(treeResId).value;

	var id2 = id1.split("-")[1];
	var id3 = id1.split("-")[0];

	var treeCount = document.getElementById(treeCount).value;

	// alert("--treeCount--"+treeCount);

	// alert("----"+treeTypeVal);
	// var index = id1.lastIndexOf("-");
	// var lenth = id1.length;

	/*
	 * var id2 = document.getElementById(treeOwnershipResId).value; var index1 =
	 * id2.lastIndexOf("-"); var lenth1 = id2.length;
	 */
	// var treeId1 = id1.substring(0, index);
	// var treeName1 = id1.substring(index + 1, lenth);
	var val;
	var treeName1 = null;
	var index = id1.split("-")[0];

	var lenth = id1.length;
	var treeId1 = id1.split("-")[0];
	var soilTypeIdArray = new Array();

	soilTypeIdArray = id1.split("-");

	if (soilTypeIdArray.length == 3) {
		treeName1 = id1.split("-")[1] + "-" + id1.split("-")[2];
	}

	if (soilTypeIdArray.length == 2) {
		treeName1 = id1.split("-")[1];
	}
	// alert("treeName1"+treeName1);
	// alert("treeId1"+treeId1);
	/*
	 * var ownershipId1 = id2.substring(0, index1); var ownershipDesc1 =
	 * id2.substring(index1 + 1, lenth1 - 1);
	 */
	// var treeCount = document.getElementById(treeCount).value;
	// alert(treeCount+"-------");
	// var validTreeCount = validateIntegerTree(treeCount);
	// if (validTreeCount != 0) {
	var table = document.getElementById(tableID);

	// alert("kfsdfjjd");

	// alert("--treeTypeVal--"+treeTypeVal);
	// alert("--id2--"+id2);

	if (treeType == 0) {
		/*
		 * var spanTreeResource = document.getElementById("spanTreeResource");
		 * spanTreeResource.style.display = "inline"; errorMsg = "ट्री विवरण
		 * कॉम्बो से चयन करें.";
		 * document.getElementById("spanTreeResource").innerHTML = errorMsg;
		 */

		// alert("44444444444444");
		alert("कृपया पेड़ प्रकार चयन करें ।");

		// $("#treeTypeResId").attr('class', 'select_w1, heighfield');
		return false;

	}
	if (id3 == 0) {
		/*
		 * var spanTreeResource = document.getElementById("spanTreeResource");
		 * spanTreeResource.style.display = "inline"; errorMsg = "ट्री विवरण
		 * कॉम्बो से चयन करें.";
		 * document.getElementById("spanTreeResource").innerHTML = errorMsg;
		 */
		// alert("56546546546");
		alert("कृपया पेड़ विवरण चयन करें ।");
		// $("#treeResId").attr('class', 'select_w1, heighfield');
		return false;

	}

	/*
	 * if (id2 == 0) { var spanTreeResourceO =
	 * document.getElementById("spanTreeResourceO");
	 * spanTreeResourceO.style.display = "inline"; errorMsg = "ट्री स्वामित्व
	 * कॉम्बो से चयन करें.";
	 * document.getElementById("spanTreeResourceO").innerHTML = errorMsg; return
	 * false; }
	 */if (treeCount == "") {
		/*
		 * var spanTreeResourceC = document.getElementById("spanTreeResourceC");
		 * spanTreeResourceC.style.display = "inline"; errorMsg = "कुल ट्री गणना
		 * खाली नहीं हो सकता.";
		 * document.getElementById("spanTreeResourceC").innerHTML = errorMsg;
		 */
		// alert("कुल ट्री गणना खाली नहीं हो सकता |");
		alert("कृपया पेड़ संख्या दर्ज करें ।");

		$("#treeCount").attr('class', 'input_w1 heighfield');
		return false;

	}
	if (treeCount == 0 && treeCount <= 0) {
		/*
		 * var spanTreeResourceC = document.getElementById("spanTreeResourceC");
		 * spanTreeResourceC.style.display = "inline"; errorMsg = "पेड़ गिनती 0
		 * से कम न 0 से बराबरी नहीं कर सकते.";
		 * document.getElementById("spanTreeResourceC").innerHTML = errorMsg;
		 */

		alert("पेड़ संख्या 1 से कम दर्ज नहीं कर सकते |");
		$("#treeCount").attr('class', 'input_w1 heighfield');
		return false;

	}

	var validTreeCount = validateIntegerTree(treeCount);

	if (validTreeCount != 0) {
		for ( var r = 0, n = table.rows.length; r < n; r++) {
			for ( var c = 0, m = table.rows[r].cells.length; c < m; c++) {
				val = table.rows[r].cells[c].innerHTML;

				if (val) {
					if (val.indexOf(treeId1) != -1) {
						/*
						 * var spanTreeResource = document
						 * .getElementById("spanTreeResource");
						 * spanTreeResource.style.display = "inline"; errorMsg =
						 * "आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश
						 * कर रहे हैं.";
						 * document.getElementById("spanTreeResource").innerHTML =
						 * errorMsg;
						 */
						alert("आप पेड़ विवरण में डुप्लिकेट रिकॉर्ड नहीं जोड़ सकते |");
						return false;
					}

				}
			}
		}

		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		var row = table.insertRow(rowCount);

		var cell1 = row.insertCell(0);
		cell1.setAttribute("style", "text-align: left;");
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name = "chkbox[]";
		element1.setAttribute('value', treeId1);
		cell1.appendChild(element1);

		var cell2 = row.insertCell(1);
		// cell2.innerHTML = rowCount + 1;
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.setAttribute("class", "input_w");
		element2.name = "txtbox1";
		// element2.setAttribute("value", treeName1);
		element2.setAttribute("value", treeTypeVal);
		// element2.setAttribute("size", 30);
		// element2.setAttribute('type', 'hidden');
		element2.setAttribute("readonly", "true");
		cell2.appendChild(element2);

		var cell21 = row.insertCell(2);
		// cell2.innerHTML = rowCount + 1;
		var element21 = document.createElement("input");
		element21.type = "text";
		element21.setAttribute("class", "input_w");
		element21.setAttribute("style", "text-align: left;");
		element21.name = "txtbox2";
		element21.setAttribute("value", treeName1);
		// element21.setAttribute("value", treeTypeVal);
		element21.setAttribute("size", 20);
		// element2.setAttribute('type', 'hidden');
		element21.setAttribute("readonly", "true");
		cell21.appendChild(element21);

		var cell22 = row.insertCell(3);
		// cell2.innerHTML = rowCount + 1;
		var element22 = document.createElement("input");
		element22.type = "text";
		element22.setAttribute("class", "input_w");
		element22.setAttribute("style", "text-align: right;");
		element22.name = "txtbox2";
		element22.setAttribute("value", validTreeCount);
		element22.setAttribute("size", 20);
		// element2.setAttribute('type', 'hidden');
		element22.setAttribute("readonly", "true");
		cell22.appendChild(element22);

		if (isExist > 0) {

			var cell33 = row.insertCell(4);
			// cell33.innerHTML = rowCount + 1;
			var element33 = document.createElement("input");
			element33.type = "text";
			element33.setAttribute("class", "input_w");
			element33.setAttribute("style", "text-align: right;");
			element33.name = "txtbox4";
			element33.setAttribute("value", "NoData");
			element33.setAttribute("size", 20);
			element33.setAttribute('type', 'hidden');
			element33.setAttribute("readonly", "true");
			cell33.appendChild(element33);
		}

		// cell33 = row.insertCell(4);

		// cell2.innerHTML = id1;

		/*
		 * var cell3 = row.insertCell(3); var element3 =
		 * document.createElement("input"); element3.type = "text";
		 * element3.name = "txtbox"; element3.setAttribute("value", treeCount);
		 * element3.setAttribute("size", 20); // cell3.element3.innerHTML =
		 * 'pramoj' element3.setAttribute("readonly", "true");
		 * cell3.appendChild(element3);
		 */
		/*
		 * var cell4 = row.insertCell(4); var element4 =
		 * document.createElement("input"); element4.type = "text";
		 * element4.name = "txtbox"; element4.setAttribute("value", treeCount);
		 * element4.setAttribute("size", 20); // cell3.element3.innerHTML =
		 * 'pramoj' element4.setAttribute("readonly", "true");
		 * 
		 * cell4.appendChild(element4);
		 */
	} else {
		$("#treeCount").val("");
		$("#treeCount").attr('class', 'input_w1 heighfield');
		$("#treeResId").attr('class', 'input_w1 heighfield');
		$("#treeTypeResId").attr('class', 'input_w1 heighfield');

	}
}
function getElementValue(innerHTML) {
	var elementvalue = "";
	var text = innerHTML.toLowerCase();
	var elementIndex = text.indexOf("value=");
	if (elementIndex != -1) {
		var start = text.indexOf('"', elementIndex + 1);
		var stop = text.indexOf('"', start + 1);
		elementvalue = text.slice(start + 1, stop)
	}
	return elementvalue;
}

function getElementId(innerHTML) {
	var elementId = "";
	var text = innerHTML.toLowerCase();
	var elementIndex = text.indexOf("id=");
	if (elementIndex != -1) {
		var start = text.indexOf('"', elementIndex + 1);
		var stop = text.indexOf('"', start + 1);
		elementId = text.slice(start + 1, stop)
	}
	return elementId;
}

function addRowOne(tableID, id, sinchitArea, asinchitArea, doubleCrop) {
	var id1 = document.getElementById(id).value;
	var index = id1.lastIndexOf("-");
	var lenth = id1.length;
	var landcode = id1.substring(0, index);
	var landName = id1.substring(index + 1, lenth);
	// alert("sinchitArea::::"+sinchitArea);
	var sinchit = document.getElementById(sinchitArea).value;
	// alert("sinchit:::"+sinchit);
	var asinchit = document.getElementById(asinchitArea).value;
	var doubleCropArea = document.getElementById(doubleCrop).value;

	var val;
	if (id1 == 0) {
		var spanCropGrid = document.getElementById("spanCropGrid");
		spanCropGrid.style.display = "inline";
		errorMsg = "कॉम्बो सूची में से चयन करें |";
		document.getElementById("spanCropGrid").innerHTML = errorMsg;
		return false;

	}

	var table = document.getElementById(tableID);

	for ( var r = 0, n = table.rows.length; r < n; r++) {
		for ( var c = 0, m = table.rows[r].cells.length; c < m; c++) {
			val = table.rows[r].cells[c].innerHTML;

			if (val) {
				if (val.indexOf(landcode) != -1) {
					var spanCropGrid = document.getElementById("spanCropGrid");
					spanCropGrid.style.display = "inline";
					errorMsg = "आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं |";
					document.getElementById("spanCropGrid").innerHTML = errorMsg;
					return false;
				}

			}
		}
	}

	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;

	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.name = "chkbox[]";
	element1.setAttribute("size", 20);
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	// cell2.innerHTML = rowCount + 1;
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "txtbox1";
	element2.setAttribute("value", landcode);
	// element2.setAttribute("size", 30);
	// element2.setAttribute('type', 'hidden');
	element2.setAttribute("readonly", "true");
	element2.setAttribute("size", 10);
	cell2.appendChild(element2);

	var cell22 = row.insertCell(2);
	// cell2.innerHTML = rowCount + 1;
	var element22 = document.createElement("input");
	element22.type = "text";
	element22.name = "txtbox2";
	element22.setAttribute("value", landName);
	element22.setAttribute("size", 10);
	// element2.setAttribute('type', 'hidden');
	element22.setAttribute("readonly", "true");
	cell22.appendChild(element22);

	// cell2.innerHTML = id1;
	var cell3 = row.insertCell(3);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "txtbox";
	element3.setAttribute("value", sinchit);
	element3.setAttribute("size", 10);
	// cell3.element3.innerHTML = 'pramoj'
	element3.setAttribute("readonly", "true");
	cell3.appendChild(element3);

	var cell4 = row.insertCell(4);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "txtbox";
	element4.setAttribute("value", asinchit);
	element4.setAttribute("size", 10);
	// cell3.element3.innerHTML = 'pramoj'
	element4.setAttribute("readonly", "true");

	cell4.appendChild(element4);

	var cell5 = row.insertCell(5);
	var element5 = document.createElement("input");
	element5.type = "text";
	element5.name = "txtbox";
	element5.setAttribute("value", doubleCropArea);
	element5.setAttribute("size", 10);
	// cell3.element3.innerHTML = 'pramoj'
	element5.setAttribute("readonly", "true");

	cell5.appendChild(element5);

	var irrigArea = new Number(document.getElementById("irrigArea").value);
	var unIrrigArea = new Number(document.getElementById("unIrrigArea").value);
	var doubleCropArea = new Number(
			document.getElementById("doubleCropArea").value);

	var totalSinchit = new Number();
	var totalAsinchit = new Number();
	var totalDoubleCropArea = new Number();

	$('#dataTable input[type="checkbox"]:not(:checked)').each(
			function() {
				var $row = $(this).parents('tr');
				totalSinchit = totalSinchit
						+ new Number($row.find('td:eq(3) input').val());
				totalAsinchit = totalAsinchit
						+ new Number($row.find('td:eq(4) input').val());
				totalDoubleCropArea = totalDoubleCropArea
						+ new Number($row.find('td:eq(5) input').val());
			});

	totalSinchit = irrigArea - totalSinchit;
	totalAsinchit = unIrrigArea - totalAsinchit;
	totalDoubleCropArea = doubleCropArea - totalDoubleCropArea;

	document.getElementById("sinchitAreaRem").value = parseFloat(totalSinchit)
			.toFixed(3);
	document.getElementById("asinchitAreaRem").value = parseFloat(totalAsinchit)
			.toFixed(3);
	;
	document.getElementById("doubleCropRem").value = parseFloat(
			totalDoubleCropArea).toFixed(3);

	document.getElementById(sinchitArea).value = "";
	document.getElementById(asinchitArea).value = "";
	document.getElementById(doubleCrop).value = "";

}

function addRowOneGeneral(tableID, soilType, orderNo, orderBy, orderDate,
		orderRemarks, todaydateOne) {
	$("#orderNo").removeClass('heighfield');
	$("#orderBy").removeClass('heighfield');
	$("#orderDate").removeClass('heighfield');
	$("#orderRemarks").removeClass('heighfield');
	$("#soilType").removeClass('heighfield');

	// if (validateOrderDetails()) {
	var soilTypeId = document.getElementById(soilType).value;
	var orderNoVal = document.getElementById(orderNo).value;
	var orderByVal = document.getElementById(orderBy).value;

	var orderRemarksVal = document.getElementById(orderRemarks).value;

	var orderDateVal = document.getElementById(orderDate).value;
	/*
	 * var today =document.getElementById(todaydateOne).value; var date_to_authd =
	 * new Date(orderDateVal); var authtimeinmilisec = today -
	 * date_to_authd.getTime();
	 * 
	 * 
	 * if (authtimeinmilisec <= 0) { alert("प्राधिकृत तारीख भविष्य की तारीख नहीं
	 * होनी चाहिए."); return false; }
	 */

	var val;
	var landName = null;
	var index = soilTypeId.split("-")[0];

	var lenth = soilTypeId.length;
	var landcode = soilTypeId.split("-")[0];
	var soilTypeIdArray = new Array();

	soilTypeIdArray = soilTypeId.split("-");

	if (soilTypeIdArray.length == 3) {
		landName = soilTypeId.split("-")[1] + "-" + soilTypeId.split("-")[2];
	}

	if (soilTypeIdArray.length == 2) {
		landName = soilTypeId.split("-")[1];
	}

	if (soilTypeId == 0) {
		/*
		 * var spanGenInfoGrid = document.getElementById("spanGenInfoGrid");
		 * spanGenInfoGrid.style.display = "inline"; errorMsg = "कॉम्बो सूची में
		 * से चयन करें."; document.getElementById("spanGenInfoGrid").innerHTML =
		 * errorMsg;
		 */
		// alert("कॉम्बो सूची में से चयन करें |");
		alert("कृपया भूमि प्रकार चयन करें |");

		$("#soilType").attr('class', 'heighfield select_w1');
		return false;

	} else if (validateOrderDetails()) {

		var table = document.getElementById(tableID);

		for ( var r = 0, n = table.rows.length; r < n; r++) {
			for ( var c = 0, m = table.rows[r].cells.length; c < m; c++) {
				val = table.rows[r].cells[c].innerHTML;
				if (val) {
					if (val.indexOf(landName) != -1) {
						/*
						 * var spanGenInfoGrid =
						 * document.getElementById("spanGenInfoGrid");
						 * spanGenInfoGrid.style.display = "inline"; errorMsg =
						 * "आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश
						 * कर रहे हैं.";
						 * document.getElementById("spanGenInfoGrid").innerHTML =
						 * errorMsg;
						 */
						alert("एक भूमि के प्रकार को दो बार जोड़ा नहीं जा सकता |");
						return false;
					}
				}
			}
		}

		var rowCount = table.rows.length;

		var row = table.insertRow(rowCount);
		var cell1 = row.insertCell(0);
		cell1.setAttribute("align", "left");
		var element1 = document.createElement("input");
		/* element1.setAttribute("style", "text-align: left;"); */

		element1.type = "checkbox";
		element1.name = "chkbox[]";
		/*
		 * element1.setAttribute("size", 20);
		 */element1.setAttribute("value", landcode);

		cell1.appendChild(element1);

		var cell2 = row.insertCell(1);
		cell2.setAttribute("align", "left");
		var element2 = document.createElement("input");
		element2.type = "text";
		element2.setAttribute("class", "input_w");
		element2.name = "txtbox1";
		element2.setAttribute("value", landName);
		element2.setAttribute("readonly", "true");
		element2.setAttribute("size", 10);
		cell2.appendChild(element2);

		var cell22 = row.insertCell(2);
		cell22.setAttribute("align", "left");
		var element22 = document.createElement("input");
		element22.type = "text";
		element22.setAttribute("class", "input_w");
		element22.name = "txtbox2";
		element22.setAttribute("value", orderNoVal);
		element22.setAttribute("size", 10);
		element22.setAttribute("readonly", "true");
		cell22.appendChild(element22);

		var cell3 = row.insertCell(3);
		cell3.setAttribute("align", "left");
		var element3 = document.createElement("input");
		element3.type = "text";
		element3.setAttribute("class", "input_w");
		element3.name = "txtbox";
		element3.setAttribute("value", orderByVal);
		element3.setAttribute("size", 10);
		element3.setAttribute("readonly", "true");
		cell3.appendChild(element3);

		var cell4 = row.insertCell(4);
		cell4.setAttribute("align", "left");
		var element4 = document.createElement("input");
		element4.type = "text";
		element4.setAttribute("class", "input_w");
		element4.name = "txtbox";
		element4.setAttribute("value", orderDateVal);
		element4.setAttribute("size", 10);
		element4.setAttribute("readonly", "true");

		cell4.appendChild(element4);

		var cell5 = row.insertCell(5);
		cell5.setAttribute("align", "left");
		var element5 = document.createElement("input");
		element5.type = "text";
		element5.setAttribute("class", "input_w");
		element5.name = "txtbox";
		element5.setAttribute("value", orderRemarksVal);
		element5.setAttribute("size", 10);
		element5.setAttribute("readonly", "true");

		cell5.appendChild(element5);

		$("#soilType").val($("#soilType option:first").val());
		$("#orderNo").val("");
		$("#orderBy").val("");
		$("#orderDate").val("");
		$("#orderRemarks").val("");
		$("#soilType").val("");
		$("#prvSlctdDt").val("");
	}
}

var cropListIndex = 1;
function addRowOneUpdate(tableID, id, sinchitArea, asinchitArea, doubleCrop,

waterResourceId, sourceOfIrrigationId) {
	var remainingSudhBya = parseFloat($("#remainingSudhBya").val());
	// var sudhBya = parseFloat($("#sudhBya").val());
	var sudhBya = parseFloat($("#txtSudhBoya").val());

	var id1 = document.getElementById(id).value;
	var index = id1.lastIndexOf("-");
	var lenth = id1.length;
	var landcode = id1.substring(0, index);
	var landName = id1.substring(index + 1, lenth);

	var seasonId = $("#seasonId").val();
	var cropGroupId = $('#cropGroupId').val();

	var id2 = document.getElementById(waterResourceId).value;
	var index1 = id2.lastIndexOf("-");
	var lenth2 = id2.length;
	var waterResourceId = id2.substring(0, index1);
	var waterResourceName = id2.substring(index1 + 1, lenth2);

	var id3 = document.getElementById(sourceOfIrrigationId).value;
	var index2 = id3.lastIndexOf("-");
	var lenth3 = id3.length;
	var sourceOfIrrigationId = id3.substring(0, index2);
	var sourceOfIrrigationName = id3.substring(index2 + 1, lenth3);

	var sinchit = document.getElementById(sinchitArea).value;
	if (sinchit != "") {
		sinchit = parseFloat(sinchit).toFixed(3);
	}
	if (sinchit == "") {
		sinchit = parseFloat(0).toFixed(3);
	}
	var asinchit = document.getElementById(asinchitArea).value;
	if (asinchit != "") {
		asinchit = parseFloat(asinchit).toFixed(3);
	}
	if (asinchit == "") {
		asinchit = parseFloat(0).toFixed(3);
	}
	if (seasonId == 0) {
		alert("मौसमी फसल चुने |");
		return false;
	}

	if (cropGroupId == 0) {
		alert("फसल समूह चुने |");
		return false;

	}

	if (cropId == 0) {
		alert("कृपया फसल चयन करें |");
	}

	var val;
	if (id1 == 0) {
		alert("कॉम्बो सूची में से चयन करें |");
		return false;

	}

	var crpSeasonChkArray = new Array();
	$("div.cropCheck :input").each(function() {
		crpSeasonChkArray.push($(this).attr('id'));
	});

	if (crpSeasonChkArray.length > 0) {
		for ( var i = 0; i < crpSeasonChkArray.length; i++) {
			var ssnCrpId = "cropName" + crpSeasonChkArray[i];
			var ssnDupCrop = $("#" + ssnCrpId).attr('name');
			if (ssnDupCrop == seasonId.split("-")[1]
					+ cropGroupId.split("-")[1] + landName) {
				alert("यह फसल प्रकार पहले से मौजूद है |");
				return false;
			}
		}
	}

	var totalCrop = Number($("#totalCropList").val());

	if (totalCrop != 0) {
		cropListIndex = totalCrop + 1;
		$("#totalCropList").val(cropListIndex);
	}

	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var sId = seasonId.split("-")[0];
	var cId = cropGroupId.split("-")[0];
	var row = table.insertRow(rowCount);

	var trId = "cropRow" + cropListIndex;
	row.setAttribute('id', trId);

	var iDiv = document.createElement('div');
	iDiv.className = 'cropCheck';
	var cell1 = row.insertCell(0);
	/* cell1.setAttribute("style", "text-align: left;"); */
	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.setAttribute("id", cropListIndex);
	/* element1.setAttribute("class", "txtLabel"); */
	element1.name = "chkbox[]";
	element1.setAttribute("value", sId + "@" + cId + "@" + landcode + "@"
			+ waterResourceId + "@" + sourceOfIrrigationId);
	element1.setAttribute("size", 20);
	iDiv.appendChild(element1);
	cell1.appendChild(iDiv);

	var cell2 = row.insertCell(1);

	var element2 = document.createElement("input");
	element2.type = "text";
	element2.setAttribute("class", "input_w");
	element2.name = "seasonCrop" + cropListIndex;
	element2.setAttribute("id", "seasonName" + cropListIndex);
	element2.setAttribute("value", seasonId.split("-")[1]);
	element2.setAttribute("readonly", "true");
	element2.setAttribute("size", 10);
	cell2.appendChild(element2);

	var cell22 = row.insertCell(2);
	var element22 = document.createElement("input");
	element22.type = "text";
	element22.setAttribute("class", "input_w");
	element22.name = "txtbox2";
	element22.setAttribute("id", "cropGroupName" + cropListIndex);
	element22.setAttribute("value", cropGroupId.split("-")[1]);
	element22.setAttribute("size", 10);
	element22.setAttribute("readonly", "true");
	cell22.appendChild(element22);

	var cell3 = row.insertCell(3);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.setAttribute("class", "input_w");
	element3.name = seasonId.split("-")[1] + cropGroupId.split("-")[1]
			+ landName;
	element3.setAttribute("id", "cropName" + cropListIndex);
	element3.setAttribute("value", landName);
	element3.setAttribute("size", 10);
	element3.setAttribute("readonly", "true");
	cell3.appendChild(element3);

	var cell4 = row.insertCell(4);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.setAttribute("style", "text-align: right;");
	element4.setAttribute("class", "input_w");

	element4.name = "txtbox";
	element4.setAttribute("id", "dataSinchitArea" + cropListIndex);
	element4.setAttribute("rel", "dataSinchitArea");
	element4.setAttribute("size", 10);
	element4.setAttribute("value", sinchit);
	element4.setAttribute("readonly", "true");
	cell4.appendChild(element4);

	var cell5 = row.insertCell(5);
	var element5 = document.createElement("input");
	element5.type = "text";
	element5.setAttribute("style", "text-align: right;");
	element5.setAttribute("class", "input_w");
	element5.name = "txtbox";
	element5.setAttribute("id", "dataAsinchitArea" + cropListIndex);
	element5.setAttribute("rel", "dataAsinchitArea");
	if (sourceOfIrrigationName == 0)
		element5.setAttribute("value", "");
	element5.setAttribute("value", asinchit);
	element5.setAttribute("size", 10);
	element5.setAttribute("readonly", "true");
	cell5.appendChild(element5);

	var cell6 = row.insertCell(6);
	var element6 = document.createElement("input");
	element6.type = "text";
	element6.setAttribute("class", "input_w");
	element6.name = "txtbox";
	if (waterResourceName == 0) {
		element6.setAttribute("value", "");
	}
	if (waterResourceName != 0) {
		element6.setAttribute("value", waterResourceName);
	}

	element6.setAttribute("size", 10);
	element6.setAttribute("id", "waterResourceName" + cropListIndex);
	element6.setAttribute("readonly", "true");
	cell6.appendChild(element6);

	var cell7 = row.insertCell(7);
	var element7 = document.createElement("input");
	element7.type = "text";
	element7.setAttribute("class", "input_w");
	element7.name = "txtbox";
	if (sourceOfIrrigationName == 0) {
		element7.setAttribute("value", "");
	}
	if (sourceOfIrrigationName != 0) {
		element7.setAttribute("value", sourceOfIrrigationName);
	}
	element7.setAttribute("size", 10);
	element7.setAttribute("id", "sourceOfIrrigationName" + cropListIndex);
	element7.setAttribute("readonly", "true");
	cell7.appendChild(element7);

	if (sinchit != 0.000 && asinchit == 0.000) {
		// var irrigArea = $("#irrigArea").val();
		var irrigArea = $("#irrigArea").val();

		if (irrigArea == "") {
			// alert("111");
			$("#irrigArea").val(sinchit);
		}
		if (irrigArea != "") {
			// alert("2222");

			// irrigArea = (irrigArea);
			// alert(irrigArea);
			// alert(sinchit);
			// var one=parseFloat(sinchit)+parseFloat(irrigArea);
			// alert(one);
			$("#irrigArea").val(
					(parseFloat(sinchit) + parseFloat(irrigArea)).toFixed(3));
		}
		remainingSudhBya = parseFloat(remainingSudhBya + parseFloat(sinchit))
				.toFixed(3);
		if (remainingSudhBya > sudhBya) {

			$("#doubleCropArea").val(
					parseFloat(remainingSudhBya - sudhBya).toFixed(3));

			$("#divDoublecrop").text(
					parseFloat(remainingSudhBya - sudhBya).toFixed(3));

		}
		if (remainingSudhBya <= sudhBya) {
			$("#doubleCropArea").val(parseFloat(0).toFixed(3));
			$("#divDoublecrop").text(parseFloat(0).toFixed(3));

		}
		$("#remainingSudhBya").val(remainingSudhBya);
	}

	if (asinchit != 0.000 && sinchit == 0.000) {
		var unIrrigArea = $("#unIrrigArea").val();
		if (unIrrigArea == "") {
			$("#unIrrigArea").val(asinchit);
		}
		if (unIrrigArea != "") {
			// unIrrigArea = Number(unIrrigArea);
			$("#unIrrigArea")
					.val(
							(parseFloat(asinchit) + parseFloat(unIrrigArea))
									.toFixed(3));
		}
		remainingSudhBya = parseFloat(remainingSudhBya + parseFloat(asinchit))
				.toFixed(3);
		if (remainingSudhBya > sudhBya) {
			$("#doubleCropArea").val(
					parseFloat(remainingSudhBya - sudhBya).toFixed(3));

			$("#divDoublecrop").text(
					parseFloat(remainingSudhBya - sudhBya).toFixed(3));

		}
		if (remainingSudhBya <= sudhBya) {
			$("#doubleCropArea").val(parseFloat(0).toFixed(3));

			$("#divDoublecrop").text(parseFloat(0).toFixed(3));

		}
		$("#remainingSudhBya").val(remainingSudhBya);
	}

	var sinchitArea = $("#sinchitArea").val();
	var asinchitArea = $("#asinchitArea").val();

	var parentSinchit = parseFloat($("#parentSinchit").val()).toFixed(3);
	var parentAsinchit = parseFloat($("#parentAsinchit").val()).toFixed(3);

	var txtSinchit = parseFloat($("#txtSinchit").val()).toFixed(3);
	var sinchitArea1 = parseFloat($("#sinchitAreaDivId").text()).toFixed(3);

	var sinchitAreaDivId = parseFloat("0.00").toFixed(3);
	var asinchitAreaDivId = parseFloat("0.00").toFixed(3);

	// alert("sinchitArea--->>"+sinchitArea);

	// alert("sinchitArea1--->>"+sinchitArea1);

	// alert("txtSinchit--->>"+txtSinchit);

	// alert("parentSinchit--->>"+parentSinchit);

	if (txtSinchit != parentSinchit) {

		// alert("sinchitAreaDivId--1->>"+sinchitAreaDivId);

		sinchitAreaDivId = txtSinchit + sinchitArea1;

	}

	if (sinchitArea != "") {
		sinchitAreaDivId = txtSinchit + sinchitArea1;

		var valueSinchit = (parseFloat(sinchitAreaDivId) + parseFloat(sinchitArea))
				.toFixed(3);

		// alert("---2222--"+valueSinchit);

		$("#sinchitAreaDivId").text(valueSinchit);

		$("#txtSinchit").val(valueSinchit);

	}

	var txtAsinchit = parseFloat($("#txtAsinchit").val()).toFixed(3);
	var asinchitArea1 = parseFloat($("#asinchitAreaDivId").text()).toFixed(3);
	if (txtAsinchit != parentAsinchit) {
		// alert("---2222-33333-"+asinchitAreaDivId);
		asinchitAreaDivId = txtAsinchit + asinchitArea1;
	}

	if (asinchitArea != "") {
		asinchitAreaDivId = txtAsinchit + asinchitArea1;

		var valueAsinchit = (parseFloat(asinchitAreaDivId) + parseFloat(asinchitArea))
				.toFixed(3);

		// alert("333333333"+valueAsinchit);

		$("#asinchitAreaDivId").text(valueAsinchit);
		$("#txtAsinchit").val(valueAsinchit);

	}

	cropListIndex++;
	$("#sinchitArea").val("");
	$("#asinchitArea").val("");
	$("#seasonId").val($("#seasonId option:first").val());
	$("#cropGroupId").val($("#cropGroupId option:first").val());
	$("#cropId").val($("#cropId option:first").val());
	$("#waterResourceId").val($("#waterResourceId option:first").val());
	$("#sourceOfIrrigationId").val(
			$("#sourceOfIrrigationId option:first").val());

	$("#cropGroupId").attr('disabled', true);
	$("#cropId").attr('disabled', true);
	$("#sinchitArea").attr('disabled', true);
	$("#asinchitArea").attr('disabled', true);
	$("#waterResourceId").attr('disabled', true);
	$("#sourceOfIrrigationId").attr('disabled', true);

}

function deleteRow(tableID) {

	/*
	 * if (hasChecked == false) {
	 * 
	 * alert("कृपया कम से कम एक चेक बॉक्स का चयन करें "); return false; }
	 */

	var table = document.getElementById(tableID);

	// var dataTableReqr = document.getElementById("dataTableReqr");

	var rowCount = table.rows.length;

	var numberOfChecked = $('input:checkbox:checked').length;
	var totalCheckboxes = $('input:checkbox').length;

	if (numberOfChecked == 0) {
		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें |");
		return false;
	}
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		// alert("rowCount---"+rowCount);

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			// alert("row---"+row);
			var chkbox = row.cells[0].childNodes[0];
			// alert("chkbox---"+chkbox);
			// alert("i---"+i);
			if (null != chkbox && true == chkbox.checked) {
				table.deleteRow(i);
				rowCount--;
				i--;
			}

		}

	} catch (e) {

	}
}
function saveWaterRes(sndTeh) {
	var waterResDtl = "";
	$('#irrigSrcTable input[type="checkbox"]:checked').each(
			function() {
				// alert("111");
				var $row = $(this).parents('tr');
				waterResDtl = waterResDtl + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(1) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val();
			});

	$('#irrigSrcTable input[type="checkbox"]:not(:checked)').each(
			function() {
				// alert("222");

				var $row = $(this).parents('tr');
				waterResDtl = waterResDtl + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(1) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val();
			});

	waterResDtl = waterResDtl.substring(1, waterResDtl.length);
	// alert(waterResDtl);
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}
	loadContent('saveWaterResource.do', 'waterResDtl=' + waterResDtl);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}
}

function saveTreeDetails(sndTeh) {
	var treeDtl = "";

	var isExist = document.getElementById("isExist").value;

	var msTreeResList = document.getElementById("msTreeResList").value;

	// alert(msTreeResList);
	// alert(isExist);

	var flag = 0;

	if (isExist > 0) {

		$('#dataTable1 input[type="checkbox"]:checked').each(function() {
			var $row = $(this).parents('tr');
			$row.find('td:eq(0) input').removeAttr('checked');

		});

		$('#dataTable1 input[type="checkbox"]:not(:checked)').each(
				function() {

					var $row = $(this).parents('tr');

					var treeId = $row.find('td:eq(0) input').val();
					var treeOwnershipId = $row.find('td:eq(1) input').val();
					var treeCount = $row.find('td:eq(3) input').val();

					var dataVal = $row.find('td:eq(4) input').val();

					if (dataVal == 'NoData') {

						treeDtl = treeDtl + "#"
								+ $row.find('td:eq(0) input').val() + "@"
								+ $row.find('td:eq(1) input').val() + "@"
								+ $row.find('td:eq(3) input').val();
					} else {
						/*
						 * if(dataVal=='') {
						 * 
						 * alert(dataVal); return false; }
						 */

						var msTreeRes = msTreeResList.split("#");

						for ( var i = 0; i < msTreeRes.length; i++) {

							var msTreeRes1 = msTreeRes[i].split("@");

							var treeId1 = msTreeRes1[0];
							var treeOwnershipId1 = msTreeRes1[1];
							var treeCount1 = msTreeRes1[2];

							if (treeId == treeId1 && treeCount != treeCount1
									&& dataVal == '') {

								flag = 1;
								/*
								 * $row.find('td:eq(4) input').attr('disabled',
								 * false);
								 */
								break;

								// $row.find('td:eq(4) input').attr('disabled',
								// false);

							}

						}

						treeDtl = treeDtl + "#"
								+ $row.find('td:eq(0) input').val() + "@"
								+ $row.find('td:eq(1) input').val() + "@"
								+ $row.find('td:eq(3) input').val() + "@"
								+ $row.find('td:eq(4) input').val();

						// alert("-----"+treeDtl);
					}

				});

	} else {

		$('#dataTable1 input[type="checkbox"]:not(:checked)').each(
				function() {
					var $row = $(this).parents('tr');
					treeDtl = treeDtl + "#" + $row.find('td:eq(0) input').val()
							+ "@" + $row.find('td:eq(1) input').val() + "@"
							+ $row.find('td:eq(3) input').val();
				});

		$('#dataTable1 input[type="checkbox"]:checked').each(
				function() {
					var $row = $(this).parents('tr');
					treeDtl = treeDtl + "#" + $row.find('td:eq(0) input').val()
							+ "@" + $row.find('td:eq(1) input').val() + "@"
							+ $row.find('td:eq(3) input').val();
				});

	}

	treeDtl = treeDtl.substring(1, treeDtl.length);

	// alert(treeDtl);

	/*
	 * if (treeDtl == ""){ var spanTreeResource =
	 * document.getElementById("spanTreeResource");
	 * spanTreeResource.style.display = "inline";
	 * document.getElementById("spanTreeResource").innerHTML = "कृपया एक रिकॉर्ड
	 * को जोड़ें।"; return false;
	 * callfnValidateMessage(document.getElementById('messageOne').value); }
	 */

	if (flag == 1) {
		alert("इमारती वृक्ष विवरण बदलने हेतु आदेश विवरण दर्ज करें |");
		return false;
	} else {
		if (sndTeh == 'sChk') {
			loader('adhyatanChakeriPatwari');
		}
		loadContent('saveTreeDetails.do', 'treeDtl=' + treeDtl + '&isExist='
				+ isExist);
		/*
		 * if (sndTeh == 'sChk') { remove_popup('adhyatanChakeriPatwari'); }
		 */

		return true;
	}

}

/*
 * function saveLandUsage(activityId) { }
 */
function saveLandUsage(sndTeh) {

	$('#tblNonAg input[type="checkbox"]:checked').each(function() {
		var $row = $(this).parents('tr');
		$row.find('td:eq(0) input').removeAttr('checked');

	});

	$('#tblBarren input[type="checkbox"]:checked').each(function() {
		var $row = $(this).parents('tr');
		$row.find('td:eq(0) input').removeAttr('checked');

	});

	var nonAgrDetails = "";
	$('#tblNonAg input[type="checkbox"]:not(:checked)').each(
			function() {
				var $row = $(this).parents('tr');
				// alert($row.find('td:eq(1) input').val());
				// alert($row.find('td:eq(3) input').val());

				nonAgrDetails = nonAgrDetails + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(3) input').val();
			});
	nonAgrDetails = nonAgrDetails.substring(1, nonAgrDetails.length);

	// alert(nonAgrDetails);

	var barenDetails = "";
	$('#tblBarren input[type="checkbox"]:not(:checked)').each(
			function() {
				var $row = $(this).parents('tr');
				// alert($row.find('td:eq(1) input').val());
				// alert($row.find('td:eq(3) input').val());

				barenDetails = barenDetails + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(3) input').val();
			});
	barenDetails = barenDetails.substring(1, barenDetails.length);

	var txtKhasraArea = $("#txtKhasraArea").val();
	var txtSinchit = $("#txtSinchit").val();
	var txtAsinchit = $("#txtAsinchit").val();
	var txtDoubleCrop = $("#doubleCropArea").val();

	var txtChragah = document.landusage.txtChragah.value;
	var txtVrakhsKunj = document.landusage.txtVrakhsKunj.value;

	var txtChaluPadti = document.landusage.txtChaluPadti.value;
	var txtKawilKasht = document.landusage.txtKawilKasht.value;
	var txtVraksRopan = document.landusage.txtVraksRopan.value;
	var txtPadti2To5 = document.landusage.txtPadti2To5.value;
	var txtBagicha = document.landusage.txtBagicha.value;
	var txtVan = document.landusage.txtVan.value;
	var txtPadti2To5YrNo = document.landusage.txtPadti2To5YrNo.value;
	var txtOthers = document.landusage.txtOthers.value;
	var txtSudhBoya = $("#txtSudhBoya").val();
	var txtPadtiGreaterthan5 = document.landusage.txtPadtiGreaterthan5.value;
	var txtFalodyan = document.landusage.txtFalodyan.value;
	var txtVivran = document.landusage.txtVivran.value;
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}
	loadContent('saveLandUtilization.do', 'txtChragah=' + txtChragah
			+ '&txtVrakhsKunj=' + txtVrakhsKunj + '&txtChaluPadti='
			+ txtChaluPadti + '&txtKawilKasht=' + txtKawilKasht
			+ '&txtVraksRopan=' + txtVraksRopan + '&txtPadti2To5='
			+ txtPadti2To5 + '&txtBagicha=' + txtBagicha + '&txtVan=' + txtVan
			+ '&txtPadti2To5YrNo=' + txtPadti2To5YrNo + '&txtOthers='
			+ txtOthers + '&txtSudhBoya=' + txtSudhBoya
			+ '&txtPadtiGreaterthan5=' + txtPadtiGreaterthan5 + '&txtFalodyan='
			+ txtFalodyan + '&txtVivran=' + txtVivran + '&txtSinchit='
			+ txtSinchit + '&txtAsinchit=' + txtAsinchit + '&txtDoubleCrop='
			+ txtDoubleCrop + '&txtKhasraArea=' + txtKhasraArea
			+ '&nonAgrDetails=' + nonAgrDetails + '&barenDetails='
			+ barenDetails);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}
}

function saveCrop(sndTeh) {

	var orderNoDsblChk = $("#orderNo").is('[disabled=disabled]');
	var orderByDsblChk = $("#orderBy").is('[disabled=disabled]');
	var orderDateDsblChk = $("#orderDate").is('[disabled=disabled]');
	var orderRemarksDsblChk = $("#orderRemarks").is('[disabled=disabled]');
	if (orderNoDsblChk == false && orderByDsblChk == false
			&& orderDateDsblChk == false && orderRemarksDsblChk == false) {
		if (validateOrderDetails()) {
			saveCropDetails();
		} else {
			$("#orderNo").attr('disabled', true);
			$("#orderBy").attr('disabled', true);
			$("#orderDate").attr('disabled', true);
			$("#orderRemarks").attr('disabled', true);
			$("#testChange").val($("#testChange option:first").val());

			$("#remainingSudhBya").val("");
			$("#sinchitArea").val("");
			$("#asinchitArea").val("");
			$("#cropId").val($("#cropId option:first").val());
			$("#waterResourceId").val($("#waterResourceId option:first").val());
			$("#sourceOfIrrigationId").val(
					$("#sourceOfIrrigationId option:first").val());
			$("#sinchitArea").attr('disabled', false);
			$("#asinchitArea").attr('disabled', false);
			$("#waterResourceId").attr('disabled', false);
			$("#sourceOfIrrigationId").attr('disabled', false);
		}
	}

	if (orderNoDsblChk == true && orderByDsblChk == true
			&& orderDateDsblChk == true && orderRemarksDsblChk == true) {
		saveCropDetails();
	}

}
function saveCropGeneral(sndTeh) {

	/*
	 * var orderNoDsblChk = $("#orderNo1").is('[disabled=disabled]'); var
	 * orderByDsblChk = $("#orderBy1").is('[disabled=disabled]'); var
	 * orderDateDsblChk = $("#orderDate1").is('[disabled=disabled]'); var
	 * orderRemarksDsblChk = $("#orderRemarks1").is('[disabled=disabled]'); if
	 * (orderNoDsblChk == false && orderByDsblChk == false && orderDateDsblChk ==
	 * false && orderRemarksDsblChk == false) { if (validateOrderDetailsOne()) {
	 */
	// alert("success");
	saveGeneralInfo(sndTeh);
	/*
	 * } else { $("#orderNo1").attr('disabled', true);
	 * $("#orderBy1").attr('disabled', true); $("#orderDate1").attr('disabled',
	 * true); $("#orderRemarks1").attr('disabled', true);
	 * $("#testChange").val($("#testChange option:first").val());
	 * 
	 * $("#remainingSudhBya").val(""); $("#sinchitArea").val("");
	 * $("#asinchitArea").val(""); $("#cropId").val($("#cropId
	 * option:first").val()); $("#waterResourceId").val($("#waterResourceId
	 * option:first").val()); $("#sourceOfIrrigationId").val(
	 * $("#sourceOfIrrigationId option:first").val());
	 * $("#sinchitArea").attr('disabled', false);
	 * $("#asinchitArea").attr('disabled', false);
	 * $("#waterResourceId").attr('disabled', false);
	 * $("#sourceOfIrrigationId").attr('disabled', false); } }
	 * 
	 * if (orderNoDsblChk == true && orderByDsblChk == true && orderDateDsblChk ==
	 * true && orderRemarksDsblChk == true) { saveGeneralInfo(); }
	 */

}

function saveCropDetails(sndTeh) {
	/* var idsOnCheckBox = ""; */
	/*
	 * var rowCount = $('#dataTable
	 * input[type="checkbox"]:not(:checked)').length; if(rowCount>0) {
	 */

	var cropDetails = "";

	$('#dataTable input[type="checkbox"]:checked').each(
			function() {
				var $row = $(this).parents('tr');

				cropDetails = cropDetails + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val() + "@"
						+ $row.find('td:eq(4) input').val() + "@"
						+ $row.find('td:eq(5) input').val() + "@"
						+ $row.find('td:eq(6) input').val() + "@"
						+ $row.find('td:eq(7) input').val();

			});

	$('#dataTable input[type="checkbox"]:not(:checked)').each(
			function() {
				var $row = $(this).parents('tr');

				cropDetails = cropDetails + "#"
						+ $row.find('td:eq(0) input').val() + "@"
						+ $row.find('td:eq(2) input').val() + "@"
						+ $row.find('td:eq(3) input').val() + "@"
						+ $row.find('td:eq(4) input').val() + "@"
						+ $row.find('td:eq(5) input').val() + "@"
						+ $row.find('td:eq(6) input').val() + "@"
						+ $row.find('td:eq(7) input').val();

			});

	cropDetails = cropDetails.substring(1, cropDetails.length);

	var irrigatedArea = $("#txtSinchit").val();
	// alert(irrigatedArea);

	var unIrrigatedArea = $("#txtAsinchit").val();
	// alert(unIrrigatedArea);
	var doubleCrop = $("#doubleCropArea").val();

	// alert(doubleCrop);

	var kulKhasraVal = $("#txtKhasraArea").val();
	var sudhBoyaVal = $("#txtSudhBoya").val();
	/*
	 * var orderNo = $("#orderNo").val(); var orderBy = $("#orderBy").val(); var
	 * orderDate = $("#orderDate").val(); var orderRemarks =
	 * $("#orderRemarks").val(); var
	 * orderDateCheck=document.getElementById("orderDate").disabled;
	 */
	var seasonId = document.cropFrom.seasonId.value;
	if (seasonId == "") {
		seasonId = null;
	}
	var cropGroupId = document.cropFrom.cropGroupId.value;

	if (cropGroupId == "") {
		cropGroupId = null;
	}
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}
	loadContent('saveCropUser.do', 'cropDetails=' + cropDetails
			+ '&kulKhasraVal=' + kulKhasraVal + '&sudhBoyaVal=' + sudhBoyaVal
			+ '&seasonId=' + seasonId + '&cropGroupId=' + cropGroupId
			+ '&doubleCrop=' + doubleCrop + '&irrigatedArea=' + irrigatedArea
			+ '&unIrrigatedArea=' + unIrrigatedArea);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}
	/*
	 * } else { alert("कृपया सेव के लिए तालिका में रिकॉर्ड जोड़ें . !"); }
	 */
}

function hideSpan(field) {
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
}

function showSpan(field) {
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "block";

}

// ///////////////end of patwari///////////////////////////////////

function showmessage(url) {
	document.form.action = url;
	document.form.submit();
}

function openNewWindow(url) {
	// alert("URL:"+url)
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=1200, height=700');
}

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

function loadData(url, div, params) {

	// alert(url);
	// alert(params);

	try {

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) { loader(); }
			 */
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(div).innerHTML = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById(div).innerHTML =
					// xml.responseText;

				} else {
					alert("An error has occured making the request");
				}

				// remove_popup();
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

function loadDataValue(url, div, params) {

	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		/*
		 * if (xml.readyState == 1) { loader(); }
		 */

		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById('smartCardNo').value = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById('smartCardNo').value =
				// xml.responseText;
			} else {
				alert("An error has occured making the request");
			}

			// remove_popup();
		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}
// loadDataValueApproval

function loadDataValueApproval(url, div, params) {
	var nextActivityValue = document.getElementById("nextActivityId").value;

	if (nextActivityValue == 0) {
		alert("कृप्या एक्टिविटी का चयन करें");
		return false;
	} else {

		try {
			var xml = new ajaxRequest();
			xml.onreadystatechange = function() {

				/*
				 * if(xml.readyState==1) { loader(); }
				 */

				if (xml.readyState == 4) {
					if (xml.status == 200
							|| window.location.href.indexOf("http") == -1) {

						if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
							alert("आपकी रिक्वेस्ट अनुमोदन के लिए भेज दी गयी है |");
							document.getElementById('sendApproval').disabled = true;
							document.getElementById("sendApproval").className = "appBtnsDisabled";
						} else {
							top.location.href = 'SessionExpired.do';
						}

						/*
						 * alert("आपकी रिक्वेस्ट अनुमोदन के लिए भेज दी गयी
						 * है!");
						 * document.getElementById('sendApproval').disabled =
						 * true;
						 * document.getElementById("sendApproval").className =
						 * "appBtnsDisabled";
						 */
						// document.getElementById('smartCardNo').value =
						// xml.responseText;
					} else {
						alert("An error has occured making the request");
					}

					// remove_popup();
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
}

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
	/*
	 * var content = "<div style='position:absolute;z-index:10;" +
	 * 
	 * "left:expression((this.offsetParent.clientWidth/2)-(this.clientWidth/2)+this.offsetParent.scrollLeft);" +
	 * 
	 * "top:expression((this.offsetParent.clientHeight/2)-(this.clientHeight/2)+this.offsetParent.scrollTop);" +
	 * "background:#FFFFFF; border-width:0px;border-color:#a5d8ed;
	 * border-style:solid'>"
	 * 
	 *  + "<Table cellspacing=0 cellpadding=0 border=0 width=100%>" + "<tr><td align=left valign=middle height=30>" + "
	 * <img src='images/ajax_loader_blue_128.gif' height='25' width='25'>" + "</td>" + "<td align=left valign=middle height=30>" + "
	 * <font color=red size=2> <b>&nbsp;कृपया प्रतीक्षा करें....</b></font>" + "</td>" + "</tr><Table></div>"
	 */;
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

	$('#dialog-overlay').fadeTo(400, 0.2);

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

// ///////////////////////////////////////////////////////// MP WEB GIS
// /////////////////////////////////////////////
function searchClrDetail() {
	// alert("VVVV");
	var clrId = document.getElementById("clrId").value;
	// alert("jdfgjdjg--"+clrId+"---"+clrId.length);
	if (clrId.length == 0) {
		alert("Please enter CLR no |");
		return false;
	} else {
		document.khasraCollectionform.action = "khasraDetailCollection.do";
		document.khasraCollectionform.submit();
		// loadContent('khasraDetailCollection.do', 'clrId=' + clrId);

	}

}
function searchKhasraDetail(chakri) {

	var transactionId = document.getElementById("transactionId").value;
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	var ownerId = "";
	var khasraId = "";
	var khasraFlag = document.getElementById('khasraLabelFlag').value;

	if (khasraFlag == 0) {

	} else {

		if (khasraFlag == 1) {

			ownerId = document.getElementById("ownerId").value;

			if (ownerId == 0) {

				document.getElementById('checkValidateFlag').value = "X";
			} else {

				document.getElementById('checkValidateFlag').value = "Y";
			}

		}

		else {

			khasraId = document.getElementById("khasraId").value;

			if (khasraId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

	}

	if (transactionId == 0) {

		var transactionError = document.getElementById("transactionError");
		transactionError.style.display = "inline";
		document.getElementById("transactionError").innerHTML = "आवेदन प्रकार चयन करें|";
		return false;

	}

	else if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;

	}

	else if (khasraFlag == 0) {

		var radioSelectError = document.getElementById("radioSelectError");

		radioSelectError.style.display = "inline";
		document.getElementById("radioSelectError").innerHTML = "कृपया चयन करें |";
		return false;
	}

	else if (document.getElementById('checkValidateFlag').value == "X") {

		if (khasraFlag == 1) {

			if (ownerId == 0) {

				var ownerNameError = document.getElementById("ownerNameError");

				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूमिस्वामी का चयन करें |";
				return false;
			}

		}
		if (khasraFlag == 2) {
			if (khasraId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया खसरा का चयन करें |";
				return false;
			}

		}
	}

	else {

		var url = "khasraDetail.do";
		var params = "";

		if (khasraFlag == 1) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + ownerId
					+ '&transactionId=' + transactionId;

		}

		if (khasraFlag == 2) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + khasraId + '&ownerId=' + 0
					+ '&transactionId=' + transactionId;

		}

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';
		loadDataNew(url, "khasaraListDiv", chakri, params);

		/*
		 * document.khasraform.action = "khasraDetail.do";
		 * document.khasraform.submit();
		 */
	}

}

function searchKhasraDetailDiverted(chakri) {

	var transactionId = document.getElementById("transactionId").value;
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;

	var khasraId = "";
	var ownerId = "";
	var bhookhandId = "";
	var orderId = "";
	var khasraFlag = document.getElementById('khasraLabelFlag').value;

	if (khasraFlag == 0) {

	} else {

		if (khasraFlag == 1) {

			ownerId = document.getElementById("ownerId").value;

			if (ownerId == 0) {

				document.getElementById('checkValidateFlag').value = "X";
			} else {

				document.getElementById('checkValidateFlag').value = "Y";
			}

		}

		else if (khasraFlag == 2) {

			khasraId = document.getElementById("khasraId").value;

			if (khasraId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

		else if (khasraFlag == 3) {

			bhookhandId = document.getElementById("bhukandId").value;

			if (bhookhandId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

		else if (khasraFlag == 4) {

			orderId = document.getElementById("orderId").value;

			if (orderId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

	}

	if (transactionId == 0) {

		var transactionError = document.getElementById("transactionError");
		transactionError.style.display = "inline";
		document.getElementById("transactionError").innerHTML = "आवेदन प्रकार चयन करें|";
		return false;

	}

	else if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else if (khasraFlag == 0) {

		var radioSelectError = document.getElementById("radioSelectError");

		radioSelectError.style.display = "inline";
		document.getElementById("radioSelectError").innerHTML = "कृपया चयन करें |";
		return false;
	}

	else if (document.getElementById('checkValidateFlag').value == "X") {

		if (khasraFlag == 1) {

			if (ownerId == 0) {

				var ownerNameError = document.getElementById("ownerNameError");

				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूमिस्वामी का चयन करें |";
				return false;
			}

		} else if (khasraFlag == 2) {
			if (khasraId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया खसरा का चयन करें |";
				return false;
			}

		} else if (khasraFlag == 3) {
			if (bhookhandId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूखंड संख्या का चयन करें |";
				return false;
			}

		}

		else if (khasraFlag == 4) {
			if (orderId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया आदेश संख्य़ा का चयन करें |";
				return false;
			}

		}

	} else {

		var url = "khasraDetailDiverted.do";
		/*
		 * var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId +
		 * '&riId=' + riId + '&halkaId=' + halkaId + '&villageId=' + villageId +
		 * '&khasraId=' + khasraId + '&ownerId=' + ownerId + '&bhookhandId=' +
		 * bhookhandId + '&orderId=' + orderId;
		 */

		var params = "";

		if (khasraFlag == 1) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + ownerId
					+ '&bhookhandId=' + 0 + '&orderId=' + 0 + '&transactionId='
					+ transactionId;

		}

		else if (khasraFlag == 2) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + khasraId + '&ownerId=' + 0
					+ '&bhookhandId=' + 0 + '&orderId=' + 0 + '&transactionId='
					+ transactionId;
		}

		else if (khasraFlag == 3) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + 0
					+ '&bhookhandId=' + bhookhandId + '&orderId=' + 0
					+ '&transactionId=' + transactionId;

		}

		else if (khasraFlag == 4) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + 0
					+ '&bhookhandId=' + 0 + '&orderId=' + orderId
					+ '&transactionId=' + transactionId;
			;
		}

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';

		loadDataNew(url, "khasaraListDiv", chakri, params);

		/*
		 * document.khasraform.action = "khasraDetailDiverted.do";
		 * document.khasraform.submit();
		 */
	}

}

function createRequest(chakri) {

	var radios = document.getElementsByName('requesterType');

	for ( var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			// alert(radios[i].value);
			document.khasraform.deptType.value = radios[i].value;

			break;
		}
	}

	// alert("aa");
	// alert("selectedTransactionValue:" + selectedTransactionValue);
	// District Name
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;
	// / alert("selectedDistrictValue:" + selectedDistrictValue);

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;
	// alert("selectedTahsilValue:" + selectedTahsilValue);

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;
	// alert("selectedRiValue:" + selectedRiValue);

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;
	// alert("selectedHalkaValue:" + selectedHalkaValue);

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;
	// alert("selectedVillageValue:" + selectedVillageValue);

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;
	// alert("selectedLocationNames:" + selectedLocationNames);

	document.khasraform.locationNames.value = selectedLocationNames;
	var selectedTransaction = document.getElementById('transactionId').value;
	// var optionsList = document.getElementById("transactionId").options;
	// var selectedTransactionValue =
	// optionsList[selectedTransactionIndex].text;

	// var checkboxes = document.getElementsByName('checkboxid[]');
	// var ownId = document.khasraform.ownerId.value;

	// var khId = document.khasraform.khasraId.value;
	var chks = document.getElementsByName("checkboxid[]");
	var hasChecked = "";
	var khasraIds = "";
	var tranId = document.getElementById("transactionId").value;

	var e = document.getElementById("transactionId");

	var transactionName = e.options[e.selectedIndex].text;

	var khasraId = 0;
	if (document.khasraform.khasraLabelFlag.value == 1) {
		khasraId = 0;
	} else {
		khasraId = document.getElementById("khasraId").value;
	}

	// var landTypeId = document.getElementById("landTypeId").value;

	var j = 0;

	// alert(document.khasraform.khasraId.value);

	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			if (document.khasraform.khasraLabelFlag.value == 1) {

				s = (chks[i].value).replace(((chks[i].value).substring(
						(chks[i].value).indexOf(","), (chks[i].value)
								.indexOf("'") + 1)), ",");
				khasraIds = khasraIds
						+ (chks[i].value).substring(0, (chks[i].value)
								.indexOf(",")) + ",";
			}

			if (document.khasraform.khasraLabelFlag.value == 2) {

				s = (chks[i].value).replace(((chks[i].value).substring(0,
						(chks[i].value).indexOf(",") + 1)), "");

				khasraIds = khasraIds
						+ (chks[i].value).substring(0, (chks[i].value)
								.indexOf(",")) + ",";
			}

			hasChecked = hasChecked + s + "@";

			++j;
		}
	}

	khasraIds = khasraIds.substring(0, khasraIds.length - 1);
	document.khasraform.khasraIds.value = khasraIds;

	if (hasChecked == false) {

		alert("कृपया कम से कम एक खसरा चयन करें ");
		remove_popup(chakri);
		return false;

	} else if (selectedTransaction == 0) {

		var transactionError = document.getElementById("transactionError");
		transactionError.style.display = "inline";
		document.getElementById("transactionError").innerHTML = "कृपया सेवा का प्रकार का चयन करें |";
		remove_popup(chakri);
		return false;

	} else if (j > 1 && khasraId != 0) {

		var singleCheckError = document.getElementById("singleCheckError");
		singleCheckError.style.display = "inline";
		document.getElementById("singleCheckError").innerHTML = "आप एक से अधिक भूमि-स्वामी चयन नहीं कर सकते |";
		remove_popup(chakri);
		return false;

	} else if (j > 1 && tranId == 10002) {

		var singleCheckError = document.getElementById("singleCheckError");
		singleCheckError.style.display = "inline";
		document.getElementById("singleCheckError").innerHTML = "आप एक से अधिक खसरा चयन नहीं कर सकते |";
		remove_popup(chakri);
		return false;

	}

	else {

		// hasChecked = "ids=" + hasChecked;
		hasChecked = hasChecked;
		// alert(" hasChecked :: "+hasChecked);
		document.khasraform.ids.value = hasChecked;
		document.khasraform.transactionNamenew.value = transactionName;

		var success = "";

		/*
		 * if (tranId == 10004) {
		 * 
		 * var chck = 0; var checkboxes =
		 * document.getElementsByName('checkboxid[]'); var vals = ""; for ( var
		 * i = 0, n = checkboxes.length; i < n; i++) { if
		 * (checkboxes[i].checked) { vals = checkboxes[i].value; // alert(vals);
		 * 
		 * var khasraId = vals.split(","); // alert(khasraId[0]); var url =
		 * "demandNoteStatus.do"; var params = "khasraId=" + khasraId[0]; var
		 * xml = new ajaxRequest(); xml.onreadystatechange = function() { if
		 * (xml.readyState == 4) { if (xml.status == 200 ||
		 * window.location.href.indexOf("http") == -1) {
		 * 
		 * if ((xml.responseText) .indexOf("MPWEBGIS login") == -1) { var
		 * successCode = xml.responseText;
		 * 
		 * success = successCode; } else { top.location.href =
		 * 'SessionExpired.do'; }
		 * 
		 * 
		 * var successCode = xml.responseText; //alert(successCode); if
		 * (successCode == 0) { chck++; var k =+i + +1;
		 * document.getElementById('chk'+k).checked = false; } }
		 * 
		 * else { alert("An error has occured making the request"); } //
		 * remove_popup(); } };
		 * 
		 * xml.open("POST", url, false); xml.setRequestHeader("Content-type",
		 * "application/x-www-form-urlencoded"); xml.send(params); } } }
		 */

		/*
		 * if (success == 501) {
		 * 
		 * alert("क्षेत्रफल 2 हेक्टेयर से कम"); return false; }
		 */

		/*
		 * var htmlcontent=$("html").html(); Session["pageHT"]=htmlcontent ;
		 */

		/* document.khasraform.pageHT.value = htmlcontent; */
		/* $("#pageHT").val(htmlcontent); */

		if (selectedVillageValue != '228') {
			if (!selectedHalkaValue != '00092') {
				if (!selectedRiValue != '02') {
					if (!selectedTahsilValue != '01') {
						if (!selectedDistrictValue != '03') {
							$("#pageHT").val(
									"<html>" + $("html").html() + "</html>");
						}
					}
				}
			}
		}

		document.khasraform.action = 'userRequestForm.do';

		document.khasraform.submit();
		loader(chakri);

	}

}

function createRequestDiverted() {

	// alert("selectedTransactionValue:" + selectedTransactionValue);
	// District Name
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;
	// alert("selectedDistrictValue:" + selectedDistrictValue);

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;
	// alert("selectedTahsilValue:" + selectedTahsilValue);

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;
	// alert("selectedRiValue:" + selectedRiValue);

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;
	// alert("selectedHalkaValue:" + selectedHalkaValue);

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;
	// alert("selectedVillageValue:" + selectedVillageValue);

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;
	// alert("selectedLocationNames:" + selectedLocationNames);

	document.khasraform.locationNames.value = selectedLocationNames;

	var selectedTransaction = document.getElementById('transactionId').value;
	// var optionsList = document.getElementById("transactionId").options;
	// var selectedTransactionValue =
	// optionsList[selectedTransactionIndex].text;

	var checkboxes = document.getElementsByName('checkboxid[]');
	var ownId = "";

	// var khId = document.khasraform.khasraId.value;
	var chks = document.getElementsByName("checkboxid[]");
	var hasChecked = "";
	var khasraIds = "";
	var tranId = document.getElementById("transactionId").value;

	var e = document.getElementById("transactionId");

	var transactionName = e.options[e.selectedIndex].text;

	var khasraId = 0;
	var ownerId = 0;

	if (document.khasraform.khasraLabelFlag.value == 1) {
		khasraId = 0;

	} else {

		khasraId = 1;
	}
	// var landTypeId = document.getElementById("landTypeId").value;

	var j = 0;

	// alert(document.khasraform.ownerId.value);

	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {
			// alert(chks[i].value);

			/*
			 * if (document.khasraform.ownerId.value != 0 &&
			 * document.getElementById("transactionId").value != 10005) {
			 * 
			 * s = (chks[i].value).replace(((chks[i].value).substring(
			 * (chks[i].value).indexOf(","), (chks[i].value) .indexOf("'") +
			 * 1)), ","); }
			 */

			if (khasraId == 0) {

				s = (chks[i].value);

			}

			else {

				s = (chks[i].value).replace(((chks[i].value).substring(0,
						(chks[i].value).indexOf(",") + 1)), "");

			}

			hasChecked = hasChecked + s + "@";

			++j;
		}
	}

	/*
	 * for ( var i = 0; i < chks.length; i++) {
	 * 
	 * if (chks[i].checked) {
	 * 
	 * if (document.khasraform.khasraLabelFlag.value == 1) {
	 * 
	 * s = (chks[i].value).replace(((chks[i].value).substring(
	 * (chks[i].value).indexOf(","), (chks[i].value) .indexOf("'") + 1)), ",");
	 * khasraIds = khasraIds + (chks[i].value).substring(0, (chks[i].value)
	 * .indexOf(",")) + ",";
	 * 
	 * 
	 * alert(khasraIds);
	 *  }
	 * 
	 * else{
	 * 
	 * s = (chks[i].value).replace(((chks[i].value).substring(0,
	 * (chks[i].value).indexOf(",") + 1)), "");
	 * 
	 * khasraIds = khasraIds + (chks[i].value).substring(0, (chks[i].value)
	 * .indexOf(",")) + ",";
	 * 
	 * alert(khasraIds); }
	 * 
	 * hasChecked = hasChecked + s + "@";
	 * 
	 * ++j; } }
	 */
	khasraIds = khasraIds.substring(0, khasraIds.length - 1);
	document.khasraform.khasraIds.value = khasraIds;

	if (hasChecked == false) {

		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें ");
		return false;

	} else if (selectedTransaction == 0) {

		var transactionError = document.getElementById("transactionError");
		transactionError.style.display = "inline";
		document.getElementById("transactionError").innerHTML = "कृपया सेवा का प्रकार का चयन करें |";
		return false;

	} else if (j > 1 && khasraId != 0) {

		var singleCheckError = document.getElementById("singleCheckError");
		singleCheckError.style.display = "inline";
		document.getElementById("singleCheckError").innerHTML = "आप एक से अधिक चेक बॉक्स का चयन नहीं कर सकते |";
		return false;

	} else if (j > 1 && tranId == 10002) {
		var singleCheckError = document.getElementById("singleCheckError");
		singleCheckError.style.display = "inline";
		document.getElementById("singleCheckError").innerHTML = "आप एक से अधिक चेक बॉक्स का चयन नहीं कर सकते |";
		return false;

	}

	else {

		// alert("fgfhfhfgh");
		// hasChecked = "ids=" + hasChecked;
		hasChecked = hasChecked;
		document.khasraform.ids.value = hasChecked;
		document.khasraform.transactionNamenew.value = transactionName;

		/*
		 * document.khasraform.action = 'userRequestForm.do?' + hasChecked +
		 * '&ownerId =' + ownId + '&khasraId=' + khId + '&transactionId=' +
		 * selectedTransaction + '&transactionName=' + transactionName;
		 */

		/*
		 * document.khasraform.action = 'userRequestFormDiverted.do';
		 * 
		 * document.khasraform.submit();
		 */

		/* $("#pageHT").val("<html>" + $("html").html() + "</html>"); */

		if (selectedVillageValue != '228') {
			if (!selectedHalkaValue != '00092') {
				if (!selectedRiValue != '02') {
					if (!selectedTahsilValue != '01') {
						if (!selectedDistrictValue != '03') {
							$("#pageHT").val(
									"<html>" + $("html").html() + "</html>");
						}
					}
				}
			}
		}

		document.khasraform.action = 'userRequestFormDiverted.do';

		document.khasraform.submit();
		loader(chakri);

	}

}

function requestForApproval() {
	document.paymentReceiptForm.action = 'requestForApproval.do?khasraId='
			+ document.paymentReceiptForm.khasraId.value + '&ownerId='
			+ document.paymentReceiptForm.ownerId.value + '&transactionId='
			+ document.paymentReceiptForm.transactionId.value
			+ '&requestMode=1';
	document.paymentReceiptForm.submit();

}

function submitRequest(transactionID) {

	// var selectedTransaction = transactionID;
	/* if (smartCard()) { */
	document.requestform.action = 'confirmSmartCard.do';
	document.requestform.submit();

	// alert("URL:"+'smartCardEntry.do?transactionID='+selectedTransaction);
	// }

}

// test
function hideSpan(field) {

	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
}

function approvalRequest(url, param, requestName) {
	var requestId = param;
	var ind = requestId.indexOf("=");
	var request = requestId.substring(requestId.indexOf("requestId=") + 10,
			requestId.indexOf("&khasraId"));

	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				response = mypostrequest.responseText;
				if (response == "yes") {
					document.getElementById(requestName).className = "appBtnsDisabled";
					document.getElementById(requestName).disabled = true;

					/*
					 * document.getElementById('printTrans').className =
					 * "appBtnsPayment";
					 * document.getElementById('printTrans').disabled = false;
					 */
					alert(" आवेदन संख्या  " + request
							+ " स्वीकृति के लिए भेज दिया गया है |");

				}

			}
		}
	};
	mypostrequest.open("POST", url, true);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(param);

}

function cancelRequest(url, param, requestName, check) {
	var requestId = param;
	var request = requestId.substring(requestId.indexOf("requestId=") + 10,
			requestId.indexOf("&khasraId"));
	var clrId = requestId.substring(requestId.indexOf("clrId=") + 6, requestId
			.indexOf("&requestId"));
	// var n = str.length

	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				response = mypostrequest.responseText;
				if (response == "yes") {

					if (document.getElementById(check).checked) {

						document.getElementById(check).checked = false;

						s = (document.getElementById(check).value);
						var res = s.split(",");
						hasChecked = document.getElementById("totalAmt").value;
						hasChecked = parseFloat(hasChecked)
								- parseFloat(res[1]);

						document.getElementById("totalAmount").innerHTML = hasChecked
								.toFixed(2);
						document.getElementById("totalAmt").value = hasChecked
								.toFixed(2);

					}

					document.getElementById(requestName).className = "appBtnsDisabled";
					document.getElementById(requestName).disabled = true;
					document.getElementById(check).disabled = true;

					alert(" सी. एल. आर. न. " + clrId
							+ " निरस्त कर दिया गया है |");
				}
			}
		}
	};
	mypostrequest.open("POST", url, true);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(param);
}

function requestApprove(url, param) {
	var requestId = param;
	var ind = requestId.indexOf("=");
	var request = requestId.substring(ind + 1, requestId.length);

	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				response = mypostrequest.responseText;
				if (response == "yes") {

					alert(" Request " + request + " has been approved .");

				}

			}
		}
	};
	mypostrequest.open("POST", url, true);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(param);

}

function amountBalance() {
	if (document.paymentEntry.deposit.value != null
			|| document.paymentEntry.fee.value != "") {
		var amt = parseFloat(document.paymentEntry.deposit.value)
				- parseFloat(document.paymentEntry.fee.value);
		document.paymentEntry.balance.value = amt.toFixed(2);
	}
}

function takePhoto() {
	popupWindow = window
			.open(
					"webcemara/takePhoto.jsp",
					'popUpWindow',
					'height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');
}

function validatePayment() {
	var fee = document.getElementById("fee").value;
	// alert("fee"+fee);
	var pm = document.getElementById("pm").value;

	var feeNo = parseFloat(fee, 10);
	// alert(pm);
	if (pm != 'online') {
		var deposit = document.getElementById("deposit").value;
		var depositNo = parseFloat(deposit, 10);

		if (deposit == null || deposit == '') {

			var depositSpan = document.getElementById("depositSpan");
			depositSpan.style.display = "inline";
			document.getElementById("depositSpan").innerHTML = "अंको मैं भरे |";
			if (document.paymentEntry.balance.value != null) {
				document.paymentEntry.balance.value = "";
			}
			return false;
		}

		else if ((isNaN(deposit))) {

			var depositSpan = document.getElementById("depositSpan");
			depositSpan.style.display = "inline";
			document.getElementById("depositSpan").innerHTML = "अंको मैं भरे |";

			if (document.paymentEntry.balance.value != null) {
				document.paymentEntry.balance.value = "";
			}

			return false;
		}

		else if (depositNo < feeNo) {

			var depositSpan = document.getElementById("depositSpan");
			depositSpan.style.display = "inline";
			document.getElementById("depositSpan").innerHTML = "कृप्या " + fee
					+ " से बड़ा या बराबर मूल्य भरे |";
			if (document.paymentEntry.balance.value != null) {
				/*
				 * document.paymentEntry.balance.value =
				 * parseInt(document.paymentEntry.deposit.value) -
				 * parseInt(document.paymentEntry.fee.value);
				 */
				document.paymentEntry.balance.value = (depositNo - feeNo)
						.toFixed(2);

			}

			return false;
		} else {
			hideSpan('depositSpan');
			amountBalance();
			return true;
		}
	} else {
		return true;
	}

}

function savePyment() {
	// alert("11111111111111111111111"+document.paymentEntry.pageType.value);
	if (validatePayment()) {
		if (document.paymentEntry.pm.value == 'online') {
			document.paymentEntry.action = 'onlinePayment.do?ownerName='
					+ document.paymentEntry.ownerName.value + '&serviceName='
					+ document.paymentEntry.serviceName.value + '&fee='
					+ document.paymentEntry.fee.value + '&requestId='
					+ document.paymentEntry.requestId.value + '&location='
					+ document.paymentEntry.location.value + '&pageType='
					+ document.paymentEntry.pageType.value
					+ '&requestedKhasraNo='
					+ document.paymentEntry.requestedKhasraNo.value;
		} else {

			document.paymentEntry.action = 'savePayment.do?ownerName='
					+ document.paymentEntry.ownerName.value + '&serviceName='
					+ document.paymentEntry.serviceName.value + '&balance='
					+ document.paymentEntry.balance.value + '&fee='
					+ document.paymentEntry.fee.value + '&deposit='
					+ document.paymentEntry.deposit.value + '&requestId='
					+ document.paymentEntry.requestId.value + '&location='
					+ document.paymentEntry.location.value + '&transactionId='
					+ document.paymentEntry.transactionId.value + '&pageType='
					+ document.paymentEntry.pageType.value
					+ '&requestedKhasraNo='
					+ document.paymentEntry.requestedKhasraNo.value;

		}
		document.paymentEntry.submit();

		closeWindow();
	}

}

function closeWindow() {
	//debugger;
	// alert("called:"+window.opener.document.getElementById('appBtn').value);

	// alert("called 1");
   
	window.opener.document.getElementById("appBtn").className = "appBtnsDisabled";
	window.opener.document.getElementById('appBtn').disabled = true;

	window.opener.document.getElementById("nirastAll").className = "appBtnsDisabled";
	window.opener.document.getElementById('nirastAll').disabled = true;

	// window.opener.document.getElementById("sendApproval").className =
	// "appBtnsPayment";
	// window.opener.document.getElementById('sendApproval').disabled = false;
	// alert("called 2");
	var nirast = window.opener.document.getElementsByName("nirast");
	var arr1 = window.opener.document
			.getElementsByName("activityIdForApproval");
	// var arr = window.opener.document.getElementsByName("requestForApproval");

	/*
	 * if (arr.length ==1) {
	 * window.opener.document.getElementsByName("requestForApproval").className =
	 * "appBtnsDisabled";
	 * window.opener.document.getElementsByName("requestForApproval").disabled =
	 * false; } else {
	 */
	// alert("called 3");
	var chks = window.opener.document.getElementsByName("checkboxid[]");
	var selectAll = window.opener.document.getElementsByName("selectAll1");
	for ( var i = 0; i < nirast.length; i++) {
		if (chks[i].checked) 
		{
   
			var name1 = "nirast" + i;
			window.opener.document.getElementById(name1).className = "appBtnsDisabled";
			window.opener.document.getElementById(name1).disabled = true;

			/*
			 * var name = "sendApproval"+i;
			 * window.opener.document.getElementById(name).className =
			 * "appBtnsPayment";
			 * window.opener.document.getElementById(name).disabled = false;
			 */

			/*
			 * var name = "activityId"+i;
			 * window.opener.document.getElementById(name).className =
			 * "appBtnsPayment";
			 * window.opener.document.getElementById(name).disabled = false;
			 */

		}
	}

	for ( var i = 0; i < arr1.length; i++) 
	{
		if (chks[i].checked) {

			/*
			 * var name1 = "nirast"+i;
			 * window.opener.document.getElementById(name1).className =
			 * "appBtnsDisabled";
			 * window.opener.document.getElementById(name1).disabled = true;
			 */

			var name = "sendApproval" + i;
			window.opener.document.getElementById(name).className = "appBtnsPayment";
			window.opener.document.getElementById(name).disabled = false;

			var name = "activityId" + i;
			window.opener.document.getElementById(name).className = "appBtnsPayment";
			window.opener.document.getElementById(name).disabled = false;

		}
	}
	
		selectAll.checked = false;
		selectAll.disabled = true;
	
	

	for ( var i = 0; i < chks.length; i++) 
	{
		
		chks[i].checked = false;
		chks[i].disabled = true;
		
	}
	
	
	/*
	 * for ( var i = 0; i < nirast.length; i++) {
	 * 
	 * window.opener.document.getElementsByName("nirast")[i].className =
	 * "appBtnsDisabled";
	 * window.opener.document.getElementsByName("nirast")[i].disabled = true; }
	 */

	// alert("called 4");
	// var pending = window.opener.document.getElementById('index').value;
	// alert("called:"+pending);
	// var btnName="appBtn"+pending;
	// alert("called:"+btnName);
	// window.opener.document.getElementById(btnName).className =
	// "appBtnsDisabled";
	// window.opener.document.getElementById(btnName).disabled = true;
	// window.close();
	// document.getElementById(elementId)
	
	window.opener.document.getElementById('selectall').checked = false;
	window.opener.document.getElementById('selectall').disabled = true;
	
}

function onlineUserSavePyment() {
	// alert("11111111111111111111111");
	if (validatePayment()) {
		if (document.paymentEntry.pm.value == 'online') {

			var a = mobileValidation("mobileId", "mobileId_fieldError");
			var b = EmailAddressValidator("emailId", "emailId_fieldError");
			var c = nameValidator("ownerName", "ownerName_fieldError");

			if (a & b & c) {

				document.paymentEntry.action = 'onlinePayment.do?ownerName='
						+ document.paymentEntry.ownerName.value
						+ '&serviceName='
						+ document.paymentEntry.serviceName.value + '&fee='
						+ document.paymentEntry.fee.value + '&requestId='
						+ document.paymentEntry.requestId.value + '&location='
						+ document.paymentEntry.location.value
						+ '&transactionId='
						+ document.paymentEntry.transactionId.value;

				document.paymentEntry.submit();
				closeWindow();

			}
		} else {

			document.paymentEntry.action = 'onlineUserSavePayment.do?ownerName='
					+ document.paymentEntry.ownerName.value
					+ '&serviceName='
					+ document.paymentEntry.serviceName.value
					+ '&balance='
					+ document.paymentEntry.balance.value
					+ '&fee='
					+ document.paymentEntry.fee.value
					+ '&deposit='
					+ document.paymentEntry.deposit.value
					+ '&requestId='
					+ document.paymentEntry.requestId.value
					+ '&location='
					+ document.paymentEntry.location.value
					+ '&transactionId='
					+ document.paymentEntry.transactionId.value;

			document.paymentEntry.submit();
		}

	}

}

function paymentEntry() {
	newWin = window.open('about:blank', 'popup',
			'width=1000,height=550,scrollbars=yes');
	document.success.setAttribute('target', 'popup');
	document.success.setAttribute('onsubmit', '');
	document.success.action = "paymentEntry.do";
	document.success.submit();
	/*
	 * if (!newWin.closed) { alert("window closed"); } else { alert("not
	 * working"); }
	 */
}

function HomePage() {

	document.success.action = "homePage.do?actionType=Mutation";
	document.success.submit();

}

function HomePage1() {

	document.requestListForm.action = "ItHome.do";
	document.requestListForm.submit();

}

function commonUpdate(actionType) {
	// alert("called commmonupdate:" + actionType);
	var chx = document.getElementsByName("requestId");
	// alert("RAdio length:" + chx.length);
	var flag = 0;
	for ( var i = 0; i < chx.length; i++) {
		if (chx[i].checked) {
			// alert("flage");
			flag = 1;
		}
	}
	if (flag == 0) {
		alert("कृपया कम से कम एक रिकॉर्ड का चयन करें");
		return false;
	} else {
		if (actionType == 'Unhold' || actionType == 'smReceived'
				|| actionType == 'rejected') {
			var remarks = document.getElementById("remarkId").value;
			// alert("remarks:" + remarks.length);

			if (remarks.length > 2) {

				return true;
			} else {
				alert("कृप्या टिप्पणी भरें |");
				return false;

			}
		}
		if (actionType == 'physc' || actionType == 'underVer') {
			var comboVal = document.getElementById("comboId").value;
			// alert("comboVal:" + comboVal);

			if (comboVal == 0) {
				// alert("Please Select Assign for verification to");
				alert("कृप्या कार्यवाही चुनें |");
				return false;
			} else {
				var remarks = document.getElementById("remarkId").value;
				// alert("remarks:" + remarks.length);

				if (remarks.length > 2) {

					return true;
				} else {
					alert("कृप्या टिप्पणी भरें |");
					return false;

				}
				return true;
			}

		}
	}
}
// return commonUpdate('printing'))
function callmeMethod() {
	// alert("acheckbox");
	return false;
}
function receivePrintedSmartCard() {

	// alert("called receivePrintedSmartCard");
	var chx = document.getElementsByName("printRecord");
	// alert("printRecord length:" + chx.length);
	var flag = 0;
	for ( var i = 0; i < chx.length; i++) {
		if (chx[i].checked) {
			// alert("flage");
			flag = 1;
		}
	}
	if (flag == 0) {
		alert("PLEASE SELECT AT LEAST ONE CHECK BOX");
		return false;
	} else {

		var remarks = document.getElementById("remarkId").value;
		// alert("remarks:" + remarks.length);

		if (remarks.length > 2) {

			return true;
		} else {
			alert("Please Enter Remarks!");
			return false;

		}

	}

}
function checkForDocs(actionType, divId, params) {
	// alert("called checkdocs");
	$("#adhar").hide();
	$("#otherInfo").hide();
	$("#updateDocList").hide();
	var valueType = document.getElementById("ix").value;
	// alert("value:" + valueType);
	if (valueType == 0 || valueType == "0") {
		$("#adhar").hide();
		$("#otherInfo").hide();
		$("#updateDocList").hide();

	} else {
		$("#updateDocList").show();
		loadData(actionType, divId, params);
	}

}

function selectOwnerRadio(id) {
	var value = $("#radio" + id).val();
	var arr = value.split('@');
	document.getElementById("name").innerHTML = arr[0];
	document.getElementById("fatherName").innerHTML = arr[1];
	document.getElementById("address").innerHTML = arr[2];
	document.getElementById("sex").innerHTML = arr[3];
	document.getElementById("casteId").innerHTML = arr[4];
	document.getElementById("share").innerHTML = arr[5];
	document.getElementById("divSubCasteId").innerHTML = arr[6];
	document.getElementById("ownerShipId").innerHTML = arr[7];
	document.getElementById("lagan").innerHTML = arr[8];
	document.getElementById("detailsOwner").innerHTML = arr[9];

	/*
	 * $('#ownerDetailsId input[type="radio"]:checked').each(function() {
	 * 
	 * $("#name").innerHTML=arr[0];// $("#name" + id).val(); //val($("#name" +
	 * id).val()); $("#address").innerHTML=arr[1];//$("#addresssp" +
	 * id).val();//val($("#addresssp" + id).val());
	 * $("#fatherName").innerHTML=$("#fatherSpsName" +
	 * id).val();//val($("#fatherSpsName" + id).val());
	 * $("#sex").innerHTML=$("#sex" + id).val();//val($("#sex" + id).val());
	 * $("#casteId").innerHTML=$("#jaatisp" + id).val();//val($("#jaatisp" +
	 * id).val()); $("#ownerShipId").innerHTML=$("#owner" +
	 * id).val();//val($("#owner" + id).val()); $("#share").innerHTML=$("#hissa" +
	 * id).val();//val($("#hissa" + id).val());
	 * $("#lagan").innerHTML=$("#lgnPaidToWnr" +
	 * id).val();//val($("#lgnPaidToWnr" + id).val());
	 * $("#detailsOwner").innerHTML=$("#remark" + id).val();//val($("#remark" +
	 * id).val()); $("#divSubCasteId").innerHTML=$("#jaatiName" +
	 * id).val();//val($("#jaatiName" + id).val());
	 * 
	 * });
	 */}

// //////////////start ake/////////////////

/*
 * function temp(){ document.loginform.action = "KhasraOwnershipLinking.do";
 * document.loginform.submit(); }
 */
function CalculateDoubleCrop() {
	var txtSinchit = $("#txtSinchit").val();// document.landusage.txtSinchit.value;
	var txtAsinchit = $("#txtAsinchit").val();// document.landusage.txtAsinchit.value;
	// var txtSudhBoya = document.landusage.txtSudhBoya.value;

	var txtSudhBoya = $("#txtSudhBoya").val();

	/*
	 * var doubleCropVal = document.landusage.txtDoubleCrop.value;
	 */
	if (parseFloat(txtAsinchit).toFixed(3) >= parseFloat(txtSudhBoya)
			.toFixed(3)) {
		txtAsinchit = parseFloat(txtAsinchit).toFixed(3)
				- parseFloat(txtSudhBoya).toFixed(3);
		document.landusage.txtAsinchit.value = parseFloat(txtAsinchit).toFixed(
				3);
		/*
		 * var totalCal = parseFloat(txtSinchit) + parseFloat(txtAsinchit);
		 *//*
			 * doubleCropVal = parseFloat(totalCal * 3).toFixed(3) -
			 * parseFloat(txtSudhBoya).toFixed(3);
			 * document.landusage.txtDoubleCrop.value =
			 * parseFloat(doubleCropVal) .toFixed(3);
			 */
	} else {
		var spanLandUsage = document.getElementById("spanLandUsage");
		spanLandUsage.style.display = "inline";
		errorMsg = "सम्मिलित की वैल्यू दिखाया मूल्य से अधिक नहीं हो सकता है |";
		document.getElementById("spanLandUsage").innerHTML = errorMsg;
		return false;
	}

}
// /ake

function SumArea(tableID, value) {

	var nonAgTypeId = document.getElementById("nonAgTypeId").value;
	var nonAgId = document.getElementById("nonAgId").value;

	var barrenTypeId = document.getElementById("barrenTypeId").value;
	var barrenId = document.getElementById("barrenId").value;
	$("#nonAgId").removeClass('heighfield');
	$("#txtNonAgArea").removeClass('heighfield');

	$("#barrenId").removeClass('heighfield');
	$("#txtBarrenArea").removeClass('heighfield');
	// alert($("#txtSudhBoya").val());
	try {
		var table = document.getElementById(tableID);

		var sum = $("#txtSudhBoya").val();
		var sum2 = $("#txtNonAgArea").val();
		var sum3 = $("#txtBarrenArea").val();
		// alert (nonAgTypeId+"value"+nonAgId+"sum"+sum2);
		var tblNonAr = parseFloat($("#lblTotalNonAgArea").val()).toFixed(3);
		var txtNonAgArea1 = parseFloat($("#txtNonAgArea").val()).toFixed(3);
		var tblTotalAgr;

		var tblBarArea = parseFloat($("#lblTotalBarrenArea").val()).toFixed(3);
		var txtBarrenArea1 = parseFloat($("#txtBarrenArea").val()).toFixed(3);
		var tblTotalBarArea;

		/*
		 * alert(sum); alert(sum2); alert(sum3);
		 */

		if (table.id == 'tblNonAg') {
			// document.getElementById("lblTotalNonAgArea").value =
			// parseFloat(sum).toFixed(3);$("#mySelect ")[0].selectedIndex <= 0

			/*
			 * if ( nonAgTypeId !=0 && nonAgId != 0 && sum2== "") { alert("कृपया
			 * गैर कृषिकार्य क्षेत्रफल दर्ज करें ।"); return false; }
			 */

			// if (isValidDecimalAgri(sum2)) {
			if (!$("#nonAgId option")[0].selectedIndex <= 0) {
				alert("कृपया गैर कृषिकार्य प्रकार चयन करें ।");
				// $("#nonAgId").attr('class', 'select_w1 heighfield');
				return false;
			}
			if (nonAgId == 0) {
				alert("कृपया गैर कृषिकार्य प्रकार चयन करें ।");
				// $("#nonAgId").attr('class', 'select_w1 heighfield');
				return false;
			}
			if (nonAgTypeId == 0) {
				alert("कृपया गैर कृषिकार्य चयन करें ।");
				// $("#nonAgTypeId").attr('class', 'select_w1 heighfield');
				return false;
			}
			if (sum2 == "" || sum2 == null) {
				alert("कृपया गैर कृषिकार्य क्षेत्रफल दर्ज करें ।");
				// $("#txtNonAgArea").attr('class', 'input_w1 heighfield');

				return false;
			}
			if (isValidDecimalAgri(sum2)) {
				if (sum2 != "" || sum2 != null) {
					sum = sum - sum2;

					if (sum < 0) {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता है |");
						$("#txtNonAgArea").attr('class',
								'input_w1 heighfield alignRht');
						return false;
					}

					else if (sum2 == 0 || sum2 == 0.0 || sum2 == 0.00
							|| sum2 == 0.000) {
						alert("गैर कृषिकार्य क्षेत्रफल शुन्य नहीं हो सकता  है |");
						$("#txtNonAgArea").attr('class', 'input_w1 heighfield');
					} else {
						if (ValidateTable('tblNonAg')) {
							addRowLand('tblNonAg', 'checkbox',
									ValidateTable('tblNonAg'));

							tblTotalAgr = parseFloat(
									parseFloat(tblNonAr)
											+ parseFloat(txtNonAgArea1))
									.toFixed(3);

							// alert(tblTotalAgr);

							$("#lblTotalNonAgArea").val(tblTotalAgr);

							$("#txtSudhBoya").val(parseFloat(sum).toFixed(3));

							$("#divSudhBoya").text(parseFloat(sum).toFixed(3));

						}/*
							 * else { if (ValidateTable('tblNonAg')) {
							 * addRowLand('tblNonAg', 'checkbox',
							 * ValidateTable('tblNonAg'));
							 * $("#lblTotalNonAgArea").val(
							 * $("#txtNonAgArea").val()); $("#txtSudhBoya").val(
							 * parseFloat(sum).toFixed(3)); } }
							 */
					}
				} else {
					$("#txtNonAgArea").attr('class', 'input_w1 heighfield');
				}
			}

		}
		if (table.id == 'tblBarren') {
			if (barrenTypeId != 0 && barrenId != 0 && sum3 == "") {
				alert("कृपया गैर मुमकिन क्षेत्रफल दर्ज करें  ।");
				return false;
			}
			// if (isValidDecimalBarren(sum3)) {

			if (!$("#barrenId option")[0].selectedIndex <= 0) {
				alert("कृपया गैर मुमकिन चयन करें ।");
				// $("#barrenId").attr('class', 'select_w1 heighfield');

				return false;
			}
			if (barrenId == 0) {
				alert("कृपया गैर मुमकिन प्रकार चयन करें ।");
				// $("#barrenTypeId").attr('class', 'select_w1 heighfield');

				return false;
			}
			if (barrenTypeId == 0) {
				alert("कृपया गैर मुमकिन चयन करें ।");
				// $("#barrenTypeId").attr('class', 'select_w1 heighfield');

				return false;
			}
			if (sum3 == "" || sum3 == null) {
				alert("कृपया गैर मुमकिन क्षेत्रफल दर्ज करें ।");
				$("#txtBarrenArea").attr('class', 'input_w1 heighfield');
			}
			if (isValidDecimalBarren(sum3)) {

				if (sum3 != "" || sum3 != null) {
					sum = sum - sum3;
					if (sum < 0) {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता है ।");
						$("#txtBarrenArea").attr('class',
								'input_w1 heighfield alignRht');
						return false;
					}

					else if (sum3 == 0 || sum3 == 0.0 || sum3 == 0.00
							|| sum3 == 0.000) {
						alert("ऊसर / गैर मुमकिन क्षेत्रफल शुन्य नहीं हो सकता है |");
						$("#txtBarrenArea")
								.attr('class', 'input_w1 heighfield');
					}

					else {
						if (ValidateTable('tblBarren')) {
							addRowLand('tblBarren', 'checkbox',
									ValidateTable('tblBarren'));

							// $("#lblTotalBarrenArea").val($("#txtBarrenArea").val());

							tblTotalBarArea = parseFloat(
									parseFloat(tblBarArea)
											+ parseFloat(txtBarrenArea1))
									.toFixed(3);

							// alert(tblTotalBarArea);

							$("#lblTotalBarrenArea").val(tblTotalBarArea);

							$("#txtSudhBoya").val(parseFloat(sum).toFixed(3));

							$("#divSudhBoya").text(parseFloat(sum).toFixed(3));

						} /*
							 * else { if (ValidateTable('tblBarren')) {
							 * addRowLand('tblBarren', 'checkbox',
							 * ValidateTable('tblBarren'));
							 * $("#lblTotalBarrenArea").val(
							 * $("#txtBarrenArea").val());
							 * $("#txtSudhBoya").val(
							 * parseFloat(sum).toFixed(3)); } }
							 */
					}
				} else {
					$("#txtBarrenArea").attr('class', 'input_w1 heighfield');
				}
			}
		}

	} catch (e) {
		alert(e);
	}

}

var localNonAgTrCount = null;
var localBarenTrCount = null;
var nonAgAreaTrCount = 0;
var nonBarrenAreaTrCount = 0;
function addRowLand(tableID, SelectableControlType, arrayColumnValue) {

	// alert(arrayColumnValue);
	try {
		if (arrayColumnValue) {
			var table = document.getElementById(tableID);
			var startuprow = table.getElementsByTagName('tr')[0];
			var cells = startuprow.getElementsByTagName('th');
			var cellCount = cells.length;
			var row = table.insertRow(table.rows.length);
			var nonAgId = $("#nonAgId").val().split("-")[0];
			var barrenId = $("#barrenId").val().split("-")[0];

			if (tableID == "tblNonAg") {
				nonAgAreaTrCount = $("#NonAgAreaHidnCount").val();

				if ((nonAgAreaTrCount == "" || nonAgAreaTrCount == null || nonAgAreaTrCount == undefined)
						&& (localNonAgTrCount == null)) {
					var trId = "trNonAgArea" + String(0);
					row.setAttribute('id', trId, 'class', 'gridHead');
					nonAgAreaTrCount = 0, localNonAgTrCount = 0;
				} else if ((nonAgAreaTrCount == "" || nonAgAreaTrCount == null || nonAgAreaTrCount == undefined)
						&& (localNonAgTrCount != null
								|| localNonAgTrCount != "" || localNonAgTrCount != undefined)) {
					var trId = "trNonAgArea" + String(localNonAgTrCount);
					row.setAttribute('id', trId, 'class', 'gridHead');

				} else {
					nonAgAreaTrCount++;
					var trId = "trNonAgArea" + String(Number(nonAgAreaTrCount));
					row.setAttribute('id', trId, 'class', 'gridHead');

				}
				$("#NonAgAreaHidnCount").val(nonAgAreaTrCount);
			}

			if (tableID == "tblBarren") {
				nonBarrenAreaTrCount = $("#barrnArHidnCount").val();

				if ((nonBarrenAreaTrCount == "" || nonBarrenAreaTrCount == null || nonBarrenAreaTrCount == undefined)
						&& (localBarenTrCount == null)) {
					var trId = "trBarrenArea" + String(0);
					row.setAttribute('id', trId, 'class', 'gridHead');
					nonBarrenAreaTrCount = 0, localBarenTrCount = 0;
				} else if ((nonBarrenAreaTrCount == ""
						|| nonBarrenAreaTrCount == null || nonBarrenAreaTrCount == undefined)
						&& (localBarenTrCount != null
								|| localBarenTrCount != "" || localBarenTrCount != undefined)) {
					var trId = "trBarrenArea" + String(localBarenTrCount);
					row.setAttribute('id', trId, 'class', 'gridHead');

				} else {
					nonBarrenAreaTrCount++;
					var trId = "trBarrenArea"
							+ String(Number(nonBarrenAreaTrCount));
					row.setAttribute('id', trId, 'class', 'gridHead');

				}
				$("#barrnArHidnCount").val(nonBarrenAreaTrCount);
			}

			for ( var i = 0; i < cellCount; i++) {
				var cell = row.insertCell(i);
				var iDiv = document.createElement('div');
				var element = document.createElement("input");
				if (i == 0 && SelectableControlType != null) {
					element.type = SelectableControlType;
					// cell.setAttribute('class', 'txtLabel');
					cell.setAttribute('style', 'text-align: center');
					// cell.setAttribute('size', '10');

					var selectId = null;
					var selectValue = new Array();

					// var selectNonAgTypeId = new Array();

					if (tableID == "tblNonAg") {

						if (localNonAgTrCount != null) {
							selectId = String(localNonAgTrCount);
						}

						else if (localNonAgTrCount == null) {
							selectId = String(nonAgAreaTrCount);

						}
						/*
						 * selectValue = $("#nonAgId option:selected").text()
						 * .split('-');
						 */
						/*
						 * selectNonAgTypeId = $("#nonAgTypeId option:selected")
						 * .text().split('-');
						 */

						// alert(selectValue);
						// alert(selectNonAgTypeId);
						iDiv.className = 'nonAgCheck';
					}
					if (tableID == "tblBarren") {
						if (localBarenTrCount != null) {
							selectId = String(localBarenTrCount);
						} else if (localBarenTrCount == null) {
							selectId = String(nonBarrenAreaTrCount);
						}
						/*
						 * var selectValue = $("#barrenId
						 * option:selected").text() .split('-');
						 */
						iDiv.className = 'brnCheck';
					}

					/*
					 * var sVal = '';
					 * 
					 * if (i == 1) { sVal = selectValue[0]; }
					 * alert("sVal--"+selectValue[0]);
					 * alert("sVal--"+selectValue[1]); alert("sVal--"+sVal);
					 * sVal = sVal.replace("\n", "");
					 */
					element.setAttribute('value', arrayColumnValue[i]);
					element.setAttribute('margin-left', '-16px');
					element.setAttribute('id', selectId);

				} else if (i == 3 && tableID == "tblNonAg") {

					// alert(i);
					// alert(arrayColumnValue[i]);

					var areaValueInptId = null;
					if (localNonAgTrCount != null) {
						areaValueInptId = "txtNonAgArea"
								+ String(localNonAgTrCount);
						localNonAgTrCount++;
					} else if (localNonAgTrCount == null) {
						areaValueInptId = "txtNonAgArea"
								+ String(nonAgAreaTrCount);
						nonAgAreaTrCount++;
					}
					element.setAttribute("class", "input_w");
					element.setAttribute('id', areaValueInptId);
					element.setAttribute('size', 20);
					var area = parseFloat(arrayColumnValue[i]);
					/* alert("area"+area); */
					area = area.toFixed(3);
					element.setAttribute("style", "text-align: right;");
					element.setAttribute("value", area);
					cell.setAttribute('width', '20%');
					cell.setAttribute('style', 'text-align: left');
					cell.setAttribute('size', '10');

				}

				else if (i == 3 && tableID == "tblBarren") {
					var areaValueInptId = null;
					if (localBarenTrCount != null) {
						areaValueInptId = "txtBarrenArea"
								+ String(localBarenTrCount);
						localBarenTrCount++;
					} else if (localBarenTrCount == null) {
						areaValueInptId = "txtBarrenArea"
								+ String(nonBarrenAreaTrCount);
						nonBarrenAreaTrCount++;
					}
					element.setAttribute("class", "input_w");
					element.setAttribute('id', areaValueInptId);
					element.setAttribute('size', 20);
					var area = parseFloat(arrayColumnValue[i]);
					area = area.toFixed(3);
					/* alert("area"+area); */
					element.setAttribute("style", "text-align: right;");
					element.setAttribute("value", area);
					cell.setAttribute('width', '20%');
					cell.setAttribute('style', 'text-align: left');
					cell.setAttribute('size', '10');

				}

				else {
					element.type = "text";
					element.setAttribute('size', 40);
					cell.setAttribute('width', '30%');
					cell.setAttribute('style', 'text-align: left');
					cell.setAttribute('size', '40');

					element.setAttribute("class", "input_w");
					/*
					 * if (tableID == "tblNonAg") { element.setAttribute('id',
					 * nonAgId); } if (tableID == "tblBarren") {
					 * element.setAttribute('id', barrenId); }
					 */

				}
				if (i == 1) {
					element.setAttribute("value", arrayColumnValue[i]);

					var areaValueInptId = null;
					if (tableID == "tblNonAg") {

						if (localNonAgTrCount != null) {
							areaValueInptId = "txtNonAgName"
									+ String(localNonAgTrCount);
							// localNonAgTrCount++;
						} else if (localNonAgTrCount == null) {
							areaValueInptId = "txtNonAgName"
									+ String(nonAgAreaTrCount);
							// nonAgAreaTrCount++;
						}
						element.setAttribute('id', areaValueInptId);
					} else if (tableID == "tblBarren") {

						if (localBarenTrCount != null) {
							areaValueInptId = "txtBarrenName"
									+ String(localBarenTrCount);
							// localBarenTrCount++;
						} else if (localBarenTrCount == null) {
							areaValueInptId = "txtBarrenName"
									+ String(nonBarrenAreaTrCount);
							// nonBarrenAreaTrCount++;
						}
						element.setAttribute('id', areaValueInptId);
					}
				}
				if (i == 2) {
					element.setAttribute("value", arrayColumnValue[i]);

					var areaValueInptId = null;
					if (tableID == "tblNonAg") {

						if (localNonAgTrCount != null) {
							areaValueInptId = "txtNonAgTypeName"
									+ String(localNonAgTrCount);
							// localNonAgTrCount++;
						} else if (localNonAgTrCount == null) {
							areaValueInptId = "txtNonAgTypeName"
									+ String(nonAgAreaTrCount);
							// nonAgAreaTrCount++;
						}
						element.setAttribute('id', areaValueInptId);
					} else if (tableID == "tblBarren") {
						if (localBarenTrCount != null) {
							areaValueInptId = "txtBarrenTypeName"
									+ String(localBarenTrCount);
							// localBarenTrCount++;
						} else if (localBarenTrCount == null) {
							areaValueInptId = "txtBarrenTypeName"
									+ String(nonBarrenAreaTrCount);
							// nonBarrenAreaTrCount++;
						}
						element.setAttribute('id', areaValueInptId);
					}
				}

				element.setAttribute("readonly", "true");
				element.setAttribute("size", cells[i].width);

				iDiv.appendChild(element);
				cell.appendChild(iDiv);
			}
		}
	} catch (e) {
		alert(e);
	}
}

function MinusArea(tableID, value) {
	try {
		var table = document.getElementById(tableID);
		var sudhBoyaArea = $("#txtSudhBoya").val();
		var nonAgArea = 0;
		var nonBarrenArea = 0;

		var tblNonAr = parseFloat($("#lblTotalNonAgArea").val()).toFixed(3);
		// var txtNonAgArea1=parseFloat($("#txtNonAgArea").val()).toFixed(3);
		var tblTotalAgr;

		var tblBarArea = parseFloat($("#lblTotalBarrenArea").val()).toFixed(3);
		// var txtBarrenArea1=parseFloat($("#txtBarrenArea").val()).toFixed(3);
		var tblTotalBarArea;

		if (table.id == 'tblNonAg') {
			var nonAgChkArray = new Array();
			$("div.nonAgCheck :input").each(function() {

				if ($(this).is(':checked')) {
					/*
					 * alert($(this).attr('id'));
					 */nonAgChkArray.push($(this).attr('id'));
				}
			});
			/* alert(nonAgChkArray); */
			for ( var i = 0; i < nonAgChkArray.length; i++) {
				nonAgArea = nonAgArea
						+ Number($("#txtNonAgArea" + String(nonAgChkArray[i]))
								.val());
				var row = "trNonAgArea" + String(nonAgChkArray[i]);
				$('#' + row).remove();
			}
			/* alert(nonAgArea); */
			sudhBoyaArea = parseFloat(sudhBoyaArea) + parseFloat(nonAgArea);
			$("#txtSudhBoya").val(parseFloat(sudhBoyaArea).toFixed(3));
			$("#divSudhBoya").text(parseFloat(sudhBoyaArea).toFixed(3));

			tblTotalAgr = parseFloat(
					parseFloat(tblNonAr) - parseFloat(nonAgArea)).toFixed(3);

			// alert(tblTotalAgr);

			$("#lblTotalNonAgArea").val(tblTotalAgr);

		}

		if (table.id == 'tblBarren') {

			var barrenChkArray = new Array();
			$("div.brnCheck :input").each(function() {
				if ($(this).is(':checked')) {
					/*
					 * alert($(this).attr('id'));
					 */barrenChkArray.push($(this).attr('id'));
				}
			});
			/* alert(barrenChkArray); */
			for ( var j = 0; j < barrenChkArray.length; j++) {
				nonBarrenArea = nonBarrenArea
						+ Number($("#txtBarrenArea" + barrenChkArray[j]).val());
				var row = "trBarrenArea" + String(barrenChkArray[j]);
				$('#' + row).remove();
			}
			/* alert(nonBarrenArea); */
			sudhBoyaArea = new Number(sudhBoyaArea) + new Number(nonBarrenArea);
			/* deleteRow('tblBarren'); */
			$("#txtSudhBoya").val(parseFloat(sudhBoyaArea).toFixed(3));
			$("#divSudhBoya").text(parseFloat(sudhBoyaArea).toFixed(3));

			tblTotalBarArea = parseFloat(
					parseFloat(tblBarArea) - parseFloat(nonBarrenArea))
					.toFixed(3);

			// alert(tblTotalBarArea);

			$("#lblTotalBarrenArea").val(tblTotalBarArea);
		}

	} catch (e) {
		alert(e);
	}

}

function checkNum(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)
			|| charCode == 8 || charCode == 32 || charCode == 46)
		return true;
	else {
		// alert("Please enter only char");
		return false;
	}

}
// /ake
function isNumber(evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode == 47)) {
		return false;
	}
	return true;
}

function howManyDecimals(i) {

	y = i.split(/\./);

	if (y.length > 2)
		return false;

	return true;

}

function isNumberTreeWater(evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode <= 46 || charCode > 57 || charCode == 47)) {
		return false;
	}
	return true;
}

function CalculateSudhBoya(field) {

	// var divSudhBoya = $("#divSudhBoya").text();

	// alert(divSudhBoya);

	var currentInputBox = field;
	var defaultInputBox = currentInputBox + "1";
	var defaultValue = $("#" + defaultInputBox).val();
	var txtChragah = document.landusage.txtChragah.value;
	var txtChragah1 = document.landusage.txtChragah1.value;
	var txtVrakhsKunj = document.landusage.txtVrakhsKunj.value;
	var txtVrakhsKunj1 = document.landusage.txtVrakhsKunj1.value;
	var txtChaluPadti = document.landusage.txtChaluPadti.value;
	var txtChaluPadti1 = document.landusage.txtChaluPadti1.value;
	var txtKawilKasht = document.landusage.txtKawilKasht.value;
	var txtKawilKasht1 = document.landusage.txtKawilKasht1.value;

	var txtVraksRopan = document.landusage.txtVraksRopan.value;
	var txtVraksRopan1 = document.landusage.txtVraksRopan1.value;

	var txtPadti2To5 = document.landusage.txtPadti2To5.value;
	var txtPadti2To51 = document.landusage.txtPadti2To51.value;

	var txtBagicha = document.landusage.txtBagicha.value;
	var txtBagicha1 = document.landusage.txtBagicha1.value;

	var txtVan = document.landusage.txtVan.value;
	var txtVan1 = document.landusage.txtVan1.value;

	/*
	 * var txtPadti2To5YrNo = document.landusage.txtPadti2To5YrNo.value; var
	 * txtPadti2To5YrNo1 = document.landusage.txtPadti2To5YrNo1.value;
	 */

	var txtOthers = document.landusage.txtOthers.value;
	var txtOthers1 = document.landusage.txtOthers1.value;

	var txtPadtiGreaterthan5 = document.landusage.txtPadtiGreaterthan5.value;
	var txtPadtiGreaterthan51 = document.landusage.txtPadtiGreaterthan51.value;

	var txtFalodyan = document.landusage.txtFalodyan.value;
	var txtFalodyan1 = document.landusage.txtFalodyan1.value;

	var lblTotalNonAgArea = document.landusage.lblTotalNonAgArea.value;
	var lblTotalNonAgArea1 = document.landusage.lblTotalNonAgArea1.value;

	var lblTotalBarrenArea = document.landusage.lblTotalBarrenArea.value;
	var lblTotalBarrenArea1 = document.landusage.lblTotalBarrenArea1.value;
	var txtSudhBoya1 = document.landusage.txtSudhBoya1.value
	var txtSudhBoyaCal;

	// var txtAsinchit = document.landusage.txtAsinchit.value;
	// var txtSinchit = document.landusage.txtSinchit.value;

	var txtKhasraArea = $("#txtKhasraArea").val(); // document.landusage.txtKhasraArea.value;

	txtSudhBoyaCal = (parseFloat(txtChragah) + parseFloat(txtVrakhsKunj)
			+ parseFloat(txtChaluPadti) + parseFloat(txtKawilKasht)
			+ parseFloat(txtVraksRopan) + parseFloat(txtPadti2To5)
			+ parseFloat(txtBagicha) + parseFloat(txtVan)
			+ parseFloat(txtOthers) + parseFloat(txtPadtiGreaterthan5)
			+ parseFloat(txtFalodyan) + parseFloat(lblTotalNonAgArea) + parseFloat(lblTotalBarrenArea))
			.toFixed(3);

	// txtSudhBoya=(double)txtChragah+(double)txtVrakhsKunj+(double)txtChaluPadti+(double)txtKawilKasht+(double)txtVraksRopan+(double)txtPadti2To5+(double)txtBagicha+(double)txtVan+(double)txtPadti2To5YrNo+(double)txtOthers+(double)txtPadtiGreaterthan5+(double)txtFalodyan;

	if (txtSudhBoyaCal > txtKhasraArea) {
		alert("सम्मिलित  वैल्यू शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकती |");
		$("#" + currentInputBox).val($("#" + defaultInputBox).val());
		return false;
	} else {

		if (isValidDecimal($("#" + currentInputBox).val())) {

			// var sudhBoyaArea11 = (parseFloat(txtKhasraArea) -
			// parseFloat(txtSudhBoyaCal)).toFixed(3);

			// $("#txtSudhBoya").val(sudhBoyaArea11);

			// document.landusage.txtSudhBoya.value = (parseFloat(txtKhasraArea)
			// - parseFloat(txtSudhBoyaCal)).toFixed(3);

			$('#spanLandUsage').hide();

			$("#divSudhBoya").text(
					(parseFloat(txtKhasraArea) - parseFloat(txtSudhBoyaCal))
							.toFixed(3));
			$("#txtSudhBoya").val(
					(parseFloat(txtKhasraArea) - parseFloat(txtSudhBoyaCal))
							.toFixed(3));

		} else {
			$("#" + currentInputBox).val($("#" + defaultInputBox).val());
		}

		/* CalculateDoubleCrop(); */
	}
}
function addRow(tableID, SelectableControlType, arrayColumnValue) {
	try {

		if (arrayColumnValue) {
			var table = document.getElementById(tableID);
			var startuprow = table.getElementsByTagName('tr')[0];
			var cells = startuprow.getElementsByTagName('th');

			var cellCount = cells.length;

			var row = table.insertRow(table.rows.length);
			row.setAttribute('style', 'align :left;');
			for ( var i = 0; i < cellCount; i++) {
				var cell = row.insertCell(i);
				var element = document.createElement("input");
				if (i == 0 && SelectableControlType != null) {
					element.type = SelectableControlType;
					cell.setAttribute('style', 'align :left;');

				}

				else {
					element.type = "text";
					element.setAttribute("class", "input_w");
				}

				element.setAttribute("value", arrayColumnValue[i]);
				element.setAttribute("readonly", "true");
				element.setAttribute("size", cells[i].width);
				cell.appendChild(element);
			}

		}
	} catch (e) {

		alert(e);
	}
}
// /ake
function ValidateTable(tableID) {
	var table = document.getElementById(tableID);
	var arrayColumnValue = new Array();

	if (table.id == 'tblNonAg') {
		if (document.getElementById('nonAgId').value == 0) {
			alert("कृपया गैर कृषिकार्य चयन करें ।");
			return false;
		}

		if (document.getElementById('txtNonAgArea').value == "") {
			var spanNonAgArea = document.getElementById("spanNonAgArea");
			spanNonAgArea.style.display = "inline";
			errorMsg = "फील्ड क्षेत्र को खाली नहीं छोड़ा जा सकता है|";
			document.getElementById("spanNonAgArea").innerHTML = errorMsg;
			return false;

		}

		var arr = document.getElementById('nonAgId').value.split('-');
		var nonAgCode = "";
		var nonAgName = "";
		if (arr.length == 2) {

			nonAgCode = arr[0];
			nonAgName = arr[1];

		}
		if (arr.length == 3) {

			nonAgCode = arr[0];
			nonAgName = arr[1] + arr[2];

		}

		var arr1 = document.getElementById('nonAgTypeId').value.split('-');

		var nonAgTypeCode = "";
		var nonAgTypeName = "";
		if (arr1.length == 2) {

			nonAgTypeCode = arr1[0];
			nonAgTypeName = arr1[1];

		}
		if (arr1.length == 3) {

			nonAgTypeCode = arr1[0];
			nonAgTypeName = arr1[1] + arr1[2];

		}

		if (IsDuplicateRow(tableID, 2, nonAgTypeName) != true) {
			alert("आप गैर कृषिकार्य  में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");

			return false;
		}

		arrayColumnValue[0] = nonAgTypeCode;
		/* arrayColumnValue[1] = nonAgCode; */
		arrayColumnValue[1] = nonAgName;
		arrayColumnValue[2] = nonAgTypeName;
		arrayColumnValue[3] = document.getElementById('txtNonAgArea').value;

		// addRow(tableID,'checkbox',arrayColumnValue);
		return arrayColumnValue;

		alert(arrayColumnValue);
	}
	if (table.id == 'tblBarren') {
		if (document.getElementById('barrenId').value == 0) {
			alert("कृपया  ऊसर/गैर  मुमकिन चयन करें।");
			return false;
		}

		if (document.getElementById('txtBarrenArea').value == "") {
			alert("कृपया ड्रापडाउन से मान का चयन करें ।");
			return false;
		}

		var arr = document.getElementById('barrenId').value.split('-');
		var barrenCode = "";
		var barrenName = "";
		if (arr.length == 2) {

			barrenCode = arr[0];
			barrenName = arr[1];

		}

		var arr1 = document.getElementById('barrenTypeId').value.split('-');

		var barrentypeCode = "";
		var barrenTypeName = "";
		if (arr1.length == 2) {

			barrenTypeCode = arr1[0];
			barrenTypeName = arr1[1];

		}

		if (IsDuplicateRow(tableID, 2, barrenTypeName) != true) {
			alert("आप  ऊसर/गैर मुमकिन  में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");

			return false;
		}

		arrayColumnValue[0] = barrenTypeCode;
		/* arrayColumnValue[1] = barrenCode; */
		arrayColumnValue[1] = barrenName;
		arrayColumnValue[2] = barrenTypeName;
		arrayColumnValue[3] = document.getElementById('txtBarrenArea').value;

		// addRow(tableID,'checkbox',arrayColumnValue);
		return arrayColumnValue;
	}
	if (table.id == 'cropIdDetail') {

		if (document.getElementById('cropId').value == 0) {
			alert("कृपया ड्रापडाउन से मान का चयन करें।");
			return false;
		}

		var txt = document.getElementById('cropId').value;
		var indx = txt.indexOf('-');
		var cropId = txt.substr(0, indx);
		// alert("cropId:::::"+cropId);
		var cropName = txt.substr(indx + 1, txt.length - 1);
		// alert("cropName:::::"+cropName);

		if (IsDuplicateRow(tableID, 1, cropId) != true) {
			alert("आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए प्रयास कर रहे हैं |");
			return false;
		}

		arrayColumnValue[0] = 0;
		arrayColumnValue[1] = cropId;
		arrayColumnValue[2] = cropName;

		return arrayColumnValue;
	}

	if (table.id == 'soilTypeTbl') {
		if (document.getElementById('soilType').value == 0) {
			var spanGenInfoGrid = document.getElementById("spanGenInfoGrid");
			spanGenInfoGrid.style.display = "inline";
			errorMsg = "कृपया ड्रापडाउन से मान का चयन करें ।";
			document.getElementById("spanGenInfoGrid").innerHTML = errorMsg;
			return false;
		}

		// var arr=document.getElementById('soilType').value.split("-",1);
		var txt = document.getElementById('soilType').value;
		// alert(txt);
		var indx = txt.indexOf('-');
		var soilCode = txt.substr(0, indx);
		var soilName = txt.substr(indx + 1, txt.length - 1);

		if (IsDuplicateRow(tableID, 1, soilCode) != true) {
			var spanGenInfoGrid = document.getElementById("spanGenInfoGrid");
			spanGenInfoGrid.style.display = "inline";
			errorMsg = "आप तालिका में डुप्लिकेट रिकॉर्ड जोड़ने के लिए कोशिश कर रहे हैं |";
			document.getElementById("spanGenInfoGrid").innerHTML = errorMsg;

			return false;
		}

		arrayColumnValue[0] = 0;
		arrayColumnValue[1] = soilCode;
		arrayColumnValue[2] = soilName;

		return arrayColumnValue;

	}

}
// /ake
function getElementValue(innerHTML) {
	var elementvalue = "";
	var text = innerHTML.toLowerCase();
	var elementIndex = text.indexOf("value=");
	if (elementIndex != -1) {
		var start = text.indexOf('"', elementIndex + 1);
		var stop = text.indexOf('"', start + 1);
		elementvalue = text.slice(start + 1, stop)
	}
	return elementvalue;
}
// /ake
function getElementId(innerHTML) {
	var elementId = "";
	var text = innerHTML.toLowerCase();
	var elementIndex = text.indexOf("id=");
	if (elementIndex != -1) {
		var start = text.indexOf('"', elementIndex + 1);
		var stop = text.indexOf('"', start + 1);
		elementId = text.slice(start + 1, stop)
	}
	return elementId;
}
// /ake
function IsDuplicateRow(tableId, columnIndex, columnValue) {
	try {

		// alert(tableId+"---"+columnIndex+"---"+columnValue);

		var table = document.getElementById(tableId);
		var val = "";

		// alert("-he--"+table.rows[1].cells[columnIndex].innerHTML);

		for ( var i = 1; i < table.rows.length; i++) {

			// var val=table.rows[i].cells[columnIndex].children[0].value;

			val = getElementValue(table.rows[i].cells[columnIndex].innerHTML);

			// alert("---"+val);

			if (val) {
				if (columnValue.toLowerCase().trim() == val.toLowerCase()
						.trim()) {
					return false;
				}
			}

		}
		return true;
	} catch (e) {
		alert(e);
	}
}
function SendContent(url, params) {
	var msg;
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {
				// alert(mypostrequest.responseText);
				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					msg = mypostrequest.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// msg = mypostrequest.responseText;
			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);
	return msg;
}

var arMutationFieldList = [ 'ownerId', 'seqNo', 'requestId', 'firstName*',
		'middleName', 'lastName', 'relationId', 'fatherName*', 'ownerType',
		'casteId', 'casteName', 'cHouseNo', 'cVillageName*', 'cPostOffice',
		'cThana', 'cPinCode', 'khasraShare*', 'taxPaidToOwner', 'cTehsil*',
		'cDistrict*', 'lessorType', 'ownershipType', 'stdCode', 'telephoneNo',
		'mobileNum*', 'cState*', 'emailId', 'cStreetAreaName', 'khasraId',
		'sex', 'basraId', 'basraNo*' ];

function ValidateMutation(index) {
	try {

		// var index = id.split('-')[1];

		for ( var i = 0; i < arMutationFieldList.length; i++) {

			var fieldName = arMutationFieldList[i].replace('*', '');

			if (arMutationFieldList[i].indexOf('*') > 0
					&& document.getElementsByName(fieldName)[index].value.length == 0) {
				alert("[" + fieldName + "] field can't be left blank");

				document.getElementsByName(fieldName)[index].focus();
				return false;
			}

			if (parseFloat(document.getElementsByName('khasraShare')[index].value) == 0) {
				alert("Field mutation area(नामान्तरण क्षेत्रफल) should be greater than zero.\nPlease check and try again |");
				document.getElementsByName('khasraShare')[index].focus();
				return false;
			}

			var totshare = 0;
			for ( var n = 0; n < document.getElementsByName('share').length; n++) {

				totshare = parseFloat(totshare)
						+ parseFloat(document.getElementsByName('share')[n].value);

			}

			if (parseFloat(document.getElementsByName('khasraShare')[index].value) > totshare
					.toFixed(4)) {
				alert(totshare.toFixed(4));
				/*
				 * alert(parseFloat(document.getElementsByName('khasraShare')[index].value));
				 * alert(totshare.toFixed(3));
				 */
				alert("Field mutation area(नामान्तरण क्षेत्रफल) should be less than or equal to seller owner total area.\nPlease check and try again |");
				document.getElementsByName('khasraShare')[index].focus();
				return false;
			}

			if (parseFloat(document.getElementsByName('khasraShare')[index].value) > parseFloat(document
					.getElementsByName('khasraArea')[index].value)) {
				alert("Field mutation area(नामान्तरण क्षेत्रफल) should be less than or equal to actual area.\nPlease check and try again |");
				document.getElementsByName('khasraShare')[index].focus();
				return false;
			}

			if (document.getElementsByName('emailId')[index].value) {

				var email = document.getElementsByName('emailId')[index].value;
				if (ValidateEmailAddress(email) == false) {
					document.getElementsByName('emailId')[index].focus();
					return false;
				}
			}

			if (document.getElementsByName('sex')[index].value == 0) {
				alert("Please select the gender(लिंग) type from dropdown...|");
				document.getElementsByName('sex')[index].focus();
				return false;
			}

			if (document.getElementsByName('ownerType')[index].value == 0) {
				alert("Please select the ownership(स्वामित्व) type from dropdown...|");
				document.getElementsByName('ownerType')[index].focus();
				return false;
			}
			if (document.getElementsByName('ownershipType')[index].value == 0) {
				alert("Please select the owner Type(स्वामी प्रकार) type from dropdown...|");
				document.getElementsByName('ownershipType')[index].focus();
				return false;
			}

			if (document.getElementsByName('casteId')[index].value == 0) {
				alert("Please select the caste(जाति) type from dropdown...|");
				document.getElementsByName('casteId')[index].focus();
				return false;
			}
			if (document.getElementsByName('casteName')[index].value == 0) {
				alert("Please select the subcaste(उपजाति) type from dropdown...|");
				document.getElementsByName('casteName')[index].focus();
				return false;
			}

			if (document.getElementsByName('relationId')[index].value == 0) {
				alert("Please select the relationship(संबंध/पिता/पति/पत्नी) type from dropdown...|");
				document.getElementsByName('relationId')[index].focus();
				return false;
			}

		}
		return true;

	} catch (e) {

		alert(e);
		return false;
	}
}

function SubmitForm(doc, view) {
	try {
		// alert(view);
		var url;
		var view1;
		view1 = view.split('?')[0];
		if (view == 'showConfirmationPage.do') {
			for ( var k = 0; k < document.getElementsByName('Update').length; k++) {
				if (ValidateMutation(k) == false)
					return false;
			}
			var conf = confirm("क्या आपको यकीन है, तहसीलदार को अनुरोध सबमिट करना चाहते हैं |");
			if (conf == false) {
				return false;
			}
			document.getElementById('btnTehsildar').disabled = true;
			for ( var k = 0; k < document.getElementsByName('Update').length; k++) {
				document.getElementsByName('Update')[k].disabled = true;
			}

		}
		if (view == 'setSellerOwner.do') {
			// alert("view: "+view);
			var val = doc.split('-')[0];
			var ctr = doc.split('-')[1];

			if (val != 'Skip' && val != 'Correction') {

				for ( var k = 0; k < document
						.getElementsByName('chkSellerOwner').length; k++) {
					var isSeller = "N";
					if (document.getElementsByName('chkSellerOwner')[k].checked == true)
						isSeller = "Y";
					url = document.getElementsByName('keyHidden')[k].value
							+ '&isSeller=' + isSeller;

					var msg = SendContent(view, url);
					// window.location.reload();
				}
			} else {

				if (val == 'Skip') {
					for ( var k = 0; k < document
							.getElementsByName('chkSellerOwner').length; k++) {

						if (document.getElementsByName('chkSellerOwner')[k].value == '1') {
							url = document.getElementsByName('keyHidden')[ctr].value
									+ '&isSeller=' + 'Y';

						} else {
							url = document.getElementsByName('keyHidden')[k].value
									+ '&isSeller=' + 'N';
							document.getElementsByName('keyHidden')[k].checked = false;
						}

						// alert(url);

						var msg = SendContent(view, url);
					}
				}
				if (val == 'Correction') {
					for ( var k = 0; k < document
							.getElementsByName('chkSellerOwner').length; k++) {

						if (document.getElementsByName('chkSellerOwner')[k].value == '1') {
							url = document.getElementsByName('keyHidden')[ctr].value
									+ '&isSeller=' + 'N';

						}

						// alert(url);

						var msg = SendContent(view, url);
					}
				}

			}

			return true;
		}

		if (view1 == 'ownerSearch.do') {

			url = view.split('?')[1];

			var msg = SendContent(view, url);

			document.getElementById("ownerSearchDiv").innerHTML = msg;
			return true;
		}
		// alert("view:"+view+"\nview1:"+view1);
		if (view1 == 'addExistingOwner.do') {

			url = view.split('?')[1];
			// alert("XXXXXX: "+url);
			// return false;
			var msg = SendContent(view.split('?')[0], url);
			// alert("1msg:"+msg);
			// document.getElementById("ownerSearchDiv").innerHTML=msg;
			return true;
		}

		if (view1 == 'basraSelection.do') {

			url = view.split('?')[1];

			alert(url);
			var msg = SendContent(view, url);

			document.getElementById("basraListDiv").innerHTML = msg;
			return true;
		}
		/*
		 * if (view == 'getKhasraOwnerList.do') { alert(url);
		 * url='requestId='+view.split('=')[1]; alert(url); var
		 * msg=SendContent(view,url);
		 * 
		 * return true; }
		 */
		document.getElementById(doc).action = view;
		document.getElementById(doc).submit();
	} catch (e) {
		alert(e);

	}

}
function SubmitForm1(doc, ViewMethod) {

	try {
		// alert(doc+"\n"+ViewMethod);

		for ( var k = 0; k < document.getElementsByName('radioOwner').length; k++) {
			if (document.getElementsByName('radioOwner')[k].checked)
				ViewMethod = ViewMethod + "?ownerId="
						+ document.getElementsByName('radioOwner')[k].value
						+ "&khasraId="
						+ document.getElementsByName('hiddenKhasra')[k].value
						+ "&requestId="
						+ document.getElementsByName('hiddenRequest')[k].value;
		}
		// alert(ViewMethod);

		document.getElementById(doc).action = ViewMethod;
		document.getElementById(doc).submit();
	} catch (e) {
		// alert(e);

	}
}
function SaveMutation(id) {

	try {

		var index = id.split('-')[1];
		var url = '';
		if (ValidateMutation(index) == true) {

			for ( var i = 0; i < arMutationFieldList.length; i++) {

				var fieldName = arMutationFieldList[i].replace('*', '');
				url = url + fieldName + '='
						+ document.getElementsByName(fieldName)[index].value
						+ '&';

			}
			url = url.substr(0, url.length - 1);

			var retmsg = SendContent('saveMutationChanges.do', url);
			document.getElementById("msg-" + index).innerHTML = retmsg;
			window.location.reload();
			/*
			 * document.getElementById('khasraOwnerLinkingForm').action =
			 * 'saveMutationChanges.do';
			 * document.getElementById('khasraOwnerLinkingForm').submit();
			 */
		}

	} catch (e) {
		alert(e);

	}
}
function UpdateProcessStatus(requestId) {
	try {

		var params = 'requestId=' + requestId;
		var retmsg = SendContent('updateProcessStatus.do', params);
		document.getElementById("msgPatwari").innerHTML = retmsg;
		var kk = SendContent('showConfirmationPage.do', params);

	} catch (e) {
		alert(e);

	}
}
function ValidateEmailAddress(email) {
	if (email.indexOf('@') == -1) {
		alert("Invalid email id...|\nIt must have an at sign(@) sign before domain name.\nPlease check and try again |");
		return false;
	}
	if (email.match(/@/g).length > 1) {
		alert("Invalid email id...|\nAn email address have only one at sign(@).\nPlease check and try again |");
		return false;
	}
	if (email.length < 5) {
		alert("Invalid email id...|\nPlease check and try again.");
		return false;
	}

	var atsignplace = email.lastIndexOf('@');
	var dotplace = email.indexOf('.', atsignplace);

	if (dotplace < 0) {
		alert("Invalid email id...|\nIt must have a dot(.) sign after domain name.\nPlease check and try again |");
		return false;
	}

	if (email.substring(atsignplace + 1, dotplace).trim().length == 0) {
		alert("Invalid email id...|\nDomain name is not defined.\nPlease check and try again |");
		return false;
	}

	if (email.substr(dotplace + 1).trim().length == 0) {
		alert("Invalid email id...|\nDomain name is not defined.\nPlease check and try again |");
		return false;
	}

	return true;
}
// url, div, params
function getKhasraHistory(id, divv) {
	// alert("getKhasraHistory"+id);
	var params = 'khasraId=' + id;

	loadKhasra('getKhasraHistory.do', divv, params);
	/*
	 * //loadContent1('getKhasraHistory.do', url); //
	 * alert("getKhasraHistory"+id); var url = 'khasraId=' + id;
	 * loadContent('getKhasraHistory.do', url);
	 */

}

function getSubCaste(casteId, subCasteId, div) {
	// alert("getKhasraHistory"+id);

	// alert(casteId+"\n"+subCasteId+"\n"+div);
	var params = 'casteId=' + casteId + '&' + 'subCasteId=' + subCasteId;

	loadKhasra('getSubCaste.do', div, params);

	/*
	 * //loadContent1('getKhasraHistory.do', url); //
	 * alert("getKhasraHistory"+id); var url = 'khasraId=' + id;
	 * loadContent('getKhasraHistory.do', url);
	 */

}
function loadKhasra(url, divv, params) {

	try {
		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) { loader(); }
			 */

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(divv).innerHTML = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById(divv).innerHTML =
					// xml.responseText;

				} else {
					alert("An error has occured making the request");
				}

				// remove_popup();
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
// //////////////end ake///////////////////

// For Diversion request

function SubmitDiversionRequest() {
	// alert("called Diversion request");
	// Transaction Name
	// var selectedTransactionIndex =
	// document.getElementById('transactionId').selectedIndex;
	// var optionsList = document.getElementById("transactionId").options;
	// var selectedTransactionValue =
	// optionsList[selectedTransactionIndex].text;

	// alert("selectedTransactionValue:" + selectedTransactionValue);
	// District Name

	$('input:checkbox').each(function() {
		if ($(this).is(':checked'))
			$(this).attr('checked', 'true');
	});
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;
	// alert("selectedDistrictValue:" + selectedDistrictValue);

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;
	// alert("selectedTahsilValue:" + selectedTahsilValue);

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;
	// alert("selectedRiValue:" + selectedRiValue);

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;
	// alert("selectedHalkaValue:" + selectedHalkaValue);

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;
	// alert("selectedVillageValue:" + selectedVillageValue);

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;

	// alert("selectedLocationNames:" + selectedLocationNames);
	// document.khasraform.transactionName.value = selectedTransactionValue;
	document.khasraform.locationNames.value = selectedLocationNames;
	var chks = document.getElementsByName("checkboxid[]");
	var flag = 0;
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			flag = 1;
			break;
		}
	}
	if (flag == 0) {

		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें ");
		return false;

	} else {
		// alert("PAGE_PREVIEW:"+$("html").html());

		/*
		 * var htmlcontent=$("html").html();
		 * 
		 * $("#pageHT").val(htmlcontent);
		 */

		if (selectedVillageValue != '228') {
			if (!selectedHalkaValue != '00092') {
				if (!selectedRiValue != '02') {
					if (!selectedTahsilValue != '01') {
						if (!selectedDistrictValue != '03') {
							$("#pageHT").val(
									"<html>" + $("html").html() + "</html>");
						}
					}
				}
			}
		}

		document.khasraform.action = 'diversionRequest.do';
		document.khasraform.submit();
		loader("ownerChakeri");
	}
}
// For Mutation request

function SubmitMutationRequest() {

	/*
	 * var selectedTransactionIndex =
	 * document.getElementById('khasraId').selectedIndex; var optionsList =
	 * document.getElementById("khasraId").options; var selectedkhasraValue =
	 * optionsList[selectedTransactionIndex].value;
	 * alert("selectedkhasraValue"+selectedkhasraValue)
	 * if(selectedkhasraValue!=0) { alert("only one check box should be
	 * checked") }
	 */

	// Transaction Name
	var selectedTransactionIndex = document.getElementById('transactionId').selectedIndex;
	var optionsList = document.getElementById("transactionId").options;
	var selectedTransactionValue = optionsList[selectedTransactionIndex].text;

	// alert("selectedTransactionValue:" + selectedTransactionValue);
	// District Name
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;
	// alert("selectedDistrictValue:" + selectedDistrictValue);

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;
	// alert("selectedTahsilValue:" + selectedTahsilValue);

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;
	// alert("selectedRiValue:" + selectedRiValue);

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;
	// alert("selectedHalkaValue:" + selectedHalkaValue);

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;
	// alert("selectedVillageValue:" + selectedVillageValue);

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;
	// alert("selectedLocationNames:" + selectedLocationNames);
	document.khasraform.transactionName.value = selectedTransactionValue;
	document.khasraform.locationNames.value = selectedLocationNames;
	var chks = document.getElementsByName("checkboxid");
	var flag = 0;
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			flag = 1;
			break;
		}
	}
	if (flag == 0) {

		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें|");
		return false;

	}
	var selectedTransactionId = document.getElementById('transactionId').value;
	// alert("selectedTransactionId:"+selectedTransactionId);
	if (selectedTransactionId == 0) {

		alert("कृपया आवेदन प्रकार चयन करें| ");
		return false;

	}

	else {
		document.khasraform.action = 'mutationRequest.do';
		document.khasraform.submit();
		loader("ownerChakeri");
	}
}

function fetchDocsForMutation(actionType, elementId, params) {
	// alert("actionType:" + actionType);
	// alert("params:" + params);
	loadAjaxData(actionType, elementId, params);
}

function loadAjaxData(url, elementId, params) {
	// alert("called loadAjaxData:" + elementId);
	// alert("url:" + url);
	// alert("params:" + params);
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert(xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(elementId).innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(elementId).innerHTML =
				// xml.responseText;
			} else {
				alert("An error has occured making the request");
			}
		}
	};
	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);
}

function getAvedakKharaOwnerDetails(url, elementId, chakri) {
	// document.getElementById('ownerTypeId').value = 0;
	document.getElementById("casteTypeId").value = 0;
	document.getElementById("casteNameId").value = "";
	document.getElementById("requesterNameId").value = "";
	document.getElementById("requesterMiddleNameId").value = "";
	document.getElementById("requesterLastNameId").value = "";
	document.getElementById("requesterFatherNameId").value = "";
	document.getElementById("sexId").value = 0;
	document.getElementById("telephoneId").value = "";
	document.getElementById("mobileNoId").value = "";
	document.getElementById("emailId").value = "";
	document.getElementById("commHouseNoId").value = "";
	document.getElementById("streetAreaId").value = "";
	document.getElementById("commPostOfcId").value = "";
	document.getElementById("commThanaId").value = "";
	document.getElementById("commVillageId").value = "";
	// document.getElementById("tehsilId").value = 0;
	document.getElementById("districtId").value = 0;
	document.getElementById("commStateId").value = 0;
	document.getElementById("commPinCodeId").value = "";
	document.getElementById("stdCodeId").value = "";
	document.getElementById("remarksId").value = "";
	document.getElementById("newOwnerId").value = "";
	document.getElementById("newOwnerKhasraId").value = "";
	document.getElementById("relationTypeId").value = 0;
	document.getElementById("landMarkId").value = "";
	// alert("avedakKhasarNoId:" + avedakKhasarNoId);
	var avedakKhasarNoId = document.getElementById('avedakKhasarNoId').value;
	// alert("avedakKhasarNoId:" + avedakKhasarNoId);
	if (avedakKhasarNoId != "" && avedakKhasarNoId != 0) {
		// alert("value found");
		var districtId = document.getElementById('districtIdx').value;
		// alert("1:" + districtId);
		var tehsilId = document.getElementById('tehsilIdx').value;
		// alert("2:" + tehsilId);
		var riId = document.getElementById('riIdx').value;
		// alert("3:" + riId);
		var halkaId = document.getElementById('halkaIdx').value;
		// alert("4:" + halkaId);
		var villageId = document.getElementById('villageIdx').value;
		// alert("5:" + villageId);
		var params = "avedakKhasarNoId=" + avedakKhasarNoId + "@" + districtId
				+ "@" + tehsilId + "@" + riId + "@" + halkaId + "@" + villageId;
		// alert(params);
		loadDataNew(url, elementId, chakri, params);

	}

}

function showAvedakKhasraDtl() {
	// alert("called showAvedakKhasraDtl:");
	// caste type value
	var indexValue1 = document.getElementById('avedakKhasradtlId').selectedIndex;
	var optionsList1 = document.getElementById("avedakKhasradtlId").options;
	var avedakKhasradtl = optionsList1[indexValue1].text;
	var avedakKhasradtlValue = optionsList1[indexValue1].value;

	var details = avedakKhasradtlValue.split("^");

	document.getElementById('newOwnerId').value = details[0];
	document.getElementById('requesterNameId').value = details[1];
	document.getElementById('requesterFatherNameId').value = details[2];
	document.getElementById('casteTypeId').value = details[3];
	// document.getElementById('sexId').value = details[5];
	document.getElementById('commHouseNoId').value = details[5];
	document.getElementById('streetAreaId').value = details[6];
	document.getElementById('commVillageId').value = details[7];
	document.getElementById('commPostOfcId').value = details[8];
	document.getElementById('commThanaId').value = details[9];
	document.getElementById('tehsilId').value = details[10];
	document.getElementById('districtId').value = details[11];
	document.getElementById('commPinCodeId').value = details[12];
	document.getElementById('stdCodeId').value = details[13];
	document.getElementById('telephoneId').value = details[14];
	document.getElementById('newOwnerKhasraId').value = details[15];
	document.getElementById('commStateId').value = details[16];
	document.getElementById('mobileNoId').value = details[17];
	document.getElementById('emailId').value = details[18];
	document.getElementById('sexId').value = details[19];

	document.getElementById('requesterNameId').readOnly = false;
	document.getElementById("requesterMiddleNameId").readOnly = false;
	document.getElementById("requesterLastNameId").readOnly = false;

	document.getElementById('requesterFatherNameId').readOnly = false;
	document.getElementById('casteTypeId').readOnly = false;
	document.getElementById('casteNameId').readOnly = false;

	// document.getElementById('sexId').readOnly = true;
	document.getElementById('commHouseNoId').readOnly = false;
	document.getElementById('streetAreaId').readOnly = false;
	document.getElementById('commVillageId').readOnly = false;
	document.getElementById('commPostOfcId').readOnly = false;
	document.getElementById('commThanaId').readOnly = false;
	document.getElementById('tehsilId').readOnly = false;
	document.getElementById('districtId').readOnly = false;
	document.getElementById('commStateId').readOnly = false;
	document.getElementById('commPinCodeId').readOnly = false;
	document.getElementById('stdCodeId').readOnly = false;
	document.getElementById('telephoneId').readOnly = false;
	// document.getElementById('commStateId').readOnly = false;
	document.getElementById('mobileNoId').readOnly = false;
	document.getElementById('emailId').readOnly = false;
	document.getElementById('sexId').readOnly = false;

	/*
	 * alert("document.getElementById('newOwnerKhasraId').value:" +
	 * document.getElementById('newOwnerKhasraId').value);
	 */
	loadData('subCasteMutationData.do', 'divSubCasteId', 'casteId='
			+ details[3]);
	document.getElementById('casteNameId').value = details[4];

}

function mutValidation(actionType) {

	var chx = document.getElementsByName("requestId");
	// alert("RAdio length:" + chx.length);
	var flag = 0;
	for ( var i = 0; i < chx.length; i++) {
		if (chx[i].checked) {
			// alert("flage");
			flag = 1;
		}
	}
	if (flag == 0) {
		alert("कृपया रिकॉर्ड चयन करे|");
		return false;
	} else {
		if (actionType == 'muthold' || actionType == 'mutreject') {
			var remarks = document.getElementById("remark").value;
			// alert("remarks:" + remarks.length);

			if (remarks.length > 2) {

				return true;
			} else {
				alert("कृपया टिपण्णी भरे|");
				return false;

			}
		}
		if (actionType == 'mutphysc') {
			var comboVal = document.getElementById("currentActivity").value;
			// alert("comboVal:" + comboVal);

			if (comboVal == 0) {
				// alert("Please Select Assign for verification to");
				alert("कृपया क्रिया चुने|");
				return false;
			} else {
				var remarks = document.getElementById("remark").value;
				// alert("remarks:" + remarks.length);

				if (remarks.length > 2) {

					return true;
				} else {
					alert("कृपया टिपण्णी भरे|");
					return false;

				}
				return true;
			}

		}
	}
}

function demandNoteGeneration() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");
		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else {

		var url = "bulkDemandNoteGenerate.do";

		params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
				+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
				+ villageId;

		loadDataNewDiverted(url, "status", "viewKhasraChakeri", params);

		if (document.getElementById("villageError").value = "1")

		{
			alert("डिमांड नोट बनाये जा चुके हैं| कृपया अनुमोदन करें | ");

		}

		else {

			alert("डिमांड नोट बनाये जा चुके हैं| कृपया अनुमोदन करें | ");

		}

	}
}

function demandNoteGenerationDiverted() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");
		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else {

		/*
		 * document.khasraform.action = "bulkDemandNoteGenerateDiverted.do";
		 * document.khasraform.submit();
		 */

		var url = "bulkDemandNoteGenerateDiverted.do";

		params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
				+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
				+ villageId;

		loadDataNewDiverted(url, "status", "viewKhasraChakeri", params);

		if (document.getElementById("villageError").value = "1")

		{
			alert("डिमांड नोट बनाये जा चुके हैं| कृपया अनुमोदन करें | ");

		}

		else {

			alert("डिमांड नोट बनाये जा चुके हैं| कृपया अनुमोदन करें | ");

		}

	}
}
function approveOnlineUser(url, param) {

	var i = param.indexOf("ownerId=");
	var j = param.indexOf("&action");

	var oId = param.substring(i, j);

	if (oId == 'ownerId=') {
		// alert(" owner is not attached with the request ");

		alert(" अनुरोध के साथ ओनर जोडे नहीं है |");

		return false;
	}

	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					var successCode = xml.responseText;

					if (successCode == 'OK') {
						alert("प्रयोक्ता सफलतापूर्वक स्वीकृत |");
					}

					if (successCode == 'NO') {
						alert("प्रयोक्ता सफलतापूर्वक अस्वीकार कर दिया |");
					}
				} else {
					top.location.href = 'SessionExpired.do';
				}

				/*
				 * var successCode = xml.responseText;
				 * 
				 * if (successCode == 'OK') { alert("प्रयोक्ता सफलतापूर्वक
				 * स्वीकृत"); }
				 * 
				 * if (successCode == 'NO') { alert("प्रयोक्ता सफलतापूर्वक
				 * अस्वीकार कर दिया"); }
				 */

			} else {
				// alert("An error has occured making the request");
			}

			// remove_popup();
		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(param);
}

function changeStatus(a) {
	if (a == "sownBy1") {

		document.getElementById('sownBy1').checked = true;
		document.getElementById('sownBy2').checked = false;

	} else if (a == "sownBy2") {
		document.getElementById('sownBy2').checked = true;
		document.getElementById('sownBy1').checked = false;
	}

}

var total_rows = 1;

function add_upload() {

	var tr, td;
	var tbody = document.getElementById("tagTBody");
	tr = tbody.insertRow(tbody.rows.length);
	td = tr.insertCell(tr.cells.length);
	td.innerHTML += "<b>फ़ाइल अपलोड </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='file' name='fileList["
			+ total_rows
			+ "]' id='fileList["
			+ total_rows
			+ "]' size='25' \"><br>";
	total_rows++;
}

function remove_upload() {
	var tbody = document.getElementById("tagTBody");
	if (tbody.rows.length > 1) {
		tbody.deleteRow(tbody.rows.length - 1);
		total_rows--;
	} else {

		alert("दूर करने के लिए कोई रिकॉर्ड नहीं है|");

	}
}

function saveOnlineUser() {

	var loginId = document.khasraform.loginId.value;
	var firstName = document.khasraform.firstName.value;
	var email = document.khasraform.mailId.value;
	var mobileNo = document.khasraform.mobileNo.value;
	// var stateId = document.khasraform.stateId.value ;

	var landSubtypeId = document.khasraform.landSubtypeId.value;

	if (landSubtypeId == 0) {

		document.khasraform.districtId1.value = document.khasraform.districtId.value;
		document.khasraform.tehsilId1.value = document.khasraform.tehsilId.value;
		document.khasraform.riId1.value = document.khasraform.riId.value;
		document.khasraform.halkaId1.value = document.khasraform.halkaId.value;
		document.khasraform.villageId1.value = document.khasraform.villageId.value;
		document.khasraform.khasraId1.value = document.khasraform.khasraId.value;

	} else if (landSubtypeId == 2) {

		if (document.getElementById('villageID').checked) {

			document.khasraform.districtId1.value = document.khasraform.districtIdForVillg.value;
			document.khasraform.tehsilId1.value = document.khasraform.tehsilIdForVillg.value;
			document.khasraform.riId1.value = document.khasraform.riIdForVillg.value;
			document.khasraform.halkaId1.value = document.khasraform.halkaIdForVillg.value;
			document.khasraform.villageId1.value = document.khasraform.villageIdForVillg.value;
			document.khasraform.khasraId1.value = document.khasraform.bhukandForVillg.value;

			document.khasraform.chkboxType.value = "villageID";
		} else {

			document.khasraform.districtId1.value = document.khasraform.districtIdForlocality.value;
			document.khasraform.tehsilId1.value = document.khasraform.tehsilIdforlocality.value;
			document.khasraform.localityId.value = document.khasraform.localityIdforlocality.value;
			document.khasraform.khasraId1.value = document.khasraform.bhukandaIdforlocality.value;

			document.khasraform.riId1.value = "";
			document.khasraform.halkaId1.value = "";
			document.khasraform.villageId1.value = "";

			document.khasraform.chkboxType.value = "Locality";

		}
	}

	var districtId = document.khasraform.districtId1.value;
	var tehsilId = document.khasraform.tehsilId1.value;

	var riId = document.khasraform.riId1.value;
	var halkaId = document.khasraform.halkaId1.value;
	var villageId = document.khasraform.villageId1.value;
	var khasraId = document.khasraform.khasraId1.value;
	var chkboxType = document.khasraform.chkboxType.value;

	var localityId = document.khasraform.localityId.value;

	/*
	 * alert("districtId=="+districtId); alert("riId=="+riId);
	 * alert("tehsilId=="+tehsilId); alert("halkaId=="+halkaId);
	 * alert("villageId=="+villageId); alert("khasraId=="+khasraId);
	 * alert("chkboxType=="+chkboxType); alert("localityId=="+localityId);
	 */

	var secretQuestionId = document.khasraform.secretQuestionId.value;
	var secretAnswer = document.khasraform.secretAnswer.value;
	var docId = document.khasraform.docId.value;
	var idProofNum = document.khasraform.idProofNum.value;
	// var khasraNo = document.khasraform.khasraNo.value ;

	if (loginId.trim() == "") {
		alert(" लॉगिन दर्ज करें |");
		return false;
	}

	if (firstName.trim() == "") {
		alert("प्रथम नाम दर्ज करें |");
		return false;
	}

	if (secretQuestionId.trim() == "0") {
		alert(" गुप्त प्रश्न चयन करें |");
		return false;
	}

	if (mobileNo.trim() == "" && mobileNo.length > 0
			&& !(/^\d+$/.test(mobileNo))) {
		alert("मोबाइल दर्ज करें");
		return false;
	}

	else if (mobileNo.length > 0 && mobileNo.charAt(0) == "0") {
		alert("मोबाइल न. 0 के साथ प्रारंभ नहीं किया जा सकता |");
		return false;

	} else if (mobileNo.length != 10) {
		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें |");
		return false;

	}

	else if (isNaN(mobileNo)) {
		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें |");
		return false;

	}

	/*
	 * if(khasraNo.trim() == ""){ alert("खसरा दर्ज करें"); return false; }
	 */

	if (idProofNum.trim() == "") {
		alert("आईडी प्रूफ दर्ज करें");
		return false;
	}

	if (email != "") {

		if (email.indexOf('@') == -1) {
			alert("अवैध ईमेल आईडी...|\nयह डोमेन नाम से पहले एक संकेत पर (@) पर हस्ताक्षर होना आवश्यक है.\nजाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.match(/@/g).length > 1) {
			alert("अवैध ईमेल आईडी...|\nएक ईमेल पते के संकेत पर केवल एक (@) है.\nजाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.length < 5) {
			alert("अवैध ईमेल आईडी...|\n जाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.length > 0
				&& !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
						.test(email))) {
			alert("कृपया सही ईमेल दर्ज करें|");
			return false;

		}

	}

	if (districtId.trim() == "0") {
		alert(" जिला चयन करें |");
		return false;
	}

	if (tehsilId.trim() == "0") {
		alert(" तहसील चयन करें |");
		return false;
	}

	if (landSubtypeId == 0) {
		if (riId.trim() == "0") {
			alert(" आर. आई. सर्कल चयन करें |");
			return false;
		}

		if (halkaId.trim() == "0") {
			alert(" पटवारी हल्का चयन करें |");
			return false;
		}

		if (villageId.trim() == "0") {
			alert("गांव चयन करें |");
			return false;
		}

		if (khasraId.trim() == "0") {
			alert("खसरा संख्या चयन करें |");
			return false;
		}

	} else if (landSubtypeId == 2) {

		if (document.getElementById('villageID').checked) {
			if (riId.trim() == "0") {
				alert(" आर. आई. सर्कल चयन करें |");
				return false;
			}

			if (halkaId.trim() == "0") {
				alert(" पटवारी हल्का चयन करें |");
				return false;
			}

			if (villageId.trim() == "0") {
				alert("गांव चयन करें |");
				return false;
			}

			if (khasraId.trim() == "0") {
				alert("भूखण्ड  संख्या चयन करें |");
				return false;
			}
		} else {
			if (localityId.trim() == "0") {
				alert(" स्थान  चयन करें |");
				return false;
			}

			if (khasraId.trim() == "0") {
				alert("भूखण्ड  संख्या चयन करें |");
				return false;
			}

		}
	}

	if (docId.trim() == "0") {
		alert(" आईडी प्रूफ चयन करें |");
		return false;
	}

	for ( var i = 0; i < total_rows; i++) {

		if (document.getElementById('fileList[' + i + ']').value != "") {

			val10 = document.getElementById('fileList[' + i + ']').value
					.split('.');

			if ((val10[val10.length - 1] != 'pdf')
					&& (val10[val10.length - 1] != 'jpg')
					&& (val10[val10.length - 1] != 'jpeg')) {
				alert("कृपया पीडीएफ , जेपीजी , जेपीईजी फाइलों को अपलोड करने के लिए ब्राउज़ करें।");
				return false;
			}

		}

		if (document.getElementById('fileList[' + i + ']').value == "") {
			alert("कृपया अपलोड करने के लिए रिकॉर्ड का चयन करें।");
			return false;
		}

	}

	var pinCode = document.khasraform.pinCode.value;

	if (isNaN(pinCode)) {
		alert("कृपया पिन कोड केवल 6 अंकों में दर्ज करें|");
		return false;

	} else if (pinCode != "") {
		if (pinCode.length != 6) {
			alert("कृपया पिन कोड केवल 6 अंकों में दर्ज करें|");
			return false;
		}

	}

	if (secretAnswer.trim() == "") {
		alert(" गुप्त जवाब दर्ज करें");
		return false;

	} else {

		document.khasraform.action = 'saveOnlineUser.do';
		document.khasraform.submit();

	}
}

function updateOnlineUser() {

	var email = document.onlineUser.mailId.value;
	var mobileNo = document.onlineUser.mobileNo.value;

	var pinCode = document.onlineUser.pinCode.value;

	if (isNaN(pinCode)) {
		alert("कृपया पिन कोड केवल 6 अंकों में दर्ज करें|");
		return false;

	} else if (pinCode != "") {
		if (pinCode.length != 6) {
			alert("कृपया पिन कोड केवल 6 अंकों में दर्ज करें|");
			return false;
		}

	}

	if (email != "") {

		if (email.indexOf('@') == -1) {
			alert("अवैध ईमेल आईडी...|\nयह डोमेन नाम से पहले एक संकेत पर (@) पर हस्ताक्षर होना आवश्यक है.\nजाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.match(/@/g).length > 1) {
			alert("अवैध ईमेल आईडी...|\nएक ईमेल पते के संकेत पर केवल एक (@) है.\nजाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.length < 5) {
			alert("अवैध ईमेल आईडी...|\n जाँच करें और पुन: प्रयास करें |");
			return false;
		}
		if (email.length > 0
				&& !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
						.test(email))) {
			alert("कृपया सही ईमेल दर्ज करें|");
			return false;

		}

	}

	for ( var i = 0; i < total_rows; i++) {

		if (document.getElementById('fileList[' + i + ']').value != "") {

			val10 = document.getElementById('fileList[' + i + ']').value
					.split('.');

			if ((val10[val10.length - 1] != 'pdf')
					&& (val10[val10.length - 1] != 'jpg')
					&& (val10[val10.length - 1] != 'jpeg')) {
				alert("कृपया पीडीएफ , जेपीजी , जेपीईजी फाइलों को अपलोड करने के लिए ब्राउज़ करें।");
				return false;
			}

		}

		/*
		 * if (document.getElementById('fileList[' + i + ']').value == "") {
		 * alert("कृपया अपलोड करने के लिए रिकॉर्ड का चयन करें।"); return false; }
		 */

	}

	// alert(mobileNo.length);

	if (mobileNo.trim() == "" && mobileNo.length > 0
			&& !(/^\d+$/.test(mobileNo))) {
		alert("मोबाइल दर्ज करें");
		return false;
	}

	else if (mobileNo.length > 0 && mobileNo.charAt(0) == "0") {
		alert("मोबाइल न. 0 के साथ प्रारंभ नहीं किया जा सकता|");
		return false;

	} else if (mobileNo.length != 10) {
		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें|");
		return false;

	}

	else if (isNaN(mobileNo)) {
		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें|");
		return false;

	}

	else {

		// document.onlineUser.action = 'updateOnlineUser.do';
		document.onlineUser.submit();

	}
}

function resetField(comboIndex, jspName) {
	// alert("jspName11:" + jspName);

	if (comboIndex == 1) {
		document.getElementById("tehsilId").value = 0;
		/*
		 * document.getElementById("riId").value = 0;
		 * document.getElementById("halkaId").value = 0;
		 * document.getElementById("villageId").value = 0;
		 */
		document.getElementById("riId").length = 1;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;

	}
	// For Tahsil
	if (comboIndex == 2) {
		document.getElementById("riId").value = 0;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;

	}

	// For R.I Circle
	if (comboIndex == 3) {
		document.getElementById("halkaId").value = 0;
		document.getElementById("villageId").length = 1;

	}
	// For Patwari Halka
	if (comboIndex == 4) {
		document.getElementById("villageId").value = 0;
	}

	if (jspName == 'khasra') {
		document.getElementById("ownerId").value = 0;
		document.getElementById("khasraId").value = 0;
		document.getElementById('khasaraListDiv').style.display = 'none';

	}
	if(jspName == 'adminBoundKhasra'){
		if (comboIndex == 5) {
			document.getElementById("editTehsilId").value = 0;
			document.getElementById("editRiId").length = 1;
			document.getElementById("editHalkaId").length = 1;
			document.getElementById("editVillageId").length = 1;

		}
		// For Tahsil
		if (comboIndex == 6) {
			document.getElementById("editRiId").value = 0;
			document.getElementById("editHalkaId").length = 1;
			document.getElementById("editVillageId").length = 1;

		}
		// For R.I Circle
		if (comboIndex == 7) {
			document.getElementById("editHalkaId").value = 0;
			document.getElementById("editVillageId").length = 1;

		}
		// For Patwari Halka
		if (comboIndex == 8) {
			document.getElementById("editVillageId").value = 0;
		}

	}
	if (jspName == 'mutationSearch') {

		document.getElementById("landTypeId").value = 0;
		document.getElementById('muationListDiv').style.display = 'none';

	}

	if (jspName == 'leaseSearch') {

		document.getElementById("khasraId").value = 0;
		document.getElementById('khasaraListDiv').style.display = 'none';

	}

}

function HideList(jspName) {
	if (jspName == 'khasra') {

		document.getElementById('khasaraListDiv').style.display = 'none';

	}

	if (jspName == 'mutationSearch') {
		document.getElementById('muationListDiv').style.display = 'none';

	}

}

function loadContent2(url, params) {
	// alert('final 2');
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById("container").innerHTML = mypostrequest.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;
			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);

	tabs();
}

function finalSubmit() {
	// alert('final 1');
	loadContent2('finalSaveData.do', 'null');

}

var newwindow;
function popitup(url) {
	// alert('sunil popup');
	// alert('sun final pop');

	newwindow = window
			.showModalDialog(
					url,
					'popUpWindow',
					'height=400,width=500,left=10,top=10,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');

	/*
	 * if (window.focus) { newwindow.focus(); }
	 */

	return false;

}

function commValidation(actionType) {

	var chx = document.getElementsByName("requestId");
	var activityId = document.getElementById("activityId").value;
	// alert("RAdio length:" + chx.length);
	var flag = 0;

	if (actionType == 'khasraCopy' || actionType == 'b1Copy') {
		for ( var i = 0; i < chx.length; i++) {

			if (chx[i].checked) {

				flag = 1;

			}
		}

		if (flag == 0) {
			alert("कृपया रिकॉर्ड चयन करे |");

			return false;
		} else {
			var remark = document.getElementById("remark").value;
			if (activityId == "0") {
				alert("कृपया क्रिया चुने|");
				return false;
			} else if (activityId != "2" && remark < 2) {
				alert("कृपया टिपण्णी भरे|");
				return false;
			} else {
				return true;
			}
			/*
			 * if (remark.length > 2) { if (activityId == "0") { alert("कृपया
			 * क्रिया चुने"); return false; } else { return true; } } else {
			 * alert("कृपया टिपण्णी भरे!"); return false; }
			 */
		}

	}

	/*
	 * for ( var i = 0; i < chx.length; i++) { if (chx[i].checked) { //
	 * alert("flage"); flag = 1; } } if (flag == 0) { alert("कृपया रिकॉर्ड चयन
	 * करे!"); return false; } else { if (actionType == 'muthold' || actionType ==
	 * 'mutreject') { var remarks = document.getElementById("remark").value; //
	 * alert("remarks:" + remarks.length);
	 * 
	 * if (remarks.length > 2) {
	 * 
	 * return true; } else { alert("कृपया टिपण्णी भरे!"); return false; } } if
	 * (actionType == 'mutphysc') { var comboVal =
	 * document.getElementById("currentActivity").value; // alert("comboVal:" +
	 * comboVal);
	 * 
	 * if (comboVal == 0) { // alert("Please Select Assign for verification
	 * to"); alert("कृपया क्रिया चुने"); return false; } else { var remarks =
	 * document.getElementById("remark").value; // alert("remarks:" +
	 * remarks.length);
	 * 
	 * if (remarks.length > 2) {
	 * 
	 * return true; } else { alert("कृपया टिपण्णी भरे!"); return false; } return
	 * true; } } }
	 */
}

function removeFileUploaded(url, divv, params) {

	// alert(" params === " + params);
	// alert(" divv === " + divv);

	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {

		if (xml.readyState == 4) {

			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(divv).innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(divv).innerHTML = xml.responseText;

			} else {
				alert("An error has occured making the request");
			}

		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

/* added by Avdhesh */

function hideSpanNew(fieldError) {

	var hideSpanArea = document.getElementById(fieldError);
	hideSpanArea.style.display = "none";

}

/* added by avdhesh */
function check(id, fieldError) {

	if (document.getElementById(id).value == "0") {
		var fieldError = document.getElementById(fieldError);

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया जानकारी भरें |";
		return false;
	}
	return true;
}

function checktextbox(id, fieldError) {

	if (document.getElementById(id).value == "") {

		var fieldError = document.getElementById(fieldError);
		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया जानकारी भरें |";
		return false;

	}
	return true;
}
function feedbackRequest() {

	var a = check('bugId', 'bugType_fieldError');
	var b = check('activityId', 'activityType_fieldError');
	var c = check('priorityId', 'priorityType_fieldError');
	var d = check('transactionId', 'transactionId_fieldError');
	var e = checktextbox('feedbackRequesterId',
			'feedbackRequesterId_fieldError');
	var f = checktextbox('requestDesciption_txtArea',
			'requestDesciption_errorArea');
	var g = normalizeTextArea('requestDesciption_txtArea',
			'requestDesciption_errorArea');

	// var h = checkForNum("mobileId", "mobileFieldError");
	for ( var i = 0; i < total_rows; i++) {

		if (document.getElementById('fileList[' + i + ']').value != "") {

			val10 = document.getElementById('fileList[' + i + ']').value
					.split('.');

			if ((val10[val10.length - 1] != 'pdf')
					&& (val10[val10.length - 1] != 'jpg')
					&& (val10[val10.length - 1] != 'jpeg')) {

				var fieldError = document
						.getElementById('fileuploadType_fieldError');
				fieldError.style.display = "inline";
				fieldError.innerHTML = "कृपया पीडीएफ , जेपीजी , जेपीईजी फाइलों को अपलोड करने के लिए ब्राउज़ करें।";

				return false;
			}

		}

		if (document.getElementById('fileList[' + i + ']').value == "") {
			var fieldError = document
					.getElementById('fileuploadType_fieldError');
			fieldError.style.display = "inline";
			fieldError.innerHTML = "कृपया अपलोड करने के लिए रिकॉर्ड का चयन करें।";
			return false;
		}

		var filesize = ((document.getElementById('fileList[' + i + ']').files[0].size) / (1024 * 1024))
				.toFixed(2);
		if (filesize > 5) {
			var fieldError = document
					.getElementById('fileuploadType_fieldError');
			fieldError.style.display = "inline";
			fieldError.innerHTML = "कृपया फ़ाइल का साइज़ 5MB से ज्यादा नही दे|";
			return false;
		}

	}

	if (a & b & c & d & e & f & g) {
		document.feedbackRequestform.action = "feedbackSubmit.do";
		document.feedbackRequestform.submit();

		resetfield();
	} else {

		return false;

	}

}

function feedbackHelpDesk() {

	var a = checktextbox('idCalendarTo', 'idCalendarTo_fieldError');
	var b = checktextbox('idCalendarFrom', 'idCalendarFrom_fieldError');
	var c = check('statusCodeId', 'statusCodeId_fieldError');
	var d = dateComparator();

	if (a & b & c & d) {

		loadData('feedbackHelpDesk.do', 'feedbackHelpDeskTable', 'yFrom='
				+ document.getElementById('idCalendarFrom').value + '&yTo='
				+ document.getElementById('idCalendarTo').value
				+ '&statusCodeId='
				+ document.getElementById('statusCodeId').value);
	} else {

		return false;

	}
}

function feedbackEngineerDesk() {

	var a = checktextbox('idCalendarTo', 'idCalendarTo_fieldError');

	var b = checktextbox('idCalendarFrom', 'idCalendarFrom_fieldError');

	var c = check('statusCodeId', 'statusCodeId_fieldError');
	var d = dateComparator();

	if (a & b & c & d) {

		loadData('feedbackEngineerDesk.do', 'feedbackHelpDeskTable', 'yFrom='
				+ document.getElementById('idCalendarFrom').value + '&yTo='
				+ document.getElementById('idCalendarTo').value
				+ '&statusCodeId='
				+ document.getElementById('statusCodeId').value);
	} else {

		return false;

	}
}

function helpdeskView(feedbackId)

{

	document.helpDeskform.action = 'feedbackStatus.do?feedbackId=' + feedbackId;
	document.helpDeskform.submit();

}
function feedbackStatus() {
	var a = checktextbox('feedbackId', 'feedbackId_fieldError');

	if (a) {

		loadData('feedbackStatus.do', 'feedbackStatusId', 'feedbackId='
				+ document.getElementById('feedbackId').value);
	} else {

		return false;

	}
}

function forwardRequest() {
	loadData('feedbackForwardRequest.do', 'forwardRequest', 'feedbackId='
			+ document.getElementById('feedbackId').value + '&statusCodeId='
			+ document.getElementById('statusCodeId').value);

}

function engineerRequest() {
	loadData('feedbackEngineerRequest.do', 'forwardRequest', 'feedbackId='
			+ document.getElementById('feedbackId').value + '&statusCodeId='
			+ document.getElementById('statusCodeId').value);

}
function helpdeskChangeStatusRequest() {

	loadData('feedbackHelpdeskChangeStatusRequest.do', 'forwardRequest',
			'feedbackId=' + document.getElementById('feedbackId').value);

}

// fun0ction to normalize text AREA

function normalizeTextArea(id, fieldError) {

	var html = "";
	var lines = document.getElementById(id).value.split('\n');
	for ( var i = 0; i < lines.length; i++) {
		// code here using lines[i] which will give you each line
		html += lines[i];
		html += " ";
	}
	var wordlen = 200;
	html = html.substring(0, html.length - 1);
	if (html.length > wordlen) {

		var fieldError = document.getElementById(fieldError);
		fieldError.style.display = "inline";
		fieldError.innerHTML = "200 से अधिक शब्दों की अनुमति नहीं है|";

		return false;
	}
	document.getElementById(id).value = html;
	return true;
}

// end method

function feedbackForwardRequest() {

	var a = checktextbox('remarksDesciption_txtArea',
			'remarksDesciption_errorArea');

	var b = check('forwardToId1', 'forwardI_fieldError');
	var c = check('forwardToId', 'forwardId_fieldError');
	var d = normalizeTextArea('remarksDesciption_txtArea',
			'remarksDesciption_errorArea');

	if (a & b & c & d) {

		document.feedbackForwardRequestform.action = "feedbackForward.do";
		document.feedbackForwardRequestform.submit();

	}

	else {
		return false;
	}
}

function feedbackEngineerForwardRequest(designationId) {

	var a = checktextbox('remarksDesciption_txtArea',
			'remarksDesciption_errorArea');

	var b = checktextbox('solutionProvided_txtArea',
			'solutionProvided_errorArea');
	var c = checktextbox('problemIdentified_txtArea',
			'problemIdentified_errorArea');

	var d = normalizeTextArea('remarksDesciption_txtArea',
			'remarksDesciption_errorArea');

	var e = normalizeTextArea('solutionProvided_txtArea',
			'solutionProvided_errorArea');

	var f = normalizeTextArea('problemIdentified_txtArea',
			'problemIdentified_errorArea');

	/*
	 * var g = checktextbox("hours", "error_time");
	 * 
	 * var h = checktextbox("minutes", "error_time");
	 * 
	 * var i = checkForNum("hours", "error_time");
	 * 
	 * var j = checkForNum("minutes", "error_time");
	 * 
	 * var k = toValidateTime("minutes", "error_time");
	 */
	if (a & b & c & d & e & f) {

		if (designationId == '312') {

			if (confirm('क्या  परीक्षण किया है बग फिक्सिंग के बाद|'))

			{

				document.feedbackForwardRequestform.action = "feedbackEngineerForward.do";
				document.feedbackForwardRequestform.submit();

			} else {
				return false;

			}
		} else {
			document.feedbackForwardRequestform.action = "feedbackEngineerForward.do";
			document.feedbackForwardRequestform.submit();
		}
	}

	else {
		return false;
	}
}

function feedbackUnderProcessing() {

	var a = checktextbox('addRemarks_txtArea', 'addRemarks_errorArea');
	var b = check('statusCodeId', 'statusCodeId_fieldError');
	var c = normalizeTextArea('addRemarks_txtArea', 'addRemarks_errorArea');
	if (a & b) {

		document.feedbackForwardRequestform.action = "feedbackHelpdeskUnderProcessingForward.do";
		document.feedbackForwardRequestform.submit();

	}

	else {
		return false;
	}
}

/* till here */

function populateDocs(url, div, params) {
	//alert("populateDocs called.");
	loadData(url, div, params);

}

function populateDhara(url, div, params) {
	// alert("populateDhara called.");
	loadData(url, div, params);

}

function getMutationRequestsList(statusId) {
	// alert("getMutationRequestsList");
	document.requestListform.statusId.value = statusId;
	document.requestListform.currentStatus.value = statusId;
	document.requestListform.action = 'getMutationRequestsList.do';
	document.requestListform.submit();
}

/* mutation request list method for patwari/tehsildar view page */
function getMutationRequestsListPatwari(transactionId, currentActivity,
		statusId, actionType, user) {

	if (user == 'patwari') {
		document.requestListform.action = 'getPatwariMutReqList.do?currentActivity='
				+ currentActivity
				+ '&transactionId='
				+ transactionId
				+ '&statusId=' + statusId + '&actionType=' + actionType;
		// alert("xs:" + document.requestListform.action);
		document.requestListform.submit();
	}
	if (user == 'tehsildar') {
		document.requestListform.action = 'getTeshildarMutReqList.do?currentActivity='
				+ currentActivity
				+ '&transactionId='
				+ transactionId
				+ '&statusId=' + statusId + '&actionType=' + actionType;
		// alert("xs:" + document.requestListform.action);
		/*
		 * alert('transactionId--'+ transactionId + 'currentActivity--'+
		 * currentActivity + 'statusId--'+statusId + 'actionType--'+actionType+
		 * 'user--'+ user);
		 */
		document.requestListform.submit();
	}
}

function HomePage() {

	document.confirmPage.action = "ItHome.do";
	document.confirmPage.submit();
}

/* more methods added by avdhesh */

function checkForNum(id, fieldError) {

	var a = document.getElementById(id).value;
	if (isNaN(a)) {

		var fieldError = document.getElementById(fieldError);

		fieldError.style.display = "inline";
		fieldError.innerHTML = "केवल अंकों का प्रयोग करें |";

		return false;

	}

	else {

		return true;

	}
}

/* jyotsna */

function uncheck() {
	document.getElementById("check1").checked = false
}
function toValidateTime(id, fieldError) {
	var a = document.getElementById(id).value;

	if (a.charAt(0) > 5) {

		var fieldError = document.getElementById(fieldError);

		fieldError.style.display = "inline";
		fieldError.innerHTML = "अधिक से अधिक 59 मिनट भरें | ";
		return false;
	} else {

		return true;

	}

}

function approveRequest(field) {

	var khasraId = 0;

	var count = 0;

	if (field == 2) {

		var chx = document.getElementsByName("requestId");

		for ( var i = 0; i < chx.length; i++) {
			if (chx[i].checked) {

				var requestIdKhId = chx[i].value;
				var khara = requestIdKhId.split('@');
				requestId = khara[0];
				khasraId = khara[1];

				count++;
			}

		}

		// loadContent('tehsildarAppovalRequest.do','&khasraId='+ khasraId);

		if (count > 0) {
			loadData('tehsildarAppovalRequest.do', 'apprvalList', '&khasraId='
					+ khasraId);

		}

	}

}

function mobileValidation(field, fieldError) {
	var mobileNo = document.getElementById(field).value;

	var fieldError = document.getElementById(fieldError);

	if (mobileNo.length > 0 && mobileNo.charAt(0) == "0") {

		fieldError.style.display = "inline";
		fieldError.innerHTML = "मोबाइल न. 0 के साथ प्रारंभ नहीं किया जा सकता|";
		return false;

	}

	else if (isNaN(mobileNo)) {

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया मोबाइल न. केवल अंकों में दर्ज करें|";
		return false;

	} else if (mobileNo.length != 10) {

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें|";
		return false;

	} else {

		return true;

	}

}

/* till-here */
function fillLoanCloseDate(payDateValue) {

	// alert("called his" + payDateValue);

	document.getElementById("loanOrderDate").value = payDateValue;
}
function callfnValidateFP() {
	callfnValidate(document.getElementById('message').value);
}

/* more methods added by avdhesh for grievance */

/* more methods added by avdhesh */

function changeOnReopen() {

	var a = document.getElementById('statusCodeId').value;

	if ("ST06" == a) {

		loadData('feedbackForwardRequest.do', 'changeOnReopen', 'feedbackId='
				+ document.getElementById('feedbackId').value
				+ '&statusCodeId='
				+ document.getElementById('statusCodeId').value);

		// document.getElementById('changeOnReopen').style.visibility =
		// 'visible';
		document.getElementById('submitbtn').style.visibility = 'hidden';
		document.getElementById('addRemarks_txtArea').style.visibility = 'hidden';
		document.getElementById('remarks').style.visibility = 'hidden';
		document.getElementById('addRemarks_errorArea').style.visibility = 'hidden';
		showSpan('changeOnReopen');
	}

	else {
		hideSpan('changeOnReopen');
		document.getElementById('submitbtn').style.visibility = 'visible';
		document.getElementById('addRemarks_txtArea').style.visibility = 'visible';
		document.getElementById('remarks').style.visibility = 'visible';
		document.getElementById('addRemarks_errorArea').style.visibility = 'visible';
	}

}

function grievanceFormSubmit() {

	var a = checktextbox("grievanceRequesterId",
			"grievanceRequesterId_fieldError");
	var b = mobileValidation("mobileId", "mobileId_fieldError");

	var email = document.khasraform.mailId.value;
	// var c = ValidateEmailAddress(email);

	var d = check("districtId", "districtError");
	var e = check("tehsilId", "tehsilError");
	var f = check("riId", "riError");
	var g = check("villageId", "villageError");
	var h = check("halkaId", "halkaError");

	var i = checktextbox('requestDesciption_txtArea',
			'requestDesciption_errorArea');
	var j = normalizeTextArea('requestDesciption_txtArea',
			'requestDesciption_errorArea');

	var k = checktextbox('address_txtArea', 'address_errorArea');
	var l = normalizeTextArea('address_txtArea', 'address_errorArea');
	var flag = document.khasraform.flagId.value;

	var m = true;
	var n = true;
	/*
	 * if (flag == '0001') {
	 * 
	 * var m = checktextbox('previousGrievanceId1', 'previousId_fieldError');
	 * var n = checktextbox('idCalendarPrevious1', 'previousDate_fieldError'); }
	 * else {
	 * 
	 * m = true; n = true; }
	 */

	var o = check('transactionId', 'transactionId_fieldError');
	var p = check('departmentId', 'departmentId_fieldError');
	var q = check('userId', 'userError');

	var r;

	if (document.getElementById("mailId").value == "") {

		r = true;
		// alert(r);
	}

	else {

		r = EmailAddressValidator('mailId', 'mailId_fieldError');

		// alert(r);
	}

	for ( var i = 0; i < total_rows; i++) {

		if (document.getElementById('fileList[' + i + ']').value != "") {

			val10 = document.getElementById('fileList[' + i + ']').value
					.split('.');

			if ((val10[val10.length - 1] != 'pdf')
					&& (val10[val10.length - 1] != 'jpg')
					&& (val10[val10.length - 1] != 'jpeg')) {

				var fieldError = document
						.getElementById('fileuploadType_fieldError');
				fieldError.style.display = "inline";
				fieldError.innerHTML = "कृपया पीडीएफ , जेपीजी , जेपीईजी फाइलों को अपलोड करने के लिए ब्राउज़ करें।";

				return false;
			}

			var filesize = ((document.getElementById('fileList[' + i + ']').files[0].size) / (1024 * 1024))
					.toFixed(2);

			if (filesize > 5) {
				var fieldError = document
						.getElementById('fileuploadType_fieldError');
				fieldError.style.display = "inline";
				fieldError.innerHTML = "फ़ाइल का साइज़ 5MB से ज्यादा नही हो सकता |";
				return false;
			}

		}
	}

	if (a & b & d & e & f & g & h & i & j & k & l & m & n & o & p & q & r) {

		document.khasraform.submit();

	} else {

		return false;

	}

}

function changeFlag(flag, value) {
	var a = value;

	document.getElementById(flag).value = a;

}

function grievanceTable() {

	var a = checktextbox('idCalendarTo', 'idCalendarTo_fieldError');

	var b = checktextbox('idCalendarFrom', 'idCalendarFrom_fieldError');

	var c = check('statusCodeId', 'statusCodeId_fieldError');

	var d = dateComparator();

	if (a & b & c & d) {

		loadData('grievanceTable.do', 'grievanceTable', 'yFrom='
				+ document.getElementById('idCalendarFrom').value + '&yTo='
				+ document.getElementById('idCalendarTo').value
				+ '&statusCodeId='
				+ document.getElementById('statusCodeId').value);
	} else {

		return false;

	}
}

function grievanceDetailView(Id) {

	document.grievanceTableform.action = 'grievanceTableDetail.do?Id=' + Id;
	document.grievanceTableform.submit();

}

function pendingGrievanceControl(flag) {

	if (flag == '102') {
		showSpan('departmentUserList');
		hideSpan('submitbtn1');

		loadData('getDepartmentUserList.do', 'departmentUserList',
				'grievanceId=' + document.getElementById('gvId').value);

	}

	else {

		showSpan('submitbtn1');
		hideSpan('departmentUserList');

	}

}

function grievanceForward() {

	document.getElementById('statusCodeFlag').value = 'ST02';

	var a = checktextbox('addRemarks_txtArea', 'addRemarks_errorArea');
	var b = check('forwardToId', 'forwardId_fieldError');
	var c = normalizeTextArea('addRemarks_txtArea', 'addRemarks_errorArea');
	if (a & b & c) {

		document.pendingGvform.action = 'grievanceForward.do';
		document.pendingGvform.submit();

	} else {

		return false;
	}
}

function grievanceUnderProcessing() {
	document.getElementById('statusCodeFlag').value = 'ST05';
	var a = checktextbox('addRemarks_txtArea', 'addRemarks_errorArea');
	var b = normalizeTextArea('addRemarks_txtArea', 'addRemarks_errorArea');
	if (a & b) {

		document.pendingGvform.action = 'grievanceForward.do';
		document.pendingGvform.submit();
	} else {

		return false;
	}
}

function grievanceStatus() {

	var a = checktextbox('grievanceId', 'grievanceId_fieldError');

	if (a) {

		loadData('grievanceStatus.do', 'grievanceStatusId', 'Id='
				+ document.getElementById('grievanceId').value);

	}

}
function resetGrievance() {
	document.khasraform.userId.value = "0";
	document.khasraform.tehsilId.value = "0";
	document.khasraform.riId.value = "0";
	document.khasraform.halkaId.value = "0";
	document.khasraform.villageId.value = "0";
	document.khasraform.khasraId.value = "0";
}

function grievanceClose() {
	var a = checktextbox('addRemarks_txtArea', 'addRemarks_errorArea');
	var b = normalizeTextArea('addRemarks_txtArea', 'addRemarks_txtArea');
	if (a & b) {

		document.pendingGvform.action = 'grievanceClosed.do';
		document.pendingGvform.submit();

	}

}

/* till-here */

function SubmitFormFP() {
	// alert("called after Finger Print");
	SubmitForm('khasraOwnerLinkingForm', 'showConfirmationPage.do');
}

function loanAddModify() {
	inputOne = document.getElementById("searchRecord");
	inputSubmit = document.getElementById("finalSubmit");
	inputSubmitOne = document.getElementById("finalSubmitOne");
	var isSelected = false;
	for (i = 0; i < document.taxLoanform.elements.length; i++) {
		if (document.taxLoanform.elements[i].type == "radio") {
			if (document.taxLoanform.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {
		alert("संशोधन के लिए कम से कम एक रिकॉर्ड का चयन करें |");
		if (inputOne.value == "") {
			inputSubmit.style.display = "none";
			inputSubmitOne.style.display = "none";
		}

		return false;
	} else {
		var requestType = "edit";
		var val = $("input:radio[name='radioid']:checked").val();
		/* alert("val" + val); */
		loadContent('viewKhasraLoan.do', '&sequenceNo1=' + val + '&editValue='
				+ requestType);
		return true;
	}
}
function personalInfoModify(field) {

	var ownerIdSeq = document.getElementById(field).value;
	loadContent('personalInfoModify.do', '&ownerIdSeq=' + ownerIdSeq);

}

function loanPerformAction() {

	var isSelected = false;
	for ( var i = 0; i < document.taxLoanform.elements.length; i++) {
		if (document.taxLoanform.elements[i].type == "radio") {
			if (document.taxLoanform.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {
		alert(" हटाने  के लिए कम से कम एक रिकॉर्ड का चयन करें |");
		return false;

	} else {

		var val = $("input:radio[name='radioid']:checked").val();
		/* alert("val" + val); */
		loadContent('deleteLoanSearch.do', '&sequenceNo1=' + val);

		return true;
	}
}

function loanMutationUpdate(requestId, khasraId) {

	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	if (bankId == 0) {
		alert("कृप्या  बैंक  चयन करें |");
		return false;
	}

	var bankAddress = document.taxLoanform.bankAddress.value;
	if (bankAddress == null || bankAddress == "") {
		alert(" बैंक का पता  दर्ज करें |");
		return false;
	}

	var loanAmount = document.taxLoanform.loanAmount.value;
	if (loanAmount == null || loanAmount == "") {
		alert("कृप्या ऋण की राशि  दर्ज करें |");
		return false;
	}

	var loanDate = document.taxLoanform.loanDate.value;
	var loanPayDate = document.taxLoanform.loanPayDate.value;
	var today = document.taxLoanform.todayDate.value;

	var date_to_dob = new Date(loanDate);
	var date_to_authd = new Date(loanPayDate);

	var beforeDate = today - date_to_dob.getTime();
	var afterDate = today - date_to_authd.getTime();
	if (loanDate == null || loanDate == "") {
		alert("कृप्या ऋण तारीख दर्ज करें |");
		return false;
	}

	if (beforeDate <= 0) {
		alert("कृप्या ऋण तारीख आज की तारीख से कम  होना चाहिए |");
		return false;
	}

	if (loanPayDate == null || loanPayDate == "") {
		alert("कृप्या ऋण भुगतान तारीख दर्ज करें |");
		return false;
	}

	if (afterDate >= 0) {
		alert("कृप्या ऋण भुगतान की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var officerName = document.taxLoanform.officerName.value;
	if (officerName == null || officerName == "") {
		alert("कृप्या अधिकारी का नाम दर्ज करें |");
		return false;
	}

	var officerDesignation = document.taxLoanform.officerDesignation.value;
	if (officerDesignation == null || officerDesignation == "") {
		alert("कृप्या अधिकारी पद दर्ज करें |");
		return false;
	}
	var loanOrderNo = document.taxLoanform.loanOrderNo.value;
	if (loanOrderNo == null || loanOrderNo == "") {
		alert("कृप्या ऋण क्रम संख्या दर्ज करें |");
		return false;
	}
	var loanOrderDate = document.taxLoanform.loanOrderDate.value;
	var date_to_order = new Date(loanOrderDate);
	var closeDate = today - date_to_order.getTime();
	if (loanOrderDate == null || loanOrderDate == "") {
		alert("कृप्या ऋण   बंद दिनांक  दर्ज करें |");
		return false;
	}

	if (closeDate >= 0) {
		alert("कृप्या ऋण  बंद  की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var loanAccountNo = document.taxLoanform.loanAccountNo.value;
	if (loanAccountNo == null || loanAccountNo == "") {
		alert("कृप्या ऋण खाता संख्या दर्ज करें |");
		return false;
	}
	var remark = document.taxLoanform.remark.value;
	if (remark == null || remark == "") {
		alert("कृप्या ऋण टिप्पणी दर्ज करें |");
		return false;
	}
	var type = "update";
	/*
	 * loadContent('updateLoanInformation.do', '&requestId=' + requestId +
	 * '&khasraId=' + khasraId + '&type=' + type + '&bankId=' + bankId +
	 * '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount +
	 * '&loanDate=' + loanDate + '&loanPayDate=' + loanPayDate + '&officerName=' +
	 * officerName + '&officerDesignation=' + officerDesignation +
	 * '&loanOrderNo=' + loanOrderNo + '&loanOrderDate=' + loanOrderDate +
	 * '&loanAccountNo=' + loanAccountNo + '&remark=' + remark);
	 */
	/*
	 * String URL="updateLoanInformation.do", "&requestId=" + requestId +
	 * "&khasraId="+ khasraId +"type=" + type+"&bankId=" + bankId +
	 * "&bankAddress="+ bankAddress + "&loanAmount=" + loanAmount +
	 * "&loanDate="+ loanDate + "&loanPayDate=" + loanPayDate + "&officerName="+
	 * officerName + "&officerDesignation=" + officerDesignation+
	 * "&loanOrderNo=" + loanOrderNo + "&loanOrderDate=" + loanOrderDate+
	 * "&loanAccountNo=" + loanAccountNo + "&remark=" + remark;
	 */

	document.taxLoanform.action = 'updateLoanInformation.do?requestId='
			+ requestId + '&khasraId=' + khasraId + '&type=' + type
			+ '&bankId=' + bankId + '&bankAddress=' + bankAddress
			+ '&loanAmount=' + loanAmount + '&loanDate=' + loanDate
			+ '&loanPayDate=' + loanPayDate + '&officerName=' + officerName
			+ '&officerDesignation=' + officerDesignation + '&loanOrderNo='
			+ loanOrderNo + '&loanOrderDate=' + loanOrderDate
			+ '&loanAccountNo=' + loanAccountNo + '&remark=' + remark;

	document.taxLoanform.submit();

}

function loanMutation(requestId, khasraId) {

	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	if (bankId == 0) {
		alert("कृप्या बैंक का चयन करें |");
		return false;
	}

	var bankAddress = document.taxLoanform.bankAddress.value;
	if (bankAddress == null || bankAddress == "") {
		alert("कृप्या बैंक का पता  दर्ज करें |");
		return false;
	}

	var loanAmount = document.taxLoanform.loanAmount.value;
	if (loanAmount == null || loanAmount == "") {
		alert("कृप्या ऋण की राशि  दर्ज करें |");
		return false;
	}

	var loanDate = document.taxLoanform.loanDate.value;
	var loanPayDate = document.taxLoanform.loanPayDate.value;
	var today = document.taxLoanform.todayDate.value;

	var date_to_dob = new Date(loanDate);
	var date_to_authd = new Date(loanPayDate);

	var beforeDate = today - date_to_dob.getTime();
	var afterDate = today - date_to_authd.getTime();
	if (loanDate == null || loanDate == "") {
		alert("कृप्या ऋण तारीख दर्ज करें |");
		return false;
	}

	if (beforeDate <= 0) {
		alert("कृप्या ऋण तारीख आज की तारीख से कम  होना चाहिए |");
		return false;
	}

	if (loanPayDate == null || loanPayDate == "") {
		alert("ऋण भुगतान तारीख दर्ज करें ");
		return false;
	}

	if (afterDate >= 0) {
		alert("कृप्या ऋण भुगतान की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var officerName = document.taxLoanform.officerName.value;
	if (officerName == null || officerName == "") {
		alert("कृप्या अधिकारी का नाम दर्ज करें |");
		return false;
	}

	var officerDesignation = document.taxLoanform.officerDesignation.value;
	if (officerDesignation == null || officerDesignation == "") {
		alert("कृप्या अधिकारी पद दर्ज करें |");
		return false;
	}
	var loanOrderNo = document.taxLoanform.loanOrderNo.value;
	if (loanOrderNo == null || loanOrderNo == "") {
		alert("कृप्या ऋण क्रम संख्या दर्ज करें |");
		return false;
	}
	var loanOrderDate = document.taxLoanform.loanOrderDate.value;
	var date_to_order = new Date(loanOrderDate);
	var closeDate = today - date_to_order.getTime();
	if (loanOrderDate == null || loanOrderDate == "") {
		alert("कृप्या ऋण   बंद दिनांक  दर्ज करें |");
		return false;
	}
	if (closeDate >= 0) {
		alert("कृप्या ऋण  बंद  की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var loanAccountNo = document.taxLoanform.loanAccountNo.value;
	if (loanAccountNo == null || loanAccountNo == "") {
		alert(" कृप्या ऋण खाता संख्या दर्ज करें |");
		return false;
	}
	var remark = document.taxLoanform.remark.value;
	if (remark == null || remark == "") {
		alert("कृप्या ऋण टिप्पणी दर्ज करें |");
		return false;
	}
	var type = "add";
	/*
	 * loadContent('updateLoanInformation.do', '&requestId=' + requestId +
	 * '&khasraId=' + khasraId + '&type=' + type + '&bankId=' + bankId +
	 * '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount +
	 * '&loanDate=' + loanDate + '&loanPayDate=' + loanPayDate + '&officerName=' +
	 * officerName + '&officerDesignation=' + officerDesignation +
	 * '&loanOrderNo=' + loanOrderNo + '&loanOrderDate=' + loanOrderDate +
	 * '&loanAccountNo=' + loanAccountNo + '&remark=' + remark);
	 */
	document.taxLoanform.action = 'updateLoanInformation.do?requestId='
			+ requestId + '&khasraId=' + khasraId + '&type=' + type
			+ '&bankId=' + bankId + '&bankAddress=' + bankAddress
			+ '&loanAmount=' + loanAmount + '&loanDate=' + loanDate
			+ '&loanPayDate=' + loanPayDate + '&officerName=' + officerName
			+ '&officerDesignation=' + officerDesignation + '&loanOrderNo='
			+ loanOrderNo + '&loanOrderDate=' + loanOrderDate
			+ '&loanAccountNo=' + loanAccountNo + '&remark=' + remark;

	document.taxLoanform.submit();

}

function loanAddModifyMutation(requestId, khasraId) {
	inputOne = document.getElementById("searchRecord");
	inputSubmit = document.getElementById("finalSubmit");
	inputSubmitOne = document.getElementById("finalSubmitOne");
	var isSelected = false;
	for ( var i = 0; i < document.taxLoanform.elements.length; i++) {
		if (document.taxLoanform.elements[i].type == "radio") {
			if (document.taxLoanform.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {
		alert("संशोधन के लिए कम से कम एक रिकॉर्ड का चयन करें |");
		if (inputOne.value == "") {
			inputSubmit.style.display = "none";
			inputSubmitOne.style.display = "none";
		}

		return false;
	} else {

		var val = $("input:radio[name='radioid']:checked").val();

		document.taxLoanform.action = "viewLoanInformationDetails.do?requestId="
				+ requestId + "&khasraId=" + khasraId + "&sequenceNo1=" + val;
		document.taxLoanform.submit();
		// javascript:loadContent('viewLoanInformationDetails.do', '&requestId='
		// +requestId+ '&khasraId=' + khasraId + '&sequenceNo1=' + val);
		// return true;

	}

}

function loanPerformActionMutation(requestId, khasraId) {

	var isSelected = false;
	for ( var i = 0; i < document.taxLoanform.elements.length; i++) {
		if (document.taxLoanform.elements[i].type == "radio") {
			if (document.taxLoanform.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {
		alert("हटाने  के लिए कम से कम एक रिकॉर्ड का चयन करें |");
		return false;

	} else {
		var val = $("input:radio[name='radioid']:checked").val();
		// loadContent('deleteLoanMutation.do', '&requestId=' + requestId +
		// '&khasraId=' + khasraId + '&sequenceNo1=' + val);
		document.taxLoanform.action = "deleteLoanMutation.do?requestId="
				+ requestId + "&khasraId=" + khasraId + "&sequenceNo1=" + val;
		document.taxLoanform.submit();
		// return true;
	}
}
function tabs() {

	$("#tabs, #tabsInner").tabs();

}

function editAvedak(action, div, chkri) {

	var radios = document.khasraOwnerLinkingForm.rdbtn;
	var checked = false;

	if (action == "cancel") {
		document.getElementById(div).style.display = "none";
	} else {
		document.getElementById(div).style.display = "block";
		if (isNaN(radios.length)) {
			if (radios.checked) {
				checked = true;
			}
		} else {
			for ( var i = 0; i < radios.length; i++) {
				if (radios[i].checked) {
					checked = true;
					break;
				}
			}
		}
		if (checked) {

			var radioBtnval = $("input:radio[name='rdbtn']:checked").val();
			radioBtnval = 'rdbtn=' + radioBtnval;
			loadDataNew(action, div, chkri, radioBtnval);
		} else {
			alert("कृप्या चेक बॉक्स का चयन करे  |");
			return false;
		}
	}
}

function editAvedakOfDiversion(action, div) {

	var radios = document.patwariDivReqActionForm.rdbtn;

	var checked = false;
	if (isNaN(radios.length)) {
		if (radios.checked) {
			checked = true;
		}
	} else {
		for ( var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				checked = true;
				break;
			}
		}
	}
	if (checked) {

		var radioBtnval = $("input:radio[name='rdbtn']:checked").val();
		radioBtnval = 'rdbtn=' + radioBtnval;
		loadData(action, div, radioBtnval);
	} else {
		alert("कृप्या चेक बॉक्स का चयन करे  ");
		return false;
	}

}
/* method added By avdhesh for grievance and report generation */

function dateComparator() {

	var toDate = document.getElementById('idCalendarTo').value;
	var fromDate = document.getElementById('idCalendarFrom').value;
	var today = document.getElementById('todayDate').value;

	var toDatevar = toDate.split("/");
	var fromDatevar = fromDate.split("/");
	var todayvar = today.split("/");

	var date_to = new Date(toDatevar[2], toDatevar[1] - 1, toDatevar[0]);
	var date_from = new Date(fromDatevar[2], fromDatevar[1] - 1, fromDatevar[0]);
	var date_today = new Date(todayvar[2], todayvar[1] - 1, todayvar[0]);

	var beforeDate = date_today.getTime() - date_to.getTime();
	var afterDate = date_today.getTime() - date_from.getTime();
	var diffDate = date_to.getTime() - date_from.getTime();

	if (date_today < date_from) {
		var fieldError = document.getElementById('idCalendarTo_fieldError');
		fieldError.style.display = "inline";
		fieldError.innerHTML = "आज की तारीख से कम  होना चाहिए |";
		return false;
	}

	if (date_today < date_to) {
		var fieldError = document.getElementById('idCalendarFrom_fieldError');
		fieldError.style.display = "inline";
		fieldError.innerHTML = "आज की तारीख से कम  होना चाहिए |";
		return false;
	}

	if (date_from > date_to) {
		var fieldError = document.getElementById('idCalendarFrom_fieldError');
		fieldError.style.display = "inline";
		fieldError.innerHTML = "यह तारीख तक की तारीख से कम  होना चाहिए |";
		return false;
	}

	else {

		return true;
	}

}

function grievanceAllTable() {

	var a = check('statusCodeId', 'statusCodeId_fieldError');

	if (a) {

		loadData('grievanceAllTable.do', 'grievanceTable', 'statusCodeId='
				+ document.getElementById('statusCodeId').value);
	} else {

		return false;

	}
}

function grievanceViewOnly(Id) {

	loadData('grievanceDetailList.do', 'grievanceRecord', 'Id=' + Id);

}

function checkItReport() {

	if (document.getElementById('DISTRICT').checked == false) {
		document.getElementById('TEHSIL').checked = false;
		document.getElementById('RICIRCLE').checked = false;
		document.getElementById('PATWARIHALKA').checked = false;
		document.getElementById('VILLAGE').checked = false;
	}

	if (document.getElementById('TEHSIL').checked == false) {

		document.getElementById('RICIRCLE').checked = false;
		document.getElementById('PATWARIHALKA').checked = false;
		document.getElementById('VILLAGE').checked = false;
	}

	if (document.getElementById('RICIRCLE').checked == false) {

		document.getElementById('PATWARIHALKA').checked = false;
		document.getElementById('VILLAGE').checked = false;
	}

	if (document.getElementById('PATWARIHALKA').checked == false) {
		document.getElementById('VILLAGE').checked = false;

	}

}

/* till here */

function viewRemarks(action, div, param) {
	// alert("remarks called");
	// document.getElementById(div).className = "khasradetail";
	$(".khasraremarks").hide();
	$("#" + div).show();
	// document.getElementById(div).style.display = "block";
	loadData(action, div, param);

}

function saveOwnerInfo() {

	document.khasraOwnerLinkingForm.action = "saveMutationChanges.do";
	document.khasraOwnerLinkingForm.submit();

}

/* methods aded by avdhesh for report generation */

function reportGenerate(dropParameterString, textParameterString,
		dateParameterString) {
	hideSpan('reportGenerated');

	var indexValue1 = document.getElementById('reportId').selectedIndex;

	var optionsList1 = document.getElementById("reportId").options;
	var reportTextValue = optionsList1[indexValue1].text;

	document.getElementById('reportName').value = reportTextValue;

	var checkValid = 0;
	var a = dropParameterString;
	var b = textParameterString;
	var c = dateParameterString;

	var d = document.getElementById('dropAliasId').value;
	var e = document.getElementById('textAliasId').value;

	var dropArray1 = a.split("#");

	var textArray1 = b.split("#");

	var dateArray1 = c.split("#");

	var dropAliasArray1 = d.split("#");

	var textAliasArray1 = e.split("#");

	for ( var x = 0; x < dropArray1.length - 1; x++) {

		if (document.getElementById(dropArray1[x]).value == "00") {
			// alert("please select " + dropArray1[x]);
			alert("कृपया " + dropAliasArray1[x] + " चयन करे");

			checkValid++;
			return false;
		}

		else {

			var indexValue1 = document.getElementById(dropArray1[x]).selectedIndex;

			var optionsList1 = document.getElementById(dropArray1[x]).options;
			var TextValue = optionsList1[indexValue1].text;

			// var b = +x + +1;

			var a = dropArray1[x] + 1;

			document.getElementById(a).value = TextValue;
		}

	}

	for ( var y = 0; y < textArray1.length - 1; y++) {

		if (document.getElementById(textArray1[y]).value == "") {
			// alert("please fill details " + textArray1[y]);
			alert("कृपया" + textAliasArray1[y] + "में  जानकारी भरे ");

			checkValid++;
			return false;
		}

	}

	/*
	 * for ( var z = 0; z < dateArray1.length - 1; z++) {
	 * 
	 * if (document.getElementById(dateArray1[z]).value == "") { alert("please
	 * fill details " + dateArray1[z]); checkValid++; } }
	 */
	// alert(dateArray1.length);
	if (dateArray1.length > 2) {

		var toDate = document.getElementById(dateArray1[1]).value;
		var fromDate = document.getElementById(dateArray1[0]).value;

		// alert("a"+toDate+fromDate);
		var toDatevar = toDate.split("/");
		var fromDatevar = fromDate.split("/");

		var date_to = new Date(toDatevar[2], toDatevar[1] - 1, toDatevar[0]);
		var date_from = new Date(fromDatevar[2], fromDatevar[1] - 1,
				fromDatevar[0]);

		if (date_from > date_to) {

			checkValid++;
			alert("यह तारीख तक की तारीख से कम  होना चाहिए |");
			return false;
		}

	}

	if (checkValid == 0) {

		document.getElementById('viewId').onchange();
		showSpan('reportGenerated');

		// alert("now the pdf button will be displayed");
		var reportSize = parseInt(document.getElementById('reportsize').value);
		var minColumnFlag = parseInt(document.getElementById('minColumnFlag').value);
		var excelFlag = document.getElementById('excelFlag').value;

		// alert(minColumnFlag);
		// alert(reportSize);

		if (reportSize > minColumnFlag) {

			showSpan('viewPdf');

			if (excelFlag == 1)
				showSpan('viewExcel');
		} else {

			hideSpan('viewPdf');

			if (excelFlag == 1)
				hideSpan('viewExcel');

		}
	}

	else {
	}
}

function toGetParam(bodyLoadId, reportId, reportSize, targetPdf) {
	// alert("i loop");

	if (bodyLoadId != '0') {
		// alert("in loop");
		loadData('getParamList.do', 'reportAreaDiv', 'reportId=' + reportId
				+ '&reportSize=' + reportSize + '&targetPdf=' + targetPdf);

	}

}
/* till here */

/* methods added by jyotsna for add table grid of diversion */
function addRowForDiversion(tableID, name, SelectableControlType,
		arrayColumnValue) {
	try {

		var table = document.getElementById(tableID);

		if (table.id == 'premiumDetailsTbl') {
			if (arrayColumnValue) {
				var table = document.getElementById(tableID);
				var startuprow = table.getElementsByTagName('tr')[0];
				var cells = startuprow.getElementsByTagName('th');

				var cellCount = cells.length;

				var row = table.insertRow(table.rows.length);

				for ( var i = 0; i < cellCount; i++) {

					var cell = row.insertCell(i);
					var element = document.createElement("input");

					if (i == 0 && SelectableControlType != null) {
						element.type = SelectableControlType;
						element.name = name;

					} else {
						if (i == 17 || i == 18) {
							element.type = "hidden";
						} else {
							element.type = "text";
						}
					}

					element.setAttribute("value", arrayColumnValue[i]);
					element.setAttribute("readonly", "true");
					element.setAttribute("size", cells[i].width);

					cell.appendChild(element);
				}
			}

		}

		else if (tableID == 'mutOwnerDetailsTbl') {

			// alert("jjjjjjjj"+document.getElementById('premiumDetailsTblhiddenData').value);
			if (arrayColumnValue) {
				var table = document.getElementById(tableID);
				var startuprow = table.getElementsByTagName('tr')[0];
				var cells = startuprow.getElementsByTagName('th');

				var cellCount = cells.length;
				// alert(cellCount);
				var row = table.insertRow(table.rows.length);

				for ( var i = 0; i < cellCount; i++) {

					var cell = row.insertCell(i);
					var element = document.createElement("input");

					if (i == 0 && SelectableControlType != null) {
						element.type = SelectableControlType;
						element.name = name;
						element.id = "chk";
					} else {
						/*
						 * if (i == 22 || i == 23 || i == 24 || i == 25) {
						 * element.type = "hidden"; } else {
						 */
						if (i == 23 || i == 24 || i == 25 || i == 26 || i == 27
								|| i == 28 || i == 29) {
							element.type = "hidden";

						} else {
							element.type = "text";
						}

						// }
					}

					element.setAttribute("value", arrayColumnValue[i]);
					element.setAttribute("readonly", "true");
					element.setAttribute("size", cells[i].width);

					cell.appendChild(element);
				}
			}

		} else if (tableID == 'orderDetailsTbl') {

			if (arrayColumnValue) {
				var table = document.getElementById(tableID);
				var startuprow = table.getElementsByTagName('tr')[0];
				var cells = startuprow.getElementsByTagName('th');

				var cellCount = cells.length;

				var row = table.insertRow(table.rows.length);

				for ( var i = 0; i < cellCount; i++) {

					var cell = row.insertCell(i);
					var element = document.createElement("input");

					if (i == 0 && SelectableControlType != null) {
						element.type = SelectableControlType;
						element.name = name;

					} else {
						if (i == 5) {
							element.type = "hidden";
						} else {
							element.type = "text";
						}
					}

					element.setAttribute("value", arrayColumnValue[i]);
					element.setAttribute("readonly", "true");
					element.setAttribute("size", cells[i].width);

					cell.appendChild(element);
				}
			}

		}

		else {
			if (arrayColumnValue) {

				var table = document.getElementById(tableID);
				var startuprow = table.getElementsByTagName('tr')[0];
				var cells = startuprow.getElementsByTagName('th');

				var cellCount = cells.length;

				var row = table.insertRow(table.rows.length);
				for ( var i = 0; i < cellCount; i++) {

					var cell = row.insertCell(i);
					var element = document.createElement("input");

					if (i == 0 && SelectableControlType != null) {
						element.type = SelectableControlType;
						element.name = name;

					} else
						element.type = "text";

					element.setAttribute("value", arrayColumnValue[i]);
					element.setAttribute("readonly", "true");
					element.setAttribute("size", cells[i].width);

					cell.appendChild(element);
				}
			}
		}

	} catch (e) {
		(e);
	}
}

function ValidateTableforDiversion(tableID) {
	var table = document.getElementById(tableID);
	var arrayColumnValue = new Array();

	if (table.id == 'orderDetailsTbl') {
		deleteRowForDiversion(tableID);
		var orderDetailsTblhiddenData = document
				.getElementById('orderDetailsTblhiddenData').value;
		var orderNo = document.getElementById('orderNo').value;
		var orderDate = document.getElementById('orderDate').value;
		var orderRemarks = document.getElementById('orderRemarks').value;
		var indexValue1 = document.getElementById('courtId').selectedIndex;
		var optionsList1 = document.getElementById("courtId").options;
		var courtValue = optionsList1[indexValue1].text;
		var courtId = optionsList1[indexValue1].value;
		/*
		 * if (IsDuplicateRow(tableID) != true) {
		 * 
		 * alert("डुप्लिकेट नहीं किया जा सकता."); return false; }
		 */

		/*
		 * if (document.getElementById('khasraNo').value == '') { alert("खसरा
		 * क्रमांक रिक्त नहीं हो सकता"); return false; } if
		 * (document.getElementById('landusage').value == '') { alert("भूमि
		 * उपयोग का प्रकार रिक्त नहीं हो सकता"); return false; }
		 * 
		 * if (document.getElementById('khetra').value == '') {
		 * alert("व्यप्वर्तीत क्षेत्र वर्ग फुट मे रिक्त नहीं हो सकता"); return
		 * false; }
		 */

		var hiddnField = orderNo + '^' + orderDate + '^' + orderRemarks + '^'
				+ courtValue + '^' + courtId;
		document.getElementById('orderDetailsTblhiddenData').value = hiddnField
				+ '#' + orderDetailsTblhiddenData;

		// alert(document.getElementById('orderDetailsTblhiddenData').value);

		arrayColumnValue[0] = hiddnField;
		arrayColumnValue[1] = orderNo;
		arrayColumnValue[2] = orderDate;
		arrayColumnValue[3] = orderRemarks;
		arrayColumnValue[4] = courtValue;
		arrayColumnValue[5] = courtId;

		return arrayColumnValue;
	}

	if (table.id == 'premiumDetailsTbl') {
		deleteRowForDiversion(tableID);

		var premiumDetailsTblhiddenData = document
				.getElementById('premiumDetailsTblhiddenData').value;

		var premiumRate = document.getElementById('premiumRate').value;
		var totalPremium = document.getElementById('totalPremium').value;
		var annualRent = document.getElementById('annualRent').value;
		var culPenalty = document.getElementById('culPenalty').value;
		var appPenalty = document.getElementById('appPenalty').value;
		var penaltyPercent = document.getElementById('penaltyPercent').value;
		var bhookhandNo = document.getElementById('bhookhandNo').value;
		var bhookhandArea = document.getElementById('bhookhandArea').value;

		var indexValue1 = document.getElementById('localityId').selectedIndex;
		var optionsList1 = document.getElementById("localityId").options;
		var localityValue = optionsList1[indexValue1].text;
		var localityId = optionsList1[indexValue1].value;
		var indexValue1 = document.getElementById('landuseType').selectedIndex;
		var optionsList1 = document.getElementById("landuseType").options;
		var landuseType = optionsList1[indexValue1].text;
		var landuseTypeId = optionsList1[indexValue1].value;
		var panchayatkar = document.getElementById('panchayatkar').value;
		var upkar = document.getElementById('upkar').value;
		var prevYearBakaya = document.getElementById('prevYearBakaya').value;
		var totalAmt = document.getElementById('totalAmount').value;
		var bandovast = document.getElementById('bandovast').value;
		var sheetNo = document.getElementById('sheetNo').value;

		var hiddnField = premiumRate + '^' + totalPremium + '^' + annualRent
				+ '^' + culPenalty + '^' + appPenalty + '^' + penaltyPercent
				+ '^' + bhookhandNo + '^' + bhookhandArea + '^' + localityValue
				+ '^' + landuseType + '^' + panchayatkar + '^' + upkar + '^'
				+ prevYearBakaya + '^' + totalAmt + '^' + bandovast + '^'
				+ sheetNo + '^' + localityId + '^' + landuseTypeId;

		document.getElementById('premiumDetailsTblhiddenData').value = hiddnField
				+ '#' + premiumDetailsTblhiddenData;

		// alert("document.getElementById('premiumDetailsTblhiddenData').value====="+document.getElementById('premiumDetailsTblhiddenData').value);

		arrayColumnValue[0] = hiddnField;
		arrayColumnValue[1] = premiumRate;
		arrayColumnValue[2] = totalPremium;
		arrayColumnValue[3] = annualRent;
		arrayColumnValue[4] = culPenalty;
		arrayColumnValue[5] = appPenalty;
		arrayColumnValue[6] = penaltyPercent;
		arrayColumnValue[7] = bhookhandNo;
		arrayColumnValue[8] = bhookhandArea;
		arrayColumnValue[9] = localityValue;
		arrayColumnValue[10] = landuseType;
		arrayColumnValue[11] = panchayatkar;
		arrayColumnValue[12] = upkar;
		arrayColumnValue[13] = prevYearBakaya;
		arrayColumnValue[14] = totalAmt;
		arrayColumnValue[15] = bandovast;
		arrayColumnValue[16] = sheetNo;
		arrayColumnValue[17] = localityId;
		arrayColumnValue[18] = landuseTypeId;

		return arrayColumnValue;
	}

	if (table.id == 'mutOwnerDetailsTbl') {
		deleteRowForDiversion(tableID);

		var mutOwnerDetailsTblhiddenData = document
				.getElementById('mutOwnerDetailsTblhiddenData').value;

		var requesterNameId = document.getElementById('requesterNameId').value;
		var requesterMiddleNameId = document
				.getElementById('requesterMiddleNameId').value;
		var requesterLastNameId = document
				.getElementById('requesterLastNameId').value;
		var indexValue1 = document.getElementById('relationTypeId').selectedIndex;
		var optionsList1 = document.getElementById("relationTypeId").options;
		var relationTypeValue = optionsList1[indexValue1].text;
		var relationTypeId = optionsList1[indexValue1].value;

		var requesterFatherNameId = document
				.getElementById('requesterFatherNameId').value;

		var indexValue1 = document.getElementById('sexId').selectedIndex;
		var optionsList1 = document.getElementById("sexId").options;
		var sexValue = optionsList1[indexValue1].text;
		var sexId = optionsList1[indexValue1].value;

		var indexValue1 = document.getElementById('casteTypeId').selectedIndex;
		var optionsList1 = document.getElementById("casteTypeId").options;
		var casteTypeValue = optionsList1[indexValue1].text;
		var casteTypeId = optionsList1[indexValue1].value;

		var indexValue1 = document.getElementById('casteNameId').selectedIndex;
		var optionsList1 = document.getElementById("casteNameId").options;
		var casteNameValue = optionsList1[indexValue1].text;
		var casteNameId = optionsList1[indexValue1].value;

		var stdCodeId = document.getElementById('stdCodeId').value;
		var telephoneId = document.getElementById('telephoneId').value;

		// var stdTelNo=stdCodeId+"-"+telephoneId;

		var mobileNoId = document.getElementById('mobileNoId').value;
		var emailId = document.getElementById('emailId').value;
		var commHouseNoId = document.getElementById('commHouseNoId').value;

		var streetArea = document.getElementById('streetAreaId').value;

		var landMarkId = document.getElementById('landMarkId').value;
		var commPostOfcId = document.getElementById('commPostOfcId').value;
		var commThanaId = document.getElementById('commThanaId').value;
		var commVillageId = document.getElementById('commVillageId').value;

		/*
		 * var commTehsilId = document.getElementById('commTehsilId').value; var
		 * commDistrictId = document.getElementById('commDistrictId').value; var
		 * commStateId = document.getElementById('commStateId').value;
		 */

		var indexValue1 = document.getElementById('casteTypeId').selectedIndex;
		var optionsList1 = document.getElementById("casteTypeId").options;
		var casteTypeValue = optionsList1[indexValue1].text;
		var casteTypeId = optionsList1[indexValue1].value;

		var selectedTehsilIndex = document.getElementById('commTehsilId').selectedIndex;
		var optionsList = document.getElementById("commTehsilId").options;
		var commTehsilValue = optionsList[selectedTehsilIndex].text;
		var commTehsilId = optionsList[selectedTehsilIndex].value;
		// alert("commTehsilText:" + commTehsilText);

		var selectedDistrictIndex = document.getElementById('commDistrictId').selectedIndex;
		var optionsList = document.getElementById("commDistrictId").options;
		var commDistrictValue = optionsList[selectedDistrictIndex].text;
		var commDistrictId = optionsList[selectedDistrictIndex].value;

		var selectedstateIndex = document.getElementById('commStateId').selectedIndex;
		var optionsList = document.getElementById("commStateId").options;
		var commStateValue = optionsList[selectedstateIndex].text;
		var commStateId = optionsList[selectedstateIndex].value;

		var commPinCodeId = document.getElementById('commPinCodeId').value;
		var hiddnField = requesterNameId + '^' + requesterMiddleNameId + '^'
				+ requesterLastNameId + '^' + relationTypeValue + '^'
				+ requesterFatherNameId + '^' + sexValue + '^' + casteTypeValue
				+ '^' + casteNameValue + '^' + stdCodeId + '^' + telephoneId
				+ '^' + mobileNoId + '^' + emailId + '^' + commHouseNoId + '^'
				+ streetArea + '^' + landMarkId + '^' + commPostOfcId + '^'
				+ commThanaId + '^' + commVillageId + '^' + commTehsilId + '^'
				+ commDistrictId + '^' + commStateId + '^' + commPinCodeId
				+ '^' + relationTypeId + '^' + sexId + '^' + casteTypeId + '^'
				+ casteNameId;

		document.getElementById('mutOwnerDetailsTblhiddenData').value = hiddnField
				+ '#' + mutOwnerDetailsTblhiddenData;
		// alert("document.getElementById('mutOwnerDetailsTblhiddenData').value"+
		// document.getElementById('mutOwnerDetailsTblhiddenData').value);
		arrayColumnValue[0] = hiddnField;
		arrayColumnValue[1] = requesterNameId;
		arrayColumnValue[2] = requesterMiddleNameId;
		arrayColumnValue[3] = requesterLastNameId;
		arrayColumnValue[4] = relationTypeValue;
		arrayColumnValue[5] = requesterFatherNameId;
		arrayColumnValue[6] = sexValue;
		arrayColumnValue[7] = casteTypeValue;
		arrayColumnValue[8] = casteNameValue;
		arrayColumnValue[9] = stdCodeId;
		arrayColumnValue[10] = telephoneId;
		arrayColumnValue[11] = mobileNoId;
		arrayColumnValue[12] = emailId;
		arrayColumnValue[13] = commHouseNoId;
		arrayColumnValue[14] = streetArea;
		arrayColumnValue[15] = landMarkId;
		arrayColumnValue[16] = commPostOfcId;
		arrayColumnValue[17] = commThanaId;
		arrayColumnValue[18] = commVillageId;
		arrayColumnValue[19] = commTehsilValue;
		arrayColumnValue[20] = commDistrictValue;
		arrayColumnValue[21] = commStateValue;
		arrayColumnValue[22] = commPinCodeId;
		arrayColumnValue[23] = relationTypeId;
		arrayColumnValue[24] = sexId;
		arrayColumnValue[25] = casteTypeId;
		arrayColumnValue[26] = casteNameId;
		arrayColumnValue[27] = commTehsilId;
		arrayColumnValue[28] = commDistrictId;
		arrayColumnValue[29] = commStateId;

		return arrayColumnValue;
	}

}

function editRowForDiversion(tableID) {

	$('#premiumDetailsTbl input[type="radio"]:checked').each(function() {

		var val = $(this).val();
alert(val+"-----------val");
		document.getElementById('premiumRate').value = val.split("@")[0];
		document.getElementById('totalPremium').value = val.split("@")[1];
		document.getElementById('annualRent').value = val.split("@")[2];
		//document.getElementById('culPenalty').value = val.split("@")[3];
		//document.getElementById('appPenalty').value = val.split("@")[4];
		//document.getElementById('penaltyPercent').value = val.split("@")[5];
		document.getElementById('bhookhandArea').value = val.split("@")[6];
		alert("bhookhandArea-----"+val.split("@")[6]);
		// document.getElementById().value = val.split("@")[7];
		// document.getElementById().value = val.split("@")[9];
		document.getElementById('panchayatkar').value = val.split("@")[10];
		document.getElementById('sheetNo').value = val.split("@")[11];
		//document.getElementById('upkar').value = val.split("@")[12];
		document.getElementById('totalAmount').value = val.split("@")[13];
		document.getElementById('bandovast').value = val.split("@")[19];
		document.getElementById('prevYearBakaya').value = val.split("@")[15];
		// alert(val.split("@")[16]);
		document.getElementById('bhookhandNo').value = val.split("@")[16];
		document.getElementById('premiumRemarks').value = val.split("@")[20];

		var locality = val.split("@")[7];
		var localityId = document.getElementById('localityId');
		var landuseType = val.split("@")[9];
		var landuseTypeId = document.getElementById('landuseType');

		for ( var i = 0; i < landuseTypeId.options.length; i++) {

			if (landuseTypeId.options[i].text == landuseType) {
				landuseTypeId.selectedIndex = i;
				break;
			}
		}
		for ( var i = 0; i < localityId.options.length; i++) {

			if (localityId.options[i].text == locality) {
				localityId.selectedIndex = i;
				break;
			}
		}
	});
	$('#AddPrem').hide();
	$('#editprem').show();

}

function deleteRowForDiv(url, div) {
	var premiumval = $('input[name=chk]:radio:checked').val();
	var premiumRate = premiumval.split("@")[0];
	var totalPremium = premiumval.split("@")[1];
	var annualRent = premiumval.split("@")[2];
	var culPenalty = premiumval.split("@")[3];
	var appPenalty = premiumval.split("@")[4];
	var penaltyPercent = premiumval.split("@")[5];
	var bhookhandArea = premiumval.split("@")[6];
	var localityId = premiumval.split("@")[7];
	var bhookhandId = premiumval.split("@")[8];
	var landuseType = premiumval.split("@")[9];
	var panchayatKar = premiumval.split("@")[10];
	var sheetNo = premiumval.split("@")[11];
	var totalAmount = premiumval.split("@")[12];
	var paidAmount = premiumval.split("@")[13];
	var prevYearBakaya = premiumval.split("@")[14];
	var bhookhandNo = premiumval.split("@")[15];
	var requestId = premiumval.split("@")[17];
	var seqNo = premiumval.split("@")[18];
	// alert("requestId===="+requestId);
	// alert("seqNo===="+seqNo)

	var params = 'requestId=' + requestId + '&bhookhandId=' + bhookhandId
			+ '&seqNo=' + seqNo;
	loadPremiumDetails(url, div, params)
	if (document.getElementById('premiumDetailsTbl').rows.length < 2) {
		$('#premiumDetailsTbl').hide();
	}
}

function deleteRowForDiversion(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];

			var chkbox = row.cells[0].childNodes[0];

			if (null != chkbox && true == chkbox.checked) {
				table.deleteRow(i);
				rowCount--;
				i--;
			}

		}

		if (table.id == 'orderDetailsTbl') {
			var hiddnField = '';
			$('#orderDetailsTbl input[type="radio"]:not(:checked)').each(
					function() {
						var $row = $(this).parents('tr');
						hiddnField = hiddnField + '='
								+ $row.find('td:eq(1) input').val() + "^"
								+ $row.find('td:eq(2) input').val() + "^"
								+ $row.find('td:eq(3) input').val();
					});

			hiddnField = hiddnField.substring(1, hiddnField.length);
			document.getElementById('orderDetailsTblhiddenData').value = hiddnField;

		}

		if (table.id == 'premiumDetailsTbl') {
			var hiddnField = '';
			$('#premiumDetailsTbl input[type="radio"]:not(:checked)').each(
					function() {
						var $row = $(this).parents('tr');

						hiddnField = hiddnField + '='
								+ $row.find('td:eq(1) input').val() + "^"
								+ $row.find('td:eq(2) input').val() + "^"
								+ $row.find('td:eq(3) input').val() + "^"
								+ $row.find('td:eq(4) input').val() + "^"
								+ $row.find('td:eq(5) input').val() + "^"
								+ $row.find('td:eq(6) input').val() + "^"
								+ $row.find('td:eq(7) input').val() + "^"
								+ $row.find('td:eq(8) input').val() + "^"
								+ $row.find('td:eq(9) input').val() + "^"
								+ $row.find('td:eq(10) input').val() + "^"
								+ $row.find('td:eq(11) input').val() + "^"
								+ $row.find('td:eq(12) input').val() + "^"
								+ $row.find('td:eq(13) input').val() + "^"
								+ $row.find('td:eq(14) input').val() + "^"
								+ $row.find('td:eq(15) input').val() + "^"
								+ $row.find('td:eq(16) input').val() + "^"
								+ $row.find('td:eq(17) input').val() + "^"
								+ $row.find('td:eq(18) input').val();

					});

			hiddnField = hiddnField.substring(1, hiddnField.length);
			document.getElementById('premiumDetailsTblhiddenData').value = hiddnField;

		}

		if (table.id == 'mutOwnerDetailsTbl') {

			// alert("o");

			$('#mutOwnerDetailsTbl input[type="radio"]:checked').each(
					function() {

						// alert("aa");
						var $row = $(this).parents('tr');

						var ownerId = document.getElementById('ownerId').value
						/*
						 * alert($row.find('td:eq(23) input').val() +
						 * $row.find('td:eq(22) input').val() +
						 * $row.find('td:eq(24) input').val());
						 */
						var sequenceNo = $row.find('td:eq(27) input').val();

					});

			var hiddnField = '';
			$('#mutOwnerDetailsTbl input[type="radio"]:not(:checked)').each(
					function() {
						var $row = $(this).parents('tr');

						hiddnField = hiddnField + '='
								+ $row.find('td:eq(1) input').val() + "^"
								+ $row.find('td:eq(2) input').val() + "^"
								+ $row.find('td:eq(3) input').val() + "^"
								+ $row.find('td:eq(4) input').val() + "^"
								+ $row.find('td:eq(5) input').val() + "^"
								+ $row.find('td:eq(6) input').val() + "^"
								+ $row.find('td:eq(7) input').val() + "^"
								+ $row.find('td:eq(8) input').val() + "^"
								+ $row.find('td:eq(9) input').val() + "^"
								+ $row.find('td:eq(10) input').val() + "^"
								+ $row.find('td:eq(11) input').val() + "^"
								+ $row.find('td:eq(12) input').val() + "^"
								+ $row.find('td:eq(13) input').val() + "^"
								+ $row.find('td:eq(14) input').val() + "^"
								+ $row.find('td:eq(15) input').val() + "^"
								+ $row.find('td:eq(16) input').val() + "^"
								+ $row.find('td:eq(17) input').val() + "^"
								+ $row.find('td:eq(18) input').val() + "^"
								+ $row.find('td:eq(19) input').val() + "^"
								+ $row.find('td:eq(20) input').val() + "^"
								+ $row.find('td:eq(21) input').val() + "^"
								+ $row.find('td:eq(22) input').val() + "^"
								+ $row.find('td:eq(23) input').val() + "^"
								+ $row.find('td:eq(24) input').val() + "^"
								+ $row.find('td:eq(25) input').val();

					});

			hiddnField = hiddnField.substring(1, hiddnField.length);
			document.getElementById('mutOwnerDetailsTblhiddenData').value = hiddnField;

		}
	} catch (e) {

	}
}

/* end method by jyotsna for add table grid of diversion */

/* This is start for UserMaster */

function FeeHeaderDTL() {

	loadData('FeeHeaderDetail.do', 'updatedFeeHeaderDTL', 'transactionId='
			+ document.getElementById('transactionId').value + '&districtId='
			+ document.getElementById('districtId').value + '&tehsilId='
			+ document.getElementById('tehsilId').value + '&idCalendarFrom='
			+ document.getElementById('idCalendarFrom').value
			+ '&idCalendarTo=' + document.getElementById('idCalendarTo').value);

}

function FeeDetail() {

	loadData('FeeDetail.do', 'updatedFeeDetail', 'description='
			+ document.getElementById('description').value + 'Unitrate'
			+ document.getElementById('Unitrate').value + 'CollectedBy='
			+ document.getElementById('CollectedBy').value + 'Istaxable'
			+ document.getElementById('Istaxable').value);

}

function resetFieldForDiv(comboIndex, jspName) {
	// alert("jspName11:" + jspName);

	if (comboIndex == 1) {
		// document.getElementById("districtId").value = 0;
		document.getElementById("tehsilId").value = 0;
		document.getElementById("riId").value = 0;
		document.getElementById("halkaId").value = 0;
		document.getElementById("villageId").value = 0;

	}
	// For Tahsil
	if (comboIndex == 2) {
		document.getElementById("riId").value = 0;
		document.getElementById("halkaId").value = 0;
		document.getElementById("villageId").value = 0;

	}

	// For R.I Circle
	if (comboIndex == 3) {
		document.getElementById("halkaId").value = 0;
		document.getElementById("villageId").value = 0;

	}
	// For Patwari Halka
	if (comboIndex == 4) {

		document.getElementById("villageId").value = 0;

	}

	if (jspName == 'khasra') {

		document.getElementById("ownerId").value = 0;
		document.getElementById("khasraId").value = 0;
		document.getElementById('khasaraListDiv').style.display = 'none';

	}

	if (jspName == 'divmutSearch') {

		document.getElementById("landUsesTypeId").value = 0;
		document.getElementById('muationListDiv').style.display = 'none';

	}

}

function SubmitDivMutRequest() {

	// District Name
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;

	document.khasraform.locationNames.value = selectedLocationNames;
	var chks = document.getElementsByName("checkboxid[]");

	var flag = 0;
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			flag = 1;
			break;
		}
	}
	if (flag == 0) {

		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें ");
		return false;

	} else {

		document.khasraform.action = 'divmutRequest.do';
		document.khasraform.submit();
	}
}

function saveDivMutation() {
	// alert("called confirmMutation");
	var selectedMutationTypeId = document.getElementById('namantranAdharId').selectedIndex;
	var optionsList = document.getElementById("namantranAdharId").options;
	var selectedMutationTypeText = optionsList[selectedMutationTypeId].text;
	// alert("selectedMutationTypeText:" + selectedMutationTypeText);
	var selectedDharaId = document.getElementById('dharaId').selectedIndex;
	var optionsList = document.getElementById("dharaId").options;
	var selectedDharaText = optionsList[selectedDharaId].text;
	// alert("selectedDharaText:" + selectedDharaText);
	var selectedCourtId = document.getElementById('courtId').selectedIndex;
	var optionsList = document.getElementById("courtId").options;
	var selectedCourtText = optionsList[selectedCourtId].text;
	// alert("selectedCourtText:" + selectedCourtText);
	var namantranVivaranValue = selectedMutationTypeText + "@"
			+ selectedDharaText + "@" + selectedCourtText;
	document.getElementById('namantranVivaranId').value = namantranVivaranValue;

	if (validateDivMutRequest()) {
		document.mutationRequestform.action = 'saveDivMutRequest.do'; //
		document.mutationRequestform.submit();
	}

}

function validateDivMutRequest() {
	// alert("called validateMutationRequest");
	k = 10;
	n = 6;

	// FOR NAMANTRAN ADHAR
	var namantranAdhar = document.getElementById('namantranAdharId').value;
	// alert("namantranAdhar:" + namantranAdhar);
	if (namantranAdhar == "" || namantranAdhar == 0) {
		var reqName1 = document.getElementById("namantranAdharSpan");
		reqName1.style.display = "inline";
		document.getElementById("namantranAdharSpan").innerHTML = "Please select Namantran Adhar |";
		return false;
	}

	// FOR DHARA
	var dhara = document.getElementById('dharaId').value;
	// alert("dhara:" + dhara);
	if (dhara == "" || dhara == 0) {
		var reqName1 = document.getElementById("dharaSpan");
		reqName1.style.display = "inline";
		document.getElementById("dharaSpan").innerHTML = "Please select Dhara |";
		return false;
	}

	// FOR COURT LIST
	var court = document.getElementById('courtId').value;
	// alert("court:" + court);
	if (court == "" || court == 0) {
		var reqName1 = document.getElementById("courtSpan");
		reqName1.style.display = "inline";
		document.getElementById("courtSpan").innerHTML = "Please select court |";
		return false;
	}

	// ------------------VALIDATIONS FOR DOCUMENT----------------------

	/*
	 * var docType = document.getElementsByName("docType"); // var docName =
	 * document.getElementsByName("docName"); // var docNumber =
	 * document.getElementsByName("docNumber");
	 * 
	 * alert("docType length:" + docType.length); if (docType.length == 0) { var
	 * reqName1 = document.getElementById("documentSpan");
	 * reqName1.style.display = "inline";
	 * document.getElementById("documentSpan").innerHTML = "Please Add
	 * Document!."; return false; }
	 */
	// FOR Seller Name
	var sellerName = document.getElementById('sellerNameId').value;
	// alert("requesterName:" + requesterName);
	if (sellerName == "") {
		var reqName1 = document.getElementById("sellName");
		reqName1.style.display = "inline";
		document.getElementById("sellName").innerHTML = "कृपया विक्रेता नाम भरे |";
		// document.getElementById('requesterNameId').focus();
		return false;
	}
	// ------------------VALIDATIONS FOR AVEDAK----------------------
	var chkbxForNewOwnerDtls = document
			.getElementsByName("chkbxForNewOwnerDtls");
	// var docName = document.getElementsByName("docName");
	// var docNumber = document.getElementsByName("docNumber");

	// alert("chkbxForNewOwnerDtls length:" + chkbxForNewOwnerDtls.length);
	if (chkbxForNewOwnerDtls.length == 0) {
		var avedakSpan = document.getElementById("avedakSpan");
		avedakSpan.style.display = "inline";
		document.getElementById("avedakSpan").innerHTML = "Please Add Avedak!.";
		return false;
	} else {
		return true;
	}

}

/* End */

/*
 * function getDiversionRequestsList(transactionId, currentActivity, statusId,
 * actionType) { // alert("getDiversionRequestsList:" + transactionId); //
 * alert("currentActivity:" + currentActivity); // alert("statusId:" +
 * statusId); document.requestListform.action =
 * 'getDiversionRequests.do?currentActivity=' + currentActivity +
 * '&transactionId=' + transactionId + '&statusId=' + statusId + '&actionType=' +
 * actionType; // alert("xs:" + document.requestListform.action);
 * document.requestListform.submit(); }
 */

function getDiversionRequestsList(statusId) {
	document.requestListform.action = 'getDiversionRequests.do?statusId='
			+ statusId + '&currentStatus=' + statusId;
	document.requestListform.submit();

}

function updateRecord() {

	var a = atLeastOneRadio();
	if (a) {
		document.masterTableForm.action = 'updateRecord.do';
		document.masterTableForm.submit();

	} else {
		var fieldError = document.getElementById('updateSelect_fieldError');

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया कोई रिकॉर्ड चुने |";
		return false;
	}
}
function atLeastOneRadio() {
	return ($('input[type=radio]:checked').size() > 0);
}

function updateRecord() {

	var a = atLeastOneRadio();
	if (a) {
		document.masterTableForm.action = 'updateRecord.do';
		document.masterTableForm.submit();

	} else {
		var fieldError = document.getElementById('updateSelect_fieldError');

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया कोई रिकॉर्ड चुने |";
		return false;
	}
}
function atLeastOneRadio() {
	return ($('input[type=radio]:checked').size() > 0);
}

function saveRecord(dropParameterString, textParameterString) {
	var checkValid = 0;
	var a = dropParameterString;
	var b = textParameterString;
	var c = document.getElementById('onlyNumIds').value;

	var dropArray1 = a.split("#");

	var textArray1 = b.split("#");

	var onlyNumArray1 = c.split("#");

	var d = document.getElementById('dropAliasId').value;
	var e = document.getElementById('textAliasId').value;

	var dropArray1 = a.split("#");
	var dropAliasArray1 = d.split("#");
	var textAliasArray1 = e.split("#");

	for ( var y = 0; y < textArray1.length - 1; y++) {

		if (document.getElementById(textArray1[y]).value == "") {
			alert("कृपया " + textAliasArray1[y] + " भरे |");
			checkValid++;
			return false;
		}

	}

	for ( var z = 0; z < onlyNumArray1.length - 1; z++) {

		if (isNaN(document.getElementById(onlyNumArray1[z]).value)) {
			alert("कृपया केवल अंकों में दर्ज करें |");
			checkValid++;
			return false;
		}

	}

	for ( var x = 0; x < dropArray1.length - 1; x++) {

		if (document.getElementById(dropArray1[x]).value == "00") {
			alert("कृपया " + dropAliasArray1[x] + " चयन करे |");
			checkValid++;
			return false;
		}

	}

	if (checkValid == 0) {

		document.getElementById('buttonId').onchange();
		loadData('getColumnList.do', 'masterAreaDiv', 'masterTableId='
				+ document.getElementById('masterTableId').value);
	} else {

	}
}

/*
 * function toGetField(bodyLoadId, Id) {
 * 
 * if (bodyLoadId != '0') { // alert("in loop"); loadData('getColumnList.do',
 * 'masterAreaDiv', 'masterTableId=' + Id); } }
 */
function dynamicTable()

{

	showSpan('afterSelectButton');
	document.getElementById('buttonId').value = "संशोधन करे";
	document.getElementById('checkValue').value = "UPDATE";

	// alert("field1-->"+field1);
	// ("field2-->"+field2);
	// alert("field3-->"+field3);

	var d1 = "";

	/*
	 * $(document).ready(function () { $('#tableid').on('click', 'tr', function
	 * (event) {
	 * 
	 * //test2=$(this).text();
	 * 
	 * d1="";
	 * 
	 * $(this).children().each(function(){
	 * 
	 * 
	 * //alert(d1); var test=$(this).text(); alert("test--"+test);
	 * d1=d1+"#"+test;
	 * 
	 * //alert("fgsaf"); //alert($(this).text()); }); }); });
	 */

	$('#tableid input[type="radio"]:checked').each(function() {
		var row = $(this).parents('tr');

		var count = 0;

		$(row).children().each(function() {

			if (count != 0) {
				var test = $(this).text();

				if (test != " ") {
					d1 = d1 + "#" + test;
				}

			}

			count++;

		});

	});

	// alert("d1--"+d1);

	// alert(d.length);

	var a = document.getElementById('columnIds').value;

	var columnArr = a.split("#");
	var valueArr = d1.split("#");

	// alert(columnArr.length+""+valueArr.length)
	for ( var x = 0; x < columnArr.length - 1; x++) {

		document.getElementById(columnArr[x]).value = valueArr[x + 1];
		document.getElementById(columnArr[x]).onchange();

	}

}

function SubmitDivMutForm(doc, view) {
	try {
		// alert(view);
		var url;
		var view1;
		view1 = view.split('?')[0];
		if (view == 'showConfirmationPage.do') {
			for ( var k = 0; k < document.getElementsByName('Update').length; k++) {
				if (ValidateMutation(k) == false)
					return false;
			}
			var conf = confirm("क्या आपको यकीन है, तहसीलदार को अनुरोध सबमिट करना चाहते हैं |");
			if (conf == false) {
				return false;
			}
			document.getElementById('btnTehsildar').disabled = true;
			for ( var k = 0; k < document.getElementsByName('Update').length; k++) {
				document.getElementsByName('Update')[k].disabled = true;
			}

		}
		if (view == 'setSellerOwner.do') {
			// alert("view: "+view);
			var val = doc.split('-')[0];
			var ctr = doc.split('-')[1];

			if (val != 'Skip' && val != 'Correction') {

				for ( var k = 0; k < document
						.getElementsByName('chkSellerOwner').length; k++) {
					var isSeller = "N";
					if (document.getElementsByName('chkSellerOwner')[k].checked == true)
						isSeller = "Y";
					url = document.getElementsByName('keyHidden')[k].value
							+ '&isSeller=' + isSeller;

					var msg = SendContent(view, url);
					// window.location.reload();
				}
			} else {

				if (val == 'Skip') {
					for ( var k = 0; k < document
							.getElementsByName('chkSellerOwner').length; k++) {

						if (document.getElementsByName('chkSellerOwner')[k].value == '1') {
							url = document.getElementsByName('keyHidden')[ctr].value
									+ '&isSeller=' + 'Y';

						} else {
							url = document.getElementsByName('keyHidden')[k].value
									+ '&isSeller=' + 'N';
							document.getElementsByName('keyHidden')[k].checked = false;
						}

						// alert(url);

						var msg = SendContent(view, url);
					}
				}
				if (val == 'Correction') {
					for ( var k = 0; k < document
							.getElementsByName('chkSellerOwner').length; k++) {

						if (document.getElementsByName('chkSellerOwner')[k].value == '1') {
							url = document.getElementsByName('keyHidden')[ctr].value
									+ '&isSeller=' + 'N';

						}

						// alert(url);

						var msg = SendContent(view, url);
					}
				}

			}

			return true;
		}

		if (view1 == 'ownerSearch.do') {

			url = view.split('?')[1];

			var msg = SendContent(view, url);

			document.getElementById("ownerSearchDiv").innerHTML = msg;
			return true;
		}
		// alert("view:"+view+"\nview1:"+view1);
		if (view1 == 'addExistingOwner.do') {

			url = view.split('?')[1];
			// alert("XXXXXX: "+url);
			// return false;
			var msg = SendContent(view.split('?')[0], url);
			// alert("1msg:"+msg);
			// document.getElementById("ownerSearchDiv").innerHTML=msg;
			return true;
		}

		if (view1 == 'basraSelection.do') {

			url = view.split('?')[1];

			alert(url);
			var msg = SendContent(view, url);

			document.getElementById("basraListDiv").innerHTML = msg;
			return true;
		}
		/*
		 * if (view == 'getKhasraOwnerList.do') { alert(url);
		 * url='requestId='+view.split('=')[1]; alert(url); var
		 * msg=SendContent(view,url);
		 * 
		 * return true; }
		 */
		document.getElementById(doc).action = view;
		document.getElementById(doc).submit();
	} catch (e) {
		alert(e);

	}

}

/*
 * document.getElementById('BANK_ID').value=field1;
 * document.getElementById('BANK_NAME').value=field2;
 * document.getElementById('IS_ACTIVE').value=field3;
 */
/* This is for Fee Header Updated nishith */
function updateFee(str) {

	document.getElementById('btn').value = "संशोधन करे";
	document.getElementById('buttonVal').value = "Update";
	// document.getElementById('btnFeeDTL').value="नई फीस विस्तार जोड़े";
	// document.getElementById('buttondtlVal').value="Update";
	var a = document.getElementById('updateFeeId').value;
	showSpan('updatedFeeDetail');

	// alert(a);

	var b = str;
	// alert(b);

	var idArr = a.split("#");

	var strArr = b.split("#");

	// alert(strArr[2]+strArr[1]);
	loadDataDyanamic('tehsilMasterUser.do', 'updatedTehsil', 'districtId='
			+ strArr[1]);
	document.getElementById('description').value = '';
	document.getElementById('Unitrate').value = '';
	document.getElementById('taxrate').value = '';
	document.getElementById('CollectedBy').value = "0";
	document.getElementById('btnFeeDTL').value = "नई फीस विस्तार जोड़े";
	for ( var x = 0; x < idArr.length; x++) {

		document.getElementById(idArr[x]).value = strArr[x];

	}
}

function hideSpanColor(fieldId, field) {
	// alert("called with tow ierede");
	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
	document.getElementById(fieldId).className = "select_w1";

}

function changePassword() {

	var a = checktextbox("oldPassword", "oldPassword_fieldError");
	var b = checktextbox("newPassword", "newPassword_fieldError");
	var c = checktextbox("confirmPassword", "confirmPassword_fieldError");

	var newPassword = document.getElementById('newPassword').value;
	var confirmPass = document.getElementById('confirmPassword').value;
	var oldPassword = document.getElementById('oldPassword').value;

	if (a & b & c) {

		if (newPassword.length < 8) {

			var fieldError = document.getElementById('newPassword_fieldError');
			fieldError.style.display = "inline";
			fieldError.innerHTML = "न्यू पासवर्ड कम से कम 8 शब्दो का होना चाहिए |";
			return false;

		}

		else if (newPassword != confirmPass) {

			var fieldError = document
					.getElementById('confirmPassword_fieldError');
			fieldError.style.display = "inline";
			fieldError.innerHTML = "न्यू पासवर्ड और  कन्फर्म पासवर्ड अलग |";
			return false;

		}

		else if (newPassword == oldPassword) {

			var fieldError = document.getElementById('newPassword_fieldError');
			fieldError.style.display = "inline";
			fieldError.innerHTML = "न्यू पासवर्ड और ओल्ड  पासवर्ड अलग होना चाहिए |";
			return false;

		}

		else {

			if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^*-]).{8,}$/
					.test(newPassword)) {

				document.changePasswordForm.oldPassword.value = MD5(oldPassword);
				document.changePasswordForm.newPassword.value = MD5(newPassword);
				document.changePasswordForm.confirmPassword.value = MD5(confirmPass);

				document.changePasswordForm.action = 'changePasswordProcess.do';
				document.changePasswordForm.submit();

			}

			else {

				var fieldError = document
						.getElementById('newPassword_fieldError');
				fieldError.style.display = "inline";
				fieldError.innerHTML = "नये पासवर्ड में एक स्पेशल करैक्टर ,एक कैपिटल लैटर एवं एक संख्या  होना अनिवार्य है |";
				return false;

			}

		}

	}

}

function openBWindow(ownerId, requestId, flag) {

	var districtIdx = document.getElementById("districtIdx").value;
	var tehsilIdx = document.getElementById("tehsilIdx").value;
	var riIdx = document.getElementById("riIdx").value;
	var halkaIdx = document.getElementById("halkaIdx").value;
	var villageIdx = document.getElementById("villageIdx").value;

	window
			.open(
					"addTrusty.do?districtId="
							+ document.getElementById("districtIdx").value
							+ '&tehsilId='
							+ document.getElementById("tehsilIdx").value
							+ '&riId=' + document.getElementById("riIdx").value
							+ '&halkaId='
							+ document.getElementById("halkaIdx").value
							+ '&villageId='
							+ document.getElementById("villageIdx").value
							+ '&ownerId=' + ownerId + '&requestId=' + requestId
							+ '&viewTrusty=' + flag,
					"_blank",
					"toolbar=yes, location=yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes, width=900, height=750");
}

function deleteTableAddTrusty() {

	try {

		$('#mutOwnerDetailsTbl input[type="radio"]:checked').each(function() {

			var strng = $(this).val();

			var ownerId = document.getElementById('ownerId').value

			var strArr = strng.split('^');

			var sequenceId = strArr[7];
			document.getElementById('ownerSeqNo').value = sequenceId;

			document.trusteeRequestform.action = 'deleteTrusty.do';
			document.trusteeRequestform.submit();

		});

		/*
		 * var hiddnField = ''; $('#mutOwnerDetailsTbl
		 * input[type="radio"]:not(:checked)').each( function() { var $row =
		 * $(this).parents('tr');
		 * 
		 * hiddnField = hiddnField + '=' + $row.find('td:eq(1) input').val() +
		 * "^" + $row.find('td:eq(2) input').val() + "^" + $row.find('td:eq(3)
		 * input').val() + "^" + $row.find('td:eq(4) input').val() + "^" +
		 * $row.find('td:eq(5) input').val() + "^" + $row.find('td:eq(6)
		 * input').val() + "^" + $row.find('td:eq(7) input').val() + "^" +
		 * $row.find('td:eq(8) input').val() + "^" + $row.find('td:eq(9)
		 * input').val() + "^" + $row.find('td:eq(10) input').val() + "^" +
		 * $row.find('td:eq(11) input').val() + "^" + $row.find('td:eq(12)
		 * input').val() + "^" + $row.find('td:eq(13) input').val() + "^" +
		 * $row.find('td:eq(14) input').val() + "^" + $row.find('td:eq(15)
		 * input').val() + "^" + $row.find('td:eq(16) input').val() + "^" +
		 * $row.find('td:eq(17) input').val() + "^" + $row.find('td:eq(18)
		 * input').val() + "^" + $row.find('td:eq(19) input').val() + "^" +
		 * $row.find('td:eq(20) input').val() + "^" + $row.find('td:eq(21)
		 * input').val() + "^" + $row.find('td:eq(22) input').val() + "^" +
		 * $row.find('td:eq(23) input').val() + "^" + $row.find('td:eq(24)
		 * input').val() + "^" + $row.find('td:eq(25) input').val();
		 * 
		 * });
		 * 
		 * hiddnField = hiddnField.substring(1, hiddnField.length);
		 * document.getElementById('mutOwnerDetailsTblhiddenData').value =
		 * hiddnField;
		 */

	} catch (e) {

	}
}

/* Added by Vivek TIWARI */

function isValidMobile(/* entredMobile */) {
	/*
	 * var mobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$//for 10 digit
	 * mobile number including 0 or +91
	 */var mobRegex = /^([7-9][0-9]{9})$/;// for 10 digit mobile number
	// excluding 0 and +91
	var entredMobile = $('#mobile').val();
	if (mobRegex.test(entredMobile)) {
		/* alert("valid Mobile Number is ******** " + entredMobile); */
		return true;
	} else {
		alert("कृपया सही मोबाइल नंबर दर्ज करें |");
		return false;
	}
}

function forgotpwd() {
	// alert("in method");
	k = 10;
	var emailId = document.getElementById('mailId').value;
	// alert(emailId);
	var loginId = document.getElementById('loginId1').value;
	// alert(userId);
	var mobileNo = document.getElementById('mobileNo1').value;
	// alert(mobileNo);

	/*
	 * var selectedvalue=""; var selected=
	 * $("input[type='radio'][name='userTypefp']:checked");
	 * if(selected.length>0){ selectedvalue=selected.val(); alert("selected
	 * value is"+selectedvalue); }
	 */
	if (emailId != '') {
		if (ValidateEmailAddress(emailId) == false) {
			document.getElementsByName('mailId')[index].focus();
			return false;

		}
	} else {
		alert("email field can not be left blank");
		document.getElementByName('mailId')[index].focus();
		return false;
	}
	if (loginId == '') {
		alert("login id field can not be left blank");
		document.getElementByName('loginId')[index].focus();
		return false;
	}

	if (mobileNo.length < 1) {
		var mobile = document.getElementById("mobileNo1");
		mobile.style.display = "inline";
		alert(document.getElementById("mobileNo1").innerHTML = " please enter mobile number |");
		document.getElementsById('mobileNo1')[index].focus();
		return false;
	}

	if (mobileNo != 0) {

		if (isNaN(mobileNo)) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = "Please Enter numeric value for mobile No |");
			return false;
		} else if (mobileNo.length > k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = " Phone No should be of "
					+ k + " digit.");

			return false;
		} else if (mobileNo.length < k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = " Phone No should be of "
					+ k + " digit.");

			return false;
		}

	}
	var userType = document.getElementsByName('userTypefp');
	var len = userType.length;
	// alert("length is" + len);
	var val;
	for ( var i = 0; i < len; i++) {
		if (userType[i].checked == true) {
			val = i;
			// alert("val is" + val);
			break;
		}

	}
	if (val != 0 && val != 1) {
		alert("Please select one user type");
	}

	var checkedvalue = userType[val].value;

	loadData('saveForgotPassword.do', 'result', 'mailId='
			+ document.getElementById('mailId').value + '&loginId1='
			+ document.getElementById('loginId1').value + '&mobileNo1='
			+ document.getElementById('mobileNo1').value + '&userTypefp='
			+ checkedvalue);

}

function selectAllCheckBox() {
	$(document).ready(function() {
		$(document).on("click", ".selectall", function() {
			$('input[type=checkbox]').prop('checked', this.checked);
		});
	});

}

function forgotpwd() {
	// alert("in method");
	k = 10;
	var emailId = document.getElementById('mailId').value;
	// alert(emailId);
	var loginId = document.getElementById('loginId1').value;
	// alert(userId);
	var mobileNo = document.getElementById('mobileNo1').value;
	// alert(mobileNo);

	/*
	 * var selectedvalue=""; var selected=
	 * $("input[type='radio'][name='userTypefp']:checked");
	 * if(selected.length>0){ selectedvalue=selected.val(); alert("selected
	 * value is"+selectedvalue); }
	 */
	if (emailId != '') {
		if (ValidateEmailAddress(emailId) == false) {
			document.getElementsByName('mailId')[index].focus();
			return false;

		}
	} else {
		alert("email field can not be left blank");
		document.getElementByName('mailId')[index].focus();
		return false;
	}
	if (loginId == '') {
		alert("login id field can not be left blank");
		document.getElementByName('loginId')[index].focus();
		return false;
	}

	if (mobileNo.length < 1) {
		var mobile = document.getElementById("mobileNo1");
		mobile.style.display = "inline";
		alert(document.getElementById("mobileNo1").innerHTML = " please enter mobile number |");
		document.getElementsById('mobileNo1')[index].focus();
		return false;
	}

	if (mobileNo != 0) {

		if (isNaN(mobileNo)) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = "Please Enter numeric value for mobile No |");
			return false;
		} else if (mobileNo.length > k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			(document.getElementById("mobileNo1").innerHTML = " Phone No should be of "
					+ k + " digit.");

			return false;
		} else if (mobileNo.length < k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = " Phone No should be of "
					+ k + " digit.");

			return false;
		}

	}
	var userType = document.getElementsByName('userTypefp');
	var len = userType.length;
	// alert("length is" + len);
	var val;
	for ( var i = 0; i < len; i++) {
		if (userType[i].checked == true) {
			val = i;
			// alert("val is" + val);
			break;
		}

	}
	if (val != 0 && val != 1) {
		alert("Please select one user type");
	}

	var checkedvalue = userType[val].value;

	loadData('saveForgotPassword.do', 'result', 'mailId='
			+ document.getElementById('mailId').value + '&loginId1='
			+ document.getElementById('loginId1').value + '&mobileNo1='
			+ document.getElementById('mobileNo1').value + '&userTypefp='
			+ checkedvalue);

}

function saveOwnerInformation() {

	var firstName = document.getElementById('firstName').value;
	var sex = document.getElementById('sex').value;
	var relationId = document.getElementById('relationId').value;
	var fatherName = document.getElementById('fatherName').value;
	var casteId = document.getElementById('casteId').value;
	var subCasteId = document.getElementById('subCasteId').value;
	var cDistrict = document.getElementById('cDistrict').value;
	var cPinCode = document.getElementById('cPinCode').value;
	var cTehsil = document.getElementById('cTehsil').value;

	document.getElementById('firstName').className = "input_w1 bgfieldcolor";
	document.getElementById('sex').className = "input_w1 bgfieldcolor";
	document.getElementById('relationId').className = "input_w1 bgfieldcolor";

	document.getElementById('fatherName').className = "input_w1 bgfieldcolor";
	document.getElementById('casteId').className = "input_w1 bgfieldcolor";
	document.getElementById('subCasteId').className = "input_w1 bgfieldcolor";

	document.getElementById('cState').className = "input_w1 bgfieldcolor";
	document.getElementById('cTehsil').className = "input_w1 bgfieldcolor";
	document.getElementById('cDistrict').className = "input_w1 bgfieldcolor";
	document.getElementById('cPinCode').className = "input_w1 bgfieldcolor";

	var stateName = document.getElementById('cState').value.split(',');
	var cState = stateName[0];
	var pinCodeFrom = stateName[1];
	var pinCodeTo = stateName[2];

	var pin = cPinCode.substring(0, pinCodeFrom.length);

	var khasracount = document.getElementById('totalkhasra').value;

	for ( var j = 0; j < khasracount; j++) {
		document.getElementById('ownerShare_' + j).className = "input_w1 bgfieldcolor";

	}

	/*
	 * var counter = 0; var check = document.getElementsByName('chbxbuyArea');
	 * var len = check.length; for ( var i = 0; i < len; i++) { if
	 * (check[i].checked == true) { counter++; } }
	 */

	if (firstName == '') {
		document.getElementById('firstName').className = "input_w1 heighfield";
		document.getElementById('firstName').focus();
		alert("कृपया नाम भरे|");
	} else if (sex == '0') {
		document.getElementById('sex').className = "input_w1 heighfield";
		document.getElementById('sex').focus();
		alert("कृपया सेक्स चयन करे|");
	} else if (relationId == '0') {
		document.getElementById('relationId').className = "input_w1 heighfield";
		document.getElementById('relationId').focus();
		alert("कृपया पुत्र /पुत्री/पत्नी चयन करे|");
	} else if (fatherName == '') {
		document.getElementById('fatherName').className = "input_w1 heighfield";
		document.getElementById('fatherName').focus();
		alert("कृपया पिता/पति  नाम भरे|");
	} else if (casteId == '0') {
		document.getElementById('casteId').className = "input_w1 heighfield";
		document.getElementById('casteId').focus();
		alert("कृपया जाति चयन करे|");
	} else if (subCasteId == '') {
		document.getElementById('subCasteId').className = "input_w1 heighfield";
		document.getElementById('subCasteId').focus();
		alert("कृपया उपजाति भरे|");
	} else if (cState == '0') {
		document.getElementById('cState').className = "input_w1 heighfield";
		document.getElementById('cState').focus();
		alert("कृपया राज्य चयन करे|");
	} else if (cDistrict == '0') {
		document.getElementById('cDistrict').className = "input_w1 heighfield";
		document.getElementById('cDistrict').focus();
		alert("कृपया जिला चयन करे|");
	} else if (cTehsil == '0') {
		document.getElementById('cTehsil').className = "input_w1 heighfield";
		document.getElementById('cTehsil').focus();
		alert("कृपया तहसील चयन करे|");
	} else if (cPinCode.length < 6) {
		document.getElementById('cPinCode').className = "input_w1 heighfield";
		document.getElementById('cPinCode').focus();
		alert("कृपया सही पिनकोड भरे|");
	}

	else if (!(pin >= pinCodeFrom && pin <= pinCodeTo)) {
		document.getElementById('cPinCode').className = "input_w1 heighfield";
		document.getElementById('cPinCode').focus();
		alert("कृपया सही पिनकोड भरे|");
		return false;
	}

	var counter = 0;
	var check = document.getElementsByName('chbxbuyArea');
	var len = check.length;
	for ( var i = 0; i < len; i++) {
		if (check[i].checked == true) {
			counter++;
			/**/
			var requestforsale = parseFloat($("#ownerShare_" + (i)).val());
			var salerequest = document.getElementById('ownerShare_' + i).value;

			if (checkforvalue(salerequest) == false) {
				document.getElementById('ownerShare_' + i).className = "input_w1 heighfield";
				document.getElementById('ownerShare_' + i).focus();

				return false;
			}

			if (requestforsale == 0 || isNaN(requestforsale)) {
				document.getElementById('ownerShare_' + i).className = "input_w1 heighfield";
				document.getElementById('ownerShare_' + i).focus();
				alert("कृपया नामान्तरण हेतु क्षेत्रफल भरे| ");
				return false;
			}
		}
	}

	if (counter == 0) {
		alert("कृपया कम से कम एक चेक बॉक्स का चयन करे|");
		return false;
	} else {
		saveOwnerInfo();
	}

	/*
	 * else {
	 * 
	 * for ( var i = 0; i < khasracount; i++) { var table =
	 * document.getElementById('khasracounttable' + i); rowlength =
	 * table.rows.length;
	 * 
	 * var ownersharedarea = document.getElementById('khasraarea' + i).value;
	 * 
	 * for ( var j = 0; j < rowlength; j++) { var requestforsale =
	 * parseFloat($("#ownerShare_" + (i)).val());
	 * 
	 * if ((requestforsale == 0 || isNaN(requestforsale) && check[j].checked ==
	 * true)) { document.getElementById('ownerShare_' + i).className = "input_w1
	 * heighfield"; document.getElementById('ownerShare_' + i).focus();
	 * alert("कृपया नामान्तरण हेतु क्षेत्रफल भरे! "); return false; }
	 * 
	 * else { saveOwnerInfo(); } } } }
	 */

}

function inputCheck(inputId) {
	var prvValue = null;
	var selectValue = null;

	switch (inputId) {
	case 'tehsilId':
		prvValue = 'districtId';
		selectValue = 'जिला';
		break;
	case 'riId':
		prvValue = 'tehsilId';
		selectValue = 'तहसील';
		break;
	case 'halkaId':
		prvValue = 'riId';
		selectValue = 'रा. नि. मं.';
		break;
	case 'villageId':
		prvValue = 'halkaId';
		selectValue = 'पटवारी हल्का';
		break;
	case 'landTypeId':
		prvValue = 'villageId';
		selectValue = 'गाँव';
		break;
	}

	if (prvValue == 'districtId' || prvValue == 'tehsilId'
			|| prvValue == 'riId' || prvValue == 'halkaId'
			|| prvValue == 'villageId') {
		/* var halkaId = document.getElementById(prvValue).value; */
		if ((document.getElementById(prvValue).value) == 0) {
			alert('कृपया ' + selectValue + " चयन करें |");
			return false;
		} else {

			return true;
		}
	}
	if (inputId == 'khasraRadio' || inputId == 'basraRadio'
			|| inputId == 'updatedKhasraPatwari') {
		var alertMsg = "कृपया";

		if ((document.getElementById('districtId').value) == 0) {
			alertMsg = alertMsg + "जिला ";

		}

		if ((document.getElementById('tehsilId').value) == 0) {
			alertMsg = alertMsg + "तहसील ";

		}

		if ((document.getElementById('riId').value) == 0) {
			alertMsg = alertMsg + "रा. नि. मं.";

		}

		if ((document.getElementById('halkaId').value) == 0) {
			alertMsg = alertMsg + "पटवारी हल्का ";

		}

		if ((document.getElementById('villageId').value) == 0) {
			alertMsg = alertMsg + "गाँव ";

		}

		/*
		 * if ((document.getElementById('landTypeId').value) == 0) { alertMsg =
		 * alertMsg + "भूमि प्रकार"; }
		 */

		if (alertMsg != "कृपया") {

			alert(alertMsg + " चयन करें |");

			$("#" + inputId).prop('checked', false);
			return false;
		}

		if (alertMsg == "कृपया") {

			return true;

		}
	}

}
/* added by Vivek TIWARI */
function isValidDecimal(entredNumber) {
	/* var floatRegex = /^?\d*(\.\d+)?$/; */
	var decimalRegex = /^1000([.][0]{1,3})?$|^\d{1,3}$|^\d{1,3}([.]\d{1,3})$|^([.]\d{1,3})$/;
	/* var entredNumber = $('#deciNumber').val(); */
	if (decimalRegex.test(entredNumber)) {
		/* alert("valid Decimal Number ******** " + entredNumber); */
		return true;
	} else {
		alert("कृपया सही दशमलव अंक दर्ज करें(दशमलव के बाद केवल तीन अंक) |");
		return false;
	}
}
function isValidDecimalBarren(entredNumber) {
	/* var floatRegex = /^?\d*(\.\d+)?$/; */
	var decimalRegex = /^1000([.][0]{1,3})?$|^\d{1,3}$|^\d{1,3}([.]\d{1,3})$|^([.]\d{1,3})$/;
	/* var entredNumber = $('#deciNumber').val(); */
	if (decimalRegex.test(entredNumber)) {
		/* alert("valid Decimal Number ******** " + entredNumber); */
		return true;
	} else {
		alert("कृपया गैर मुमकिन विवरण दर्ज करें |");
		return false;
	}
}
function isValidDecimalAgri(entredNumber) {
	/* var floatRegex = /^?\d*(\.\d+)?$/; */
	var decimalRegex = /^1000([.][0]{1,3})?$|^\d{1,3}$|^\d{1,3}([.]\d{1,3})$|^([.]\d{1,3})$/;
	/* var entredNumber = $('#deciNumber').val(); */
	if (decimalRegex.test(entredNumber)) {
		/* alert("valid Decimal Number ******** " + entredNumber); */
		return true;
	} else {
		alert("कृपया गैर कृषिकार्य विवरण दर्ज करें |");
		return false;
	}
}

/* added by Vivek TIWARI */

function unCheckRadio(invoker) {

	if (invoker == "districtId") {
		$("#tehsilId").text("");
		$("#riId").text("");
		$("#halkaId").text("");
		$("#villageId").text("");

		$("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").text('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}

	if (invoker == "tehsilId") {
		var riIdDefalut = $("#riId option:first").val();
		$("#riId").text("");
		$("#riId").val(riIdDefalut);
		var halkaIdDefalut = $("#halkaId option:first").val();
		$("#halkaId").text("");
		$("#halkaId").val(halkaIdDefalut);
		var villageIdDefalut = $("#villageId option:first").val();
		$("#villageId").text("");
		$("#villageId").val(villageIdDefalut);
		$("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}

	if (invoker == "riId") {
		$("#riId").text("");
		$('#riId')
				.append(
						'<option value="0" selected="selected">---राजस्व सर्कल चयन करें---</option>');
		$("#villageId").text("");
		$('#villageId')
				.append(
						'<option value="0" selected="selected">---गाँव चयन करें---</option>');
		// $("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}

	if (invoker == "halkaId") {
		$("#halkaId").text("");
		$('#halkaId')
				.append(
						'<option value="0" selected="selected">---पटवारी हल्का चयन करें---</option>');
		$("#villageId").text("");
		$('#villageId')
				.append(
						'<option value="0" selected="selected">---गाँव चयन करें---</option>');
		// $("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}
	if (invoker == "villageId") {
		$("#villageId").text("");
		$('#villageId')
				.append(
						'<option value="0" selected="selected">---गाँव चयन करें---</option>');
		// $("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}
	if (invoker == "landTypeId") {
		$("#landTypeId").val($("#landTypeId option:first").val());
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}

	if (invoker == "khasraRadiobasraRadio") {
		$("#khasraRadio").prop('checked', false);
		$("#basraRadio").prop('checked', false);
		$("#khasraId").hide();
		$("#basraId").hide();
		$("#khsrNo").hide();
	}

	if (invoker == "khasraRadio") {
		$("#khasraRadio").prop('checked', false);
		$("#khsrNo").hide();
		$("#khasraId").hide();

	}

	if (invoker == "basraRadio") {

		$("#basraRadio").prop('checked', false);
		$("#khsrNo").hide();
		$("#basraId").hide();
	}

}

/* Added By Vivek Tiwari */
function enableDisableOrderDetail() {
	var defaultValue = $("#testChange option:first").val();
	var selectedValue = $("#testChange").val();
	if (defaultValue != selectedValue) {
		$("#orderRemarks1").attr('disabled', false);
		$("#orderDate1").attr('disabled', false);
		$("#orderBy1").attr('disabled', false);
		$("#orderNo1").attr('disabled', false);
		$("#oId1").show();
	}
	if (defaultValue == selectedValue) {
		$("#orderRemarks1").attr('disabled', true);
		$("#orderDate1").attr('disabled', true);
		$("#orderBy1").attr('disabled', true);
		$("#orderNo1").attr('disabled', true);
		$("#oId1").hide();
	}
}

/* Added By Vivek Tiwari */

function enableSanchitDisableOrderDetail() {

	var defaultValue = document.getElementById('chkSncht').value;

	var selectedValue = $("#testChange").val();

	if (defaultValue != selectedValue) {

		$("#pAdesh").show();
		$("#pdabar").show();
		$("#pAdeshDinanka").show();
		$("#pAdeshRemark").show();

		$("#divOrderNo").show();
		$("#divOrderBy").show();
		$("#divOrderDt").show();
		$("#divOrderRemark").show();

		$("#orderRemarks1").attr('disabled', false);
		$("#orderDate1").attr('disabled', false);
		$("#orderBy1").attr('disabled', false);
		$("#orderNo1").attr('disabled', false);
		$("#oId1").show();
	}
	if (defaultValue == selectedValue) {

		$("#pAdesh").hide();
		$("#pdabar").hide();
		$("#pAdeshDinanka").hide();
		$("#pAdeshRemark").hide();

		$("#divOrderNo").hide();
		$("#divOrderBy").hide();
		$("#divOrderDt").hide();
		$("#divOrderRemark").hide();

		$("#orderRemarks1").attr('disabled', true);
		$("#orderDate1").attr('disabled', true);
		$("#orderBy1").attr('disabled', true);
		$("#orderNo1").attr('disabled', true);
		$("#oId1").hide();
	}

}

function enableWtrSrcIrrg(value) {
	$("#orderNo").removeClass('heighfield');
	$("#orderBy").removeClass('heighfield');
	$("#orderDate").removeClass('heighfield');
	$("#orderRemarks").removeClass('heighfield');

	$("#cropId").removeClass('heighfield');
	$("#sinchitArea").removeClass('heighfield');
	$("#asinchitArea").removeClass('heighfield');
	$("#waterResourceId").removeClass('heighfield');
	$("#sourceOfIrrigationId").removeClass('heighfield');
	$("#cropGroupId").removeClass('heighfield');
	$("#seasonId").removeClass('heighfield');
	if (value == null || value == "" | value == undefined) {
		$("#sinchitArea").val("");
		$("#asinchitArea").val("");
		$("#sinchitArea").attr('disabled', false);
		$("#asinchitArea").attr('disabled', false);
		$("#waterResourceId").attr('disabled', true);
		$("#sourceOfIrrigationId").attr('disabled', true);
		$("#sourceOfIrrigationId").val(
				$("#sourceOfIrrigationId option:first").val());
		$("#waterResourceId").val($("#waterResourceId option:first").val());
	} else {
		if (value != null || value != "" | value != undefined) {
			if (isValidDecimal(value)) {

				var sudhBya = parseFloat($("#txtSudhBoya").val());
				var remainingSudhBya = parseFloat($("#remainingSudhBya").val());

				// alert(sudhBya);
				// alert(remainingSudhBya);

				if (remainingSudhBya != NaN
						&& parseFloat(value) < remainingSudhBya) {
					if (parseFloat(value) <= remainingSudhBya) {
						$("#waterResourceId").attr('disabled', false);
						// $("#sourceOfIrrigationId").attr('disabled', false);
						$("#asinchitArea").attr('disabled', true);
						/*
						 * $("#remainingSudhBya").val(
						 * parseFloat(remainingSudhBya + parseFloat(value)));
						 */
					} else {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#sinchitArea").attr('disabled', false);
						$("#sinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', false);
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						/*
						 * $("#sourceOfIrrigationId").attr('disabled', false);
						 * $("#sourceOfIrrigationId").val($("#sourceOfIrrigationId
						 * option:first").val());
						 */
						// $("#cropId").val($("#cropId option:first").val());
					}

				} else {
					if (parseFloat(value) <= sudhBya) {
						$("#waterResourceId").attr('disabled', false);
						// $("#sourceOfIrrigationId").attr('disabled', false);
						$("#asinchitArea").attr('disabled', true);
						/*
						 * $("#remainingSudhBya").val( parseFloat(sudhBya -
						 * parseFloat(value)));
						 */
					} else {
						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#sinchitArea").attr('disabled', false);
						$("#sinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', false);
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						/*
						 * $("#sourceOfIrrigationId").attr('disabled', false);
						 * $("#sourceOfIrrigationId").val($("#sourceOfIrrigationId
						 * option:first").val());
						 */
						// $("#cropId").val($("#cropId option:first").val());
					}
				}
			} else {
				$("#sinchitArea").val("");
				$("#asinchitArea").val("");
				$("#sinchitArea").attr('disabled', false);
				$("#asinchitArea").attr('disabled', false);
				$("#waterResourceId").attr('disabled', true);
				/*
				 * $("#waterResourceId").val($("#waterResourceId
				 * option:first").val());
				 */
				$("#sourceOfIrrigationId").attr('disabled', true);
				/*
				 * $("#sourceOfIrrigationId").val($("#sourceOfIrrigationId
				 * option:first").val());
				 */
				/* $("#cropId").val($("#cropId option:first").val()); */
			}
		}
	}
}

/* Added By Vivek Tiwari */
function disableSinchit(value) {

	$("#orderNo").removeClass('heighfield');
	$("#orderBy").removeClass('heighfield');
	$("#orderDate").removeClass('heighfield');
	$("#orderRemarks").removeClass('heighfield');

	$("#cropId").removeClass('heighfield');
	$("#sinchitArea").removeClass('heighfield');
	$("#asinchitArea").removeClass('heighfield');
	$("#waterResourceId").removeClass('heighfield');
	$("#sourceOfIrrigationId").removeClass('heighfield');
	$("#cropGroupId").removeClass('heighfield');
	$("#seasonId").removeClass('heighfield');
	if (value == null || value == "" | value == undefined) {
		$("#sinchitArea").val("");
		$("#asinchitArea").val("");
		$("#sinchitArea").attr('disabled', false);
		$("#asinchitArea").attr('disabled', false);
		$("#waterResourceId").attr('disabled', true);
		$("#sourceOfIrrigationId").attr('disabled', true);
	} else {
		if (value != null || value != "" | value != undefined) {
			if (isValidDecimal(value)) {
				var sudhBya = parseFloat($("#txtSudhBoya").val());
				var remainingSudhBya = parseFloat($("#remainingSudhBya").val());

				// alert("sudhBya-----"+sudhBya);
				// alert("remainingSudhBya-----"+remainingSudhBya);

				if (remainingSudhBya != NaN
						&& parseFloat(value) <= parseFloat(remainingSudhBya)) {

					if (parseFloat(value) <= parseFloat(remainingSudhBya)) {

						// alert("1");

						$("#sinchitArea").attr('disabled', true);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
						/*
						 * $("#remainingSudhBya").val(
						 * parseFloat(remainingSudhBya + parseFloat(value)));
						 */
					} else {

						// /alert("2");

						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#sinchitArea").attr('disabled', false);
						$("#sinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").attr('disabled', true);
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						// $("#cropId").val($("#cropId option:first").val());
					}
				} else {
					if (parseFloat(value) <= parseFloat(sudhBya)) {

						// alert("3");

						$("#sinchitArea").attr('disabled', true);
						$("#waterResourceId").attr('disabled', true);
						$("#sourceOfIrrigationId").attr('disabled', true);
						/*
						 * $("#remainingSudhBya").val( parseFloat(sudhBya -
						 * parseFloat(value)));
						 */
					} else {

						// alert("4");

						alert("सम्मिलित क्षेत्रफल शुद्ध बोया क्षेत्रफल से अधिक नहीं हो सकता |");
						$("#sinchitArea").val("");
						$("#asinchitArea").val("");
						$("#sinchitArea").attr('disabled', false);
						$("#sinchitArea").attr('disabled', false);
						$("#waterResourceId").attr('disabled', true);
						$("#waterResourceId").val(
								$("#waterResourceId option:first").val());
						$("#sourceOfIrrigationId").attr('disabled', true);
						$("#sourceOfIrrigationId").val(
								$("#sourceOfIrrigationId option:first").val());
						// $("#cropId").val($("#cropId option:first").val());
					}
				}
			} else {
				$("#sinchitArea").val("");
				$("#asinchitArea").val("");
				$("#sinchitArea").attr('disabled', false);
				$("#asinchitArea").attr('disabled', false);
				$("#waterResourceId").attr('disabled', true);
				$("#sourceOfIrrigationId").attr('disabled', true);
			}
		}
	}
}
function searchKhasraOwnerDetailReport() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	/*
	 * var khasraId = document.getElementById("khasraId").value; var ownerId =
	 * document.getElementById("ownerId").value;
	 */
	var ownerId = "";
	var khasraId = "";
	var khasraFlag = document.getElementById('khasraLabelFlag').value;

	if (khasraFlag == 0) {

	} else {

		if (khasraFlag == 1) {

			ownerId = document.getElementById("ownerId").value;

			if (ownerId == 0) {

				document.getElementById('checkValidateFlag').value = "X";
			} else {

				document.getElementById('checkValidateFlag').value = "Y";
			}

		}

		else {

			khasraId = document.getElementById("khasraId").value;

			if (khasraId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

	}

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	}/*
		 * else if (khasraId == 0 && ownerId == 0) { var khasraOwnerError =
		 * document.getElementById("khasraOwnerError");
		 * 
		 * khasraOwnerError.style.display = "inline";
		 * document.getElementById("khasraOwnerError").innerHTML = "कृपया खसरा
		 * या भूमिस्वामी का चयन करें"; return false; }
		 */

	else if (khasraFlag == 0) {

		var radioSelectError = document.getElementById("radioSelectError");

		radioSelectError.style.display = "inline";
		document.getElementById("radioSelectError").innerHTML = "कृपया चयन करें |";
		return false;
	}

	else if (document.getElementById('checkValidateFlag').value == "X") {

		if (khasraFlag == 1) {

			if (ownerId == 0) {

				var ownerNameError = document.getElementById("ownerNameError");

				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूमिस्वामी का चयन करें |";
				return false;
			}

		}
		if (khasraFlag == 2) {
			if (khasraId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया खसरा का चयन करें |";
				return false;
			}

		}
	}

	else {

		var url = "ownerDetailEditReport.do";
		/*
		 * var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId +
		 * '&riId=' + riId + '&halkaId=' + halkaId + '&villageId=' + villageId +
		 * '&khasraId=' + khasraId + '&ownerId=' + ownerId;
		 */

		var params = "";

		if (khasraFlag == 1) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + ownerId;

		}

		if (khasraFlag == 2) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + khasraId + '&ownerId=' + 0;

		}

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';
		loadDataNew(url, "khasaraListDiv", "viewKhasraChakeri", params);

		// alert("abc");
		/*
		 * document.getElementById('khasaraListDiv').innerHTML = "";
		 * document.getElementById('khasaraListDiv').style.display = 'block';
		 * 
		 * loadDataNew(url, "khasaraListDiv", "", params);
		 */

		/*
		 * document.khasraform.action = "khasraDetail.do";
		 * document.khasraform.submit();
		 */
	}

}
function searchKhasraDetailFreeReport() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	/*
	 * var khasraId = document.getElementById("khasraId").value; var ownerId =
	 * document.getElementById("ownerId").value;
	 */
	var ownerId = "";
	var khasraId = "";
	var khasraFlag = document.getElementById('khasraLabelFlag').value;

	if (khasraFlag == 0) {

	} else {

		if (khasraFlag == 1) {

			ownerId = document.getElementById("ownerId").value;

			if (ownerId == 0) {

				document.getElementById('checkValidateFlag').value = "X";
			} else {

				document.getElementById('checkValidateFlag').value = "Y";
			}

		}

		else {

			khasraId = document.getElementById("khasraId").value;

			if (khasraId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

	}

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	}/*
		 * else if (khasraId == 0 && ownerId == 0) { var khasraOwnerError =
		 * document.getElementById("khasraOwnerError");
		 * 
		 * khasraOwnerError.style.display = "inline";
		 * document.getElementById("khasraOwnerError").innerHTML = "कृपया खसरा
		 * या भूमिस्वामी का चयन करें"; return false; }
		 */

	else if (khasraFlag == 0) {

		var radioSelectError = document.getElementById("radioSelectError");

		radioSelectError.style.display = "inline";
		document.getElementById("radioSelectError").innerHTML = "कृपया चयन करें |";
		return false;
	}

	else if (document.getElementById('checkValidateFlag').value == "X") {

		if (khasraFlag == 1) {

			if (ownerId == 0) {

				var ownerNameError = document.getElementById("ownerNameError");

				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूमिस्वामी का चयन करें |";
				return false;
			}

		}
		if (khasraFlag == 2) {
			if (khasraId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया खसरा का चयन करें |";
				return false;
			}

		}
	}

	else {

		var url = "khasraDetailFreeReport.do";
		/*
		 * var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId +
		 * '&riId=' + riId + '&halkaId=' + halkaId + '&villageId=' + villageId +
		 * '&khasraId=' + khasraId + '&ownerId=' + ownerId;
		 */

		var params = "";

		if (khasraFlag == 1) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + ownerId;

		}

		if (khasraFlag == 2) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + khasraId + '&ownerId=' + 0;

		}

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';
		loadDataNew(url, "khasaraListDiv", "viewKhasraChakeri", params);

		// alert("abc");
		/*
		 * document.getElementById('khasaraListDiv').innerHTML = "";
		 * document.getElementById('khasaraListDiv').style.display = 'block';
		 * 
		 * loadDataNew(url, "khasaraListDiv", "", params);
		 */

		/*
		 * document.khasraform.action = "khasraDetail.do";
		 * document.khasraform.submit();
		 */
	}

}
function searchKhasraDetailFree() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	/*
	 * var khasraId = document.getElementById("khasraId").value; var ownerId =
	 * document.getElementById("ownerId").value;
	 */
	var ownerId = "";
	var khasraId = "";
	var khasraFlag = document.getElementById('khasraLabelFlag').value;

	if (khasraFlag == 0) {

	} else {

		if (khasraFlag == 1) {

			ownerId = document.getElementById("ownerId").value;

			if (ownerId == 0) {

				document.getElementById('checkValidateFlag').value = "X";
			} else {

				document.getElementById('checkValidateFlag').value = "Y";
			}

		}

		else {

			khasraId = document.getElementById("khasraId").value;

			if (khasraId == 0) {

				document.getElementById('checkValidateFlag').value = "X";

			} else {

				document.getElementById('checkValidateFlag').value = "Y";

			}
		}

	}

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	}/*
		 * else if (khasraId == 0 && ownerId == 0) { var khasraOwnerError =
		 * document.getElementById("khasraOwnerError");
		 * 
		 * khasraOwnerError.style.display = "inline";
		 * document.getElementById("khasraOwnerError").innerHTML = "कृपया खसरा
		 * या भूमिस्वामी का चयन करें"; return false; }
		 */

	else if (khasraFlag == 0) {

		var radioSelectError = document.getElementById("radioSelectError");

		radioSelectError.style.display = "inline";
		document.getElementById("radioSelectError").innerHTML = "कृपया चयन करें |";
		return false;
	}

	else if (document.getElementById('checkValidateFlag').value == "X") {

		if (khasraFlag == 1) {

			if (ownerId == 0) {

				var ownerNameError = document.getElementById("ownerNameError");

				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया भूमिस्वामी का चयन करें |";
				return false;
			}

		}
		if (khasraFlag == 2) {
			if (khasraId == 0) {
				var ownerNameError = document.getElementById("ownerNameError");
				ownerNameError.style.display = "inline";
				document.getElementById("ownerNameError").innerHTML = "कृपया खसरा का चयन करें |";
				return false;
			}

		}
	}

	else {

		var url = "khasraDetailFree.do";
		/*
		 * var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId +
		 * '&riId=' + riId + '&halkaId=' + halkaId + '&villageId=' + villageId +
		 * '&khasraId=' + khasraId + '&ownerId=' + ownerId;
		 */

		var params = "";

		if (khasraFlag == 1) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + 0 + '&ownerId=' + ownerId;

		}

		if (khasraFlag == 2) {

			params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
					+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
					+ villageId + '&khasraId=' + khasraId + '&ownerId=' + 0;

		}

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';
		loadDataNew(url, "khasaraListDiv", "viewKhasraChakeri", params);

		// alert("abc");
		/*
		 * document.getElementById('khasaraListDiv').innerHTML = "";
		 * document.getElementById('khasaraListDiv').style.display = 'block';
		 * 
		 * loadDataNew(url, "khasaraListDiv", "", params);
		 */

		/*
		 * document.khasraform.action = "khasraDetail.do";
		 * document.khasraform.submit();
		 */
	}

}

/**
 * ****************************************************by anuj on
 * 24-01-2013*****************************
 */
function savePymentPending() {

	// alert("anuj-pppppppppppppppppppppending");

	var id = document.paymentEntry.id.value;

	document.paymentEntry.action = 'savePaymentPending.do?ownerName='
			+ document.paymentEntry.ownerName.value + '&serviceName='
			+ document.paymentEntry.serviceName.value + '&balance='
			+ document.paymentEntry.balance.value + '&fee='
			+ document.paymentEntry.fee.value + '&deposit='
			+ document.paymentEntry.deposit.value + '&requestId='
			+ document.paymentEntry.requestId.value + '&location='
			+ document.paymentEntry.location.value + '&transactionId='
			+ document.paymentEntry.transactionId.value;
	document.paymentEntry.submit();
	var btnid = document.getElementById('buttonId').value;
	window.opener.document.getElementById(btnid).disabled = true;
	window.opener.document.getElementById(btnid).className = "appBtnsDisabled";
	// closeWindowPending(id);

}

function approvalRequestPending(url, param, requestName) {
	var requestId = param;
	var ind = requestId.indexOf("=");
	var request = requestId.substring(requestId.indexOf("requestId=") + 10,
			requestId.indexOf("&khasraId"));

	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				response = mypostrequest.responseText;
				if (response == "yes") {
					document.getElementById(requestName).className = "appBtnsDisabled";
					document.getElementById(requestName).disabled = true;

					/*
					 * document.getElementById('printTrans').className =
					 * "appBtnsPayment";
					 * document.getElementById('printTrans').disabled = false;
					 */
					alert(" आवेदन नंबर  " + request
							+ " स्वीकृति के लिए भेज दिया गया है |");

				}

			}
		}
	};
	mypostrequest.open("POST", url, true);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(param);

}

function forgotpwduid() {
	

	var loginId = document.getElementById('loginId1').value;
	//alert(">>>>>>"+loginId);
	if (loginId == '') {
		alert("कृपया उपयोगकर्ता का नाम दर्ज करें.");
		return false;
	}
	var userType = document.getElementsByName('userTypefp');
	//alert("tttt"+userType);
	var len = userType.length;
	// alert("length is" + len);
	var val;
	for ( var i = 0; i < len; i++) {
		if (userType[i].checked == true) {
			val = i;
			//alert("val is" + val);
			break;
		}

	}
	if (val != 0 && val != 1 &&  val != 2) {
		alert("उपयोगकर्ता प्रकार का चयन करें |");
		return false;
	}

	var checkedvalue = userType[val].value;
	

	/*
	 * document.getElementById('btnFeeDTL').value="संसोधन करे";
	 * document.getElementById('buttondtlVal').value="Update"; var
	 * a=document.getElementById('updateFeeDtlId').value;
	 * 
	 * //alert(a);
	 * 
	 * //alert(document.getElementById('description').value,document.getElementById('Unitrate').value,document.getElementById('CollectedBy').value
	 * ,document.getElementById('taxrate').value,document.getElementById('btnFeeDTL').value,document.getElementById('seqNo').value);
	 * var b = str;
	 * 
	 */

	/*
	 * loadData('saveForgotPasswordUserId.do', 'result', '&loginId1=' +
	 * document.getElementById('loginId1').value + '&userTypefp=' +
	 * checkedvalue);
	 */

	loadData('getDetailForFP.do', 'result', '&loginId1='
			+ document.getElementById('loginId1').value + '&userTypefp='
			+ checkedvalue);
}

function forgotpwdsecanscheck() {
	var answer = document.getElementById('secretAnswer').value;
	// var originalans=document.getElementById('originalans').value;
	var question = document.getElementById('secretQuestion').value;

	if (answer == '') {
		alert("error");
		// var a = check('answer', 'answer_error');
		return false;
	}

	loadData('checkAnswer.do', 'result', 'secretAnswer='
			+ document.getElementById('secretAnswer').value
			+ '&originalAnswer='
			+ document.getElementById('originalAnswer').value
			+ '&secretQuestion='
			+ document.getElementById('secretQuestion').value);
}

function forgotpwdchange() {
	var k = 10;
	var emailId = document.getElementById('mailId').value;
	var mobileNo = document.getElementById('mobileNo1').value;
	var mobileNoResp = document.getElementById('mobileNoResp').value;
	var mailIdResp = document.getElementById('mailIdResp').value;

	/*
	 * if (emailId == '') { alert("कृपया ईमेल आई.डी. भरें."); return false; }
	 */

	if (emailId == "" && mobileNo == "") {
		alert("कृपया  ईमेल आईडी या मोबाइल नंबर दर्ज करें |");
		return false;

	}
	if (emailId != '') {
		if (ValidateEmailAddress(emailId) == false) {
			document.getElementsByName('mailId')[index].focus();
			return false;

		}

		if (emailId != mailIdResp) {
			alert("यह मेल आई.डी. दी गयी मेल आई.डी. से अलग है |");
			return false;
		}
	}

	/*
	 * if (mobileNo.length < 1) { var mobile =
	 * document.getElementById("mobileNo1"); mobile.style.display = "inline";
	 * alert(document.getElementById("mobileNo1").innerHTML = " कृपया मोबाइल
	 * नंबर भरे| "); document.getElementsById('mobileNo1')[index].focus();
	 * return false; }
	 */

	if (mobileNo != 0) {

		if (isNaN(mobileNo)) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = "कृपया मोबाइल नंबर अंको में भरे|");
			return false;
		} else if (mobileNo.length > k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = " मोबाइल नंबर  "
					+ k + " अंको का होना चाहिए|");

			return false;
		} else if (mobileNo.length < k) {
			var mobile = document.getElementById("mobileNo1");
			mobile.style.display = "inline";
			alert(document.getElementById("mobileNo1").innerHTML = " मोबाइल नंबर "
					+ k + " अंको का होना चाहिए|");

			return false;
		}

		else if (mobileNoResp != mobileNo) {
			alert("यह मोबाइल नंबर दिए गए मोबाइल नंबर से अलग है |");
			return false;
		}
	}

	/*
	 * if (mobileNoResp != mobileNo) { alert("यह मोबाइल नंबर दिए गए मोबाइल नंबर
	 * से अलग है."); return false; }
	 */

	loadData('sendPassword.do', 'result', 'mailId='
			+ document.getElementById('mailId').value + '&mobileNo1='
			+ document.getElementById('mobileNo1').value + '&userTypefp='
			+ document.getElementById('userTypefp').value + '&loginId1='
			+ document.getElementById('loginId1').value + '&firstName='
			+ document.getElementById('firstName').value);
}

/* This is for Fee Details nishith */

function updateFeeDtl(str) {

	document.getElementById('btnFeeDTL').value = "संशोधन करे";
	document.getElementById('buttondtlVal').value = "Update";
	var a = document.getElementById('updateFeeDtlId').value;
	// alert(document.getElementById('btnFeeDTL').value);
	// alert(a);

	// alert(document.getElementById('description').value,document.getElementById('Unitrate').value,document.getElementById('CollectedBy').value
	// ,document.getElementById('taxrate').value,document.getElementById('btnFeeDTL').value,document.getElementById('seqNo').value);
	var b = str;

	var idArr = a.split("#");

	var strArr = b.split("#");

	// alert(idArr.length);

	for ( var x = 0; x < idArr.length; x++) {

		document.getElementById(idArr[x]).value = strArr[x];

	}

}

function loadDataDyanamic(url, div, params) {
	// alert("url:" + url);
	// alert("div:" + div);

	try {

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) { loader(); }
			 */

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(div).innerHTML = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById(div).innerHTML =
					// xml.responseText;

				} else {
					alert("An error has occured making the request");
				}

				// remove_popup();
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

function loadDataReset(url, div, chakri, params) {
	// alert("div:" + div);
	// alert("url:" + url);
	/* alert("params:" + params); */
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		/*
		 * if(xml.readyState==1) {
		 */

		// loader(chakri);
		// }
		// alert("xml.readyState:" + xml.readyState);
		if (xml.readyState == 4) {
			// alert("1:"+xml.status);
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert("2");
				// alert("xml.responseText:" + xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(div).innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(div).innerHTML = xml.responseText;

			} else {
				// alert("3");
				// alert("An error has occured making the request");
			}

			// remove_popup(chakri);
		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

function loadOwnerEdit(url, div, param) {

	if (url == "cancel") {
		document.getElementById(div).style.display = "none";
	}

	else {
		var rval = $("input:radio[name='rdbtnNew']:checked").val();
		rval = 'requestParam=' + rval;
		document.getElementById(div).style.display = "block";
		loadDataNew('editOwner.do', div, 'divChakeri', rval);

	}

}
function enableOrderDetail() {

	var soilVal = document.getElementById('soilType').value;

	var wipSoilTypeListSize = document.getElementById('wipSoilTypeListSize').value;

	// alert("soilVal--"+soilVal);

	if (soilVal == 0) {
		$("#pAdesh").hide();
		$("#pdabar").hide();
		$("#pAdeshDinanka").hide();
		$("#pAdeshRemark").hide();
		$("#divOrderNo").hide();
		$("#divOrderBy").hide();
		$("#divOrderDt").hide();
		$("#divOrderRemark").hide();
		$("#divbtn").hide();

		if (wipSoilTypeListSize == 0)
			$("#trGeneralInfo").hide();

	} else {
		$("#pAdesh").show();
		$("#pdabar").show();
		$("#pAdeshDinanka").show();
		$("#pAdeshRemark").show();
		$("#divOrderNo").show();
		$("#divOrderBy").show();
		$("#divOrderDt").show();
		$("#divOrderRemark").show();
		$("#divbtn").show();

		if (wipSoilTypeListSize == 0)
			$("#trGeneralInfo").show();

		$("#orderRemarks").attr('disabled', false);
		$("#orderDate").attr('disabled', false);
		$("#orderBy").attr('disabled', false);
		$("#orderNo").attr('disabled', false);
		$("#oId").show();
	}

}

function callGeneralInfoEditLambit(requestId, khasraId, khasraNo, villageName) {
	var requestType = "edit";
	loadContent('generalInfoLambit.do', '&khasraId=' + khasraId + '&requestId='
			+ requestId + '&requestType=' + requestType + '&khasraNo='
			+ khasraNo + '&villageName=' + villageName);

}

function fnFilterGlobal(tableId) {
	$('#' + tableId).dataTable().fnFilter($("#global_filter").val(), null,
			$("#global_regex")[0].checked, $("#global_smart")[0].checked);
}

function fnFilterColumn(i, tableId) {
	$('#' + tableId).dataTable().fnFilter(
			$("#col" + (i + 1) + "_filter").val(), i,
			$("#col" + (i + 1) + "_regex")[0].checked,
			$("#col" + (i + 1) + "_smart")[0].checked);
}

function initializeDataTable(tableId) {
	$('#' + tableId).dataTable();

	$("#global_filter").keyup(fnFilterGlobal(tableId));
	$("#global_regex").click(fnFilterGlobal(tableId));
	$("#global_smart").click(fnFilterGlobal(tableId));

	$("#col5_filter").change(function() {
		fnFilterColumn(4, tableId);
	});
	$("#col5_regex").click(function() {
		fnFilterColumn(4, tableId);
	});
	$("#col5_smart").click(function() {
		fnFilterColumn(4, tableId);
	});
}

function a1radio() {

	var waterId = $("#waterResourceId option:selected").val().split("-")[0];
	// alert("waterId"+waterId);

	loadData('cropDtlFromCropgrpIdSeason.do', 'cropGridDivSeason', 'waterId='
			+ waterId);
	$("#sourceOfIrrigationId").attr('disabled', false);
	$("#sourceOfIrrigationId").val(
			$("#sourceOfIrrigationId option:first").val());
	// loadData(url, div, params);
}
function startEndYear(field) {
	loadDataArrear('viewArrearDiv.do', 'arrearDiv', 'yearId=' + field);
	// loadData(url, div, params);
}
function loadDataArrear(url, div, params) {

	try {

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) { loader(); }
			 */
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(div).innerHTML = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					alert("An error has occured making the request");
				}

				// remove_popup();
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

function toGetMasterField(bodyLoadId, Id) {

	if (bodyLoadId != '0') {
		// alert("in loop");
		loadData('getMasterColumnList.do', 'masterAreaDiv', 'masterTableId='
				+ Id);

	}

}

function saveMasterRecord(dropParameterString, textParameterString) {
	var checkValid = 0;
	var a = dropParameterString;
	var b = textParameterString;
	var c = document.getElementById('onlyNumIds').value;

	var dropArray1 = a.split("#");

	var textArray1 = b.split("#");

	var onlyNumArray1 = c.split("#");

	var d = document.getElementById('dropAliasId').value;
	var e = document.getElementById('textAliasId').value;

	var dropArray1 = a.split("#");
	var dropAliasArray1 = d.split("#");
	var textAliasArray1 = e.split("#");

	for ( var y = 0; y < textArray1.length - 1; y++) {

		if (document.getElementById(textArray1[y]).value == "") {
			alert("कृपया " + textAliasArray1[y] + " भरे");
			checkValid++;
			return false;
		}

	}

	for ( var z = 0; z < onlyNumArray1.length - 1; z++) {

		if (isNaN(document.getElementById(onlyNumArray1[z]).value)) {
			alert("कृपया केवल अंकों में दर्ज करें|");
			checkValid++;
			return false;
		}

	}

	for ( var x = 0; x < dropArray1.length - 1; x++) {

		if (document.getElementById(dropArray1[x]).value == "00") {
			alert("कृपया " + dropAliasArray1[x] + " चयन करे");
			checkValid++;
			return false;
		}

	}

	if (checkValid == 0) {

		document.getElementById('buttonId').onchange();

	} else {

	}
}

function openNewWindowActivity(url) {
	// alert("URL:"+url)
	popupWin = window.open(url, 'open_window',
			'scrollbars=yes, dependent, width=750, height=200');
}

function checkActivityStatus() {
	var activity = document.getElementById('requestclrid').value;
	activityId = activity.trim();
	var substring = activityId.substr(0, 2);

	var len = activityId.length;

	if (activityId == '') {
		var error = document.getElementById('activityId_error');

		error.style.display = "inline";

		document.getElementById('activityId_error').innerHTML = "कृप्या आई.डी. भरें |";
		document.getElementById('requestclrid').value = "";

		return false;
	} else if (substring == 'GV') {

		openNewWindowActivity('SearchbyReqClrId.do?requestclrid=' + activityId);

	} else if (len != 22) {

		var error = document.getElementById('activityId_error');

		error.style.display = "inline";

		document.getElementById('activityId_error').innerHTML = "कृप्या सही आई.डी. दर्ज करें |";
		document.getElementById('requestclrid').value = "";
		return false;
	}

	else {
		openNewWindowActivity('SearchbyReqClrId.do?requestclrid=' + activityId);
	}
}

function loadDataForAvedak(url, div, params) {

	try {

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			/*
			 * if(xml.readyState==1) { loader(); }
			 */

			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						document.getElementById(div).innerHTML = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById(div).innerHTML =
					// xml.responseText;

				} else {
					alert("An error has occured making the request");
				}

				// remove_popup();
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

function openpdf(khId, reqId) {

	openNewWindow('openPDF.do?requestId=' + reqId + '&khasraId=' + khId);
	/*
	 * document.forgot.action="openPDF.do"; document.forgot.submit();
	 */
}

function openRemarkList(reqId, actionType) {

	openNewWindow('openRemarkList.do?requestId=' + reqId + '&actionType='
			+ actionType);
	/*
	 * document.forgot.action="openPDF.do"; document.forgot.submit();
	 */
}

function loadContentForOnline(url, params) {
	// alert('final 2');
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {
				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					msg = mypostrequest.responseText;

					if (msg == 'OK') {

						showSpan('msgLoginId');

						var loginId = document.getElementById("loginId").value;

						errorMsg = " लॉगइन आईडी '" + loginId
								+ "' पहले से मौजूद हैं । ";

						document.getElementById("msgLoginId").innerHTML = errorMsg;

						document.getElementById("loginId").value = "";
						return true;

					}
				} else {
					top.location.href = 'SessionExpired.do';
				}

				/*
				 * msg=mypostrequest.responseText;
				 * 
				 * 
				 * 
				 * if(msg=='OK') {
				 * 
				 * showSpan('msgLoginId');
				 * 
				 * var loginId = document.getElementById("loginId").value;
				 * 
				 * errorMsg = " लॉगइन आईडी '" + loginId + "' पहले से मौजूद
				 * हैं.";
				 * 
				 * 
				 * document.getElementById("msgLoginId").innerHTML = errorMsg;
				 * 
				 * document.getElementById("loginId").value=""; return true; }
				 */

			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);

	tabs();
}

function loginmd5() {
	// var strhiden = Math.floor(Math.random() * 11)
	alert("1");
	var strhiden = makeid();

	document.getElementById('hdf').value = strhiden;

	alert("2");
	var pwd1 = calcMD5(document.getElementById('password').value);
	alert("3");
	var encipt1 = calcMD5(pwd1 + strhiden);
	document.getElementById('password').maxLength = encipt1.length;
	alert("4");
	document.getElementById('password').value = encipt1;

	alert("5");

}

function makeid() {

	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for ( var i = 0; i < 15; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}
function subsidy(feildId) {

	var mesg = "इस खसरा पर रु." + feildId + ".00 की सब्सिडी दी गई है |";

	$("#remark").val(mesg);
}
function enableCropFeilds(feildId) {

	if (feildId == "cropGroupId") {
		$("#" + feildId).attr('disabled', false);
		$("#sinchitArea").val("");
		$("#asinchitArea").val("");
		/* $("#seasonId").val($("#seasonId option:first").val()); */
		$("#cropGroupId").val($("#cropGroupId option:first").val());
		$("#cropId").val($("#cropId option:first").val());
		$("#waterResourceId").val($("#waterResourceId option:first").val());
		$("#sourceOfIrrigationId").val(
				$("#sourceOfIrrigationId option:first").val());

		/* $("#cropGroupId").attr('disabled', true); */
		$("#cropId").attr('disabled', true);
		$("#sinchitArea").attr('disabled', true);
		$("#asinchitArea").attr('disabled', true);
		$("#waterResourceId").attr('disabled', true);
		$("#sourceOfIrrigationId").attr('disabled', true);
	}

	if (feildId == "cropId") {
		$("#" + feildId).attr('disabled', false);
		$("#sinchitArea").val("");
		$("#asinchitArea").val("");
		/*
		 * $("#seasonId").val($("#seasonId option:first").val());
		 * $("#cropGroupId").val($("#cropGroupId option:first").val());
		 */
		$("#cropId").val($("#cropId option:first").val());
		$("#waterResourceId").val($("#waterResourceId option:first").val());
		$("#sourceOfIrrigationId").val(
				$("#sourceOfIrrigationId option:first").val());

		/*
		 * $("#cropGroupId").attr('disabled', true);
		 * $("#cropId").attr('disabled', true);
		 */
		$("#sinchitArea").attr('disabled', true);
		$("#asinchitArea").attr('disabled', true);
		$("#waterResourceId").attr('disabled', true);
		$("#sourceOfIrrigationId").attr('disabled', true);
	}

	if (feildId == "sinchitArea") {
		$("#sinchitArea").val("");
		$("#asinchitArea").val("");
		$("#" + feildId).attr('disabled', false);
		$("#asinchitArea").attr('disabled', false);
		$("#waterResourceId").val($("#waterResourceId option:first").val());
		$("#sourceOfIrrigationId").val(
				$("#sourceOfIrrigationId option:first").val());
		$("#waterResourceId").attr('disabled', true);
		$("#sourceOfIrrigationId").attr('disabled', true);
	}
}

function checkReportSize() {

	var reprtsize = document.getElementById('reportsize').value;

	// openNewWindow('pdfServlet?pdfPath='
	// + document.getElementById('pdf').value);
	/*
	 * openNewReportWindow('viewReportPdf.do?filePath=' +
	 * document.getElementById('pdf').value + '&finalPdfName=' +
	 * document.getElementById('finalPdfName').value);
	 */

	document.getElementById('pdfBtn').onchange();

}

// Added By Vivek TIWARI
function minusCropDeleted(tableID) {
	// var snchtCrpTtl = 0;
	// var aSnchtCrpTtl = 0;
	var deletedCropArea = 0;
	var sinchitArea = 0;
	var aSinchitArea = 0;
	var sudhBya = parseFloat($("#txtSudhBoya").val());
	var cropArray = new Array();
	$("div.cropCheck :input").each(function() {
		if ($(this).is(':checked')) {
			cropArray.push($(this).attr('id'));
		}
	});
	// alert("length"+cropArray.length);
	for ( var i = 0; i < cropArray.length; i++) {
		sinchitArea = parseFloat(sinchitArea)
				+ parseFloat($("#dataSinchitArea" + String(cropArray[i])).val());
		// alert("1111"+sinchitArea);

		/*
		 * if(sinchitArea != 0.000){
		 * sinchitArea=parseFloat(sinchitArea)+parseFloat($("#dataSinchitArea" +
		 * String(cropArray[i])).val()); alert("22222"+sinchitArea); }
		 */aSinchitArea = parseFloat(aSinchitArea)
				+ parseFloat($("#dataAsinchitArea" + String(cropArray[i]))
						.val());
		/*
		 * if(aSinchitArea != 0.000){ aSinchitArea; }
		 */

		// alert(sinchitArea);
		// alert(aSinchitArea);
		deletedCropArea = parseFloat(deletedCropArea) + parseFloat(sinchitArea)
				+ parseFloat(aSinchitArea);
		var row = "cropRow" + String(cropArray[i]);
		$('#' + row).remove();
	}

	var irrigArea = $("#irrigArea").val();
	/*
	 * if(irrigArea == ""){ $("#irrigArea").val("1"); }
	 */
	if (irrigArea != "") {
		// alert(sinchitArea);
		// irrigArea = Number(irrigArea);
		$("#irrigArea").val(
				(parseFloat(irrigArea) - parseFloat(sinchitArea)).toFixed(3));
	}

	var unIrrigArea = $("#unIrrigArea").val();
	/*
	 * if(unIrrigArea == ""){ $("#unIrrigArea").val("1"); }
	 */
	if (unIrrigArea != "") {
		// unIrrigArea = Number(unIrrigArea);
		// alert(aSinchitArea);

		$("#unIrrigArea")
				.val(
						(parseFloat(unIrrigArea) - parseFloat(aSinchitArea))
								.toFixed(3));
	}
	// alert("Area Recovered After Deleting "+deletedCropArea);
	// alert("remainingSudhBya before Deletion
	// "+parseFloat($("#remainingSudhBya").val()).toFixed(3));
	// alert("remainingSudhBya after
	// Deletion"+parseFloat(parseFloat($("#remainingSudhBya").val())-deletedCropArea).toFixed(3));
	var remainingSudhBya = parseFloat(
			parseFloat($("#remainingSudhBya").val()) - deletedCropArea)
			.toFixed(3);
	if (remainingSudhBya > sudhBya) {
		$("#doubleCropArea").val(
				parseFloat(remainingSudhBya - sudhBya).toFixed(3));

		$("#divDoublecrop").text(
				parseFloat(remainingSudhBya - sudhBya).toFixed(3));

	}
	if (remainingSudhBya <= sudhBya) {
		$("#doubleCropArea").val(parseFloat(0).toFixed(3));

		$("#divDoublecrop").text(parseFloat(0).toFixed(3));

	}
	$("#remainingSudhBya").val(
			parseFloat(
					parseFloat($("#remainingSudhBya").val()) - deletedCropArea)
					.toFixed(3));
	// deleteRow(tableID);

	var sinchitArea1 = parseFloat($("#sinchitAreaDivId").text()).toFixed(3);

	var asinchitArea1 = parseFloat($("#asinchitAreaDivId").text()).toFixed(3);

	// alert(sinchitArea);
	// alert(aSinchitArea);

	if (aSinchitArea != 0) {
		var valueAsinchit = (parseFloat(asinchitArea1) - parseFloat(aSinchitArea))
				.toFixed(3);

		// alert("333333333"+valueAsinchit);

		$("#asinchitAreaDivId").text(valueAsinchit);

	}

	if (sinchitArea != 0) {

		var valueSinchit = (parseFloat(sinchitArea1) - parseFloat(sinchitArea))
				.toFixed(3);

		// alert("---2222--"+valueSinchit);

		$("#sinchitAreaDivId").text(valueSinchit);

	}

}
function SaveOwner(url) {

	var fromPage = document.getElementById("fromPage").value;
	var rdbtn = document.getElementById('rdbtn').value;
	var firstName = document.getElementById('firstName').value;
	var middleName = document.getElementById('middleName').value;
	var lastName = document.getElementById('lastName').value;
	var sex = document.getElementById('sex').value;
	var relationId = document.getElementById('relationId').value;
	var fatherName = document.getElementById('fatherName').value;
	var casteId = document.getElementById('casteId').value;
	var casteNameId = document.getElementById('casteNameId').value;
	var cHouseNo = document.getElementById('cHouseNo').value;
	var cVillageName = document.getElementById('cVillageName').value;
	var cStreetAreaName = document.getElementById('cStreetAreaName').value;
	var cPostOffice = document.getElementById('cPostOffice').value;
	var cThana = document.getElementById('cThana').value;
	var stdCode = document.getElementById('stdCode').value;
	var districtId = document.getElementById('districtId').value;
	var cPinCode = document.getElementById('cPinCode').value;
	var tehsilId = document.getElementById('tehsilId').value;
	var ownerShare = document.getElementById('ownerShare').value;
	var telephoneNo = document.getElementById('telephoneNo').value;
	var mobileNum = document.getElementById('mobileNum').value;
	var emailId = document.getElementById('emailId').value;
	var remarks = document.getElementById('remarks').value;
	var requestParam = document.getElementById('requestParam').value;

	// var shareArea = document.getElementById('shareArea').value;

	document.getElementById('ownerShare').className = "input_w1 bgfieldcolor";
	document.getElementById('firstName').className = "input_w1 bgfieldcolor";
	document.getElementById('sex').className = "input_w1 bgfieldcolor";
	document.getElementById('relationId').className = "input_w1 bgfieldcolor";

	document.getElementById('fatherName').className = "input_w1 bgfieldcolor";
	document.getElementById('casteId').className = "input_w1 bgfieldcolor";
	document.getElementById('casteNameId').className = "input_w1 bgfieldcolor";

	document.getElementById('commStateId').className = "input_w1 bgfieldcolor";
	document.getElementById('tehsilId').className = "input_w1 bgfieldcolor";
	document.getElementById('districtId').className = "input_w1 bgfieldcolor";
	document.getElementById('cPinCode').className = "input_w1 bgfieldcolor";

	var stateName = document.getElementById('commStateId').value.split(',');
	var commStateId = stateName[0];
	var pinCodeFrom = stateName[1];
	var pinCodeTo = stateName[2];

	var pin = cPinCode.substring(0, pinCodeFrom.length);

	if (ownerShare == '') {
		document.getElementById('ownerShare').className = "input_w1 heighfield";
		document.getElementById('ownerShare').focus();
		alert("कृपया हिस्सा  भरे|");
		return false;
	} else if (firstName == '') {
		document.getElementById('firstName').className = "input_w1 heighfield";
		document.getElementById('firstName').focus();
		alert("कृपया नाम भरे|");
		return false;
	} else if (sex == '0') {
		document.getElementById('sex').className = "input_w1 heighfield";
		document.getElementById('sex').focus();
		alert("कृपया लिंग चयन करे|");
		return false;
	} else if (relationId == '0') {
		document.getElementById('relationId').className = "input_w1 heighfield";
		document.getElementById('relationId').focus();
		alert("कृपया संबंध चयन करे|");
		return false;
	} else if (fatherName == '') {
		document.getElementById('fatherName').className = "input_w1 heighfield";
		document.getElementById('fatherName').focus();
		alert("कृपया पिता/पति  नाम भरे|");
		return false;
	} else if (casteId == '0') {
		document.getElementById('casteId').className = "input_w1 heighfield";
		document.getElementById('casteId').focus();
		alert("कृपया जाति चयन करे|");
		return false;
	} else if (casteNameId == '') {
		document.getElementById('casteNameId').className = "input_w1 heighfield";
		document.getElementById('casteNameId').focus();
		alert("कृपया उपजाति भरे|");
		return false;
	} else if (commStateId == '0') {
		document.getElementById('commStateId').className = "input_w1 heighfield";
		document.getElementById('commStateId').focus();
		alert("कृपया राज्य चयन करे|");
		return false;
	} else if (districtId == '0') {
		document.getElementById('districtId').className = "input_w1 heighfield";
		document.getElementById('districtId').focus();
		alert("कृपया जिला चयन करे|");
		return false;
	} else if (tehsilId == '0') {
		document.getElementById('tehsilId').className = "input_w1 heighfield";
		document.getElementById('tehsilId').focus();
		alert("कृपया तहसील चयन करे|");
		return false;
	} else if (cPinCode.length < 6) {
		document.getElementById('cPinCode').className = "input_w1 heighfield";
		document.getElementById('cPinCode').focus();
		alert("कृपया सही पिनकोड भरे|");
		return false;

	} else if (!(pin >= pinCodeFrom && pin <= pinCodeTo)) {
		document.getElementById('cPinCode').className = "input_w1 heighfield";
		document.getElementById('cPinCode').focus();
		alert("कृपया सही पिनकोड भरे|");
		return false;
	} else {
		var params = "rdbtn=" + rdbtn + "&requestParam=" + requestParam + "^"
				+ ownerShare + "^" + firstName + "^" + middleName + "^"
				+ lastName + "^" + fatherName + "^" + sex + "^" + relationId
				+ "^" + cHouseNo + "^" + cVillageName + "^" + cStreetAreaName
				+ "^" + cPostOffice + "^" + cThana + "^" + stdCode + "^"
				+ districtId + "^" + cPinCode + "^" + tehsilId + "^"
				+ telephoneNo + "^" + mobileNum + "^" + emailId + "^"
				+ commStateId + "^" + casteId + "^" + casteNameId + "^"
				+ remarks;

		if (fromPage == 'MUTATION') {
			document.masterOwnershipCleaningForm.action = "saveOwnerEditsByMut.do";
			document.masterOwnershipCleaningForm.submit();
		} else {
			loader('divChakeri');
			loadContent(url, params);
		}

		return true;
	}

}

function mapExists() {

	if (document.getElementById("transactionId").value == "10014") {
		var chck = 0;
		var checkboxes = document.getElementsByName('checkboxid[]');
		var vals = "";
		for ( var i = 0, n = checkboxes.length; i < n; i++) {
			if (checkboxes[i].checked) {
				vals = checkboxes[i].value;
				// alert(vals);

				var khasraId = vals.split(",");

				// alert(khasraId[0]);
				var url = "mapExists.do";
				var params = "khasraId=" + khasraId[0];
				var xml = new ajaxRequest();
				xml.onreadystatechange = function() {
					if (xml.readyState == 4) {
						if (xml.status == 200
								|| window.location.href.indexOf("http") == -1) {

							if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
								var successCode = xml.responseText;
								// alert(successCode);
								if (successCode == 0) {
									chck++;
									var k = +i + +1;
									document.getElementById('chk' + k).checked = false;

								}
							} else {
								top.location.href = 'SessionExpired.do';
							}

							/*
							 * var successCode = xml.responseText;
							 * //alert(successCode); if (successCode == 0) {
							 * chck++; var k =+i + +1;
							 * document.getElementById('chk'+k).checked = false; }
							 */

						}

						else {
							alert("An error has occured making the request");
						}

						// remove_popup();
					}
				};

				xml.open("POST", url, false);
				xml.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xml.send(params);

			}
		}

		if (chck > 0) {
			alert("जिन खसरा संख्याओ का नक्शा उपलब्ध नही है उनका चयन रद्द कर दिया गया है |");
			return false;
			// document.getElementById("transactionId").value = "0";
		}
	}

}

// Added by Prachi for validating if MapExist for Free Map Copy
function mapExistsFree(khasraId, khasraNumber, ownerId, khasraArea, year,
		location) {

	// var owName = document.getElementById("ownerName").value;
	// var owFaName = document.getElementById("ownerFatherName").value;
	var chck = 0;
	var url = "mapExists.do";
	var params = "khasraId=" + khasraId;
	// alert("params"+params);
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {
		// alert("xml.readyState:"+xml.readyState);
		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					var successCode = xml.responseText;
					if (successCode == 0) {
						chck++;
					}
				} else {
					top.location.href = 'SessionExpired.do';
				}
			} else {
				alert("An error has occured making the request");
			}
			// remove_popup();
		}
	};
	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

	if (chck > 0) {
		alert("जिन खसरा संख्याओ का नक्शा उपलब्ध नही है उनका चयन रद्द कर दिया गया है |");
		return false;
		// document.getElementById("transactionId").value = "0";
	} else {
		openNewWindow("mapCopyFree.do?khasraNumber=" + khasraNumber
				+ "&khasraId=" + khasraId + "&khasraArea=" + khasraArea
				+ "&year=" + year + "&location=" + location);
	}
}

// Added by Prachi for validating Diversion before proceeding for
// MapEditing
function divValidateMapBatwara(action, chkri, params) {

	var requestId = document.getElementById("requestId").value;
	var flag = 0;

	if (isAllKhasraDiverted(requestId)) {

		// Validation Action
		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4) {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						successCode = xml.responseText;

					} else {
						top.location.href = 'SessionExpired.do';
					}

				} else {

					alert("An error has occured making the request");
				}

				if (!chkri == "") {
					remove_popup(chkri);
				}
			}
		};
		xml.open("POST", action, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(action);
	}

	if (successCode == 0) {
		alert("यह खसरा संख्या का नक्शा उपलब्ध नही है |");
		return false;
	}

	else {
		document.patwariForm.action = "diversionEditMap.do?" + params;
		document.patwariForm.submit();
	}

}

function validateMapBatwara(action, chkri) {

	var count = document.getElementsByName('batwaraData');
	var val = '';
	var flag = 0;
	var successCode = 1;
	// var act = action.split("=");
	for ( var i = 0; i < count.length; i++) {

		if ((count[i].checked)) {
			flag = 1;
			val = count[i].value;

		}

	}
	if (flag == 0) {
		alert("कृपया खसरा का चयन करें|");
		return false;
	}
	var str = val.split(",");
	var khasraId = str[0];
	var requestId = str[1];
	var khasraNo = str[3];
	var isMapDivided = str[7];

	action = action + "&khasraNo=" + khasraNo + "&khasraId=" + khasraId;

	if (!chkri == "") {
		loader(chkri);
	}

	// Validation Action
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {

			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					successCode = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

			} else {

				alert("An error has occured making the request");
			}

			if (!chkri == "") {
				remove_popup(chkri);
			}
		}
	};
	xml.open("POST", action, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(action);

	// Status of Validation String
	var status = successCode.split("@");

	var stat_batwara = status[0];
	var stat_mapExists = status[2];
	var stat_isKhOwnerExists = status[1];

	if (stat_mapExists == 0) {
		alert("यह खसरा संख्या का नक्शा उपलब्ध नही है |");
		return false;
	} else if (stat_batwara == 3) {
		alert("कृपया खसरा दो या अधिक खसरा में बाटें");
		return false;
	} else if (stat_isKhOwnerExists == 4) {
		alert("कृपया नक्शा परिवर्तन के पूर्व प्रत्येक खसरा भूमि स्वामी के साथ लिंक करे |");
		return false;
	} else {

		/*// check if finalise editing is done or not
		if (isMapDivided == 'Y') {
			var answer = confirm("क्या आप पुनः नक़्शा परिवर्तन करना चाहते हैं|");
			if (answer) {
				document.batwaraOwnerListForm.action = "batwaraPatwariEditMap.do?val="
						+ val;
				document.batwaraOwnerListForm.submit();
			} else {
				if (!chkri == "") {
					remove_popup(chkri);
				}
				return false;
			}
		}

		else {*/
			document.batwaraOwnerListForm.action = "batwaraPatwariEditMap.do?val="
					+ val;
			document.batwaraOwnerListForm.submit();
		//}
	}

}

function backtoBatwara(action, requestId) {

	// Validate and then Save Remarks for Map Editing by AJAX
	var remarks = document.getElementById("remarks").value;
	var mapEditType = document.getElementById("mapEditType").value;
	var requestId = document.getElementById("requestId").value;

	var url = "";
	if (mapEditType == 'BAT') {
		url = "insertMapActivity.do?" + action + "&remarks=" + remarks
				+ "&mapEditType=" + mapEditType;
	} else {
		url = "insertMapActivity.do?" + action + "&remarks=" + remarks
				+ "&mapEditType=" + mapEditType + "&processId="
				+ document.getElementById("processId").value
				+ "&defaultActivity="
				+ document.getElementById("defaultActivity").value
				+ "&statusId=" + document.getElementById("statusId").value;
	}

	var param = "";

	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		if (xml.readyState == 4) {

			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {

					successCode = xml.responseText;
						
					if (successCode=='OK'||successCode == '3') {
						if (remarks == "") {
							document.getElementById("remarks").className = "heighfield";
							alert('कृपया टिप्पणी भरे |');
							return false;
						}

						document.batwaraMapEditForm.action = url;
						document.batwaraMapEditForm.submit();
					}

					else {
						if (mapEditType == 'BAT') {
							if(successCode == '2'){
								alert("कृपया पहले नक़्शा सेव करें|");
							}
							else if (successCode == '1'){
								alert("कृपया बटवारा अनुसार नक़्शा परिवर्तन करें|");
							}
							else{
								document.batwaraMapEditForm.action = url;
								document.batwaraMapEditForm.submit();
							}
						}
						else{
							var answer = confirm("नक़्शा सेव नहीं हुआ है|");
							if (answer) {
								document.batwaraMapEditForm.action = url;
								document.batwaraMapEditForm.submit();
							} else {
								return false;
							}
						}

					}

				} else {
					top.location.href = 'SessionExpired.do';
				}

			} else {

				alert("An error has occured making the request");
			}

			if (!chkri == "") {
				remove_popup(chkri);
			}
		}
	};
	xml.open("POST", action, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(action);

}
// End of Addition by Prachi
function addNewOwner(url, div, param) {

	document.getElementById(div).style.display = "block";
	loadDataNew('addOwner.do', div, 'divChakeri', param);

}

function populateKhasra() {

	if ($("#landTypeId option:selected").text() != $("#landTypeId option:first")
			.text()) {
		loadDataNewKhsraPat('khasraFromVillagePatwari.do',
				'updatedKhasraPatwari', 'landChakeriPatwari', 'villageId='
						+ document.khasraform.villageId.value + '&halkaId='
						+ document.khasraform.halkaId.value + '&riId='
						+ document.khasraform.riId.value + '&tehsilId='
						+ document.khasraform.tehsilId.value + '&distId='
						+ document.khasraform.districtId.value + '&landTypeId='
						+ document.khasraform.landTypeId.value);
		$("#khsrNo").show();
	} else {
		$("#khsrNo").hide();
	}

}

function populateKhasraShow() {

	$("#khsrNo").hide();
	if ($("#villageId option:selected").text() != $("#villageId option:first")
			.text()) {
		loadDataNewKhsraPat('khasraFromVillagePatwari.do',
				'updatedKhasraPatwari', 'villChakeriPatwari', 'villageId='
						+ document.khasraform.villageId.value + '&halkaId='
						+ document.khasraform.halkaId.value + '&riId='
						+ document.khasraform.riId.value + '&tehsilId='
						+ document.khasraform.tehsilId.value + '&distId='
						+ document.khasraform.districtId.value);
		$("#khsrNo").show();
	} else {
		$("#khsrNo").hide();
	}

}
function addPremiumDetails(url, div, btnId, chakeri) {
	var requestId = document.getElementById("requestId").value;
	var premiumRate = document.getElementById('premiumRate').value;
	var totalPremium = document.getElementById('totalPremium').value;
	var annualRent = document.getElementById('annualRent').value;
	var culPenalty = 0;
	var appPenalty = 0;
	var penaltyPercent = 0;
	var bhookhandNo = document.getElementById('bhookhandNo').value;
	var bhookhandArea = document.getElementById('bhookhandArea').value;
	// var indexValue1 = document.getElementById('localityId').selectedIndex;
	// var optionsList1 = document.getElementById("localityId").options;
	// var localityValue = optionsList1[indexValue1].text;
	// var localityId = optionsList1[indexValue1].value;

	//var localityId = document.getElementById("localityId").value;

	var indexValue1 = document.getElementById('landuseType').selectedIndex;
	var optionsList1 = document.getElementById("landuseType").options;
	// var landuseType = optionsList1[indexValue1].text;
	var landuseTypeId = optionsList1[indexValue1].value;
	var panchayatkar = document.getElementById('panchayatkar').value;
	// var upkar = document.getElementById('upkar').value;
	var upkar = 0;
	var prevYearBakaya = document.getElementById('prevYearBakaya').value;
	var totalAmount = document.getElementById('totalAmount').value;
	// var paidAmount = document.getElementById('paidAmount').value;
	var sheetNo = document.getElementById('sheetNo').value;
	var bandovast = document.getElementById('bandovast').value;
	var landuseType = optionsList1[indexValue1].innerHTML;
	var remarks = document.getElementById('premiumRemarks').value;
	var diversionArea = document.getElementsByName('divertedArea');
	var createdBy = document.getElementById("createdBy").value;
	var marketValue = document.getElementById("marketValue").value;
	//var createdBy = document.getElementById("marketValue").value;
	var exemptedId=$('input[name=isexempted]:checked').val();
	var totalDivArea = 0;
	for ( var i = 0; i < diversionArea.length; i++) {
		totalDivArea = totalDivArea + parseFloat(diversionArea[i].value);
	}

	if (landuseTypeId == "") {
		alert("कृप्या भूमि उपयोग प्रकार भरें|");
		return false;
	}

	if (bhookhandNo == "") {
		alert("कृप्या भू-खंड क्रमांक भरें|");
		return false;
	}

	if (bhookhandArea == "") {
		alert("कृप्या भू-खंड क्षेत्रफल भरें|");
		return false;
	}
	if (exemptedId==0){
		if (panchayatkar == "") {
			alert("कृप्या पंचायत कर भरें|");
			return false;
		}
		if (premiumRate == "") {
			alert("कृप्या प्रीमियम दर भरें|");
			return false;
		}
		if (totalPremium == "") {
			alert("कृप्या कुल प्रीमियम भरें|");
			return false;
		}

	}
	
	



	if (annualRent == "") {
		alert("कृप्या वार्षिक किराया भरें|");
		return false;
	}

	

	if (createdBy != "304") {
		culPenalty = document.getElementById('culPenalty').value;
		appPenalty = document.getElementById('appPenalty').value;
		penaltyPercent = document.getElementById('penaltyPercent').value;
		if (culPenalty == "") {
			alert("कृप्या परिकलित जुर्माना भरें|");
			return false;
		}
		if (appPenalty == "") {
			alert("कृप्या अनुमोदित जुर्माना भरें|");
			return false;
		}

		if (penaltyPercent == "") {
			alert("कृप्या जुर्माना प्रतिशत भरें|");
			return false;
		}
	}

	var ownerShare = document.getElementsByName('ownerShare');

	var totalBhookhandArea = document.getElementById('totalBhookhandArea').value;

	/*
	 * if (localityId == "") { alert("कृप्या लोकैलिटी आई डी भरें|"); return
	 * false; }
	 */

	/*
	 * if (landuseTypeId == "") { alert("कृप्या भूमि उपयोग प्रकार भरें|");
	 * return false; }
	 */

	/*
	 * if (upkar == "") { alert("कृप्या उप-कर भरें|"); return false; }
	 */
	if (prevYearBakaya == "") {
		alert("कृप्या पूर्व वर्ष बकाया भरें|");
		return false;
	}
	if (totalAmount == "") {
		alert("कृप्या कुल राशि भरें|");
		return false;
	}
	if (sheetNo == "") {
		alert("कृप्या शीट क्रमांक भरें|");
		return false;
	}
	if (remarks.length > 200) {
		alert("कृपया टिप्पणी 200 शब्दों से काम भरे|");
		return false;
	}

	if (remarks.length < 2) {
		alert("कृपया टिप्पणी भरे|");
		return false;
	}

	if (btnId == "AddPrem") {
		
		
		

		var tablelength = document.getElementById('premiumDetailsTbl').rows.length;
		var cellvalue;
		var flag = 0;
		if (tablelength > 1) {

			for ( var i = 0; i < tablelength; i++) {

				cellvalue = document.getElementById('premiumDetailsTbl').rows[i].cells[10].innerHTML;

				if (cellvalue != landuseType) {
					flag = 1;
				} else {
					flag = 0;
					break;
				}
			}

			/*
			 * if (flag == 0) { alert(" यह भूमि उपयोग प्रकार पहले से भरा जा चूका
			 * है|"); return false; }
			 */

		}
		var divertedKhasraId = document.getElementsByName('khasraIdDivTbl');
		var divertedKhasradtl = "";
		var divertedKhasraArea = "";
		var locality = "";
		var subLocality = "";
		var totalArea = 0;
		var checkflag = 0;
		var chk = document.getElementsByName("selectKhasraen");
		for ( var i = 0; i < chk.length; i++) {
			if (chk[i].checked) {
				checkflag = 1;
				divertedKhasradtl = divertedKhasradtl
						+ divertedKhasraId[i].value + "#";
				divertedKhasraArea = divertedKhasraArea
						+ diversionArea[i].value + "#";
				
				//$( "#locality[i] option:selected" ).val();
				//alert($( "#locality[i] option:selected" ).val());
				var e = document.getElementById("localityId"+i);
				   var selectedLoc = e.options[e.selectedIndex].value;
				   var e = document.getElementById("subLocalityId"+i);
				   var selectedSubLoc = e.options[e.selectedIndex].value;
				locality = locality+ selectedLoc + "#";
				subLocality = subLocality
				+selectedSubLoc + "#";
				totalArea += parseFloat(diversionArea[i].value);
			}

		}
/*		alert("divertedKhasradtl----"+divertedKhasradtl);
		alert("divertedKhasraArea----"+divertedKhasraArea);
		alert("locality----"+locality);
		alert("subLocality----"+subLocality);*/
		/*
		 * if (totalArea != parseFloat(bhookhandArea).toFixed(3)) { alert("
		 * भू-खंड क्षेत्रफल कुल क्षेत्रफल के बराबर होना चाहिये|"); return false; }
		 */
		if (checkflag == 0) {
			alert("कृपया खसरा का चयन करें|");
			return false;
		}
		var finalKhasraDtl = divertedKhasradtl + "@" + divertedKhasraArea+"@"+locality+"@"+subLocality;
		if (exemptedId==0){
			var params = 'requestId=' + requestId + '&premiumRate=' + premiumRate
			+ '&totalPremium=' + totalPremium + '&annualRent=' + annualRent
			+ '&culPenalty=' + culPenalty + '&appPenalty=' + appPenalty
			+ '&penaltyPercent=' + penaltyPercent + '&bhookhandNo='
			+ bhookhandNo + '&bhookhandArea=' + bhookhandArea
			+ '&localityId=0'+ '&landuseType=' + landuseTypeId
			+ '&panchayatKar=' + panchayatkar + '&upKar=' + upkar
			+ '&prevYearBakaya=' + prevYearBakaya + '&totalAmount='
			+ totalAmount + '&sheetNo=' + sheetNo + '&bandovast='
			+ bandovast + '&premiumRemarks=' + remarks + '&khasraIds='
			+ finalKhasraDtl + '&createdBy=' + createdBy+'&exemptedId=' + exemptedId + '&marketValue=' + marketValue;
		}
		else{
			var params = 'requestId=' + requestId + '&premiumRate=' + 0
			+ '&totalPremium=' + 0 + '&annualRent=' + annualRent
			+ '&culPenalty=' + culPenalty + '&appPenalty=' + appPenalty
			+ '&penaltyPercent=' + penaltyPercent + '&bhookhandNo='
			+ bhookhandNo + '&bhookhandArea=' + bhookhandArea
			+ '&localityId=0'+ '&landuseType=' + landuseTypeId
			+ '&panchayatKar=' + 0 + '&upKar=' + upkar
			+ '&prevYearBakaya=' + prevYearBakaya + '&totalAmount='
			+ totalAmount + '&sheetNo=' + sheetNo + '&bandovast='
			+ bandovast + '&premiumRemarks=' + remarks + '&khasraIds='
			+ finalKhasraDtl + '&createdBy=' + createdBy+'&exemptedId=' + exemptedId + '&marketValue=' + marketValue;	
		}
	
		loadPremiumDetails(url, div, params);
	} else {

		var seqNo;
		var bhookhandId;
		$('#premiumDetailsTbl input[type="radio"]:checked').each(function() {

			var val = $(this).val();
			seqNo = val.split("@")[18];
			bhookhandId = val.split("@")[8];

		});

		var params = 'requestId=' + requestId + '&premiumRate=' + premiumRate
				+ '&totalPremium=' + totalPremium + '&annualRent=' + annualRent
				+ '&culPenalty=' + culPenalty + '&appPenalty=' + appPenalty
				+ '&penaltyPercent=' + penaltyPercent + '&bhookhandNo='
				+ bhookhandNo + '&bhookhandArea=' + bhookhandArea
				+ '&localityId=' + localityId + '&landuseType=' + landuseTypeId
				+ '&panchayatKar=' + panchayatkar + '&upKar=' + upkar
				+ '&prevYearBakaya=' + prevYearBakaya + '&totalAmount='
				+ totalAmount + '&sheetNo=' + sheetNo + '&bandovast='
				+ bandovast + '&seqNo=' + seqNo + '&bhookhandId=' + bhookhandId
				+ '&premiumRemarks=' + remarks + '&createdBy=' + createdBy;
		$('#' + btnId).hide();
		$('#AddPrem').show();

		loadPremiumDetails(url, div, params);

	}

	document.getElementById('premiumRate').value = "";
	document.getElementById('totalPremium').value = "";
	document.getElementById('annualRent').value = "";
	if (createdBy != "304") {
		document.getElementById('culPenalty').value = "";
		document.getElementById('appPenalty').value = "";
		document.getElementById('penaltyPercent').value = "";
	}
	document.getElementById('bhookhandNo').value = "";
	document.getElementById('bhookhandArea').value = "";
	//document.getElementById('localityId').selectedIndex = "";
	document.getElementById("landuseType").selectedIndex = "";
	// var localityValue = optionsList1[indexValue1].text;
	// optionsList1[indexValue1].value;

	// var landuseType = optionsList1[indexValue1].text;
	// var landuseTypeId = optionsList1[indexValue1].value;
	document.getElementById('panchayatkar').value = "";
	// document.getElementById('upkar').value = "";
	// document.getElementById('prevYearBakaya').value = "";
	document.getElementById('totalAmount').value = "";
	// var paidAmount = document.getElementById('paidAmount').value;
	document.getElementById('sheetNo').value = "";
	document.getElementById('bandovast').value = "";
	document.getElementById('premiumRemarks').value = "";
	document.getElementById("khasraDiversionTbl").innerHTML = "";
	document.getElementById("totalAnnualRent").value = "";
	document.getElementById("marketValue").value = "";

}

function loadPremiumDetails(url, div, params) {

	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {
				document.getElementById(div).innerHTML = mypostrequest.responseText;
			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);

}

function nameValidator(id, errorField) {

	var firstName = document.getElementById(id).value;

	// document.getElementById(id).className = "input_w1 bgfieldcolor";

	if (firstName == '') {

		document.getElementById(id).focus();
		// alert("कृपया नाम भरे!");

		var mobileError = document.getElementById(errorField);
		mobileError.style.display = "inline";
		document.getElementById(errorField).innerHTML = "कृपया नाम भरे|";
		return false;

	} else {
		return true;
	}

}

function EmailAddressValidator(id, errorField) {

	var email = document.getElementById(id).value;

	var fieldError = document.getElementById(errorField);

	if (email.indexOf('@') == -1) {

		fieldError.style.display = "inline";
		fieldError.innerHTML = "कृपया जानकारी भरें |";
		// alert("Invalid email id...!\nIt must have an at sign(@) sign before
		// domain name.\nPlease check and try again.");

		return false;
	}
	if (email.match(/@/g).length > 1) {
		alert("अवैध ईमेल आईडी...|\nयह डोमेन नाम से पहले एक संकेत पर (@) पर हस्ताक्षर होना आवश्यक है.\nजाँच करें और पुन: प्रयास करें |");
		return false;
	}
	if (email.length < 5) {
		alert("अवैध ईमेल आईडी...|\nजाँच करें और पुन: प्रयास करें |");
		return false;
	}

	var atsignplace = email.lastIndexOf('@');
	var dotplace = email.indexOf('.', atsignplace);

	if (dotplace < 0) {
		alert("कृपया सही ईमेल दर्ज करें |");
		return false;
	}

	if (email.substring(atsignplace + 1, dotplace).trim().length == 0) {
		alert("कृपया सही ईमेल दर्ज करें |");
		return false;
	}

	if (email.substr(dotplace + 1).trim().length == 0) {
		alert("अवैध ईमेल आईडी...|\nजाँच करें और पुन: प्रयास करें |");
		return false;
	} else {
		return true;
	}

}

/* written by jyotsna */
function loadDataForUser(url, div, params) {
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				 
				if (xml.responseText == "301") {

					document.getElementById(div).innerHTML = "लॉगइन आईडी '"
							+ document.getElementById('loginId').value
							+ "' पहले से ही मौजूद हैं |"; // params.substring(8)
					showSpan(div);

				}

				if (xml.responseText == "302") {
					document.getElementById(div).innerHTML = "मेल आईडी '"
							+ document.getElementById('mailId').value
							+ "' पहले से ही मौजूद हैं |";// params.substring(7)
					document.getElementById('mailId').value="";
					showSpan(div);
				}
				if (xml.responseText == "303") {
					document.getElementById(div).innerHTML = "मोबाइल नंबर  '"
							+ document.getElementById('mobileNo').value
							+ "' पहले से ही मौजूद हैं |";// params.substring(9)
					document.getElementById('mobileNo').value="";
					showSpan(div);
				}

				if (xml.responseText == "304") {

					document.getElementById(div).innerHTML = "डिजिटल हस्ताक्षर आईडी  '"
							+ document.getElementById('designId').value
							+ "' पहले से ही मौजूद हैं |";// params.substring(9)
					showSpan(div);
				}

				if (xml.responseText == "305") {
					mailId = document.getElementById('mailId1').value;
					if ("mailId" == params.substring(0, 6)) {
						document.getElementById(div).innerHTML = "मेल आईडी '"
								+ document.getElementById('mailId1').value
								+ "' पहले से ही मौजूद हैं |";
						document.getElementById('mailId1').value="";
						showSpan(div);
					}
					if (params.substring(0, 8) == "mobileNo") {
						document.getElementById(div).innerHTML = "मोबाइल नंबर  '"
								+ document.getElementById('mobileNo1').value
								+ "' पहले से ही मौजूद हैं |";
						document.getElementById('mobileNo1').value="";
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

}

function bulkApprov(districtId, tehsilId, riId, halkaId, villageId, xCount,
		startYear, endYear, districtName, tehsilName, riName, halkaName,
		villageName) {

	/*
	 * //loader('tehsildarBulkChakeri'); var chakri = "tehsildarBulkChakeri";
	 * 
	 * if (ns4) { skn = document.chakri; } else if (ns6) { skn =
	 * document.getElementById(chakri).style; } else if (ie4) { skn =
	 * document.getElementById(chakri).style; } else { skn =
	 * document.getElementById(chakri).style; }
	 * 
	 * if (ns4) { document.captureEvents(Event.MOUSEMOVE); } else {
	 * skn.visibility = "visible"; skn.display = "none"; }
	 * 
	 * skn.left = 480; skn.top = 230; //alert("1"); var content = "<div
	 * style='position:absolute;z-index:10;" +
	 * 
	 * "left:expression((this.offsetParent.clientWidth/2)-(this.clientWidth/2)+this.offsetParent.scrollLeft);" +
	 * 
	 * "top:expression((this.offsetParent.clientHeight/2)-(this.clientHeight/2)+this.offsetParent.scrollTop);" +
	 * "background:#FFFFFF; border-width:0px;border-color:#a5d8ed;
	 * border-style:solid'>"
	 * 
	 *  + "<Table cellspacing=0 cellpadding=0 border=0 width=100%>" + "<tr><td align=left valign=middle height=30>" + "
	 * <img src='images/ajax_loader_blue_128.gif' height='25' width='25'>" + "</td>" + "<td align=left valign=middle height=30>" + "
	 * <font color=red size=2> <b>&nbsp;कृपया प्रतीक्षा करें....</b></font>" + "</td>" + "</tr><Table></div>";
	 * var content = "<div id='dialog-overlay'>" +"<div class='preloader'>" + "
	 * <img src='images/bulk.jpg'>" +"</div>" +"</div>"; // var content = "<div
	 * id='dialog-overlay'>rkgrlegk</div>";
	 * 
	 * $('#dialog-overlay').fadeTo(800, 0.3);
	 * 
	 * yyy = OffsetY; if (ns4) { skn.document.write(content);
	 * skn.document.close(); skn.visibility = "visible"; } if (ns6) {
	 * document.getElementById(chakri).innerHTML = content; skn.display = ''; }
	 * if (ie4) { document.getElementById(chakri).innerHTML = content;
	 * skn.display = ''; skn.position = 'absolute'; }
	 * 
	 * 
	 * $('#dialog-overlay').fadeTo(400, 0.2);
	 */

	document.getElementById('districtId').value = districtId;
	document.getElementById('tehsilId').value = tehsilId;
	document.getElementById('riId').value = riId;
	document.getElementById('halkaId').value = halkaId;
	document.getElementById('villageId').value = villageId;
	document.getElementById('xCount').value = xCount;

	var year = startYear + ',' + endYear;
	document.getElementById('startYear').value = year;
	// document.getElementById('endYear').value=endYear;

	document.getElementById('districtId').value = districtId;
	document.getElementById('tehsilId').value = tehsilId;
	document.getElementById('riId').value = riId;
	document.getElementById('halkaId').value = halkaId;
	document.getElementById('villageId').value = villageId;
	document.getElementById('xCount').value = xCount;

	document.getElementById('districtName').value = districtName;
	document.getElementById('tehsilName').value = tehsilName;
	document.getElementById('riName').value = riName;
	document.getElementById('halkaName').value = halkaName;
	document.getElementById('villageName').value = villageName;
	var year = startYear + ',' + endYear;
	document.getElementById('startYear').value = year;
	// document.getElementById('endYear').value=endYear;

	document.getElementById('districtId').value = districtId;
	document.getElementById('tehsilId').value = tehsilId;
	document.getElementById('riId').value = riId;
	document.getElementById('halkaId').value = halkaId;
	document.getElementById('villageId').value = villageId;
	document.getElementById('xCount').value = xCount;

	var year = startYear + ',' + endYear;
	document.getElementById('startYear').value = year;
	// document.getElementById('endYear').value=endYear;

	// alert();
	if (document.getElementById('transactionId').value == 10001) {

		document.requesterForm.action = 'tehsildarBulkApprovalData.do';

		document.requesterForm.submit();

	}

	else {

		if (document.getElementById('transactionId').value == 10001) {

			// loader('tehsildarBulkChakeri');
			document.requesterForm.action = 'tehsildarBulkApprovalData.do';
			document.requesterForm.submit();
		}

		else {

			// loader('tehsildarBulkChakeri');
			document.requesterForm.action = 'b1tehsildarBulkApprovalData.do';
			document.requesterForm.submit();

		}

	}

	loader('tehsildarBulkChakeri');

}
function closeWindowPending(id) {
	window.opener.document.getElementById(id).className = "appBtnsDisabled";
	window.opener.document.getElementById(id).disabled = true;

}

function loadRemarks(url, params) {

	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		/*
		 * if (xml.readyState == 1) { loader(); }
		 */

		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					// alert(xml.responseText);
					document.getElementById('userRemarks').innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById('smartCardNo').value =
				// xml.responseText;
			} else {
				alert("An error has occured making the request");
			}

			// remove_popup();
		}
	};

	xml.open("POST", url, true);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

function loadDataReportDyanamic(url, div, chakri, params) {
	// alert("div:" + div);
	// alert("url:" + url);
	// alert("params:" + params);
	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		/*
		 * if(xml.readyState==1) {
		 */
		if (!chakri == "") {
			loader(chakri);
		}
		// }
		// alert("xml.readyState:" + xml.readyState);
		if (xml.readyState == 4) {
			// alert("1:"+xml.status);
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert("2");
				// alert("xml.responseText:" + xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(div).innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(div).innerHTML = xml.responseText;

			} else {
				// alert("3");
				alert("An error has occured making the request");
			}

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}
	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

// added By Vivek TIWARI for deselecting the select all CheckBox if any of the
// check box from the list is selected
function deSelectAllCheck(selectall, id) {
	// alert("inside deselect chkBox to deSelect is "+selectall);
	var chkBxId = id.split("chk")[1];
	var chkBxVal = Number($("#" + chkBxId).val());
	var ownerId = $("#ownerId").val();
	var khasraId = $("#khasraId").val();
	$('#kChk input[type="checkbox"]').each(function() {
		if (ownerId == 0 && khasraId != 0) {
			if (id == $(this).attr('id')) {
				if (chkBxVal == 0) {
					$('#' + selectall).attr('checked', false);
					$('#' + selectall).attr('disabled', true);
					$('#' + selectall).attr('disabled', 'disabled');
					$('#' + id).attr("checked", "checked");
					$("#" + chkBxId).val("1");
				}
				if (chkBxVal == 1) {
					$('#' + selectall).attr('checked', false);
					$('#' + selectall).attr('disabled', true);
					$('#' + selectall).attr('disabled', 'disabled');
					$('#' + id).removeAttr('checked');
					$("#" + chkBxId).val("0");
				}
			}
			if (id != $(this).attr('id') && chkBxVal == 0) {
				$(this).attr('disabled', true);
				$(this).attr('disabled', 'disabled');
			}

			if (id != $(this).attr('id') && chkBxVal == 1) {
				$(this).attr('disabled', false);
				$(this).removeAttr('disabled', 'disabled');
			}
		}
		if (ownerId != 0 && khasraId == 0) {
			$('#' + selectall).attr('checked', false);

			/*
			 * if(id == $(this).attr('id')) { if(chkBxVal == 0) {
			 * $('#'+selectall).attr('checked', false);
			 * //$('#'+selectall).attr('disabled',true);
			 * //$('#'+selectall).attr('disabled','disabled');
			 * $('#'+id).attr("checked","checked"); $("#"+chkBxId).val("1"); }
			 * if(chkBxVal == 1) { $('#'+selectall).attr('checked', false);
			 * //$('#'+selectall).attr('disabled',false);
			 * //$('#'+selectall).removeAttr('disabled','disabled');
			 * $('#'+id).removeAttr('checked'); $("#"+chkBxId).val("0"); } }
			 */
		}
	});
}

function validHisha(evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 46 || charCode > 57)) {
		return false;
	}
	return true;
}

function validHisha(evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 46 || charCode > 57)) {
		return false;
	}
	return true;
}

function closeButton() {
	// alert("Inside Close Window");
	var clrNo = document.getElementById("clrId").value;
	var transId = document.getElementById("transId").value;
	/* alert(clrNo+" , "+transId); */
	var msg = "";

	if (clrNo != null && clrNo != "") {
		var count = (clrNo.match(/,/g) || []).length;
		if (count == '1') {
			var clrNo1 = clrNo.replace(',', '');
			alert(" सी. एल. आर. न." + clrNo1
					+ " स्वीकृति के लिए भेज दिया गया है |");
		} else {
			var clrNo1 = clrNo.replace(',', '');
			alert(" सी. एल. आर. न." + clrNo1
					+ " स्वीकृति के लिए भेज दिये गये है |");
		}

	}

	window.close();
}

/* Added by Manish */
function blankBelowField(comboIndex) {
	if (comboIndex == 1) {

		document.getElementById("tehsilId").value = 0;
		document.getElementById("riId").length = 1;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;
		/* document.getElementById("ownerId").length = 1; */
		/* document.getElementById("khasraId").length = 1; */

	}
	// For Tahsil
	if (comboIndex == 2) {

		document.getElementById("riId").value = 0;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;
		/* document.getElementById("ownerId").length = 1; */
		/* document.getElementById("khasraId").length = 1; */

	}

	// For R.I Circle
	if (comboIndex == 3) {

		document.getElementById("halkaId").value = 0;
		document.getElementById("villageId").length = 1;
		/* document.getElementById("ownerId").length = 1; */
		/* document.getElementById("khasraId").length = 1; */

	}
	// For Patwari Halka
	if (comboIndex == 4) {

		document.getElementById("villageId").value = 0;
		/* document.getElementById("ownerId").length = 1; */
		/* document.getElementById("khasraId").length = 1; */

	}
	document.getElementById('khasaraListDiv').innerHTML = "";

	if (comboIndex == 5 | 4 | 3 | 2 | 1) {
		resetKhasraPage();

	}

}

function addAvedak(action, div, chkri) {

	document.getElementById(div).style.display = "block";
	loadDataNew(action, div, chkri, 'Test');

}

// Added By Vivek TIWARI to load data ad add selected or checked attribute in
// khasraSelection ITG page.
function markSelected() {

	$('#districtId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#tehsilId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#riId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#halkaId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#villageId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#ownerId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#khasraId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

	$('#transactionId').change(
			function() {
				$('option:selected', this).attr('selected', true).siblings()
						.removeAttr('selected');
			});

}

function checkNumberOfDigit() {

	var mobileNo = document.getElementById('mobileId').value;

	if (mobileNo.length != 0 && mobileNo.length != 10) {
		// document.getElementById('mobileId').focus();

		var mobileError = document.getElementById('mobileId_fieldError');
		mobileError.style.display = "inline";
		document.getElementById('mobileId_fieldError').innerHTML = "कृप्या मोबाइल नंबर 10 अंको में ही भरें |";
		return false;
	}
}

function updateOrderRemark() {
	var orderNo = $("#orderNo").val();
	var orderBy = $("#orderBy").val();
	var orderDate = $("#orderDate").val();
	var page = $("#ssnPgVal").val();
	var rmrk = "";
	if (page == "generalInfo") {
		rmrk = "(मिटटी वर्गीकरण)  " + orderBy + " दवारा प्रकरण क्रमांक "
				+ orderNo + " दिनांक" + orderDate + " को की गई |";
	}
	if (page == "crop") {
		var sinAsin = $("#chkSncht").val();
		if (sinAsin == "1") {
			rmrk = "(यह ज़मीन असिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
					+ orderNo + " दिनांक " + orderDate + " को की गई |";

		} else {
			rmrk = "(यह ज़मीन सिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
					+ orderNo + " दिनांक " + orderDate + " को की गई |";

		}

	}
	if (orderNo != "" && orderBy != "" && orderDate != "") {
		/*
		 * if(orderRemarks!= ""){
		 * $('#orderRemarks').val($("#orderRemarks").val()+orderNo+orderBy+orderDate); }
		 * else{
		 */
		$('#orderRemarks').val(rmrk);
		/* } */
	}
}
function updateOrderRemarkSinchit() {
	var orderNo = $("#orderNo1").val();
	var orderBy = $("#orderBy1").val();
	var orderDate = $("#orderDate1").val();
	var page = $("#ssnPgVal").val();
	var rmrk = "";
	/*
	 * if(page == "generalInfo"){ rmrk = "(मिटटी वर्गीकरण) "+orderBy+" दवारा
	 * प्रकरण क्रमांक "+orderNo+" दिनांक"+orderDate+" को की गई |"; } if(page ==
	 * "crop"){
	 */var sinAsin = $("#chkSncht").val();
	if (sinAsin == "1") {
		rmrk = "(यह ज़मीन असिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
				+ orderNo + " दिनांक " + orderDate + " को की गई |";

	} else {
		rmrk = "(यह ज़मीन सिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
				+ orderNo + " दिनांक " + orderDate + " को की गई |";

	}

	if (orderNo != "" && orderBy != "" && orderDate != "") {
		/*
		 * if(orderRemarks!= ""){
		 * $('#orderRemarks').val($("#orderRemarks").val()+orderNo+orderBy+orderDate); }
		 * else{
		 */
		$('#orderRemarks1').val(rmrk);
		/* } */
	}
}
function updateLoanRemarks() {
	var orderNo = $("#orderNo1").val();
	var orderBy = $("#orderBy1").val();
	var orderDate = $("#orderDate1").val();
	var page = $("#ssnPgVal").val();
	var rmrk = "";
	/*
	 * if(page == "generalInfo"){ rmrk = "(मिटटी वर्गीकरण) "+orderBy+" दवारा
	 * प्रकरण क्रमांक "+orderNo+" दिनांक"+orderDate+" को की गई |"; } if(page ==
	 * "crop"){
	 */var sinAsin = $("#chkSncht").val();
	if (sinAsin == "1") {
		rmrk = "(यह ज़मीन असिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
				+ orderNo + " दिनांक " + orderDate + " को की गई |";

	} else {
		rmrk = "(यह ज़मीन सिंचित है )" + orderBy + " दवारा प्रकरण क्रमांक "
				+ orderNo + " दिनांक " + orderDate + " को की गई |";

	}

	if (orderNo != "" && orderBy != "" && orderDate != "") {
		/*
		 * if(orderRemarks!= ""){
		 * $('#orderRemarks').val($("#orderRemarks").val()+orderNo+orderBy+orderDate); }
		 * else{
		 */
		$('#orderRemarks1').val(rmrk);
		/* } */
	}
}
function openNewReportWindow(url) {
	popupWin = window
			.open(
					url,
					'open_window',
					'menubar, toolbar=no,titlebar=no, location, directories, status, scrollbars, resizable, dependent, width=1450, height=1000, left=0, top=0');
}

function resetGrievanceDropdown(dropDownName) {

	if (dropDownName == "department") {

		document.getElementById("districtId").enabled = true;
		document.getElementById("tehsilId").disabled = true;
		document.getElementById("riId").disabled = true;
		document.getElementById("halkaId").disabled = true;
		document.getElementById("villageId").disabled = true;
		document.getElementById("khasraId").disabled = true;
		document.getElementById("userId").disabled = true;

	}

	if (dropDownName == "district") {

		document.getElementById("tehsilId").enabled = true;
		document.getElementById("riId").disabled = true;
		document.getElementById("halkaId").disabled = true;
		document.getElementById("villageId").disabled = true;
		document.getElementById("khasraId").disabled = true;
		document.getElementById("userId").disabled = true;

		document.khasraform.userId.value = "0";
		document.khasraform.riId.value = "0";
		document.khasraform.halkaId.value = "0";
		document.khasraform.villageId.value = "0";
		document.khasraform.khasraId.value = "0";

	}

	if (dropDownName == "tehsil") {

		document.getElementById("riId").enabled = true;
		document.getElementById("userId").disabled = false;
		document.getElementById("halkaId").disabled = true;
		document.getElementById("villageId").disabled = true;
		document.getElementById("khasraId").disabled = true;

		document.khasraform.userId.value = "0";
		document.khasraform.halkaId.value = "0";
		document.khasraform.villageId.value = "0";
		document.khasraform.khasraId.value = "0";
	}

	if (dropDownName == "ri") {

		document.getElementById("halkaId").enabled = true;
		document.getElementById("villageId").disabled = true;
		document.getElementById("khasraId").disabled = true;

		document.khasraform.villageId.value = "0";
		document.khasraform.khasraId.value = "0";

	}

	if (dropDownName == "halka") {

		document.getElementById("villageId").enabled = true;
		document.getElementById("khasraId").disabled = true;

		document.khasraform.khasraId.value = "0";

	}

	if (dropDownName == "village") {

		document.getElementById("khasraId").enabled = true;

	}

}

function checkforvalue(value) {

	var valueAfterSplit = value.split("/");

	if (value == "") {
		alert("हिस्सा रिक्त नहीं छोड़ जा सकते हैं |");
		return false;
	}

	if (valueAfterSplit.length == 1 && value > 1) {
		alert("संख्या 1 से अधिक नहीं हो सकता |");
		return false;
	} else if (valueAfterSplit.length > 2) {
		alert("कृपया वैध संख्या भरें |");
		return false;
	} else if (valueAfterSplit.length > 1) {

		var neu = valueAfterSplit[0];
		var den = valueAfterSplit[1];
		var re = /[^0-9 ]/;
		if (neu == "" || den == "") {
			alert("कृपया वैध संख्या भरें |");
			return false;
		}
		if (re.test(neu) || re.test(den)) {
			// alert("here");
			alert("कृपया वैध संख्या भरें |");
			return false;
		}
		if (parseInt(neu) > parseInt(den)) {

			alert("संख्या 1 से अधिक नहीं हो सकता |");
			return false;
		}
	} else if (valueAfterSplit.length == 1) {
		var re = /[^0-9 ]/;
		if (re.test(value)) {
			alert("कृपया वैध संख्या भरें |");
			return false;
		}
	}
	return true;
}

function editkhasraOwnerLink(action, div, chkri) {

	var radios = document.batwraOwnerLinkingForm.rdbtn;
	var checked = false;

	if (isNaN(radios.length)) {
		if (radios.checked) {
			checked = true;
		}
	} else {
		for ( var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				checked = true;
				break;
			}
		}
	}

	if (checked) {

		var radioBtnval = $("input:radio[name='rdbtn']:checked").val();
		radioBtnval = 'rdbtn=' + radioBtnval;
		loadDataNew(action, div, chkri, radioBtnval);
	} else {
		alert("कृप्या चेक बॉक्स का चयन करे  ");
		return false;
	}

}

function createRequestForOwnerEdit(chakri) {

	// alert("aa");
	// alert("selectedTransactionValue:" + selectedTransactionValue);
	// District Name
	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;
	// alert("selectedDistrictValue:" + selectedDistrictValue);

	// Tahsil Name
	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;
	// alert("selectedTahsilValue:" + selectedTahsilValue);

	// RI CIRCLE Name
	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;
	// alert("selectedRiValue:" + selectedRiValue);

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;
	// alert("selectedHalkaValue:" + selectedHalkaValue);

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;
	// alert("selectedVillageValue:" + selectedVillageValue);

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;
	// alert("selectedLocationNames:" + selectedLocationNames);

	document.khasraform.locationNames.value = selectedLocationNames;
	var chks = document.getElementsByName("checkboxid");

	// alert($('input[type="checkbox" name="checkboxid"]:checked').length)
	// alert(chks.length);

	var flag = 0;
	var count = 1;
	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			flag = 1;
			count++;

			document.khasraform.chkIdvalue.value = chks[i].value;

			// alert("dadadadd "+chks[i].value);
			// break;
		}
	}
	if (flag == 0) {

		alert("कृपया कम से कम एक चेक बॉक्स का चयन करें |");
		return false;

	} else if (count > 2) {

		alert("कृपया एक चेक बॉक्स का चयन करें |");
		return false;

	} else {

		if (selectedVillageValue != '228') {
			if (!selectedHalkaValue != '00092') {
				if (!selectedRiValue != '02') {
					if (!selectedTahsilValue != '01') {
						if (!selectedDistrictValue != '03') {
							$("#pageHT").val(
									"<html>" + $("html").html() + "</html>");
						}
					}
				}
			}
		}

		/* $("#pageHT").val("<html>" + $("html").html() + "</html>"); */

		document.khasraform.action = 'ownerEditingRequestForm.do';

		loader(chakri);
		document.khasraform.submit();

	}

}

function ExportExcel() {
	document.getElementById('exportExcel').onchange();

}

function getAvedakKharaOwnerDetailsForDiversion(url, elementId) {

	alert("hello");
	document.getElementById('ownerTypeId').value = 0;
	document.getElementById("casteTypeId").value = 0;
	document.getElementById("casteNameId").value = 0;
	document.getElementById("requesterNameId").value = "";
	document.getElementById("requesterMiddleNameId").value = "";
	document.getElementById("requesterLastNameId").value = "";
	document.getElementById("requesterFatherNameId").value = "";
	document.getElementById("sexId").value = 0;
	document.getElementById("telephoneId").value = "";
	document.getElementById("mobileNoId").value = "";
	document.getElementById("emailId").value = "";
	document.getElementById("commHouseNoId").value = "";
	document.getElementById("streetAreaId").value = "";
	document.getElementById("commPostOfcId").value = "";
	document.getElementById("commThanaId").value = "";
	document.getElementById("commVillageId").value = "";
	document.getElementById("tehsilId").value = 0;
	document.getElementById("districtId").value = 0;
	document.getElementById("commStateId").value = 0;
	document.getElementById("commPinCodeId").value = "";
	document.getElementById("stdCodeId").value = "";
	document.getElementById("remarksId").value = "";
	document.getElementById("newOwnerId").value = "";
	document.getElementById("newOwnerKhasraId").value = "";
	document.getElementById("relationTypeId").value = 0;
	document.getElementById("landMarkId").value = "";
	// alert("avedakKhasarNoId:" + avedakKhasarNoId);
	var avedakKhasarNoId = document.getElementById('khasraList').value;
	alert("avedakKhasarNoId:" + avedakKhasarNoId);
	if (avedakKhasarNoId != "" && avedakKhasarNoId != 0) {
		alert("value found");
		var districtId = document.getElementById('districtIdx').value;
		alert("1:" + districtId);
		var tehsilId = document.getElementById('tehsilIdx').value;
		alert("2:" + tehsilId);
		var riId = document.getElementById('riIdx').value;
		alert("3:" + riId);
		var halkaId = document.getElementById('halkaIdx').value;
		alert("4:" + halkaId);
		var villageId = document.getElementById('villageIdx').value;
		alert("5:" + villageId);
		/*
		 * var params = "avedakKhasarNoId=" + avedakKhasarNoId + "@" +
		 * districtId + "@" + tehsilId + "@" + riId + "@" + halkaId + "@" +
		 * villageId;
		 */
		var params = "avedakKhasarNoId=" + avedakKhasarNoId;
		loadAjaxData(url, elementId, params);

	}

}

function searchOwnerDetail(chakri) {

	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	var ownerId = document.getElementById("ownerId").value;
	var khasraId = document.getElementById("khasraId").value;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " पटवारी हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else if (khasraId == 0 && ownerId == 0) {
		var khasraOwnerError = document.getElementById("khasraOwnerError");

		khasraOwnerError.style.display = "inline";
		document.getElementById("khasraOwnerError").innerHTML = "कृपया खसरा या भू-स्वामी का चयन करें |";
		return false;
	} else {

		var url = "ownerSearchDetail.do";
		var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
				+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
				+ villageId + '&khasraId=' + khasraId + '&ownerId=' + ownerId;

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';

		loadDataNew(url, "khasaraListDiv", chakri, params);

		/*
		 * document.khasraform.action = "khasraDetail.do";
		 * document.khasraform.submit();
		 */
	}

}

function userAddTaxLoanSubmit() {

	var e = document.getElementById("bankId");
	var bankAddress = "";
	var loanAmount = "";
	var subsidyAmount = "";
	var bankId = e.options[e.selectedIndex].value;
	var loanAmountAdd = "";
	var officerName = "";
	var officerDesignation = "";
	var loanOrderNo = "";
	var bandhakArea = "";
	var loanDate = "";
	var totalLoanedArea="";
	var totalBandhakArea="";
	subsidyAmount = document.taxLoanform.subsidyAmount.value;
	
	if (bankId == 0 && subsidyAmount =="") {

		alert("कृपया अद्यतन के लिये कोई रेकॉर्ड चुनिये |");
		return false;
	} else {
		if (bankId == 0){
		if (subsidyAmount == null || subsidyAmount == "") {
			alert("कृपया सब्सिडी राशि का चयन करें |");
			return false;
		}}
		bankAddress = document.taxLoanform.bankAddress.value;
		if (bankAddress == null || bankAddress == "") {
			alert("कृपया बैंक का शाखा/पता  दर्ज करें |");
			return false;
		}

		var loanAccountNo = document.taxLoanform.loanAccountNo.value;
		if (loanAccountNo == null || loanAccountNo == "") {
			alert("कृपया ऋण खाता संख्या  दर्ज करें |");
			return false;
		}
		loanAmount = document.taxLoanform.loanAmount.value;
		if (loanAmount == null || loanAmount == "") {
			alert("कृपया ऋण की राशि  दर्ज करें |");
			return false;
		}

		bandhakArea = document.taxLoanform.bandhakArea.value;
		if (bandhakArea == null || bandhakArea == "") {
			alert("कृपया बंधक क्षेत्रफल  दर्ज करें |");
			return false;
		}
		loanDate = document.taxLoanform.loanDate.value;
		if (loanDate == null || loanDate == "") {
			alert("कृपया ऋण वितरण दिनांक  दर्ज करें |");
			return false;
		}
		officerName = document.taxLoanform.officerName.value;

		officerDesignation = document.taxLoanform.officerDesignation.value;

		if (officerName == null || officerName == "") {
			alert("कृपया अधिकारी नाम दर्ज करें |");
			return false;
		}
		if (officerDesignation == null || officerDesignation == "") {
			alert("कृपया अधिकारी पदनाम  दर्ज करें |");
			return false;
		}
		loanOrderDate = document.taxLoanform.loanOrderDate.value;

		if (loanDate != null && loanDate != "" && loanOrderDate != null
				&& loanOrderDate != "") {

			var date_to_order = new Date(loanOrderDate);
			var date_to_start = new Date(loanDate);
			var closeDate = date_to_order.getTime() - date_to_start.getTime();
			// alert("value date "+ closeDate);
			if (closeDate < 0) {
				alert(" ऋण बंद दिनांक  ऋण वितरण दिनांक से अधिक  होना चाहिए  |");
				return false;
			}

		}
	}

	// var loanDate = document.taxLoanform.loanDate.value;
	// var bandhakArea = document.taxLoanform.bandhakArea.value;
	var today = document.taxLoanform.todayDate.value;

	var date_to_dob = new Date(loanDate).getTime();
	var date_to_authd = new Date(bandhakArea).getTime();
	today = new Date(today).getTime();

	var beforeDate = today - date_to_dob;
	var afterDate = today - date_to_authd;

	if (beforeDate < 0) {
		alert("ऋण तारीख आज की तारीख होनी चाहिए |");
		return false;
	}

	// var officerName = document.taxLoanform.officerName.value;

	// var officerDesignation = document.taxLoanform.officerDesignation.value;

	// var loanOrderNo = document.taxLoanform.loanOrderNo.value;

	/*
	 * var loanOrderDate = document.taxLoanform.loanOrderDate.value; var
	 * date_to_order = new Date(loanOrderDate); var closeDate = today -
	 * date_to_order.getTime();
	 */
	loanOrderNo = document.taxLoanform.loanOrderNo.value;
	var loanAccountNo = document.taxLoanform.loanAccountNo.value;

	var remark = document.taxLoanform.remark.value;
	var totalArea = document.getElementById('txtKhasraArea').value;
	   
	loanAmountAdd = $("#loanAmountAdd").val();
	totalBandhakArea =$("#totalBandhakArea").val();
	if(totalBandhakArea != undefined){
	totalLoanedArea=(parseFloat(totalBandhakArea)+parseFloat(bandhakArea)).toFixed(3);
	
	if(totalLoanedArea>totalArea){
		alert("बंधक क्षेत्रफल कुल क्षेत्रफल से अधिक नहीं हो सकता |");
		document.getElementById('bandhakArea').value = "";
		document.getElementById('bandhakArea').focus();

		return false;
	}}
	var type = "update";
	loadContent('saveKhasraLoan.do', '&type=' + type + '&bankId=' + bankId
			+ '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount
			+ '&loanDate=' + loanDate + '&bandhakArea=' + bandhakArea
			+ '&officerName=' + officerName + '&officerDesignation='
			+ officerDesignation + '&loanOrderNo=' + loanOrderNo
			+ '&loanOrderDate=' + loanOrderDate + '&loanAccountNo='
			+ loanAccountNo + '&remark=' + remark + '&subsidyAmount='
			+ subsidyAmount);

}
function userAddTaxLoanSubmitAdd(sndTeh) {
	var e = document.getElementById("bankId");
	var bankAddress = "";
	var loanAmount = "";
	var subsidyAmount = "";
	var totalBandhakArea="";
	var bankId = e.options[e.selectedIndex].value;
	var loanAmountAdd = "";
	var officerName = "";
	var officerDesignation = "";
	var loanOrderNo = "";
	var bandhakArea = "";
	var loanDate = "";
	var loanAccountNo = "";
	var loanOrderDate = "";
	var totalLoanedArea="";

	if (bankId == 0) {

		// alert("jsjf");
		// subsidyAmount = document.taxLoanform.subsidyAmount.value;
		subsidyAmount = $("#subsidyAmount").val();

		if (subsidyAmount == null || subsidyAmount == "") {
			// alert("555");

			if (sndTeh == 'sChk') {
				// remove_popup('adhyatanChakeriPatwari');

				// alert("कृपया ऋण खाता संख्या अथबा सब्सिडी राशि का दर्ज करें
				// |");
				// return true;

			} else {

				alert("कृपया सब्सिडी राशि का दर्ज करें |");
				return false;

			}

		}
	}

	else {

		// bankAddress = document.taxLoanform.bankAddress.value;

		bankAddress = $("#bankAddress").val();

		if (bankAddress == null || bankAddress == "") {
			alert("कृपया बैंक का शाखा/पता  दर्ज करें |");
			return false;
		}

		// loanAmount = document.taxLoanform.loanAmount.value;

		loanAmount = $("#loanAmount").val();

		var loanAccountNo = document.taxLoanform.loanAccountNo.value;
		if (loanAccountNo == null || loanAccountNo == "") {
			alert("कृपया ऋण खाता संख्या  दर्ज करें |");
			return false;
		}
		if (loanAmount == null || loanAmount == "") {
			alert(" कृपया ऋण की राशि  दर्ज करें |");
			return false;
		}

		bandhakArea = document.taxLoanform.bandhakArea.value;
		if (bandhakArea == null || bandhakArea == "") {
			alert("कृपया बंधक क्षेत्रफल  दर्ज करें |");
			return false;
		}
		loanDate = document.taxLoanform.loanDate.value;
		if (loanDate == null || loanDate == "") {
			alert("कृपया ऋण वितरण दिनांक  दर्ज करें |");
			return false;
		}
		officerName = document.taxLoanform.officerName.value;

		officerDesignation = document.taxLoanform.officerDesignation.value;

		if (officerName == null || officerName == "") {
			alert("कृपया अधिकारी नाम दर्ज करें |");
			return false;
		}
		if (officerDesignation == null || officerDesignation == "") {
			alert("कृपया अधिकारी पदनाम दर्ज करें |");
			return false;
		}

		loanOrderDate = document.taxLoanform.loanOrderDate.value;

		if (loanDate != null && loanDate != "" && loanOrderDate != null
				&& loanOrderDate != "") {

			var date_to_order = new Date(loanOrderDate);
			var date_to_start = new Date(loanDate);
			var closeDate = date_to_order.getTime() - date_to_start.getTime();
			// alert("value date "+ closeDate);
			if (closeDate < 0) {
				alert(" ऋण बंद दिनांक  ऋण वितरण दिनांक से अधिक  होना चाहिए  |");
				return false;
			}

		}

		/*
		 * var adharCard = $("#adharCard").val();
		 * 
		 * if (adharCard != null && adharCard != "" && adharCard.length != 12 ) {
		 * //remove_popup('adhyatanChakeriPatwari'); //alert("आधार कार्ड दर्ज
		 * करें "); alert("कृपया वैध आधार कार्ड आईडी दर्ज करें |"); return
		 * false; }
		 * 
		 * var mobileNo =$("#mobileNo").val();
		 * 
		 * if (mobileNo != null && mobileNo != "" && mobileNo.length != 10 ) {
		 * //remove_popup('adhyatanChakeriPatwari'); //alert("mobileNo दर्ज करें
		 * "); alert("कृपया वैध मोबाइल नंबर दर्ज करें |"); return false; }
		 */

	}
	var totalArea = document.getElementById('txtKhasraArea').value;
   
	loanAmountAdd = $("#loanAmountAdd").val();
	totalBandhakArea =$("#totalBandhakArea").val();
	//alert("totalBandhakArea"+totalBandhakArea);
	//alert("totalBandhakArea"+bandhakArea);
	if(totalBandhakArea != undefined){
	
	totalLoanedArea=(parseFloat(totalBandhakArea)+parseFloat(bandhakArea)).toFixed(3);
	//alert("totalLoanedArea"+totalLoanedArea);
	//alert("totalArea"+totalArea);
	if(totalLoanedArea>totalArea){
		alert("बंधक क्षेत्रफल कुल क्षेत्रफल से अधिक नहीं हो सकता |");
		document.getElementById('bandhakArea').value = "";
		document.getElementById('bandhakArea').focus();

		return false;
	}
	}
	// alert("subsidyAmount----"+subsidyAmount);

	// alert("loanAmountAdd----"+loanAmountAdd);

	var totalSubsidyAmountId = $("#totalSubsidyAmountId").val();
	var totalSubsidy = "";
	if (totalSubsidyAmountId != "")
		totalSubsidy = parseFloat(subsidyAmount)
				+ parseFloat(totalSubsidyAmountId)

		// alert("totalSubsidyAmountId----"+totalSubsidyAmountId);

	if (loanAmountAdd != "" && subsidyAmount != ""
			&& parseFloat(totalSubsidy) > parseFloat(loanAmountAdd)) {
		alert("सब्सिडी राशि ऋण की राशि से अधिक नहीं हो सकता |");
		return false;
	}

	var loanDate = document.taxLoanform.loanDate.value;

	var today = document.taxLoanform.todayDate.value;

	var date_to_dob = new Date(loanDate).getTime();
	//var date_to_authd = new Date(bandhakArea).getTime();
	today = new Date(today).getTime();
	loanOrderNo = document.taxLoanform.loanOrderNo.value;
	var beforeDate = today - date_to_dob;
	//var afterDate = today - date_to_authd;

	if (beforeDate < 0) {
		alert("ऋण तारीख आज की तारीख होनी चाहिए |");
		return false;
	}

	// var loanOrderNo = document.taxLoanform.loanOrderNo.value;

	var remark = document.taxLoanform.remark.value;

	var type = "add";
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}

	// alert("bankId-->>"+bankId);
	// alert("subsidyAmount-->>"+subsidyAmount);

	if (bankId != 0 || (subsidyAmount != null && subsidyAmount != "")) {

		// alert("bankId-->>"+bankId);
		// alert("subsidyAmount-->>"+subsidyAmount);

		loadContent('saveKhasraLoan.do', '&type=' + type + '&bankId=' + bankId
				+ '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount
				+ '&loanDate=' + loanDate + '&bandhakArea=' + bandhakArea
				+ '&officerName=' + officerName + '&officerDesignation='
				+ officerDesignation + '&loanOrderNo=' + loanOrderNo
				+ '&loanOrderDate=' + loanOrderDate + '&loanAccountNo='
				+ loanAccountNo + '&remark=' + remark + '&subsidyAmount='
				+ subsidyAmount);

	}

	var msg = "";

	if (sndTeh == 'sChk') {
		remove_popup('adhyatanChakeriPatwari');
		if (bankId == 0) {

		} else {
			msg = "भूमि बंधक जानकारी सफलतापूर्वक सेव कर लिया गया है |"
		}
	} else {
		msg = document.getElementById('messageOne').value;
	}

	if (msg != null || msg != "" || msg.length > 0) {

		callfnValidateMessage(msg);
	}

	return true;
}
function userAddTaxLoanSubmitAddSave(sndTeh) {

	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	var bankAddress = document.taxLoanform.bankAddress.value;
	var loanAmount = document.taxLoanform.loanAmount.value;
	var loanDate = document.taxLoanform.loanDate.value;
	var bandhakArea = document.taxLoanform.bandhakArea.value;
	var today = document.taxLoanform.todayDate.value;

	var date_to_dob = new Date(loanDate).getTime();
	var date_to_authd = new Date(loanPayDate).getTime();
	today = new Date(today).getTime();

	var beforeDate = today - date_to_dob;
	var afterDate = today - date_to_authd;
	var officerName = document.taxLoanform.officerName.value;
	var officerDesignation = document.taxLoanform.officerDesignation.value;
	var loanOrderNo = document.taxLoanform.loanOrderNo.value;
	var loanOrderDate = document.taxLoanform.loanOrderDate.value;
	var date_to_order = new Date(loanOrderDate);
	var closeDate = today - date_to_order.getTime();
	var loanAccountNo = document.taxLoanform.loanAccountNo.value;
	var remark = document.taxLoanform.remark.value;

	var type = "add";
	if (sndTeh == 'sChk') {
		loader('adhyatanChakeriPatwari');
	}

	loadContent('saveKhasraLoan.do', '&type=' + type + '&bankId=' + bankId
			+ '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount
			+ '&loanDate=' + loanDate + '&bandhakArea=' + bandhakArea
			+ '&officerName=' + officerName + '&officerDesignation='
			+ officerDesignation + '&loanOrderNo=' + loanOrderNo
			+ '&loanOrderDate=' + loanOrderDate + '&loanAccountNo='
			+ loanAccountNo + '&remark=' + remark + '&subsidyAmount='
			+ subsidyAmount);
	if (sndTeh == 'sChk') {
		// remove_popup('adhyatanChakeriPatwari');
	}

}

function activateLoanField() {
	if (document.getElementById('bankId').value == 0) {
		document.getElementById('bankAddress').disabled = true;
		document.getElementById('loanAmount').disabled = true;
		document.getElementById('bankAddress').value = "";
		document.getElementById('loanAmount').value = "";
		document.getElementById('subsidyAmount').value = "";
		document.getElementById('subsidyAmount').disabled = false;
	}

	else {

		document.getElementById('bankAddress').disabled = false;
		document.getElementById('loanAmount').disabled = false;
		document.getElementById('subsidyAmount').disabled = true;
		document.getElementById('bankAddress').value = "";
		document.getElementById('loanAmount').value = "";
		document.getElementById('subsidyAmount').value = "";
	}

}

function validateArea(area) {
	var totalArea = document.getElementById('txtKhasraArea').value;

	// alert(isNaN(area)+"-----"+area.trim());

	// var splitValue=area.split();

	// var validArea=splitValue.length;

	if (area != "") {

		if (!isNaN(area)) {

			if (area.charAt(0) == ".")
				area = "0" + area;

			if (totalArea < area) {

				alert("बंधक क्षेत्रफल कुल क्षेत्रफल से अधिक नहीं हो सकता |");
				document.getElementById('bandhakArea').value = "";
				document.getElementById('bandhakArea').focus();

				return false;
			}

			else if (area <= 0) {

				alert("बंधक क्षेत्रफल 0 नहीं हो सकता  ");
				document.getElementById('bandhakArea').value = "";
				document.getElementById('bandhakArea').focus();

				return false;
			}

		} else {
			alert("कृपया सही  खसरा क्षेत्रफल भरें |");
			document.getElementById('bandhakArea').value = "";
			document.getElementById('bandhakArea').focus();

			return false;
		}

	}

}
function validateRemarks(area) {

	var orderNo = $("#orderNo").val();
	var orderDate = $("#orderDate").val();
	var orderBy = $("#orderBy").val();

	if (orderNo != "" && orderBy != "" && orderDate != "") {
		var rmrk = "";
		rmrk = orderBy + " आदेश संख्या " + orderNo + " दिनांक " + orderDate
				+ " के अनुसार मिटटी का वर्गीकरण संशोधित किया गया|";
		// rmrk = orderBy+"(मिटटी वर्गीकरण) "+" दवारा प्रकरण क्रमांक "+orderNo+"
		// दिनांक "+sDateString+" को की गई |";

		$('#orderRemarks').val(rmrk);

		return true;
	}
}
function validateSubsidy(area) {

	if (area <= 0) {

		alert("सब्सिडी राशि  0 नहीं हो सकता  ");
		document.getElementById('subsidyAmount').value = "";
		return false;
	}
}

function validateLoan(area) {

	if (area <= 0) {

		alert("ऋण की राशि   0 नहीं हो सकता  ");
		document.getElementById('loanAmount').value = "";
		return false;
	}
}

function correction(fromPage) {

	var checked = false;
	var radios = document.KhasraOwnerListForm.rdbtn;

	if (isNaN(radios.length)) {
		if (radios.checked) {
			checked = true;
		}
	} else {
		for ( var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				checked = true;
				break;
			}
		}
	}
	if (!checked) {
		alert("कृपया संशोधन के लिए भूमि स्वामी चयन करे |");
		return false;
	} else {
		var radbtnval = $("input:radio[name='rdbtn']:checked").val();

		var params = "rdbtn=" + radbtnval;
		if (fromPage == 'MUTATION') {
			document.KhasraOwnerListForm.action = "getKhasraMasterData.do?rdbtn="
					+ radbtnval;
			document.KhasraOwnerListForm.submit();
		} else {
			loadContent('getKhasraMasterData.do', params);
		}
	}

}
function openNewWindowCopy(url) {
	Win = window
			.open(
					url,
					'open_window',
					'menubar, toolbar=no,titlebar=no, location, directories, status, scrollbars, resizable, dependent, width=1450, height=1000, left=0, top=0');

}

function forBackPage(url, params) {
	var fromPage = document.getElementById("fromPage").value;
	if (fromPage == 'MUTATION') {
		document.masterOwnershipCleaningForm.action = url + "?" + params;
		document.masterOwnershipCleaningForm.submit();
	} else {
		loadContent(url, params);
	}

}

function removeOwner(url) {

	var fromPage = document.getElementById("fromPage").value;
	var rdbtnValue = $("input:radio[name='rdbtnNew']:checked").val();
	var rdbtn = document.getElementById("rdbtn").value;

	if (fromPage == 'MUTATION') {
		document.masterOwnershipCleaningForm.action = url + "?" + 'rdbtnNew='
				+ rdbtnValue + "&rdbtn=" + rdbtn;
		document.masterOwnershipCleaningForm.submit();
	} else {
		loadContent(url, 'rdbtnNew=' + rdbtnValue + "&rdbtn=" + rdbtn);
	}

}

function dataVerificationCount(id, chakri) {

	var distId = document.getElementById('districtId').value;
	var tehsId = document.getElementById('tehsilId').value;
	var halkaId = document.getElementById('halkaId').value;
	var riId = document.getElementById('riId').value;
	var villId = document.getElementById('villageId').value;
	if (villId != 0) {

		// alert(khasraId[0]);
		var url = "dataVerificationCount.do";
		var params = "districtId=" + distId + "&tehsilId=" + tehsId
				+ "&halkaId=" + halkaId + "&riId=" + riId + "&villageId="
				+ villId;

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			if (!chakri == "") {
				loader(chakri);
			}
			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						var successCode = xml.responseText;
						// alert(successCode);

						// alert(successCode);
						document.getElementById(id).value = successCode;

					} else {
						top.location.href = 'SessionExpired.do';
					}

					/*
					 * var successCode = xml.responseText; //alert(successCode);
					 * if (successCode == 0) { chck++; var k =+i + +1;
					 * document.getElementById('chk'+k).checked = false; }
					 */

				}

				else {
					alert("An error has occured making the request");
				}

				if (!chakri == "") {
					remove_popup(chakri);
				}
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);

	}
}

function dataVerificationCleanStatusCount(id, chakri) {

	var distId = document.getElementById('districtId').value;
	var tehsId = document.getElementById('tehsilId').value;
	var halkaId = document.getElementById('halkaId').value;
	var riId = document.getElementById('riId').value;
	var villId = document.getElementById('villageId').value;
	var cleanStatus = document.getElementById('cleanStatus').value;

	if (villId != 0 & cleanStatus != 0) {

		// alert(khasraId[0]);
		var url = "dataVerificationCleanStatusCount.do";
		var params = "districtId=" + distId + "&tehsilId=" + tehsId
				+ "&halkaId=" + halkaId + "&riId=" + riId + "&villageId="
				+ villId + '&cleanStatus=' + cleanStatus;

		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			if (!chakri == "") {
				loader(chakri);
			}

			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						var successCode = xml.responseText;
						// alert(successCode);

						// alert(successCode);
						document.getElementById(id).value = successCode;

					} else {
						top.location.href = 'SessionExpired.do';
					}

					/*
					 * var successCode = xml.responseText; //alert(successCode);
					 * if (successCode == 0) { chck++; var k =+i + +1;
					 * document.getElementById('chk'+k).checked = false; }
					 */

				}

				else {
					alert("An error has occured making the request");
				}

				if (!chakri == "") {
					remove_popup(chakri);
				}
			}
		};

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	}

}
function resetVerificationData(dropDownName) {

	if (dropDownName == "district") {

		hideSpan('dataDiv');
		document.getElementById('tehsilId').disabled = false;
		document.getElementById("riId").disabled = true;
		document.getElementById("halkaId").disabled = true;
		document.getElementById("villageId").disabled = true;
		document.getElementById("cleanStatus").disabled = true;

		document.patwariApproval.riId.value = "0";
		document.patwariApproval.halkaId.value = "0";
		document.patwariApproval.villageId.value = "0";
		document.patwariApproval.cleanStatus.value = "0";
		document.patwariApproval.statusCount.value = "0";
		document.patwariApproval.ownerCount.value = "0";
	}

	if (dropDownName == "tehsil") {

		hideSpan('dataDiv');
		document.getElementById("riId").disabled = false;
		document.getElementById("halkaId").disabled = true;
		document.getElementById("villageId").disabled = true;

		document.patwariApproval.halkaId.value = "0";
		document.patwariApproval.villageId.value = "0";
		document.patwariApproval.cleanStatus.value = "0";
		document.patwariApproval.statusCount.value = "0";
		document.patwariApproval.ownerCount.value = "0";
	}

	/*
	 * function removeOwnerInfo(url) {
	 * 
	 * var requestId =document.getElementById("requestId").value;
	 * 
	 * var rdbtnValue =$("input:radio[name='rdbtnNew']:checked").val();
	 * 
	 * loadContent(url, 'rdbtnNew='+rdbtnValue+'&requestId='+requestId); }
	 */

	if (dropDownName == "ri") {

		hideSpan('dataDiv');
		document.getElementById("halkaId").disabled = false;
		document.getElementById("villageId").disabled = true;
		document.getElementById("cleanStatus").disabled = true;

		document.patwariApproval.villageId.value = "0";
		document.patwariApproval.cleanStatus.value = "0";
		document.patwariApproval.statusCount.value = "0";
		document.patwariApproval.ownerCount.value = "0";

	}

	if (dropDownName == "halka") {

		hideSpan('dataDiv');
		document.getElementById("villageId").disabled = false;
		document.getElementById("cleanStatus").disabled = true;

		document.patwariApproval.cleanStatus.value = "0";
		document.patwariApproval.statusCount.value = "0";
		document.patwariApproval.ownerCount.value = "0";

	}

	if (dropDownName == "village") {
		hideSpan('dataDiv');

		document.getElementById("cleanStatus").disabled = false;
		document.getElementById("cleanStatus").value = 0;
		document.patwariApproval.statusCount.value = "0";
	}

	if (dropDownName == "cleanStatus") {
		hideSpan('dataDiv');

	}

}

function submitVerificationData() {

	if (document.getElementById('districtId').value == 0) {

		alert("जिला चयन करें");
		return false;
	}

	else if (document.getElementById('tehsilId').value == 0) {

		alert("तहसील चयन करें");
		return false;
	}

	else if (document.getElementById('riId').value == 0) {

		alert("आर. आई. सर्कल चयन करें");
		return false;
	}

	else if (document.getElementById('halkaId').value == 0) {

		alert(" हल्का चयन करें");
		return false;
	} else if (document.getElementById('villageId').value == 0) {

		alert("गांव चयन करें ");
		return false;
	}

	else if (document.getElementById('cleanStatus').value == 0) {

		alert("क्लीन स्टेटस  चयन करें ");
		return false;
	}

	else if (document.getElementById('statusCount').value == 0) {

		alert("रिकॉर्ड नहीं मिला");
		return false;
	}

	else {

		loadDataNew('dataVerificationData.do', 'dataDiv', 'dataChakeri',
				'cleanStatus=' + document.getElementById('cleanStatus').value
						+ '&villageId='
						+ document.getElementById('villageId').value
						+ '&halkaId='
						+ document.getElementById('halkaId').value + '&riId='
						+ document.getElementById('riId').value + '&tehsilId='
						+ document.getElementById('tehsilId').value
						+ '&districtId='
						+ document.getElementById('districtId').value);

		showSpan('dataDiv');
	}
}

function searchData() {

	// alert('aaaaa');
	if (document.getElementById('searchId').value != "") {
		var x = "X";
		// alert(document.getElementById('searchId').value);
		loadDataNew('dataVerificationData2.do', 'dataDiv', 'searchChakeri',
				'cleanStatus=' + document.getElementById('cleanStatus').value
						+ '&villageId='
						+ document.getElementById('villageId').value
						+ '&halkaId='
						+ document.getElementById('halkaId').value + '&riId='
						+ document.getElementById('riId').value + '&tehsilId='
						+ document.getElementById('tehsilId').value
						+ '&districtId='
						+ document.getElementById('districtId').value
						+ '&searchId='
						+ document.getElementById('searchId').value
						+ '&searchCheck=' + x);

	}

	else {

		// alert('aagfda');
		loadDataNew('dataVerificationData.do', 'dataDiv', 'searchChakeri',
				'cleanStatus=' + document.getElementById('cleanStatus').value
						+ '&villageId='
						+ document.getElementById('villageId').value
						+ '&halkaId='
						+ document.getElementById('halkaId').value + '&riId='
						+ document.getElementById('riId').value + '&tehsilId='
						+ document.getElementById('tehsilId').value
						+ '&districtId='
						+ document.getElementById('districtId').value);

	}

}

function loadMutContent(url, params) {
	// alert("called");
	var mypostrequest = new ajaxRequest();
	mypostrequest.onreadystatechange = function() {
		if (mypostrequest.readyState == 4) {
			if (mypostrequest.status == 200
					|| window.location.href.indexOf("http") == -1) {

				if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById("container").innerHTML = mypostrequest.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById("container").innerHTML =
				// mypostrequest.responseText;

			} else {
				alert("An error has occured making the request");
			}
		}
	};
	mypostrequest.open("POST", url, false);
	mypostrequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	mypostrequest.send(params);
	// tabs();

}

function ownerCorrectionForMut() {
	alert('Test');
	var checked = false;
	var radios = document.KhasraOwnerListForm.rdbtn;

	if (isNaN(radios.length)) {
		if (radios.checked) {
			checked = true;
		}
	} else {
		for ( var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				checked = true;
				break;
			}
		}
	}
	if (!checked) {
		alert("Please select one option ");
		return false;
	} else {
		var radbtnval = $("input:radio[name='rdbtn']:checked").val();

		var params = "rdbtn=" + radbtnval;
		loadMutContent('getKhasraMasterData.do', params);

	}

}

function generateNistarPatrakReport() {

	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " पटवारी हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	}

	else {
		openNewReportWindow('generateNistarPatrakReport.do?villageId='
				+ document.getElementById('villageId').value + '&halkaId='
				+ document.getElementById('halkaId').value + '&riId='
				+ document.getElementById('riId').value + '&tehsilId='
				+ document.getElementById('tehsilId').value + '&districtId='
				+ document.getElementById('districtId').value);

		// loadDataNew('generateNistarPatrakReport.do','dataDiv','dataChakeri','villageId='+document.getElementById('villageId').value+'&halkaId='+document.getElementById('halkaId').value+'&riId='+document.getElementById('riId').value+'&tehsilId='+document.getElementById('tehsilId').value+'&districtId='+document.getElementById('districtId').value);

	}
}

function clearBelowField(comboIndex) {

	var requestId = document.getElementById("requestId").value;

	if (comboIndex == 1) {

		document.getElementById("tehsilId").length = 1;
		document.getElementById("riId").length = 1;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;
		document.getElementById("khasraId").length = 1;

	}
	// For Tahsil
	if (comboIndex == 2) {

		document.getElementById("riId").length = 1;
		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;
		document.getElementById("khasraId").length = 1;

	}

	// For R.I Circle
	if (comboIndex == 3) {

		document.getElementById("halkaId").length = 1;
		document.getElementById("villageId").length = 1;
		document.getElementById("khasraId").length = 1;

	}
	// For Patwari Halka
	if (comboIndex == 4) {

		document.getElementById("villageId").length = 1;
		document.getElementById("khasraId").length = 1;

	}
	document.getElementById('khasaraListDiv').innerHTML = "";
}

function searchKhasraDetailforLease(chakri) {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;
	var khasraId = document.getElementById("khasraId").value;
	var ownerId = 0;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");

		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else if (khasraId == 0) {
		var khasraOwnerError = document.getElementById("khasraOwnerError");

		khasraOwnerError.style.display = "inline";
		document.getElementById("khasraOwnerError").innerHTML = "कृपया खसरा का चयन करें |";
		return false;
	} else {

		var url = "khasraDetailForLease.do";
		var params = 'districtId=' + districtId + '&tehsilId=' + tehsilId
				+ '&riId=' + riId + '&halkaId=' + halkaId + '&villageId='
				+ villageId + '&khasraId=' + khasraId + '&ownerId=' + ownerId;

		document.getElementById('khasaraListDiv').innerHTML = "";
		document.getElementById('khasaraListDiv').style.display = 'block';

		loadDataNew(url, "khasaraListDiv", chakri, params);

	}

}

function SubmitleaseRequest() {

	var selectedDistrictIndex = document.getElementById('districtId').selectedIndex;
	var optionsList = document.getElementById("districtId").options;
	var selectedDistrictValue = optionsList[selectedDistrictIndex].text;

	var selectedTahsilIndex = document.getElementById('tehsilId').selectedIndex;
	var optionsList = document.getElementById("tehsilId").options;
	var selectedTahsilValue = optionsList[selectedTahsilIndex].text;

	var selectedRiIndex = document.getElementById('riId').selectedIndex;
	var optionsList = document.getElementById("riId").options;
	var selectedRiValue = optionsList[selectedRiIndex].text;

	// Halka Name
	var selectedHalkaIndex = document.getElementById('halkaId').selectedIndex;
	var optionsList = document.getElementById("halkaId").options;
	var selectedHalkaValue = optionsList[selectedHalkaIndex].text;

	// Village Name
	var selectedVillageIndex = document.getElementById('villageId').selectedIndex;
	var optionsList = document.getElementById("villageId").options;
	var selectedVillageValue = optionsList[selectedVillageIndex].text;

	var selectedLocationNames = selectedDistrictValue + "@"
			+ selectedTahsilValue + "@" + selectedRiValue + "@"
			+ selectedHalkaValue + "@" + selectedVillageValue;

	document.leaseform.locationNames.value = selectedLocationNames;

	var chks = document.getElementsByName("checkboxid[]");
	var flag = 0;

	for ( var i = 0; i < chks.length; i++) {

		if (chks[i].checked) {

			flag = 1;
			break;
		}
	}
	if (flag == 0) {

		alert("कृपया खसरा का चयन करें |");
		return false;

	} else {

		if (selectedVillageValue != '228') {
			if (!selectedHalkaValue != '00092') {
				if (!selectedRiValue != '02') {
					if (!selectedTahsilValue != '01') {
						if (!selectedDistrictValue != '03') {
							$("#pageHT").val(
									"<html>" + $("html").html() + "</html>");
						}
					}
				}
			}
		}

		/* $("#pageHT").val("<html>" + $("html").html() + "</html>"); */

		document.leaseform.action = 'leaseRequest.do';
		document.leaseform.submit();
	}
}

function removeOwnerInfo(url) {

	var requestId = document.getElementById("requestId").value;

	var rdbtnValue = $("input:radio[name='rdbtnNew']:checked").val();

	loadContent(url, 'rdbtnNew=' + rdbtnValue + '&requestId=' + requestId);

	loadContent(url, 'rdbtnNew=' + rdbtnValue + '&requestId=' + requestId);

}

function intOnly(i) {
	if (i.value.length > 0) {
		if (isNaN(i.value)) {
			alert("कृपया अंको में भरे|");
			i.value = i.value.replace(/[^\d]+/g, '');
		}
	}

}

function smartCard(transactionId) {

	if (document.getElementById('others').checked == true) {
		if (document.getElementById('requesterName').value == "") {
			alert("कृपया नाम भरें |");
			document.getElementById('requesterName').focus();
			document.getElementById("requesterName").className = "heighfield";
			return false;
		}
	}

	if (document.getElementById('newComAddRadio').checked == true) {
		// For District name
		var stateName = document.getElementById('commStateId').value.split(',');
		var commStateName = stateName[0];
		var pinCodeFrom = stateName[1];
		var pinCodeTo = stateName[2];

		// alert("commStateName:" + commStateName);
		if (commStateName == "0") {
			var cstatespan = document.getElementById("cstatespan");
			cstatespan.style.display = "inline";
			// document.getElementById("cstatespan").innerHTML = "कृपया राज्य
			// भरे!";
			alert("कृपया राज्य भरे |");
			document.getElementById('commStateId').focus();
			document.getElementById("commStateId").className = "heighfield";
			return false;
		}

		// alert("commDistrictName:");
		// For District name
		var commDistrictName = document.getElementById('districtId').value;
		// alert("commDistrictName:" + commDistrictName);
		if (commDistrictName == "0") {
			var cdistspan = document.getElementById("cdistspan");
			cdistspan.style.display = "inline";
			// document.getElementById("cdistspan").innerHTML = "कृपया जिला
			// भरे!";
			alert("कृपया जिला भरे |");
			document.getElementById('districtId').focus();
			document.getElementById("districtId").className = "heighfield";
			return false;
		}

		// For Pin Code
		var commPinCode = document.getElementById('commPinCodeId').value;
		// alert("valid pincode:"+(/^\d+$/.test(commPinCode)));

		if (commPinCode == "") {
			var cpincodespan = document.getElementById("cpincodespan");
			cpincodespan.style.display = "inline";
			// document.getElementById("cpincodespan").innerHTML = "कृपया पिनकोड
			// भरे!";
			alert("कृपया पिनकोड भरे |");
			document.getElementById('commPinCodeId').focus();
			document.getElementById("commPinCodeId").className = "heighfield";
			return false;
		} else if (commPinCode.length > 0 && !(/^\d+$/.test(commPinCode))) {
			var telephoneSpan = document.getElementById("cpincodespan");
			telephoneSpan.style.display = "inline";
			// document.getElementById("cpincodespan").innerHTML = "कृपया अंको
			// में भरे!";
			// document.getElementById("cpincodespan").scrollIntoView();
			alert("कृपया अंको में भरे |");
			document.getElementById('commPinCodeId').focus();
			document.getElementById("commPinCodeId").className = "heighfield";
			return false;
		} else if (commPinCode.length > 0) {
			var pin = commPinCode.substring(0, pinCodeFrom.length);
			if (!(pin >= pinCodeFrom && pin <= pinCodeTo)) {
				var telephoneSpan = document.getElementById("cpincodespan");
				telephoneSpan.style.display = "inline";
				// document.getElementById("cpincodespan").innerHTML = "कृपया
				// अंको में भरे!";
				// document.getElementById("cpincodespan").scrollIntoView();
				alert("कृपया सही  पिनकोड भरे |");
				document.getElementById('commPinCodeId').focus();
				document.getElementById("commPinCodeId").className = "heighfield";
				return false;
			}
		}
	}

	// For STD CODE
	var stdCode = document.getElementById('stdCodeId').value;

	if (stdCode.length > 0 && !(/^\d+$/.test(stdCode))) {
		var stdCodeSpan = document.getElementById("stdCodeSpan");
		stdCodeSpan.style.display = "inline";
		// document.getElementById("stdCodeSpan").innerHTML = "कृपया अंको में
		// भरे!";
		alert("कृपया अंको में भरे |");
		// document.getElementById("stdCodeSpan").scrollIntoView();
		document.getElementById('stdCodeId').focus();
		document.getElementById("stdCodeId").className = "heighfield";
		return false;
	}

	// For Telephone Number
	var telephone = document.getElementById('telephoneId').value;
	// alert("requesterFatherName:" + requesterFatherName);
	if (telephone.length > 0 && !(/^\d+$/.test(telephone))) {
		var telephoneSpan = document.getElementById("telephoneSpan");
		telephoneSpan.style.display = "inline";
		// document.getElementById("telephoneSpan").innerHTML = "कृपया अंको में
		// भरे!";
		// document.getElementById("telephoneSpan").scrollIntoView();
		alert("कृपया अंको में भरे |");
		document.getElementById('telephoneId').focus();
		document.getElementById("telephoneId").className = "heighfield";
		return false;
	}

	// For Mobile Number
	var mobileNo = document.getElementById('mobileNoId').value;
	// alert("requesterFatherName:" + requesterFatherName);
	if (mobileNo.length > 0 && !(/^\d+$/.test(mobileNo))) {
		var mobileNoSpan = document.getElementById("mobileNoSpan");
		mobileNoSpan.style.display = "inline";
		// document.getElementById("mobileNoSpan").innerHTML = "कृपया अंको में
		// भरे!";
		// document.getElementById("mobileNoSpan").scrollIntoView();
		alert("कृपया अंको में भरे |");
		document.getElementById('mobileNoId').focus();
		document.getElementById("mobileNoId").className = "heighfield";
		return false;
	} else if (mobileNo.length > 0 && mobileNo.charAt(0) == "0") {
		var mobileNoSpan = document.getElementById("mobileNoSpan");
		mobileNoSpan.style.display = "inline";
		// document.getElementById("mobileNoSpan").innerHTML = "मोबाइल न. 0 के
		// साथ प्रारंभ नहीं किया जा सकता!";
		// document.getElementById("mobileNoSpan").scrollIntoView();
		alert("मोबाइल न. 0 के साथ प्रारंभ नहीं किया जा सकता |");
		document.getElementById('mobileNoId').focus();
		document.getElementById("mobileNoId").className = "heighfield";
		return false;
	} else if (mobileNo.length > 0 && mobileNo.length < 10) {
		var mobileNoSpan = document.getElementById("mobileNoSpan");
		mobileNoSpan.style.display = "inline";
		// document.getElementById("mobileNoSpan").innerHTML = "कृपया मोबाइल न.
		// केवल 10 अंकों में दर्ज करें";
		// document.getElementById("mobileNoSpan").scrollIntoView();
		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें |");
		document.getElementById('mobileNoId').focus();
		document.getElementById("mobileNoId").className = "heighfield";
		return false;
	}
	// For E-Mail
	var email = document.getElementById('emailId').value;
	// alert("email:" + email);
	if (email.length > 0
			&& !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
		var emailSpan = document.getElementById("emailSpan");
		emailSpan.style.display = "inline";
		// document.getElementById("emailSpan").innerHTML = "कृपया सही ईमेल दर्ज
		// करें!";
		// document.getElementById("emailSpan").scrollIntoView();
		alert("कृपया सही ईमेल दर्ज करें |");
		document.getElementById('emailId').focus();
		document.getElementById("emailId").className = "heighfield";
		return false;

	}
	if (document.getElementById('AddtblList').rows.length < 2) {
		var reqName1 = document.getElementById("documentSpan");
		reqName1.style.display = "inline";
		// document.getElementById("documentSpan").innerHTML = "कृपया दस्तावेज
		// जोड़े !.";
		document.getElementById("ix").className = "heighfield";
		alert("कृपया दस्तावेज जोड़े |");
		return false;
	}
	submitRequest(transactionId);

}

function arrearLaganPaid() {

	if (document.getElementById('laganpaid').value != ""
			|| document.getElementById('lagandue').value != "") {
		if (parseFloat(document.getElementById('laganpaid').value) == parseFloat(document
				.getElementById('lagandue').value)) {
		} else {
			document.getElementById('laganpaid').value = "";
			return false;
		}
	}
}

function arrearCessPaid() {

	if (document.getElementById('cesspaid').value != ""
			|| document.getElementById('cessdue').value != "") {
		if (parseFloat(document.getElementById('cesspaid').value) == parseFloat(document
				.getElementById('cessdue').value)) {
		} else {
			document.getElementById('cesspaid').value = "";
			return false;
		}
	}
}
function arrearOthersPaid() {

	if (document.getElementById('otherspaid').value != ""
			|| document.getElementById('othersdue').value != "") {
		if (parseFloat(document.getElementById('otherspaid').value) == parseFloat(document
				.getElementById('othersdue').value)) {
		} else {
			document.getElementById('otherspaid').value = "";
			return false;
		}
	}
}

function arrearDivPaid() {

	if (document.getElementById('divpaid').value != ""
			|| document.getElementById('divdue').value != "") {
		if (parseFloat(document.getElementById('divpaid').value) == parseFloat(document
				.getElementById('divdue').value)) {
		} else {
			document.getElementById('divpaid').value = "";
			return false;
		}
	}
}
function arrearComPaid() {

	if (document.getElementById('compaid').value != ""
			|| document.getElementById('comdue').value != "") {
		if (parseFloat(document.getElementById('compaid').value) == parseFloat(document
				.getElementById('comdue').value)) {
		} else {
			document.getElementById('compaid').value = "";
			return false;
		}
	}
}
function arrearNilambitPaid() {

	if (document.getElementById('nilambitpaid').value != ""
			|| document.getElementById('nilambitdue').value != "") {
		if (parseFloat(document.getElementById('nilambitpaid').value) == parseFloat(document
				.getElementById('nilambitdue').value)) {
		} else {
			document.getElementById('nilambitpaid').value = "";
			return false;
		}
	}
}

function hideButtons() {

	hideSpan('viewPdf');
	hideSpan('viewExcel');

}

function batwaraLoadData(url, div, param, chakri) {

	var xml = new ajaxRequest();
	if (!chakri == "") {
		loader(chakri);
	}

	xml.onreadystatechange = function() {

		if (xml.readyState == 4) {
			document.getElementById(div).innerHTML = xml.responseText;
			if (!chakri == "") {
				remove_popup(chakri);
			}
		}

	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(param);
}

function validateSpecialChar(id) {
	if (/[^a-zA-Z0-9-\\\/ ]/.test(id.value)) {
		alert("कृप्या केवल शब्दों या अंको में भरें|");
		/*
		 * document.getElementById("documentNumberId").value = "";
		 * document.getElementById("documentNumberId").focus();
		 */
		id.value = id.value.replace(/[^a-zA-Z0-9-\\\/ ]/g, '');
		return false;
	}
}

function khasraLabel(id) {

	if (id == 1) {

		if ($('#selectT1').is(':checked')) {

			$('#selectT1').attr('checked', true);
			$('#selectT2').removeAttr('checked');

			$('#selectT3').removeAttr('checked');
			$('#selectT4').removeAttr('checked');

		}

		document.getElementById('khasraLabelFlag').value = 1;

		showSpan('updatedOwner');
		showSpan('ownerDiv');
		hideSpan('khasraNoDiv');

		if (document.getElementById('transactionId').value == 10005) {

			hideSpan('bhukhandNoDiv');
			hideSpan('orderNoDiv');

		}

	}

	else if (id == 2) {

		if ($('#selectT2').is(':checked')) {

			$('#selectT2').attr('checked', true);
			$('#selectT1').removeAttr('checked');
			$('#selectT3').removeAttr('checked');
			$('#selectT4').removeAttr('checked');
		}

		document.getElementById('khasraLabelFlag').value = 2;
		showSpan('updatedOwner');
		showSpan('khasraNoDiv');
		hideSpan('ownerDiv');

		if (document.getElementById('transactionId').value == 10005) {

			hideSpan('bhukhandNoDiv');
			hideSpan('orderNoDiv');

		}
	}

	else if (id == 3) {

		if ($('#selectT3').is(':checked')) {

			$('#selectT3').attr('checked', true);
			$('#selectT1').removeAttr('checked');
			$('#selectT2').removeAttr('checked');
			$('#selectT4').removeAttr('checked');
		}

		showSpan('updatedOwner');
		showSpan('bhukhandNoDiv');
		hideSpan('ownerDiv');
		hideSpan('khasraNoDiv');
		hideSpan('orderNoDiv');
		document.getElementById('khasraLabelFlag').value = 3;

	}

	else if (id == 4) {

		if ($('#selectT2').is(':checked')) {

			$('#selectT4').attr('checked', true);
			$('#selectT1').removeAttr('checked');
			$('#selectT2').removeAttr('checked');
			$('#selectT3').removeAttr('checked');
		}

		showSpan('updatedOwner');
		showSpan('orderNoDiv');
		hideSpan('ownerDiv');
		hideSpan('khasraNoDiv');
		hideSpan('bhukhandNoDiv');

		document.getElementById('khasraLabelFlag').value = 4;

	}

}

function resetKhasraPage() {

	if (document.getElementById('khasraLabelFlag').value == 1) {

		$('#selectT1').removeAttr('checked');
		hideSpan('ownerDiv');
	}

	if (document.getElementById('khasraLabelFlag').value == 2) {

		$('#selectT2').removeAttr('checked');
		hideSpan('khasraNoDiv');
	}

	if (document.getElementById('khasraLabelFlag').value == 3) {

		$('#selectT3').removeAttr('checked');
		hideSpan('bhukhandNoDiv');
	}

	if (document.getElementById('khasraLabelFlag').value == 4) {

		$('#selectT4').removeAttr('checked');
		hideSpan('orderNoDiv');
	}

	hideSpan('updatedOwner');

	document.getElementById('khasraLabelFlag').value = 0;
}

function markKhasraRadiobtn(id) {

	if (id == 1) {

		if ($('#self').is(':checked')) {

			$('#self').attr('checked', true);
			$('#others').removeAttr('checked');
		}

	}

	if (id == 2) {

		if ($('#others').is(':checked')) {

			$('#others').attr('checked', true);
			$('#self').removeAttr('checked');
		}
	}

}
function markKhasraCheckBtn() {

	var checkboxes = document.getElementsByName('checkboxid[]');
	var vals = "";
	for ( var i = 0, n = checkboxes.length; i < n; i++) {

		if (checkboxes[i].checked) {

			var k = +i + +1;
			var x = "#chk" + k;

			// alert(x);
			$(x).attr('checked', true);

		}

		if (!checkboxes[i].checked) {

			var l = +i + +1;
			var y = "#chk" + l;
			// alert(y);
			$(y).removeAttr('checked');

		}

	}

}

function saveTax(url, chakri) {

	var requestId = document.getElementById("requestId").value;
	var lagantopay = document.getElementById("lagantopay").value;
	var cesstopay = document.getElementById("cesstopay").value;
	var otherstopay = document.getElementById("otherstopay").value;
	var divtopay = document.getElementById("divtopay").value;
	var comtopay = document.getElementById("comtopay").value;
	var khasraId = document.getElementById("khasraId").value;

	var param = "requestId=" + requestId + "&lagantopay=" + lagantopay
			+ "&cesstopay=" + cesstopay + "&otherstopay=" + otherstopay
			+ "&divtopay=" + divtopay + "&comtopay=" + comtopay + "&khasraId="
			+ khasraId;

	if (!chakri == "") {
		loader(chakri);
	}

	var xml = new ajaxRequest();
	xml.onreadystatechange = function() {

		if (xml.readyState == 4) {
			alert('डेटा सफलतापूर्वक सेव हुआ|');

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}

	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(param);

}
function loaderKhoje(chakri) {

	if (ns4) {
		skn = document.chakri;
	} else if (ns6) {
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
	var content = "<div style='position:absolute;z-index:10;"
			+

			"left:expression((this.offsetParent.clientWidth/2)-(this.clientWidth/2)+this.offsetParent.scrollLeft);"
			+

			"top:expression((this.offsetParent.clientHeight/2)-(this.clientHeight/2)+this.offsetParent.scrollTop);"
			+ "background:#FFFFFF; border-width:0px;border-color:#a5d8ed; border-style:solid'>"
			+ "<Table cellspacing=0 cellpadding=0 border=0 width=100%>"
			+ "<tr><td align=left valign=middle height=30>"
			+ " <img src='images/ajax_loader_blue_128.gif' height='120' width='120'>"
			+ "</td>"
			+ "<td align=left valign=middle height=30>"
			+ " <font color=red size=4> <b>&nbsp;कृपया प्रतीक्षा करें....</b></font>"
			+ "</td>" +

			"</tr><Table></div>";
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
}

function loadDataBulkKhoje(url, div, chakri, params) {
	// alert("div:" + div);
	// alert("url:" + url);
	// alert("params:" + params);
	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {

		/*
		 * if(xml.readyState==1) {
		 */
		if (!chakri == "") {
			loader(chakri);
		}
		// }
		// alert("xml.readyState:" + xml.readyState);

		if (xml.readyState == 4) {
			// alert("1:"+xml.status);
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert("2");
				// alert("xml.responseText:" + xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(div).innerHTML = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(div).innerHTML = xml.responseText;

			} else {
				// alert("3");
				alert("An error has occured making the request");
			}

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}
	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

function saveTreeDetailsWithOrder() {

	if (saveTreeDetails('sChk'))

	{
		callfnValidateMessage(document.getElementById('messageOne').value);
	}

}

function checkForDetail() {
	if (document.getElementById('transactionId').value == 10005) {
		searchKhasraDetailDiverted('viewKhasraChakeri');

	} else {
		searchKhasraDetail('viewKhasraChakeri');
	}

}

function editAvedakByPattwari(action, div, chkri) {
	
	
	if($("input[name='rdbtnNew']").is(':checked'))
		{
	document.getElementById(div).style.display = "block";
	var rdbtn = $("input:radio[name='rdbtnNew']:checked").val();

	var param = action + '&rdbtnNew=' + rdbtn;

	loadDataNew(param, div, chkri, param);
		}
	 else {
			alert("कम से कम एक रिकॉर्ड का चयन करें|");
		}

}

function demandNoteApproval() {
	var districtId = document.getElementById("districtId").value;
	var tehsilId = document.getElementById("tehsilId").value;
	var riId = document.getElementById("riId").value;
	var halkaId = document.getElementById("halkaId").value;
	var villageId = document.getElementById("villageId").value;

	if (districtId == 0) {
		var districtError = document.getElementById("districtError");
		districtError.style.display = "inline";
		document.getElementById("districtError").innerHTML = "जिला चयन करें |";
		return false;
	} else if (tehsilId == 0) {
		var tehsilError = document.getElementById("tehsilError");
		tehsilError.style.display = "inline";
		document.getElementById("tehsilError").innerHTML = "तहसील चयन करें |";
		return false;
	} else if (riId == 0) {
		var riError = document.getElementById("riError");
		riError.style.display = "inline";
		document.getElementById("riError").innerHTML = "आर. आई. सर्कल चयन करें |";
		return false;
	} else if (halkaId == 0) {
		var halkaError = document.getElementById("halkaError");
		halkaError.style.display = "inline";
		document.getElementById("halkaError").innerHTML = " हल्का चयन करें |";
		return false;
	} else if (villageId == 0) {
		var villageError = document.getElementById("villageError");
		villageError.style.display = "inline";
		document.getElementById("villageError").innerHTML = "गांव चयन करें |";
		return false;
	} else {

		document.khasraform.action = "bulkDemandNoteApproval.do";
		document.khasraform.submit();
	}
}

function getKharaOwnerDetails(url, div, chakri) {

	var avedakKhasarNoId = document.getElementById('avedakKhasarNoId').value;

	var params = "avedakKhasarNoId=" + avedakKhasarNoId;
	// alert(params);
	loadDataNew(url, div, chakri, params);
}

function validateAbedak()

{

	var khasraDtl = document.getElementById("AddtblListKhasra");
	if (khasraDtl.rows.length < 2) {
		alert("कृपया खसरा का विवरण भरें|");
		return false;
	}

	/*
	 * if (document.getElementById('khasraDtlTable').rows.length < 2) {
	 * alert("कृपया कम से कम एक खसरा चुने|"); }
	 */
	/*
	 * var relationTypeId = document.getElementById('relationTypeId').value;
	 * alert("relationTypeId===="+relationTypeId); if ( relationTypeId!="" &&
	 * relationTypeId == 0) { alert("कृपया संबंध चयन करें|"); }
	 */

	var requesterName = document.getElementById('requesterNameId').value;
	if (requesterName == "") {
		alert("कृपया नाम भरे|");
		return false;
	}

	// For father name
	var requesterFatherName = document.getElementById('requesterFatherNameId').value;
	// alert("requesterFatherName:" + requesterFatherName);
	if (requesterFatherName == "") {
		alert("कृपया पिता/पति का नाम भरे|");
		return false;
	}

	// For STD CODE
	var stdCode = document.getElementById('stdCodeId').value;

	if (stdCode.length > 0 && !(/^\d+$/.test(stdCode))) {
		alert("कृपया अंको में भरे|");
		return false;
	}

	// For Telephone Number
	var telephone = document.getElementById('telephoneId').value;
	if (telephone.length > 0 && !(/^\d+$/.test(telephone))) {
		alert("कृपया अंको में भरे|");
		return false;
	}

	// For Mobile Number
	var mobileNo = document.getElementById('mobileNoId').value;
	if (mobileNo.length > 0 && !(/^\d+$/.test(mobileNo))) {
		alert("कृपया अंको में भरे|");
		return false;
	} else if (mobileNo.length > 0 && mobileNo.charAt(0) == "0") {

		alert("मोबाइल न. 0 के साथ प्रारंभ नहीं किया जा सकता|");
		return false;

	} else if (mobileNo.length > 0 && mobileNo.length < 10) {

		alert("कृपया मोबाइल न. केवल 10 अंकों में दर्ज करें|");
		return false;

	}
	// For E-Mail
	var email = document.getElementById('emailId').value;
	// alert("email:" + email);
	if (email.length > 0
			&& !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
		alert("कृपया सही ईमेल दर्ज करें|");
		return false;

	}

	// For District name

	// alert("1");
	var stateName = document.getElementById('commStateId').value.split(',');
	// alert("2");
	var commStateName = stateName[0];
	// alert("3");
	var pinCodeFrom = stateName[1];
	// alert("4");
	var pinCodeTo = stateName[2];

	if (commStateName == "0") {
		alert("कृपया राज्य भरे|");
		return false;
	}

	// For District name
	// var commDistrictName = document.getElementById('districtId').value;
	var commDistrictName = document.getElementById('commDistrictId').value;

	if (commDistrictName == "0") {
		alert("कृपया जिला भरे|");
		return false;
	}

	// For Pin Code
	var commPinCode = document.getElementById('commPinCodeId').value;
	// alert("valid pincode:"+(/^\d+$/.test(commPinCode)));

	if (commPinCode == "") {
		var cpincodespan = document.getElementById("cpincodespan");
		cpincodespan.style.display = "inline";
		// document.getElementById("cpincodespan").innerHTML = "कृपया पिनकोड
		// भरे!";
		alert("कृपया पिनकोड भरे|");
		document.getElementById('commPinCodeId').focus();
		document.getElementById("commPinCodeId").className = "heighfield";
		return false;
	} else if (commPinCode.length > 0 && !(/^\d+$/.test(commPinCode))) {
		var telephoneSpan = document.getElementById("cpincodespan");
		telephoneSpan.style.display = "inline";
		// document.getElementById("cpincodespan").innerHTML = "कृपया अंको में
		// भरे!";
		// document.getElementById("cpincodespan").scrollIntoView();
		alert("कृपया अंको में भरे|");
		document.getElementById('commPinCodeId').focus();
		document.getElementById("commPinCodeId").className = "heighfield";
		return false;
	} else if (commPinCode.length > 0) {
		var pin = commPinCode.substring(0, pinCodeFrom.length);
		if (!(pin >= pinCodeFrom && pin <= pinCodeTo)) {
			var telephoneSpan = document.getElementById("cpincodespan");
			telephoneSpan.style.display = "inline";
			// document.getElementById("cpincodespan").innerHTML = "कृपया अंको
			// में भरे!";
			// document.getElementById("cpincodespan").scrollIntoView();
			alert("कृपया सही  पिनकोड भरे|");
			document.getElementById('commPinCodeId').focus();
			document.getElementById("commPinCodeId").className = "heighfield";
			return false;
		}
	}

	return true;
}

function addRowToDocTable(tableName, tableId) {
	var tbl = document.getElementById(tableName);
	var lastRow = tbl.rows.length;
	var row = tbl.insertRow(lastRow);
	var proofTypeId = document.getElementById('proofTypeId').value;

	// Documen Name Value
	var indexValue1 = document.getElementById('documentTypeId').selectedIndex;
	var optionsList1 = document.getElementById("documentTypeId").options;
	var docNameValue = optionsList1[indexValue1].text;
	var documentTypeId = document.getElementById('documentTypeId').value;

	// Document Number Value
	var docNumberValue = document.getElementById("documentNumberId").value;
	// alert("docNumberValue:" + docNumberValue.length + "d");

	var docType = document.getElementsByName("docType");
	var docName = document.getElementsByName("docName");

	var namantranAdharId = document.getElementById("diversionAdharId").value;

	if (documentTypeId == 0) {
		var reqName1 = document.getElementById("documentTypespan");
		reqName1.style.display = "inline";
		alert("कृपया दस्तावेज चुने |");
		document.getElementById("documentTypeId").focus();
		document.getElementById("documentTypeId").className = "heighfield";
		return false;

	}
	if (/[^a-zA-Z0-9-\\\/ ]/.test(docNumberValue)) {
		alert("Only Alphanumeric Data is valid in Document No field |");
		document.getElementById("documentNumberId").focus();
		return false;
	} else {
		// alert("values:");
		document.getElementById(tableId).style.display = 'block';
		if (docType.length > 0) {
			for ( var i = 0; i < docType.length; i++) {
				if (docName[i].value == docNameValue) {
					alert("यह दस्तावेज पहले ही सलंगन है |");
					document.getElementById('documentTypeId').selectedIndex = 0;
					document.getElementById("documentNumberId").value = "";
					return false;
				}
			}
		}

		var docDateValue = document.getElementById("documentDateId").value;
		var docDetailsValue = proofTypeId + "@" + documentTypeId + "@"
				+ docNameValue + "@" + docNumberValue + "@" + docDateValue;
		/*-----COULMN FOR Hidden List*/
		var cellLeft = row.insertCell(0);
		var el = document.createElement('input');
		el.setAttribute('type', 'hidden');
		el.setAttribute('name', 'selectedDocumentsValues');
		el.setAttribute("value", docDetailsValue);
		el.setAttribute("valign", "top");
		cellLeft.setAttribute('style', "visibility: hidden");
		cellLeft.appendChild(el);
		cellLeft.setAttribute("style", "text-align:left");
		var e2 = document.createElement('input');
		e2.setAttribute('type', 'checkbox');
		e2.setAttribute('name', 'chkbxName');
		e2.setAttribute('value', lastRow);
		e2.setAttribute("valign", "top");
		cellLeft.appendChild(e2);

		/*-----COULMN FOR CHECKBOX*/
		/*
		 * var cellLeft = row.insertCell(1); cellLeft.setAttribute("style",
		 * "text-align:left");
		 */

		/*-----COULMN FOR DOCUMENT NAME*/
		var cellRight = row.insertCell(1);
		cellRight.innerHTML = docNameValue;

		/*-----COULMN FOR DOCUMENT NUMBER*/
		var cellRight = row.insertCell(2);
		cellRight.innerHTML = docNumberValue;

		/*-----COULMN FOR DOCUMENT Date*/
		var cellRight = row.insertCell(3);
		cellRight.innerHTML = docDateValue;
	}

	document.getElementById('documentTypeId').selectedIndex = 0;
	document.getElementById("documentNumberId").value = "";
	document.getElementById("documentDateId").value = "";

}



function isValidArea(elementId) {

	var entredNumber = document.getElementById(elementId).value;
	var decimalRegex = /^1000([.][0]{1,3})?$|^\d{1,3}$|^\d{1,3}([.]\d{1,3})$|^([.]\d{1,3})$/;
	document.getElementById(elementId).className = "input_w1 bgfieldcolor";
	if (decimalRegex.test(entredNumber)) {
		return true;
	} else {
		document.getElementById(elementId).className = "input_w1 heighfield";
		document.getElementById(elementId).focus();
		alert("कृपया सही दशमलव अंक दर्ज करें(दशमलव के बाद केवल तीन अंक) |");
		return false;
	}
}

function isValidShare(elementId) {

	var share = document.getElementById(elementId).value;
	document.getElementById(elementId).className = "input_w1 bgfieldcolor";
	if (!share.contains('/') && share != '1') {
		document.getElementById(elementId).className = "input_w1 heighfield";
		document.getElementById(elementId).focus();
		alert('कृपया सही हिस्सा भरें |');
		return false;
	}

}

function giveOrderDtl(count, inservalue) {

	var treeCountHid1 = document.getElementById('treeCountHid' + count).value;

	// alert(inservalue+"----gfg-->>"+treeCountHid1);

	if (treeCountHid1.trim() == inservalue.trim()) {

		document.getElementById('orderRemarks' + count).disabled = true;

		// document.getElementById('treeCount'+count).value = treeCountHid1;

		// alert("------>>"+2);
	} else {
		document.getElementById('orderRemarks' + count).disabled = false;

		// document.getElementById('treeCount'+count).value = inservalue;

		// alert("------>>"+1);
	}

	// alert("----435435435435435-->>"+document.getElementById('treeCount'+count).value);

}

function divertKhasraDetails() {

	var requestId = document.getElementById('requestId').value;
	var khasraId = document.getElementById('khasraId').value;
	var diversionDtl = "";
	$('#dataTable tr').not(':first').each(
			function() {
				khasraNo = $(this).find('td:eq(0) input').val();
				subKhasra1 = $(this).find('td:eq(1) input').val();
				subKhasra2 = $(this).find('td:eq(2) input').val();
				subKhasra3 = $(this).find('td:eq(3) input').val();
				divType = $(this).find('td:eq(4) input').val();
				khasraArea = $(this).find('td:eq(5) input').val();
				/*
				 * divType = $(this).find('td:eq(6) input').val();
				 * alert("divType---"+divType);
				 */
				var divTypeId = '';
				if (divType == '') {
					divTypeId = 0;
				} else {
					divTypeId = divType;
				}

				if (diversionDtl == "") {
					diversionDtl = khasraArea + "@" + khasraNo + "@"
							+ subKhasra1 + "@" + subKhasra2 + "@" + subKhasra3
							+ "@" + divTypeId + "#";
				} else {
					diversionDtl = diversionDtl + khasraArea + "@" + khasraNo
							+ "@" + subKhasra1 + "@" + subKhasra2 + "@"
							+ subKhasra3 + "@" + divTypeId + "#";
				}

				/*
				 * +"@" +requestId+"@"+khasraId;
				 */

			});

	/*
	 * //Added by Prachi for MapEditing in Diversion
	 * document.getElementById("mapButton").disabled = false;
	 */

	loadContent('saveDivertedKhasraDetails.do', 'diversionDtl=' + diversionDtl
			+ '&requestId=' + requestId + '&khasraId=' + khasraId);

	return true;

}

function saveIrriInfo2wip() {

	if (saveIrriInfo('sChk'))

	{
		callfnValidateMessage(document.getElementById('messageOne').value);
	}

}

function IsValid(value, field) {

	var split = value.split('.');

	if (split.length != 2) {

		return false;
	} else if (split[1].length > 2 || !Number(split[1])) {
		alert("डेटा दशमलव बिंदु के बाद दो स्थान होगा |");
		document.getElementById(field).value = "";
		return false;
	} else if (!(split[0] == '' || split[0] == '0')) {

		return false;
	}

	return true;
}

function loadDataNewDiverted(url, id, chakri, params) {
	// alert("div:" + div);
	// alert("url:" + url);
	// alert("params:" + params);
	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {

		/*
		 * if(xml.readyState==1) {
		 */
		if (!chakri == "") {
			loader(chakri);
		}
		// }
		// alert("xml.readyState:" + xml.readyState);

		if (xml.readyState == 4) {
			// alert("1:"+xml.status);
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {
				// alert("2");
				// alert("xml.responseText:" + xml.responseText);

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					document.getElementById(id).value = xml.responseText;
				} else {
					top.location.href = 'SessionExpired.do';
				}

				// document.getElementById(div).innerHTML = xml.responseText;

			} else {
				// alert("3");
				alert("An error has occured making the request");
			}

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}
	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

function bulkDemandNoteFinalApproval() {

	var khasraIds = document.getElementById("khasraIds").value;
	var transId = document.getElementById("transactionId").value;
	loadDataNewDiverted('bulkDemandNoteFinalApproval.do', 'result',
			'viewKhasraChakeri', 'khasraIds=' + khasraIds + '&transactionId='
					+ transId);

	if (document.getElementById("result").value == "1") {
		alert(" डिमांड नोट सफलतापूर्वक अनुमोदित किए जा चुके हैं |");
	} else {
		alert(" डिमांड नोट अनुमोदित करने में असफल हैं |");
	}

}
function savePymentCollection() {
	// alert("11111111111111111111111"+document.paymentEntry.pageType.value);
	if (validatePayment()) 
	{
                 document.paymentEntry.action = 'savePaymentCollection.do?ownerName='
				+ document.paymentEntry.ownerName.value + '&serviceName='
				+ document.paymentEntry.serviceName.value + '&balance='
				+ document.paymentEntry.balance.value + '&fee='
				+ document.paymentEntry.fee.value + '&deposit='
				+ document.paymentEntry.deposit.value + '&requestId='
				+ document.paymentEntry.requestId.value + '&location='
				+ document.paymentEntry.location.value + '&transactionId='
				+ document.paymentEntry.transactionId.value + '&pageType='
				+ document.paymentEntry.pageType.value;

		document.paymentEntry.submit();

		closeWindow();
	}

}
function openNewWindowForPayCollection(url) {
	// alert("URL:"+url)

	var totalAmt = document.getElementById("totalAmt").value;
	// var totalAmt ="9.00";
	// alert("totalAmt:"+totalAmt)

	if (totalAmt > 0) {
		popupWin = window
				.open(
						url,
						'open_window',
						'toolbar=0,titlebar=0,scrollbars=yes,location=0,statusbar=0,menubar=0, dependent, width=1200, height=700');

		/*
		 * window.open(lnk,'','fullscreen=1,scrollbars=1,resizable=1,width=800,height=600,left =
		 * 82,top = 54','');
		 */
	}

}
function finalPaymentCollection() {

	openNewWindowForPayCollection('paymentEntryCollection.do?clrId='
			+ document.getElementById('clrId').value + '&amount='
			+ document.getElementById('totalAmt').value);

}
function batwaraValidation(url) {

	var nextActivityId = document.getElementById("nextActivityId").value;
	var remarks = document.getElementById("remarks").value;
	var requestId = document.getElementById("requestId").value;
	var mutTypeId = document.getElementById("mutTypeId").value;
	var transactionId = document.getElementById("transactionId").value;
	var currentActivity = document.getElementById("currentActivity").value;
	var statusId = document.getElementById("statusId").value;
	var actionType = document.getElementById("actionType").value;
	var currentStatus = document.getElementById("currentStatus").value;

	var param = "";

	if (remarks == "") {
		document.getElementById("remarks").className = "heighfield";
		document.getElementById("nextActivityId").className = "select_w1 bgfieldcolor";
		alert('कृपया टिप्पणी भरे |');
		return false;
	} else if (nextActivityId == 0) {
		document.getElementById("remarks").className = "bgfieldcolor";
		document.getElementById("nextActivityId").className = "select_w1 heighfield";

		alert('कृपया कार्यवाही चयन करें |');
		return false;
	} else {

		param = 'requestId=' + requestId + "&nextActivityId=" + nextActivityId
				+ "&remarks=" + remarks + "&mutTypeId=" + mutTypeId
				+ "&transactionId=" + transactionId + "&currentActivity="
				+ currentActivity + "&statusId=" + statusId + "&actionType="
				+ actionType + "&currentStatus=" + currentStatus;

		var mypostrequest = new ajaxRequest();
		mypostrequest.onreadystatechange = function() {
			if (mypostrequest.readyState == 4) {
				if (mypostrequest.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {

						if (mypostrequest.responseText == "OK") {
							alert("आप का  आवेदन भेज दिया ग़या |");
							// loadContent('getMutationRequestsList.do', param)

							document.batwaraOwnerListForm.statusId.value = statusId;
							document.batwaraOwnerListForm.currentStatus.value = statusId;
							document.batwaraOwnerListForm.action = 'getMutationRequestsList.do?'
									+ param;
							document.batwaraOwnerListForm.submit();

						}

						else {
							alert(mypostrequest.responseText);
						}
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById("container").innerHTML =
					// mypostrequest.responseText;
				} else {
					alert("An error has occured making the request");
				}
			}
		};
		mypostrequest.open("POST", url, false);
		mypostrequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		mypostrequest.send(param);

	}
}
function PendingKhasraCollection() {
	document.khasraCollectionform.action = 'khasraSearchCollection.do';
	document.khasraCollectionform.submit();

}

function mutationValidation(urlFirst, urlSecond) {

	var nextActivityId = document.getElementById("nextActivityId").value;
	var remarks = document.getElementById("remarks").value;
	var requestId = document.getElementById("requestId").value;
	var mutTypeId = document.getElementById("mutTypeId").value;
	var transactionId = document.getElementById("transactionId").value;
	var currentActivity = document.getElementById("currentActivity").value;
	var statusId = document.getElementById("statusId").value;
	var actionType = document.getElementById("actionType").value;
	var currentStatus = document.getElementById("currentStatus").value;

	var param = "";

	if (remarks == "") {
		document.getElementById("remarks").className = "heighfield";
		document.getElementById("nextActivityId").className = "select_w1 bgfieldcolor";
		alert('कृपया टिप्पणी भरे |');
		return false;
	} else if (nextActivityId == 0) {
		document.getElementById("remarks").className = "bgfieldcolor";
		document.getElementById("nextActivityId").className = "select_w1 heighfield";

		alert('कृपया कार्यवाही चयन करें |');
		return false;
	} else {

		param = 'requestId=' + requestId + "&nextActivityId=" + nextActivityId
				+ "&remarks=" + remarks + "&mutTypeId=" + mutTypeId
				+ "&transactionId=" + transactionId + "&currentActivity="
				+ currentActivity + "&statusId=" + statusId + "&actionType="
				+ actionType + "&currentStatus=" + currentStatus;

		var mypostrequest = new ajaxRequest();
		mypostrequest.onreadystatechange = function() {
			if (mypostrequest.readyState == 4) {
				if (mypostrequest.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {

						if (mypostrequest.responseText == "OK") {

							document.khasraOwnerLinkingForm.statusId.value = statusId;
							document.khasraOwnerLinkingForm.currentStatus.value = statusId;
							document.khasraOwnerLinkingForm.action = urlSecond
									+ '?' + param;
							document.khasraOwnerLinkingForm.submit();

						}

						else {
							alert(mypostrequest.responseText);
						}
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById("container").innerHTML =
					// mypostrequest.responseText;
				} else {
					alert("An error has occured making the request");
				}
			}
		};
		mypostrequest.open("POST", urlFirst, false);
		mypostrequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		mypostrequest.send(param);

	}
}

function isAllKhasraDiverted(reqId) {
	var responseVal = "";
	try {
		var xml = new ajaxRequest();
		xml.onreadystatechange = function() {

			if (xml.readyState == 4) {
				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
						responseVal = xml.responseText;
					} else {
						top.location.href = 'SessionExpired.do';
					}

				} else {
					alert("An error has occured making the request");
				}

			}
		};

		var params = 'requestId=' + reqId;
		var url = 'checkAllKhasraDiverted.do';

		xml.open("POST", url, false);
		xml.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xml.send(params);
	} catch (e) {
		alert(e);
	}

	if (responseVal == "N") {

		alert("आप का खसरा पूरा डाइवर्ट नहीं हुआ है|");
		return false;
	} else {
		return true;
	}

}

function AreaValidation(evt) {

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 45 || charCode > 57 || charCode == 47)) {
		return false;
	}
	return true;
}

function saveOwnerShare() {
	var checkbx = document.getElementsByName("chbSeller");

	var ownerShare = "";
	var ownerId = "";
	var bhookhandId = "";
	var buyerShare = "";
	var requestId = "";
	var shareArea = "";
	for ( var i = 0; i < checkbx.length; i++) {
		if (checkbx[i].checked) {
			ownerShare = document.getElementById("ownerShare_" + i).value;
			ownerId = document.getElementById("ownerId_" + i).value;
			bhookhandId = document.getElementById("bhookhandId_" + i).value;
			requestId = document.getElementById("requestId").value;
			shareArea = document.getElementById("shareArea_" + i).value;

			if (checkforvalue(ownerShare) == false) {
				document.getElementById('ownerShare_' + i).className = "input_w heighfield";
				document.getElementById('ownerShare_' + i).focus();
				return false;
			}
			if (shareArea == "") {
				document.getElementById('shareArea_' + i).className = "input_w heighfield";
				document.getElementById('shareArea_' + i).focus();
				alert("वास्तविक क्षेत्रफल रिक्त नहीं छोड़ जा सकता हैं");
				return false;
			} else {
				buyerShare += requestId + "@" + ownerId + "@" + bhookhandId
						+ "@" + ownerShare + "@" + shareArea + "#";

			}

		}
	}

	if (buyerShare == "") {
		alert('कृपया भूखंड का चयन करे |');
		return false;
	}

	else {
		var mypostrequest = new ajaxRequest();
		mypostrequest.onreadystatechange = function() {
			if (mypostrequest.readyState == 4) {
				if (mypostrequest.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {
						alert(mypostrequest.responseText);
					} else {
						top.location.href = 'SessionExpired.do';
					}

				} else {
					alert("An error has occured making the request");
				}
			}
		};
		mypostrequest.open("POST", "saveOwnerShare.do", false);
		mypostrequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		mypostrequest.send("buyerShareInfo=" + buyerShare);
	}

}

function validateCaseSensitiveEmail(id) {
	var email = document.getElementById(id).value;

	// alert(email);

	if (email.length != 0) {
		var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

		if (reg.test(email)) {
			return true;
		} else {

			alert("कृपया वैध ईमेल आईडी दर्ज करें |");
			return false;
		}
	} else {

		// alert('Please Enter Valid Email Address');
		alert("कृपया वैध ईमेल आईडी दर्ज करें |");
		return false;
	}
}

function validateCaseSensitivePan(id) {
	var pan = document.getElementById(id).value;
	if (pan.length != 0) {
		var reg = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;

		if (reg.test(pan)) {
			return true;
		} else {

			alert("कृपया वैध पैनकार्ड आईडी दर्ज करें | ");
			return false;
		}
	} else {

		// alert('Please Enter Valid Email Address');
		alert("कृपया वैध पैनकार्ड आईडी दर्ज करें |");
		return false;
	}
}

function validateCaseSensitivePassport(id) {
	var passport = document.getElementById(id).value;

	// alert(passport);
	if (passport.length != 0) {
		var reg = /^([a-zA-Z]{1})(\d{7})$/;

		if (reg.test(passport)) {
			return true;
		} else {

			alert("कृपया वैध पासपोर्ट आईडी दर्ज करें | ");
			return false;
		}
	} else {

		// alert('Please Enter Valid Email Address');
		alert("कृपया वैध पासपोर्ट आईडी दर्ज करें |");
		return false;
	}
}

function validateIrriType(event) {

	// alert(field);

	// alert(document.getElementById("txtSinchitTypeId").value);

	var id = document.getElementById("txtSinchitTypeId").value;
	// alert($("#sinchitTypeDivId").text());

	var field = $("#sinchitTypeDivId").text();

	if (field.trim() == 'असिंचित') {
		$("#sinchitArea").val("");

		alert("खसरा को असिंचित से सिंचित करने के लिए कॉलम - 12 के सिंचित/असिंचित विवरण को पहले अद्यतन करें |");
		// $("#sinchitArea").attr('disabled', true);

		// alert(id);

		return false;

	} else {

		return isNumber(event);

	}

}

function loadDataForDiv(url, div, chakri, params) {
	var xml = new ajaxRequest();

	xml.onreadystatechange = function() {

		if (!chakri == "") {
			loader(chakri);
		}

		if (xml.readyState == 4) {
			if (xml.status == 200 || window.location.href.indexOf("http") == -1) {

				if ((xml.responseText).indexOf("MPWEBGIS login") == -1) {
					$("#divertKhasraId").show();
					document.getElementById(div).innerHTML = xml.responseText;

				} else {
					top.location.href = 'SessionExpired.do';
				}

			} else {
				alert("An error has occured making the request");
			}

			if (!chakri == "") {
				remove_popup(chakri);
			}
		}
	};

	xml.open("POST", url, false);
	xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xml.send(params);

}

function userAddTaxLoanSubmitAddNext() {
	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	subsidyAmount = $("#subsidyAmount").val();

	if (bankId == 0 && (subsidyAmount == null || subsidyAmount == "")) {

		loadContent('irrigated.do', 'null', 'khraLnEdt');
	} else {
		if (userAddTaxLoanSubmitAdd('sChk')) {
			loadContent('irrigated.do', 'null', 'khraLnEdt');
			// callfnValidateMessage(document.getElementById('messageOne').value);
		}
	}

}
// userAddTaxLoanSubmitAdd('sChk');

function editAvedakForDivMut(action, div, chkri) {

	var radios = document.getElementsByName("rdbtn");
	var checked = false;
	if (action == "cancel") {
		document.getElementById(div).style.display = "none";
	} else {

		document.getElementById(div).style.display = "block";
		if (isNaN(radios.length)) {
			if (radios.checked) {
				checked = true;
			}
		} else {
			for ( var i = 0; i < radios.length; i++) {
				if (radios[i].checked) {
					checked = true;
					break;
				}
			}
		}
		if (checked) {

			var radioBtnval = $("input:radio[name='rdbtn']:checked").val();
			radioBtnval = 'rdbtn=' + radioBtnval;
			loadDataNew(action, div, chkri, radioBtnval);
		} else {
			alert("कृप्या चेक बॉक्स का चयन करे  |");
			return false;
		}
	}
}

function divBatwaraValidation(url) {

	var nextActivityId = document.getElementById("nextActivityId").value;
	var remarks = document.getElementById("remarks").value;
	var requestId = document.getElementById("requestId").value;
	var mutTypeId = document.getElementById("mutTypeId").value;
	var transactionId = document.getElementById("transactionId").value;
	var currentActivity = document.getElementById("currentActivity").value;
	var statusId = document.getElementById("statusId").value;
	var actionType = document.getElementById("actionType").value;
	var currentStatus = document.getElementById("currentStatus").value;

	var param = "";

	if (remarks == "") {
		document.getElementById("remarks").className = "heighfield";
		document.getElementById("nextActivityId").className = "select_w1 bgfieldcolor";
		alert('कृपया टिप्पणी भरे |');
		return false;
	} else if (nextActivityId == 0) {
		document.getElementById("remarks").className = "bgfieldcolor";
		document.getElementById("nextActivityId").className = "select_w1 heighfield";

		alert('कृपया कार्यवाही चयन करें |');
		return false;
	} else {

		param = 'requestId=' + requestId + "&nextActivityId=" + nextActivityId
				+ "&remarks=" + remarks + "&mutTypeId=" + mutTypeId
				+ "&transactionId=" + transactionId + "&currentActivity="
				+ currentActivity + "&statusId=" + statusId + "&actionType="
				+ actionType + "&currentStatus=" + currentStatus;

		var mypostrequest = new ajaxRequest();
		mypostrequest.onreadystatechange = function() {
			if (mypostrequest.readyState == 4) {
				if (mypostrequest.status == 200
						|| window.location.href.indexOf("http") == -1) {

					if ((mypostrequest.responseText).indexOf("MPWEBGIS login") == -1) {

						if (mypostrequest.responseText == "OK") {
							alert("आप का  आवेदन भेज दिया ग़या |");
							// loadContent('getMutationRequestsList.do', param)

							document.divBatwraOwnerLinkingForm.statusId.value = statusId;
							document.divBatwraOwnerLinkingForm.currentStatus.value = statusId;
							document.divBatwraOwnerLinkingForm.action = 'getDivertedMutBatReqList.do?'
									+ param;
							document.divBatwraOwnerLinkingForm.submit();

						}

						else {
							alert(mypostrequest.responseText);
						}
					} else {
						top.location.href = 'SessionExpired.do';
					}

					// document.getElementById("container").innerHTML =
					// mypostrequest.responseText;
				} else {
					alert("An error has occured making the request");
				}
			}
		};
		mypostrequest.open("POST", url, false);
		mypostrequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		mypostrequest.send(param);

	}
}

function loanDivMutation(requestId, khasraId, action) {
	var e = document.getElementById("bankId");
	var bankId = e.options[e.selectedIndex].value;
	if (bankId == 0) {
		alert("कृप्या बैंक का चयन करें |");
		return false;
	}

	var bankAddress = document.taxLoanform.bankAddress.value;
	if (bankAddress == null || bankAddress == "") {
		alert("कृप्या बैंक का पता  दर्ज करें |");
		return false;
	}

	var loanAmount = document.taxLoanform.loanAmount.value;
	if (loanAmount == null || loanAmount == "") {
		alert("कृप्या ऋण की राशि  दर्ज करें |");
		return false;
	}

	var loanDate = document.taxLoanform.loanDate.value;
	var loanPayDate = document.taxLoanform.loanPayDate.value;
	var today = document.taxLoanform.todayDate.value;
	var date=new Date();
	//alert("today==="+today);
	//alert("date==="+date);
	var lDate=loanDate.split("/");
	var lPayDate=loanPayDate.split("/");
	var date_to_dob = new Date(lDate[1].trim()+'/'+lDate[0].trim()+'/'+lDate[2].trim());
	var date_to_authd = new Date(lPayDate[1].trim()+'/'+lPayDate[0].trim()+'/'+lPayDate[2].trim());
	var beforeDate = today - date_to_dob.getTime();
	var afterDate = today - date_to_authd.getTime();

	if (loanDate == null || loanDate == "") {
		alert("कृप्या ऋण तारीख दर्ज करें |");
		return false;
	}

	if (beforeDate <= 0) {
		alert("कृप्या ऋण तारीख आज की तारीख से कम  होना चाहिए |");
		return false;
	}

	if (loanPayDate == null || loanPayDate == "") {
		alert("ऋण भुगतान तारीख दर्ज करें ");
		return false;
	}

	if (afterDate>= 0) {
		alert("कृप्या ऋण भुगतान की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var officerName = document.taxLoanform.officerName.value;
	if (officerName == null || officerName == "") {
		alert("कृप्या अधिकारी का नाम दर्ज करें |");
		return false;
	}

	var officerDesignation = document.taxLoanform.officerDesignation.value;
	if (officerDesignation == null || officerDesignation == "") {
		alert("कृप्या अधिकारी पद दर्ज करें |");
		return false;
	}
	var loanOrderNo = document.taxLoanform.loanOrderNo.value;
	if (loanOrderNo == null || loanOrderNo == "") {
		alert("कृप्या ऋण क्रम संख्या दर्ज करें |");
		return false;
	}
	
	var loanOrderDate = document.taxLoanform.loanOrderDate.value;
	var lOrderDate=loanOrderDate.split("/");	
	var date_to_order = new Date(lOrderDate[1].trim()+'/'+lOrderDate[0].trim()+'/'+lOrderDate[2].trim());
	var closeDate = today - date_to_order.getTime();
	if (loanOrderDate == null || loanOrderDate == "") {
		alert("कृप्या ऋण   बंद दिनांक  दर्ज करें |");
		return false;
	}
	if (closeDate>= 0) {
		alert("कृप्या ऋण  बंद  की तारीख आज की तारीख से अधिक  होना चाहिए |");
		return false;
	}

	var loanAccountNo = document.taxLoanform.loanAccountNo.value;
	if (loanAccountNo == null || loanAccountNo == "") {
		alert(" कृप्या ऋण खाता संख्या दर्ज करें |");
		return false;
	}
	var remark = document.taxLoanform.remark.value;
	if (remark == null || remark == "") {
		alert("कृप्या ऋण टिप्पणी दर्ज करें |");
		return false;
	}
	// var type = "add";
	/*
	 * loadContent('updateLoanInformation.do', '&requestId=' + requestId +
	 * '&khasraId=' + khasraId + '&type=' + type + '&bankId=' + bankId +
	 * '&bankAddress=' + bankAddress + '&loanAmount=' + loanAmount +
	 * '&loanDate=' + loanDate + '&loanPayDate=' + loanPayDate + '&officerName=' +
	 * officerName + '&officerDesignation=' + officerDesignation +
	 * '&loanOrderNo=' + loanOrderNo + '&loanOrderDate=' + loanOrderDate +
	 * '&loanAccountNo=' + loanAccountNo + '&remark=' + remark);
	 */
	document.taxLoanform.action = 'saveOrUpdateLoanForDivMut.do?requestId='
			+ requestId + '&khasraId=' + khasraId + '&type=' + action
			+ '&bankId=' + bankId + '&bankAddress=' + bankAddress
			+ '&loanAmount=' + loanAmount + '&loanDate=' + loanDate
			+ '&loanPayDate=' + loanPayDate + '&officerName=' + officerName
			+ '&officerDesignation=' + officerDesignation + '&loanOrderNo='
			+ loanOrderNo + '&loanOrderDate=' + loanOrderDate
			+ '&loanAccountNo=' + loanAccountNo + '&remark=' + remark;

	document.taxLoanform.submit();

}

function loanAddModifyDivMutation(requestId, bhookhandId) {

	inputOne = document.getElementById("searchRecord");
	inputSubmit = document.getElementById("finalSubmit");
	inputSubmitOne = document.getElementById("finalSubmitOne");
	var isSelected = false;
	for ( var i = 0; i < document.taxLoanform.elements.length; i++) {
		if (document.taxLoanform.elements[i].type == "radio") {
			if (document.taxLoanform.elements[i].checked)
				isSelected = true;
		}
	}
	if (!isSelected) {
		alert("संशोधन के लिए कम से कम एक रिकॉर्ड का चयन करें |");
		return false;
		if (inputOne.value == "") {
			inputSubmit.style.display = "none";
			inputSubmitOne.style.display = "none";
		}

		
	} else {

		var val = $("input:radio[name='radioid']:checked").val();
		document.taxLoanform.action = "viewLoanInformationDetailsForDivMut.do?requestId="
				+ requestId
				+ "&khasraId="
				+ bhookhandId
				+ "&sequenceNo1="
				+ val;
		document.taxLoanform.submit();
		// javascript:loadContent('viewLoanInformationDetails.do', '&requestId='
		// +requestId+ '&khasraId=' + khasraId + '&sequenceNo1=' + val);
		// return true;

	}
}

function resetFieldForAdmin(comboIndex,tabIndex){
	
	if (comboIndex == 1) {
		
		if(tabIndex == 1){
			document.getElementById("tehsilId").value = 0;
			document.getElementById("riId").length = 1;
			document.getElementById("halkaId").length = 1;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			document.getElementById("khasraId1").length = 1;
			
		}
		

	}
	// For Tahsil
	if (comboIndex == 2) {
		
		if(tabIndex == 1){
			document.getElementById("riId").value = 0;
			document.getElementById("halkaId").length = 1;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			document.getElementById("khasraId1").length = 1;
		}
		
	

	}

	// For R.I Circle
	if (comboIndex == 3) {
		if(tabIndex == 1){
			document.getElementById("halkaId").value = 0;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			document.getElementById("khasraId1").length = 1;
		}
		
		

	}
	// For Patwari Halka
	if (comboIndex == 4) {
		if(tabIndex == 1){
			document.getElementById("villageId").value = 0;
			document.getElementById("khasraId").length = 1;
			document.getElementById("khasraId1").length = 1;
		}
		
		
	}

}
function selectChkbox() {
	if ($('#selectall').prop('checked') == true) {
		$('.checkbox1').each(function() { // loop through each checkbox
			this.checked = true; // select all checkboxes with class
									// "checkbox1"
		});
	} else {
		$('.checkbox1').each(function() { // loop through each checkbox
			this.checked = false; // deselect all checkboxes with class
									// "checkbox1"
		});
	}
}

function deselectCheckBox() {

	var khchkLen = document.mutationRequestform.khasraList.length;
	var khasraList = document.mutationRequestform.khasraList;
	var count = 0;
	for (i = 0; i < khasraList.length; i++) {
		if (khasraList[i].checked) {
			count++;

		}
	}

	if (count == khchkLen) {

		$('#selectallx').prop('checked', true);
	} else {
		$('#selectallx').prop('checked', false);
	}

	
	  /*if(document.getElementById('selectall').checked==true){
	  document.getElementById("selectall").checked = false; }
	 

	
	  if(document.getElementById('selectallx').checked==true){
	  document.getElementById("selectallx").checked = false; }*/
	

}

function populateSex(relationID) {
	if(relationID==0){
		document.getElementById('sexId').value=0;
	}else if(relationID==1 || relationID==3 || relationID==4){
		document.getElementById('sexId').value=1;
	}else if(relationID==2 || relationID==5 || relationID==6){
		document.getElementById('sexId').value=2;
	}


}

function changeDesignation(field) {
	loadDataNew('getdesigPerUserType.do', 'designation', 'desigChakeri',
			'userTypeId=' + document.userform.userTypeId.value);
	if (field == tableId) {
		var total = document.getElementsByName("checkboxid");
		for ( var i = 0; i < total.length - 1; i++) {
			if (total[i].checked == true) {

				var desId2 = total[i].value;
				document.getElementById(desId2).checked = false;

			}

		}
		document.getElementById("checkboxValue").value = '';
		$("#padnaam").hide();
		$("#tableId").hide();
	} else {
		$("#dis").hide();
	}

}

function chekBox1(field) {
	document.getElementById(field).checked = true;
}





function openKhasraHist(khasraId) {

	openNewWindow('getkhasraHistory.do?khasraId=' + khasraId);

}
function resetFieldForAdminRef(comboIndex,tabIndex,jspName){
	
	if (comboIndex == 1) {
		
		if(tabIndex == 1){
			document.getElementById("tehsilId").value = 0;
			document.getElementById("riId").length = 1;
			document.getElementById("halkaId").length = 1;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			if(jspName=='mapRectificationOrder'){
				document.getElementById("khasraId1").length = 1;	
			}
			
		}
		else if(tabIndex == 2) {
			document.getElementById("viSrcTehsilId").value = 0;
			document.getElementById("viSrcRiId").length = 1;
			document.getElementById("viSrcHalkaId").length = 1;
			document.getElementById("viSrcVillageId").length = 1;
			
		}
		else if(tabIndex == 3) {
			document.getElementById("hlSrcTehsilId").value = 0;
			document.getElementById("hlSrcRiId").length = 1;
			document.getElementById("hlSrcHalkaId").length = 1;
			
		}
		else if(tabIndex == 4) {
			
		}else if(tabIndex == 5) {
			
		}
		

	}
	// For Tahsil
	if (comboIndex == 2) {
		
		if(tabIndex == 1){
			document.getElementById("riId").value = 0;
			document.getElementById("halkaId").length = 1;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			if(jspName=='mapRectificationOrder'){
				document.getElementById("khasraId1").length = 1;	
			}
		}
		else if(tabIndex == 2) {
			
			document.getElementById("viSrcRiId").length = 1;
			document.getElementById("viSrcHalkaId").length = 1;
			document.getElementById("viSrcVillageId").length = 1;
		}
		else if(tabIndex == 3) {
			document.getElementById("hlSrcRiId").length = 1;
			document.getElementById("hlSrcHalkaId").length = 1;	
		}
		else if(tabIndex == 4) {
			
		}else if(tabIndex == 5) {
			
		}
	

	}

	// For R.I Circle
	if (comboIndex == 3) {
		if(tabIndex == 1){
			document.getElementById("halkaId").value = 0;
			document.getElementById("villageId").length = 1;
			document.getElementById("khasraId").length = 1;
			if(jspName=='mapRectificationOrder'){
				document.getElementById("khasraId1").length = 1;	
			}
		}
		else if(tabIndex == 2) {
			document.getElementById("viSrcHalkaId").length = 1;
			document.getElementById("viSrcVillageId").length = 1;
		}
		else if(tabIndex == 3) {
			document.getElementById("hlSrcHalkaId").length = 1;			
		}
		else if(tabIndex == 4) {
			
		}else if(tabIndex == 5) {
			
		}
		

	}
	// For Patwari Halka
	if (comboIndex == 4) {
		if(tabIndex == 1){
			document.getElementById("villageId").value = 0;
			document.getElementById("khasraId").length = 1;
			if(jspName=='mapRectificationOrder'){
				document.getElementById("khasraId1").length = 1;	
			}
		}
		else if(tabIndex == 2) {
			document.getElementById("viSrcVillageId").length = 1;
		}
		else if(tabIndex == 3) {
					
		}
		else if(tabIndex == 4) {
			
		}else if(tabIndex == 5) {
			
		}
		
	}

		if (comboIndex == 5) {
			if(tabIndex == 1){
				
				document.getElementById("khEdTehsilId").value = 0;
				document.getElementById("khEdRiId").length = 1;
				document.getElementById("khEdHalkaId").length = 1;
				document.getElementById("khEdVillageId").length = 1;
				document.getElementById("khEdKhasraId").length = 1;
				
			}
			else if(tabIndex == 2) {
				document.getElementById("viTgtTehsilId").value = 0;
				document.getElementById("viTgtRiId").length = 1;
				document.getElementById("viTgtHalkaId").length = 1;
				document.getElementById("viTgtVillageId").length = 1;
				
			}
			else if(tabIndex == 3) {
				document.getElementById("hlTgtTehsilId").value = 0;
				document.getElementById("hlTgtRiId").length = 1;
				document.getElementById("hlTgtHalkaId").length = 1;
				
					}
			else if(tabIndex == 4) {
				
			}else if(tabIndex == 5) {
				
			}
			

		}
		// For Tahsil
		if (comboIndex == 6) {
			if(tabIndex == 1){
				document.getElementById("khEdRiId").value = 0;
				document.getElementById("khEdHalkaId").length = 1;
				document.getElementById("khEdVillageId").length = 1;
				document.getElementById("khEdKhasraId").length = 1;
			}
			else if(tabIndex == 2) {
				document.getElementById("viTgtRiId").length = 1;
				document.getElementById("viTgtHalkaId").length = 1;
				document.getElementById("viTgtVillageId").length = 1;
			}
			else if(tabIndex == 3) {
				document.getElementById("hlTgtRiId").length = 1;
				document.getElementById("hlTgtHalkaId").length = 1;		
			}
			else if(tabIndex == 4) {
				
			}else if(tabIndex == 5) {
				
			}
			

		}
		// For R.I Circle
		if (comboIndex == 7) {
			if(tabIndex == 1){
				document.getElementById("khEdHalkaId").value = 0;
				document.getElementById("khEdVillageId").length = 1;
				document.getElementById("khEdKhasraId").length = 1;
			}
			else if(tabIndex == 2) {
				document.getElementById("viTgtHalkaId").length = 1;
				document.getElementById("viTgtVillageId").length = 1;
			}
			else if(tabIndex == 3) {
				document.getElementById("hlTgtHalkaId").length = 1;		
			}
			else if(tabIndex == 4) {
				
			}else if(tabIndex == 5) {
				
			}
			

		}
		// For Patwari Halka
		if (comboIndex == 8) {
			if(tabIndex == 1){
				document.getElementById("khEdVillageId").value = 0;
				document.getElementById("khEdKhasraId").length = 1;
			}
			else if(tabIndex == 2) {
				document.getElementById("viTgtVillageId").length = 1;
			}
			else if(tabIndex == 3) {
						
					}
			else if(tabIndex == 4) {
				
			}else if(tabIndex == 5) {
				
			}
			
		}

	
}

function clearWithReset()
{
    document.getElementById("fileList[0]").value="";
    document.getElementById("requestModeId").value="";
    document.getElementById("grievanceRequesterId").value="";
    document.getElementById("mobileId").value="";
    document.getElementById("address_txtArea").value="";
    document.getElementById("mailId").value="";
    document.getElementById("departmentId").length=1;
    document.getElementById("transactionId").length=1;
    document.getElementById("districtId").length=1;
    document.getElementById("tehsilId").length=1;
    document.getElementById("riId").length=1;
    document.getElementById("halkaId").length=1;
    document.getElementById("villageId").length=1;
    document.getElementById("khasraId").length=1;
    document.getElementById("userId").length=1;
    document.getElementById("requestDesciption_txtArea").value="";
   
}






/*********************bhamashah common.js*****************************************/



/*$.getScript("Verhoeff.js");*/

function vhCheck(val)
 {
 var strVal = val;
 if (strVal.length < 12) // Minimum length.
 return false;
 return strVal.verhoeffCheck();
 };
 
function ConfirmForDeletion() {
	if (confirm("Are you sure you want to delete this record!")) {
		document.getElementById("delConfirm").value = "true";
		return true;
	} else
		document.getElementById("delConfirm").value = "false";
	return false;
}

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

function loadTbl(div) {
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


		alert("div:"+div+"url:"+url+"params:"+params);

		var xml = ajaxRequest();
		xml.onreadystatechange = function() {
             
			if (xml.readyState == 4 || xml.readyState == "complete") {

				if (xml.status == 200
						|| window.location.href.indexOf("http") == -1) {
					// alert("xml.responseText:" + xml.responseText);

					document.getElementById('tbl2').innerHTML = xml.responseText;

				} else {
					alert("Please try again");
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
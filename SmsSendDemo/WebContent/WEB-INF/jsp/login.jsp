<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%-- <%@ include file="/WEB-INF/jsp/fetchrecord.jsp"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Registration Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.js"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all">
</head>
<script type="text/javascript">
</script>
<body>
	<form name="insert1" id="insert1" modelAttribute="registration">
		<div class="row top10">
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="userName">FirstName:</label>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<input name="userName" class="form-control" id="userName"
					maxlength="14" type="text" autocomplete="off" /><span
					class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<label for="passWord">PassWord:</label>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<input name="passWord" class="form-control" id="passWord"
					maxlength="14" type="text" autocomplete="off" /> <span
					class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="email">Email:</label> <span class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<input name="email" class="form-control" id="email" maxlength="14"
					type="text" autocomplete="off" value="" />
			</div>
		</div>
		<br></br>
		<div class="row top10">
			<div class="col-md-4 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="birthDate">Birthday:</label> <span class="required"></span>
			</div>
			<div class="col-md-4 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<input name="birthDate" class="form-control" id="birthDate"
					maxlength="14" type="text" autocomplete="off" value="" />
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="country">Country:</label> <span class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<select name="country" id="country" class="form-control">
					<option value="0" selected>Please Select</option>
					<c:forEach var="listItems" items='${map.listofCountry}'>
						<option value="${listItems.id}">${listItems.countryname}</option>
						<%--  <option value="${listItems[0]}">${listItems[1]}</option> --%>
					</c:forEach>
				</select>
			</div>
		</div>
		<div class="btn-group" class="row top10" >
          <button type="button"  name="insert" onclick="submitAllRecord()" class="btn btn-primary" >Sumit</button>
        
          <button type="button"  name="fetch" onclick ="fetchAllRecord()" class="btn btn-primary">Fetch</button>
       </div>
	</form>
	 
</body>
<script>
	

function fetchAllRecord(){
	alert("hello")
	document.insert1.action="FetchUser";
	document.insert1.submit();
}
	function submitAllRecord(){
		debugger;
		var userName =  document.getElementById("userName").value;
		var passWord =  document.getElementById("passWord").value;
		var email =  document.getElementById("email").value;
		var birthDate =  document.getElementById("birthDate").value;
		var country =  document.getElementById("country").value; 
		 document.insert1.action="InsertUser";
		 document.insert1.submit();
	}
	</script>

</html>
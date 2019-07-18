<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Fetch Records</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.js"></script>
</head>
<script>
/* function fetchAllRecord(){
	debugger;
	documnet.saveform.action="FetchUser";
	documnet.saveform.submit();
} */
</script>
<body>
        <div align="center">
            <table>
              <div class="row top10">
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="userName">FirstName:</label>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<select name="userName" id="userName" class="form-control">
					<option value="0" selected>Please Select UserName</option>
					<c:forEach var="listItems" items='${map.listofrecords}'>
						<option value = "{listItems.userName}"></option>
					</c:forEach>
				</select>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<label for="passWord">PassWord:</label>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<<select name="passWord" id="passWord" class="form-control">
					<option value="0" selected>Please Select UserPassword</option>
					<c:forEach var="listItems" items='${map.listofrecords}'>
						<option value="${listItems.id}">${listItems.passWord}</option>
					</c:forEach>
				</select>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="email">Email:</label> <span class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<select name="email" id="email" class="form-control">
					<option value="0" selected>Please Select Email</option>
					<c:forEach var="listItems" items='${map.listofrecords}'>
						<option value="${listItems.email}"></option>
					</c:forEach>
				</select>
			</div>
		</div>
		<br></br>
		<div class="row top10">
			<div class="col-md-4 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="birthDate">Birthday:</label> <span class="required"></span>
			</div>
			<div class="col-md-4 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<select name="birthDate" id="birthDate" class="form-control">
					<option value="0" selected>Please Select Birthday</option>
					<c:forEach var="listItems" items='${map.listofrecords}'>
						<option value="${listItems.birthDate}"></option>
					</c:forEach>
				</select>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 align-right">
				<label for="country">Country:</label> <span class="required"></span>
			</div>
			<div class="col-md-2 col-xs-2 col-sm-2 col-lg-2 padding_left_0">
				<select name="country" id="country" class="form-control">
					<option value="0" selected>Please Select Country</option>
					<c:forEach var="listItems" items='${map.listofrecords}'>
						<option value="${listItems.countryname}"></option>
					</c:forEach>
				</select>
			</div>
		</div>
            </table>
        </div>
</body>
</html>

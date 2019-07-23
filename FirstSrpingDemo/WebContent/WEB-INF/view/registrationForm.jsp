<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Registration Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"
	media="all">
</head>
<!-- <script type="text/javascript">
$(document).ready(function(){
	  //alert("loading ssssssss");
	});
	</script> -->
<h2>Student Registration</h2>
<body>
	<form name="reg" method="post" align="center">
		<table>
			<tr>
				<td>FirstName:<input type="text" id="studentName" name="studentName"
					value=""></input></td>
			</tr>
			<tr>
				<td><lable>FathertNames:</lable><input type="text" id="fatherName" name="fatherName"
					value=""></input></td>
			</tr>
			<tr>
				<td>RollNum <input type="text" id="rollNum" name="rollNum@"
					value="sk"></input></td>
			</tr>
			<tr>
			<td>EmailId <input type="text" id="emailId"
				name="emailId" value=""></input></td>
			</tr>
			<tr>
			<td>DateOfBirthday <input type="text" id="dateOfBirth"
				name="dateOfBirth" value=""></input></td>
			</tr>
			<tr>
			<td>Course<input type="text" id="course" name="course"
				value=""></input></td>
			</tr>
			<tr>
				<td>Country:<select id="selectCourse" onchange="selectedCountry()">
						<option value="0">Select course</option>
						<option value="1">India</option>
						<option value="2" selected="selected">B.c.a</option>
						<option value="3" selected="selected">m.b.a</option>
				</select></td>
			</tr>
			<tr>
				<td>State:<select id="stateId" onchange="selectedCountry()">
						<option value="0">Please Select City</option>
						<option value="1">U.P</option>
						<option value="2" selected="selected">B.S.R</option>
						<option value="3" selected="selected">H.pur</option>
				</select></td>
			</tr>
			<tr>
				<td><label>Gender:</label><input type="radio" id="male" name="male" value=""></input>
					<input type="radio" id="female" name="female" value=""></input>
				</td>
			</tr>
			<tr>
				<td>Course :<input type="checkbox" id="course" name="course"
					value=""></td>
					</tr>
					<tr>
				<td><input type="button" id="loginbtn" onclick="loginUser();"
					value="Login"></input></td>
			</tr>
		</table>
	</form>
</body>
</html>

<script>
function loginUser(){
	alert("hi");
	
	var username=$("#studentName").val();
	var username1=$("#studentName").val();
	alert("check value=  "+username);
	
	$.ajax({
		url:'createUser',
		type:'post',
		data:{username:username,username1:username1},
		success:function(data){
			if(data=='ok'){
				alert("User Create Successfully")
			}
		}
		
	});
	
}
</script>

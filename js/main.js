function CheckEmail(str)
{
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function GoToEnroll()
{

	var obEmail = document.getElementById("email");
	if (!obEmail.value) {
		alert("이메일을 입력하세요!");
		obEmail.focus();	
		return;
	}
	else {
		if(!CheckEmail(obEmail.value))	{
			alert("이메일 형식이 잘못되었습니다");
			obEmail.focus();
			return;
		}
	}
}

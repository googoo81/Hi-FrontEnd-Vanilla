function CheckId(str)
{
    var reg_id = /^s([0-9a-zA-Z_\.-]+)0([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_id.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function GoToEnroll()
{

	var obId = document.getElementById("id");
	if (!obId.value) {
		alert("아이디을 입력해주십시오.");
		obId.focus();	
		return;
	}
	else {
		if(!CheckEmail(obId.value))	{
			alert("아이디 형식이 잘못되었습니다.");
			obId.focus();
			return;
		}
	}
}

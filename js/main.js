/* Id type */
function CheckId(str)
{
    var reg_id = /^s(1-9)(1-9)0(1-9)(1-9)/;
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


/*Id remember*/
$(document).ready(function(){
	// 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
	var key = getCookie("key");
	$("#id").val(key); 
	 
	// 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
	if($("#id").val() != ""){ 
		$("#checkId").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
	}
	 
	$("#checkId").change(function(){ // 체크박스에 변화가 있다면,
		if($("#checkId").is(":checked")){ // ID 저장하기 체크했을 때,
			setCookie("key", $("#id").val(), 7); // 7일 동안 쿠키 보관
		}else{ // ID 저장하기 체크 해제 시,
			deleteCookie("key");
		}
	});
	 
	// ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
	$("#id").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
		if($("#checkId").is(":checked")){ // ID 저장하기를 체크한 상태라면,
			setCookie("key", $("#id").val(), 7); // 7일 동안 쿠키 보관
		}
	});

// 쿠키 저장하기 
// setCookie => saveid함수에서 넘겨준 시간이 현재시간과 비교해서 쿠키를 생성하고 지워주는 역할
function setCookie(cookieName, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cookieValue = escape(value)
			+ ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
	document.cookie = cookieName + "=" + cookieValue;
}

// 쿠키 삭제
function deleteCookie(cookieName) {
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; expires="
			+ expireDate.toGMTString();
}
 
// 쿠키 가져오기
function getCookie(cookieName) {
	cookieName = cookieName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cookieName);
	var cookieValue = '';
	if (start != -1) { // 쿠키가 존재하면
		start += cookieName.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1) // 쿠키 값의 마지막 위치 인덱스 번호 설정 
			end = cookieData.length;
			console.log("end위치  : " + end);
		cookieValue = cookieData.substring(start, end);
	}
	return unescape(cookieValue);
}


/* Id type */
function CheckId(str)
{
	let reg_id = /[s][0-9][0-9][0][0-9][0-9]/;
    if(!reg_id.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function GoToEnroll()
{

	let obId = document.getElementById("id");
	if (!obId.value) {
		alert("아이디을 입력해주십시오.");
		obId.focus();
		return;
	}
	else {
		if(!CheckId(obId.value)){
			alert("아이디 형식이 잘못되었습니다.");
			obId.focus();
			return;
		}
	}
}


/* Password accord check */
let target = document.getElementById("pw");
let target2 = document.getElementById("pw2");

function check_pw(){
 
    let pw = document.getElementById('pw').value;
    let SC = ["!","@","#","$","%", "*"];
    let check_SC = 0;

    if(pw.length < 8 || pw.length > 16){
        window.alert('비밀번호는 8글자 이상, 16글자 이하만 이용 가능합니다.');
        document.getElementById('pw').value='';
    }
    for(var i=0;i<SC.length;i++){
        if(pw.indexOf(SC[i]) != -1){
            check_SC = 1;
        }
    }
    if(check_SC == 0){
        window.alert('!,@,#,$,%,*의 특수문자가 들어가 있지 않습니다.')
        document.getElementById('pw').value='';
    }
    if(document.getElementById('pw').value !='' && document.getElementById('pw2').value!=''){
        if(document.getElementById('pw').value==document.getElementById('pw2').value){
            target.style.borderBottom = "3px solid blue";
            target2.style.borderBottom = "3px solid blue";
            document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
            document.getElementById('check').style.color='blue';
        }
        else{
            target.style.borderBottom = "3px solid red";
            target2.style.borderBottom = "3px solid red";
            document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
            document.getElementById('check').style.color='red';
        }
    }
}


/* modal open */
const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
    document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);


/* modal number check */
const onChange = (event) => {
    console.log(event.target.value)
    if(event.target.value >= 0 && event.target.value <= 9) {
        event.target.style.border = "1px solid #FFDF9A"
        event.target.style.backgroundColor = "#fff"
        return true;
    }
    return false;
}

let num1 = document.querySelector(".num1").addEventListener("change", onChange);
let num2 = document.querySelector(".num2").addEventListener("change", onChange);
let num3 = document.querySelector(".num3").addEventListener("change", onChange);
let num4 = document.querySelector(".num4").addEventListener("change", onChange);

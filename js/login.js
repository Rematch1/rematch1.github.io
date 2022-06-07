function login_check(){
    var userId = document.getElementById("userId").value;
    var pwd = document.getElementById("pwd").value;
    if(userId == ""){
       alert("ID를 입력해주세요");
       return;
    }
    if(pwd == ""){
       alert("비밀번호를 입력해주세요");
       return;
    }
     if (userId=="worud1077" && pwd=="qwer1234!"){
        alert("    로그인 성공<br>김재경님 안녕하세요");
        window.close();
        return;
     }
    document.getElementById("check").innerText = "아이디 또는 비밀번호가 틀립니다.";
 }



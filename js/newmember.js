document.querySelector('#pwdCheck').onblur = isEqualPwd;

document.memberFrm.onsubmit = function () {
  const userId = document.getElementById("userId");
  const pwd = document.getElementById("pwd");
  const pwdCheck = document.getElementById("pwdCheck");
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");

 // 아이디
 const regExp1 = /^[a-z][a-z\d]{3,11}$/;
const regExp2 = /[0-9]/;
        if(!regExpTest(regExp1
                      ,userId
                      ,"아이디는 영소문자/숫자를 포함하여 4~12글자로 입력해주세요."))
            return false;
        if(!regExpTest(regExp2
                      ,userId
                      ,"아이디는 영소문자/숫자를 포함하여 4~12글자로 입력해주세요."))
            return false;

 // 비밀번호
 const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];

        for (let i = 0; i < regExpArr.length; i++) {
          if (
            !regExpTest(
              regExpArr[i],
              pwd,
              "비밀번호는 숫자/문자/특수문자를 포함하여 8~15자리로 입력해주세요."
            )
          ) {
            return false;
          }
        }

// 비밀번호 검사
if(!isEqualPwd()){
  return false;
}

// 이름
const regExp3 = /^[가-힣]{2,}$/;
        if (!regExpTest(regExp3, userName, "이름은 한글 2자이상으로 입력해주세요."))
          return false;

        if (
            !regExpTest(
              /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
              email,
              "이메일 형식에 어긋납니다."
            )
          )
            return false;
            else
            {
              alert("회원가입이 완료 되었습니다.");
              window.close();
              return
            }}


function isEqualPwd() {
if (pwd.value == pwdCheck.value) {
  return true;
        } else {
          alert("비밀번호가 일치하지 않습니다.");
          pwd.select();
          return false;
        }
      }

function regExpTest(regExp, el, msg) {
if(regExp.test(el.value)) return true;
alert(msg);
el.select();
return false;
};




class joinMember {
constructor (userId, pwd, userName, email){
  this.userId = userId;
  this.pwd = pwd;
  this.userName = userName;
  this.email = email;
  }
}

// storage에 저장
// 사용자입력값 -> Memberbook객체 -> 배열에 저장 -> json -> localstorage저장
const saveMember = () => {
const userIdVal = userId.value;
const pwdVal = pwd.value;
const userNameVal = userName.value;
const emailVal = email.value;

const JoinMember = new joinMember(userIdVal, pwdVal,userNameVal, emailVal);

const joinMembers = JSON.parse(localStorage.getItem('joinMembers')) || [];
joinMembers.push(JoinMember);

const data = JSON.stringify(joinMembers);
localStorage.setItem('joinMembers', data);
document.memberFrm.reset();
};

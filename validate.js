if (localStorage.getItem("isLogin") === 'true') {
  location.replace('main.html');
  var Backlen = history.length;
  history.go(-Backlen);
  window.location.href = "main.html";
}
var mail = document.getElementById("username");
var pass = document.getElementById("password");
function validate() {
  if ((mail.value == "admin") && (pass.value == 12345)) {
  
    success();

  } else {

    fail();
  }

}

function success() {
  console.log('SUCCESS');
  
  localStorage.setItem("isLogin", true);

}
function fail() {
  console.log('FAIL');
  localStorage.setItem("isLogin", false);
}

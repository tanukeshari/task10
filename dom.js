function submit(){
// retri
var uid=document.getElementById("username").value;


 var pw=document.getElementById("password").value;
 
 var email= document.getElementById("email").value;

//storing data

  var user = localStorage.setItem("uid", uid);
  var pass = localStorage.setItem("pw",pw);
  var em =   localStorage.setItem("email",email);
}
var btnSignUp=document.querySelector('.btnSignUp');
var btnSignIn=document.querySelector('.btnSignIn');
var signIn=document.querySelector('.signIn');
var signUp=document.querySelector('.signUp');

btnSignUp.addEventListener('click',()=>{
     signIn.classList.add('active-signIn');
    signUp.classList.add('active-signUp');
});
btnSignIn.addEventListener('click',()=>{
     signIn.classList.remove('active-signIn');
     signUp.classList.remove('active-signUp');
});

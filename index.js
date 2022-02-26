const form= document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");

form.addEventListener('student',e=>{
    e.preventListener();
    checkInput();
});

function checkInput(){
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();
    
    if (usernameValue === ''){
        setError(username,'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }
    if (emailValue === ''){
        setError(email,'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not valid Email');
    }
    else{
        setSuccess(email);
    }
    if (passwordValue === ''){
        setError(password,'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }
    if (password2Value === ''){
        setError(password2,'Password Cannot Be Blank');
    }
    else if(passwordValue !== password2Value){
        setError(password2,'Password Doesnot Match' );
    }
    else{
        setSuccess(password2);
    }
}
function setError(input, message){
    const formControl = input.parentElement;
const small = c1.querySelector('small');
c1.classname ='c1 error';
small.innerText = message;
}
function isEmail(email){

return/^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)|(".+"))@((\[[0-9]{1,3}\.[0-9]
{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+[a-zA-Z]{2,}))$/.test(email);
}
function setSuccess(){
const c1= input.parentElement;
c1.classname='c1 success';
}
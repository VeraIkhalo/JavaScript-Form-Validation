const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");

form.addEventListener("submit", (e) =>{
	   e.preventDefault();
	   checkInput();
});

function checkInput(){
	const userNameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordCheckValue = passwordCheck.value.trim();
	
	if(userNameValue ===""){
		setError(userName, "Username cannot be empty");
	}
	else{
		setSuccess(userName);
	}

	if(emailValue ===""){
		setError(email, "Email cannot be empty");
	}
	else if(!emailValid(emailValue)){
		setError(email, "Email is not valid");
	}
	else{
		setSuccess(email);
	}
	
	if(passwordValue ===""){
		setError(password, "Password cannot be empty");
	}
	
	else{
		setSuccess(password);
	}

if(passwordCheckValue ===""){
		setError(passwordCheck, "Password2 cannot be empty");
	}
	else if(passwordCheckValue !== passwordValue){
		setError(passwordCheck, "Password does not match");
	}
	
	else{
		setSuccess(passwordCheck);
	}

}


function setSuccess(input){
	const formControl =input.parentElement;
	formControl.className = "form-control success";
}

function setError(input, message){
	const formControl =input.parentElement;
	const small =formControl.querySelector("small");
	small.innerText =message;
	formControl.className = "form-control error";
}

function emailValid(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






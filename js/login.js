const loginForm = document.querySelector(".login"); 
const loginInput = loginForm.querySelector(".login_input"); 
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"; 

function onSubmit(event) { 
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username); 
} 

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if (savedUsername === null) {  
    loginForm.classList.remove(HIDDEN_CLASSNAME);  
    loginForm.addEventListener("submit", onSubmit);  
} else {  
    paintGreetings(savedUsername); 
} 
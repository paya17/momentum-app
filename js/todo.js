const toDoForm = document.querySelector(".todo");  
const toDoInput = document.querySelector(".todo_input");  
const toDoList = document.querySelector(".todo_list");  



const TODOS_KEY = "todos";  

let toDos = [];  


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
} 



function deleteToDo(event) {
    const li = event.target.parentElement;   
    li.remove();  

    toDos = toDos.filter((toDo) => toDo.class !== parseInt(li.class));  

    saveToDos();  
} 



function paintToDo(newTodo) {
    const li = document.createElement("li");  
    li.class = newTodo.class;   

    const span = document.createElement("span"); 
    span.innerText = newTodo.text;  

    const button = document.createElement("button");  
    button.innerText = "❌";  

    button.addEventListener("click", deleteToDo);  

    li.appendChild(span);  
    li.appendChild(button);  
    toDoList.appendChild(li);  
} 



function handleToDoSubmit(event) {  
    event.preventDefault();  

    const newTodo = toDoInput.value;  
    toDoInput.value = "";   
    const newTodoObj = {
        text: newTodo,
        class: Date.now(),
    };  

    toDos.push(newTodoObj);  

    paintToDo(newTodoObj);  

    saveToDos();  
}


toDoForm.addEventListener("submit", handleToDoSubmit);  


const savedToDos = localStorage.getItem(TODOS_KEY);  

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
} 





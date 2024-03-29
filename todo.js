
let inputArr = [];
inputArr = getLocalStorage().split(",")
;
function addItem() {
    let input = document.getElementById("input").value;
    
    inputArr.push(input);
    updateList(input);
}

function updateList(input){

    let listItem = document.createElement("li")
    listItem.textContent = input
    list.appendChild(listItem);
    setLocalStorage();
}

function setLocalStorage(){
    localStorage.setItem("todo", inputArr);
}

function getLocalStorage(){
    let todoStorage = localStorage.getItem("todo")
    
  return todoStorage  
}

function fillList(){
    
    if (inputArr !== null){
	inputArr.forEach((element)=> updateList(element))
    }
}

function hide(event){
    let indexrm = inputArr.indexOf(event.target.textContent);
    event.target.remove();
    inputArr.splice(indexrm,1)
    setLocalStorage();
    console.log(indexrm);
}

function deleteItem(){
    let mylist = document.getElementById("list");
    mylist.addEventListener("click",hide);
}

fillList();
deleteItem();

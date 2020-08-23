let input = document.getElementById("input");
let button = document.getElementById("btn-enter");
let todoList = document.getElementsByClassName("list");
let unorderedList = document.getElementById("todo-list");
function addNewItemToList(){
    if (input.value.length > 0) {
        if (input.value.trim().length === 0) {
            alert("Invalid text. Please enter a valid input")
        } else {
            let newElement = document.createElement("li");
            newElement.appendChild(document.createTextNode(input.value));
            newElement.classList.add("list");
            newElement.addEventListener("click", strikeOnClick);
            newElement.addEventListener("mouseenter", addDelButton);
            newElement.addEventListener("mouseleave", removeDelButton);
            unorderedList.appendChild(newElement);
        }
    }
    input.value="";
}
function addNewItemToListOnEnter() {
    addNewItemToList();
}
function addNewItemToListOnKeypress(event) {
    if (event.keyCode === 13) {
        addNewItemToList();
    }    
}
function removeItem() {
    this.parentNode.remove();
}
function addDelButton() {
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    btn.addEventListener("click", removeItem);
    this.appendChild(btn);
}
function removeDelButton() {
    this.children[0].remove();
}
function strikeOnClick() {
    this.classList.toggle("strike");
}
button.addEventListener("click", addNewItemToListOnEnter);
input.addEventListener("keydown", addNewItemToListOnKeypress);
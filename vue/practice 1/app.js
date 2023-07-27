const buttonel= document.querySelector("button");
const inputel = document.querySelector("input");
const listel = document.querySelector("ul");
function addgoal(){
    const enteredvalue = inputel.value;
    const listitemel = document.createElement('li');
    listitemel.textContent = enteredvalue;
    listel.appendChild(listitemel);
    inputel.value = '';
}

buttonel.addEventListener("click", addgoal);
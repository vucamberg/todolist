/* Simple todo List
* Vucamberg Santos; vuca.net@gmail.com
* April, 2019
*/

// The array that contains the Itens
let itens=JSON.parse(localStorage.getItem('tasks')) || [];

// Function to Button;;;; Add the Iten to Array and diplay it.
const keepItem=()=>{
    let aux=document.querySelector('.c-input__text');
    itens.push(aux.value);
    aux.value="";
    showItem();
}

//function to show the itens;
const showItem=()=>{
    let ul=document.querySelector('.c-output__ul');
    ul.innerHTML="";
    itens.forEach((a,b,c)=>{
	let li=document.createElement('li');
	let span=document.createElement('span');
	span.innerText="X";
	span.addEventListener('click',removeItem);
	li.innerText=a;
	li.appendChild(span);
	ul.appendChild(li);
    });

    localStorage.setItem('tasks',JSON.stringify(itens));
}

//remove a Item from Array and display it again

const removeItem=(e)=>{
    itens.splice(itens.indexOf(e.currentTarget.parentNode.firstChild.textContent),1);
    showItem();
}

window.onload=function(){
    document.querySelector('.c-input__button').addEventListener('click',keepItem);
    showItem();
}

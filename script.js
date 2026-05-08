/*
  This is just a sample project for my Git crash course. It doesn't do anything.
*/

console.log('Task Tracker Running...');

// Get elements
const btn = document.getElementById("btn");
const tasknabago = document.getElementById("tasknabago");
const tasks = document.getElementById("tasks");

btn.addEventListener("click", ()=>{
  var list = document.createElement("li");

  list.innerText = tasknabago.value;

  
  tasks.appendChild(list);

}


);
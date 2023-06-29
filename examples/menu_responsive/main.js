const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
  //nav.classList.toggle("visible");
  nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
  //nav.classList.toggle("visible");
  nav.classList.remove("visible");
})
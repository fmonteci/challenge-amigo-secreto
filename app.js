// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creación de variables
// web https://fmonteci.github.io/challenge-amigo-secreto/
let listadoAmigos=[];

//función boton que añade amigos al array, valida que no sea vacío
function agregarAmigo() {
let inputAmigo =""
inputAmigo=document.getElementById("amigo").value;
if (inputAmigo==""){
    alert("Por favor, inserte un nombre");
} else { //añade el amigo y actualiza la lista de amigosgit
    listadoAmigos.push(inputAmigo);
    document.getElementById("amigo").value="";
    actualizarAmigo();
}

console.log(listadoAmigos)
}

//funcion para generar listado de amigos a mostrar
function actualizarAmigo(){
let amigosAgregados=document.getElementById("listaAmigos");
amigosAgregados.innerHTML="";
for (var i=0; i<listadoAmigos.length; i++) {
    let nuevoElemento=document.createElement("li");
    nuevoElemento.textContent=listadoAmigos[i];
    amigosAgregados.appendChild(nuevoElemento);
}

}
// funcion de boton de selección de amigo
function sortearAmigo() {
let resultado=document.getElementById("resultado");
resultado.innerHTML="";
let amigosAgregados=document.getElementById("listaAmigos");
amigosAgregados.innerHTML="";
if(listadoAmigos.length==0){
alert("No existen amigos para sortear");
//break
} else{
let numeroAleatorio=parseInt(Math.floor(Math.random()*listadoAmigos.length)); 
let amigoSecreto=document.createElement("li");
amigoSecreto.textContent=listadoAmigos[numeroAleatorio];
resultado.appendChild(amigoSecreto);
}


}
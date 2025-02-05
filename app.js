// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creación de variables
let listadoAmigos=[];

//función que añade amigos al array, valida que no sea vacío
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

//funcion gpara generar listado de amigos a mostrar
function actualizarAmigo(){
let amigosAgregados=document.getElementById("listaAmigos");
amigosAgregados.innerHTML="";
for (var i=0; i<listadoAmigos.length; i++) {
    let nuevoElemento=document.createElement("li");
    nuevoElemento.textContent=listadoAmigos[i];
    amigosAgregados.appendChild(nuevoElemento);
}

}

function sortearAmigo() {
let resultado=document.getElementById("resultado");
resultado.innerHTML="";
let amigosAgregados=document.getElementById("listaAmigos");
amigosAgregados.innerHTML="";
if(listadoAmigos.length==0){
alert("No existen amigos para sortear");
//break
} else{
let numeroAleatorio=parseInt(Math.floor(Math.random(10)))+1;
let amigoSecreto=document.createElement("li");
amigoSecreto.textContent=listadoAmigos[numeroAleatorio];
resultado.appendChild(amigoSecreto);
}


}
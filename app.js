// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creación de variables
let listadoAmigos=[];

//función que añade amigos al array, valida que no sea vacío
function agregarAmigo() {
let inputAmigo =""
inputAmigo=document.getElementById("amigo").value;
if (inputAmigo==""){
    alert("Por favor, inserte un nombre");
} else {
    listadoAmigos.push(inputAmigo);
    document.getElementById("amigo").value="";
}

console.log(listadoAmigos)
}

function actualizarAmigo(){


}
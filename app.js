// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// let listaAmigos = [];
// function agregarAmigo(){

// let amigos  = document.getElementById('amigo');
// listaAmigos.push(amigos);
// return listaAmigos;

// }
// console.log(listaAmigos);

let listadoAmigos = [];

function agregarAmigo() {
    let ingresaAmigo = document.getElementById("amigo").value;
    if (ingresaAmigo.trim() !== "") {
        listadoAmigos.push(ingresaAmigo);
        document.getElementById("amigo").value = "";
        displayNames();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function displayNames() {
    let listContainer = document.getElementById("listaAmigos");
    listContainer.innerHTML = "";
    listadoAmigos.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        listContainer.appendChild(listItem);
    });
}
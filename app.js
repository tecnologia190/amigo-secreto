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
        mostrarnombres();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarnombres() {
    let listaContenedora = document.getElementById("listaAmigos");
    listaContenedora.innerHTML = "";
    listadoAmigos.forEach(nombre => {
        let listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaContenedora.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (listadoAmigos.length === 0) {
        alert("La lista está vacía. Agregar nombre por favor ");
        return;
    }
    let aleatorioIndex = Math.floor(Math.random() * listadoAmigos.length);
    //alert(" Amigo seleccionado: " + listadoAmigos[aleatorioIndex]);
    document.getElementById("resultado").textContent = "Amigo seleccionado: " + listadoAmigos[aleatorioIndex];
}

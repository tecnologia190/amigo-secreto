// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listadoAmigos = [];
let amigoIngresado=document.getElementById("amigo");
let paraListas = document.getElementById("listaAmigos"); 
let paraResultado = document.getElementById("resultado");
let paraSortea = document.getElementById("sortea");
let paraAgregar = document.getElementById("agregar");

function agregarAmigo() {
    let ingresaAmigo = amigoIngresado.value.trim();
    let validaEntrada = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; 
    if (ingresaAmigo === "") {
        alert("Ingrese el nombre de un amigo.");
    } else if (!validaEntrada.test(ingresaAmigo)) {
        alert("No se permiten números ni caracteres especiales."); 
    } else {
        listadoAmigos.push(ingresaAmigo);
        amigoIngresado.value = "";
        amigoIngresado.focus();
        mostrarnombres();
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
    paraResultado.textContent = "Amigo seleccionado: " + listadoAmigos[aleatorioIndex];
    paraListas.innerHTML = "";
    listadoAmigos = [];
    paraSortea.disabled = true; 
    paraAgregar.disabled = true; 

}

function resetAll() {
    listadoAmigos = [];
    amigoIngresado.value = "";
    paraListas.innerHTML = "";
    paraResultado.textContent = "";
    amigoIngresado.focus();
    paraSortea.disabled = false; 
    paraAgregar.disabled = false; 
}



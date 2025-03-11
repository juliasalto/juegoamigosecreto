// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// crear un array para ir viendo los números generados y que no se repitan al reiniciar el juego
let amigos = [];


function agregarAmigo() {//acá usamos un getElementById porque puede haber más de un input (con distintos id)//
    let amigoAgregado = document.getElementById("amigo").value;
        if (amigoAgregado === "") {
            alert('Por favor escribe un nombre');
        return;
       }
       amigos.push(amigoAgregado);
        document.getElementById("amigo").value = "";

        actualizarListaAmigos();

       // Mostrar la lista actualizada en la consola (puedes modificarlo para mostrar en la interfaz)
       console.log("Lista de amigos:", amigos);
   }

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Iterar sobre el array y agregar elementos a la lista
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length == 0){
    alert("No hay amigos en la lista. Agrégalos para comenzar a jugar :)");
    return;
    }

    let sorteo = Math.floor(Math.random() * amigos.length);

// Obtener el nombre sorteado
    let amigoSorteado = amigos[sorteo];

// Mostrar el resultado en la interfaz
    document.getElementById("resultadoSorteo").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉`;

}

function reiniciarJuego() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultadoSorteo").innerHTML = ""; 
    document.getElementById("amigo").value = ""; 

    console.log("Juego reiniciado");
}


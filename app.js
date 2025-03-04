let amigos = [];

function agregarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo.trim() === "") {
        alert ("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push (nombreAmigo);

    inputAmigo.value = "";
}
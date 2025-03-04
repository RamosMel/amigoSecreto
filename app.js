let amigos = [];

function agregarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo.trim() === "") {
        alert ("Por favor, inserte un nombre.");
        return;
    }

    amigos.push (nombreAmigo);

    inputAmigo.value = "";
}
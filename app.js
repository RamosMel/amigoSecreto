let amigos = [];

function agregarAmigo () {
    let imputAmigo = document.getElementById("amigo");
    let nombreAmigo = imputAmigo.value;

    if (nombreAmigo.trim() === "") {
        alert ("Por favor, inserte un nombre.");
        return;
    }

    amigos.push (nombreAmigo);
}
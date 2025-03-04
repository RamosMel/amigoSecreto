let amigos = [];

function agregarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push (nombreAmigo);

    inputAmigo.value = "";

    mostrarAmigos()
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No agregaste amigos, para sortear agrega al menos uno.")
        return;
    }

    let aleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[aleatorio];
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Amigo Secreto: <strong>${amigoSecreto}</strong>`
}
const botao = document.querySelector("#buttonform");
const titulo = document.querySelector("h1"); 
const campo = document.querySelector("#name");
const mensagem = document.querySelector("#mensagem");

const fotoBolo = document.querySelector("#fotobolo");
const fotoPaes = document.querySelector("#fotopaes");
const fotoDoce = document.querySelector("#fotodoce");



botao.onclick = function() {
    titulo.innerHTML = "Você clicou no botão!";
    titulo.style.color = "blue";
}

document.body.style.backgroundColor = "#dd3bb5ff";


campo.oninput = function() {
    mensagem.innerHTML = "Olá, " + campo.value + "! Obrigado por visitar nossa padaria artesanal.";
}



fotoBolo.onmouseover = function() {
    fotoBolo.style.opacity = "0.7";
} 

fotoBolo.onmouseout = function() {
    fotoBolo.style.opacity = "1";
}

fotoPaes.onmouseover = function() {
    fotoPaes.style.opacity = "0.7";
}
fotoPaes.onmouseout = function() {
    fotoPaes.style.opacity = "1";
}

fotoDoce.onmouseover = function() {
    fotoDoce.style.opacity = "0.7";
}

fotoDoce.onmouseout = function() {
    fotoDoce.style.opacity = "1";
}
img.onmouseover = function() {
    fotoBolo.style.opacity = "0.7";
} 

img.onmouseout = function() {
    fotoBolo.style.opacity = "1";
}



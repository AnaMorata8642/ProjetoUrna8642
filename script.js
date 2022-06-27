function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = 0;
            tela = document.querySelector('#inicial');
            tela.style.display = "none";            
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 * 0.1; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

/*Programação dos Botões*/

var numero = "";

function buttonb1(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "1";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb2(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "2";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb3(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "3";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb4(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "4";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb5(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "5";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb6(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "6";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb7(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "7";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb8(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "8";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb9(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "9";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonb0(){
    numero = document.getElementById("tVoto").value;

    if(numero.length < 2){
        document.getElementById("tVoto").value += "0";
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;

        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function btnCorrigir(){
    document.getElementById("tVoto").value = "";
    numero = "";
    document.getElementById("imgCand").src = "#";
    document.getElementById("nomeCand").innerHTML = "Candidato:";
    document.getElementById("partido").innerHTML = "Partido:";
}

var voto = {
    cand1: 0,
    cand2: 0,
    cand3: 0,
    cand4: 0,
    cand5: 0,
    branco: 0,
    nulo: 0
}

function vBranco(){
    numero = document.getElementById("tVoto").value;
    if(numero.length == 0){
        numero = 0;
        const tecla = new Audio('musica/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        mostrarImagem(numero);
    }
    else{
        alert("Corrija o Seu Voto Clicando no Botão Corrigir!\n" +
              "Depois Clique no Branco para Votar em Branco!");
    }
}

function mostrarImagem(vNumero){
    switch(vNumero){
        case 04:{
            document.getElementById("imgCand").src = "img/Naruto.webp";
            document.getElementById("nomeCand").innerHTML = "Candidato: Naruto Awakened";
            document.getElementById("partido").innerHTML = "Partido: Awake";
            break;
        }

        case 11:{
            document.getElementById("imgCand").src = "img/Meliodas.png";
            document.getElementById("nomeCand").innerHTML = "Candidato: Meliodas Happiness";
            document.getElementById("partido").innerHTML = "Partido: Happiness";
            break;
        }

        case 12:{
            document.getElementById("imgCand").src = "img/Hinata.webp";
            document.getElementById("nomeCand").innerHTML = "Candidato: Hinata Passion";
            document.getElementById("partido").innerHTML = "Partido: Passion";
            break;
        }

        case 16:{
            document.getElementById("imgCand").src = "img/Nezuko.jpg";
            document.getElementById("nomeCand").innerHTML = "Candidato: Nezuko Confusion";
            document.getElementById("partido").innerHTML = "Partido: Confusion";
            break;
        }

        case 20:{
            document.getElementById("imgCand").src = "img/Luffy-.webp";
            document.getElementById("nomeCand").innerHTML = "Candidato: Luffy Hope";
            document.getElementById("partido").innerHTML = "Partido: Hope";
            break;
        }

        case 0:{
            document.getElementById("imgCand").src = "img/branco.png";
            document.getElementById("nomeCand").innerHTML = "Candidato: Voto Branco";
            document.getElementById("partido").innerHTML = "Partido: Voto Branco";
            break;
        }

        default:{
            document.getElementById("imgCand").src = "img/voto-nulo.png";
            document.getElementById("nomeCand").innerHTML = "Candidato: Voto Nulo";
            document.getElementById("partido").innerHTML = "Partido: Voto Nulo";
            break;
        }
    }
}

function btnConfirmar(){
    if(document.getElementById("tVoto").value.length == 2){
        let nVoto = parseInt(document.getElementById("tVoto").value);
        alert(nVoto)
        switch(nVoto){
            case 04:
                voto.cand1++;
                break;
            
            case 11:
                voto.cand2++;
                break;

            case 12:
                voto.cand3++;
                break;

            case 16:
                voto.cand4++;
                break;

            case 20:
                voto.cand5++;
                break;

            default:
                voto.nulo++;
                break;
        }
    }
    else if(document.getElementById("tVoto").value.length == 0){
        if(numero == 0){
            voto.branco++
        }
    }
    else{
        alert("Corrija seu Voto!")
    }
    const tecla = new Audio('musica/confirmsound.mp3');
    tecla.play();
    tecla.loop = false;
    document.getElementById("tVoto").value = "";
}

//Zerezima

document.getElementById("zimgPColocado").src = "img/Naruto.webp";
document.getElementById("zresPColocado").innerHTML = "Candidato: Naruto Awakened - " + voto.cand1 + " Voto";

document.getElementById("zimgSColocado").src = "img/Meliodas.png";
document.getElementById("zresSColocado").innerHTML = "Candidato: Meliodas Happiness - " + voto.cand2 + " Voto";

document.getElementById("zimgTColocado").src = "img/Hinata.webp";
document.getElementById("zresTColocado").innerHTML = "Candidato: Hinata Passion - " + voto.cand3 + " Voto";

document.getElementById("zimgQaColocado").src = "img/Nezuko.jpg";
document.getElementById("zresQaColocado").innerHTML = "Candidato: Nezuko Confusion - " + voto.cand4 + " Voto";

document.getElementById("zimgQiColocado").src = "img/Luffy-.webp";
document.getElementById("zresQiColocado").innerHTML = "Candidato: Luffy Hope - " + voto.cand5 + " Voto";

document.getElementById("zimgBranco").src = "img/branco.png";
document.getElementById("zresBranco").innerHTML = "Candidato: Voto Branco - " + voto.branco + " Voto";

document.getElementById("zimgNulo").src = "img/voto-nulo.png";
document.getElementById("zresNulo").innerHTML = "Candidato: Voto Nulo - " + voto.nulo + " Voto";
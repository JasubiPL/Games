/*----Elementos HTML----*/
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");
const t5 = document.querySelector("#t5");
const t6 = document.querySelector("#t6");
const t7 = document.querySelector("#t7");
const t8 = document.querySelector("#t8");
const t9 = document.querySelector("#t9");
const t10 = document.querySelector("#t10");
const t11 = document.querySelector("#t11");
const t12 = document.querySelector("#t12");
const contador = document.querySelector("#numeroMovimientos");



const t1F = document.getElementById("t1-f");
const t1B = document.getElementById("t1-b");
const t2F = document.getElementById("t2-f");
const t2B = document.getElementById("t2-b");
const t3F = document.getElementById("t3-f");
const t3B = document.getElementById("t3-b");
const t4F = document.getElementById("t4-f");
const t4B = document.getElementById("t4-b");
const t5F = document.getElementById("t5-f");
const t5B = document.getElementById("t5-b");
const t6F = document.getElementById("t6-f");
const t6B = document.getElementById("t6-b");
const t7F = document.getElementById("t7-f");
const t7B = document.getElementById("t7-b");
const t8F = document.getElementById("t8-f");
const t8B = document.getElementById("t8-b");
const t9F = document.getElementById("t9-f");
const t9B = document.getElementById("t9-b");
const t10F = document.getElementById("t10-f");
const t10B = document.getElementById("t10-b");
const t11F = document.getElementById("t11-f");
const t11B = document.getElementById("t11-b");
const t12F = document.getElementById("t12-f");
const t12B = document.getElementById("t12-b");

/*----Variables----*/
let valorDeTarjetas = [];
let valorTarjeta = 0;
let valor1 = 0;
let valor2 = 0;
let movimientos = 0;
let puntos =0;

console.log(valorDeTarjetas);




/*---------------------------Funciones---------------------------*/


/*----Crear aleatoriedad----*/
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,];
numeros = numeros.sort(()=>{return Math.random() - 0.5});
console.log(numeros);


/*----Asignar valor a targetas------------*/
const tarjetas = document.querySelectorAll(".frontal");
let posicion = 0;

for(tarjeta of tarjetas){
    const valorAsignado = document.createElement("span");
    tarjeta.append(valorAsignado);
    tarjeta.parentNode.className += " tv" + numeros[posicion];
    valorAsignado.innerText = numeros[posicion];
    valorDeTarjetas.push(numeros[posicion]);
    posicion++;
    
}

const tsv1 = document.querySelectorAll(".tv1");
const tsv2 = document.querySelectorAll(".tv2");
const tsv3 = document.querySelectorAll(".tv3");
const tsv4 = document.querySelectorAll(".tv4");
const tsv5 = document.querySelectorAll(".tv5");
const tsv6 = document.querySelectorAll(".tv6");







function voltearT1(){

    let timeOut = setTimeout(loadT1,200)

    function loadT1(){
        t1F.style.display = "flex";
        t1B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[0];
    jugada1();
    
}

function voltearT2(){

    let timeOut = setTimeout(loadT2,200)

    function loadT2(){
        t2F.style.display = "flex";
        t2B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[1];
    jugada1();
    
}

function voltearT3(){

    let timeOut = setTimeout(loadT3,200)

    function loadT3(){
        t3F.style.display = "flex";
        t3B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[2];
    jugada1();
    
}

function voltearT4(){


    let timeOut = setTimeout(loadT4,200)

    function loadT4(){
        t4F.style.display = "flex";
        t4B.style.display = "none";
    }
    
    valorTarjeta = valorDeTarjetas[3];
    jugada1();
}

function voltearT5(){

    let timeOut = setTimeout(loadT5,200)

    function loadT5(){
        t5F.style.display = "flex";
        t5B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[4];
    jugada1();
    
}

function voltearT6(){

    let timeOut = setTimeout(loadT6,200)

    function loadT6(){
        t6F.style.display = "flex";
        t6B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[5];
    jugada1();
    
}

function voltearT7(){

    let timeOut = setTimeout(loadT7,200)

    function loadT7(){
        t7F.style.display = "flex";
        t7B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[6];
    jugada1();
    
}

function voltearT8(){

    let timeOut = setTimeout(loadT8,200)

    function loadT8(){
        t8F.style.display = "flex";
        t8B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[7];
    jugada1();
    
}

function voltearT9(){

    let timeOut = setTimeout(loadT9,200)

    function loadT9(){
        t9F.style.display = "flex";
        t9B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[8];
    jugada1();
    
}

function voltearT10(){

    let timeOut = setTimeout(loadT10,200)

    function loadT10(){
        t10F.style.display = "flex";
        t10B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[9];
    jugada1();
    
}
function voltearT11(){

    let timeOut = setTimeout(loadT11,200)

    function loadT11(){
        t11F.style.display = "flex";
        t11B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[10];
    jugada1();
    
}

function voltearT12(){

    let timeOut = setTimeout(loadT12,200)

    function loadT12(){
        t12F.style.display = "flex";
        t12B.style.display = "none";
    }

    valorTarjeta = valorDeTarjetas[11];
    jugada1();
    
}

function jugada1(){
    //alert(valorTarjeta);
    efectoPop.play();
    if(valor1 === 0){
        valor1 = valorTarjeta;
    }
    else{
        valor2 = valorTarjeta;

        if(valor1 === valor2){
            setTimeout(() =>{
                //alert("Bingo!!");
                efectoCorrecto.play();
                desaparecer();
                
            },500);
        }
        else{
            valor1 = 0;
            valor2 = 0;
            setTimeout(() =>{
                //alert("Son diferentes");
                efectoError.play();
                voltearTarjetas();
            },500);

            
        }
    }
    movimientos = movimientos + 1;
    contador.innerText = movimientos;

}

function desaparecer(){
    setTimeout(() =>{

        if(valor1 === 1){
            tsv1[0].style.display = "none";
            tsv1[1].style.display = "none";
            puntos = puntos + 1;
        }
        if(valor1 === 2){
            tsv2[0].style.display = "none";
            tsv2[1].style.display = "none";
            puntos = puntos + 1;
        }
        if(valor1 === 3){
            tsv3[0].style.display = "none";
            tsv3[1].style.display = "none";
            puntos = puntos + 1;
        }
        if(valor1 === 4){
            tsv4[0].style.display = "none";
            tsv4[1].style.display = "none";
            puntos = puntos + 1;
        }
        if(valor1 === 5){
            tsv5[0].style.display = "none";
            tsv5[1].style.display = "none";
            puntos = puntos + 1;
        }
        if(valor1 === 6){
            tsv6[0].style.display = "none";
            tsv6[1].style.display = "none";
            puntos = puntos + 1;
        }
        valor1  = 0;
        valor2 = 0;

        if(puntos >= 6){
            const pantallaFin = document.getElementById("pantalla_fin_del_juego");
            pantallaFin.style.display="flex";
            efectoJuegoCompleto.play();
        }
    },750);
}

function voltearTarjetas(){
    setTimeout(() => {
        t1F.style.display = "none";
        t1B.style.display = "flex";
        t2F.style.display = "none";
        t2B.style.display = "flex";
        t3F.style.display = "none";
        t3B.style.display = "flex";
        t4F.style.display = "none";
        t4B.style.display = "flex";
        t5F.style.display = "none";
        t5B.style.display = "flex";
        t6F.style.display = "none";
        t6B.style.display = "flex";
        t7F.style.display = "none";
        t7B.style.display = "flex";
        t8F.style.display = "none";
        t8B.style.display = "flex";
        t9F.style.display = "none";
        t9B.style.display = "flex";
        t10F.style.display = "none";
        t10B.style.display = "flex";
        t11F.style.display = "none";
        t11B.style.display = "flex";
        t12F.style.display = "none";
        t12B.style.display = "flex";
    },750);
    

}//Pantalla StartApp
const videoIntro = document.getElementById("video");
const telaraniaEfecto = document.getElementById("telarania_efecto");
const btnAceptar = document.getElementById("btn_aceptar").addEventListener("click", startApp);
const pantallaStartApp = document.getElementById("pantalla_start_app");
const pantallaIntro = document.getElementById("pantalla_intro");

function startApp(){
    telaraniaEfecto.play();
    pantallaStartApp.remove();
    pantallaIntro.style.display = "flex";
    setTimeout(()=>{
        videoIntro.play();
        playIntro();
    },1300);
}

//Pantalla de intro

function playIntro(){
    
    setTimeout(()=>{
       
        pantallaIntro.style.opacity = "0";
        setTimeout(()=>{
            pantallaDeInicio.style.display ="flex";
            pantallaIntro.remove();
            musica.play();
        },1000);
    },5000);
}

//Pantalla de inicio

const btnPlay = document.getElementById("btn_play").addEventListener("click", iniciarJuego);
const pantallaDeInicio = document.getElementById("pantalla_de_inicio");
const pantallaDeJuego = document.getElementById("pantalla_de_juego");

function iniciarJuego(){
    pantallaDeJuego.style.display = "block";
    pantallaDeInicio.style.opacity = "0";
    telaraniaEfecto.play();
    setTimeout(()=> {
        pantallaDeInicio.remove();
        
    },600);
}

//Pantalla de pausa

const btnContinuar = document.getElementById("btn_continuar").addEventListener("click", continuarJuego);
const btnReiniciar = document.getElementById("btn_reiniciar").addEventListener("click", reiniciarJuego);
const btnSalir = document.getElementById("btn_salir").addEventListener("click", salir);
const pantallaDePausa = document.getElementById("pantalla_de_pausa");

function continuarJuego(){
    pantallaDePausa.style.opacity = "0";
    setTimeout(()=> {
        pantallaDePausa.style.display = "none";
    },600);
    telaraniaEfecto.play();
}

function reiniciarJuego(){
    location.reload();
    telaraniaEfecto.play();
}

function salir(){
    pantallaDePausa.style.display = "flex";
    pantallaDePausa.style.opacity = "1";
    telaraniaEfecto.play();
}

//Audio
const musica = document.getElementById("musica");
const efectoPop = document.getElementById("pop_efecto");
const efectoCorrecto = document.getElementById("correcto_efecto");
const efectoError = document.getElementById("error_efecto");
const efectoJuegoCompleto = document.getElementById("juego_completo_efecto");
const btnReproducirMusica = document.getElementById("reproducir_musica");
const btnPausarMusica = document.getElementById("pausar_musica");

btnReproducirMusica.addEventListener("click", controlDeMusica);
btnPausarMusica.addEventListener("click", controlDeMusica);
let musicaDeFondo = true;

function controlDeMusica(){
    if(musicaDeFondo === true){
        btnReproducirMusica.style.display ="none";
        btnPausarMusica.style.display="flex";
        musica.pause();
        musicaDeFondo = false;
    }
    else{
        btnReproducirMusica.style.display ="flex";
        btnPausarMusica.style.display="none";
        musica.play();
        musicaDeFondo = true;
    }
}
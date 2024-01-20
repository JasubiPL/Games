
import robotIcon from '../img/user-icon.png';
import instruccionesAudio from '../assets/instrucciones.mp3';
import '../css/pantallaDeAyuda.css';

const screen = document.querySelector("body");
const pantallaDeAyuda = document.createElement("div");
pantallaDeAyuda.id = "pantallaDeAyuda";

export function crearPantallaDeAyuda(){
   
    pantallaDeAyuda.innerHTML = `
        <audio id="audioInstrucciones" src=${instruccionesAudio}></audio>
        <div class="modalPantallaDeAyuda">
            <img src="${robotIcon}" />
            <p>¡Hola! Soy Piñeyro-bot y estoy aquí para ayudarte.<br><br>
            Las reglas del juego son muy sencillas, yo pensare un número y tú tendrás que adivinar cuál es.
            Cada que des una respuesta y te equivoques, te iré dando pistas.<br><br>
            ¿Parece muy fácil cierto?<br>
            Pues veamos si llegas al nivel legendario.</p>
            <button id="btnModalPantallaDeInicio"> Regresar </button>
        <div>
    `;
    screen.append(pantallaDeAyuda);
    getModal();
}

function getModal(){
    const btnModal = document.getElementById("btnModalPantallaDeInicio");
    const modalPantallaDeAyuda = document.querySelector(".modalPantallaDeAyuda");
    const audioInstrucciones = document.getElementById("audioInstrucciones");

    setTimeout(() => {
        audioInstrucciones.play();
        btnModal.addEventListener("click", ()=>{
            modalPantallaDeAyuda.style.animation ="modalAyudaSalida 1s";
            setTimeout(() =>{pantallaDeAyuda.remove();},900);
        })
    }, 1000);
}

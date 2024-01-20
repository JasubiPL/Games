import '../css/pantallaDeNiveles.css';
import RegresarIcon from '../img/arrow-left-icon.png';
import sonajaIcon from '../img/sonaja-icon.png';
import starIcon from '../img/star-green-icon.png';
import shieldIcon from '../img/shield-yellow-icon.png';
import fireIcon from '../img/fire-icon.png';
import dragonIcon from '../img/dragon-icon.png';
import userIcon from '../img/user-icon.png';
import {dispararNotificacion} from '../componentes/notificacionesPush'
import{crearPantallaDeAyuda} from '../Pantallas/pantallaDeAyuda'
import { inciarJuego } from '../componentes/logicaDeJuego';

const pantallaDeNiveles = document.getElementById("pantallaDeNiveles");

const disculpas = "Disculpa, por el momento esta opcion no esta disponible";

pantallaDeNiveles.innerHTML = `
    <div class="headerNiveles">
        <img id="btnRegresar" src="${RegresarIcon}" />
        <p class="titulos">Dificultad</p>
    </div>
    <div class="botonesNiveles">
        <button id="btnPrincipiante">
            <img src="${sonajaIcon}" />
            <p>Principiante</p>
        </button>
        <button id="btnNormal">
            <img src="${starIcon}" />
            <p>Normal</p>
        </button>
        <button id="btnAvanzado">
            <img src="${shieldIcon}" />
            <p>Avanzado</p>
        </button>
        <button id="btnExperto">
            <img src="${fireIcon}" />
            <p>Experto</p>
        </button>
        <button id="btnLegendario">
            <img src="${dragonIcon}" />
            <p>Legendario</p>
        </button>
    </div>
    
    <div class="contenedorBtnInfo">
        <button id="btnInfo">
            <img src="${userIcon}"/>
            <p>Ayuda</p>
        </button>
    </div>

`;

const btnRegresar = document.getElementById("btnRegresar").addEventListener("click", pressRegresar);
const btnInfo = document.getElementById("btnInfo").addEventListener("click", pressInfo);
const btnPrincipiante = document.getElementById("btnPrincipiante").addEventListener("click", pressPrincipiante);
const btnNormal = document.getElementById("btnNormal").addEventListener("click", pressNormal);
const btnAvanzado = document.getElementById("btnAvanzado").addEventListener("click", pressAvanzado);
const btnExperto = document.getElementById("btnExperto").addEventListener("click", pressExperto);
const btnLegendario = document.getElementById("btnLegendario").addEventListener("click", pressLegendario);

function pressRegresar(){
    pantallaDeNiveles.style.display = "none";
    pantallaDeInicio.style.display = "flex";
}
function pressInfo(){
    crearPantallaDeAyuda();
    coinEffect.play();
}
function pressPrincipiante(){
    inciarJuego();
    pantallaNivelPrincipiante.style.display = "grid";
    pantallaDeNiveles.style.display = "none";
    coinEffect.play();
}
function pressNormal(){
    dispararNotificacion(disculpas);
}
function pressAvanzado(){
    dispararNotificacion(disculpas);
}
function pressExperto(){
    dispararNotificacion(disculpas);
}
function pressLegendario(){
    dispararNotificacion(disculpas);
}
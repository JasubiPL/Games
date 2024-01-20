import '../css/pantallaDeInicio.css';
import musicafondo from '../assets/musicadefondo.mp3'
import {dispararNotificacion} from '../componentes/notificacionesPush'

import logoJuego from '../img/logo-juego.png';
import jugaricon from '../img/play-verde-icon.png';
import googlePlayIcon from '../img/googleplay-azul-icon.png';
import facebookIcon from '../img/facebook-icon.png';
import githubIcon from '../img/github-icon.png';
import twitterIcon from '../img/twitter-icon.png';
import linkedinIcon from '../img/linkedin-icon.png';

const disculpas = "Disculpa, por el momento esta opcion no esta disponible";

const pantallaDeInicio = document.getElementById("pantallaDeInicio");


pantallaDeInicio.innerHTML = `

    <div class="contenedorPantallaDeInicio">
        <img class="logoJuego" src="${logoJuego}" />

        <div class="contenedorBtnPantallaDeInicio">
            <button id="btnJugar">
                <img src="${jugaricon}" />
                <p>Jugar</p>
            </button>
            <button id="btnMasApps">
                <img src="${googlePlayIcon}" />
                <p>Mas Apps</p>
            </button>
        </div>

        <div class="follow">
            
            <div class="contenedorFollowIcon">
                <a href="https://www.facebook.com/JasubiP/"><img src="${facebookIcon}" /></a>
                <a href="https://github.com/JasubiPL"><img src="${githubIcon}" /></a>
                <a href="https://twitter.com/JasubiP"><img src="${twitterIcon}" /></a>
                <a href="https://www.linkedin.com/in/jasubip/"><img src="${linkedinIcon}" /></a>
            </div>
            <p>Desarrollado por JasubiP ®</p>
        </div>
    </div>
    <audio src="${musicafondo}" autoplay loop/><audio>
`;
const btnJugar = document.getElementById("btnJugar").addEventListener("click", pressJugar);
const btnMasApps = document.getElementById("btnMasApps").addEventListener("click", pressMasApps);

function pressJugar(){
    pantallaDeInicio.style.display= "none";
    pantallaDeNiveles.style.display = "grid";
    coinEffect.play();

}

function pressMasApps(){
    dispararNotificacion(disculpas);
}


import user from '../img/user-icon.png';
import '../css/notificacionesPush.css';

const screen = document.querySelector("body");
const notificacion = document.createElement("div");
notificacion.id = "contenedorNotificacion";

export function dispararNotificacion(mensaje){
    
    notificacion.innerHTML =`
        <div class="notificacionCenter">
            <img src="${user}" />
            <p id="mensajeNotificacion"></p>
        </div>
    `;

    screen.append(notificacion);

    const mensajeNotificacion = document.getElementById("mensajeNotificacion");
    mensajeNotificacion.innerText = mensaje;

    setTimeout(() => {
        notificacion.remove();
    },6000);
}
import '../css/mensajeJuegoGanado.css';
import imgJuegoGanado from '../img/estrellas_ganador.png';

const screen = document.querySelector("body");
const mensajeJuegoGanado = document.createElement("div");
mensajeJuegoGanado.id="mensajeJuegoGanado";

export function dispararMensajeJuegoGanado(){

    mensajeJuegoGanado.innerHTML=`
        <div class="contenedorMensajeJuegoGanado">
            <img src="${imgJuegoGanado}" />
            <p>¡Ganaste!</P>
            <button id="btnVolverAJugar">Volver a jugar</button>
        </div>
    `;

    screen.append(mensajeJuegoGanado);
    reiniciarJuego();
}

function reiniciarJuego(){
    const btnVolverAJugar = document.getElementById("btnVolverAJugar").addEventListener("click", ()=>{
        mensajeJuegoGanado.remove();
        pantallaNivelPrincipiante.style.display ="none";
        pantallaDeNiveles.style.display = "grid";
    });
}
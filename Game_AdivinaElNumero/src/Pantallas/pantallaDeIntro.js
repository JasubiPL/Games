import '../css/pantallaDeIntro.css';
import logoJasubiP from '../img/imagotipo-jasubip.png';
import spinnerIcon from '../img/spinner-icon.png';

const pantallaDeIntro = document.getElementById("pantallaDeIntro");


pantallaDeIntro.innerHTML = `
    <div class="contenedorPantallaDeIntro">
        <div class="infoPantallaDeIntroCenter">
            <img class="imagotipo" src="${logoJasubiP}" />
            <img class="spinner" src="${spinnerIcon}" />

        </div>
    </div>
`;

setTimeout(() => {
    pantallaDeIntro.remove();
    pantallaDeInicio.style.display = "flex";
},4000);
// Desarrollo de la lógica del proyecto
import './style.css';

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let maxIntentos = Infinity;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const modoDificilCheckbox = document.getElementById('modoDificil');
const intentosRestantesTexto = document.getElementById('intentosRestantes');

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function actualizarIntentosRestantes() {
    if (maxIntentos !== Infinity) {
        intentosRestantesTexto.textContent = `Intentos restantes: ${maxIntentos - intentos}`;
    } else {
        intentosRestantesTexto.textContent = '';
    }
}

function verificarIntento() {
    const numeroJugador = parseInt(inputNumero.value);
    mensaje.className = ''; // Limpia clases anteriores

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    intentos++;
    actualizarIntentosRestantes();

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        mensaje.classList.add('win');
        botonAdivinar.disabled = true;
    } else if (intentos >= maxIntentos) {
        mensaje.textContent = `¡Perdiste! El número era ${numeroSecreto}.`;
        mensaje.classList.add('lose');
        botonAdivinar.disabled = true;
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
}

function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    maxIntentos = modoDificilCheckbox.checked ? 10 : Infinity;
    mensaje.textContent = '';
    mensaje.className = '';
    inputNumero.value = '';
    botonAdivinar.disabled = false;
    actualizarIntentosRestantes();
}

// Listeners
botonAdivinar.addEventListener('click', verificarIntento);
botonReiniciar.addEventListener('click', reiniciarJuego);
modoDificilCheckbox.addEventListener('change', () => {
    maxIntentos = modoDificilCheckbox.checked ? 10 : Infinity;
    actualizarIntentosRestantes();
    reiniciarJuego(); // Reinicia juego al cambiar dificultad
});

// Inicia juego
reiniciarJuego();

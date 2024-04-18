// Variables
let indicePregunta
let preguntasSeleccionadas = []
let puntuacion = 0
let tiempo
let temporizador

// Crear contenedores del juego
const contenedorEstadisticas = document.createElement('div')
contenedorEstadisticas.classList.add('estadisticas')
const txtPuntuacion = document.createElement('h5')
const txtTiempo = document.createElement('h5')
const contenedor = document.querySelector('.contenedor')
const contenedorPregunta = document.createElement('div')
contenedorPregunta.classList.add('pregunta')
const tituloPregunta = document.createElement('h3')
txtPuntuacion.textContent = `Puntuación ${puntuacion} pts`
contenedor.appendChild(contenedorEstadisticas)
contenedorEstadisticas.appendChild(txtPuntuacion)
contenedorEstadisticas.appendChild(txtTiempo)
contenedor.appendChild(contenedorPregunta)
contenedorPregunta.appendChild(tituloPregunta)

// Crear contenedores de las respuestas
const contenedorRespuestas = document.createElement('div')
contenedorRespuestas.classList.add('respuestas')
for(let i=0; i<4;i++){
    const botonesRespuestas = document.createElement('div')
    botonesRespuestas.classList.add('respuesta')
    botonesRespuestas.id = 'respuesta'+(i+1)
    contenedorRespuestas.appendChild(botonesRespuestas)
}
contenedor.appendChild(contenedorRespuestas)

// Seleccionar preguntas al azar
function preguntaAzar(){
    do {
        indicePregunta = Math.floor(Math.random() * preguntasMomentaneas.length)
    } while (preguntasSeleccionadas.includes(indicePregunta));

    preguntasSeleccionadas.push(indicePregunta)

    if(preguntasSeleccionadas.length === preguntasMomentaneas.length){
        finJuego()
    }
}

// Mostrar el contenido
function mostrarContenido(){
    preguntaAzar()
    // Mostrar las preguntas
    const preguntaActual = preguntasMomentaneas[indicePregunta]
    tituloPregunta.textContent = preguntaActual.pregunta
    // Mostrar las opciones
    const opciones = document.querySelectorAll('.respuesta')
    opciones.forEach((opcion, indice) => {
        opcion.textContent = preguntaActual.opciones[indice]
    })
}

mostrarContenido()

// Funcionamiento
function verificarRespuesta(opcionSeleccionada){
    const preguntaActual = preguntasMomentaneas[indicePregunta]
    if(opcionSeleccionada === preguntaActual.respuesta){
        puntuacion += 5
        txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`
        mostrarContenido()
    }else{
        puntuacion-= 5
        txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`
        mostrarContenido()
    }
}

const opciones = document.querySelectorAll('.respuesta')
opciones.forEach(opcion => {
    opcion.addEventListener('click', e => {
        const opcionSeleccionada = opcion.textContent
        verificarRespuesta(opcionSeleccionada)
    })
})

function iniciarTemporizador(){
    tiempo = 15
    txtTiempo.textContent = `Tiempo: ${tiempo} segundos`
    temporizador = setInterval(()=>{
        tiempo--
        txtTiempo.textContent = `Tiempo: ${tiempo} segundos`
        if(tiempo === 0){
            clearInterval(temporizador)
            finJuego()
        }
    }, 1000)
}

iniciarTemporizador()

function finJuego(){
    contenedor.innerHTML = ''
    const contenedorDerrota = document.createElement('div')
    const MensajeFinal = document.createElement('h2')
    MensajeFinal.textContent = 'Fin del juego'
    MensajeFinal.classList.add('mensaje-final')
    const puntuacionFinal = document.createElement('p')
    puntuacionFinal.textContent = `Puntuación final: ${puntuacion} pts`
    const btnReiniciar = document.createElement('button')
    btnReiniciar.classList.add('btn-reiniciar')
    btnReiniciar.textContent = 'Volver a jugar'
    contenedorDerrota.appendChild(MensajeFinal)
    contenedorDerrota.appendChild(puntuacionFinal)
    contenedorDerrota.appendChild(btnReiniciar)
    contenedor.appendChild(contenedorDerrota)

    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego() {
    puntuacion = 0;
    preguntasSeleccionadas = [];
    txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`

    contenedor.innerHTML = '';

    contenedor.appendChild(contenedorEstadisticas);
    contenedorEstadisticas.appendChild(txtPuntuacion);
    contenedorEstadisticas.appendChild(txtTiempo);
    contenedor.appendChild(contenedorPregunta);
    contenedorPregunta.appendChild(tituloPregunta);
    contenedor.appendChild(contenedorRespuestas);

    clearInterval(temporizador)
    mostrarContenido();
    iniciarTemporizador()
}
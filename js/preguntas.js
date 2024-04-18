// Crear contenedores del juego
const contenedorEstadisticas = document.createElement('div')
contenedorEstadisticas.classList.add('estadisticas')
const txtPuntuacion = document.createElement('h5')
const txtTiempo = document.createElement('h5')
const contenedor = document.querySelector('.contenedor')
const contenedorPregunta = document.createElement('div')
contenedorPregunta.classList.add('pregunta')
const tituloPregunta = document.createElement('h3')
txtPuntuacion.textContent = 'Puntuación: 0 pts'
txtTiempo.textContent = 'Tiempo: 30 segundos'
tituloPregunta.textContent = 'Pregunta'
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
    botonesRespuestas.textContent = 'Respuesta'
    contenedorRespuestas.appendChild(botonesRespuestas)
}
contenedor.appendChild(contenedorRespuestas)
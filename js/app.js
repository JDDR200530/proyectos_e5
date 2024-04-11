// Crear contenedor del juego
const contenedorJuego = document.createElement('div')
contenedorJuego.classList.add('juego')
const contenedor = document.querySelector('.contenedor')
contenedor.appendChild(contenedorJuego)

// Generar estadisticas
function generarEstadisticas(){
    // Titulo del juego
    const titulo = document.createElement('h1')
    titulo.innerHTML = 'Memorama'
    // Aciertos
    const aciertos = document.createElement('h3')
    aciertos.id = 'aciertos'
    aciertos.classList.add('estadisticas')
    aciertos.innerHTML = 'Aciertos: 0'
    // Errores
    const errores = document.createElement('h3')
    errores.id = 'errores'
    errores.classList.add('estadisticas')
    errores.innerHTML = 'Errores: 0'
    // Tiempo
    const tiempo = document.createElement('h3')
    tiempo.id = 'tiempo'
    tiempo.classList.add('estadisticas')
    tiempo.innerHTML = 'Tiempo: 0 segundos'
    // Movimientos
    const movimientos = document.createElement('h3')
    movimientos.id = 'movimientos'
    movimientos.classList.add('estadisticas')
    movimientos.innerHTML = 'Movimientos: 0'

    // Insertar las estadisticas en el contenedorJuego
    contenedorJuego.appendChild(titulo)
    contenedorJuego.appendChild(aciertos)
    contenedorJuego.appendChild(errores)
    contenedorJuego.appendChild(tiempo)
    contenedorJuego.appendChild(movimientos)
}

generarEstadisticas()

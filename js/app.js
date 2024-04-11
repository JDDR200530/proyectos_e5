// variables
let numeros = []

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

// Generar los numeros
for(let i=0; i<8; i++){
    numeros.push(i)
    numeros.push(i)
}

// Desordenar los numeros
numeros = numeros.sort(()=>{
    return Math.random()-0.5
})

console.log(numeros);

// Generar tablero
const tablero = document.createElement('div')
tablero.classList.add('tablero')
contenedorJuego.appendChild(tablero)
generarBotones()

// Generar los botones
function generarBotones(){
    for(let i=0; i<16; i++){
        const botones = document.createElement('button')
        botones.id = i
        tablero.appendChild(botones)
    }
}
// variables
let numeros = []
let cartasReveladas = 0
let carta1
let carta2
let primerValor
let segundoValor
let contadorMovimientos = 0
let contadorAciertos = 0
let contadorErrores = 0
let contadorTiempo = 0
let temporizador = false
let detenerTiempo

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
        botones.setAttribute('onclick', `revelar(${botones.id})`)
        tablero.appendChild(botones)
    }
}

function revelar(id){
    // Iniciar a contar el tiempo
    if(temporizador === false){
        iniciarTiempo()
        temporizador = true
    }

    cartasReveladas++

    // Ver si ya se levantaron cartas
    if(cartasReveladas === 1){
        carta1 = document.getElementById(id)
        primerValor = numeros[id]
        carta1.innerHTML = primerValor
        carta1.disabled = true
        carta1.classList.add('mostrar')
    }else if(cartasReveladas === 2){
        carta2 = document.getElementById(id)
        segundoValor = numeros[id]
        carta2.innerHTML = segundoValor
        carta2.disabled = true
        carta2.classList.add('mostrar')

        // Aumentar movimientos
        contadorMovimientos++
        movimientos.innerHTML = `Movimientos: ${contadorMovimientos}`

        // Ver si ambas cartas son iguales o no
        if(primerValor === segundoValor){
            cartasReveladas = 0
            contadorAciertos++
            aciertos.innerHTML = `Aciertos: ${contadorAciertos}`
        }else{
            setTimeout(() => {
                carta1.innerHTML = ' '
                carta2.innerHTML = ' '
                carta1.disabled = false
                carta2.disabled = false
                carta1.classList.remove('mostrar')
                carta2.classList.remove('mostrar')
                cartasReveladas = 0
            }, 700)
            contadorErrores++
            errores.innerHTML = `Errores: ${contadorErrores}`
        }
    }
}

function iniciarTiempo(){
    detenerTiempo = setInterval(()=>{
        contadorTiempo++
        tiempo.innerHTML = `Tiempo: ${contadorTiempo} segundos`
        if(contadorAciertos === 8){
            clearInterval(detenerTiempo)
        }
    }, 1000)
}
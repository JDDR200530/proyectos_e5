// Variables
let numeros = JSON.parse(localStorage.getItem('numeros')) || {};
let cartasReveladas = 0;
let carta1;
let carta2;
let primerValor;
let segundoValor;
let contadorMovimientos = 0;
let contadorAciertos = 0;
let contadorErrores = 0;
let contadorTiempo = 0;
let temporizador = false;
let detenerTiempo;
let tamanioPorPerfil = JSON.parse(localStorage.getItem('tamanioPorPerfil')) || {};
let dificultad = parseInt(localStorage.getItem('dificultad')) || 1;
let perfilActivo = localStorage.getItem('perfilActivo');
let tamanio = tamanioPorPerfil[perfilActivo] || '';
let estadoPartida = localStorage.getItem('partidaTerminada');
let cartasEncontradas = JSON.parse(localStorage.getItem('cartasEncontradas')) || {};

// Verificar que haya un perfil activo
if (!perfilActivo) {
    window.location.href = 'index.html';
} else {
    // Crear contenedor del juego
    const contenedorJuego = document.createElement('div');
    contenedorJuego.classList.add('juego');
    const contenedor = document.querySelector('.contenedor');
    contenedor.appendChild(contenedorJuego);

    // Generar estadísticas
    function generarEstadisticas() {
        // Título del juego
        const titulo = document.createElement('h1');
        titulo.innerHTML = 'Memorama';
        // Aciertos
        const aciertos = document.createElement('h3');
        aciertos.id = 'aciertos';
        aciertos.classList.add('estadisticas');
        aciertos.innerHTML = 'Aciertos: 0';
        // Errores
        const errores = document.createElement('h3');
        errores.id = 'errores';
        errores.classList.add('estadisticas');
        errores.innerHTML = 'Errores: 0';
        // Tiempo
        const tiempo = document.createElement('h3');
        tiempo.id = 'tiempo';
        tiempo.classList.add('estadisticas');
        tiempo.innerHTML = 'Tiempo: 0 segundos';
        // Movimientos
        const movimientos = document.createElement('h3');
        movimientos.id = 'movimientos';
        movimientos.classList.add('estadisticas');
        movimientos.innerHTML = 'Movimientos: 0';

        // Insertar las estadisticas en el contenedorJuego
        contenedorJuego.appendChild(titulo);
        contenedorJuego.appendChild(aciertos);
        contenedorJuego.appendChild(errores);
        contenedorJuego.appendChild(tiempo);
        contenedorJuego.appendChild(movimientos);
    }

    generarEstadisticas();

    // Para las dificultades 
    if (!numeros[perfilActivo] && !tamanio) {
        switch (dificultad) {
            case 1:
                // 4 x 4
                numeros[perfilActivo] = [];
                for (let i = 0; i < 8; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x4';
                break;
            case 2:
                // 4 x 6
                numeros[perfilActivo] = [];
                for (let i = 0; i < 12; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x6';
                break;
            case 3:
                // 4 x 8
                numeros[perfilActivo] = [];
                for (let i = 0; i < 16; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x8';
                break;
        }

        // Desordenar los numeros
        numeros[perfilActivo] = numeros[perfilActivo].sort(() => {
            return Math.random() - 0.5;
        });

        // Guardar el tamaño asociado al perfil en el localStorage
        tamanioPorPerfil[perfilActivo] = tamanio;
        localStorage.setItem('tamanioPorPerfil', JSON.stringify(tamanioPorPerfil));
    } else if (estadoPartida === 'true') {
        numeros[perfilActivo] = [];
        localStorage.setItem('numeros', JSON.stringify(numeros));
        tamanio = '';
        localStorage.setItem('tamanio', tamanio);

        // Generar un nuevo arreglo de numeros segun la dificultad seleccionada
        switch (dificultad) {
            case 1:
                // 4 x 4
                for (let i = 0; i < 8; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x4';
                break;
            case 2:
                // 4 x 6
                for (let i = 0; i < 12; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x6';
                break;
            case 3:
                // 4 x 8
                for (let i = 0; i < 16; i++) {
                    numeros[perfilActivo].push(i);
                    numeros[perfilActivo].push(i);
                }
                tamanio = 'op4x8';
                break;
        }

        // Desordenar los numeros
        numeros[perfilActivo] = numeros[perfilActivo].sort(() => {
            return Math.random() - 0.5;
        });

        // Guardar el nuevo arreglo y tamaño en el localStorage
        localStorage.setItem('numeros', JSON.stringify(numeros));
        tamanioPorPerfil[perfilActivo] = tamanio;
        localStorage.setItem('tamanioPorPerfil', JSON.stringify(tamanioPorPerfil));

        // Reiniciar el estado de la partida
        localStorage.setItem('partidaTerminada', 'false');
    }

    // Generar tablero con su tamaño
    const tablero = document.createElement('div');
    tablero.classList.add('tablero', tamanio);
    contenedorJuego.appendChild(tablero);
    generarBotones();

    // Generar los botones
    function generarBotones() {
        for (let i = 0; i < numeros[perfilActivo].length; i++) {
            const botones = document.createElement('button');
            botones.id = i;
            botones.setAttribute('onclick', `revelar(${botones.id})`);
            tablero.appendChild(botones);

            // Comprobar si la carta se encontro como par en partida
            if (cartasEncontradas[perfilActivo] && cartasEncontradas[perfilActivo].includes(numeros[perfilActivo][i])) {
                botones.innerHTML = numeros[perfilActivo][i];
                botones.disabled = true;
                botones.classList.add('mostrar');
            }
        }
    }

    // Verificar si hay un juego en progreso almacenado en el localStorage
    const juegoEnProgreso = localStorage.getItem('juegoEnProgreso');

    if (juegoEnProgreso) {
        // Cargar el estado del juego desde el localStorage
        const claveEstadoJuego = "estadoJuego_" + perfilActivo;
        if (localStorage.getItem(claveEstadoJuego)) {
            const estadoJuego = JSON.parse(localStorage.getItem(claveEstadoJuego));
            // Restaurar las variables del juego
            contadorMovimientos = estadoJuego.contadorMovimientos;
            contadorAciertos = estadoJuego.contadorAciertos;
            contadorErrores = estadoJuego.contadorErrores;
            contadorTiempo = estadoJuego.contadorTiempo;
            temporizador = estadoJuego.temporizador;

            // Actualizar las estadisticas en el HTML
            document.getElementById('aciertos').innerHTML = `Aciertos: ${contadorAciertos}`;
            document.getElementById('errores').innerHTML = `Errores: ${contadorErrores}`;
            document.getElementById('movimientos').innerHTML = `Movimientos: ${contadorMovimientos}`;
            document.getElementById('tiempo').innerHTML = `Tiempo: ${contadorTiempo} segundos`;

            // Continuar el temporizador si el juego esta en progreso
            if (temporizador) {
                iniciarTiempo();
            }
        }
    }

    // Funcion para guardar el estado del juego actual en el localStorage asociado al perfil activo
    function guardarEstadoJuego() {
        const claveEstadoJuego = "estadoJuego_" + perfilActivo;
        if (contadorAciertos === numeros[perfilActivo].length / 2) {
            const estadoLimpio = {
                contadorMovimientos: 0,
                contadorAciertos: 0,
                contadorErrores: 0,
                contadorTiempo: 0,
                temporizador: false,
            };
            localStorage.setItem(claveEstadoJuego, JSON.stringify(estadoLimpio));
            return;
        }
        const estadoJuego = {
            contadorMovimientos,
            contadorAciertos,
            contadorErrores,
            contadorTiempo,
            temporizador,
            tamanio: tamanioPorPerfil[perfilActivo]
        };

        localStorage.setItem(claveEstadoJuego, JSON.stringify(estadoJuego));
        localStorage.setItem('juegoEnProgreso', 'true');
    }

    window.addEventListener('beforeunload', guardarEstadoJuego);

    function revelar(id) {
        // Verificar si la carta ya fue encontrada anteriormente
        if (cartasEncontradas[perfilActivo] && cartasEncontradas[perfilActivo].includes(numeros[perfilActivo][id])) {
            return;
        }

        // Iniciar a contar el tiempo
        if (temporizador === false) {
            iniciarTiempo();
            temporizador = true;
        }

        cartasReveladas++;

        // Ver si ya se levantaron cartas
        if (cartasReveladas === 1) {
            carta1 = document.getElementById(id);
            primerValor = numeros[perfilActivo][id];
            carta1.innerHTML = primerValor;
            carta1.disabled = true;
            carta1.classList.add('mostrar');
        } else if (cartasReveladas === 2) {
            carta2 = document.getElementById(id);
            segundoValor = numeros[perfilActivo][id];
            carta2.innerHTML = segundoValor;
            carta2.disabled = true;
            carta2.classList.add('mostrar');

            // Aumentar movimientos
            contadorMovimientos++;
            movimientos.innerHTML = `Movimientos: ${contadorMovimientos}`;

            // Ver si ambas cartas son iguales o no
            if (primerValor === segundoValor) {
                cartasReveladas = 0;
                contadorAciertos++;
                aciertos.innerHTML = `Aciertos: ${contadorAciertos}`;
                if (!cartasEncontradas[perfilActivo]) {
                    cartasEncontradas[perfilActivo] = [];
                }
                cartasEncontradas[perfilActivo].push(primerValor);
                cartasEncontradas[perfilActivo].push(segundoValor);
                localStorage.setItem('cartasEncontradas', JSON.stringify(cartasEncontradas));
            } else {
                setTimeout(() => {
                    carta1.innerHTML = ' ';
                    carta2.innerHTML = ' ';
                    carta1.disabled = false;
                    carta2.disabled = false;
                    carta1.classList.remove('mostrar');
                    carta2.classList.remove('mostrar');
                    cartasReveladas = 0;
                }, 700);
                contadorErrores++;
                errores.innerHTML = `Errores: ${contadorErrores}`;
            }
        }
    }

    function iniciarTiempo() {
        detenerTiempo = setInterval(() => {
            contadorTiempo++
            tiempo.innerHTML = `Tiempo: ${contadorTiempo} segundos`
            if (contadorAciertos === numeros[perfilActivo].length / 2) {
                clearInterval(detenerTiempo)
                finJuego()
                localStorage.setItem('partidaTerminada', 'true');
            }
        }, 1000)
    }

    // Imprimir las estadisticas
    function finJuego() {
        contenedor.innerHTML = '';
        const contenedorDerrota = document.createElement('div');
        const mensajeFinal = document.createElement('h2');
        mensajeFinal.textContent = 'Fin del juego';
        mensajeFinal.classList.add('mensaje-final');
        contenedorDerrota.appendChild(mensajeFinal);

        const tablaEstadisticas = document.createElement('table');
        tablaEstadisticas.id = 'tabla-estadisticas';
        tablaEstadisticas.innerHTML = `
            <tr>
                <th>Estadística</th>
                <th>Dato</th>
            </tr>
            <tr>
                <td>Movimientos</td>
                <td>${contadorMovimientos}</td>
            </tr>
            <tr>
                <td>Aciertos</td>
                <td>${contadorAciertos}</td>
            </tr>
            <tr>
                <td>Errores</td>
                <td>${contadorErrores}</td>
            </tr>
            <tr>
                <td>Tiempo</td>
                <td>${contadorTiempo} segundos</td>
            </tr>
        `;
        contenedorDerrota.appendChild(tablaEstadisticas);

        const btnReiniciar = document.createElement('button');
        btnReiniciar.classList.add('btn-reiniciar');
        btnReiniciar.textContent = 'Volver a jugar';
        contenedorDerrota.appendChild(btnReiniciar);
        const btnVolverMemoria = document.createElement('button')
        btnVolverMemoria.classList.add('btn-reiniciar')
        btnVolverMemoria.textContent = 'Volver al menú'
        contenedorDerrota.appendChild(btnVolverMemoria)
        contenedorDerrota.classList.add('contenedor-derrota')
        contenedor.appendChild(contenedorDerrota);

        actualizarYGuardarEstadisticasLS();

        // Limpiar las cartas encontradas del perfil activo en el localStorage
        if (cartasEncontradas[perfilActivo]) {
            delete cartasEncontradas[perfilActivo];
            localStorage.setItem('cartasEncontradas', JSON.stringify(cartasEncontradas));
        }

        // Volver a jugar
        btnReiniciar.addEventListener('click', e => {
            // Limpiar el estado del juego del perfil activo
            const claveEstadoJuego = "estadoJuego_" + perfilActivo;
            localStorage.setItem(claveEstadoJuego, JSON.stringify({}));

            window.location.href = 'memoria.html'
        })

        // Volver al menu
        btnVolverMemoria.addEventListener('click', e => {
            window.location.href = 'menuMemorama.html'
        })

        const claveEstadoJuego = "estadoJuego_" + perfilActivo;
        localStorage.setItem(claveEstadoJuego, JSON.stringify({}));
    }

    // Actualizar y guardar estadisticas en el localStorage
    function actualizarYGuardarEstadisticasLS() {
        let estadisticasGuardadas = JSON.parse(localStorage.getItem('estadisticas')) || {}; 

        // Verifica si ya hay estadisticas para el jugador actual
        if (estadisticasGuardadas[perfilActivo] !== undefined) {
            // Si ya hay estadisticas para el jugador, agregams un nuevo juego con sus estadisticas
            estadisticasGuardadas[perfilActivo].push({
                aciertos: contadorAciertos,
                errores: contadorErrores,
                movimientos: contadorMovimientos,
                tiempo: contadorTiempo
            });
        } else {
            // Si no hay estadisticas para el jugador, creamos un nuevo arreglo con un juego inicial
            estadisticasGuardadas[perfilActivo] = [{
                aciertos: contadorAciertos,
                errores: contadorErrores,
                movimientos: contadorMovimientos,
                tiempo: contadorTiempo
            }];
        }

        if (contadorAciertos === numeros[perfilActivo].length / 2) {
            localStorage.setItem('estadisticas', JSON.stringify(estadisticasGuardadas));
        }
    }
}

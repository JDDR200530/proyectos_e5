// Variables
let indicePregunta;
let preguntasSeleccionadas = JSON.parse(localStorage.getItem('preguntasSeleccionadas')) || [];
let puntuacion = 0;
let tiempo;
let temporizador;
let dificultad = parseInt(localStorage.getItem('dificultadPreguntas')) || 1;
let estadoPartidaPreguntas = localStorage.getItem('partidaPreguntasTerminada');
const juegoPreguntasEnProgreso = localStorage.getItem('juegoPreguntasEnProgreso');
let temporizadorIniciado = localStorage.getItem('temporizadorIniciado');
let eliminacionesRealizadas = parseInt(localStorage.getItem('eliminacionesRealizadas')) || 0;

// Verificar que tenga un perfil activo
let perfilActivo = localStorage.getItem('perfilActivo');
if (!perfilActivo) {
    window.location.href = 'index.html';
} else {
    // Crear contenedores del juego
    const contenedorEstadisticas = document.createElement('div');
    contenedorEstadisticas.classList.add('estadisticas');
    const txtPuntuacion = document.createElement('h5');
    const txtTiempo = document.createElement('h5');
    const contenedor = document.querySelector('.contenedor');
    const contenedorPregunta = document.createElement('div');
    contenedorPregunta.classList.add('pregunta');
    const tituloPregunta = document.createElement('h3');
    txtPuntuacion.textContent = `Puntuación ${puntuacion} pts`;
    contenedor.appendChild(contenedorEstadisticas);
    contenedorEstadisticas.appendChild(txtPuntuacion);
    contenedorEstadisticas.appendChild(txtTiempo);
    contenedor.appendChild(contenedorPregunta);
    contenedorPregunta.appendChild(tituloPregunta);

    // Crear contenedores de las respuestas
    const contenedorRespuestas = document.createElement('div');
    contenedorRespuestas.classList.add('respuestas');
    for (let i = 0; i < 4; i++) {
        const botonesRespuestas = document.createElement('div');
        botonesRespuestas.classList.add('respuesta');
        botonesRespuestas.id = 'respuesta' + (i + 1);
        contenedorRespuestas.appendChild(botonesRespuestas);
    }
    contenedor.appendChild(contenedorRespuestas);

    // Seleccionar preguntas al azar
    function preguntaAzar() {
        do {
            indicePregunta = Math.floor(Math.random() * preguntasMomentaneas.length);
        } while (preguntasSeleccionadas.includes(indicePregunta));

        preguntasSeleccionadas.push(indicePregunta);

        localStorage.setItem('preguntasSeleccionadas', JSON.stringify(preguntasSeleccionadas));
        if (preguntasSeleccionadas.length === 15) {
            finJuego();
            localStorage.setItem('partidaPreguntasTerminada', 'true');
        }
    }

    if (juegoPreguntasEnProgreso) {
        // Cargar el estado del juego desde el localStorage
        const estadoJuegoPreguntas = JSON.parse(localStorage.getItem('estadoJuegoPreguntas'));
        // Restaurar las variables del juego
        puntuacion = estadoJuegoPreguntas.puntuacion;
        tiempo = estadoJuegoPreguntas.tiempo;
        temporizador = estadoJuegoPreguntas.temporizador;

        // Actualizar las estadisticas en el HTML
        txtPuntuacion.innerHTML = `Puntuación: ${puntuacion} pts`;
        txtTiempo.innerHTML = `Tiempo: ${tiempo} segundos`;

        // Continuar el temporizador si el juego esta en progreso
        if (temporizador) {
            iniciarTemporizador();
        }
    }

    function guardarEstadoJuego() {
        let estadoJuegoPreguntas;
    
        if (dificultad === 1) {
            estadoJuegoPreguntas = {
                puntuacion,
                tiempo,
                temporizador,
            };
        } else {
            estadoJuegoPreguntas = {
                puntuacion,
                tiempo,
            };
        }
    
        localStorage.setItem('estadoJuegoPreguntas', JSON.stringify(estadoJuegoPreguntas));
        localStorage.setItem('juegoPreguntasEnProgreso', 'true');
    }

    window.addEventListener('beforeunload', guardarEstadoJuego);

    // Mostrar el contenido
    function mostrarContenido() {
        preguntaAzar();
        // Mostrar las preguntas
        const preguntaActual = preguntasMomentaneas[indicePregunta];
        tituloPregunta.textContent = preguntaActual.pregunta;
        // Mostrar las opciones
        const opciones = document.querySelectorAll('.respuesta');
        opciones.forEach((opcion, indice) => {
            opcion.textContent = preguntaActual.opciones[indice];
        });
    }

    mostrarContenido();

    function verificarRespuesta(opcionSeleccionada) {
        const preguntaActual = preguntasMomentaneas[indicePregunta];
        if (opcionSeleccionada === preguntaActual.respuesta) {
            puntuacion += 5;
            txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`;
            mostrarContenido();
        } else {
            puntuacion -= 5;
            txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`;
            mostrarContenido();
        }
    }

    const opciones = document.querySelectorAll('.respuesta');

    function iniciarTemporizador() {
    txtTiempo.textContent = `Tiempo: ${tiempo} segundos`;
    temporizador = setInterval(() => {
        tiempo--
        txtTiempo.textContent = `Tiempo: ${tiempo} segundos`;
        if (tiempo === 0) { 
            clearInterval(temporizador);
            finJuego();
            localStorage.setItem('partidaPreguntasTerminada', 'true');
        } 
    }, 1000);
}

    switch (dificultad) {
        case 1:
            opciones.forEach(opcion => {
                opcion.addEventListener('click', e => {
                    const opcionSeleccionada = opcion.textContent;
                    verificarRespuesta(opcionSeleccionada);
                    clearInterval(temporizador); 
                    tiempo = 15;
                    iniciarTemporizador();
                });
            });
            
            // Boton para eliminar respuestas incorrectas
            const btnEliminar = document.createElement('button');
            btnEliminar.id = 'btn-eliminar';
            btnEliminar.classList.add('btn-reiniciar')
            btnEliminar.textContent = 'Eliminar 2 respuestas incorrectas';
            contenedor.appendChild(btnEliminar);
            
            btnEliminar.addEventListener('click', eliminarRespuestasIncorrectas);
            
            // Ocultar el boton si se realizaron 3 eliminaciones
            if (eliminacionesRealizadas === 3) {
                btnEliminar.style.display = 'none';
            }
            
            break;
        case 2:
            temporizadorIniciado = localStorage.setItem('temporizadorIniciado', false);
            opciones.forEach(opcion => {
                opcion.addEventListener('click', e => {
                    const opcionSeleccionada = opcion.textContent;
                    verificarRespuesta(opcionSeleccionada);
                });
            });
            if (!temporizadorIniciado) {
                iniciarTemporizador();
                temporizadorIniciado = localStorage.setItem('temporizadorIniciado', true);
            }
            break;
    }

    function finJuego() {
        contenedor.innerHTML = '';
        const contenedorDerrota = document.createElement('div');
        const MensajeFinal = document.createElement('h2');
        MensajeFinal.textContent = 'Fin del juego';
        MensajeFinal.classList.add('mensaje-final');
        contenedorDerrota.appendChild(MensajeFinal);
        
        const tablaEstadisticas = document.createElement('table');
        tablaEstadisticas.id = 'tabla-estadisticas';
        tablaEstadisticas.innerHTML = `
            <tr>
                <th>Estadística</th>
                <th>Dato</th>
            </tr>
            <tr>
                <td>Puntuación</td>
                <td>${puntuacion}</td>
            </tr>
        `;
        contenedorDerrota.appendChild(tablaEstadisticas);

        const btnVolverMenu = document.createElement('button');
        btnVolverMenu.classList.add('btn-reiniciar');
        btnVolverMenu.textContent = 'Volver al menu';
        contenedorDerrota.appendChild(btnVolverMenu);
        contenedor.appendChild(contenedorDerrota);

        actualizarYGuardarEstadisticasLS();
        reiniciarJuego()
        // Volver al menu
        btnVolverMenu.addEventListener('click', e => {
            window.location.href = 'menuPreguntas.html';
        });

        localStorage.setItem('preguntasSeleccionadas', JSON.stringify([]));
    }

    function reiniciarJuego() {
        puntuacion = 0;
        tiempo = 15;
        txtPuntuacion.textContent = `Puntuación: ${puntuacion} pts`;
        txtTiempo.textContent = `Tiempo: ${tiempo} segundos`;
    }

    // Opcion para eliminar dos respuestas incorrectas

    function eliminarRespuestasIncorrectas() {
        const preguntaActual = preguntasMomentaneas[indicePregunta];
        const opciones = document.querySelectorAll('.respuesta');

        let respuestasCorrectas = [];
        let respuestasIncorrectas = [];

        // Separar las respuestas correctas de las incorrectas
        opciones.forEach((opcion, indice) => {
            if (opcion.textContent === preguntaActual.respuesta) {
                respuestasCorrectas.push(indice);
            } else {
                respuestasIncorrectas.push(indice);
            }
        });

        // Eliminar dos respuestas incorrectas al azar
        for (let i = 0; i < 2; i++) {
            const indiceEliminar = respuestasIncorrectas[Math.floor(Math.random() * respuestasIncorrectas.length)];
            opciones[indiceEliminar].textContent = '';
            opciones[indiceEliminar].classList.add('eliminada');
            respuestasIncorrectas = respuestasIncorrectas.filter(indice => indice !== indiceEliminar);
        }

        // Incrementar el contador de eliminaciones realizadas
        if(eliminacionesRealizadas !==3){
            eliminacionesRealizadas++;
        }
        
        // Ocultar el boton si se realizaron 3 eliminaciones
        if (eliminacionesRealizadas === 3) {
            const btnEliminar = document.getElementById('btn-eliminar');
            btnEliminar.style.display = 'none';
        }
        localStorage.setItem('eliminacionesRealizadas', eliminacionesRealizadas);
    }

    // Actualizar y guardar estadisticas en el localStorage
    function actualizarYGuardarEstadisticasLS() {
        let estadisticasPreguntasGuardadas = JSON.parse(localStorage.getItem('estadisticasPreguntas')) || {};

        // Verifica si ya hay estadisticas para el jugador actual
        if (estadisticasPreguntasGuardadas[perfilActivo] !== undefined) {
            // Si ya hay estadisticas para el jugador, agregams un nuevo juego con sus estadisticas
            estadisticasPreguntasGuardadas[perfilActivo].push({
                puntuacion: puntuacion
            });
        } else {
            // Si no hay estadisticas para el jugador, creamos un nuevo arreglo con un juego inicial
            estadisticasPreguntasGuardadas[perfilActivo] = [{
                puntuacion: puntuacion
            }];
        }

        localStorage.setItem('estadisticasPreguntas', JSON.stringify(estadisticasPreguntasGuardadas));
    }
}

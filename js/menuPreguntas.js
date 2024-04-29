let preguntasSeleccionadas = JSON.parse(localStorage.getItem('preguntasSeleccionadas')) || [];
let perfilActivo = localStorage.getItem('perfilActivo');
let estadoPartidaPreguntas = localStorage.getItem('partidaPreguntasTerminada');
const juegoPreguntasEnProgreso = localStorage.getItem('juegoPreguntasEnProgreso');
let dificultad = parseInt(localStorage.getItem('dificultadPreguntas')) || 1;
let eliminacionesRealizadas = parseInt(localStorage.getItem('eliminacionesRealizadas')) || 0;

// Verificar que tenga un perfil activo
if(!perfilActivo){
    window.location.href = 'index.html'
}else{
    // Pa cuando cargue
    document.addEventListener('DOMContentLoaded', function() {
        localStorage.setItem('dificultad', '1');    
        obtenerDificultad.value = 'normal';
    });
    
    // Jugar
    const btnJugar = document.getElementById('btnJugar')
    btnJugar.addEventListener('click', e => {
        if(!estadoPartidaPreguntas){
            localStorage.setItem('partidaPreguntasTerminada', 'false');
            localStorage.setItem('juegoPreguntasEnProgreso', true)
            localStorage.setItem('estadoJuegoPreguntas', JSON.stringify({
                puntuacion: 0,
                tiempo: 15,
            }))
            window.location.href = 'preguntas.html'
            return
        }
        localStorage.setItem('preguntasSeleccionadas', JSON.stringify([]))
        localStorage.setItem('partidaPreguntasTerminada', 'true');
        localStorage.setItem('eliminacionesRealizadas', '');
        localStorage.setItem('estadoJuegoPreguntas', JSON.stringify({
            puntuacion: 0,
            tiempo: 15,
        }));
        window.location.href = 'preguntas.html'
    })

    // Estadisticas
    const btnEstadisticas = document.getElementById('btnEstadisticas')
    btnEstadisticas.addEventListener('click', e => {
        let estadisticasPreguntasGuardadas = JSON.parse(localStorage.getItem('estadisticasPreguntas'));
        if (estadisticasPreguntasGuardadas && estadisticasPreguntasGuardadas[perfilActivo] !== undefined) {
            let estadisticasPerfil = estadisticasPreguntasGuardadas[perfilActivo];
            const contenedor = document.querySelector('.contenedor');
            contenedor.innerHTML = '';   

            // Estadisticas de todos los perfiles
            const mensajeMejoresPuntajes = document.createElement('h2');
            mensajeMejoresPuntajes.textContent = `Mejor puntuación de cada perfil`;
            contenedor.appendChild(mensajeMejoresPuntajes);

            // Crear tabla de mejores puntajes de perfiles
            const tablaMejoresPuntajes = document.createElement('table');
            tablaMejoresPuntajes.id = 'tablaMejoresPuntajes';
            tablaMejoresPuntajes.innerHTML = `
                <tr>
                    <th>Perfil</th>
                    <th>Puntuación</th>
                </tr>
            `;
            contenedor.appendChild(tablaMejoresPuntajes);

            let mejoresPuntajes = {};

            // Iterar sobre todos los perfiles y sus estadísticas
            Object.keys(estadisticasPreguntasGuardadas).forEach(perfil => {
                let estadisticasPerfil = estadisticasPreguntasGuardadas[perfil];
                estadisticasPerfil.sort((a, b) => {
                    return b.puntuacion - a.puntuacion
                });
                let mejorPuntaje = estadisticasPerfil[0];

                // Almacenar el mejor puntaje del perfil en el objeto mejoresPuntajes
                mejoresPuntajes[perfil] = {
                    puntuacion: mejorPuntaje.puntuacion
                };
            });

            // Iterar sobre los mejores puntajes de cada perfil y mostrarlos en la tabla
            Object.keys(mejoresPuntajes).forEach(perfil => {
                let puntaje = mejoresPuntajes[perfil];
                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                    <td>${perfil}</td>
                    <td>${puntaje.puntuacion} pts</td>
                `;
                tablaMejoresPuntajes.appendChild(nuevaFila);
            });

            // Estadisticas del usuario
            const mensajePrincipal = document.createElement('h2');
            mensajePrincipal.textContent = `Puntuaciones de ${perfilActivo}`;
            contenedor.appendChild(mensajePrincipal);

            // Crear tabla de estadísticas
            const tablaMejoresEstadisticas = document.createElement('table');
            tablaMejoresEstadisticas.id = 'tablaMejoresEstadisticas';
            tablaMejoresEstadisticas.innerHTML = `
                <tr>
                    <th>Puntuaciones</th>
                </tr>
            `;
            contenedor.appendChild(tablaMejoresEstadisticas);

            // Iterar sobre todas las estadísticas del perfil
            estadisticasPerfil.forEach(estadistica => {
                let puntuacion = estadistica.puntuacion;

                // Crear una fila en la tabla para cada estadística
                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                    <td>${puntuacion} pts</td>
                `;
                tablaMejoresEstadisticas.appendChild(nuevaFila);
            });

            const btnVolverPreguntas = document.createElement('button');
            btnVolverPreguntas.classList.add('btn-reiniciar');
            btnVolverPreguntas.textContent = 'Volver al menú';
            contenedor.appendChild(btnVolverPreguntas);

            btnVolverPreguntas.addEventListener('click', e => {
                window.location.href = 'menuPreguntas.html';
            });
        }
        
    });

    // Cerrar sesion
    const btnCerrarSesion = document.getElementById('btnCerrarSesion')
    btnCerrarSesion.addEventListener('click', e => {
        localStorage.setItem('perfilActivo', '');
        perfilActivo = localStorage.getItem('perfilActivo');
        window.location.href = 'index.html'
    })
    
    // Volver atras
    const btnVolver = document.getElementById('btnVolver')
    btnVolver.addEventListener('click', e => {
        window.location.href = 'juegos.html'
    })

    // Obtener la dificultad
    const obtenerDificultad = document.getElementById('dificultad')
    obtenerDificultad.addEventListener('change', e => {
        if(obtenerDificultad.value === 'normal'){
           dificultad = 1
        }else{
           dificultad = 2
        }
        localStorage.setItem('dificultadPreguntas', dificultad);
    })
}
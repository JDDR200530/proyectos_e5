let perfilActivo = localStorage.getItem('perfilActivo');
let estadoPartida = localStorage.getItem('partidaTerminada');
let cartasEncontradas = JSON.parse(localStorage.getItem('cartasEncontradas')) || {};
const claveEstadoJuego = "estadoJuego_" + perfilActivo;
const estadoJuego = JSON.parse(localStorage.getItem(claveEstadoJuego));

// Verificar que tenga un perfil activo
if(!perfilActivo){
    window.location.href = 'index.html'
}else{
    // Pa cuando cargue
    document.addEventListener('DOMContentLoaded', function() {
        localStorage.setItem('dificultad', '1');    
        obtenerDificultad.value = 'facil';
    });
    
    // Jugar
    const btnJugar = document.getElementById('btnJugar')
    const btnReanudar = document.getElementById('btnReanudar')

    btnJugar.addEventListener('click', e => {
        if(!estadoPartida){    
            localStorage.setItem('partidaTerminada', 'false');
            window.location.href = 'memoria.html'
            return
        }
        
        localStorage.setItem(claveEstadoJuego, JSON.stringify({
            contadorMovimientos: 0,
            contadorAciertos: 0,
            contadorErrores: 0,
            contadorTiempo: 0,
            temporizador: false
        }));

        delete cartasEncontradas[perfilActivo];
        localStorage.setItem('cartasEncontradas', JSON.stringify(cartasEncontradas));
        localStorage.setItem('partidaTerminada', 'true');
        window.location.href = 'memoria.html'
    })
    
    btnReanudar.addEventListener('click', e => {
        localStorage.setItem('partidaTerminada', 'false');
        window.location.href = 'memoria.html'
    })
    
    // Estadisticas
    const btnEstadisticas = document.getElementById('btnEstadisticas')
    btnEstadisticas.addEventListener('click', e => {
        // Ver si hay estadísticas guardadas en el localStorage
        let estadisticasGuardadas = JSON.parse(localStorage.getItem('estadisticas'));

        if (estadisticasGuardadas && estadisticasGuardadas[perfilActivo] !== undefined) {
            let estadisticasPerfil = estadisticasGuardadas[perfilActivo];
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
                    <th>Movimientos</th>
                    <th>Aciertos</th>
                    <th>Errores</th>
                    <th>Tiempo</th>
                </tr>
            `;
            contenedor.appendChild(tablaMejoresPuntajes);

            let mejoresPuntajes = {};

            // Iterar sobre cada perfil en las estadísticas guardadas
            Object.keys(estadisticasGuardadas).forEach(perfil => {
                let estadisticasPerfil = estadisticasGuardadas[perfil];

                // va a tener el mejor puntaje
                let mejorPuntaje = estadisticasPerfil[0];

                // Iterar sobre las estadísticas del perfil para encontrar el mejor puntaje
                for (let i = 1; i < estadisticasPerfil.length; i++) {
                    let estadistica = estadisticasPerfil[i];

                    if (estadistica.movimientos < mejorPuntaje.movimientos ||
                        (estadistica.movimientos === mejorPuntaje.movimientos && estadistica.tiempo < mejorPuntaje.tiempo)) {
                        // Actualizar el mejor puntaje si se encuentra una estadística mejor
                        mejorPuntaje = estadistica;
                    }
                }

                // Almacenar el mejor puntaje del perfil en el objeto mejoresPuntajes
                mejoresPuntajes[perfil] = {
                    movimientos: mejorPuntaje.movimientos,
                    aciertos: mejorPuntaje.aciertos,
                    errores: mejorPuntaje.errores,
                    tiempo: mejorPuntaje.tiempo
                };
            });

            // Iterar sobre los mejores puntajes de cada perfil y mostrarlos en la tabla
            Object.keys(mejoresPuntajes).forEach(perfil => {
                let puntaje = mejoresPuntajes[perfil];
                // Crear una fila en la tabla para cada perfil
                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                    <td>${perfil}</td>
                    <td>${puntaje.movimientos}</td>
                    <td>${puntaje.aciertos}</td>
                    <td>${puntaje.errores}</td>
                    <td>${puntaje.tiempo} segundos</td>
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
                    <th>Movimientos</th>
                    <th>Aciertos</th>
                    <th>Errores</th>
                    <th>Tiempo</th>
                </tr>
            `;
            contenedor.appendChild(tablaMejoresEstadisticas);

            // Iterar sobre todas las estadísticas del perfil
            estadisticasPerfil.forEach(estadistica => {
                // Alamacenar estadisticas en variables auxiliares
                let movimiento = estadistica.movimientos;
                let acierto = estadistica.aciertos;
                let error = estadistica.errores;
                let time = estadistica.tiempo;

                // Crear una fila en la tabla para cada estadística
                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                    <td>${movimiento}</td>
                    <td>${acierto}</td>
                    <td>${error}</td>
                    <td>${time} segundos</td>
                `;
                tablaMejoresEstadisticas.appendChild(nuevaFila);
            });

            const btnVolverMemoria = document.createElement('button');
            btnVolverMemoria.classList.add('btn-reiniciar');
            btnVolverMemoria.textContent = 'Volver al menú';
            contenedor.appendChild(btnVolverMemoria);

            btnVolverMemoria.addEventListener('click', e => {
                window.location.href = 'menuMemorama.html';
            });
        } else {
            console.log('No se encontraron estadísticas para el perfil activo.');
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
    let dificultad
    const obtenerDificultad = document.getElementById('dificultad')
    obtenerDificultad.addEventListener('change', e => {
        if(obtenerDificultad.value === 'facil'){
           dificultad = 1
        }else if(obtenerDificultad.value === 'medio'){
           dificultad = 2
        }else {
            dificultad = 3
        }
        localStorage.setItem('dificultad', dificultad);
    })
}
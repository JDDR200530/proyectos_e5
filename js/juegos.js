// Verificar que tenga un perfil activo
let perfilActivo = localStorage.getItem('perfilActivo');
if(!perfilActivo){
    window.location.href = 'index.html'
}else{
    // Acceder a contenedor principal
    const contenedorPrincipal = document.querySelector('.contenedor')

    // Crear contenedor del titulo y su contenido
    const contenedorTitulo = document.createElement('div')
    contenedorTitulo.classList.add('titulo')
    const tituloContenedor = document.createElement('h1')
    tituloContenedor.innerHTML = 'Seleccione un juego'
    contenedorTitulo.appendChild(tituloContenedor)
    contenedorPrincipal.appendChild(contenedorTitulo)

    // Crear contenedor de juegos y su contenido
    const contenedorJuegos = document.createElement('div')
    contenedorJuegos.classList.add('juegos')

    for(let i=0; i<2; i++){
        const contenedorJuego = document.createElement('div')
        contenedorJuego.classList.add('juego')
        const imagen = document.createElement('img')
        const subtitulo = document.createElement('h2')
        const botonJugar = document.createElement('button')
        botonJugar.id = 'btn'+(i+1)
        botonJugar.textContent = 'Jugar'
        if(i === 0){
            imagen.setAttribute('src', 'recursos/img/img1.png')
            subtitulo.innerHTML = 'Preguntas'
        }else{
            imagen.setAttribute('src', 'recursos/img/img2.png')
            subtitulo.innerHTML = 'Memorama'
        }
        contenedorJuego.appendChild(imagen)
        contenedorJuego.appendChild(subtitulo)
        contenedorJuego.appendChild(botonJugar)
        contenedorJuegos.appendChild(contenedorJuego)

        botonJugar.addEventListener('click', function() {
            if (botonJugar.id === 'btn1') {
                window.location.href = 'menuPreguntas.html';
            } else {
                window.location.href = 'menuMemorama.html';
            }
        })
    }

    contenedorPrincipal.appendChild(contenedorJuegos)
}
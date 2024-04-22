// Validar el inicio de sesion

const txtInicioSesion = document.getElementById('txtInicioSesion')
const btnInicioSesion = document.getElementById('btnInicioSesion')
let perfiles = JSON.parse(localStorage.getItem('perfiles')) || [];

txtInicioSesion.setAttribute('autocomplete', 'off')

txtInicioSesion.addEventListener('focus', e => {
    if (txtInicioSesion.value === 'Nombre del perfil') {
        txtInicioSesion.value = '';
    }
})

txtInicioSesion.addEventListener('blur', e => {
    if (txtInicioSesion.value === '') {
        txtInicioSesion.value = 'Nombre del perfil';
    }
})

btnInicioSesion.addEventListener('click', e => {
    e.preventDefault()
    const inicioPerfil = txtInicioSesion.value.trim()
    if(inicioPerfil === '' || inicioPerfil === 'Nombre del perfil'){
        alert('Ingrese un perfil!')
        txtInicioSesion.value = 'Nombre del perfil';
        return
    }

    if(!(perfiles.includes(inicioPerfil))){
        alert(`El perfil ${inicioPerfil} no existe`);
        txtInicioSesion.value = 'Nombre del perfil';
        return
    }
    
    window.location.href = 'juegos.html'
    txtInicioSesion.value = 'Nombre del perfil';
})
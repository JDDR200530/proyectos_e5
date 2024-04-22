// Validar el registro

const inputRegistro = document.getElementById('txtRegistro')
const btnRegistro = document.getElementById('btnRegistro')
let perfiles = JSON.parse(localStorage.getItem('perfiles')) || [];

inputRegistro.setAttribute('autocomplete', 'off')

inputRegistro.addEventListener('focus', e => {
    if (inputRegistro.value === 'Nombre del perfil') {
        inputRegistro.value = '';
    }
})

inputRegistro.addEventListener('blur', e => {
    if (inputRegistro.value === '') {
        inputRegistro.value = 'Nombre del perfil';
    }
})

btnRegistro.addEventListener('click', e => {
    e.preventDefault()
    const nuevoPerfil = inputRegistro.value.trim()
    if(nuevoPerfil === '' || nuevoPerfil === 'Nombre del perfil'){
        alert('Debe ingresar un nombre para su perfil!')
        inputRegistro.value = 'Nombre del perfil';
        return
    }else if(nuevoPerfil.includes(' ')){
        alert('No se permiten espacios');
        inputRegistro.value = 'Nombre del perfil';
        return
    }

    if(perfiles.includes(nuevoPerfil)){
        alert(`El perfil ${nuevoPerfil} ya existe`);
        inputRegistro.value = 'Nombre del perfil';
        return
    }

    perfiles.push(nuevoPerfil)
    localStorage.setItem('perfiles', JSON.stringify(perfiles));
    
    alert(`El perfil ${nuevoPerfil} se ha creado con exito`)
    inputRegistro.value = 'Nombre del perfil';
})
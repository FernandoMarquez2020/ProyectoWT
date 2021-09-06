// slider-slick----------------
$(document).ready(function() {
    $('.slider').slick({
        arrows: true
    });
});

// select dep-local------------

function loadSelects() {
    let departamento = document.getElementById('departamento');
    let depData = Object.keys(dptosLocs);
    for (let index = 0; index < depData.length; index++) {
        const element = depData[index];
        
        let option = `<option>${element}</option>`
        departamento.innerHTML += option;
    }

    departamento.addEventListener('change', function(e) {
        let localidad = document.getElementById('localidad');
        localidad.innerHTML = "";
        let localidades = dptosLocs[e.target.value];
        for (let index = 0; index < localidades.length; index++) {
            const element = localidades[index];
            let option = `<option>${element}</option>`
            localidad.innerHTML += option;
        }
    })


}
loadSelects();
// validacion cedula-----------
function validForm(formData) {
    let result = true
    if (validarCedula(formData.get('cedula'))) {
        result = true;
    } else {
        let nombre = document.getElementById('cedula');
        cedula.style.border = '1px solid red';
    }
    if (formData.get('cedula').length != 0) {
        result = true;
    } else {
        let cedula = document.getElementById('cedula');
        cedula.style.border = '1px solid red';
        cedulaError.style.display = 'block';
        cedulaError.style.color = 'red';
    }
// val.nombre--------   
    if (formData.get('nombre').length >= 2) {
        result = true;
    } else {
        let nombre = document.getElementById('nombre');
        nombre.style.border = '1px solid red';
        nombreError.style.display = 'block';
        nombreError.style.color = 'red';
    }
// val.apellido------- 
    if (formData.get('apellido').length >= 2) {
        result = true;
    } else {
        let apellido = document.getElementById('apellido');
        apellido.style.border = '1px solid red';
    }
    if (formData.get('apellido').length >= 2) {
        result = true;
    } else {
        let apellidoError = document.getElementById('apellidoError');
        apellidoError.style.display = 'block';
        apellidoError.style.color = 'red';
    }
// val.mail-------
    if (validateEmail(formData.get('mail'))) {
        result = true;
    } else {
        let mail = document.getElementById('mail');
        mail.style.border = '1px solid red';

        mailError.style.display = 'block';
        mailError.style.color = 'red';
    }
    return false;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// boton guardar--------------------

var save = document.getElementById('save');
save.addEventListener('click', function(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre');
    let mail = document.getElementById('mail');
    let apellido = document.getElementById('apellido');
    let departamento = document.getElementById('departamento');
    let localidad = document.getElementById('localidad');
    let cedula = document.getElementById('cedula');
    let termino = document.getElementById('terminos');
    let saveForm = document.getElementById('saveForm');
    var formData = new FormData(saveForm);
    console.log(formData.get('nombre'))
    console.log(formData.get('apellido'))
    console.log(formData.get('mail'))
    console.log(formData.get('departamento'))
    console.log(formData.get('localidad'))
    console.log(formData.get('cedula'))

    if (validForm(formData)) {
        console.log("!!!!!ok")
    }

});


// borrado de input-----------------

document.getElementById('nombre').addEventListener('focus', function(e) {
    let apellidoError = document.getElementById('nombreError');
    nombreError.style.display = 'none';
    let nombre = document.getElementById('nombre');
    nombre.style.border = '';
});
document.getElementById('apellido').addEventListener('focus', function(e) {
    let apellidoError = document.getElementById('apellidoError');
    apellidoError.style.display = 'none';
    let apellido = document.getElementById('apellido');
    apellido.style.border = '';
});
document.getElementById('mail').addEventListener('focus', function(e) {
    let mailError = document.getElementById('mailError');
    mailError.style.display = 'none';
    let mail = document.getElementById('mail');
    mail.style.border = '';
});
document.getElementById('cedula').addEventListener('focus', function(e) {
    let cedulaError = document.getElementById('cedulaError');
    cedulaError.style.display = 'none';
    let cedula = document.getElementById('cedula');
    cedula.style.border = '';
});

// cards


//  formulario
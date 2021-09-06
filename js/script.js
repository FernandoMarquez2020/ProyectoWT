// slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: true
    });
});



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

function validForm(formData) {
    let result = true
    if (validarCedula(formData.get('cedula'))) {
        result = true;
    } else {
        //ajustar estilo para error
    }
    if (formData.get('nombre').length >= 2) {
        result = true;
    } else {
        let nombre = document.getElementById('nombre');
        nombre.style.border = '1px solid red';
    }
    if (formData.get('apellido').length >= 2) {
        result = true;
    } else {
        let apellidoError = document.getElementById('apellidoError');
        apellidoError.style.display = 'block';
        apellidoError.style.color = 'red';
    }
    if (validateEmail(formData.get('mail'))) {
        result = true;
    } else {
        let mail = document.getElementById('mail');
        mail.style.border = '1px solid red';
    }

    return false;
}

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

    if (validForm(formData)) {
        console.log("!!!!!ok")
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('nombre').addEventListener('focus', function(e) {
    let apellidoError = document.getElementById('apellidoError');
    apellidoError.style.display = 'none';
    let nombre = document.getElementById('nombre');
    nombre.style.border = '';
});

// cards


//  formulario
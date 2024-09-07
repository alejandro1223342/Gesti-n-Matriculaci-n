let estudiantes = [];

crearEstudiante = function () {
    let estudiante = {};
    let valorNombre = recuperarTexto("txtNombre");
    let valorCurso = recuperarTexto ("txtCurso");
    let valorMatricula = recuperarTexto ("txtMatricula");

    if (!(esAlfabetica(valorNombre))){
        alert ("No se permite numeros");
    }

    estudiante.nombre = valorNombre;
    estudiante.curso = valorCurso;
    estudiante.matricula = valorMatricula;

    return estudiante;
}

agregarEstudiante = function () {
    let estudiante = crearEstudiante();
    estudiantes.push(estudiante);
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtCurso","");
    mostrarTextoEnCaja("txtMatricula","");
    console.log(estudiantes);
}

refrescarEstudiante = function () {
    let cmpTabla = document.getElementById("tablaEstudiante");
    let contenidoTabla = 
        "<table class='table table-striped table-bordered'>" +
            "<thead>" +
                "<tr>" +
                    "<th>NOMBRE</th>" +
                    "<th>CURSO</th>" +
                    "<th>MATRICULA</th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>";
        
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        contenidoTabla += 
            "<tr>" +
                "<td>" + elementoEstudiante.nombre + "</td>" +
                "<td>" + elementoEstudiante.curso + "</td>" +
                "<td>" + elementoEstudiante.matricula + "</td>" +
            "</tr>"; 
    }
    contenidoTabla += "</tbody></table>"; 
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudiante = function (valorBusqueda) {
    valorBusqueda = recuperarTexto ("txtBuscar");
    if (!(esAlfabetica(valorBusqueda))){
        alert ("No se permite numeros");
        return;
    }
    let encotrado = false;
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++ ){
        elementoEstudiante = estudiantes[i];
        if(elementoEstudiante.nombre == valorBusqueda){
            encotrado = true;
            break;
        }
    }

    if (encotrado != false) {
        alert ("Estudiante encontrado");
    } else {
        alert ("Estudiante no encontrado");
    }

    return encotrado;
    
}

eliminarEstudiante = function () {
    let estudiante = recuperarTexto("txtEliminar");
    let encotrado = false;
    let elementoEstudiante;

    for (let i = 0; i < estudiantes.length; i++ ){
        elementoEstudiante = estudiantes[i];
        if(elementoEstudiante.nombre == estudiante){
            encotrado = elementoEstudiante;
            estudiantes.pop(encotrado);
            alert ("Estudiante Eliminado")
            break;
        }
    }

    
}


function esAlfabetica(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let valorChar = cadena.charCodeAt(i);

        if (!(valorChar >= 65 && valorChar <= 90) && 
            !(valorChar >= 97 && valorChar <= 122)) { 
            return false; 
        }
    }
    return true; 
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}
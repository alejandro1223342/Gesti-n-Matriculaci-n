const profesores = [];

const crearProfesor = () => {
    const profesor = {};
    let nombre = recuperarTexto('txtNombre');
    let edad = recuperarTexto('txtEdad');
    let email = recuperarTexto('txtEmail');

    profesor.nombre = nombre;
    profesor.edad = edad;
    profesor.email = email;

    return profesor;
}

const agregarProfesor = () => {
    let profesor = crearProfesor();
    profesores.push(profesor);
    console.log(profesores);
}


const refrescarProfesor = () => {
    let tabla = `<table>
            <tr>
                <th>NOMBRE</th>
                <th>EDAD</th>
                <th>EMAIL</th>
            </tr>`;

    for (let profesor of profesores) {
        tabla += '<tr>';
        tabla += `<td>${profesor.nombre}</td>`;
        tabla += `<td>${profesor.edad}</td>`;
        tabla += `<td>${profesor.email}</td>`;
        tabla += '</tr>';
    }
    tabla += '</table>';
    mostrarHtml('tablaProfesores', tabla);
}

const buscarProfesor = () => {
    const nombre = recuperarTexto('txtBuscar');
    let esEncontrado = false;
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].nombre == nombre) {
            alert('Profesor encontrado ' + nombre);
            esEncontrado = true;
            break;
        }
    }
    if (!esEncontrado) {
        alert('No se encontro el profesor.');
    }
}

const eliminarProfesor = () => {
    const nombre = recuperarTexto('txtBuscar');
    let esEliminado = false;
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].nombre == nombre) {
            profesores.splice(i, 1);
            alert('Se a eliminado el profesor ' + nombre);
            esEliminado = true;
            break;
        }
    }
    if (!esEliminado) {
        alert('No se elimino el profesor.');
    }
    refrescarProfesor();
}
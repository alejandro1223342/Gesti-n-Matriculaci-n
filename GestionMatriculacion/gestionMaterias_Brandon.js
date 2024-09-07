let materias = []
/**
 * txtNombreMateria
 * txtCodigo
 * txtDescripcion
 */

const crearMateria = () => {
    let materia = {}
    let nombreMateria = recuperarTexto("txtNombreMateria")
    let codigo = recuperarTexto("txtCodigo")
    let descripcion = recuperarTexto("txtDescripcion")
    materia.nombreMateria = nombreMateria;
    materia.codigo = codigo;
    materia.descripcion = descripcion;
    return materia
}

const agregarMateria = () => {
    let materia = crearMateria()
    materias.push(materia)
}

const refrescarMaterias = () => {
    let tabla = document.getElementById("mostrarTabla")

    let contenidoTabla = `
    <table>
        <tr>
            <th>
            NOMBRE
            </th>
            <th>
            CODIGO
            </th>
            <th>
            DESCRIPCION
            </th>
        </tr>
    `

    for (let i = 0; i < materias.length; i++) {
        const materia = materias[i];
        contenidoTabla += `
         <tr>
            <td>
            ${materia.nombreMateria}
            </td>
            <td>
            ${materia.codigo}
            </td>
            <td>
            ${materia.descripcion}
            </td>
        </tr>
        `
    }
    contenidoTabla += ` </table>`
    console.log(contenidoTabla);
    tabla.innerHTML = contenidoTabla
}
const buscarMateria = (codigo) => {
    let materiaEncontrada = null;
    let txtCodigo = recuperarTexto("txtBuscar")
    for (let i = 0; i < materias.length; i++) {
        const materia = materias[i];
        if (materia.codigo == txtCodigo || materia.codigo == codigo) {
            materiaEncontrada = materia
        }
    }
    if (materiaEncontrada != null) {
        alert("Materia encontrada")
    } else {
        alert("Materia no encontrada")
    }
    return
}

const eliminarMateria = () => {
    let materiasEncontradas = []
    let codigo = recuperarTexto("txtEliminar")
    for (let i = 0; i < materias.length; i++) {
        let materia = materias[i];
        if (materia.codigo != codigo) {
            materiasEncontradas.push(materia)
        }
    }
    materias = materiasEncontradas
}
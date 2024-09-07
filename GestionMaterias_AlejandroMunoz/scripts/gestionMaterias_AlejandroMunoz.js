materias = [];

crearMateria=function(){

    let nombreMateria;
    let ValorNombreMateria;
    nombreMateria=document.getElementById("txtNombreMateria");
    ValorNombreMateria=nombreMateria.value;

    let codigoMateria;
    let ValorCodigoMateria;
    codigoMateria=document.getElementById("txtCodigo");
    ValorCodigoMateria=codigoMateria.value;

    let descripcionMateria;
    let ValorDescripcionMateria;
    descripcionMateria=document.getElementById("txtDescripcion");
    ValorDescripcionMateria=descripcionMateria.value;

   materia={};
   materia.nombre=ValorNombreMateria;
   materia.codigo=ValorCodigoMateria;
   materia.descripcion=ValorDescripcionMateria;

   return materia;

}


agregarMateria = function(){


   let crearM= crearMateria();

   if (crearM!=null){

    materias.push(materia)    
   }

   console.log(materias)


}


refrescarMateria= function(){

        let cmpTabal = document.getElementById("tablaMaterias");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>CODIGO</th>" +
        "<th>DESCRIPCION</th>"
        + "</tr>";
    let elementoMateria;
    for (let i = 0; i < materias.length; i++) {
        elementoMateria = materias[i];
        contenidoTabla +=
            "<tr><td>" + elementoMateria.nombre + "</td>" +
            "<td>" + elementoMateria.codigo + "</td>"
            + "<td>" + elementoMateria.descripcion + "</td>"
            + "<tr>";
    }
    contenidoTabla += "</table>"
    cmpTabal.innerHTML = contenidoTabla;

    
}

buscarMateria = function(){

    
    let codigoMateria;
    let ValorBuscarCodigo;
    codigoMateria=document.getElementById("txtBuscar");
    ValorBuscarCodigo=codigoMateria.value;
    
   
    let componente;
    componente = document.getElementById("lblimg");
    

    let elementoMateria;
    let materiaEncontrado=null; // Agregar null
    for (let i = 0; i < materias.length; i++) {
        elementoMateria = materias[i];

        if (elementoMateria.codigo === ValorBuscarCodigo) {
            materiaEncontrado = elementoMateria;
            alert("Materia Encontrada")

            componente.src = "../img/ganador.gif";
            break;
        }else{
            componente.src="../img/colgado.png"
            alert("Materia No Encontrada")
        }
    }
   
}



function eliminarMateria() {
    let codigoMateria = document.getElementById("txtEliminar").value;
    
    let nuevasMaterias = [];
    let materiaEncontrada = false;

    for (let i = 0; i < materias.length; i++) {
        if (materias[i].codigo === codigoMateria) {
            materiaEncontrada = true;
            break; 
        }
        nuevasMaterias.push(materias[i]); 
    }
    
    if (materiaEncontrada) {
        materias = nuevasMaterias; 
        alert("Materia Eliminada");
    } else {
        alert("Materia No Encontrada");
    }

    refrescarMateria();
}



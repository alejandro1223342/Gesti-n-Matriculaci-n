mostrarImagen = function (idComponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};
mostrarTexto = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};
mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
};

recuperarTexto = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};

mostrarComponente = function (idComponente) {
  document.getElementById(idComponente).style.display = 'block';
};

ocultarComponente = function (idComponente) {
  document.getElementById(idComponente).style.display = 'none';
};

deshabilitarComponente = function (idComponente) {
  document.getElementById(idComponente).disabled = true;
};

habilitarComponente = function (idComponente) {
  document.getElementById(idComponente).disabled = false;
};

const mostrarHtml = (idComponente, html) => {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerHTML = html;
};

const esMayuscula = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (codigoCaracter >= 65 && codigoCaracter <= 90) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra es minúscula
 * @param {string} caracter
 * @returns {boolean} verificación de la letra minúscula (true, false)
 */
const esMinuscula = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (
    (codigoCaracter >= 97 && codigoCaracter <= 122) ||
    (codigoCaracter >= 160 && codigoCaracter <= 163) ||
    codigoCaracter === 130
  ) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra corresponde a un dígito
 * @param {string} caracter
 * @returns {boolean} verificación del dígito (true, false)
 */
const esDigito = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (codigoCaracter >= 48 && codigoCaracter <= 57) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra corresponde a un punto
 * @param {string} caracter
 * @returns {boolean} verificación del punto (true, false)
 */
const esPunto = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (codigoCaracter == 46) {
    return true;
  } else {
    return false;
  }
};

recuperarDiv = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.textContent;
  return valorIngresado;
};

recuperarIntDiv = function (idComponente) {
  let valorCaja = recuperarDiv(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloatDiv = function (idComponente) {
  let valorCaja = recuperarDiv(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};


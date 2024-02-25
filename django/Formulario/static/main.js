//capturar las variables
const ficha = document.getElementById("ficha")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
/*const genero = document.getElementsByName("genero")*/



//expresiones regulares
// let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando, no es global

//validar la ficha 
const validar = function () {
  let cod = /^[a-z]{3}_[0-9]{5}$/;
  let texto = ficha.value
  console.log(texto);

  if (texto.match(cod) != null) { // != siginifica desigualdad 
    alert("valido")               // y match devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
  } else {
    alert("invalido")
  }
}

ficha.addEventListener("blur", validar)

//validar nombre
const validarNombre = function () {
  let name = /^[A-Za-z ° ]+$/;
  let texto = nombre.value
  console.log(texto);

  if (texto.match(name) != null) {
    alert("valido")
  } else {
    alert("invalido")
  }
}

nombre.addEventListener("blur", validarNombre)

//validar apellido
const validarApellido = function () {
  let lastname = /^[A-Za-z ° ]+$/;
  let texto = apellido.value
  console.log(texto);

  if (texto.match(lastname) != null) {
    alert("valido")
  } else {
    alert("invalido")
  }
}

apellido.addEventListener("blur", validarApellido)

//validar correo 
const validarCorreo = function () {
  let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let texto = correo.value
  console.log(texto)

  if (texto.match(email) != null) {
    alert("valido")
  } else {
    alert("invalido")
  }
}

correo.addEventListener("blur", validarCorreo)

//validar telefono
const validarTelefono = function () {
  let tel = /^[0-9]{10}$/
  let texto = telefono.value
  console.log(texto)

  if (texto.match(tel) != null) {
    alert("valido")
  } else {
    alert("invalido")
  }
}

telefono.addEventListener("blur", validarTelefono)

//validar genero
function validarRadio() {
  const s = "no";
  for (const i = 0; i < document.getElementsByName.length; i++) {
    if (document.getElementsByName[i].checked) {
      alert("marco:" + document.getElementsByName[i].value);
      s = "si";
    }
  }
  if (s == "no"){
    alert("debe seleccionar un genero");
  }
}
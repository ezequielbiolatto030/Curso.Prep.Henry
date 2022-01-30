// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  var mayor = 0  ;
  if (x >= y){
    mayor = x;  
  } else{
    mayor = y;
  }
  return mayor;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var permiso = "";
  if (edad >= 18){
    permiso = 'Allowed';
  } else{
    permiso= 'Not allowed';
  }
  return permiso;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status ===1){
    return "Online";
  } else if (status === 2){
    return "Away";
  }
  else {
    return "Offline";
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === "aleman"){
      var saludo = "Guten Tag!";
    } else if (idioma === "mandarin"){
      var saludo = "Ni Hao!";
    }else if (idioma === "ingles"){
      var saludo = "Hello!";
    }else {
      var saludo = "Hola!";
    }
  return saludo;
  }


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var colorDevuelto = "";
  switch (color) {
    case "blue":
      colorDevuelto="This is blue";
      break;
    case "red":
      colorDevuelto="This is red";
      break
    case "green":
      colorDevuelto="This is green";     
      break;
    case "orange":
      colorDevuelto= "This is orange";
      break;
    default:
      colorDevuelto="Color not found";
      break;

  }
  return colorDevuelto;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var efectiva = false;
  if (numero === 10 || numero === 5 ){
    efectiva = true;
  }
  return efectiva;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var efectiva = false;
  if (numero < 50 && numero > 20 ){
    efectiva = true;
  }
  return efectiva;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var efectiva = false;
  if (numero %1 === 0 ) {
    efectiva = true;
  }
  return efectiva;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var efectiva = "";
  if (numero%3 === 0 && numero%5===0) {
     efectiva = "fizzbuzz";
  } else { 
    efectiva = numero;
    if (numero%3 == 0) {
      efectiva = "fizz";
    }
    if (numero%5 == 0) {
      efectiva = "buzz";
    }
    
  }
  return efectiva;
}
  
function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //x Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //x Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //x 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  var efectiva = ""
  if  (num1 ===0 || num2 === 0 || num3 === 0 ){
    efectiva = "Error";
    return efectiva;
  } 
  else if (num1<0 || num2<0 || num3<0){
    efectiva = "Hay negativos";
    return efectiva;
  }
  else if (num1 > num2 && num1 > num3 && num1>0 ){
    efectiva = "Número 1 es mayor y positivo";
    return efectiva;
  }
  else if (num3 > num1 & num3 > num2){
    return (num3 + 1);
  }
  else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "false"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var bandera = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        bandera = bandera +1;
        if (bandera>3){
          break;
        }
      }
    }
    if (bandera >2 || numero===1 || numero===0){
      return false;
    } else {
      return true ;}
}
function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true){
    return "Soy verdadero";
  } else{
    return "Soy falso";
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  let tablaSeis=[];  
  for (var i=0; i<=10; i++){
    tablaSeis.push(i*6);
  }
  return tablaSeis;
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var convertido = numero +'';
  if (convertido.length === 3){
    return true;
  } else{ 
    return false;
  }
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
 var i=0;
 var resultado=numero;
  do {
    i = i + 1;
    resultado = resultado + 5;
 } while (i < 8);
 return resultado;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

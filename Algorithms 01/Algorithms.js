// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 32;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let suma=x+y;
  return suma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resta=x-y;
  return resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let mult=x*y;
  return mult;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let divi=x/y;
  return divi;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x==y){
    return true;
  }else{
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length==str2.length){
    return true;
  }else{
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<90){
    return true;
  }else{
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    return true;
  }else{
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let mod=x%y;
  return mod;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2==0){
    return true;
  }else{
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2==1){
    return true;
  }else{
    return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let x = Math.pow(num,2);

  return x;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let x = Math.pow(num,3);

  return x;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let x = Math.pow(num,exponent);

  return x;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let x = Math.round(num);

  return x;

}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let x = Math.ceil(num);

  return x;

}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let x = Math.random();

  return x;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero==0){
    return false;

  }else if(numero>0){
    return "Es positivo";

  }else if(numero<0){
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str+"!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "John" -> "Soy John"
  // Tu código:

  return nombre+" "+ apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

  return "Hola "+ nombre+"!";
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  let area= alto*ancho;
  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  let perimetro=lado*4;

  return perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  let area=(base*altura)/2;

  return area;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  let dolar=1.20;

  euro=euro*dolar;

  return euro;
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí

  let long=letra.length;

  if(letra == "a" || letra=="e"||letra == "i" || letra=="o"||letra=="u" && long == 1){
    return "Es vocal"
  } else {
    return "Dato incorrecto";
  }

}

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if(x>y){
      return x;
    }else if(x==y){
      return y;
    }else if(y>x){
      return y;
  
    }
  }
  
  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  
    if(edad<18){
      return "Not allowed"
  
    }else if(edad>=18){
      return "Allowed"
    }
  }
  
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    if(status==1){
      return "Online";
    }else if (status==2){
      return "Away";
    }else{
      return "Offline"
    }
    }
  
  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
  
    if(idioma=="aleman"){
      return "Guten Tag!";
    }else if(idioma=="mandarin"){
      return "Ni Hao!";
    }else if(idioma=="ingles"){
      return "Hello!"
    }else{
      return "Hola!"
    }
  }
  
  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(true){
      case color=="blue":
        return "This is blue";
      case color=="red":
        return "This is red";
      case color=="green":
        return "This is green";
      case color=="orange":
        return "This is orange";
      default:
        return "Color not found"
    }
  }
  
  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero==5 || numero==10){
      return true;
    }else{
      return false;
    }
  
  }
  
  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero<50&&numero>20){
      return true;
    }else{
      return false;
    }
  }
  
  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if(numero%1==0){
      return true;
  
    }else{
      return false;
    }
  
  }
  
  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
      if(numero%3==0 && numero%5==0){
          return "fizzbuzz";
      }else if(numero%3==0 ){
          return "fizz";
      }else if((numero%5)==0){
          return"buzz";
      }else{
          return numero;
      }
  
  }
  
  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  
    if(Math.sign(num1)==(-1)||Math.sign(num2)==(-1)||Math.sign(num3)==(-1) && num1 !==0&& num2 !==0&& num3 !==0){
      return "Hay negativos";
    }else if(num1==0||num2==0||num3==0){
      return "Error";
    }else if(num1>num2 && num1>num3 && Math.sign(num1)==1 && num1 !==0){
      return "Número 1 es mayor y positivo";
    }else if(num3>num2 && num3>num1){
      let incremento=num3+1;
      return incremento;
    }else{
      return false;
    } 
  }
  
    
  
  
  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if(numero==0||numero==1||numero==4){
      return false;
    } 
    for(let x=2; x< numero/2; x++){
      if(numero % x==0){
        return false;
      }
    }
    return true;
  }
  
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if(valor==true){
      return "Soy verdadero"
    
  
    }else if(valor==false){
      return "Soy falso"
    }
  
  }
  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let resultados=[];
  
    for(let i=0; i<=10; i++){
      let av=6*i;
      resultados.push(av);
    }
  
    return resultados;
  }
  
  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
  
    let letra=numero.toString();
    if(letra.length==3){
      return true;
    }else{
      return false;
    }  
  }
  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let i=0;
    do{
      numero=numero+5;
      i=i+1;
    }while(i<8)
    return numero;
  
    }

    // No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
  }
  
  
  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    array=array[array.length-1];
    return array;
  }
  
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
  }
  
  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    let na=array.map((x)=>{
      return x+1;
  
    });
    return na; 
  }
  
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
  }
  
  
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
  
  }
  
  
  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(" ");
  }
  
  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    let buscar=array.includes(elemento);
    if(buscar){
      return true;
  
  
    }else{
      return false;
    }
  
    ;
    
  }
  
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let suma=numeros.reduce((acc,curr)=>{
      return acc+curr;
    })
  
    return suma;
  
  }
  
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let prom=resultadosTest.reduce((acc,curr)=>{
      return acc+curr;
    })
  
    return prom/(resultadosTest.length);
  
  }
  
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let curr=0;
    for(let i=0; i<=numeros.length; i++){
      if(numeros[i]>curr){
        curr=numeros[i];
      }
    }
  
    return curr;
  
  }
  
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    let current=1;
    let cero=0;
    for(let i=0; i<arguments.length; i++){
        if(arguments.length>1){
            current=arguments[i]*current;
        }else if(arguments.length==1){
            return arguments[0];
        }else if(arguments.length<1){
            cero=0;  
        }
    }
    if(arguments.length==cero){
        return 0;
        
    }else{
        return current;
        
    }
  }
  
  
  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let count=0;
    for(let i=0; i<arreglo.length; i++){
      if(arreglo[i]>18){
        count=count+1;
      }
    }
    return count;
  }
  
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if(numeroDeDia==1||numeroDeDia==7){
      return "Es fin de semana";
    }else if(numeroDeDia==2||numeroDeDia==3||numeroDeDia==4||numeroDeDia==5||numeroDeDia==6){
      return "Es dia Laboral"
    }
  } 
  
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let arr1=[];
    let str=n.toString();
    let arr2=str.split('');
    for(let i=0; i<arr2.length; i++){
      arr1.push(arr2[i]);
    }
    if(arr1[0]==9){
      return true;
    }else{
      return false;
    }
    
  }
  
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí 
    const arr2=arreglo;
    let arr3=[];
    
    for(let i=0; i<arreglo.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arreglo[i]==arr2[j]){
                arr3.push(arreglo[i]);
                
            }
        }
        break;
    }
    if(arreglo.length==arr3.length){
        return true;
        
    }else if(arreglo.length!==arr3.length){
        return false;
    }
    
    
  } 
  
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
   
    arr2=[];
    array.forEach(elem=>{
        if(elem=="Marzo"||elem=="Noviembre"||elem=="Enero"){
            arr2.push(elem);
            
        }
    }) 
    if(arr2.length==3){
        
        return arr2;
        
    }else{
       return "No se encontraron los meses pedidos";
        
    }
    
  
  }
  
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let arr2=[];
    for(let i=0; i<array.length; i++){
      if(array[i]>100){
        arr2.push(array[i]);
  
      }
  
    }
    return arr2;
  }
  
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let arr1=[];
    let increment=numero;
    let red=0;
    let marcador=0;
    
    for(let i=0; i<10; i++){
        increment+=2;
        arr1.push(increment);
        red= arr1.reduce((curr,acc)=>{
            return curr+acc;
        });
        if(increment==i){
          marcador=1;
            break;
        }
    }
    if(marcador==1){
      return "Se interrumpió la ejecución" 
    }else{
      return arr1;
    }
  
  }
  
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let arr1=[];
    let increment=numero;
    let red=0;
    let counter=0;
    
    for(let i=0; i<10; i++){
        if(i==5){
            continue;
        }
        counter=counter+1;
        increment+=2;
        arr1.push(increment);
        red= arr1.reduce((curr,acc)=>{
            return curr+acc;
        });
        
    }
    
    return arr1;
  
  
  }

  // No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
  
    let obj1={
      nombre:nombre,
      edad:edad,
      meow: function(){
        return "Meow!"
      }
    }
    return obj1;
  }
  
  
  function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    objeto[property]=null;
    return objeto;
  
  }
  
  function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
  
    objeto[metodo]();
  }
  
  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
  
    let num=objetoMisterioso.numeroMisterioso;
  
    return num*5;
  
  }
  
  function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad];
  
    return objeto;
  }
  
  function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let user={
      nombre:nombre,
      email:email,
      password:password
    }
  
    return user;
  
  }
  
  function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    if(usuario.email==null){
      return false;
    }else{
      return true;
    }
  }
  
  
  
  function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    for(let key in objeto){
      if(key==propiedad){
        return true;
      }else{
        return false;
      }
    }
  }
  
  function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    for(let key in usuario){
      if(usuario[key]==password){
        return true;
      }else{
        return false;
      }
  
  
    }
  
  
  
  }
  
  function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password=nuevaPassword;
  
    return usuario;
  
  }
  
  function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario["amigos"].push(nuevoAmigo);
  
    return usuario;
  }
  
  function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
  
    for(let i=0; i<usuarios.length; i++){
      usuarios[i]["esPremium"]=true;
    }
  
    return usuarios;
  
    //usuarios=[usuario,usuario];
  }
  
  function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
  
    let suma=0;
    for(let i=0; i<usuario.posts.length; i++){
      suma=usuario.posts[i]["likes"]+suma; 
    }
    return suma;
  }
  
  function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    producto.calcularPrecioDescuento=function(){
  
      return this.precio= this.precio-(this.precio*this.porcentajeDeDescuento);
     
  };
  
  
  
  return producto;
  }

  // No cambies los nombres de las funciones.

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
  
    class Usuario{
      constructor(opciones){
        this.usuario=opciones.usuario,
        this.nombre=opciones.nombre,
        this.email=opciones.email,
        this.password=opciones.password
      }
      saludar=function(){
          return `Hola, mi nombre es ${this.nombre}`
  
        }
    }
  
    return Usuario;
  
  }
  
  function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
    Constructor.prototype.saludar=function(){
      return "Hello World!"
      
    }
  }
  
  function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
    String.prototype.reverse=function(){
     
  
      return  this.split('').reverse().join('');
      
    }
  
  }

  // Do not change any of the function names

function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    let fl="";
    nombre=nombre.split("");
     fl=nombre.shift().toUpperCase();
    nombre.unshift(fl);
    nombre=nombre.join("");
   
    return nombre;
  
  }
  
  function invocarCallback(cb) {
    // Invoca al callback `cb`
    //Tu código:
    cb();
  }
  
  function operacionMatematica(n1, n2, cb) {
    //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1,n2);
  }
  
  function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
  
    let cd=0;
  
    for(let i=0; i<numeros.length; i++){
      if(Number.isInteger(numeros[i])){
        cd=numeros[i]+cd;
  
      }
    
    }
  
    cb(cd);
  
  }
  
  function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    //Tu código:
  
    for(let i=0; i<array.length; i++){
      cb(array[i]);
    
    }
  
  
  
  }
  
  function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:
  
    let arr2= array.map(elem=>{
      let val=cb(elem);
  
      return val;
  
    });
  
    return arr2;
   
  
  }
  
  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let filt= array.filter(elem=>{
      return elem[0]=="a";
    });
  
    return filt;
  }

  // No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    let arr1=[];
    
    for(let clave in objeto){
        let arr2=[];
        arr2.push(clave);
        arr2.push(objeto[clave]);
        arr1.push(arr2);
        
    }
    
    return arr1;
  }
  
  
  function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    let obj={};
    
    let separar=string.split("");
    let copia=separar;
    for(let i=0; i<separar.length; i++){
        let counter=0;
        for(let j=0; j<copia.length; j++){
             if(separar[i]==copia[j]){
                 counter=counter+1;
                 obj[separar[i]]=counter;
                 
             }
        }
       
        
       
    }
    
    return obj;
  
  }
  
  
  function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyJOHN -> JOHNsoy
    //Escribe tu código aquí
    let arr1=[];
    let arr2=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==s[i].toUpperCase()){
            arr1.push(s[i]);
        }
        if(s[i]==s[i].toLowerCase()){
            arr2.push(s[i]);
        }
    }
    arr1=arr1.join("").toString();
    arr2=arr2.join("").toString();
    
    return arr1+arr2;
  
  }
  
  
  function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The John Challenge is close!" || Devuelve ---> "ehT nhoJ egnellahC si !esolc"
    //Escribe tu código aquí
  arr1=str.split(" ");
  let final="";
  
  for(let i=0; i<arr1.length; i++){
      let str=arr1[i];
      str=str.split("").reverse().join("");
      final=final+str+" ";
  }
  
  return final.trim();
  
  } 
  
  
  function capicua(numero){
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    let str= numero.toString()
    arr1=str.split("").reverse().join("");
    if(numero==arr1){
        return "Es capicua";
        
    }else{
        return "No es capicua";
    }
    
  }
  
  
  
  
  function deleteAbc(cadena){
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    let spl=cadena.split("");
    arr1=[];
  
    for(let i=0; i<spl.length; i++){
        if(spl[i]!=="a" && spl[i]!=="b" && spl[i]!=="c" ){
            arr1.push(spl[i])
            
        }
    }
    
    
    
    arr1=arr1.join("");
    
    if(arr1.length==cadena.length){
        return cadena;
        
        
    }else{
        return arr1;
    }
  }
  
  
  function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
   
    
    arr.sort((a, b) => {
      return a.length-b.length;
  });
  
  return arr;
  
  }
  
  
  function buscoInterseccion(arreglo1, arreglo2){
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
  
    arr3=[];
  
    for(let i=0; i<arreglo1.length; i++){
      for(let j=0; j<arreglo2.length; j++){
        if(arreglo1[i]==arreglo2[j]){
          arr3.push(arreglo1[i]);
  
        }
  
      }
    }
  
    return arr3;
  
  }

// No cambiar nombre de funciones.

function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
    let max=arr[0];
    let min=arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }if(arr[i]<min){
            min=arr[i]
        }
    }
    return max-min;
}

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
    let arr2=[];
    for(let i=0; i<menu[comida].length; i++){
        if(menu[comida][i]==ingrediente){
            arr2.push(menu[comida][i-1])
            arr2.push(menu[comida][i])
            arr2.push(menu[comida][i+1])
            
    }
    }
    
    if(arr2.length>0){
        return arr2;
    }else if(arr2.length==0){
        return "El menú esta perfecto";
        
    }


};

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    if("nombre" in persona && "apellido" in persona && "invitado" in persona ){
        return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`;
    }else if("apellido" in persona && "invitado" in persona){
        return `Bienvenido Sr. ${persona.apellido}`;
    }else if("invitado" in persona && "nombre" in persona){
        return `Hola ${persona.nombre}, tu mesa está lista`
    }else if("nombre" in persona && "apellido" in persona){
        return "Disculpe señor, no está invitado a la fiesta";
        
    }


};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
    let arr2=[];
    let nombre="";
    
    for(let i=0; i<estudiantes.length; i++){
        if(estudiantes[i]["check1"]>=nota1 && estudiantes[i]["check2"]>=nota2){
            nombre=`${estudiantes[i]["nombre"]} ${estudiantes[i]["apellido"]}`;
            arr2.push(nombre);
        }

    }
    
    return arr2;
    
};

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    arreglo=arreglo.filter(elem=>{
        return elem!=num;
    });

    return arreglo;
    
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:
    let arr1=[];
    let arr2=[];
    for(let key in obj1){
        arr1.push(key)
    }
    for(let clave in obj2){
        arr2.push(clave)
        
    }
    
    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                arr1.splice(i,1);
                arr2.splice(j,1);
            }
            
        }
        
    }
    
let arr3=arr1.concat(arr2);

return arr3;

};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:

    let arr1=[];
    
    for(let i=0; i<frase.length; i++){
        if(frase[i]==frase[i].toLowerCase()){
            arr1.push(frase[i].toUpperCase());
        }else if(frase[i]==frase[i].toUpperCase()){
            arr1.push(frase[i].toLowerCase());
        }
        
    }
    
    arr1=arr1.join("");
    return arr1;

};

// =======================================================================

function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
            this.nombre=nombre;
            this.apellido=apellido;
            this.cohorte=cohorte;
            this.grupoDeAmigos=grupoDeAmigos;
            this.notasCheckpoints=notasCheckpoints;
            
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:

            this.grupoDeAmigos.push({nombre:nombre,apellido:apellido,cohorte:this.cohorte});
            
        };

        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //
            // Tu código:
            return this.grupoDeAmigos.length;
            
        };

        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:
            this.notasCheckpoints.push(nota);
            
        };

        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            return this.notasCheckpoints;
            
        };

        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            
            return `Hola, soy el alumno ${this.nombre} ${this.apellido} del cohorte ${this.cohorte}`

        };
        
    };

    return Alumno;
};

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:
    for(let key in objeto){
        let k=key;
        let v=objeto[key];
        delete objeto[key];
        objeto[v]=k;
    }
    
    return objeto;

};



// No modificar nada debajo de esta línea
// =======================================================================

// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
    // Tu código aca:
    let arr=numeros;
    let max=arr[0];
    let min=arr[0];
    let arr1=[];
  
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }if(arr[i]<min){
            min=arr[i]
        }
    }
    arr1.push(min);
    arr1.push(max);
  
    return arr1;
  
  }
  
  function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca:
    let str=strings[0];
    for(let i=0; i<strings.length; i++){
      if(strings[i].length>str.length){
        str=strings[i];
      }
    }
    return str;
  
  }
  
  function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
  
    let obj1;
  
    for(let i=0; i<amigos.length; i++){
      if(amigos[i].nombre==nombre){
        obj1=amigos[i];
      }
    }
  
    return obj1;
  
  }
  
  function sumArray(array, n) {
    // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
    // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
    // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.
  
    // Ej:
    // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
    // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
    // Pista: Podes usar bucles/ciclos anidados
    // Aclaración: No es válido sumar el mismo número dos veces
    // Ej:
    // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
    // por lo tanto también debería devolver false en este caso
  
    // Tu código aca:
    let curr;
    
    for(let i=0; i<array.length; i++){
        for(let j=1; j<array.length; j++){
            console.log(array[j])
            if(array[i]+array[j]==n){
                console.log(array[i]+array[j])
                curr=1;
            }
        }
        
      break;  
    }
    
    if(curr==1){
        return true;
        
    }else{
        return false
    }
  
  
  
  
  };
  
  function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
    let arr1=[];
    for(let i=0; i<array.length; i++){
        if(propiedad in array[i]){
            arr1.push(array[i][propiedad])
            
        }
        
    }
   return arr1
  
  }
  
  // =======================================================================
  
  
  function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento
  
        // Tu código aca:
        this.nombre=nombre;
        this.edad=edad;
        this.hobbies=hobbies;
        this.amigos=amigos;
      }
  
      addFriend(nombre, edad) {
        // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        this.amigos.push({"nombre":nombre,"edad":edad})
      }
  
      addHobby(hobby) {
        // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        this.hobbies.push(hobby)
  
      }
      getFriends() {
        // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
        // persona.getFriends() debería devolver ['martin', 'toni']
  
        // Tu código aca:
        let arr1=[];
  
        for(let i=0; i<this.amigos.length; i++){
          arr1.push(this.amigos[i].nombre)
  
        }
  
        return arr1;
  
      }
  
      getHobbies() {
        // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
  
        // Tu código aca:
  
        return this.hobbies;
  
      }
  
      getPromedioEdad() {
        // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
        // Ej:
        // Si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  
        // Tu código aca:
        let sum=0;
        
        for(let i=0; i<this.amigos.length; i++){
          sum=this.amigos[i].edad+sum
        }
  
        return sum/this.amigos.length;
      }
    };
  
    return Persona;
  }
  
  /* ====================== EXTRA CREDIT ===================== */
  // Este ejercicio no cuenta en el puntaje del checkpoint
  // pero si llegas hasta aca y lo haces quiere decir que venis super bien!
  
  function filtrar(funcion) {
    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]
  
    Array.prototype.filtrar = function(elem) {
      let newArray = [];
      this.forEach(item => {
          if(elem(item)) {
              newArray.push(item);
          }
      });
      return newArray;
    };
  };
  
  
  
  // No modifiques nada debajo de esta linea
  //
  
  
  
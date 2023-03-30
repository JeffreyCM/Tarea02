/*      Ahora que conocemos todas las piezas del event loop,     
veamos un poco de código para comprender el event loop en acción. */

console.log('Esta es la primera línea de código en app.js.');
function usingsetTimeout() {
    console.log('Me pondré en cola en el event loop');
}
setTimeout(usingsetTimeout, 3000);
console.log('Esta es la última línea de código en app.js.');


//en la limea 4 se usa console.log para imprimir el texto
//en la linea 5 se declara una funcion llamada usingsetTimeout que solo imprime el texto
//en la limea 9 imprimir el texto
//en la linea 8 se usa setTimeout que programa a la funcion de la linea 5 para que despues de 3 segundos se ejecute
//


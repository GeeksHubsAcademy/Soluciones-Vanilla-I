// // EJERCICIO 1

// let num1 = 7;
// let num2 = 19;

// if (num1 > num2) {
//   console.log(num1 + " es mayor que " + num2);
// } else if (num1 < num2) {
//   console.log(num2 + " es mayor que " + num1);
// } else {
//   console.log("Son iguales");
// }

// // EJERCICIO 2

// let myName = "Mara";
// console.log("Hola, " + myName);

// //  EJERCICIO 3

// let name1 = prompt("Di tu nombre");
// console.log("Hola, ", name1);

// // EJERCICIO 4

// let pi = Math.PI;
// let radio = parseFloat(prompt("Di el radio del círculo"));
// let area = pi * radio ** 2;
// console.log(area)

// // EJERCICIO 5

// let number = parseInt(prompt("Di un número"));

// if (number % 2 === 0) {
//   console.log("El número es par");
// } else {
//   console.log("El número es impar");
// }

// // EJERCICIO 6

// let price = parseFloat(prompt("Di el precio del producto"))
// const IVA = price * 0.21;
// let total = price + IVA;

// // EJERCICIO 7

// let contador = 0;
// while(contador <= 100){
//     console.log(contador)
//     contador++;
// }

// // EJERCICIO 8

// for(i=0; i <= 100; i++){
//     console.log(i)
// }

// EJERCICIO 9

// for(i = 0; i<= 100; i++){
//     if(i % 2 === 0 || i % 3 === 0){
//         console.log(i)
//     }
// }

// EJERCICIO 10

// let cantidadVentas = parseFloat(prompt("Introduce la cantidad de ventas"))
// let suma = 0
// for(let i = 0; i < cantidadVentas; i++){
//     let venta = parseFloat(prompt("Di el importe"))
//     suma += venta
// }

// console.log(suma)

// EJERCICIOS 11

let dia = prompt("Di un día de la semana").toLowerCase()

switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        alert("Es laborable")
        break;
    case "sabado":
    case "domingo":
        alert("No es laborable")
        break;
    default:
        alert("No es un día válido")
}
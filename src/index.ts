/*
•  potencia de un número.


• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

//La base y el exponente deben ser ingresados por teclado.

let base: number = Number(prompt("ingrese la base"));
let exponente: number = Number(prompt("ingrese la exponente"));
let resultado: number = 1;

function potencia(base: number, exponente: number) {
  for (let i: number = 1; i <= exponente; i++) {
    resultado *= base;
  }
  return resultado;
}
// Sólo deben admitirse exponentes mayores o iguales a cero.
if (exponente >= 0) {
  if (exponente !== 0) {
    potencia(base, exponente);
    console.log(resultado);
  } else console.log("el exponente debe ser mayor a 0");
} else {
  console.log(1);
}

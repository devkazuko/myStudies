/*  OPERADORES ARITMÉTICOS - Já na ordem de precedência

    () -> parênteses
    ** -> potenciação
    * / % -> multiplicação, divisão e resto da divisão - quem aparecer primeiro
    + -   -> adição e subtração
*/

let contador = 1;
// Operador de INCREMENTO, não pode ser usado em constantes
contador++; 
contador++;
++contador;
console.log(contador);

// Diferença entre ++naFrente e depois++

let contador2 = 1;
console.log(contador2++); // primeiro executou o comando, depois foi incrementado o valor
console.log(contador2);
console.log(++contador2); // o pré-incremento faz o contrário

// Operador de DECREMENTO, também não pode ser usado em constantes

let contador3 = 15;
console.log(contador3--);
console.log(contador3);

// Exemplo de MÁ PRÁTICA

let contador4 = 18;
console.log(--contador4); // Pedir um console.log ao mesmo tempo que pede um decremento ou incremento

// O certo é:

let contador5 = 12;
contador5--;
console.log(contador5);
// NÃO MISTURE AS COISAS NO CÓDIGO!!!

// Operadores de ATRIBUIÇÃO

let passos = 2;
passos += 1;
console.log(passos);
passos -= 1;
console.log(passos);

// Converter de String pra número

const num1 = 10;
const num2 = parseInt('5'); // parseInt é uma função que converte o valor para INTEIRO
console.log(num1 + num2);
console.log(typeof num2);

const num3 = 10;
const num4 = parseFloat('5.2'); // parseFloat converte o valor para número com ponto flutuante
console.log(num3 + num4);

// Modo mais fácil:

const num5 = 10;
const num6 = Number('15.2');
console.log(num5 + num6);

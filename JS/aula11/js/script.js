// Sempre que chamamos algo com (), estamos chamando uma função/módulo que executam ações
// Front-End, o objeto window é relacionada a janela do navegador.
// Função que retorna um valor booleano dependendo da opção que o usuário clicar
// Uma função dentro de um objeto, é chamada de método. Fora de um objeto, é função.

let num1 = window.prompt('Digite um número:');
let num2 = window.prompt('Digite outro número:');
console.log(num1, num2);
num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;
window.alert(`O resultado da soma desses valores é ${resultado}`);

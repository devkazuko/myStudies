//  << Tipos de Dados Primitivos >>

// Strings
const nome = 'João Victor'; 
const nome1 = "João Victor";
const nome2 = `João Victor`;

// Number
const num1 = 1;
const num2 = 1.4;

// Variável não inicializada -> undefined
let nomeAluno; // Não aponta para local nenhum na memória

// Null
let sobrenomeAluno = null; // Nulo -> Também não aponta para lugar nenhum na memória

// NULL NÃO É IGUAL A UNDEFINED
// Quando utilizamos Null? Quando queremos propositalmente que a variável não aponte para lugar nenhum na memória.

// Boolean
const aprovado = true;
                        // Boolean é um valor LÓGICO, que muda o fluxo do programa/aplicação
const reprovado = false;

// typeof
console.log(typeof nome); // Verificar o tipo de um valor

// Tipo de dado passado por REFERÊNCIA

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);

console.log(a, b); // a e b apontam pro mesmo lugar da memória, isso é valor por referência
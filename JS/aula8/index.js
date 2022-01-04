const nome = "João Victor";
const sobrenome = "Oliveira Lopes";
const idade = 20;
const peso = 86;
const alturaEmM = 1.73;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmM} de altura e seu IMC é ${indiceMassaCorporal}
${nome} nasceu em ${anoNascimento}`);

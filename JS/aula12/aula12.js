let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA; // Salvo o valor de A e depois utilizo ele
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

const numeroDigitado = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('txt');

numeroTitulo.innerHTML = numeroDigitado;
texto.innerHTML = `<p>Raiz quadrada: ${numeroDigitado ** 0.5}<br/></p>`;
texto.innerHTML += `<p>${numeroDigitado} é inteiro: ${Number.isInteger(numeroDigitado)} <br/></p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numeroDigitado)}<br/></p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numeroDigitado)}<br/></p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numeroDigitado)}<br/></p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numeroDigitado.toFixed(2)} <br/></p>`;

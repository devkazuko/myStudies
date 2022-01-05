// Como criar uma função que cria objetos

function criaPessoa (nome, sobrenome, idade) { // FACTORY
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = { // OBJETO LITERAL
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};
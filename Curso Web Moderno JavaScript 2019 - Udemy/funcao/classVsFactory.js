// Class
class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa = new Pessoa('Yuri')
pessoa.falar()


// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = criarPessoa('Joao') 
p1.falar()
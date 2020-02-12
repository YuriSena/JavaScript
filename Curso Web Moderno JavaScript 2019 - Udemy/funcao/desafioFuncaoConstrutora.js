function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }

    this.getNome = function(){
        return this.nome
    }
}

const pessoa = new Pessoa('Joao')
pessoa.falar()



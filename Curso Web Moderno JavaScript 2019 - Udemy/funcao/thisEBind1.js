const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()         // conflito entre paradigmas: funcional e Orientada a Objeto 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
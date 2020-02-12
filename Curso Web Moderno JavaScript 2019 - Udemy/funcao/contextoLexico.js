const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// A função será executada de acordo com o contexto lexico onde ela foi definida.
// Portanto o conteudo impresso por "valor" será 'Global'.
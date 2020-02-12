function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true 
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirEmCaixaAlta(obj) {
    try{                                                   //executa se der tudo certo
        console.log(obj.name.toUpperCase() + '!!!')          
    }
    catch(e){                                         //executa se der problema no try
        tratarErroELancar(e)

    }
    finally{
        console.log('final')            //finally sempre sera executado
    }
}

const obj = {nome: 'Roberto'}
imprimirEmCaixaAlta(obj)
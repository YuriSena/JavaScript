const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

/* ||
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})

||
fabricantes.forEach(function(a){
    console.log(a)
})
*/

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]) 
    }
}

console.log(notasBaixas1)

// Com callback 
const notasBaixas2 = notas.filter(function (nota) {     // o evento só ocorre quando a funçao é registrada!
    return nota < 7
})

console.log(notasBaixas2)

// Com funçao Arrow e Callback
const notasMenorQue7 = nota => nota < 7             
const notasBaixas3 = notas.filter(notasMenorQue7)       // registro da função
console.log(notasBaixas3)
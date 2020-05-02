const notas = [9.3, 4.1, 5.8 ,9.1, 8.3, 7.3]

//sem callback

let notasbaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

//Com callback

const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)


const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)


const notasmenorque7 = nota => nota < 7
const notabaixas4 = notas.filter(notasmenorque7)
console.log(notabaixas4)
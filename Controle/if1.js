function soBoaNoticia(nota){
    if (nota >=7){
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seforverdadeeufalo(valor){
    if (valor){
        console.log('É verdade... ' + valor)
    }
}

seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo('')
seforverdadeeufalo(0)
seforverdadeeufalo(1)
seforverdadeeufalo(' ')

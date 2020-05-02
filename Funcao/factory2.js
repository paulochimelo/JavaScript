function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto('Not', 1500.01))
console.log(criarProduto('iPad', 574.45))
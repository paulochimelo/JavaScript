function Carro(velociadadeMaxima = 200, delta = 5){
    //atributo privado
    let velociadaatual = 0

    //metodo publico

    this.acelerar = function (){
        if (velociadaatual + delta <= velociadadeMaxima){
            velociadaatual += delta
        }else {
            velociadaatual = velociadadeMaxima
        }
    }

    //metodo publico
    this.getVelociadadeAtual = function (){
        return velociadaatual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelociadadeAtual())

const ferrari = new Carro (350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelociadadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
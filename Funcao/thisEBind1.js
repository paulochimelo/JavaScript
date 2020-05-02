const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
    
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e orienteado a objetos


const falardepessoa = pessoa.falar.bind(pessoa)

falardepessoa()
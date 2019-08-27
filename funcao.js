function exe1() {
    //recuperar dados
    var nt1 = Number(document.getElementById("nt1").value);
    var nt2 = Number(document.getElementById("nt2").value);
    var nt3 = Number(document.getElementById("nt3").value);
    var nt4 = Number(document.getElementById("nt4").value);
    //calcular media
    var media = (nt1 + nt2 + nt3 + nt4 ) / 4 
    if (media > 6) {
        alert (media + " Aluno Aprovado")
        console.log("Aprovado com Média " + media)
    }
    else {
        alert (media + " Aluno Reprovado")
        console.log("Reprovado com média " + media)
    }
                

    
}
function exe2(){
    //recuperar dados
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    //calcular media
    var media = (nota1 + nota2)/2
    if (media <= 3) {
        alert (media + " Reprovado")
        console.log("Reprovado " + media)
    }
    else if ((media > 3) && (media <= 7)) {
        alert (media + " Exame ")
        console.log("Exame " + media)
    }
    else {
        alert (media + " Aprovado ")
        console.log("Aprovado " + media)
    }
}

function exe3(){
    //recuperar dados 
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    //calcular
    if (num1 < num2) {
        alert (num1)
        console.log(num1)
    }
    else if (num2 < num1) {
        alert (num2)
        console.log(num2)
    }
    else {
        alert ("São Iguais")
        console.log("São Iguais")
    }
}

function exe4 (){
    //recuperar dados 
    var num1 = Number(document.getElementById("nume1").value); 
    var num2 = Number(document.getElementById("nume2").value);
    var num3 = Number(document.getElementById("nume3").value);
    //calcular
    if ((num1 > num2) && (num1 > num3))  {
        alert ("O Maior é o Numero 1")
        console.log("O Maior é o Numero 1")
    }
    else if ((num2 > num1) && (num2 > num3)) {
        alert ("O Maior é o Numero 2")
        console.log("O Maior é o Numero 1")
    }
    else if ((num3 > num1) && (num3 > num2)){
        alert ("O Maior é o Numero 3")
        console.log("O Maior é o Numero 3")
    }
    else {
        alert ("São Iguais")
        console.log("São Iguais")
    }

}

function exe5 (){
    //recuperar dados
    var num1 = Number(document.getElementById("numero1").value); 
    var num2 = Number(document.getElementById("numero2").value);
    var escolha = Number(document.getElementById("numero3").value);
    //calculo
    
    switch (escolha) {
        case 1:
        var media = (num1 + num2)/2
        alert (media)
        console.log(media)
            break;
        case 2:
        if (num1 > num2){
            var resul = num1 - num2 
            alert (resul)
            }
        else if (num2 > num1){
            var resul = num2 -num1 
            alert (resul)
        }
        else {
            alert("Numeros Iguais")
        }
            break;
        case 3:
        var mul = num1 * num2
        alert (mul)
        console.log(mul)
            break;
        case 4:
        var div = num1 / num2
        alert (div)
        console.log(div)
            break;
        default:
            break;
    }
}

function exe7 () {
    //recuperar dados
    var sal = Number(document.getElementById("salario123").value);
    if (sal < 500) {
        salario = sal+sal*30/100
        alert (salario);
    }
    else {
        alert ("Sem direito a aumento")
    }
}
function exe22 (){
    //recuperar dados
    var peso = Number(document.getElementById("peso1").value);
    var idade = Number(document.getElementById("idade1").value);
    if ((idade < 20) && (peso <= 60)){
        alert("Grupo de risco 9")
    }
    else if ((idade < 20) && (peso > 60) && (peso <= 90)){
        alert("Grupo de risco 8")
    }
    else if ((idade < 20) && (peso > 90)){
        alert("Grupo de risco 7")
    }
    else if ((idade >= 20) && (peso <= 60) &&(idade < 50)){
        alert("Grupo de risco 6")
    }
    else if ((idade >= 20) && (peso > 60) && (peso <= 90)&&(idade < 50)){
        alert("Grupo de risco 5")
    }
    else if ((idade >= 20) && (peso > 90) &&(idade < 50)){
        alert("Grupo de risco 4")
    }
    else if ((idade > 50) && (peso <= 60)){
        alert("Grupo de risco 3")
    }
    else if ((idade > 50) && (peso > 60) && (peso <= 90)){
        alert("Grupo de risco 2")
    }
    else if ((idade > 50) && (peso > 90)){
        alert("Grupo de risco 1")
    }
}
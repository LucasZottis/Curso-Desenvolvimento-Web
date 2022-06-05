var resposta = document.getElementById("Resposta")

var nome = prompt("Informe seu nome")
var altura = parseFloat(prompt("Informe sua altura em centímetros")) / 100
var peso = parseFloat(prompt("Informe seu peso"))
var massa = peso / (altura * altura)
var classificacao = ""
// var massa = peso / Math.pow(altura)

if (massa < 16) {
    classificacao = "Baixo peso muito grave"
} else if (massa >= 16 && massa <= 16.99) {
    classificacao = "Baixo peso grave"
} else if (massa >= 17 && massa <= 18.49) {
    classificacao = "Baixo peso"
} else if (massa >= 18.5 && massa <= 24.99) {
    classificacao = "Peso normal"
} else if (massa >= 25 && massa <= 29.99) {
    classificacao = "Sobrepeso"
} else if (massa >= 30 && massa <= 34.99) {
    classificacao = "Obesidade grau I"
}else if (massa >= 35 && massa <= 39.99) {
    classificacao = "Obesidade grau II"
}else if (massa > 40) {
    classificacao = "Obesidade grau III"
}

resposta.innerText += " " + nome + " possui índice de massa corporal igual a " + massa + ", sendo classificado como: " + classificacao + "."
var resposta = document.getElementById("Resposta")
var numero1 = parseInt(prompt("Digite o primeiro número"))
var operacao = prompt("Digite informe a operação que será realizada").toLowerCase()
var numero2 = parseInt(prompt("Digite o segundo número"))

if(operacao != "soma" && operacao != "subtracao") {
    EscreverTextoEmElemento(resposta, "Operação informada não é válida.")
} else if (Number.isNaN(numero1)) {
    EscreverTextoEmElemento(resposta, "Valor inválido para o primeiro número.")
} else if (Number.isNaN(numero2)) {
    EscreverTextoEmElemento(resposta, "Valor inválido para o segundo número.")
} else {
    EscreverTextoEmElemento(resposta, Calcular(numero1, numero2, operacao))
}

function Calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case "soma": {
            return numero1 + numero2
        }

        case "subtracao": {
            return numero1 + numero2
        }
    }
}
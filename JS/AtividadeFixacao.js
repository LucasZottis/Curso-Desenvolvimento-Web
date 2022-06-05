var resposta = document.getElementById("Resposta")
var idade = prompt("Informe sua idade")

if (parseInt(idade) < 0) {
    resposta.innerHTML = "Idade inválida."
} else {
    if (parseInt(idade) > 0 && parseInt(idade) < 15) {
        resposta.innerHTML += "Criança."
    }

    if (parseInt(idade) >= 15 && parseInt(idade) < 30) {
        resposta.innerHTML += "Jovem."
    }

    if (parseInt(idade) >= 30 && parseInt(idade) < 60) {
        resposta.innerHTML += "Adulto."
    }

    if (parseInt(idade) >= 60) {
        resposta.innerHTML += "Idoso."
    }
}
var conteudoAula = document.getElementById("ConteudoAula")

// if (2 === '2') {
//     conteudoAula.innerText = "Entrou no IF"
// } else {
//     conteudoAula.innerText = "Entrou no ELSE"
// }

// if (2 == 2 && 3 >= 1) {
//     conteudoAula.innerText += "Verdadeiro\n"
// } else {
//     conteudoAula.innerText += "Falso\n"
// }

// if (2 != 2 && 3 >= 1) {
//     conteudoAula.innerText += "Verdadeiro\n"
// } else {
//     conteudoAula.innerText += "Falso\n"
// }

// if (!(2 != 2 && 3 >= 1)) {
//     conteudoAula.innerText += "Verdadeiro\n"
// } else {
//     conteudoAula.innerText += "Falso\n"
// }

var nota = prompt("Digite a nota do aluno")
var faltas = prompt("Digite a quantidade de faltas do aluno")
var media = 7
var faltasMaximas = 15

if (nota >= media && faltas <= faltasMaximas) {
    conteudoAula.innerText += "Aprovado\n"
} else {
    conteudoAula.innerText += "Reprovado\n"
}
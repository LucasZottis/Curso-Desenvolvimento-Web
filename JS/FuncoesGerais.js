var conteudoAula = document.getElementById("ConteudoAula")

// function EscreverTextoEmElemento(valor) {
//     EscreverTextoEmElemento(conteudoAula, valor)
// }

function EscreverTextoEmElemento(elemento, valor) {
    elemento.innerText += valor
}

// function EscreverHtmlEmElemento(valor) {
//     EscreverHtmlEmElemento(conteudoAula, valor)
// }

function EscreverHtmlEmElemento(elemento, valor) {
    elemento.innerHTML += valor
}

// function PularLinha() {
//     PularLinha(conteudoAula)
// }

function PularLinha(elemento) {
    EscreverHtmlEmElemento(elemento, "<br/>")
}
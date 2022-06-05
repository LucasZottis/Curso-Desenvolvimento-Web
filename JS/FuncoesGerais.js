var conteudoAula = document.getElementById("ConteudoAula")

function EscreverTextoEmElemento(elemento, valor) {
    elemento.innerText += " " + valor
}

function EscreverHtmlEmElemento(elemento, valor) {
    elemento.innerHTML += " " + valor
}

function PularLinha(elemento) {
    EscreverHtmlEmElemento(elemento, "<br/>")
}
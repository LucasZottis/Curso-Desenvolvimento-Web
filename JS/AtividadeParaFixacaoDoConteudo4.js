var caixaTexto = document.getElementById("CaixaTexto")

function AoFocar() {
    caixaTexto.style.background = "#F7DA04"
}

function AoPerderFoco() {
    var valor = caixaTexto.value
    
    if(valor.length < 3) {
        caixaTexto.style.background = "#FA696B"
    } else {
        caixaTexto.style.background = "#91ED78"
    }
}
var resultado = document.getElementById("Resultado")
var calculoRealizado = false
var operadorInserido = false

function Calcular(tipo, valor){
    if(tipo === "acao") {
        switch (valor) {
            case "c": {
                resultado.value = ""
                calculoRealizado = false
                operadorInserido = false
                break
            }

            case "/": 
            case "-": 
            case "+": 
            case ".": {
                if(!operadorInserido) {
                    resultado.value += valor
                    operadorInserido = true
                }

                calculoRealizado = false
                break
            }

            case "*": {
                if(!operadorInserido) {
                    resultado.value += "x"
                    operadorInserido = true
                }

                calculoRealizado = false
                break
            }

            case "=": {
                if (resultado.value.indexOf("x") < 0) {
                    resultado.value = eval(resultado.value)
                } else {
                    resultado.value = eval(resultado.value.replace("x", "*"))
                }

                calculoRealizado = true
                operadorInserido = false
                break
            }
        }
    } else if (tipo === "valor") {
        if (calculoRealizado) {
            resultado.value = valor
        } else {
            resultado.value += valor
        }

        operadorInserido = false
    }
}
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    //return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive

    return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
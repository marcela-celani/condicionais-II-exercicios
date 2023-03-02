// EXERCICIO I

const numero = Number(prompt('Digite um numero: '))

if(numero % 2 === 0) {
    if(numero % 3 === 0) {
        console.log('O numero é divisivel por 2 e por 3')
    } else {
        console.log('O numero é divisivel por 2')
    }
} else {
    if(numero % 3 === 0) {
        console.log('O numero é divisivel por 3')
    } else {
        console.log('O numero não é divisivel nem por 2 nem por 3')
    }
}

// ou através de negativa
if(numero % 2 !== 0) {
    if(numero % 3 !== 0) {
        console.log('O numero não é divisível por 2 ou por 3')
    } else {
        console.log('O numero é divisivel por 2 ou por 3')
    }
} else {
    console.log('O numero é divisivel por 2 ou por 3')
}

// ou através de operadores lógicos
if (numero % 2 === 0 || numero % 3 === 0) {
    console.log('O numero é divisivel por 2 ou por 3')
} else {
    console.log('O numero não é divisivel nem por 2 nem por 3')
}
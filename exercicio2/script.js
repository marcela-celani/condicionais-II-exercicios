// EXERCICIO II

let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

/*
if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!")
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!")
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!")
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!")
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!")
} else{
    console.log("nacionalidade não encontrada")
} 
*/

switch(nacionalidade) {
    case 'brasileira', 'brasileiro':
        console.log("a pessoa é do Brasil!")
        break

    case 'argentina', 'argentino':
        console.log("a pessoa é da Argentina!")
        break
    
    case 'uruguaia', 'uruguaio':
        console.log("a pessoa é do Uruguai!")
        break

    case 'chilena', 'chileno':
        console.log("a pessoa é do Chile!")
        break

    case 'colombiana', 'colombiano':
        console.log("a pessoa é da Colômbia!")
        break
    
    default:
        console.log("nacionalidade não encontrada")
        break
}
const prompt = require('prompt-sync')();

var alturas = []

// Implementar a entrada de dados

// Implementar o processamento de dados
// Fazer for dentro de for

// Implementar a saída de dados




for (let altura = 1;  altura <= 10; altura++) {
    alturas.push(parseFloat(prompt("Digite sua altura:")))

}
console.log(alturas)
for (let index = 0; index< alturas.length; index++) {
    const aluno = alturas[index];

   const quantidadeDeAlturasMenores = alturas.filter(altura => altura < aluno ).length
 console.log(`aluno ${index} : maior que ${quantidadeDeAlturasMenores} aluno(s)`)   
}


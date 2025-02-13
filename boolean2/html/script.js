// && = retorna o primeiro valor falso ou o último verdadeiro

var condicional = (10 - 50) && (10 + 20);
if(condicional) {
    console.log('Verdadeiro', condicional);
}
else {
    console.log('Falso');
}


// ||(ou) = retorna o primeiro valor verdadeiro ou o último falso
var condicional2 = (10 - 10) || (50 + 10) || (5 + 20);
if(condicional2) {
    console.log('Verdadeiro', condicional2);
}
else {
    console.log('Falso');
}


//Switch

var corFavorita = 'preto';
    

switch(corFavorita) {
    case 'Vermelho':
        console.log('Olhe para a flor');
    break
    case 'Verde':
        console.log('Olhe para a arvore');
    break
    case 'Azul':
        console.log('Olhe para o céu');
    default:
        console.log('Feche os olhos')
}


//Exercicio
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var eu = 24;
    vini = 32;

if(eu > vini) {
    console.log('é maior');
}
else if(eu === vini) {
    console.log('é igual');
}
else {
    console.log('é menor');
}

// Qual valor é retornado na seguinte expressão? 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
}
else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console? - Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? - Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
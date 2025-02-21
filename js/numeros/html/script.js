// Números
var idade = 24;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; //20000000000
//Precisão para até 15 digitos

//Operadoress aritméticos
var soma = 50 + 20; //70
var subtracao = 50 - 10; //60
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16 
var modulo = 14 % 5 //4 
 //Lembrando que soma em string serve para concatenar

//Operadores aritméticos (string)
var soma = '100' + 50; //10050
var subtracao = '100' - 50; //50
var multiplicacao = '100' * '2'; //200
var divisao = 'Comprei 10' / 2; //Nan (not a number)
 //É possível verificar se uma variável é NaN ou não com a função isNaN()

//Nan = Not a number
//var numero = 80;
//var unidade = 'kg';
//var peso = numero + unidade; //'80kg'
//var pesoPorDois = peso / 2; //Not a number

//Ordem importa 
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
 //Parentese para priorizar uma expressão

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
 //Mesma coisa para decremento (--x)

//Operadores Aritméticos Unários
//O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
 //O - antes de um número torna ele negativo


//Exercicio 2 Aula 2
//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)

//Crie duas espressões que retornem NaN
var compra = 'Comprei 30' / 5;
console.log(compra);

var valor = 50;
var objeto = 'cadernos';
var final = valor + objeto;
var finalPorDois = final / 2;
console.log(finalPorDois);

//Somar a string '200' com o número 50 e retornar 250
var mais = '200';
console.log(+mais + 50);
//ou
var mais2 = +'200' + 50;
console.log(mais2);

//Incremente o número 5 e retorne seu valor incrementado
var incremento2 = 5;
console.log(++incremento2);

// Como dividir o peso por 2?
//antes
//var numero = '80';
//var unidade = 'kg';
//var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)

//depois
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade;

console.log(peso);


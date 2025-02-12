//existem dois valores booleanos (True) e (False)

// Condições que retornam (False)
// if(false)
// if(0) //ou -0
// if(NaN) 
// if(null)
// if(undefined)
// if('') ou " " ou ` `
// Todo resto é (True)
// if(true)
// if(1)
// if(' ')
// if('Estephany')
// if(-5)
// if({})


var nome = 'Estephany';
var nome2 = 'Vinicius'; 
if(nome !== nome2) {
    console.log('São diferentes');
}
else {
    console.log('São iguais');
}


x = 100;
y = 50;

if(x < y) {
    console.log('x é menor que y');
}
else {
    console.log('x é maior que y');
}

var possuiGraduacao = false;

if(possuiGraduacao) {
  console.log('Possui graduação');
  var a = 10;
} 
else {
  console.log('Não possui graduação');
}
console.log(a);
// retorna Possui Graduação e não executa o else


var possuiPos = false;
var possuiDoutorado = true;

if(possuiPos) {
    console.log('Possui Pós Graduação e Doutorado');
}
else if(possuiDoutorado) {
    console.log('Possui Doutorado, mas não possui Pós Graduação');
}
else {
    console.log('Não possui Pós Graduação');
}

/*Operador lógico de negação
*O operador (!) nega uma operação booleana. Ou seja, (!true) é igual a (false) 
True
- if(!true) : false
-if(!1) : false
-if(!'') : true
-if(!undefined) : true
-if(!!' ') :true
-if(!!'') : false
 *Dica: pode utilizar o (!!) para verificar se uma expressão é true ou false

 Operadores de comparação 
 Vão sempre retornar um valor booleano
- 10 > 5; : true
- 5 > 10; : false
- 20 < 10; : false
- 10 <= 10; : true
- 10 >= 10; : flase

Operadores de comparação
O (==) faz uma comparação não tão estrita e o (===) faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo 
quando usamos (===)

-10 == '10'; // true
-10 == 10; // true
-10 === '10'; // false
-10 === 10 // true
-10 != 15 // true
-10 != '10' // false
-10 !== '10' // true*/



var b = 'carro';

console.log(b == 'Carro');  // (False) pois um esta com "c" maiusculo e outro minusculo

var c = 'Gato';

console.log(c === 'Gato'); // (True) pois as duas strings estão iguais

var d = 'casa';

console.log(d !== 'casa'); // (False) pois as duas strings não são diferentes

var e = '10';

console.log(e == 10); // (True) pois o valor está igual

var f = 20;

console.log(f === '20'); // (False) pois os tipos são diferente. Um é uma string e ou é um numeral

var g = 10;
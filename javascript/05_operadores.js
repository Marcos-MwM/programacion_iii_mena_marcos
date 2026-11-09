console.log('Operadores matematicos');
let a = 10;
let b = 3;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicacion:', a * b);
console.log('Division:', a / b);
console.log('Residuo:', a % b);
console.log('Potencia:', a ** b);

console.log('Operadores de asignacion abreviada');
let resultadoSuma = a;
resultadoSuma += b;
console.log('a += b:', resultadoSuma);

let resultadoResta = a;
resultadoResta -= b;
console.log('a -= b:', resultadoResta);

let resultadoMultiplicacion = a;
resultadoMultiplicacion *= b;
console.log('a *= b:', resultadoMultiplicacion);

let resultadoDivision = a;
resultadoDivision /= b;
console.log('a /= b:', resultadoDivision);

let resultadoModulo = a;
resultadoModulo %= b;
console.log('a %= b:', resultadoModulo);

let resultadoPotencia = a;
resultadoPotencia **= b;
console.log('a **= b:', resultadoPotencia);

console.log('Operadores de comparacion');
console.log('Igualdad estricta (a === b):', a === b);
console.log('Desigualdad estricta (a !== b):', a !== b);
console.log('Mayor que (a > b):', a > b);
console.log('Menor que (a < b):', a < b);
console.log('Mayor o igual (a >= 10):', a >= 10);
console.log('Menor o igual (b <= a):', b <= a);

console.log('Operadores logicos');
a = true;
b = false;

console.log('a:', a, '| b:', b);
console.log('AND (y):', a && b);
console.log('OR (o):', a || b);
console.log('NOT (no):', !a);
 

console.log('Operador de concatenar');
let apellido = 'sanchez';
console.log('rick'+ ' ' + apellido);
let edad = 20;
let mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

console.log(mensaje);

console.log('Tabla de multiplicar del 5');
const numeroTabla = 5;

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
	console.log(`${numeroTabla} x ${multiplicador} = ${numeroTabla * multiplicador}`);
}
const divisorNum=5;
for (let numero=5; numero <= 50 ; numero += 5){
    console.log(`${numero} / ${divisorNum} = ${numero /divisorNum}`);
}
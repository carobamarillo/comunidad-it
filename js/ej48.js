let mensaje= '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let string1=mensaje.substr(0,4);
let pi=parseFloat(string1)
let string2=mensaje.substr(38,2);
let significadoDeLaVida=parseInt(string2);
let resultado= pi+significadoDeLaVida;
console.log(resultado);
console.log(`${resultado.toString()} es el resultado de sumar las variables ${pi.toString()} y ${significadoDeLaVida.toString()}`);

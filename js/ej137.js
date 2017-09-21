let numeros=[];
let numerosModificados;
for (let numero=0;numero<=1000;numero++){
 numeros.push(numero);   
}

numerosModificados=numeros.map(function(numero){
    return numero+10;
});
for (let indice=0;indice<10;indice++){
    console.log(`indice ${indice},valor original:${numeros[indice]},valor modificado:${numerosModificados[indice]}`);
}
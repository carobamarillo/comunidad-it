let numero=[];
for(let numero1=1;numero1<=10;numero1++){
    numero.push(numero1)    
    }
let pares= numero.filter(function(numeroPar){
    return numeroPar%2==0;
});
let impares= numero.filter(function(numeroImpar){
    return numeroImpar%2!=0;
});

for (let indice=0;indice<10;indice++){
    console.log(pares[indice]);
}


function esPar(numero) {
    return true;
    
}

function esUnNumeroPar(numero) {
    if (numero%2===0){
        console.log(`${numero} es par`);
    }else{
        console.log(`${numero} no es par`);
    }    
}
esUnNumeroPar(2);
esUnNumeroPar(5);
esUnNumeroPar(3);
esUnNumeroPar(24);
esUnNumeroPar(12);


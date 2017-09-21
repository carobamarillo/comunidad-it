let resultado=0;
let contador=0;
for (let numero=0; numero<=1000;numero++){
    if ((numero%2)===0){
    contador++;
    resultado+=numero;
    console.log(resultado);
    if (contador===10){
        break;
    }    
}

}

let gastosDeViaje=[100,1000,200];
let gastoTotal= gastosDeViaje.reduce(function(total,gasto){
    return total + gasto;
});
console.log(`Gastos total del viaje:$${gastoTotal}`);
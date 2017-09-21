let gustoDeHelados=[];
let helados=gustoDeHelados.push(
    'Dulce de leche',
    'Menta granizada',
    'Banana split',
    'Cookies',
    'Tramontana',
    'Chocolate suizo',
    'Limon',
    'Crema suiza',
    'Americana',
    'Frutilla a la crema')

let lista=gustoDeHelados.reverse();
let listaDesordenanda = function(gustos,gustoP) {
    let sacar= gustos.shift();
    let agregar= gustos.unshift(gustoP);
    return gustos;
};

let listaOrdenanda= function (gustos,gustoF) {
    let sacar= gustos.pop();
    let agregar = gustos.push(gustoF);
    return gustos;
};

listaOrdenanda(gustoDeHelados, 'Nutella');
listaDesordenanda(gustoDeHelados, 'Chocolate');

let sinStock = [gustoDeHelados.shift(), gustoDeHelados.shift()];
console.log(gustoDeHelados);
console.log(sinStock);
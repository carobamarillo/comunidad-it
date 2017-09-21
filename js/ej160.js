const propiedades=['nombre', 'precio', 'cantidadVendida','localidad']
const juegos=[
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        
        precio: 1060,
        
        cantidadVendida: 276,
        
        localidad: 'Capital Federal' 
    },
    {
        nombre: 'Lego Marvel Super Heroes',
        
        precio: 700,
        
        cantidadVendida: 48,
        
        localidad: 'Capital Federal' 

    }
];
juegos.forEach(function(juego) {
    propiedades.forEach(function (propiedad) {
        console.log(juego[propiedad]);
    });
        
});
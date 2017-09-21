/* Accediendo a propiedades de un {}*/
const propiedades= ['patas','ladrar'];
const propiedad='patas';
const metodo='ladrar';
const perro={
    patas:4,
    ladrar: function(){
        console.log('GUAU');
    }
}


perro.patas; //4
perro['patas']; //4
perro[propiedad]; //4

propiedades.forEach(function(miPropiedad){
    if (typeof miPropiedad === function) {
        perro[miPropiedad]();    
    }else{
    console.log(object)};
});

//Callback ejemplo
function saludar(nombre,callback){
    console.log('Hola' + nombre);
    callback();
}


saludar('Caro',function(){
    console.log('chau');
});

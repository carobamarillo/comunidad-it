function obtenerIDUsuario() {
    return 50;
    
}
function usuarioValido() {
    return true;
}
if (obtenerIDUsuario()<30){
    return false;
}
if (usuarioValido){
    console.log('El usuario es válido');        
}else{
    console.log('El usuario no es valido');
}
    

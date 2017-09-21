let usuario={
    username: 'batman',
    password: 'Alfred1960KPO!'
};
function autenticarUsuario(nombreDeusuario,clave) {
    return usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!';    
}
if (autenticarUsuario()) {
    console.log('Datos del usuario');
    
} else {
    console.log('Usuario no autenticado');    
}

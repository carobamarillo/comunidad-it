function autenticarUsuario(usuario, password) {
    if (usuario === 'nacho' && password === 'Nerd1979') {
        console.log(`Bienvenido/a ${usuario}, te estabamos esperando`)
    } else if (usuario === 'pedro' && password === 'Batman0217') {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`)
    } else if (usuario === 'marta' && password === 'Madre2312') {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`)
    } else {console.log('Por favor ingrese credenciales válidas')}
};

autenticarUsuario('nacho', 'Nerd1979');
autenticarUsuario('pedro', 'Batman0217');
autenticarUsuario('marta', 'Madre2312');

let usuario = {
    username: null,
    password: null,
    saludar: function(){
        if (this.username != null) {
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.log('Este usuario no tiene username.');
        }
    },
    updatePassword: function(passwordElegido){
        return this.password = passwordElegido;
    },
    updateUsername: function(nombreDeUsuario){
        return this.username = nombreDeUsuario;
    }
};

usuario.updateUsername('caro');
usuario.updatePassword('123');
usuario.saludar();
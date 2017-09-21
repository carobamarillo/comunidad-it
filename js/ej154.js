const jugador={
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(daño){
        this.energia -= daño;
        if(this.energia <0){
            this.energia=0;
        }
    },
    recuperarEnergia: function(energiaRecuperada){
        if (energiaRecuperada >=0){
            this.energiaRecuperada;
            if (this.energia>100) {
                this.energia=100;
                
            }
        }
    },
    perderVida: function () {
        this.vidas--;
        if (this.vidas<0) {
            this.vidas=0;
            
        }
        
    },
    recuperarVida: function () {
        this.vidas++;
        if (this.vidas>90) {
            this.vidas=90;
        }        
    }

};
jugador.nombre='Wally West';
const mostrarEstadoDeJugador=function (jugador) {
    mensaje=`El jugador ${jugador.nombre}:\n\tTiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`
    console.log(mensaje);
    }

jugador.perderVida(1);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(10);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(5);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(15);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(20);
mostrarEstadoDeJugador(jugador);
jugador.recuperarEnergia(10);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(30);
mostrarEstadoDeJugador(jugador);
jugador.perderEnergia(40);
mostrarEstadoDeJugador(jugador);
jugador.perderVida(1);
mostrarEstadoDeJugador(jugador);
jugador.perderVida(1);
mostrarEstadoDeJugador(jugador);
jugador.recuperarVida(1);
mostrarEstadoDeJugador(jugador);
jugador.recuperarVida(1);
mostrarEstadoDeJugador(jugador);
jugador.recuperarVida(1);
mostrarEstadoDeJugador(jugador);
jugador.perderVida(1);
mostrarEstadoDeJugador(jugador);




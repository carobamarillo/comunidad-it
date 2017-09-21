function mostrarNumeros(inicio, fin) {
    if (inicio < fin) {
        for (let numero=inicio; numero<fin; numero++) {
            console.log(numero);
        } 
    } else if (inicio > fin) { 
        for (let numero=inicio; numero>fin; numero--) {
                console.log(numero)
            }
        } else if (inicio===fin) {
            (console.log('Ambos numeros son iguales'))
        } else {
            console.log('Ingrese NUMEROS')
        }
    }

mostrarNumeros(1000, 1000);
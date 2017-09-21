let numeroDelMes=1;
let nombreDelMes=null;
let cantidadDeDias=null;

switch (numeroDelMes) {
    case 1:
        nombreDelMes = 'Enero';
        break;
    case 2:
        nombreDelMes = 'Febrero';
        break;
    case 3:
        nombreDelMes = 'Marzo';
        break;
    case 4:
        nombreDelMes = 'Abril';
        break;
    case 5:
        nombreDelMes = 'Mayo';
        break;
    case 6:
        nombreDelMes = 'Junio';
        break;
    case 7:
        nombreDelMes = 'Julio';
        break;
    case 8:
        nombreDelMes = 'Agosto';
        break;
    case 9:
        nombreDelMes = 'Septiembre';
        break;
    case 10:
        nombreDelMes = 'Octubre';
        break;
    case 11:
    nombreDelMes = 'Noviembre';
        break;
    case 12:
        nombreDelMes = 'Diciembre';
        break;
    default:
    console.log('Ingrese un número entre 1 y 12');
}
switch (numeroDelMes) {
    case 1:
        cantidadDeDias = '31';
        break;
    case 2:
        cantidadDeDias = '28/29';
        break;
    case 3:
        cantidadDeDias = '31';
        break;
    case 4:
        cantidadDeDias = '30';
        break;
    case 5:
        cantidadDeDias = '31';
        break;
    case 6:
        cantidadDeDias = '30';
        break;
    case 7:
        cantidadDeDias = '31';
        break;
    case 8:
        cantidadDeDias = '31';
        break;
    case 9:
        cantidadDeDias = '30';
        break;
    case 10:
        cantidadDeDias = '31';
        break;
    case 11:
        cantidadDeDias = '30';
        break;
    case 12:
        cantidadDeDias = '31';
        break;
    default:
    console.log('Ingrese un número entre 1 y 31');
}


console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días`)
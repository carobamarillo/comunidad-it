const dia = ' ';
let nombreDelDia = null;

switch (dia) {
    case '1':
        nombreDelDia = 'Lunes';
        break;
    case ' ':
        nombreDelDia = `El dia seleccionado es ${nombreDelDia}`;
        break;
    default:
        nombreDelDia='Por favor seleccionar un número de 1 a 7';
}
console.log(nombreDelDia);

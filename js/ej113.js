function obtenerPerimetroRectangulo(base, altura) {
    if (base === altura) {
        return (base * 4);
    } else if (base !== altura) {
        return ((base *2) + (altura * 2));
    }
}
let perimetro = obtenerPerimetroRectangulo(5, 2);
console.log(`El perímetro es ${perimetro}`);
if (perimetro > 100) {
    console.log('El perímetro es muy grande')
} else if (perimetro < 100) {
    console.log('Este perímetro no es muy grande')
}
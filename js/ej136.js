let mutantes= [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe'
]
let contador=0;
let mensaje='';
mutantes.forEach(function(mutante) {
    if (mutante === 'Jean Elaine Grey' || mutante ==='James "Logan" Howlett') {
        if(contador<1){
            mensaje+=mutante + '/';
        
    }else{
        mensaje+=mutante;
    }
    contador++
    }        
});
console.log(mensaje);
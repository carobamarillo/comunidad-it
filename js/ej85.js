console.log(0);
let f1=0;
let f2=1;
let n=1;
do {
    let x=f1;
    f1=f2;
    f2=x+f2;
    n++;
    console.log(f1);
}
while (n<10 ) {
}


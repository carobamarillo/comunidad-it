window.onload=function(){
    let arr= [
     'batmanbyn.png',
     'flashbyn.png',
     'supermanbyn.png',
     'wonder_womanbyn.png'
    ];
    let body= document.querySelector('body');
    arr.forEach(function(imagen) {
        let img = document.createElement('img');
        img.src = `imgs/${imagen}`;
        img.onmouseover = function() {
            let src = img.src.replace('byn', '');
            img.src = src;
          }
          img.onmouseout = function() {
            let src = img.src.replace('.png', 'byn.png');
            img.src = src;
          }      
          body.appendChild(img);
        })
      }
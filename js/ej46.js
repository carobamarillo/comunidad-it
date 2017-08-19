let usuarioYPassword='pepito2017,12345';
let nombreDeUsuario=usuarioYPassword.substr(0,10);
let password=usuarioYPassword.substr(11,5);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);
//Leer información por pantalla
// salario base, venta 1, 2 y 3

let sb,v1,v2,v3;
let totalVentas = 0;
let com = 0;
let totalPagar = 0;

sb = Number(prompt('Ingrese salario base'));
v1 = Number(prompt('Ingrese venta 1'));
v2 = Number(prompt('Ingrese venta 2'));
v3 = Number(prompt('Ingrese venta 3'));

 totalVentas = v1 + v2 + v3;

 com = totalVentas * 0.1;

 totalPagar = sb + com;

 alert(`El Total a pagar es: 
  ${totalPagar}`);




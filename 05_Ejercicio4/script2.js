
let fruta = prompt('Ingrese fruta');

switch(fruta.toLocaleLowerCase){
    case 'mango':
    alert(`El mango cuesta $10.000`);
    break;
    case 'fresa':
    alert(`La fresa cuesta $12.000`);
    break;
    default:
    alert(`La fruta ingresada se encuentra agotada`);
}
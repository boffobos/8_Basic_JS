let x = false;
let inputType = typeof(x);
//console.log(inputType);
switch (inputType) {
  case 'number':
    console.log('x - число');
    break;
  case 'string':
    console.log('x - строка');
    break;
  case 'boolean':
    console.log('x - логический тип');
    break;
  case 'bigint':
    console.log('x - оооочень большое число');
    break;
  case 'object':
    console.log('x - объект');
    break;
  case 'function':
    console.log('x - функция');
    break;  
  default:
    console.log('тип x неизвестен');
}
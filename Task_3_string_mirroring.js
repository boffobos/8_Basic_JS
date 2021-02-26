let string = prompt('Введите строку');
let strLength = string.length;
//console.log(strLength);
let char='';
let invertedString = '';
let i = strLength;
while (i>=0) {
  i--;
  //console.log(i);
  char = string.charAt(i);
  //console.log(char);
  invertedString += char;
  //console.log(invertedString);
  }
console.log(invertedString);
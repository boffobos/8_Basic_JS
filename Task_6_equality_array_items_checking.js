//let arr = [5, 10, 12, 25, 60];
//let arr = [1, 1, 1, 1, 1];
let arr = ['tut', 'tut', 'tut', 'tut'];
let arrLength = arr.length;
let j;
//let arrCheck_true = 0;
let arrCheck;
//console.log(arrLength);
for (let i = 0; i < arrLength - 1; i++ ) {
  j = i + 1;  
  if (arr[i] !== arr[j]){
      arrCheck = false;
      break;
  }
}
  if (arrCheck == false)
  {
    console.log('Массивы не равны');
  }
  else {
    console.log('Массивы равны');
  }
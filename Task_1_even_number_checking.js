let numInput = prompt('Введите значение');
numInput =+ numInput;
//console.log(numInput); //visual testing
//console.log(typeof(numInput)); //visual testing
//console.log(isNaN(numInput)); //visual testing
//Checking if the input is number
if(typeof(numInput) == "number" && !Number.isNaN(numInput)) {
  if(numInput % 2 == 0 && numInput !== 0) {
    console.log('Число четное')
  }
  //if(numInput === 0){
  //  console.log('Число - 0')
 // }
  else { if(numInput === 0) {
    console.log('Число - 0')
  } else {
    console.log('Число нечетное')
    }
  }
}
else {
  console.log('Упс! Вы ввели не число.')
}
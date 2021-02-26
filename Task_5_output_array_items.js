let arr = [5, 6, 89, 95, 68, 64, 'I', false, NaN, 42];

let arrLength = arr.length;
console.log(`В массиве ${arrLength} элементов`);
for (let i = 0; i < arrLength; i++ ) {
  console.log(`${i}-й элемент массива - ${arr[i]}`);
}
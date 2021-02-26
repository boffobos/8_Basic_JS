let arr = [NaN, 0, 25, 10, 42, 0, 5, 51, 3, 'data', null, NaN,, 0, 100, 'test', NaN];
function checkOddEven(input){
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < input.length; i++)
    {   
        if (typeof input[i] === 'number')
        {
            if (input[i] % 2 === 0 && input[i] !== 0 ){even++}
            if (Math.abs(input[i] % 2) === 1 && input[i] !== 0 ){odd++}
            if (input[i] === 0){zero++}
        }
    }
    console.log(`Четных чисел в массиве - ${even}`);
    console.log(`Нечетных чисел в массиве - ${odd}`);
    console.log(`Нулей в массиве - ${zero}`);
}
function checkNotNumbers(input){
    let undef = 0;
    for(let i = 0; i < arr.length; i++)
    {   
        if(typeof input[i] === "undefined" || typeof input[i] !== 'number' || Number.isNaN(input[i])){undef++}
    } 
    console.log(`Остальных нечисловых элементов - ${undef}`);
}

console.log(`Элементов в массиве - ${arr.length}`);
checkOddEven(arr);
checkNotNumbers(arr);

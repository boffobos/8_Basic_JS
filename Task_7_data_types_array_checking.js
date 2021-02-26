let arr = [2, 5, 3, 7, 10,, 15, 16, null, NaN, 0, 0,,, 'text'];
let odd = 0;
let even = 0;
let zero = 0;
let undef = 0;
for(let i=0; i < arr.length; i++)
{
    if(typeof(arr[i]) === 'number' && !Number.isNaN(arr[i]) && arr[i] !== 0) 
    {
        if(arr[i] % 2 === 0) {even++}    
        else                {odd++}
    }
    else 
    {
        if(arr[i] === 0)    {zero++}
        else                {undef++}
    }                     
}
console.log(`Четных - ${even}, Нечетных - ${odd}, Нулевых - ${zero}, Остальных - ${undef}.`);
console.log(`Элементов массива - ${arr.length}`);
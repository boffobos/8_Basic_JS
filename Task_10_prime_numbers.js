let input = prompt('Введите число');
function checkPrime(number){
    let result;
    number = + number;
    if (number <= 1000 && number > 1)
    {
        for(let i = 2; i <= number; i++)
        {   
            if(number % i === 0 && number !== i){result = false; break}
            else{result = true}
        }
    }
    else
    {
        if(number === 0){result = 'Введите число в диапазоне от 2 до 1000'}//if(number === 0){result = 'Введите не 0'}
        else if(number === 1){result = 'единица не считается простым числом'}//else if(number === 1){result = 'Введите не 1'}
            else if(typeof number === "number" && !Number.isNaN(number) ){result = 'Введите число в диапазоне от 2 до 1000'}
        else{result = 'Введите число'}
    }
    return result;
}
if (checkPrime(input) === true){alert('Число простое')}
else if (checkPrime(input) === false){alert('Число составное')}
else{alert(checkPrime(input))}
console.log(checkPrime(input));
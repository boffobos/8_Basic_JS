let myMap = new Map();
myMap.set('birthDate', 1994);
myMap.set('birthDay', 'wednesday');
myMap.set(42, true);
myMap.set(null, NaN);
myMap.set(1984, 'Big Brother');
for (let key of myMap.keys())
{
    console.log(`Ключ - ${key}, значение ${myMap.get(key)}`);
}
/*Массивы */

const arr = [11 , 2 , 'Porsh', {
    name:'Sergey',
    age: 26
},{
    name: 'Viktor',
    age:60
}]
const cars = ['Mazda','Porsh','Lada']

/*Поиск по объектам */
const dd = arr.find((n) => {
    return n.age < 30;
})
console.log(dd)

/*Поиск индекса*/
const sInd = arr.findIndex((n) => {
    return n.age==26;
})
console.log(sInd)

//Проверка на наличие в массиве 
console.log(arr.includes(1))
const newCars = cars.map(car => car.toUpperCase())
console.log(newCars)
const arrTwo = ['Hello','I','am','Sergey']
/*Перебор по массиву */
// arrTwo.forEach((el,i) => {
//     console.log('index %d', i);
// });
const g = (el) => {
    return console.log(el);
}
cars.push('Pejo'); //добавляет в конец массива
cars.unshift('Ph'); //добавляет в начало массива
const s = cars.shift() //удаляет из начала массива и сохраняет удаляемый элемент
g(cars);

const testArrSM = ['Сухоломкин','Юра'] 
const testArr = [['Буйнов','Сергей'],['Сафронов','Виктор'],['Сухоломкин','Юра']]
for(let elem of testArr){
    console.log(elem)
}
/*Выбора максимального значения из массива*/
let arr = [3, 5, 1];
console.log( Math.max(...arr) ); //Оператор расширения
/*остаточные параметры*/
const f1 = ((...args) => {
    console.log(args)
})
f1(1,5,6)

/*Разбить строку на массив */
let str = "Привет";
// const arrSimbol = [...str]
const arrSimbol = str.split('')
console.log( arrSimbol[0] );
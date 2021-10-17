const people = [
    {name:'Владилен', age: 25, budjet: 40000},
    {name:'Елена', age: 40, budjet: 4000},
    {name:'Игорь', age: 32, budjet: 28000},
    {name:'Михаил', age: 20, budjet: 15000},
    {name:'Костя', age: 17, budjet: 2000},
    {name:'Владилен', age: 26, budjet: 30000},
]
// num 1
// for(let per of people){
//     if(per.name=='Елена'){
//         console.log(per.name)
//     }
// }

// num 2
// people.forEach(function(per, index, arr){
//     console.log(per)
//     console.log(index)
//     console.log(arr)
// })

// num 2-1
// people.forEach(per=> console.log(per.name))

// num 3
// const newp = people.map(per => {
//     return `${per.name} ${per.budjet}`
// })
// console.log(newp)
// num 3=1
// const newp = people.map(per => `${per.name} ${per.budjet}`)
// console.log(newp)

// num 4
// const newp = people.filter(per => {
//     if(per.age>=26){
//         return true
//     }
// })
// console.log(newp)
// num 4-1
// const newp = people.filter(per => per.age>=26)
// console.log(newp)

// num 5
// const newp = people.reduce((tot, per) => {
//       return tot += per.budjet  
//     }, 0)
//     console.log(newp)
// num 5-1
// const newp = people.reduce((tot, per) => tot += per.budjet,0)
// console.log(newp)

// num 6
// const newp = people.find(per => per.name=='Елена')
// console.log(newp)

// num 7 поиск и возврат индекса
// const newp = people.findIndex(per => per.name=='Елена')
// console.log(newp)

// ${} - литералы
/* метод чейн (цепочка)*/
// const newp = people
//     .filter(per => per.budjet > 20000)
//     .map(per => {
//         return {
//             info: `${per.name} ${per.age}`,
//             price: Math.sqrt(per.budjet)
//         }
//     })
//     .reduce((tot,per) => tot+per.price,0)
//     console.log(newp)

/*Генератор случайного числа в диапозоне */
// function randBetween(min,max){
//     return Math.random() * (max-min)+min
// }
// n = randBetween(4,10)

// function per(s, name, age){
//     return 'Привет'+s[0]+name+s[1]+age
// }
// const n = 'Сергей'
// const a = 35
// const o = per` имя ${n}, возраст ${a}`
// console.log(o)

/*Стрелочная функция */
// const per = (name) => {
//     return name+ 'Сергей'
// }
// console.log(per('Буйнов'))
//***
// const sum = (a=10, b=a+10) => a+b
// console.log(sum(2))

/*Подсчет всех значений передаваимых в функцию */
// const sum = (...all) => {
//     let r = 0
//     for(let n of all){
//         r += n
//     }
//     return r
// }
//***
// function sum(...all){
//     let r = 0
//     for(let n of all){
//         r += n
//     }
//     return r
// }
// const a = sum(3,5,2,3)
// console.log(a)

/*Замыкание */
// function per(name){
//     return function(lastName){
//         console.log(lastName+' '+name)
//     }
// }
// const n = per('Буйнов')
// console.log(n('Сергей'))
// console.log(n('Виктор'))


//**** Метод Фибоначи
// const fib = [1,1,2,3,5,8,13]
// const pow2 = num => num ** 2
// // const fibPow = fib.map(pow2).map(Math.sqrt)
// const fibPow = fib.map(num => num**2).map(Math.sqrt)
// console.log(fibPow)


/*Числа Фибоначи */
// const fib = n => {
//     let prev = 0, next = 1, ret=''
//     for(let i = 0; i < n; i++){
//       let temp = next;
//       next = prev + next;
//       prev = temp;
//       if(next){
//         ret += ','+next
//       }
//     }
//     return ret;
//   }
//   console.log(fib(20))

/*Число на оборот */
// const n = 328
// while(n > 0){
//     dig = n % 10
//     rev = rev * 10 + dig
//     n = n 
// }
// let rev = 0
// let dig = n % 10
// rev = rev * 10 + dig
// console.log(rev)

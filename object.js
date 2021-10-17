/* Объекты */
const person = {
    name: 'Sergey',
    age: 35,
    isProgramer: true,
    language: ['ru','en','de'],
    'complex key': 'Complex Value',
    ['key'+(3+2)]: 'Compudetd key',
    greet(){
        console.log('Helo')
    },
    info(){
        console.info()
    }
}
// console.log(person.name)
// const key = 'age'
// console.log(person[key])
// console.log(person['complex key'])
// person.greet()
// person.age++
// console.log(person.age)
// person.language.push('pu')
// console.log(person.language)
// console.log(person)
// delete person['key5']
// console.log(person)
/*Деструктуризация*/
// const {name, age: perAge, language} = person
// console.log(' ! '+ perAge)
/*Пробежаться по объекту*/
// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }
// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

const logger = {
    ke(obj){
        console.log('Вывод объекта: ', Object.keys(obj))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}}" : ${this[key]}`)
        })
    },
    withParams(top=false, between=false, bottom=false){
        if(top){
            console.log('-----Start-----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}}" : ${this[key]}`)
            if(between && index!=array.length-1){
                console.log('----------') 
            }
        })
        if(bottom){
            console.log('-----End-----')
        }
    }
}
logger.ke(person)
const logger2 = {
    ke(){
        console.log('Вывод объекта: ', Object.keys(this))
    }
}
const bo = logger2.ke.bind(person)
bo()
logger2.ke.call(person)
logger.keysAndValues.call(person)
// logger.withParams.call(person, true, true, true)
//logger.withParams.apply(person, [true, true])
const chislaObj = {x:1,b:2,c:3}
const chislaArr = [{x:1},{x:2},{x:3}]
let res = Object.keys(chislaObj).reduce((a,b) => a+chislaObj.b,0)

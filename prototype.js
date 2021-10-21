/*Прототипы ES5*/
const Animal = function(option){
    this.name = option.name
    this.color = option.color
    // this.voice = function(){
    //     console.log('Base vioce from', this.name)
    // }
}
const dog = new Animal({name:'Rex', color:'#000'})
Animal.prototype.voice = function(){
    console.log('Base vioce from', this.name)
}
dog.voice()
const Cat = function(option){
    Animal.apply(this, arguments)
    this.thisTail = option.thisTail
    this.type = 'cat-black'
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Animal.prototype.voice = function(){
    console.log('Base vioce from new', this.name)
}
Cat.prototype.voice = function(){
    Animal.prototype.voice.apply(this,arguments) //Вывод старого значения
    console.log('Base myau', this.name) // Переопределение значения для cat
}
const cat = new Cat({name:'Murzik', color:'#000', thisTail:true});
cat.voice()
console.log(cat)

/*Классы ES6*/
// class Animal {
//     constructor(option){
//         this.name = option.name
//         this.color = option.color
//     }
//     voice (){
//         console.log('Base vioce from', this.name)
//     }
// }
// const dog = new Animal({name:'Rex', color:'white'})
// class Cat extends Animal {
//     constructor(option){
//         super(option)
//         thisTail = option.thisTail
//         type = 'cat-dog'
//     }
//     voice (){
//         console.log('Base myau', this.name)
//     }
// }
// const cat = new Cat({name:'Murzik', color:'#000', thisTail:true})

/*Example */
Object.prototype.print = function(){
    console.log(`I am Object`, this)
}
cat.print()

Array.prototype.myMap = function(){
    return this.map.apply(this, arguments)
}
console.log([1,3,5].myMap(x => x ** 2));

String. prototype.toTag = function(tagName){
    return `<${tagName}>${this}</${tagName}>`
}
console.log('text'.toTag('b'));
console.log('text'.toTag('strong'));
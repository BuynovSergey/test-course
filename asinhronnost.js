setTimeout(function() {
    console.log("This runs after 5 seconds");
   }, 5000);
console.log("This runs first");

const delay2 = ((callback, wait=1000) => {
    setTimeout(callback, wait)
})
delay2(()=>console.log('Hello'),2500)

/*Промис*/
const delay = (wait=1000) => {
    const promise = new Promise((resolve, rejects) => {
        setTimeout(()=>{
            resolve()
            //rejects('Что то пошло не так')
        }, wait)
    })
    return promise
}
// delay(2500)
//     .then(()=>{
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Error', err))
//     .finally(()=> console.log('Finnaly'))
/***** */
const getData = () => new Promise(resolve => resolve([1,2,3,5,8,13]))
// getData().then(data=> console.log(data))

async function asincExample(){
    // await delay(3000)
    // const data = await getData()
    // console.log('Data', data)
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch(e){
        console.log(e)
    } finally {
        console.log('Finally')
    }
}
asincExample()
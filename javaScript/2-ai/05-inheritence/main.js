// // class Transport {
// //     model = ""
// //     fuel = ""
// //     constructor(fuel, model) {
// //         this.fuel = fuel
// //         this.model = model
// //     }
// //     drive = () => {
// //         console.log("drive")
//     // }
// // }
// // const transport =new Transport("benzin","asd")
// // console.log(transport.model)
// // console.log(transport.fuel)
// // transport.drive()
// // class Car extends Transport {

// // }
// // const car = new Car("dizil", "honda")
// // console.log(car.model)
// // console.log(car.fuel)
// // car.drive()

// class Parents {
//     name = ""
//     surname = ""
//     money = 0


//     constructor(name,surname,money) {
//         this.name = name
//         this.surname = surname
//         this.money=money
//     }


//     get fullName() {
//         return this.name + " " + this.surname
//     }
//     freetime() {
//         console.log('relax')
//     }
// }

// class Children extends Parents {
//     freetime (){
//         if(this.money > 100){
//         console.log('play')
//     } else{
//         super.freetime()
//     }
//     }
// }
// const child = new Children("Asan", "hasan", 120)
// console.log(child.fullName)
// console.log(child.money)
// child.freetime() 

class Parents{
    money=0
    constructor(money){
        this.money=money
    }
    getMoney(){
    return this.money}

}
class Children extends Parents{
    getMoney(){
        return super.getMoney()*2
        }

    }
const child= new Children(120)
console.log(child.getMoney())
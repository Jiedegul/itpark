// const user = {
//     name:"Asan",
//     age:17
// }
// user.name = "Asan"
// user.age = 17


// console.log(user.name)


const numbers = document.querySelectorAll(".number")
const input = document.querySelector('input')
const plus = document.querySelector('.plus')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

numbers.forEach((number)=>{
    number.onclick = () => {
        input.value += number.innerText
    }
})

plus.onclick = () => {
    input.value += "+"
}
reset.onclick = () => {
    input.value = ""
}

result.onclick = () => {
    input.value += "=" + eval(input.value)
}

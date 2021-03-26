const a = 4
const b = 5 
const c = 10

if (a+b>c && c+a>b && b+c>a){
    console.log(true)
} else {
    console.log(false)
}

const access = confirm("Are you sure?")
if (access){
    console.log("Вы успешно удалили")
} else {
    console.log("Вы успешно отменили")
}


// const mother = confirm("Mother")
// const father = confirm("Father")

// if (mother == true || father == true){
//     console.log("Пойдет")
// } else {
//     console.log("Не пойдет")
// }


// const login = prompt("Login")
// const password = prompt("Password")

// const sLogin = "asan"
// const sPassword = "12345"


// if (sLogin == login && sPassword == password) {
//     console.log("Вы залогинены");
// }else {
//     console.log("Логин пароль не правильно");
// }


// const a = +prompt("a")
// const b = +prompt("b")

// console.log(a+b);

// const arr = [5,2,"asan",true]

// console.log(arr.push(15));



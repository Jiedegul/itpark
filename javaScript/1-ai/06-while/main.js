// const button = document.querySelector("button")
// const container = document.querySelector("#container")


// button.onclick = () => {
//     let counter = 0
//     while(counter < 5){
//        counter += 1
//        container.innerHTML+="<div class='box'>"+value+"</div>"
//     }
// }

// const tbody = document.querySelector("tbody")

// button.onclick = () => {
//     let counter = 0
//     while(counter<5){
//         counter +=1
//         tbody.innerHTML += "<tr><td>" +counter+ "</td><td>"+counter**2+"</td></tr>"
//     } 
// }

// let c = 2
// const number = 60
// while(c < number){
//     if(number % c == 0 ){
//         console.log(c)
//     }
//     c+=1
// }


// let counter = 0
// while(counter<100){
//     if (counter%2 == 0){
//         console.log(counter)
//     }
//     counter++
// }

// let counter = 0
// while (counter < 100){
//     counter += 2
//     console.log(counter)
// }

// for (let i=0;i<100;i++){
    
// }

const numbers = [1,2,3,20,5,2,5,18,243]

let summa = 0
for(let i=0;i<9;i++){
    if(numbers[i]%2 == 0){
        summa += numbers[i]
    }
}

console.log(summa)
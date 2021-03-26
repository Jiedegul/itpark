// const buttons = document.querySelectorAll("button")

// console.log(buttons)

// for (let i = 0; i < buttons["length"]; i++) {
//     buttons[i].onclick = () => {
//         buttons[i].style.backgroundColor = "red"
//     }
// }

// buttons.forEach((button)=>{
//     button.onclick = () => {
//         button.style.backgroundColor = "red"
//     }
// })



const boxes = document.querySelectorAll(".box")
boxes.forEach((box) => {
    box.onclick = () => {
        box.style.backgroundColor = box.innerText
    }
})

const button = document.querySelector("button")
const box = document.querySelector(".box")
const input = document.querySelector('input')
const checkbox = document.querySelector('#checkbox')

// button.onmouseover = () => {
//     box.style.height = "200px"
//     box.style.width = "200px"
// }

// button.onclick = () => {
//     if (box.style.display == "none"){
//         box.style.display = "block"
//     } else {
//         box.style.display = "none"
//     }
// }


// button.onclick = () => {
//     if (box.style.marginLeft == "200px"){
//         box.style.marginLeft = "0px"
//     } else {
//         box.style.marginLeft = "200px"
//     }
// }

input.focus()
button.onclick = () => {
    if (checkbox.checked == true) {
        if (input.value == "kandaysyn") {
            box.innerHTML += "Jakwy ozun kandaysyn<br>"
        } else if (input.value == "jawyn kanchada") {
            box.innerHTML += "on altyda<br>"
        }else if (input.value == "jawyn kanchada") {
            box.innerHTML += "on altyda<br>"
        } else {
            box.innerHTML += input.value + "<br>"
        }
    }
    input.value = ""
    input.focus()
}



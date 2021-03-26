const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.onclick = () => {
        button.innerText = "x"
    }
    button.ondblclick = () => {
        button.innerText = "o"
    }
})
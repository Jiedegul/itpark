const button = document.querySelector(".btn-primary")
const reset = document.querySelector(".btn-danger")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const json = localStorage.getItem("guest")
let guest = JSON.parse(json)


const addGuest = (guestName) => {
    const li = document.createElement("li")
    li.className = "list-group-item"
    li.innerText = guestName
    const x = document.createElement("button")
    x.className = "float-right btn btn-danger"
    x.innerText = "x"
    x.onclick = () => {
        guest = guest.filter((item)=>{return item !== guestName })
        const json = JSON.stringify(guest)
        localStorage.setItem("guest",json)
        li.remove()
    }
    li.appendChild(x)
    ul.appendChild(li)
}

guest.forEach((item) => {
    addGuest(item)
});


input.focus()
button.onclick = () => {
    if (input.value.trim() !== "") {
        addGuest(input.value)
        guest.push(input.value)
        const json = JSON.stringify(guest)
        localStorage.setItem("guest", json)
    }
    input.value = ""
    input.focus()
}

reset.onclick = () => {
    const del = confirm("Вы уверены")
    if (del === true) {
        ul.innerHTML = ""
        localStorage.setItem("guest", "[]")
    }
}
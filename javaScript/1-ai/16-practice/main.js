const rows = document.querySelectorAll('tbody tr')
const totalPrice = document.querySelector("#total-price")

rows.forEach((row)=>{
    const input = row.querySelector("input")
    const price = row.querySelector(".price")
    const priceNumber = +price.innerText
    input.onclick = ()=>{
        const totalPriceNumber = +totalPrice.innerText
        if (input.checked === true){
            totalPrice.innerText = priceNumber + totalPriceNumber
        } else {
            totalPrice.innerText = totalPriceNumber - priceNumber
        }
        
    }
})
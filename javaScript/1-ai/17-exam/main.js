const productName = document.querySelector('#product')
const productCount = document.querySelector('#count')
const productPrice = document.querySelector("#price")
const productList = document.querySelector('ul')
const button = document.querySelector('button')
const totalPrice = document.querySelector('#totalPrice')

button.onclick = () => {
    const productValue = productName.value
    const countValue = +productCount.value
    const priceValue = +productPrice.value

    const li = document.createElement('li')
    li.className = "list-group-item"

    const spanProduct = document.createElement('span')
    spanProduct.className = "product"
    spanProduct.innerText = productValue
    li.appendChild(spanProduct)

    const spanCount = document.createElement('span')
    spanCount.className = "count"
    spanCount.innerText = countValue
    li.appendChild(spanCount)

    const spanPrice = document.createElement('span')
    spanPrice.className = "price"
    spanPrice.innerText = priceValue
    li.appendChild(spanPrice)

    productList.appendChild(li)

    const totalPriceValue = +totalPrice.innerText

    totalPrice.innerText = priceValue*countValue + totalPriceValue


    productName.value = ""
    productCount.value = ""
    productPrice.value = ""
    productName.focus()
}
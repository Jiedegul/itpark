const images = document.querySelectorAll('.slide img')
const spans = document.querySelectorAll('.pagination span')
const length = images["length"]



const setImage = (counter) => {
    images.forEach(
        (img,index)=>{
            img.className = ""
            spans[index].className = ""
        }
    )
    images[counter].className = "active"
    spans[counter].className = "active"
}

let counter = 0
setInterval(
    () => {
        counter = counter%length
        setImage(counter)
        counter+=1
    }, 3000)
class Metr {
    m = 0
    constructor(m) {
        this.m = m
    }

    get km() {
        return this.m / 1000
    }

    get cm() {
        return this.m * 100
    }

    set km(km) {
        this.m = km * 1000
    }

    set cm(cm) {
        this.m = cm / 100
    }
}

const metr = new Metr(10000)
console.log(metr.km)
metr.km = 20
console.log(metr.km)
// console.log(metr.km())
// metr.cm()
// console.log(metr.m)

// const km = metr.getKm()
// const cm = metr.getCm()

// console.log(" it is km "+km)
// console.log("it is cm "+cm)





class Second {
    s = 0

    constructor(s) {
        this.s = s
    }

    getHour = () => {
        return this.s / 3600
    }

    getMin = () => {
        return this.s / 60
    }

    setHour = (hour) => {
        this.s = hour * 3600
    }

    setMin = (min) => {
        this.s = min * 60
    }
}

const second = new Second(4800)

console.log(second.min)
second.min = 120
console.log(second.s)
console.log(second.min)

console.log(second.hour)
second.hour = 480
console.log(second.s)
console.log(second.hour)


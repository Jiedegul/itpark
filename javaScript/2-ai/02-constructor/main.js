class Car {
    model = ""
    series = ""

    constructor(model,series){
        this.model = model
        this.series = series
    }

    drive = () => {
        console.log(this.model + " drive")
    }

    getSeries = () => {
        console.log(this.series)
    }
}

const car1 = new Car("bmv","4872548234583276")
// car1.model = "bmv"
car1.drive()
car1.getSeries()

const car2 = new Car("audi","874326587326548732")
// car2.model = "audi"
car2.drive()
car2.getSeries()
class Car {
    model = ''

    drive = () => {
        console.log("car driving")
    }

}

const car1 = new Car()
car1.model = "audi"
car1.drive()

const car2 = new Car()
car2.model = "mers"
car2.drive()

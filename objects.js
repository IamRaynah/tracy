// function bakeCake(unga, eggs, water, oil, flavour, size) {
//     let cake = {}
//     cake.unga = unga
//     cake.eggs = eggs
//     cake.water = water
//     cake.oil = oil
//     cake.flavour = flavour
//     cake.size = size

//     return cake
// }

// let cake = bakeCake('2kg', 3, "500ml", "2 teaspoon", "Vanilla", "2kg")
// console.log(cake)

function makeCar(make, model, year, colour, topSpeed) {
    let car = {}

    car.status = 'stopped'
    car.make = make
    car.model = model
    car.year = year
    car.colour = colour
    car.topSpeed = topSpeed

    car.drive = function() {
        console.log('starting car....')
        console.log('driving...')
        console.log('car is going at ' + this.topSpeed)
        car.status = 'driving'
    }

    car.stop = function() {
        console.log('stopping car....')
        console.log('car is stopped')
        car.status = 'stopped'
    }

    return car
}

let corolla = makeCar('Toyota', 'Corolla', 2015, 'red', 200)
console.log(corolla)
corolla.drive()
console.log(corolla)
corolla.stop()
console.log(corolla)
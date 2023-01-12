const Dealership = function(name, maximumNumberOfCars){
    this.name = name;
    this.maximumNumberOfCars = maximumNumberOfCars;
    this.cars = [];
};

Dealership.prototype.countCarsInStock = function(cars){
    return this.cars.length;
}

Dealership.prototype.addCarToStock = function(Car){
    this.cars.push(Car);
}

Dealership.prototype.getManufacturers = function(){
    carManufacturers = [];
    this.cars.forEach(carManufacturers.push(Car.manufacturer))
}
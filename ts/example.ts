class Vehicle {
}

class Car extends Vehicle{
};

interface CarPark {
    park(car : Car) : void;
}

class BigPark implements CarPark {
    park(vehicle : Vehicle) : void {
        console.log(`park ${vehicle.constructor}`);
    }
}

const park = new BigPark();
const carPark: CarPark = park;
carPark.park(new Car());




class Vehicle {
}

class Car extends Vehicle{
};

class Plane extends Vehicle{
};

interface CarPark {
    park(car : Car) : void;
}
interface PlanePark {
    park(plane : Plane) : void;
}

class BigPark implements CarPark, PlanePark {
    park(vehicle : Vehicle) : void {
        console.log(`park ${vehicle.constructor}`);
    }
}

const park = new BigPark();
const carPark: CarPark = park;
const planePark: PlanePark = park;
carPark.park(new Car());
planePark.park(new Plane());




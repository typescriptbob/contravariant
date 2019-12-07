class Vehicle {
}

class Car : Vehicle{
};

class Plane : Vehicle{
};

interface CarPark {
    void park(Car car);
}
interface PlanePark {
    void park(Plane plane);
}

class BigPark : CarPark, PlanePark {
    void park(Vehicle vehicle){
        System.Console.WriteLine("park",vehicle);
    }
}

CarPark carPark = new BigPark();
PlanePark planePark = new BigPark();
carPark.park(new Car());
planePark.park(new Plane());
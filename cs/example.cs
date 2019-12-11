class Vehicle {
}
class Car : Vehicle {
};
interface CarPark {
    void park(Car car);
}
class BigPark : CarPark
{
    public override void park(Vehicle vehicle) {
        System.Console.WriteLine("park", vehicle);
    }
}
class Test {
    static void run() {
        CarPark carPark = new BigPark();
        carPark.park(new Car());
    }
}

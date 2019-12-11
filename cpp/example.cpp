#include <string>
#include <bits/stdc++.h>
#include <typeinfo>

class Vehicle {
};

class Car : Vehicle {
};

class CarPark {
    virtual void park(Car car) = 0;
};

class BigPark : CarPark {
    virtual void park(Vehicle vehicle) {
        std::cout << "park" << typeid(vehicle).name() << std::endl;
    }
};

int main(int argc, char **argv) {
    CarPark &carPark = BigPark();
}
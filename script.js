const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg"
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg"
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg"
},
{
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png"
}
];

class Transport{
constructor(type,price,brand){
this.type = type;
this.price = price;
this.brand = brand;
}
getInfo(){
return `Type: ${this.type}, Brand: ${this.brand}`;
}
getPrice(){
return this.price;
    }
}

const newCar1 = new Transport('car', 4300000, 'Audi');
const newCar2 = new Transport('car', 2800000, 'Mercedes-Benz');
const newCar3 = new Transport('bike',1300000, 'Harley-Davidson');
const newCar4 = new Transport('bike',1400000,'Harley-Davidson');
console.log(newCar1.getInfo());
console.log(newCar2.getInfo());
console.log(newCar3.getInfo());
console.log(newCar4.getInfo());


class Car extends Transport{
constructor(brand, price, doors){
super('car', price, brand);
this.doors = doors;
}
    getDoorsCount(){
return this.doors;
    }
}
const car1 = new Car('Audi',4300000,4,);
const car2 = new Car('Mercedes-Benz',2800000, 4,);
console.log(car1.getDoorsCount());
console.log(car2.getDoorsCount());

class Bike extends Transport{
constructor(brand, price, maxSpeed){
super('bike', price,brand)
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
return this.maxSpeed;
    }
}

const bike1 = new Bike('Harley-Davidson',1300000,220);
const bike2 = new Bike('Harley-Davidson', 1400000,210);
console.log(bike1.getMaxSpeed());
console.log(bike2.getMaxSpeed());

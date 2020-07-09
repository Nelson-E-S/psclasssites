const print = args => {console.log(args);};

var cars = ['BMW','Volvo','Mini'];

for (car in cars){
    print(car);
    car = cars[car];
    print('  '+car);
}
print('');
for(car of cars)
    print(car);

print('');
/**Exercise 1*/
var dishes = [
    {name:"mac & cheese", price:5},{name:"salad",price:3}
];
for(dish in dishes){
    dish = dishes[dish];
    print(`Dish Name: ${dish.name}\n   Dishp rice: $${dish.price}`);
}
print('');
let spaceship = {
    location: 'Earth',
    launch: function()
    {
        this.location = "Outer Space";
    }
};
print(`Your location: ${spaceship.location}`);
print(`Launching spaceship...`);
spaceship.launch();
print(`Your location: ${spaceship.location}`);
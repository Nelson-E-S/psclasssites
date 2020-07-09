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
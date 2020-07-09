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
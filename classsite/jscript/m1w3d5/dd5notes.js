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
    location: "Earth",
    launch: function(){
        this.location = "Outer Space";
    },
    flyTo: function(loc){
        this.location = loc;
    }
};
print(`Your location: ${spaceship.location}`);
print(`Launching spaceship...`);
spaceship.launch();
print(`Your location: ${spaceship.location}`);

print('');
print("Lets go to Mars!");
spaceship.flyTo("Mars");
print(`Launching spaceship...`);
print(`Your location: ${spaceship.location}`);

print('');
//const print = args => {console.log(args);};
var robot = {
    name: "",
    x: 0,
    y: 0,
    move: function(steps, direction){
        /*this can be done with if statements simply by breaking out each case into an if statement...I like using switches to easily cover invalid options*/
        switch(direction.toLowerCase()){
            case 'forward':{
                this.x += steps;
                break;
            }
            case 'backward':{
                this.x -= steps;
                break;
            }
            case 'up':{
                this.y += steps;
                break;
            }
            case 'down':{
                this.y -= steps;
                break;
            }
            default:{
                print('Invalid direction!');
            }
        }
        this.location();
    },
    location: function(){
        print("### Robot coordinates ###");
        print(`x: ${this.x} y: ${this.y}`);
    }
}
var directions = ['forward','backward','up','down'];
var rndDir = () => Math.floor(Math.random() * (directions.length - 1));
var rndSteps = () => Math.floor(Math.random() * 10) + 1;
for(let i = 0; i < 10; i++)
    robot.move(rndSteps(),directions[rndDir()]);
//For each of the exercises below, assume you are starting with the following people array.

var people = ["Greg", "Mary", "Devon", "James"];
//Using a loop, iterate through this array and console.log all of the people.
for(person of people)
    console.log(person);
console.log('');
//Write the command to remove "Greg" from the array.
const removePerson = p => {
    for(i in people){
        if(people[i] === p)
            people.splice(i,1);
    }
};
removePerson("Greg");
console.log('people: ' + people);
console.log('');
//Write the command to remove "James" from the array.
removePerson("James");
console.log('people: ' + people);
console.log('');
//Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log('people: ' + people);
console.log('');
//Write the command to add your name to the end of the array.
people.push("Nelson");
console.log('people: ' + people);
console.log('');
//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(person of people){
    console.log(person);
    if(person === "Mary")
        break;
}
console.log('');
//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
var newPeople = people.slice(people.indexOf("Mary") + 1,people.length);
console.log('newPeople: ' + newPeople);
console.log('');
//Write the command that gives the indexOf where "Mary" is located.
console.log(`Mary is located here: ${people.indexOf("Mary")}`);
console.log('');
//Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(`Foo is located here: ${people.indexOf("Foo")}`);
console.log('');
//Redefine the people variable with the value you started with. 
//Using the splice command, 
//remove "Devon" from the array and 
//add "Elizabeth" and "Artie". 
//Your array should look like this when you are done 
//["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];
removePerson("Devon");
people.splice(people.indexOf("Mary") + 1,0,"Elizabeth","Artie");
console.log('people: ' + people);
console.log('');
//Create a new variable called withBob and
//set it equal to the people array concatenated with the string of "Bob".
var withBob = people + "Bob";
console.log('withBob: ' + withBob);
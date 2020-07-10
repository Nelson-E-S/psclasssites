/**helper */
const print = args => console.log(args);

/**1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:*/
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
/**Sample Output: name,sclass,rollno */
 for (const [key, val] of Object.entries(student)){
     print(key);
 }
 /*print(Object.keys(student));*/

 /**2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; */
print(student);
delete student.rollno;
print(student);

/**3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :*/
var student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
print(`length of student2 obj: ${Object.keys(student2).length}`);

/**4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor*/
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
for (book of library)
   print(book.readingStatus);

/**5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder. */
const cylinder = {
    radius: 0,
    height: 0,
    getRadius: function(){
        return this.radius;
    },
    getHeight: function(){
        return this.height;
    },
    setRadius: function(r){
        this.radius = r;
    },
    setHeight: function(h){
        this.height = h;
    },
    getVolume: function(){
        return Math.PI * Math.pow(this.getRadius(), 2) * this.getHeight();
    }
};
cylinder.setHeight(5);
cylinder.setRadius(2);
print(cylinder.getVolume().toFixed(4));

/**6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6] */
var numArr = [6,4,0,3,-2,1];
const bubbleSort = (inputArr) =>{
    let changed;
    do {
        changed = false;
        for(let index = 0; index < inputArr.length; index++){
            if (inputArr[index] > inputArr[index + 1]){
                let tmp = inputArr[index];
                inputArr[index] = inputArr[index + 1];
                inputArr[index + 1] = tmp;
                changed = true;
            }
        }
    } while(changed);
    return inputArr;
};
print(bubbleSort(numArr));

/**7. Write a JavaScript program which returns a subset of a string. Go to the editor
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"] */
var str = "dog";
const subset = s =>{
    let strArr = s.split('');
    let newArr = [];
    for (let i = 0; i < strArr.length; i++){
        let tmp = "";
        for(let j = i; j < strArr.length; j++){
            tmp += strArr[j];
            newArr.push(tmp)
        }
    }
    return newArr;
}
print(subset(str));

/**8. Write a JavaScript program to create a Clock. Go to the editor
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47" */
let iterations = 6;
let count = 0;
const getTime = () =>{
    let date =  new Date();
    return `${(date.getHours()<10)?"0":""}${date.getHours()}:${(date.getMinutes()<10)?"0":""}${date.getMinutes()}:${(date.getSeconds()<10)?"0":""}${date.getSeconds()}`;
};
let currentTime = setInterval(()=>{
    print(getTime());
    count++;
    if (count === iterations)
        clearInterval(currentTime);
},1000)

/**9. Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user. */
const circle = {
    radius: 0,
    getRadius: function(){
        return this.radius;
    },
    setRadius: function(r){
        this.radius = r;
    },
    getCircumference: function(){
        return 2 * Math.PI * this.getRadius();
    },
    getArea: function(){
        return Math.PI * Math.pow(this.getRadius(), 2);
    }
}
circle.setRadius(5);
print(`Circle radius:${circle.getRadius()}\nCircumference: ${circle.getCircumference()}\nArea: ${circle.getArea()}`);
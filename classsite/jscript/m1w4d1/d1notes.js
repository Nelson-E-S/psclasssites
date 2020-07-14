let hotelCalifornia = {
    name: 'Hotel California',
    location: 'California',
    rating: 4,
    vacancies: true,
    tags: [
        'pink champagne',
        'wine',
        'lovely',
        'can\'t leave'
    ],
    rooms: [{
            'roomNumber': 102,
            'size': 'Queen Double',
            'price': 55,
            'booked': true
        },
        {
            'roomNumber': 202,
            'size': 'King Suite',
            'price': 68,
            'booked': false
        },
        {
            'roomNumber': 404,
            'size': 'Queen Double',
            'price':60,
            'booked': false
        }
    ]
};

class HotelRoom{
    constructor(rn){
        this.roomNumber = rn;
        this.size = '';
        this.price = 0;
        this.booked = false;
    };
    getRoomNumber(){
        return this.roomNumber;
    };
    getSize(){
        return this.size;
    };
    getPrice(){
        return this.price;
    };
    getBooked(){
        return this.booked;
    };
    setSize(s){
        this.size = s;
    };
    setPrice(p){
        this.price = p;
    };
    setBooked(b){
        this.booked = b;
    };
}

class Hotel{
    constructor (name,loc,rating,vac){
        this.name = name; 
        this.location = loc;
        this.rating = rating;
        this.vacancies = vac;
        this.tags = [];
        this.rooms = [];
    };
    getName(){
        return this.name;
    };
    getLocation(){
        return this.location;
    };
    getRating(){
        return this.rating;
    };
    getVacancies(){
        return this.vacancies;
    };
    getTags(){
        return this.tags;
    };
    getRooms(){
        return this.rooms;
    };
    getRoomNumbers(){
        let roomNumbers = [];
        this.getRooms().forEach((rm)=>{
            roomNumbers.push(rm.roomNumber);
        });
        return roomNumbers;
    }
    setName(n){
        this.name = n;
    };
    setLocation(l){
        this.location = l;
    };
    setRating(r){
        this.location = r;
    };
    setVacancies(v){
        this.vacancies = v;
    };
    addTags(t){
        if(t.length === 1){
            this.tags.push(t);
        } else if(t.length > 1){
            for(let tag of t)
                this.tags.push(tag);
        }
    };
    removeTags(t){
        if(this.tags.length){
            for(let tag in this.tags){
                if(this.tags[tag] === t){
                    this.tags.splice(tag,1);
                    break;
                }
            };
        };
    };
    addRooms(rm){
        this.rooms.push(rm);
    };
    removeRooms(rn){
        if(this.rooms.length){
            for(let room in this.rooms){
                if(this.rooms[room].roomNumber === rn){
                    this.rooms.splice(room,1);
                    break;
                }
            }
        }
    }
}

const myHotel = new Hotel('Air Hotel','New York',4.5,true);
myHotel.addTags(['fancy']);
myHotel.addTags(['chic','comfy']);
const room1 = new HotelRoom(102);
room1.setSize('Queen Double');
room1.setPrice(55);
room1.setBooked(true);
const room2 = new HotelRoom(202);
room2.setSize('King Suite');
room2.setPrice(68);
room2.setBooked(false);
const room3 = new HotelRoom(404);
room3.setSize('Queen Double');
room3.setPrice(60);
room3.setBooked(false);
myHotel.addRooms(room1);
myHotel.addRooms(room2);
myHotel.addRooms(room3);
//console.log(room1.getRoomNumber());
//console.log(room2);
//console.log(room3);
//let rms = [room1,room2,room3];
/*rms.forEach((rms)=>{
    console.log(rms.getRoomNumber())
})*/
//console.log('');
//console.log(`Hotel Name: ${myHotel.getName()}\nHotel Location: ${myHotel.getLocation()}\nHotel Ratings: ${myHotel.getRating()}`);
//console.log(`Hotel Tags: ${myHotel.getTags()}`)
//console.log(`Hotel Rooms: ${myHotel.getRoomNumbers()}`)
/* class Person {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  }
  
  const you = new Person('Matt', 36, 'blue', 'blonde');
  console.log(you);
  you.setHair('red');
  console.log(you); */
  

  class Person{
    constructor(n,a){
      this.name = n;
      this.age = a;
    }
    describe(){
      return `${this.name}, ${this.age} years old`;
    }
  }
  
  var jack = new Person("Jack", 25);
  var jill = new Person("Jill", 24);
  console.log(jack.describe());
  console.log(jill.describe());
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function findFavFood(obj) {
    for(let key in obj){
        console.log(key, obj[key])
    };
}
console.log(findFavFood(person3))

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => `${this.name} is ${this.age}!`;

    addAge = (add_year) => {this.age = this.age + add_year}
};

const person1 = new Person('Sean', 40);
const person2 = new Person('Mike', 45);

console.log(person1.printInfo());
console.log(person2.printInfo());

person1.addAge(10);
console.log(person1.age)

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let big_small_word = function(word) {
    return new Promise(function(resolve, reject) {
        if (word.length > 10) {
            resolve('Big Word')
        } else {
            reject('Small Number')
        }
    });
};

big_small_word('asymetrical').then(function(response) {
    console.log(response);
});

// https://www.codewars.com/kata/555086d53eac039a2a000083/javascript

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

function grow(x){return x.reduce((a,b)=>a*b)};



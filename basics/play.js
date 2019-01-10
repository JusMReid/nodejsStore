//console.log(" what do you want the app to be called?");

const fs = require('fs');

const person = {
    name:"Justin",
    age: 24,
    occupation: "Software Dev",
    greeting: function () {
        console.log("Hi, my name is "+ this.name);
    },
    altGreeting(){
        console.log("Hello, I'm a "+ this.occupation + " named "+this.name);
    }
}

const teams = ["Giants", "Knicks", "Mets"];
for(let team of teams){
    //console.log("NY "+ team);
}

//slice() copies an array
//console.log(teams.slice())

// 
const teamsSpreadCopy = [...teams];
//console.log(teamsSpreadCopy);

const toArray = (...args) =>{
    return args
}
//console.log(toArray(1,4,7));

const destructObj = ({name, age})=>{
    console.log(name, age);
}
//destructObj(person);

const {name, occupation} = person;
//console.log(name, "is a " +occupation);

const foods = ["bakedMac", "pizza", "Lemonade"];
const [food1, food2, food3] = foods;
//console.log(food1, food3, food2);


setTimeout(()=>{
   console.log("ok") 
}, 2000);

const favApple = "GrannySmith"
console.log(`My favorite apple is ${favApple}`);
// console.log(teams.map(team => "NY " + team));
// console.log(teams);
/* */
//console.log(person);

//person.greeting();
//console.log(person.age);
//fs.writeFileSync("log.txt", "Logging...");
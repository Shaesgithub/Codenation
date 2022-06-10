
// ACTIVITY 3 (if/else/switch)

/*
Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.
*/

let passWord = "Sunflower"

if (passWord.length < 8){
    console.log ("Password too short")
} else{
    console.log (`${passWord}`)
};

// ACTIVITY 4 (if/else/switch)

/*
Create a variable called numm.
Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.
*/

let numm = 10

if (numm % 3== 0 || numm % 5== 0){
    console.log ("This number is divisible by 3 or 5")
} else{
    console.log ("Something else")
};


// ACTIVITY 5 (if/else/switch)

/*
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.
*/

let num = 60

if (num % 5== 0 && num % 3== 0){
    console.log("fizz buzz")
} else if (num % 5== 0){
    console.log("buzz")
} else if  (num % 3== 0){
    console.log("fizz")
} else{
    console.log(num)
};

//ACTIVITY 2 (Arrays and Loops)

/*
Generate 6 random numbers between 1-50 and log them to the console.
*/

console.log (Math.floor(Math.random() * (5 - 1 + 1)) + 1);


//ACTIVITY 3 (Arrays and Loops)

/*
If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.
*/

let nine =[
    0,1,2,3,4,5,6,7,8,9
];
nine.reverse()
for ( let num = 0 ; num < nine.length; num++){
    console.log(nine[num]);
};

//ACTIVITY 5 (Arrays and Loops)
/*
Generate a random number between 1 and 30 six times.
For each random number generated, check if this number of divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not.
*/

let randomNum = [];
    for (let number = 0; number < 6; number++) {
    randomNum.push(Math.floor(Math.random() * 30));
        if (randomNum[number] % 7 === 0) {
            console.log(`${randomNum[number]} is divisible by 7`)
        } else {
            console.log(`${randomNum[number]} is not divisible by 7`)
        }
};

//ACTIVITY 2 (Objects)
/*
Create an object called pet with the key values of: name, typeOfPet, age, colour 
And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.
*/

let pet = {
    name:"Mercy",
    typeOfPet:"Dog",
    age:"7",
    colour:"Brown",
    eat () {
        return `${this.name} is eating`;
    },
    drink (){
        return `${this.name} is drinking`;
    }
};
console.log(pet.eat());
console.log(pet.drink());

/////


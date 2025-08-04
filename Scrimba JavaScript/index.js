let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = "";

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
   message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭";
    isAlive = false
}
console.log(message);

// let person = 
// {
//     aname : "Sahra",
//     age: 22,
//     country:"Canada"
// }

// function logData()
// {
//     console.log(person.aname + " is " + person.age + " and lives in " + person.country);
// }

// console.log(logData());

// let age = 5;


// if (age < 6)
// {
//     console.log("Free");
// }
// else if (age >=6 && age <=17 )
// {
//     console.log("child discount");
// }
// else if (age>= 18 && age <=26)
// {
//     console.log("student discount");
// }
// else if (age >=27 && age<=66)
// {
//     console.log("full price");
// }
// else 
// {
//     console.log("Senior citizen discount");
// }


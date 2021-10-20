// Linn Htet Kyaw, E8, CIS 425, 1 pm

// Adding a clause to enforce strict mode
"use strict";

// Declaring an empty array named scores
const scores= [];

// Declaring an array named names
const names = ["Mary", "Joseph", "Peter", "Susan"]

// Calling the initialize function and passing it arguments
initialize(78, 85, 89, 94)

// Declaring the initialize function
function initialize(n1, n2, n3, n4){
    // log to the console "initializing the array"
    console.log(`initializing....`)
    // using the push function, add the four parameters to the array
    scores.push(n1, n2, n3, n4)
}

// Declaring the printOneElement function
function printOneElement(element){
    console.log(element)
}

// Declaring the printScores function
function printScores(){
    // logging to the console that I am printing the names
    console.log(`Students in the array are:`)

    // implementing a for loop and printing all the values of the names array to the console.
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    // logging to the console that I am printing the scores
    console.log(`Corresponding scores in the parallel array are:`)
    // Calling the forEach function of the scores array object and supplying it with a reference
    // to the printOneElement function
    scores.forEach ( printOneElement )

}

// Declaring the calculateAverage
function calculateAverage(){
    // Declaring variables for total and average using let
    let total = 0.0;
    let average = 0.0;

    // Implementing a for loop using index-based looping
    for (let i = 0; i < scores.length; i++){
        // the scores from the scores array are all added up and stored in the total variable
        total += scores[i]
    }

    // Calculating the average of the scores
    average = total/scores.length
    // Returning the average
    return average
}

// Declaring the printAverage function
function printAverage(){
    // using the string interpolation technique to call the calculateAverage function
    console.log('Average of all scores is: ' + calculateAverage());
}

// Declaring the addElements function
function addElements(newNames, newScores){
    for (let i = 0; i < newNames.length; i++){
        // unshift function helps the order stay intact for both names and scores
        names.unshift(newNames[i])
        scores.unshift(newScores[i])
    }

    console.log(`Updated Database`)
    //FOR LOOP for printing new database
    for (let i = 0; i < names.length; i++){
        console.log(names[i] + ": " + scores[i])
    }
}

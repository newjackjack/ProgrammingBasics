//Variables practice
/* Create a program that contains the restrictions of age and height*/ 

var minimum_age = 10;//at least age of 10
var minimum_height = 42;//at least 42 inches

// console.log("The restrictions of minimum age is "+ minimum_age);
// console.log("The minimum height is "+ minimum_height);


var age = 9;

var height = 42;

// If the age is greater than 10 and higher than 42 inches than the kiddo can get on the ride
if ( age >= minimum_age && height >= minimum_height){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.")
}
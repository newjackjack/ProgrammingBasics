var age = 9;

var height = 42;

var minimum_age = 10;//at least age of 10
var minimum_height = 42;//at least 42 inches

// Stretch 1: Both requirement need to be met

// If the age is greater than 10 and higher than 42 inches than the kiddo can get on the ride
// if ( age >= minimum_age && height >= minimum_height){
//     console.log("Get on that ride, kiddo!");
// }
// else{
//     console.log("Sorry kiddo. Maybe next year.")
// }

//Stretch 2: Only Either one of the requirement needs to be met 
if ( age >= minimum_age || height >= minimum_height){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.")
}
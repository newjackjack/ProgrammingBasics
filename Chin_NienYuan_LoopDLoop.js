/*

Q1: How do we know we need a loop here?
A: Give a candy every two miles is a hint we need loop to 
iterate every mile and increment the number of candy.

Q: What's the starting point of the loop?
A: The loop starts from zero. However, no candy is given
if the runner does not run( mile === 0)

Q: When should the loop stop?
A: The loop can stop at mile 6 because there is no need
to increment the number of candy after 6 miles.

Q: How will the loop know when to stop?
A: After 6 miles, the number of candy will not increase so
the loop can stop at mile 6.

Q: What's incrementing for each iteration of the loop?
A: Because the mile is incrementing, the variable mile should
be incrementing in the loop.

Q: What variables do we need?
A: One vaiable, mile, iterate through the milage the runner
run, and the second variable to count the candy given every 2 miles.
*/
// Assignment
var totalMile = 10;
var numCandy = 0;

for( var mile = 0; mile <= 6; mile++){
    if( mile === 0){
        
    }else if( mile % 2 === 0){
        console.log("Give a candy")
        numCandy++;
    }
}
console.log(numCandy);

/*
Bonus:
Create a new loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour.

*/
var numCandy = 0;
var speed = 5.6;

for( var mile = 0; mile <= 6; mile++){
    if( mile === 0){
        
    }else if( mile % 2 === 0 && speed > 5.5){
        numCandy++;
    }
}
console.log(numCandy);
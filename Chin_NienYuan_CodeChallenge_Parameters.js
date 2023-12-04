/*
Using what you've learned about functions and parameters, 
create a function that, given a name, will say "good day" to that person by name.

For example, when calling the function like this: 
greet("Anakin") it would log to the console, 
Good day, Anakin!
 */

 //Level 1
 function greet(name){
     return "Good day, " + name + "!";
 }

//  console.log(greet("Anakin"));

 //Level 2 and Level 3
 function greetTimeName( time, name){
     if(time == "Morning" || time == "morning"){
        return "Good Morning, " + name + "!";
     }
     else if( time == "Afternoon" || time == "afternoon"){
         return "Good Afternoon, " + name + "!";

     }
     else if( time == "Evening" || time == "evening"){
         return "Good Evening, " + name + "!";
     }
     else if (name == "Count Dooku"){
        return "I'm coming for you, Dooku."
     }
     else{
        return "Good day, " + name + "!";

     }
     
 }
var greeting = greetTimeName("cbdjd", "Count Dooku");
console.log(greeting);
 



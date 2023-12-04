/*
As a diligent student, I want to reward myself if I finish my homework, and based on the time of day:

I want a latte if it's before 10 am
I want a hot chocolate it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep!


*/
// var homework;
/*
I need to convert string to number --> 10 am to 10
4 pm to 16
*/
// function strToNum(strNum){
    

// }

var reward;
var treatChoicesEven = [ "ice cream", "cookies", "candy"];
var treatChoicesOdd = ["hot chocolate", "tea", "cake"];
function rewardYourself( homework, time){
    if (homework != true){
        return "Finish homework first!";
    }
    //control flow to latte
    if ( time <= 10){
        reward = "latte";
    }
    //control flow to hot chocolate and icre cream
    else if ( 10 < time && time < 15 ){
        reward = "hot chocolate";
    }
    else if ( 15 <= time && time <= 18 && time % 2 == 0){
        // reward = "ice cream";
        reward = treatChoicesEven[(Math.floor(Math.random() * treatChoicesEven.length))];
    }
    else if ( 15 <= time && time <= 18 && time % 2 != 0){
        // reward = "hot chocolate";
        reward = treatChoicesOdd[(Math.floor(Math.random() * treatChoicesOdd.length))];
    }
    else if(  18 < time && time < 22 ){
        reward = "ice cream";
    }
    
    else{//( time > 22 )
        reward = "Get a nice sleep!";
    }
return reward;
}


// var time;
// var input = [true, "4pm"];
console.log(rewardYourself(true, 18));



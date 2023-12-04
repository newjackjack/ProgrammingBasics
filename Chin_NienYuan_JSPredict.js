//Predict 1: What will the console.log state when this function is called?
//Because the function myBirthYearFunc is called, the myBirthYearFunc will be executed.
//The console will print I was born in1980
//I think the string can make a minor change adding a space after in. This will make more sense.
function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();

//Predict 2: If this function is called with the argument 1980, what would the console.log state?
// The myBirthYearFunc require an argument which is 1980 in this case
//So the birthYearInput is 1980 making the console output I was born in1980
//Likewise, I will suggest add one space after in to make the string look nice.
function myBirthYearFunc(birthYearInput){
    console.log("I was born in " + birthYearInput);
}
myBirthYearFunc(1980);

//Predict 3: What would the various console.logs state?
//The add function takes two arguments and the first argument is num1 and the second is num2
//When the add function is called, 10 will be assigned to num1 and 20 will be assigned to num2.
//So, the console will output 
//Summing Numbers!
//num1 is: 10
//num2 is: 20
//30
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

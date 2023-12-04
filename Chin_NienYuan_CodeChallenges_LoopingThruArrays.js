// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];


//1. Write a for loop that will traverse through an array of numbers, and print each number.
// for( var i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }

console.log("Each number of arr1: " )+ printArray(arr1);
console.log("Each number of arr2: " )+ printArray(arr2);
console.log("Each number of arr3: " )+ printArray(arr3);

function printArray(arr){
    for( var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
function sumArray(arr){
    var sum = 0;
    for( var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log("The sum of the arr1 is: " + sumArray(arr1));
console.log("The sum of the arr2 is: " + sumArray(arr2));
console.log("The sum of the arr3 is: " + sumArray(arr3));

//3. Write a for loop that will traverse through an array of numbers, and print only the numbers greater than 5.
function findFive(arr){
    for( var i = 0; i < arr.length; i++){
        if( arr[i] > 5){
            console.log(arr[i])
        }
    }
}

console.log("Numbers in arr1 that is greater than 5 is: ") + findFive(arr1);
console.log("Numbers in arr2 that is greater than 5 is: ") + findFive(arr2);
console.log("Numbers in arr3 that is greater than 5 is: ") + findFive(arr3);

//Bonus: Modify your solution for #3 so that any numbers in the array that are not greater than 5 are instead replaced with a string of "No dice." This string should not be printed.

function replaceToFive(arr){
    var arrNew = [];
    for( var i = 0; i < arr.length; i++){
        if ( arr[i] <= 5 ){
            arr[i] = "No dice.";
            // console.log(i);
            // console.log(arr[i]);
        }
    }
    for( var j = 0; j < arr.length; j++){
        if ( arr[j] !== "No dice."){
            console.log( arr[j])
        }
    }
}
console.log("The modified arr1 is: " ) + replaceToFive(arr1);
console.log("The modified arr2 is: " ) + replaceToFive(arr2);
console.log("The modified arr3 is: " ) + replaceToFive(arr3);
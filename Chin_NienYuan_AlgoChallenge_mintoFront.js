/*
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
Do not otherwise change the array’s order.

Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
*/
//write a function that returns min number in the array
var minArray = Infinity;
function findMin(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < minArray){
            minArray = arr[i];
        }
    }
    return minArray;
}
// var result = findMin([4,2,1,3,5]);
// console.log(result);

function minToFront(arr){
    //find min in the array
    // var findMin = Math.min(arr);--> this will not work
    /*
    That is because Math.min or Math.max functions expect distinct variables and not an array. 
    So in order to do that before ES6/ES2015 apply method was used
    */
    // console.log(findMin);//so I wrote a function that finds min in an array
   var arrNew = [];
   arrNew.push(findMin(arr));
   for(var i = 0; i < arr.length; i++){
    if( arr[i] == findMin(arr)){
        //do nothing let it iterate to next index
    }
    else{
        arrNew.push(arr[i]);
    }
   }
   return arrNew
    
}
var result = minToFront([5,93,22,4]);
console.log(result);



function greeting(){
    return "Hello World";
}
var word = greeting();
// console.log(word);

// var arr = [];
// var arrOld = [ 1,5];
// var arrHead = arr.push;
// console.log(arrHead);


function swap(arr){
    var arrnew = [];
    arrnew.push(arr[arr.length-1]);
    
    //make a place holder to hold arr[0]
    var temp = arr[0];
    // var middleArray = [];
    for( var i = 1; i < arr.length - 1; i++){
        arrnew.push(arr[i]);
    }
    
    arrnew.push(arr[0]);
    return arrnew;
}
// console.log(swap([1,2,3,4,5,6]));

//code challenge
/*
Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
*/
function numToStr(arr){
    //arr of number
    for(var i = 0; i < arr.length; i++){
        //find negative and replace with 'Dojo'
        if ( arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
// console.log(numToStr([-1,-3,2]));
function sum_odd(){
    var sum = 0;
    //your code here
    for (var i = 2; i <= 348; i++){
        if( i % 2 !== 0){
            sum = sum + i;
        }
    }
    return sum; 
 }
// var sumOdd = sum_odd();
// console.log(sumOdd);
function findIndexOfX(){
	var array = [1,0];
	var x = 0;
	//your code here
	for ( var i = 0; i < array.length; i++){
	    if (array[i] === x){
	        return i;
	    }
	}
	return -1; 
}
// console.log(findIndexOfX());
function largestValue(){
	var array = [-3, -55, 10, -19, 27, -6, 2, 0, -11, -4];
	var largest = array[0];
	//your code here
	for( var i = 0; i < array.length; i++){
	    if( array[i] >= largest){
	        largest = array[i];
	    }
	}
	return largest; 
}
console.log(largestValue());
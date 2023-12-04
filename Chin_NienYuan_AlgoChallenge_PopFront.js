
function popFront(arr){
    var arrHead = arr[0];
    var arrTail = [];
    for( var i = 0; i < arr.length; i++){
        
        
        if ( i > 0){
            arrTail.push(arr[i]);
        }
        
    }
    console.log(arrTail);
    
    return  arrHead;
}
var result = popFront([5,93,22,4]);
// console.log([5,93,22,4]);
console.log(result);
// console.log(arr);

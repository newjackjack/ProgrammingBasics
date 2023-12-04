
function removeNegatives(arr) {
    var arrNew = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}


console.log(removeNegatives([3, 7, -23, 0, 2.5, -4]));


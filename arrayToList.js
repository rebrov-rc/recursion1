// Длину элементов объекта next:+ value
//  по длине массива + содержимого.


function arrayTuList(arr){
    let list = new Object;
    if (arr.length) {
        list.value = arr[0];
    }
    if (arr.length > 1) {
        list.next = arrayTuList(arr.slice(1));
    } else { 
        list.next = null;
     }

    return list;
}

console.log(arrayTuList([1, 2, 3, 4]));
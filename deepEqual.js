
// function deepEqual( x, y ) {

//     if ( typeof x === typeof y ) {
//         if ( x === y ){
//             return true;
//         } else {
//             return false;
//             // function recX(x){
//             //     if ( x.length )
//             // }
//         }
        
//     } else { 
        
//         return false;

//      }

// }
// console.log(deepEqual(1, 51))
//======================================



//сравнение рекурсивным вызовом
// должно сравнить каждый элемент x с каждым
// элементом y
//

            // function recX(x){
            //     let b;
            //     if ( x.length > 1 ) {
            //         b = recX(x.slice(1))
            //     return b;

            //     }
            // }

            // console.log(recX([1,2]))

// let a, b;
// a = [1, 2], b = [1, 2];

// if ( a.slice(0) === b.slice(0) ) {
//     console.log(true);
// } else { console.log(false); }

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  console.log(list)

  function rec(list){
      let arrr = [];
      if ( list.next >= 1 ) {
        arrr.slice(0) = list.value;
        // return arrr
      }
      if (list.next >= 1 ) {
        list.next;

      }
      return arrr;
  }
//   rec()
  console.log(rec(list))
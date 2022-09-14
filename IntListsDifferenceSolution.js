// 1)
const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

let difference = first
                 .filter(x => !second.includes(x))
                 .concat(second.filter(x => !first.includes(x)));

uniqArr = [...new Set(difference)].sort()                 
console.log(uniqArr)

// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]

// 2)

// const first = [1, 3, 3, 4, 6, 5, 4];
// const second = [6, 3, 5, 2, 2];

// function difference(first, second) {
//     var result = [];
//     for (let i = 0; i < first.length; i++) {
//         for (let j = 0; j < second.length; j++) {
//             if (second.indexOf(first[i]) === -1) {
//                 result.push(first[i]);
//             } else if (first.indexOf(second[j]) === -1) {
//                 result.push(second[j]);
//             }
//         }
//     }
//     result = [...new Set(result)]
//     return result;
//   }
// console.log(difference(first, second))
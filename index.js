// EXAMPLE 1 - Initialize an Array of Objects in JavaScript

const arr = Array.from(Array(2), () => ({
  key: 'value',
}));

// 👇️ [ { key: 'value' }, { key: 'value' } ]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Initialize an Array of Objects using `fill()`

// const arr = new Array(2).fill().map(() => ({
//   key: 'value',
// }));

// console.log(arr); // 👉️ [ { key: 'value' }, { key: 'value' } ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Initialize an Array of Objects using for loop

// const arr = new Array(2);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = {key: 'value'};
// }

// // 👇️ [{key: 'value'}, {key: 'value'}]
// console.log(arr);

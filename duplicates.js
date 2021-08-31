let arr = [
  4, 2, 7, 5, 8, 5, 3, 2, 1, 9, 22, 14, 5, 0, 6, 8, 22, 7, 6, 3, 14, 10, 4,
];
let arr1 = [];
for (let i = 0; i <= arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] === arr[j] && !arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
}
console.log(arr1);

// let arr2 = arr.sort();
// let arr3 = Array.from(new Set(arr2));
// console.log(arr3);
// uniques elements in an array

let res = arr.filter((val) => !arr1.includes(val));
console.log(res);

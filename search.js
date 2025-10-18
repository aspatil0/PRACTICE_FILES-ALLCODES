const arr = [5, 2, 9, 1, 7];
const target = 9;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Element found");
} else {
  console.log("Element not found");
}

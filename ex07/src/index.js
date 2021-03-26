let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [];
let setko = new Set(numberArray);

for (let i of setko) {
    uniqueArray.push(i);
}
uniqueArray.sort((a, b) => a - b);

console.log(uniqueArray);

module.exports = { numberArray, uniqueArray };

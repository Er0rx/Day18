let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);

let arrKey = [];
let arrValue = [];

for (let key of shoppingList) {
    arrKey.push(key[0]);
    console.log(`groceries: ${key[0]}`);
}

for (let val of shoppingList) {
    arrValue.push(val[1]);
    console.log(`amount: ${val[1]}`);
}

for (let i of shoppingList) {
    console.log([i[0], i[1]]);
}

module.exports = { shoppingList, arrKey, arrValue };

function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}

let iterator = myGenerator(6, 7, 8);
let generatorArray = [];

for (let iter of iterator) {
    generatorArray.push(iter);
}
console.log(generatorArray);
module.exports = { generatorArray, myGenerator };

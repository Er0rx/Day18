function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (var x = 1; x <= 5; x++) {
        yield x;
    }
}

function* insideGenerator2() {
    for (x = 10; x <= 15; x++) {
        yield x;
    }
}

function* insideGenerator3() {
    for (x = 6; x <= 9; x++) {
        yield x;
    }
}

let iterator = myGenerator();
let fifteenArray = [];

for (let i = 0; i <= 15; i++) {
    let { value } = iterator.next();
    if (i === 15) {
        fifteenArray.push(value + "!");
    } else {
        fifteenArray.push(value + "#");
    }
}

module.exports = { fifteenArray, myGenerator};

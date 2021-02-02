const number = [2, 3, 4, 5, 6, 7];

//for-loop use simple theme

const empty = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const newElement = element * element;
    empty.push(newElement);
}
// console.log(empty);

//Use function call map element

function square(element) {
    return element * element;
}
const result = number.map(function (element) {
    return element * element;
})

//Use array-function and call map element

const totalResult = number.map(element => element * element * element);
const Result = number.map(x => x * x)

// console.log(Result);
// console.log(totalResult);

// Use filter in number array

const filter = number.filter(x => x > 5);

// console.log(filter);

// Use finder in number array

const finder = number.find(x => x < 3);

// console.log(finder);
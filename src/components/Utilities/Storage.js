function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

// reduce
const numbers = [23, 43, 65, 24, 232];
let sum = 0;
for (const number of numbers) {
    sum = sum + number;
}

const reducer = (previous, current) => previous + current;
numbers.reduce(reducer, 0)

const items = [
    { id: 1, name: "item-1", price: 34 },
    { id: 2, name: "item-2", price: 32 },
    { id: 3, name: "item-3", price: 45 },
    { id: 4, name: "item-4", price: 76 },
    { id: 5, name: "item-5", price: 65 },
]
let total = 0;
for (const item of items) {
    total = total + item.price;
}
const itemReducer = (previous, current) => previous + current;
const itemTotal = items.reduce(itemReducer, 0)
console.log(itemTotal);
export { add, multiply }
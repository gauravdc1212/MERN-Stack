let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map Method

value.map((item) => {
    console.log(`Value X 10 =${item * 10}`)
});

// Reduce Method

let sumvalue = value.reduce((a, b) => {
    return a + b;
});
console.log(`Sum of Array = ${sumvalue}`)

// Filter Method
let evennum = value.filter((value) => {
    return value % 2 === 0;
})
console.log(`Even number ${evennum}`);
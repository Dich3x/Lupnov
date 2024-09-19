let a = 0;
let b = 1;
let sum = 0;
while (sum < 100000000000000000000) {
    sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
    a = b;
    b = sum;
}
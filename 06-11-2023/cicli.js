//for Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Do While loop
let j = 10;
do {
  j--;
  console.log(j);
} while (j > 0);

//Break in loop
console.log("Break in loop");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//Continue in loop
console.log("Continue in loop");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

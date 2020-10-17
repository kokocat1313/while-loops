// print out all numbers between -10 to 19
let num = -10
while(num <= 19) {
    console.log(num);
    num++
}

//print out even number between 10 to 40
let num1 = 10;

while(num1 <= 40){
    if (num1 % 2 === 0) {
        console.log(num1)
    }
    num1++
}

// print odds number between 300 to 333
let num2 = 300;

while (num2 <= 333){
if (num2 % 2 !== 0){
    console.log(num2)
}
num2++
}

//print number divisible by 5 and 3 between 5 and 50 

let num3 = 5

while (num3 <= 50){
    if (num3 % 5 === 0 && num3 % 3 === 0){
    console.log(num3)
   }
    num3++
}
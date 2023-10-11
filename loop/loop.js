

// Loop start

// 1- Loop Example numbers, odd numbers, even numbers
//number
for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}
//even number
for (let i = 0; i <=10; i=i+2) {
    console.log(i);
    
}


// odd number

for (let num = 1; num<=10; num=num+2) {
    console.log(num);
    
}

// 2- for and while loop in a reverse way

for (let num = 100; num>=0; num--) {
    console.log(num);
    
}
let num2=100
while (num2>=0) {
    console.log(num2);
    num2--
    
}

// 3- Write a program to calculate the average marks of math, biology, chemistry, 
//physics and bangla for a student

let math = 75.25
let biology =65
let chemistry =80
let physics =35.45
let bangla =99.5 ;
let totalmark=(math+biology+chemistry+physics+bangla)/5;
console.log( totalmark .toFixed(2));


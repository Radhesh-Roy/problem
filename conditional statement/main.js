

// //conditional statement start

// //1-positive or nagetive 


let a = -5;

if (a>0) {
    console.log(a,"positive number");
    
}
else if (a<0) {
    console.log(a,"negetive number");
    
}
else{
    console.log(a,"Zero Number");
}



// // 2-even or odd

let number =0

if (number%2==0) {
console.log(number,"even number");    
}
else{
    console.log(number,"Odd number");
}


// // 3- Find max between 2 numbers

let b =4
let c =4;

if (b>c) {
    console.log(b,"large number");
        
}
else if (b<c) {
    console.log(c,"large number");
}
else{
    console.log("Both number");
}

// // 4-Find max among 3 numbers


let num1 =1
let num2 =1
let num3 =1;

(num1>num2 || num1>num3)? console.log(num1,"large number"):(num2>num1 || num2>num3)?console.log(num2,"large number"):(num3>num1 || num3>num2 )?console.log(num3,"large number"):console.log("Both number");

//  5-Check vowel or consonant

let letter ='O';

if (letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u') {
    console.log(letter,"is vowel");
    
}
else if (letter=='A' || letter=='E' || letter=='I' || letter=='O' || letter=='U') {
    console.log(letter,"is vowel");
}   
else{
    console.log(letter,"is consonant");
}



// 6-input week number and console total day.

let week =6;

console.log(week*7,"days");

    

// //  7-input month number and console number of days in that month.

let year =2000
let month =21

let feb=(year%4==0 && year%100!==0)||(year%400==0)? 29:28

if (month==1 ||month==3 ||month==5 ||month==7 || month==8 ||month==10 || month==12) {
    console.log("31days");
    
}
else if (month==2) {
    console.log(feb);
}
else if (month==4 ||month==6 ||month==9 ||month==11) {
    console.log("30days");
    
}
else{
    console.log("Invalid month");
}

//  8-Number of day in a date

let years=2000
let months=12
let date=3
totalday=0

let february=(month%4==0 && month%100!==0)||(month%400==0)? 29:28

if (months==1) {
    totalday=date
    
}
else if (months==2) {
    totalday=31+date
    
}
else if (months==3) {
    totalday=date+february+31
    
}
else if (months==4) {
    totalday=date+february+31+30
    
}
else if (months==5) {
    totalday=date+february+31+30+31
    
}
else if (months==6) {
    totalday=date+february+31+30+31+30
    
}
else if (months==7) {
    totalday=date+february+31+31+30+31+30
    
}
else if (months==8) {
    totalday=date+february+31+31+30+31+30+31
    
}
else if (months==9) {
    totalday=date+february+31+31+30+31+30+31+31
    
}
else if (months==10) {
    totalday=date+february+31+31+30+31+30+31+31+30
    
}
else if (months==11) {
    totalday=date+february+31+31+30+31+30+31+31+30+31
    
}
else if (months==12) {
    totalday=date+february+31+31+30+31+30+31+31+30+31+30
    
}
console.log(totalday);


// 9-Result Sheet

let marks=67

if (marks>100 || marks<0) {
 console.log("Invlaid marks");   
}
else if (marks>=80) {
    console.log("A+");
    
}
else if (marks>=70) {
    console.log("A");
    
}
else if (marks>=60) {
    console.log("A-");
    
}
else if (marks>=50) {
    console.log("B");
    
}
else if (marks>=40) {
    console.log("C");
    
}
else if (marks>=33) {
    console.log("D");
    
}
else{
    console.log("F");
}

// 10-calculate electricity bill from given condition

let unit =150
let bill=0

if (unit<=50 ) {
    bill =unit * 0.50
 
    
}
else if (unit<=150) {
    bill=25+ (unit-50)* 0.75 
    
}
else if (unit<=250) {
    bill=100+(unit-150)* 1.20 
    
}
else if (unit>=250) {
    bill=220+(unit-250)* 1.50 
    
}

console.log(bill+55);



// conditional statement end
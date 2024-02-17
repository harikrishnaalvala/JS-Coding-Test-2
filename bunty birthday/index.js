"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const birthdaysList = JSON.parse(readLine().replace(/'/g, '"'));
  const buntyBirthday = new Date("2000-06-13");
let result={days:0,months:0,years:0};
birthdaysList.map((birth)=>{
    if(new Date(birth).getDate()===buntyBirthday.getDate()&&new Date(birth).getMonth()===buntyBirthday.getMonth()){
        result.days++;
    }
    if(new Date(birth).getMonth()===buntyBirthday.getMonth()){
        result.months++;
    }
    if(new Date(birth).getFullYear()===buntyBirthday.getFullYear()){
        result.years++;
    }
    
});
console.log(result.days)
console.log(result.months)
console.log(result.years)
/* Please do not modify anything above this line */

  // Write your code here
  
}

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
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));
let result=myArray.map((element)=>{
    if(typeof element==="number"){
        return element*2
    }else{
        return typeof element
    }
});
console.log(result)
}
/* Please do not modify anything above this line */

  // Write your code here
  

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
  const wordsList = JSON.parse(readLine().replace(/'/g, '"'));
  const myString = readLine();
let newList=[];
for(let word of wordsList){
    if(word.startsWith(myString)||word.endsWith(myString)){
        let upperCaseWord=word.toUpperCase();
        newList.push(upperCaseWord);
    }else{
        newList.push(word);
    }
}
console.log(newList);
/* Please do not modify anything above this line */
  
  // Write your code here

}

const str ="aabbccdd"
const mid = str.split("").length/2;
console.log("Mid is: ", mid);
const strarr = str.split("")
const finalArr = new Array(strarr.length).fill("a")
for(i=0;i<=mid;i++){
    finalArr[i] = strarr[str.length - i]
    finalArr[str.length - i] = strarr[i]
}
console.log("Reverse: ", finalArr.join(""))
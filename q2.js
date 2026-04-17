function longestConsec(strarr, k) {
    if(strarr.length === 0 || k > strarr.length || k <=0){
        return ""
    }
    let strToReturn = ""
    for(i=0;i<strarr.length-k+1;i++){
        const word = strarr.slice(i,i+k).join("")
        if(word.length > strToReturn.length){
            strToReturn = word;
        }
    }
    return strToReturn
}
console.log(longestConsec(strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
))
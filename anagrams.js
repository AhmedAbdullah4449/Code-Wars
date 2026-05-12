function anagram(str){

    // #approach 1
    let count=0;
    for(let i=0;i<str.length;i++){
        let strToCompare=str[i].split("").sort().join("")
        for(let j=i+1;j<str.length;j++){
            if(strToCompare === str[j].split("").sort().join("")){
                count+=1
            }
        }
    }
    return count

    // let dict={}
    // for (let word of str){
    //     const check = word.split("").sort().join("")
    //     if(dict[check]) dict[check].push(word)
    //     else dict[check] = [word]
    // }
    // return dict



    // #approach 2
    // let dict={}
    // let count= 0;
    // for(word of str){
    //     const check = word.split("").sort().join("")
    //     if(dict[check]){
    //         count+=dict[check];
    //         dict[check]+=1
    //     }else{
    //         dict[check]=1
    //     }
    // }
    // console.log("str", dict);
    // return count


    // #approach #3
    // if(str1.length !== str2.length){
    //     return false;
    // }
    // const dict1={}
    // const dict2={}
    // for(i=0;i<str1.length;i++){
    //     if(dict1[str1[i]]) dict1[str1[i]]+=1
    //     else dict1[str1[i]] = 1
    //     if(dict2[str2[i]]) dict2[str2[i]]+=1
    //     else dict2[str2[i]] = 1
    // }
    // keys1 = Object.keys(dict1)
    // keys2 = Object.keys(dict2)
    // if(keys1.length !== keys2.length) return false

    // for(key of keys1){
    //     if(dict1[key] != dict2[key]) return false
    // }
    // return true


    // #appraoch 4
    // dict={}
    // for(let word of str){
    //     let check = word.split("").sort().join("")
    //     if(dict[check]) dict[check].push(word)
    //     else dict[check]=[word]
    // }
    // return dict

    // #approach 5
    // function anagram(str) {
    // const dict = {};

    // for (let word of str) {
    //     // create frequency array (26 letters)
    //     const freq = new Array(26).fill(0);

    //     for (let char of word) {
    //         freq[char.charCodeAt(0) - 97]++;
    //     }

    //     const key = freq.join("#"); // unique signature

    //     if (dict[key]) {
    //         dict[key].push(word);
    //     } else {
    //         dict[key] = [word];
    //     }
    // }

    // return dict;
}

// console.log(anagram(["olleh","eholl","bye","yeb","lleho"]));
// }
// console.log(anagram(["hello","olleh","eholl"]));
console.log(anagram(["olleh","eholl","bye","yeb","lleho"]));
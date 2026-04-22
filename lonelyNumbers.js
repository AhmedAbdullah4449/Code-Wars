function countLonelyLetters(text) {
    const arr = new Array(26).fill(0)
    let str = text.replace(/[^A-za-z]/g,"")
    str= str.toLowerCase()
    console.log(str)
    for(i=0;i<str.length; i++){
            arr[str[i].charCodeAt(0)-97] += 1
        }   
    let count=0
    for(let i=0;i<arr.length; i++){
        if(arr[i] === 1){
            if(i===0 && arr[i+1] === 0) count+=1
            else if(i=== arr.length - 1 && arr[i-1] === 0) count+=1
            else if(arr[i+1] === 0 && arr[i-1]===0) count+=1
        }
    }
    return count;
  }

console.log(countLonelyLetters("Hello, World!"))
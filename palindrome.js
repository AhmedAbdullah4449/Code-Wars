function palindrome(message){
    const mid = (message.length) /2
    const revstr= new Array(message.length).fill("a");
    for(let i=0;i<=mid;i++){
        revstr[i]=message[message.length -1 - i]
        revstr[message.length -1 - i] = message[i]
    }
    return message === revstr.join("")
}
console.log(palindrome("abccba"))

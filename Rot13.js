function rot13(str) {
    let strToReturn= "";
    for(let char of str){
        let character= null;
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90){
            character = char.charCodeAt(0) + 13;
            if(character > 90){
                character=character-90+64;
            }
            console.log("character is: ", character)
            strToReturn+=String.fromCharCode(character);
        }
        else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0)<=122){
            character = char.charCodeAt(0) + 13;
            if(character > 122){
                character=character-122+96;
            }
            strToReturn+=String.fromCharCode(character);
        }
        else{
            strToReturn+=char;
        }
    }
    return strToReturn;
}

console.log(rot13("This is my first ROT13 excercise!"))
function add(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  let length = a.length > b.length ? a.length : b.length
  let carry = 0;
  let sum = ""
  console.log("Lnegth is: ", length)
  for(i=0;i<length;i++){
    if(i >= a.length){
      let check = carry + Number(b[i])
      sum += String(check % 10);
      carry=0;
      if(check > 9){
        carry= Math.floor(check / 10);
      }
      continue;
    }
    if(i >= b.length){
      let check = carry + Number(a[i])
      sum += String(check % 10);
      carry=0;
      if(check > 9){
        carry= Math.floor(check / 10);
      }
      continue;
    }
    let check = (carry + Number(a[i])) + Number(b[i]);
    sum+=String(check % 10);
    carry =0;
    if(check > 9){
      carry = Math.floor(check / 10);
    }
  }
  if(carry > 0){
    sum+=String(carry);
  }
  return sum.split("").reverse().join("");
}
console.log(add("63829983432984289347293874","90938498237058927340892374089"));
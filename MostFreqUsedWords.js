function topThreeWords(text) {
    text=text.toLowerCase().trim();
  const words = text.split(/\s+/);
  console.log("words", words);
const dict = {};
  for (let word of words){
    word = word.replace(/[^a-zA-Z']/g,"");
    if(word === "" || word === "'") continue;
    if(dict[word]){
        dict[word]+=1;
    }
    else{
        dict[word]=1;
    }
  }
  console.log("dict", dict);
  const sorted = Object.entries(dict).sort((a,b) => b[1] - a[1]).map(item => item[0]);
  console.log(sorted);
  return sorted.slice(0,3)
}

// console.log(
//   topThreeWords("AHmed is a great boy// ye's. ye's"
//   ),
// // );
// console.log(
//   topThreeWords(
//     "a a a  b  c c  d d d d  e e e e e",
//   ),
// );
// console.log(
//   topThreeWords(
//     "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.",
//   ),
// );
// console.log(
//   topThreeWords(
//     "  //wont won't won't ",
//   ),
// );
console.log(
  topThreeWords(
    "  '  ",
  ),
);

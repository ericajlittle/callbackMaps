//Yours will take in two arguments. The first will be an array to map and
// the second will be a callback function. The function will return a new array based on the results of the callback function.



var words = ["ground", "control", "to", "major", "tom"];

function map(list, cb) {
  arr = [];
  wordLength = "";
  for (var i = 0; i < list.length; i++) {
    wordLength = cb(list[i]);
    arr.push(wordLength);
  }
  console.log(arr);
};

console.log(map(words, function(word) {
  return word.length;
}));


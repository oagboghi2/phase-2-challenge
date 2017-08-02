var reverseSentence = function(string){
let res = string.split(" ").reverse().join(" ");
console.log(res);
return res;
};

reverseSentence("The cat jumped over the dog."); // => "dog. the over jumped cat The"
reverseSentence("Hello, world!"); // => "world! Hello,"

module.exports = reverseSentence;

const readlineSync = require('readline-sync');
console.log("Welcome to the Quiz!!")
var userName = readlineSync.question("What is Your Name?")

console.log(`Welcome to the game ${userName}`);




var questions = [{
  question: "What's the full and original name of Captain America?",
  answer: "Steve Rogers"
}, {
  question: "What's Thor's hammer called?",
  answer: "Mjolnir"
},
{
  question: "Do you know what's Spiderman's real name?",
  answer: "Peter Parker"
}];

var score = 0;

for(const data of questions){
  var answer = readlineSync.question(data.question);
  if(answer === data.answer) {
    score++;
  }
}


console.log(`${userName} your score is ${score}!`)
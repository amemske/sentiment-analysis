var sentiment = require("wink-sentiment");

var message = sentiment("Rice is amazing!");

var finalScore = message.score;

if (finalScore < 0) {
  console.log("Negative");
} else if ((finalScore = 0)) {
  console.log("Neutral");
} else {
  console.log("Positive");
}

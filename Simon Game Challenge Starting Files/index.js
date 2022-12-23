
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

function nextFunction(){

    var randomNumber = Math.floor(Math.random()*3);
    var randomChoosenNumber = buttonColours[randomNumber];
    gamePattern.push(randomChoosenNumber);

    $("#" +randomChoosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
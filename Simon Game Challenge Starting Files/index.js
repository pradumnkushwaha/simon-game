
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern =[];
var started = false;

var level = 0;

$(document).keydown(function()
{
  if(!started)
  {
    $("h1").text("Level "+level);
    
    nextSequence();
    started =true;
  }
  
});

$(".btn").click(function()
{
  var userChosenColour = $(this).attr("id");
 userClickedPattern.push(userChosenColour);
 animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1)


});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence(){
  userClickedPattern =[];
  level++;

  $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);



}

function playSound(sound)
{
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();

}

function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");

  setTimeout(function()
  {
    $("#"+currentColour).removeClass("pressed");
  },100);

}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

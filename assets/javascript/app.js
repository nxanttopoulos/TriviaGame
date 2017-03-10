var answers = ["A","C","B"], 
    answrList = answers.length;

function getCheckedValue( radioButton ){
    var radioBtn = document.getElementsByName( radioButton );
    for(var i=0; i<radioBtn.length; i++)
      if(radioBtn[i].checked) return radioBtn[i].value; 
}

function getScore(){
  var score = 0;
  for (var i=0; i<answrList; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1;
  return score;
}

function outOfTime(){
  
  $("#questions").html("<h2 id='results'>Time is up!<br><br>Your score is "+ getScore() +"/"+ answrList+"<br><br></h2>");
  $("#timeRemaining").remove();
  $("#questions").append("<button id='reset' onclick='reset()'>Play Again!</button>");
}

function returnScore(){

  $("#questions").html("<h2 id='results'>You finished!<br><br>Your score is "+ getScore() +"/"+ answrList+"</h2>");
  $("#timeRemaining").remove();
  $("#questions").append("<button id='reset' onclick='reset()'>Play Again!</button>");
}

function reset() {

    location.reload();

}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text("Time Remaining: "+ minutes + ":" + seconds);

        if (--timer < 0) {
            return;
            outOfTime();
        }
    }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 60 * 2,
        display = $('#timeRemaining');
    startTimer(twoMinutes, display);
});

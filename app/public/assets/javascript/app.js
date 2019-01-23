var answers = ["A","C","B","B","A"], 
answrList = answers.length;

function getCheckedValue( radioButton ){
    var radioBtn = document.getElementsByName( radioButton );
    for(var i=0; i<radioBtn.length; i++)
      if(radioBtn[i].checked) return radioBtn[i].value; 
}

function getScore(){
  var score = 0;
  var incorrect = 0;
  var unanswered =0;
  var submissions =[];
  for (var i=0; i<answrList; i++) {
    if(getCheckedValue("question"+i)===answers[i]) score += 1;
    else if (getCheckedValue("question"+i)===undefined) unanswered += 1;
    else incorrect += 1;
  }
  submissions = {correct:score, wrong:incorrect, null:unanswered};
  return submissions;
}

function returnScore(){


  $("#questions").html("<h2 id='results'>All Done!<br><br>Correct Answers: "+getScore().correct+"<br><br>Incorrect Answers: "+getScore().wrong+"<br><br>Unanswered: "+getScore().null+"</h2>");
  $("#timeRemaining").remove();
  $("#questions").append("<button id='reset' onclick='reset()'>Play Again!</button>");
  $(window).scrollTop(0);
  
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

        if (--timer == 0) {
            returnScore();
        }
    }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 60 * 2,
        display = $('#timeRemaining');
    startTimer(twoMinutes, display);
});

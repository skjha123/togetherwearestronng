
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.sum=0;

}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  var options=["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"];
  var store=0;

    if(this.getQuestionIndex().isCorrectAnswer(answer)) {

        for(var i=0;i<=options.length;i++)
        {
          if(this.getQuestionIndex().isCorrectAnswer(answer)===options[i])
          {
            store=i;
            if(store===0)
            {
              this.sum=0;
            }
            if(store===1)
            {
              this.sum=this.sum+1;
            }
            if(store===2)
            {
              this.sum=this.sum+2;
            }
            if(store===3)
            {
              this.sum=this.sum+3;
            }
          }
        }
        this.score=this.sum;
    }





    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer,) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

Question.prototype.isCorrectAnswer = function(choice) {

    return choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Based on your selection the result is shown below </h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score +" out of 27"+ "</h2>";
    if(quiz.score===0){
      gameOverHTML += "<h2 id='score'> CONGRATULATION!" + "</h2>";
      gameOverHTML += "<h2 id='score'> YOU HAVE NO DEPRESSION SIGN" + "</h2>";
    }
    if(quiz.score>0 && quiz.score<=9)
    {
      gameOverHTML += "<h2 id='score'> YOU HAVE A LOW DEPRESSION SIGN" + "</h2>";
    }
    if(quiz.score>9 && quiz.score<=18)
    {
      gameOverHTML += "<h2 id='score'> YOU HAVE A MODERATE  DEPRESSION SIGN" + "</h2>";
    }
    if(quiz.score>18 && quiz.score<=27)
    {
      gameOverHTML += "<h2 id='score'> YOU HAVE A HIGH  DEPRESSION SIGN" + "</h2>";
    }



    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("1. How often have you been bothered by feeling down, depressed, irritable, or hopeless over the last two weeks?", ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"],  ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("2. How often have you been bothered that you have little interest or pleasure in doing things over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("3. How often have you been bothered by trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("4. How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"],["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("5. How often have you been bothered by feeling tired, or having little energy over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], "NOT AT ALL", [" SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("6. How often have you been bothered by feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("7. How often have you been bothered that you have trouble concentrating on things like school work, reading, or watching TV over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("8. How often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual over the last two weeks", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
    new Question("9. How often have you been bothered by thoughts that you would be better off dead, or of hurting yourself in some way over the last two weeks?", ["NOT AT ALL", "SEVERAL DAYS", "MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"], ["NOT AT ALL", " SEVERAL DAYS","MORE THAN HALF THE DAYS", "NEARLY EVERY DAY"]),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

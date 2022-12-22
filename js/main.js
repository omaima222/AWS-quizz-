//========pages=======//
let pageOne   = document.getElementById("first_pg");
let pageTwo   = document.getElementById("second_pg");
let pageThree = document.getElementById("third_pg");

//========questions=======//
let AllAnswers =  document.getElementById("quizz_answers");
let Question =  document.getElementById("quizz_question");
let AnswerA  =  document.getElementById("A1");
let AnswerB  =  document.getElementById("A2");
let AnswerC  =  document.getElementById("A3");
let AnswerD  =  document.getElementById("A4");
let p_num = document.getElementById("P-num");
let progressBar = document.getElementById("progressBar");
let progress = document.getElementsByClassName("progress");

let start = document.getElementById("start_button");
let circle = document.getElementsByClassName("circle");

pageTwo.style.display= "none";
pageThree.style.display= "none";

let randomQuestions;
let currentIndex;

AnswerA.onclick=function(){
    currentIndex++;
    NextQuestion()
}
AnswerB.onclick=function(){
    currentIndex++;
    NextQuestion()
}
AnswerC.onclick=function(){
    currentIndex++;
    NextQuestion()
}
AnswerD.onclick=function(){
    currentIndex++;
    NextQuestion()
}

function startQuizz(){
    pageOne.style.display= "none";
    pageTwo.style.display= "block";
    pageThree.style.display= "none";
    randomQuestions = questions.sort(()=> Math.random() - .5);
    currentIndex = 0;
    NextQuestion();
}

function  NextQuestion(){
    displayQuestions(randomQuestions[currentIndex]);
    resetQuestions();
}

function displayQuestions(questions){
    Question.innerText = questions.question;
    AnswerA.innerText = questions.choice_A;
    AnswerB.innerText = questions.choice_B;
    AnswerC.innerText = questions.choice_C;
    AnswerD.innerText = questions.choice_D;
    p_num.innerText =  currentIndex+1;
    // progressBar.classList.add('progress');
    // progress.style.width = (currentIndex+1)*10;
}

function resetQuestions(){
    while(AllAnswers.firstChild){
        AllAnswers.removeChild(AllAnswers.firstChild)
    }
}


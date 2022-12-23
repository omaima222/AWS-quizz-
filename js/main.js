//========pages=======//
let pageOne   = document.getElementById("first_pg");
let pageTwo   = document.getElementById("second_pg");
let pageThree = document.getElementById("third_pg");
pageTwo.style.display= "none";
pageThree.style.display= "none";

//========questions=======//
let AllAnswers =  document.getElementById("quizz_answers");
let Question =  document.getElementById("quizz_question");
let AnswerA  =  document.getElementById("A1");
let AnswerB  =  document.getElementById("A2");
let AnswerC  =  document.getElementById("A3");
let AnswerD  =  document.getElementById("A4");

//========progress=======//
let p_num = document.getElementById("P-num");
let progressBar = document.getElementById("progressBar");
let progress = document.getElementById("progressstart");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let steps = document.getElementById("stepss");


let randomQuestions;
let currentIndex;

//========clicks=======//
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

//========functions=======//

function startQuizz(){
    pageOne.style.display= "none";
    pageTwo.style.display= "block";
    pageThree.style.display= "none";
    randomQuestions = questions.sort(()=> Math.random() - .5);
    currentIndex = 0;
    NextQuestion();
    circle2.classList.add("active");
    steps.style.height = 5+"rem";
}

function  NextQuestion(){
    displayQuestions(randomQuestions[currentIndex]);
    // resetQuestions();
}

function displayQuestions(questions){
    Question.innerText = questions.question;
    AnswerA.innerText = questions.choice_A;
    AnswerB.innerText = questions.choice_B;
    AnswerC.innerText = questions.choice_C;
    AnswerD.innerText = questions.choice_D;
    p_num.innerText =  currentIndex+1;
    // progressBar.classList.add('progressstart');
    for(let i=0;i<currentIndex+2;i++){
        // let p= i*7;
        progress.style.width = i*4.4+"rem";

    }
}

function resetQuestions(){
    while(AllAnswers.firstChild){
        AllAnswers.removeChild(AllAnswers.firstChild)
    }
}


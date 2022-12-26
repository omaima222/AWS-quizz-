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

//========result=======//
let result = 0;
let resultnum = document.getElementById("resultnum");
let congrats = document.getElementById("congrats");
let answerscorrect = document.getElementById("answers");

let randomQuestions;
let currentIndex;
let explications = [];


//========clicks=======//

AnswerA.onclick=function(){
    if(questions[currentIndex].options[0].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}
AnswerB.onclick=function(){
    if(questions[currentIndex].options[1].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)
}
AnswerC.onclick=function(){
    if(questions[currentIndex].options[2].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}
AnswerD.onclick=function(){
    if(questions[currentIndex].options[3].isCorrect){
        result++
    }else{
        explications.push(questions[currentIndex].explanation)
    }
    currentIndex++;
    if(currentIndex>9){
        ShowResult()
    }
    NextQuestion(currentIndex)

}


//========functions=======//

function startQuizz(){
    pageOne.style.display= "none";
    pageTwo.style.display= "block";
    pageThree.style.display= "none";
    randomQuestions = questions.sort(()=> Math.random() - .5);
    currentIndex = 0;
    NextQuestion(currentIndex);
    circle3.classList.remove("active");
    circle2.classList.add("active");
    steps.style.height = 5+"rem"; 
}

function  NextQuestion(index){
    displayQuestions(randomQuestions[index]);
    console.log(index);
    // resetQuestions();
}

function displayQuestions(questions){
    Question.innerText = questions.question;

    AnswerA.innerText = questions.options[0].option;
    AnswerB.innerText = questions.options[1].option;
    AnswerC.innerText = questions.options[2].option;
    AnswerD.innerText = questions.options[3].option;
    // for(let i=0;i<4;i++){
    //     let Qbutton = document.createElement('button');
    //     Qbutton.innerText= questions.options.option;
    //     Qbutton.classList.add("quizz_answers_each")
    //     // Qbutton.setAttribute('id', "A"+i)
        // AllAnswers.appendChild(Qbutton); 
    // };
    p_num.innerText =  currentIndex+1;
    for(let i=0;i<currentIndex+2;i++){
        progress.style.width = i*4.4+"rem";
    }
}

function resetQuestions(){
    while(AllAnswers.firstChild){
        AllAnswers.removeChild(AllAnswers.firstChild)
    }
}

function ShowResult(){
        pageTwo.style.display ="none"
        pageThree.style.display ="block"
        circle3.classList.add("active");
        steps.style.height = 10+"rem";
        resultnum.innerHTML= result;
        for(let i=0;i<explications.length;i++){
            let answerscorrect2 = document.createElement('li');
            answerscorrect2.classList.add("answers_Q");
            answerscorrect2.innerText=explications[i][0].question;
            let answersdiv = document.createElement('div');
            answersdiv.classList.add("answers_true");

            let corr = document.createElement('span');
            corr.innerText= explications[i][2].corr;
            corr.classList.add("answers_circle")
            answersdiv.appendChild(corr);

            let exp = document.createElement('p');
            exp.innerText= explications[i][1].exp;
            answersdiv.appendChild(exp);
           
            answerscorrect2.appendChild(answersdiv);
            answerscorrect.appendChild(answerscorrect2);
        }
        if(result>=8){
            congrats.innerHTML=" Great Job !"
        }else if(result==7 || result==6){
            congrats.innerHTML=" Good Job !"
        }else if(result==5){
            congrats.innerHTML=" Not Bad "
        }else if(result<5){
            congrats.innerHTML=" :/ "
        }

        
        // console.log(result)

}


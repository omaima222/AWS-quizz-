
//========pages=======//
let pageOne   = document.getElementById("first_pg");
let pageTwo   = document.getElementById("second_pg");
let pageThree = document.getElementById("third_pg");

//========questions=======//
let QandAs = document.getElementById("quizz");
let start = document.getElementById("start_button");
let circle = document.getElementsByClassName("circle");

pageTwo.style.display= "none";
pageThree.style.display= "none";




function displayQuestions(){
    pageOne.style.display= "none";
    pageTwo.style.display= "block";
    pageThree.style.display= "none";

}
    


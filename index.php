<?php
 include 'components/head.php';
?>



<body class="main">

    <div class="contains_stepper">
        <div class="stepper">
            <div class="steps" id="steps"></div>
            <div class="circle active" id="circle">1</div>
            <div class="circle" id="circle">2</div>
            <div class="circle" id="circle">3</div>
        </div>
    </div>

   <section class="first_pg"id="first_pg" >
      <section class="logo">
         <h1 class="logo_text" >aws</h1>   
         <img class="logo_img" src="sass/img/aws-logo.png" alt="logo pic"> 
      </section>
      <section class="infos">
      <p class="infos_p">Welcome to this aws quizz where you can test your AWS Practitioner knowledge</p>
        <section class="alist" >
            <span class="exclam">!</span>
            <ul class="infos_list">
               <li>this quizz contains 10 questions</li>
               <li>you have 4 options to choose the right answer from</li>
               <li>there is no time limit </li>
            </ul>
        </section>
     <button class="start_button" id="start_button" type="submit" onclick="displayQuestions()">Start</button>
      </section>
   </section>

   <section class="second_pg" id="second_pg">
        <div class="progress">
            <span><span class="num" >1</span>/10</span>
            <div class="progressBar"></div>
        </div>
        <section class="quizz" id="quizz">
            <h2 class="quizz_question">Why is AWS more economical than traditional data centers for applications with varying compute workloads?</h2>
            <section  class="quizz_answers">
                <button  class="quizz_answers_each"><span class="quizz_answers_each_circle">A</span> Amazon EC2 costs are billed on a monthly basis</button>
                <button  class="quizz_answers_each"><span class="quizz_answers_each_circle">B</span> Users retain full administrative access to their Amazon EC2 instances</button>
                <button  class="quizz_answers_each"><span class="quizz_answers_each_circle">C</span> Amazon EC2 instances can be launched on demand when needed</button>
                <button  class="quizz_answers_each"><span class="quizz_answers_each_circle">D</span> Users can permanently run enough instances to handle peak workloads</button>
            </section>
        </section>
   </section>

   <section class="third_pg" id="third_pg">
        <h1 class="congrats">Congrats !</h1>
        <section class="result">
            <h2>Your result</h2>
            <h2><span class="num">8</span>/10</h2>
        </section>
        <section class="explication">
            <h2>explication and answers</h2>
            <ul class="answers">
                <li class="answers_Q">Why is AWS more economical than traditional data centers for applications with varying compute workloads?
                    <div class="answers_true"><span class="answers_circle">A</span><p>The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload.This is a more economical practice than purchasing enough on-premises servers to handle the peak load.</p></div>
                </li><li class="answers_Q">Why is AWS more economical than traditional data centers for applications with varying compute workloads?
                    <div class="answers_true"><span class="answers_circle">A</span><p>The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload.This is a more economical practice than purchasing enough on-premises servers to handle the peak load.</p></div>
                </li>
            </ul>
        </section>
   </section>

</body>

<script src="js/main.js"></script>
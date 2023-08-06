const questions=[
    {
        question:"Which of the following is not a java features?",
        answers:[
            {Text:"Dynamic",correct:false}, 
            {Text:"Architechture Neutral",correct:false},
            {Text:"Use of Pointers",correct:true},
            {Text:"Objext Oriented",correct:false}
        ]
    }, 
    {
        
        question:"Which method of the Class.class is used to determine the name of a class represented by the class object as a String?", 
        answers:[
            {Text:"getClass()",correct:false}, 
            {Text:"intern()",correct:false},
            {Text:"getName()",correct:true},
            {Text:"toString()",correct:false}
        ]
    },   
    {
         question:"Which of the following for loop declaration is not valid",  
         answers:[
           {Text:"for ( int i = 99; i >= 0; i / 9 )",correct:true}, 
           {Text:"for ( int i = 7; i <= 77; i += 7 )",correct:false},
           {Text:"for ( int i = 20; i >= 2; - -i )",correct:false},
           {Text:"for ( int i = 2; i <= 20; i = 2* i )",correct:false}
       ] 
    }, 
    {
        question:"Which of the following creates a List of 3 visible items and multiple selections abled?",  
        answers:[
          {Text:"new List(false,3)",correct:false}, 
          {Text:"new List(3,true)",correct:true},
          {Text:"new List(true,3)",correct:false},
          {Text:"new List(3,false)",correct:false}
      ] 
   }, 

   {
    question:"Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",  
    answers:[
      {Text:"Javap tool",correct:false}, 
      {Text:"javaw command",correct:false},
      {Text:"javadoc tool",correct:true},
      {Text:"javah command",correct:false}
  ] 
}, 

{
    question:"What does the expression float a=35/0 return?",  
    answers:[
      {Text:"Run Time Exception",correct:false}, 
      {Text:"Infinity",correct:true},
      {Text:"0",correct:false},
      {Text:"Not a number",correct:false}
  ] 
}, 

{
    question:"What is the return type of hashcode() method in the Object class?",  
    answers:[
      {Text:"Object",correct:false}, 
      {Text:"int",correct:true},
      {Text:"long",correct:false},
      {Text:"void",correct:false}
  ] 
}, 

{
    question:"_______ is used to find bugs in java program",  
    answers:[
      {Text:"JVM",correct:false}, 
      {Text:"JDK",correct:false},
      {Text:"JDB",correct:true},
      {Text:"JRE",correct:false}
  ] 
}, 

{
    question:"the /u0021 article reffered to as?",  
    answers:[
      {Text:"Unicode Escape sequence",correct:true}, 
      {Text:"Octal escape",correct:false},
      {Text:"Hexadecimal",correct:false},
      {Text:"Line feed",correct:false}
  ] 
}, 

{
    question:"Which of the following option leads to the probability and security of java?",  
    answers:[
      {Text:"Bytecode executed by JVM",correct:true}, 
      {Text:"The applet makes the java code secure and portable",correct:false},
      {Text:"Use of exception handeling",correct:false},
      {Text:"Dynamic building between object",correct:false}
  ] 
}, 

]; 



const questionElement=document.getElementById("question"); 
const answerButton=document.getElementById("answers-buttons"); 
const nextbtn=document.getElementById("next");  

let currentQuestionIndex=0; 
let score=0; 

function startQuiz()
{
    currentQuestionIndex=0; 
    score=0; 
    nextbtn.innerHTML="next"; 
    showQuestion(); 
} 

function showQuestion()
{ 
    resetstate();  
    let currentQuestion=questions[currentQuestionIndex]; 
    let questionNo=currentQuestionIndex+1; 
    questionElement.innerHTML=questionNo+ ". "+ currentQuestion.question; 

    currentQuestion.answers.forEach(answers=>{ 
        const button=document.createElement("button"); 
        button.innerHTML=answers.Text; 
        button.classList.add("btn"); 
        answerButton.appendChild(button);  
        if(answers.correct)
        {
            button.dataset.correct=answers.correct; 
        }
        button.addEventListener("click",selectAnswer); 
    });
}  

function resetstate() //resetbutton function after every question 
{
    nextbtn.style.display="none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild)
    }
}
 
function selectAnswer(e)  //,correct answer button 
{
    const selectbtn=e.target; 
    const isCorrect=selectbtn.dataset.correct=="true"; 
    if(isCorrect)
    {
        selectbtn.classList.add("correct");  
        score++; 
    } 
    else 
    {
        selectbtn.classList.add("incorrect"); 
    } 

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct=="true")
        {
            button.classList.add("correct"); 
        } 
        button.disabled=true; 
    });  
    nextbtn.style.display="block"; 
}  

function showScore()  //for shwoing the score after playing 
{
    resetstate(); 
    questionElement.innerHTML=`You score ${score} out of ${questions.length}`; 
    nextbtn.innerHTML="play again"; 
    nextbtn.style.display="block"; 
}

function handlenextBtn() //function working for next button 
{
    currentQuestionIndex++; 
    if(currentQuestionIndex<questions.length)
    {
        showQuestion(); 
    } 
    else
    {
        showScore(); 
    } 

}

nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handlenextBtn(); 
    } 
    else 
    {
        startQuiz(); 
    }
})
startQuiz();  

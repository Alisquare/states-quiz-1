let currentQuestion = 0;
let score = 0;
let hints = 0
let questions = [
   {
      "question": "1: What is the biggest US state?",
      "a": "California",
      "b": "Alaska",
      "c": "Montana",
      "d": "Texas",
      "image":"quizimages/q1.jpg",
      "answer": "b"
   },
   {
      "question": "2: Which state is in the north-eastern most corner of the US",
      "a": "Maine",
      "b": "Pennsylvania",
      "c": "Minnesota",
      "d": "North Carolina",
      "image":"quizimages/q2.jpg",
      "answer": "a"
   },
   {
      "question": "3: Which State is famously known for its wacky people?",
      "a": "Florida",
      "b": "Ohio",
      "c": "Alabama",
      "d": "Iowa",
      "image":"quizimages/q3.png",
      "answer": "a"
   },
   {
      "question": "4: If Oklahoma is an upside-down hat, which state is wearing it?",
      "a": "Utah",
      "b": "Mississippi",
      "c": "Idaho",
      "d": "Kansas",
      "image":"quizimages/q4.png",
      "answer": "d"
   },
   {
      "question": "5: Which State smells good according to Montana?",
      "a": "Oregon",
      "b": "North Dakota",
      "c": "Idaho",
      "d": "South Dakota",
      "image":"quizimages/q5.png",
      "answer": "c"
   },
   {
      "question": "6: Which State keeps your hands cold during the winter?",
      "a": "Colorado",
      "b": "Michigan",
      "c": "Vermont",
      "d": "Tennessee",
      "image":"quizimages/q6.jpg",
      "answer": "b"
   },
   {
      "question": "7: Which State borders the Atlantic Ocean",
      "a": "West Virginia",
      "b": "Delaware",
      "c": "Illinois",
      "d": "Missouri",
      "image":"quizimages/q7.jpg",
      "answer": "b"
   },
   {
      "question": "8: Which State is the smallest",
      "a": "Connecticut",
      "b": "Rhode Island",
      "c": "Massachusetts",
      "d": "New Hampshire",
      "image":"quizimages/q8.jpg",
      "answer": "b"
   },
   {
      "question": "9: Which State's border is located at the 4 corners?",
      "a": "Wyoming",
      "b": "Arkansas",
      "c": "Utah",
      "d": "Texas",
      "image":"quizimages/q9.jpg",
      "answer": "c"
   },
   {
      "question": "Final Question: Which state has the most people? (2021)",
      "a": "Texas",
      "b": "New York",
      "c": "Washington",
      "d": "California",
      "image":"quizimages/q10.png",
      "answer": "d"
   }
 ];
 if('serviceWorker' in navigator){
   navigator.serviceWorker.register('/sw.js');
 }
 


 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = "Score: " + score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       if(score<=3){
         message = score + " / " + questions.length + " Yikes that was pathetic! Maybe look at a map for once!"
       }
       else if(score <= 7){
         message = score + " / " + questions.length + " Definitely not bad! Keep practicing and you'll do even better next time!"
       }
       else{
         message = score + " / " + questions.length + " Wow you are impressive! Far better than most people! Keep it up!"
       }
       
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox

 function Hint(){
   let message = ""
   if (hints <= 2){
      if(currentQuestion == 0){
         message = "This is also the northernmost state "
      }
      else if(currentQuestion == 1){
         message = "North Carolina is actually not very northern"

      }
      else if(currentQuestion == 2){
         message = "This state is also known for its alligators"

      }
      else if(currentQuestion == 3){
         message = "Oklahoma is horizontal from Utah and Mississippi"

      }
      else if(currentQuestion == 4){
         message = "Nothing happens in this L shaped state"

      }
      else if(currentQuestion == 5){
         message = "This state waves hello to the US's northern neighbours"

      }
      else if(currentQuestion == 6){
         message = "This was the first state"

      }
      else if(currentQuestion == 7){
         message = "Providence is the capital city of this state"

      }
      else if(currentQuestion == 8){
         message = "The four corners is where the borders of Arizona, New Mexico, Colorado and this state all meet"

      }
      else {
         message = "This state is famously home to lots of big movie stars"

      }
      hints ++
   }
   else{
      message = "You are not allowed to have more than 3 hints!"
   }
   document.getElementById("lightbox").style.display = "block";
   document.getElementById("message").innerHTML = message;

 }
 
 
 
 
 
 
 
 
 
 
 
 
   

$(document).ready(function(){



// Question set
var questions = [{
    question: "According to Apollo astronauts, the Moon smells like:",
    answers: ["cheese", "gasoline", "brunt gunpower", "coffee"],
    correctAnswer: "brunt gunpower"
}, {
    question: "The plant and skin of this fruit can cause contact dermatitis and other symptoms of poison ivy.",
    answers: ["Kiwi", "mango", "papaya", "pomegranate"],
    correctAnswer: "mango"
}, {
    question: "You may have heard a weird meat 'tastes like chicken.' Which edible insect actually does taste like chicken?",
    answers: ["cicada", "brown cockroach", "dung beetle", "grasshopper"],
    correctAnswer: "cicada"
}, {
    question: "Chocolate contains theobromine and a little caffeine. A 1-ounce square of chocolate has as much caffeine as:",
    answers: ["half a can of cola", "cup of coffee", "a glass of iced tea", "a cup of decaf coffee"],
    correctAnswer: "a cup of decaf coffee"
}, {
    question: "All of the following animals can move very quickly. Which is the fastest?",
    answers: ["cheetah", "black marlin", "peregrine falcon", "horsefly"],
    correctAnswer: "peregrine falcon"
},
{
    question: "Lobster blood is blue once it is exposed to air. What color is it inside a living lobster?",
    answers: ["clear", "blue", "red", "yellow"],
    correctAnswer: "clear"
},
{
    question: "About how many bees does it take to equal the weight of one M&M’s plain chocolate candy?",
    answers: ["1", "10", "7", "8"],
    correctAnswer: "10"

}
];

// Variable that will hold the setInterval
var panel = $("#quiz-area");
var timer;
var correct = 0;
var incorrect = 0;
var notAnswer =0;
var notcheck =0;
var counter = 100;
var userAnswer


//main function to display question and answers to quiz area
function start() {
    timer = setInterval(countdown, 1000)

    function countdown() {

        counter--
        $("#counter-number").html(counter);
        timeout();

    }


    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
        panel.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            panel.append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            
        }
    }

    
    panel.append("<button id='done'>Done</button>");
};
// on click function
$(document).on("click", "#start", function () {
    start();

});

$(document).on("click", "#done", function () {

    done();
    clearInterval(timer);
});


function done() {

    

    for (i = 0; i < questions.length; i++) {
        
        userAnswer = $('input[name= question-' + i + ']:checked ').val()
                                      
        if (userAnswer === questions[i].correctAnswer) {
            correct++;
        }
        
         
         else if (userAnswer!== questions[i].correctAnswer) {
             incorrect++
         }
      
             
        
    }

    display();
   

}

function timeout() {

    if (counter === 0) {
        console.log("TIME UP");
        done();
    }
}


function display() {
   
    $("#sub-wrapper h2").remove();
    panel.html("<h3>All Done!</h3>");
    panel.append("<h3>Correct Answers: " + correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + incorrect + "</h3>");
}

});








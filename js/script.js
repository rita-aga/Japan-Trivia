// Branch shibas
function storeColor() {
    
    document.getElementById("pickcream").addEventListener("click", function(){
    sessionStorage.setItem("color", "cream");
})
    document.getElementById("pickred").addEventListener("click", function(){
    sessionStorage.setItem("color", "red");
})
    document.getElementById("pickblack").addEventListener("click", function(){
    sessionStorage.setItem("color", "black");
})
};

function skipName() {
    var links = document.getElementsByTagName("a");
    if (sessionStorage.getItem("user") != null) {
    for (var i = 0; i < links.length; i+= 1) {
        links[i].href = "game.html";
    }
};
};


// Fire functions for select player page
if (window.location.href.indexOf("selectplayer.html") != -1) {
    storeColor();
    skipName();
};



// Get user's time of day
var today = new Date()
var userTime = today.getHours()
var greetWord

if (userTime < 12) {
  greetWord = 'Ohayo'
} else if (userTime < 18) {
  greetWord = 'Konnichiwa'
} else {
  greetWord = 'Konbanwa'
}

// Greet at front page at front page 
function greetMe() {
    document.getElementById("greeting").innerHTML = greetWord + ', my name is Tsune!<br>And you are?';
};

// Remember and display user's name
function storeName() {
    var userName = document.getElementById("userName");
    var userForm = document.getElementById("myForm");
    userName.addEventListener("change", function() {
        // And save the results into the session storage object
        sessionStorage.setItem("user", userName.value);
      });
    
};

// Replace default color with chosen color
function getShiba() {
    var neutralShiba = document.getElementsByClassName("character");
    for (var i = 0; i < neutralShiba.length; i+= 1) {
        neutralShiba[i].src = "img/shiba/" + sessionStorage.getItem("color") + "_neutral.svg";
};
};

// Fire functions for front page
window.onload = function(){
if (window.location.href.indexOf("hello.html") != -1) {
    greetMe();
    storeName();
    getShiba();
};
};

// Show greeting with name
function letsBegin(){
    document.getElementById("nicetomeet").innerHTML = "Nice to meet you, " + sessionStorage.getItem("user") + "!<br>Let's begin!";
};

// Fire functions for greet page
if (window.location.href.indexOf("hello02.html") != -1) {
    letsBegin();
};

// Trivia page
function triviaPage() {

var v = 0;
var f = 'flower' + v;
var trivia = document.getElementById("triviaform");

// Define changes in flower progress bar
function correctFlower() {
    var flower = document.getElementById(f);
    flower.src="img/right.svg"; 
};

function wrongFlower() {
    var flower = document.getElementById(f);
    flower.src="img/wrong.svg";
};

function activeFlower() {
    var flower = document.getElementById(f);
    if (flower !== null) {
    flower.style.opacity = "1";
    }
};

// Define changes in shiba
var shiba = document.getElementById("shibaplayer");

function happyShiba() {
    shiba.src = "img/shiba/" + sessionStorage.getItem("color") + "_smile.svg";
    //setTimeout(shiba.src="img/shiba/red_neutral.svg", 3000);
};

function sadShiba() {
    shiba.src = "img/shiba/" + sessionStorage.getItem("color") + "_cry.svg";
    //setTimeout(shiba.src="img/shiba/red_neutral.svg", 3000);
};

// Trivia questions
var questions = [
    'What is the highest mountain in Japan?', 
    'What is the biggest city in Japan?',
    'What is the national sport of Japan?',
    'What is the main island of Japan called?',
    'Which religion is native to Japan?',
    'What is the Japanese word for Japan?',
    'What is the legal age for the consumption of alcohol in Japan?',
    'Which martial art comes from the Japanese words meaning `empty hand`?',
    'Tokyo Tower is the spitting image of what other world famous landmark?',
    'Japanese three line poetry is called...'
];

var answers = [
    'Fuji', 
    'Tokyo',
    'sumo',
    'Honshu',
    'Shintoism',
    'Nihon',
    '20',
    'Karate',
    'eiffel',
    'haiku'
];

// Get next question
var a=0;
function displayQuestion() {
    document.getElementById("triviaquest").innerHTML = questions[a];
};

// Count mistakes
var m = 0;

// Disable refresh on submit
trivia.addEventListener('submit', function (e){
    e.preventDefault();
});

// User answer validation loop
function checkAnswer() {
    
    trivia.onsubmit = function() {
    if (document.getElementById("triviaans").value.toLowerCase().includes(answers[a].toLowerCase()) && v < 9) {
        correctFlower();
        happyShiba();
        a++;
        v++;
        f = 'flower' + v;
        displayQuestion();
        activeFlower();
        document.getElementById("triviaans").value = '';
    } else if (document.getElementById("triviaans").value.toLowerCase().includes(answers[a].toLowerCase()) == false && v < 9) {
        wrongFlower();
        sadShiba();
        a++;
        v++;
        m++;
        f = 'flower' + v;
        displayQuestion();
        activeFlower();
        document.getElementById("triviaans").value = '';
    } else if (document.getElementById("triviaans").value.toLowerCase().includes(answers[a].toLowerCase()) && v == 9) {
        correctFlower();
        happyShiba();
        seeResult();
    } else if (document.getElementById("triviaans").value.toLowerCase().includes(answers[a].toLowerCase()) == false && v == 9) {
        wrongFlower();
        sadShiba();
        m++;
        seeResult();
    } 

};
};

// Fire functions for the game
activeFlower();
displayQuestion();
checkAnswer();

// Display results based on number of mistakes made
function seeResult() {
    if (m <= 3) {
        document.getElementById("game").style.opacity = "0";
        document.getElementById("won").style.visibility = "visible";
        document.getElementById("won").style.opacity = "1";
    } else {
        document.getElementById("game").style.opacity = "0";
        document.getElementById("lost").style.visibility = "visible";
        document.getElementById("lost").style.opacity = "1";
    }
};
};

// Fire all functions for trivia page
if (window.location.href.indexOf("game.html") != -1) {
    triviaPage();
    getShiba();
}

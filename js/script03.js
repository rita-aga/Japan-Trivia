// Branch shibas
function storeColor() {
    window.onload = function() {
    document.getElementById("pickcream").addEventListener("click", function(){
    //sessionStorage.setItem("color", "cream");
    alert();
})
    document.getElementById("pickred").addEventListener("click", function(){
    sessionStorage.setItem("color", "red");
})
    document.getElementById("pickblack").addEventListener("click", function(){
    sessionStorage.setItem("color", "black");
})
};
};

// Fire select player functions
window.onload = function(){
    if (window.location.href.indexOf("selectplayer.html") != -1) {
       storeColor();
    };
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

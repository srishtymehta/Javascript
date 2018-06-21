let begin = document.querySelector("#begin");
var inter = document.querySelector("#inter");
var expert = document.querySelector("#expert");
var score = document.querySelector(".points");
var display = document.querySelector("#display");
var text = document.querySelector("#text");
var start = document.querySelector("#start");
let time = document.querySelector("#myprogressBar");

var barray = ["look", "cook", "book", "rose", "bait", "lure", "prune", "what", "your", "name", "love", "music", "song", "dua", "bruno", "anne", "bebe", "kygo", "alan", "chris"]
var iarray = ["selena", "taylor", "rihanna", "miley", "avril", "enable", "disable", "abound", "clayray", "eminem", "arijit", "diljit", "sherya", "sunidhi", "amitabh", "sataya", "katrina", "robin", "ananya", "maroon", "louisa"]
var earray = ["paulo", "persistant", "imcompetent", "backfire", "vertebrae", "wicked", "wayward", "bewilder", "perplex", "flummox", "receptacle", "boomerang", "capability", "incessantly", "guarantee", "composure", "correspondence", "stabilize", "unfeasible", "prominent"]
display.innerHTML = "select difficulty";

var array;
var fscore;

function beg() {
    array = barray;
    begin.classList.toggle(true);
    text.value = "";
    score.innerHTML = "0";


}

function inte() {
    array = iarray;
    inter.classList.toggle(true);
    text.value = "";
    score.innerHTML = "0";


}

function exp() {
    array = earray;
    var time = document.querySelector("#myprogressBar");
    expert.classList.toggle('active', true);
    text.value = "";
    score.innerHTML = "0";


}

function update() {
    var i = 2;
    display.innerHTML = 3;
    var element = document.querySelector("myprogressBar");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        display.innerHTML = i;
        i -= 1;
        if (width >= 100 && i < 0) {
            clearInterval(identity);
            play();
            return;
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function play() {
    fscore = 0;
    if (begin === 'clicked') {
        beg();
    } else if (inter === 'clicked') {
        inter();
    } else if (expert === 'clicked') {
        exp();
    } else {
        display.innerHTML = 'SELECT DIFFICULTY';
    }
    display.innerHTML = (array[Math.floor((Math.random() * array.length))]).toLowerCase();
    if (text.toLowerCase() != (display.innerHTML).toLowerCase()) {
        clearInterval(indentity1);
        end();
        return;
    }
}

function end() {
    display.innerHTML = "Try Again";
    text.value = "";
    window.getSelection.empty();
}

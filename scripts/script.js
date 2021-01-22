
// this tutorial helped https://www.youtube.com/watch?v=XQEfWd1lh4Q&t=303s

var button = document.getElementById('funny-button');
var numDisplay = document.getElementById("num-display")
var timesClicked = 0;

var timeDisplay = document.getElementById("time-display")

button.onclick = function() {

    timesClicked++;
    numDisplay.innerHTML += timesClicked;
    if (button.classList.contains("mid")) {
        button.classList.remove("mid");
        button.classList.add("bottom");
        button.innerHTML = "higher";

        startTime = new Date();
    } else {
        button.classList.remove("bottom");
        button.classList.add("mid");
        button.innerHTML = "lower";

        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;
        // get seconds 
        var seconds = Math.round(timeDiff) + "seconds";
        timeDisplay.innerHTML += seconds;
    }
    
}
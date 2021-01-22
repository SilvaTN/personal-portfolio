
// this tutorial helped https://www.youtube.com/watch?v=XQEfWd1lh4Q&t=303s
// show txt letter by letter https://stackoverflow.com/questions/7264974/show-text-letter-by-letter
// jquery for beginners https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery  and  https://www.w3schools.com/jquery/jquery_get_started.asp 


var hireButton = document.getElementById("hire-button");
var button = document.getElementById('funny-button');
var numDisplay = document.getElementById("num-display")
var timesClicked = 0;

var timeDisplay = document.getElementById("time-display")
var letterByLetterDisplay = document.getElementById("letter-by-letter-display")


var txtPrintInProgress = false;



hireButton.onclick = function() {
    //make the button not be able to be pressed until the whole message is printed, i.e. when clearinterval is called.

    if (!txtPrintInProgress) {
        hireButton.innerHTML = "button works";

        letterByLetterDisplay.innerHTML = "";
        var message = 'Hello world';
        var index = 0;
        function displayLetter() {
            if (index < message.length) {
                letterByLetterDisplay.append(message[index++]);
            }
            else{
                //clearInterval is only called after whole message has been printed.
                clearInterval(repeat);
                txtPrintInProgress = false;
            }
        }
        txtPrintInProgress = true;
        //The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
        var repeat = setInterval(displayLetter, 100);
    }


}


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


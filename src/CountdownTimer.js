function CountdownTimer() {
    let mins = 2;

    //calculate the seconds 
    let secs = mins * 60;

    //countdown function is evoked when page is loaded 
    const countdown = () => setTimeout(decrement, 60);

    // countdown is cleared
    function clearCountdown() {
        mins = 0;
        secs = 0;
        return 0;
    }

    //Decrement function decrement the value. 
    function decrement() {
        let minutes, seconds;
        if (document.getElementById) {
            minutes = document.getElementById("mins-left");
            seconds = document.getElementById("secs-left");

            //if less than a minute remaining 
            //Display only seconds value. 
            if (seconds < 59) {
                seconds.textContent = secs;
            }

            //Display both minutes and seconds 
            //getminutes and getseconds is used to 
            //get minutes and seconds 
            else {
                minutes.textContent = getminutes();
                seconds.textContent = getseconds();
            }
            //when less than a minute remaining 
            //colour of the minutes and seconds 
            //changes to red 
            if (mins < 1) {
                minutes.style.color = "red";
                seconds.style.color = "red";
            }
            //if seconds becomes zero, 
            //then page alert time up 
            if (mins < 0) {
                // alert('time up');
                minutes.textContent = 0;
                seconds.textContent = 0;
            }
            //if seconds > 0 then seconds is decremented 
            else {
                secs--;
                setTimeout(decrement, 1000);
            }
        }
    }

    function getminutes() {
        //minutes is seconds divided by 60, rounded down 
        mins = Math.floor(secs / 60);
        return mins;
    }

    function getseconds() {
        //take minutes remaining (as seconds) away  
        //from total seconds remaining 
        return secs - Math.round(mins * 60);
    }

    const publicFunctions = {
        countdown,
        clearCountdown
    }

    return publicFunctions;
}

export default CountdownTimer;


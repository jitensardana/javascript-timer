/**
 * Created by jitensardana on 23/01/16.
 */

var Timer = (function(){
    var alreadyStarted = false;
    var alreadyResumed = true;
    var hours,minutes,seconds;
    var hoursVal= 0,minutesVal = 0, secondsVal=0;
    var z =0;
    var display= function(){
        var dispSecVal = 0;
        var dispMinVal = 0;
        var dispHrsVal = 0;
        if(secondsVal   >= 0 && secondsVal <= 9){
            dispSecVal = "0" + secondsVal;
            seconds.innerHTML = dispSecVal;
        }
        else{
            seconds.innerHTML = secondsVal;
        }
        if(minutesVal  >= 0 && minutesVal <= 9){
            dispMinVal = "0" + minutesVal;
            minutes.innerHTML = dispMinVal;
        }
        else{
            minutes.innerHTML = minutesVal;
        }
        if(hoursVal   >= 0 && hoursVal <= 9){
            dispHrsVal = "0" + hoursVal;
            hours.innerHTML = dispHrsVal;
        }
        else{
            hours.innerHTML = hoursVal;
        }

    }
    var increment = function(){
        secondsVal += 1;
        if(secondsVal>=60){
            minutesVal += 1;
            secondsVal = 0;
        }
        if(minutesVal >= 60){
            hoursVal +=1;
            minutesVal = 0;
        }
        display();
    };
    var start = function(){
        console.log("start");
        if(alreadyStarted === true){
            return;
        }
        alreadyStarted = true;
         z = setInterval(increment,1000);

    };
    var stop = function(){
        console.log("stop");
        alreadyStarted = false;
        clearInterval(z);
    };

    var pause = function(){
        console.log("pause");
        clearInterval(z);
        alreadyResumed = false;
    };

    var resume = function(){
        console.log("resume");
        if(alreadyResumed === true){
            return;
        }
        alreadyResumed = true;
        z = setInterval(increment,1000);
    };

    var reset = function(){
        console.log("reset");
        stop();
        alreadyStarted = false;
        hoursVal = 0;
        minutesVal = 0;
        secondsVal = 0;
        display();
    };

    var init = function(config){
        document.getElementById(config["start"]).addEventListener('click',start);
        document.getElementById(config["stop"]).addEventListener('click',stop);
        document.getElementById(config["pause"]).addEventListener('click',pause);
        document.getElementById(config["resume"]).addEventListener('click',resume);
        document.getElementById(config["reset"]).addEventListener('click',reset);
        hours = document.getElementById(config["hours"]);
        minutes = document.getElementById(config["minutes"]);
        seconds = document.getElementById(config["seconds"]);

    };

    return{
        init : init
    }
})();
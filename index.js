


let mainCount= document.getElementById("countdown"); /* this means that in my html, i'm getting an ID COUNTDOWN*/
 let seconds= 50 /* Here I'm saving 50 to seconds which will be used as the initial countdwon v*/

 interval = setInterval(function(){  /* here I set up a function, recurring function that will be executed every 1000 milliseconds (1 second). .*/
    seconds--;   /*inside this logic seconds is decremented by 1*/

    mainCount.innerHTML=seconds;/* i already have my function decremented, so im saving my seconds, id "countdown" (mainCount) to display the current countdown value. */
    

     if (seconds <= 0) {  /* This checks if the seconds variable has reached or gone below 0. If true, it clears the interval using clearInterval(interval). This stops the recurring execution of the function, effectively ending the countdown.*/

        clearInterval(interval);/* This stops the recurring execution of the function, effectively ending the countdown.*/
    }


 }, 1000)       /*The function contains the logic for updating the countdown*/


 //In JavaScript, the setInterval function is 
//  used to repeatedly execute a specified function at fixed time intervals.
//   The clearInterval function is used to stop the execution of the function specified by setInterval. 
//   The interval variable is simply a reference to the interval returned by setInterval, 
//   and it is used as an argument for clearInterval to stop the interval.








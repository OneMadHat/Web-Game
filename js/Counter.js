/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/
test = 1;
window.onload=function() {

  upTime(new Date());
}
function upTime(countTo) {
  if(test <= 1){
    now = new Date();
    countTo = new Date(countTo);
    difference = (now-countTo);

    hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
    mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

    document.getElementById('hours').firstChild.nodeValue = hours;
    document.getElementById('minutes').firstChild.nodeValue = mins;
    document.getElementById('seconds').firstChild.nodeValue = secs;

    clearTimeout(upTime.to);
    upTime.to=setTimeout(function(){ upTime(countTo); },1000);
  /* Tells the user the took to long and lost */  
   /* if(secs == 10){
        document.getElementById('img').innerHTML = "";
        document.getElementById('img').innerHTML += '<script>';
        document.getElementById('img').innerHTML += '<img src="pictures/win_not.jpg" alt="img" />';
        document.getElementById('img').innerHTML += '</script>';
        clearInterval(upTime);
        test = 2;
        
    }*/
  }
}
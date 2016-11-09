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
  /* Tells the user they took to long and lost */  
/*    if(secs == 2){
        document.getElementById('scream').innerHTML = "";
        document.getElementById('scream').innerHTML += '<iframe width="1200" src="video/Scream.mp4" frameborder="0" allowfullscreen></iframe>';
        clearInterval(upTime);
        test = 2;
        
    }*/
  }
}
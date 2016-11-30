function GS(x, y, z){
var Dimg = document.getElementById('img');
var Dstory = document.getElementById('story');
var Diquit = document.getElementById('iquit');
var Dwin = document.getElementById('win');
var DGSbutton = document.getElementById('GSbutton');

/* Sarting Game Screen */
if (z=="start") {
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS1.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* button change */
		document.getElementById('button').innerHTML = "";
		/* story cahnge */
		Dstory.innerHTML = '<p>You log into Kali to figure out what the Hacker took and inspect deeper. You can use the Terminal to get current system info. or you can use Wireshark to see all incoming and outgoing packets. Choose wisely as you are on the clock.</p>'
		/* iquit change */
		Diquit.innerHTML += '<button type="submit"> I QUIT </button>'
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		DGSbutton.innerHTML += '<input type="button" value="Use Terminal" onclick="GS(0, 1);" />';
		DGSbutton.innerHTML += '<input type="button" value="Use WireShark" onclick="GS(1, 0);" />';
}

/* WireShark Game Screen Start ▼ */
switch(x) {
	case 0:
		break;

	case 1:
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS1W.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* Story board */
		Dstory.innerHTML = "You open Wireshark and you come to a revelation. The attack has already happened. You need to see who they are, what they took and where are they from.";
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		DGSbutton.innerHTML += '<input type="button" value="Use Something that works" onclick="GS(0,1);" />';
		DGSbutton.innerHTML += '<input type="button" value="WE ARE BEING SERIOUS!!!" onclick="GS(0,1);" />';

		break;

	case 2:

		break;
}
/*WireShark Game Screen End ▲ */

/* Terminal Game Screen Start ▼*/
switch(y) {
	case 0:
		break;

	case 1:
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS1T.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* Story board */
		Dstory.innerHTML = "You open a Terminal and it is time to view those logs and see who was here or you can Ping Google to make sure you are still on-line.";
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		DGSbutton.innerHTML += '<input type="button" value="View System logs" onclick="GS(0, 2);" />';
		DGSbutton.innerHTML += '<input type="button" value="Ping google.com" onclick="GS(0, 3);" />';
		break;

	case 2:
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS2T.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* Story board */
		Dstory.innerHTML = "You find an unknown individual in the logs. You can try and run TraceRoute on them to see where they are from or you can try and hack them to return the favor. There is always the smarter option. ";
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		DGSbutton.innerHTML += '<input type="button" value="TraceRoute" onclick="GS(0, 4);" />';
		Dwin.innerHTML += '<button type="submit"> HACK THEM!!! </button>'	
		break;

	case 3:
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS3T.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* Story board */
		Dstory.innerHTML = "You decide to ping google and you find that you are still online and ready for some payback. All thats left to do now is view the logs and find out the IP of who hacked you";
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		DGSbutton.innerHTML += '<input type="button" value="View System logs" onclick="GS(0, 2);" />';
	break;

	case 4:
		/*img change*/
		Dimg.innerHTML = "";
		Dimg.innerHTML += '<script>';
		Dimg.innerHTML += '<img src="pictures/Game Screens/GS4T.jpg" alt="img" />';
		Dimg.innerHTML += '</script>';
		/* Story board */
		Dstory.innerHTML = "You launch Tracerout to locate where they are from and that happened to be a poor decision.";
		/* GSbutton change */
		DGSbutton.innerHTML = "";
		/* iquit change */
		Diquit.innerHTML = '';
		/* win change */
		Dwin.innerHTML = '';
	break;

}
/* Terminal Game Screen End ▲ */

}
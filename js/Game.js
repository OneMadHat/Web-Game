function GS(x, y, z){


/* Sarting Game Screen */
if (z=="start") {
		document.getElementById('img').innerHTML = "";
		document.getElementById('img').innerHTML += '<script>';
		document.getElementById('img').innerHTML += '<img src="pictures/Game Screens/GS1.jpg" alt="img" />';
		document.getElementById('img').innerHTML += '</script>';
		/* button change */
		document.getElementById('button').innerHTML = "";
		/* story cahnge */
		document.getElementById('story').innerHTML = '<p>You log into Kali to figure out what the Hacker took and inspect deeper. You can use the Terminal to get current system info. or you can use Wireshark to see all incoming and outgoing packets. Choose wisely as you are on the clock.</p>'
		/* iquit change */
		document.getElementById('iquit').innerHTML += '<button type="submit"> I QUIT </button>'
		/* GSbutton change */
		document.getElementById('GSbutton').innerHTML = "";
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="Use Terminal" onclick="GS(0, 1);" />';
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="Use WireShark" onclick="GS(1, 0);" />';
}

/* Wire Shark Game Screen */
switch(x) {
	case 0:
		break;

	case 1:
		/* WireShark Game Screen 1 */
		document.getElementById('img').innerHTML = "";
		document.getElementById('img').innerHTML += '<script>';
		document.getElementById('img').innerHTML += '<img src="pictures/Game Screens/GS1W.jpg" alt="img" />';
		document.getElementById('img').innerHTML += '</script>';
		/* Story board */
		document.getElementById('story').innerHTML = "You open Wireshark and you come to a revelation. The attack has already happened. You need to see who they are, what they took and where are they from.";
		/* GSbutton change */
		document.getElementById('GSbutton').innerHTML = "";
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="Use Something that works" onclick="GS(0,1);" />';
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="WE ARE BEING SERIOUS!!!" onclick="GS(0,1);" />';

		break;

	case 2:

		break;
}

/* Terminal Game Screen */
switch(y) {
	case 0:
		break;

	case 1:
		/* Terminal Game Screen 1 */
		document.getElementById('img').innerHTML = "";
		document.getElementById('img').innerHTML += '<script>';
		document.getElementById('img').innerHTML += '<img src="pictures/Game Screens/GS1T.jpg" alt="img" />';
		document.getElementById('img').innerHTML += '</script>';
		/* Story board */
		document.getElementById('story').innerHTML = "You open a Terminal and it is time to view those logs and see who was here or you can Ping Google to make sure you are still on-line.";
		/* GSbutton change */
		document.getElementById('GSbutton').innerHTML = "";
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="Type in ifconfig" onclick="GS(0, 2);" />';
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="Ping google.com" onclick="GS(0, 3);" />';
		break;

	case 2:
		document.getElementById('img').innerHTML = "";
		document.getElementById('img').innerHTML += '<script>';
		document.getElementById('img').innerHTML += '<img src="pictures/Game Screens/GS2T.jpg" alt="img" />';
		document.getElementById('img').innerHTML += '</script>';
		/* Story board */
		document.getElementById('story').innerHTML = "???";
		/* GSbutton change */
		document.getElementById('GSbutton').innerHTML = "";
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="???" onclick="GS(???);" />';
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="???" onclick="GS(???);" />';		
		break;

	case 3:
		document.getElementById('img').innerHTML = "";
		document.getElementById('img').innerHTML += '<script>';
		document.getElementById('img').innerHTML += '<img src="pictures/Game Screens/GS3T.jpg" alt="img" />';
		document.getElementById('img').innerHTML += '</script>';
		/* Story board */
		document.getElementById('story').innerHTML = "???";
		/* GSbutton change */
		document.getElementById('GSbutton').innerHTML = "";
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="???" onclick="GS(???);" />';
		document.getElementById('GSbutton').innerHTML += '<input type="button" value="???" onclick="GS(???);" />';		
	break;

}

}
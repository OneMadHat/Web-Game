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
		document.getElementById('story').innerHTML = '<p>This is a test to see if it works correcly</p>'
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
		document.getElementById('story').innerHTML = "???";
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
		document.getElementById('story').innerHTML = "???";
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
/**
* Script to show.hide tables
*
* author: christopher
* email: c.frew19@gmail.com
*/


//event listener for table 1
document.getElementById("table-1-toggle").addEventListener("click", function() { 	//on click of toggle <a>
	if (document.getElementById("table-1").className == "visable") {				//if tabele 1 is visable
		document.getElementById("table-1").className = "not-visable";				//make it not-visable
	} else {
		document.getElementById("table-1").className = "visable";					//if table 1 is not-visable make it visable
	}
});

//event listener for table 2
document.getElementById("table-2-toggle").addEventListener("click", function() {	//on click of toggle <a>
	if (document.getElementById("table-2").className == "visable") {				//if tabele 2 is visable
		document.getElementById("table-2").className = "not-visable";				//make it not-visable
	} else {
		document.getElementById("table-2").className = "visable";					//if table 2 is not-visable make it visable
	}
});

//event listener for hour of code
document.getElementById("hour-of-code-toggle").addEventListener("click", function() {	//on click of toggle <a>
	if (document.getElementById("hour-of-code").className == "visable") {				//if hour-of-code is visable
		document.getElementById("hour-of-code").className = "not-visable";				//make it not-visable
	} else {
		document.getElementById("hour-of-code").className = "visable";					//if hour-of-code is not-visable make it visable
	}
});
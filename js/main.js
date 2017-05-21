/**
* Script to show.hide tables
*
* author: christopher
* email: c.frew19@gmail.com
*/

document.getElementById("table-1-toggle").addEventListener("click", function() {
	if (document.getElementById("table-1").className == "active") {
		document.getElementById("table-1").className = "notactive";
	} else {
		document.getElementById("table-1").className = "active";
	}
});

document.getElementById("table-2-toggle").addEventListener("click", function() {
	if (document.getElementById("table-2").className == "active") {
		document.getElementById("table-2").className = "notactive";
	} else {
		document.getElementById("table-2").className = "active";
	}
})
/*Find the Penguins JavaScript File
	author: Tom P
	date: 1/23/2020
*/

"use strict";


//function is triggered on page load
window.addEventListener("load", newGame);

//event listener for the Retry button
document.getElementsByTagName("input")[0].addEventListener("click",
	function() {
		window.location.reload();
	});

function newGame() {
	var divs = document.querySelectorAll("div");

	var x = Math.floor(Math.random() * 9) + 2;

	document.getElementsByTagName("div")[x].setAttribute("id", "yeti");

	document.getElementById("yeti").addEventListener("click", 
		function() {
			window.alert("You were eaten by the Yeti stupid!");
			document.getElementsByTagName("audio")[0].play();
		});

	

}

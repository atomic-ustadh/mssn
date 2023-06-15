 // Mobile Navigation in the Header Section Starts Here 
 function closenav() {
	document.getElementById('navi').style.display = 'none';
}

function opennav() {
	document.getElementById('navi').style.display = 'flex';
}

// This Javascript code is for the Scroll to Top Button
// If the scrolling of the page is up to 50px, this function will make the "display" of the "bck-to-top" button "block" 
	//(i.e It will Change it from "display: none" to "display: block")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	document.getElementById("bck-to-top-id").style.display = "block";
} else {
	document.getElementById("bck-to-top-id").style.display = "none";
}
}

// If you click the button, this function will returm you back to top of the page

function topFunction() {
document.documentElement.scrollTop = 0; // This line is for Chrome and other compatible ones... Maybe Opera, Firefox, MS Edge etc...
document.body.scrollTop = 0;     // This Line is Particularly for Safari Browser
}


// The Code for filter section Starts Here 
function filterElements(className) {
var elements = document.getElementsByClassName('column');

// Hides Elements that do not match the specified Class Name and Shows Elements that matches the specified Class Name
for (var i = 0; i < elements.length; i++) {
	if (elements[i].classList.contains(className)) {
		elements[i].style.display = '';
	} else {
		elements[i].style.display = 'none';
	}
}
}

function resetFilter() {
var elements = document.getElementsByClassName('column');

// Shows all elements
for (var i = 0; i < elements.length; i++) {
	elements[i].style.display = '';
}
}

// Shows and Hides Filter Contents onclick

function show() {
document.getElementById("filter-content").style.display = "flex";
}

function hide() {
document.getElementById("filter-content").style.display = "none";
}
// The Code for filter section Ends Here 

// About Dropdown Section - Just 5 lines below - 2 Functions
function showDrop(){
document.getElementById("nav-down").style.display = "flex";
document.getElementById("affilate").style.display = "none";
}

function hideDrop(){
document.getElementById("nav-down").style.display = "none";
}

function affilateDrop(){
document.getElementById("affilate").style.display = "flex";
document.getElementById("nav-down").style.display = "none";
}

function hideAffilate(){
document.getElementById("affilate").style.display = "none";
}
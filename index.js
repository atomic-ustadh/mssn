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



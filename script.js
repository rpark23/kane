const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () =>{
		//Toggle nav
		nav.classList.toggle('nav-active');
		//Animate links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
			}
		});
		//Burger animation
		burger.classList.toggle('toggle');
	});
}
navSlide();

window.addEventListener("scroll", function() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
})

var expandable = document.getElementsByClassName("expandable");
var i;
for (i = 0; i < expandable.length; i++) {
	expandable[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content === null) {
			content = this.parentElement.nextElementSibling;
		}
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

// Get the modal
var modal = document.getElementById("signup-popup");

// Get the button that opens the modal
var btn = document.getElementById("signup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function menufunc() {
    let menuBar = document.querySelector('.menu')
    let navbar = document.querySelector('.navbar-nav');
    navbar.classList.toggle('open');
}
  

function showExperience(year) {
    var experiences = document.getElementsByClassName("experience-item");
    for (var i = 0; i < experiences.length; i++) {
      experiences[i].style.display = "none";
    }
    var selectedExperience = document.getElementById(year);
    selectedExperience.style.display = "block";
    setTimeout(function() {
      selectedExperience.style.opacity = "1";
    }, 100); // Adjust the delay time as needed
  }
  
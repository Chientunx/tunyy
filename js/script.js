const toggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});



function setActive(element) {
      const links = document.querySelectorAll('.header-bar ul li a');
      links.forEach(link => link.classList.remove('active'));
      element.classList.add('active');
    }




// CONTACT

    // BACK
        function goBack() {
        window.history.back();
  }





















// Mobile Navbar
const navMobile = () => {
  const navbarToggle = document.querySelector(".navbar_toggle");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  navbarToggle.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav_active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // Toggle animation
    navbarToggle.classList.toggle("toggle");
  });
};

// quote slide show

const app = () => {
  navMobile();
};

app();

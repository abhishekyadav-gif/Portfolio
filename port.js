document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// toggleSwitch
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});

// back to top
const topButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// contac form

const form = document.querySelector("form");
form.addEventListener("btn", (e) => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  if (name === "" || email === "") {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

//  theme switch

const toggleSwitch = document.querySelector(".theme-switch");

toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu"); // Select the toggle button
  const navContainer = document.querySelector(".nav-container"); // Select the nav container

  // Add event listener for button click
  menuBtn.addEventListener("click", function () {
    navContainer.classList.toggle("active"); // Toggle the 'active' class on navbar
  });
});

// EmailJS init
(function () {
  emailjs.init("YztLEeinNAINnBUE7");
})();

// Form submit
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p54ayih", // SERVICE ID
        "template_anrdqg2", // TEMPLATE ID
        this
      )
      .then(
        function () {
          alert("Thank you for reaching out. I’ll connect with you soon. !");
        },
        function (error) {
          alert("Failed to send message");
          console.log(error);
        }
      );
  });

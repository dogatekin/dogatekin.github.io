const btn = document.querySelector(".toggler");
const icon = document.querySelector(".toggle-icon")
const currentTheme = localStorage.getItem("theme");
const lightLogos = document.querySelectorAll(".light-logo")
const darkLogos = document.querySelectorAll(".dark-logo")

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
  icon.classList.remove("fa-sun")
  icon.classList.add("fa-moon")
  lightLogos.forEach(x => x.classList.add("d-none"))
  darkLogos.forEach(x => x.classList.remove("d-none"))
}

// Listen for a click on the button 
btn.addEventListener("click", function () {
  // Remove focus
  btn.blur();

  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  lightLogos.forEach(x => x.classList.toggle("d-none"))
  darkLogos.forEach(x => x.classList.toggle("d-none"))

  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});
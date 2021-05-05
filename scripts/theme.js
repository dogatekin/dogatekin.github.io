const btns = document.querySelectorAll(".toggler");
const icons = document.querySelectorAll(".toggle-icon")
let currentTheme = localStorage.getItem("theme");
const lightLogos = document.querySelectorAll(".light-logo")
const darkLogos = document.querySelectorAll(".dark-logo")

// If the current theme in localStorage is "light"...
if (currentTheme == "light") {
  // ...then use the .light-theme class
  document.body.classList.add("light-theme");
  icons.forEach(icon => icon.classList.add("fa-sun"))
  icons.forEach(icon => icon.classList.remove("fa-moon"))
  lightLogos.forEach(x => x.classList.remove("d-none"))
  darkLogos.forEach(x => x.classList.add("d-none"))
}

// Listen for a click on the button 
btns.forEach(btn => btn.addEventListener("click", function () {
  // Remove focus
  btn.blur();

  // Toggle the .light-theme class on each click
  document.body.classList.toggle("light-theme");
  icons.forEach(icon => icon.classList.toggle("fa-sun"))
  icons.forEach(icon => icon.classList.toggle("fa-moon"))
  lightLogos.forEach(x => x.classList.toggle("d-none"))
  darkLogos.forEach(x => x.classList.toggle("d-none"))

  // Let's say the theme is equal to light
  let theme = "dark";
  // If the body contains the .light-theme class...
  if (document.body.classList.contains("light-theme")) {
    // ...then let's make the theme light
    theme = "light";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
  currentTheme = theme;

  if (typeof anagram !== 'undefined') {
    anagram.redraw()
}
}));
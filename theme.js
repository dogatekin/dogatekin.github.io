let currentTheme = localStorage.getItem("theme");

const btns = document.querySelectorAll(".toggler");

if (currentTheme == "light") {
  document.body.classList.add("light-theme");
} else {
  currentTheme = "dark"
}

btns.forEach(btn => btn.addEventListener("click", function () {
  btn.blur();

  document.body.classList.toggle("light-theme");


  let theme = "dark";
  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
  currentTheme = theme;

  if (typeof anagram !== 'undefined') {
    anagram.redraw()
  }

  let anagrammers = document.querySelectorAll(".anagrammer");

  anagrammers.forEach(anagrammer => {
    anagrammer.click();
  })
}));
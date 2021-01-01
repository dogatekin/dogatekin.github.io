const carets = document.querySelectorAll('.caret')
const categories = document.querySelectorAll('.category')

for (const [index, category] of categories.entries()) {
  category.onclick = function () {
    if (category.classList.contains('collapsed'))
      carets[index].style.transform = 'rotate(0deg)'
    else
      carets[index].style.transform = 'rotate(-90deg)'
    category.classList.toggle('collapsed')
  }
}
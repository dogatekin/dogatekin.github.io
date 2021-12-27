let reccomendation = document.getElementById('recommendation')
let candidates
let i = 0

Papa.parse("./assets/recommendations.csv", {
  download: true,
  header: true,
  complete: function (results) {
    candidates = results.data
    shuffleArray(candidates)
    newRecommendation()
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function newRecommendation() {
  let category, title, link

  ({
    category,
    title,
    link
  } = candidates[i])

  reccomendation.innerHTML = `Media recommendations:<button onclick="newRecommendation()" class="btn btn-link control"><i class="fas fa-redo"></i></button><br><a href=${link} target="_blank">${title}</a><br><strong>(${category})</strong>`

  i = (i + 1) % candidates.length
}
let reccomendation = document.getElementById('recommendation')
let candidates

Papa.parse("./assets/recommendations.csv", {
  download: true,
  header: true,
  complete: function (results) {
    candidates = results.data
    newRecommendation()
  }
});

function newRecommendation() {
  let category, title, link

  ({
    category,
    title,
    link
  } = candidates[Math.floor(Math.random() * candidates.length)])

  reccomendation.innerHTML = `Random media recommendation:<button onclick="newRecommendation()" class="btn btn-link control"><i class="fas fa-redo"></i></button><br><a href=${link} target="_blank">${title}</a><br><strong>(${category})</strong>`
}
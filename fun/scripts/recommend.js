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

  console.log(category)
  reccomendation.innerHTML = `Random <strong>${category}</strong> recommendation:<button onclick="newRecommendation()" class="btn btn-link control"><i class="fas fa-redo"></i></button><br><a href=${link}>${title}</a>`
}
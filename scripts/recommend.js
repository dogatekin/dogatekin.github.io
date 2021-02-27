let reccomendation = document.getElementById('recommendation')

Papa.parse("./assets/recommendations.csv", {
  download: true,
  header: true,
  complete: function (results) {
    let category, title, link;
    ({
      category,
      title,
      link
    } = results.data[Math.floor(Math.random() * results.data.length)])
    reccomendation.innerHTML = `Random <strong>${category}</strong> recommendation:<br><a href=${link}>${title}</a>`
  }
});
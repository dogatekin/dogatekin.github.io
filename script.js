function showAnimation() {
    document.getElementById("animation").style.display = "inline";
    setTimeout(() => {
        document.getElementById("animation").style.display = "none";
        document.getElementById("animation").src = document.getElementById("animation").src
    }, 7000)
}

var options = {
    strings: ["am a computer scientist.",
        "am a Master's student.",
        "am interested in machine learning.",
        "love Python.",
        "can juggle 3 balls.",
        "have a playing card collection.",
        "used to make <a onclick='showAnimation()'>stick figure animations</a>.",
        "spend too much time on YouTube.",
        "suggest you watch <a href='https://www.imdb.com/title/tt5687612/' target='_blank'>Fleabag</a>.",
        "wish you a pleasant day."
    ],
    startDelay: 250,
    typeSpeed: 40,
    loop: true,
    autoInsertCss: false,
    smartBackspace: true
}

var typed = new Typed(".typed", options);
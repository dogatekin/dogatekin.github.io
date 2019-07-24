function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tab");
    // for (i = 0; i < x.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    // }
    document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " is-active";

    document.getElementById("navBurger").classList.remove('is-active')
    document.getElementById("navMenu").classList.remove('is-active')
    window.scrollTo(0, 0)
}

function showAnimation() {
    document.getElementById("animation").style.display = "inline";
    setTimeout(() => {
        document.getElementById("animation").style.display = "none";
        document.getElementById("animation").src = document.getElementById("animation").src
    }, 7000)
}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
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
        typeSpeed: 40,
        loop: true,
        autoInsertCss: false,
        smartBackspace: true
    }

    var typed = new Typed(".typed", options);

});
(function () {
    const elem = document.querySelector(".about-product__list");
    const iso = new Isotope(elem, {
        temSelector: ".about-product__item",
        filter: ".size-table",
    });

    const menubtn = document.querySelectorAll(".menu__link");

    menubtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const filtername = btn.getAttribute("data-filter");
            menubtn.forEach(function (link) {
                link.classList.remove("menu__link--active");
            });
            btn.classList.add("menu__link--active");
            iso.arrange({
                filter: `.${filtername}`,
            });
        });
    });
})();

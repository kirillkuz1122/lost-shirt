(function () {
    const slides = document.querySelectorAll(".fade-slider__item");
    let index = 0;

    setInterval(function () {
        slides[index].classList.remove("fade-slider__item--visible");
        index++;
        if (index + 1 > slides.length) {
            index = 0;
        }
        slides[index].classList.add("fade-slider__item--visible");
    }, 5000);
})();

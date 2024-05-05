(function() {
    const menubtn = document.querySelectorAll('.menu-size__link');

    menubtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const work = btn.classList.contains('menu-size__link--cannot');
            if (work == false) {
            menubtn.forEach(function(link) {
                link.closest('.menu-size__item').classList.remove('menu-size__item--active');
            })
            btn.closest('.menu-size__item').classList.add('menu-size__item--active');
            }
        })
    })
}())
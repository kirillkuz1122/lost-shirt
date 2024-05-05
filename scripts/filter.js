(function() {
    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
        temSelector: '.products__item', 
        filter: '.popular'
    });

    const filterbtn = document.querySelectorAll('.filter__link');

    filterbtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const filtername = btn.getAttribute('data-filter');
            filterbtn.forEach(function(link) {
                link.closest('.filter__item').classList.remove('filter__item--active');
            })
            btn.closest('.filter__item').classList.add('filter__item--active');
            iso.arrange({
                filter: `.${filtername}`
            })
        })
    })
}())
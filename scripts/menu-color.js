(function () {
    const menubtn = document.querySelectorAll('.menu-color__item');
    const menulink = document.querySelectorAll('.menu-color__link');
    const img = document.querySelector('.product__img');
    const text = document.getElementsByClassName('product__item');

    menubtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            menubtn.forEach(function(link) {
                link.closest('.menu-color__item').classList.remove('menu-color__item--active');
            })
            btn.closest('.menu-color__item').classList.add('menu-color__item--active');
        })
    })

    menulink.forEach(function(btn) {
        btn.addEventListener('click', function() {
            colorblack = btn.classList.contains('menu-color__link--black');
            colorwhite = btn.classList.contains('menu-color__link--white');
            colorgreen = btn.classList.contains('menu-color__link--green');
            colorblue = btn.classList.contains('menu-color__link--blue');
            colorred = btn.classList.contains('menu-color__link--red');
            if (colorblack) {
                img.src = './../img/web-ready/tshirts/tshirt_07.png';
                img.alt = 'футболка черная rick and morty'
                text[2].innerHTML = 'Цвет: Черный';
            }
            else if (colorwhite) {
                img.src = './../img/web-ready/tshirts/tshirt_08.png';
                img.alt = 'футболка белая rick and morty'
                text[2].innerHTML = 'Цвет: Белый';
            }
            else if (colorgreen) {
                img.src = './../img/web-ready/tshirts/tshirt_09.png';
                img.alt = 'футболка зеленая rick and morty'
                text[2].innerHTML = 'Цвет: Зеленый';
            }
            else if (colorblue) {
                img.src = './../img/web-ready/tshirts/tshirt_10.png';
                img.alt = 'футболка синия rick and morty'
                text[2].innerHTML = 'Цвет: Синий';
            }
            else if (colorred) {
                img.src = './../img/web-ready/tshirts/tshirt_11.png';
                img.alt = 'футболка красная rick and morty'
                text[2].innerHTML = 'Цвет: Красный';
            }
        })
    })
}())
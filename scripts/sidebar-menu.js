(function() {
const openingBtn = document.querySelector('.sidebar__hamburger');
const closingBtn = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');

function opensidebar(e) {
    e.preventDefault();
    sidebar.classList.add('sidebar--opened');
};
function closesidebar(e) {
    e.preventDefault();
    sidebar.classList.remove('sidebar--opened');
};

openingBtn.addEventListener('click', opensidebar);

closingBtn.addEventListener('click', closesidebar); 
}())
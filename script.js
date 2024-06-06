function closeNavbar() {
    var navBar = document.querySelector('.navbar-collapse');
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

window.onload = function() {
    window.scrollTo(0, 0);
}
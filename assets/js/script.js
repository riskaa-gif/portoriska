
// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', function () {

        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');

        const isOpen = navMenu.classList.contains('show');

        menuToggle.setAttribute('aria-expanded', isOpen);

    });

    const navLinks = navMenu.querySelectorAll('a');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');

        });

    });

}


// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add('active');

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add('active');
    });

}

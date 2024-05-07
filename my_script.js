/* Adjusting the links in the header based on if page is active */
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            nav_links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Adding a sticky navigation bar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Removing the menu/toggle icon and navigation bar when nav-bar link is clicked*/
    menu_icon.classList.remove('bx-x');
    nav_bar.classList.remove('active');
};

/* Toggling the menu icon navigation bar, when menu icon is being used */
let menu_icon = document.querySelector('#menu-icon');
let nav_bar = document.querySelector('.nav-bar');

/* bx-x from Boxicons */
menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x');
    nav_bar.classList.toggle('active');

};

/* Using Scroll Reveal for animations*/
ScrollReveal({ 
    reset: true,
    distance: '70px',
    duration: 1700,
    delay: 150
});

/* Top, bottom, left, and right reveal for each page component */
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.portrait-img,  .skills-container, .experiences-container, .projects-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .skills-top-portion p, .skills-top-portion .button', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });




const modalBtns = document.querySelectorAll('.experiences-button, .projects-button');
const modalCloses = document.querySelectorAll('.experiences__modal-close, .projects__modal-close');
const modals = document.querySelectorAll('.experiences__modal, .projects__modal');

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        const modal = document.querySelector(modalBtn.dataset.modalTarget);
        openModal(modal);

        /* Add blur class to corresponding section*/
        const sectionId = modalBtn.closest('section').id;
        document.getElementById(sectionId).classList.add('blur');
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        closeModal(modalClose.closest('.experiences__modal, .projects__modal'));

        /*Remove blur class from corresponding section*/
        const sectionId = modalClose.closest('section').id;
        document.getElementById(sectionId).classList.remove('blur');
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active-modal');
    document.body.classList.add('modal-open');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active-modal');
    document.body.classList.remove('modal-open');
}


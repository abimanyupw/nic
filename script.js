const navbarnav = document.querySelector('.nav');
const hm = document.querySelector('#hamburger-menu');
const navlinks = document.querySelectorAll('.nav a')

// Hamburger menu toggle
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarnav.classList.toggle('active');
    e.preventDefault();
};
document.addEventListener('click', (e) => {
    if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

navlinks.forEach((link) => {
    link.addEventListener('click',() => {
        navbarnav.classList.remove('active')
    })
})
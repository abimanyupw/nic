const navbarnav = document.querySelector('.nav');
const hm = document.querySelector('#hamburger-menu');
// Hamburger menu toggle
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarnav.classList.toggle('active');
    e.preventDefault();
};
if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove('active');
}
// stop nav links from refreshing the page
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
    console.log('nav link clicked');
})

const contentImgs = document.querySelectorAll('.content-section img');
contentImgs.forEach(img => {
    img.addEventListener('mouseenter', e => e.target.classList.add('tilt'));
    img.addEventListener('mouseleave', e => e.target.classList.remove('tilt'));
});

// stop nav links from refreshing the page
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
    console.log('nav link clicked');
})

const contentImgs = document.querySelectorAll('.content-section img');
contentImgs.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('tilt'));
    img.addEventListener('mouseleave', () => img.classList.remove('tilt'));
});

function randomHsl() {
    return `hsla(${(Math.random() * 360)}, 100%, 50%, 1)`;
}

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.addEventListener('dblclick', e => {
        e.target.style.color = 'black';
    });
    p.addEventListener('click', e => {
        e.target.style.color = randomHsl();
    });
});
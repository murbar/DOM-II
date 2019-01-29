// stop nav links from refreshing the page
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
})

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(l => {
    l.addEventListener('wheel', e => {
        e.preventDefault();
        const fs = parseInt(window.getComputedStyle(l)['font-size']);
        if (e.deltaY < 0) {
            if (fs > 10) l.style.fontSize = `${fs * 0.8}px`;
        } else {
            l.style.fontSize = `${fs * 1.2}px`;
        }
    });
});

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
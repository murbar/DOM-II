// stop nav links from refreshing the page
// 1 - click
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
})

// 2 - wheel
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

// 3 & 4 - mouseenter, mouseleave
const contentImgs = document.querySelectorAll('.content-section img');
contentImgs.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('tilt'));
    img.addEventListener('mouseleave', () => img.classList.remove('tilt'));
});

function randomHsl() {
    return `hsla(${(Math.random() * 360)}, 100%, 50%, 1)`;
}

// 5 - dblclick
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.addEventListener('dblclick', e => p.removeAttribute('style'));
    p.addEventListener('click', e => p.style.color = randomHsl());
});

// 6 - scroll
const secondBodyImg = document.querySelector('.inverse-content img');
window.addEventListener('scroll', e => {
    secondBodyImg.style.transform = `rotate(${window.scrollY / 5}deg)`
});

// 7 - keyup
const logotype = document.querySelector('header h1');
window.addEventListener('keyup', e => {
    if (e.key === "Escape") {
        logotype.textContent = 'Fun Bus';
    } else {
        logotype.textContent = e.key;
    }
});

// 8 & 9 - drag, dragend
const headerImg = document.querySelector('.intro img');
let flipped = false;
headerImg.addEventListener('drag', e=> {
    if (!flipped) {
        headerImg.style.transform = 'rotate(180deg)';
    } else {
        headerImg.removeAttribute('style');
    }
});
headerImg.addEventListener('dragend', e => {
    flipped = !flipped;
});

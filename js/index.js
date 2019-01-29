// 1 - click
// stop nav links from refreshing the page
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
})

// 2 - wheel
// use scroll wheel on menu items to zoom text in and out
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
// tilt images in a .content-section on mouse over, reset on mouse out
const contentImgs = document.querySelectorAll('.content-section img');
contentImgs.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('tilt'));
    img.addEventListener('mouseleave', () => img.classList.remove('tilt'));
});

function randomHsl() {
    return `hsla(${(Math.random() * 360)}, 100%, 50%, 1)`;
}

// 5 & 6 - dblclick, contextmenu
// double click paragraphs to set font color to random value, right-click to reset
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.addEventListener('dblclick', e => p.style.color = randomHsl());
    p.addEventListener('contextmenu', e => {
        e.preventDefault();
        p.removeAttribute('style')
    });
});

// 7 - scroll
// spin second img in main section on page scroll
const secondBodyImg = document.querySelector('.inverse-content img');
window.addEventListener('scroll', e => {
    secondBodyImg.style.transform = `rotate(${window.scrollY / 5}deg)`
});

// 8 - keyup
// set logo text content to last key pressed, press ESC to reset
const logotype = document.querySelector('header h1');
window.addEventListener('keyup', e => {
    if (e.key === "Escape") {
        logotype.textContent = 'Fun Bus';
    } else {
        logotype.textContent = e.key;
    }
});

// 9 & 10 - drag, dragend
// drag header image to flip vertically
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

// bonus - resize
// set page bg color to random value on window resize
window.addEventListener('resize', () => {
    document.body.style.backgroundColor = randomHsl();
});
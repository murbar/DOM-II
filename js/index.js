// stop nav links from refreshing the page
const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
    console.log('nav link clicked');
})


import loadHome from "./home.js";

loadHome();

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');

const content = document.getElementById('content');

homeBtn.addEventListener('click', () => {
    content.textContent = '';
    loadHome();
    
})

console.log('Server is up and running!');
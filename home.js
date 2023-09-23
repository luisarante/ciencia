let insta = document.querySelector('.insta-svg');

insta.addEventListener("mouseover", () => {
    insta.style.background = 'linear-gradient(#7f37c9, #ff2992, #ff9807)';
});

insta.addEventListener("mouseout", () => {
    insta.style.background = '#0f0f0f';
});
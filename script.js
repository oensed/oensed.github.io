window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('hidden');
});

const texts = [
    "Generalist programmer",
    "creating cool stuff 4fun",
    "dm me on telegram or discord"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById("typewriter").textContent = letter;

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);
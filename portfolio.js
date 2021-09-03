// NAV BAR SECTION
const mobileMenuIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#mobile-menu');

const mobileMenuDisplay = () => {
    mobileMenu.classList.toggle('show');
}

mobileMenuIcon.addEventListener('click', mobileMenuDisplay());

// $(".fa-bars").click(() => {
//     document.getElementsById('mobile-menu').classList.toggle("show");
// });

// GALLERY SECTION

// images from unsplashed.com
const images = [
    "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

const galleryImage = document.querySelector('.gallery-img');
const left = document.querySelector('.prev');
const right = document.querySelector('.next');
let slideNum = 0;

function left() {
    document.galleryImage.src = `images/${gallery[(slideNum >= 0 && slideNum <= images.length - 2) ? ++slideNum : slideNum]}`;
}

function right() {
    document.galleryImage.src = `images/${gallery[(slideNum >= 1 && slideNum <= images.length - 1) ? --slideNum : slideNum]}`;
}

// EMAIL SUBMISSION
// Formspree: code and email proxy
var form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thank you";
        form.reset()
    }).catch(error => {
        status.innerHTML = "There was a problem";
    });
}

form.addEventListener("submit", handleSubmit());
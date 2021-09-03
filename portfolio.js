// NAV BAR SECTION (incomplete)
const mobileMenuIcon = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#mobile-menu');

const mobileMenuDisplay = () => {
    mobileMenu.classList.toggle('show');
}

mobileMenuIcon.addEventListener('click', mobileMenuDisplay());


// GALLERY SECTION (incomplete)
// images from unsplashed.com
const images = [
    "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

let imgDiv = document.querySelector('.img-container');
let galleryImage = document.querySelector('.gallery-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideNum = 0;

function left() {

}

function right() {
    
}

prev.addEventListener('click', left());
next.addEventListener('click', right());


// EMAIL SUBMISSION
// Formspree: code and email API
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
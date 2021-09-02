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
    "ruvim-noga-o0R4iqk1eRQ-unsplash.jpg",
    "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

const gallery = document.querySelector('.gallery');

window.addEventListener('load', () => {
    let slide = 0;
    document.gallery.style.backgroundImage = `url("images/${gallery[changeSlides(slide)]}")`;
})

function changeSlides(slide) {
    const max = images.length();
    
    return slide;
}

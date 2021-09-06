// MOBILE MENU SECTION
const mobileMenuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('show')
});


// GALLERY SECTION
// images from unsplashed.com
const galleryImages = [
    "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

const galleryDict = {
    "Unsplashed: Daniela Cuevas": "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "Unsplashed: Tim Foster": "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "Unsplashed: Luca Micheli": "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "Unsplashed: Kace Rodriguez": "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "Unsplashed: Sean oulashin": "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
};

const galleryImage = document.querySelector('.gallery-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryDesc = document.querySelector('#img-desc');
const galleryLength = Object.keys(galleryDict).length;
let galleryImgDesc = Object.keys(galleryDict);
let gallerySrc = Object.values(galleryDict);
let slideIdx = 0;

prevBtn.addEventListener('click', () => {
    galleryImage.src = `images/${gallerySrc[(slideIdx > 0) ? --slideIdx : slideIdx = galleryLength - 1]}`;
    let desc = galleryImgDesc[slideIdx];
    let img = gallerySrc[slideIdx];
    console.log(img + "\n" + desc);
    // galleryImage.src = img;
    galleryDesc.innerHTML = desc;
});

nextBtn.addEventListener('click', () => {
    galleryImage.src = `images/${gallerySrc[(slideIdx < galleryLength - 1) ? ++slideIdx : slideIdx = 0]}`;
    let desc = galleryImgDesc[slideIdx];
    let img = gallerySrc[slideIdx];
    console.log(img + "\n" + desc);
    // galleryImage.src = img;
    galleryDesc.innerHTML = desc;
});


// IFRAME SELECT MENU (in-progress)
const iframeSelect = document.querySelector('#project-list');
const iframeBtn = document.querySelector('#iframeBtn');
const iframe = document.querySelector('#iframe');
const iframeHeader = document.querySelector('#iframeHeader');

const iframeObj = {
    "Family Business Website": "https://tiffanylashandspa.github.io/Tiffany/",
    "Website API": "https://sharquan3.github.io/WeatherAPI/"
}

let length = Object.keys(iframeObj).length;
// const regex = /(\w)+/gi;
// let inputValue = iframeSelect.value.match(regex).join("");

iframeBtn.addEventListener('click', () => {
    try {
        console.log("Running iframe Menu")
        let inputValue = iframeSelect.value;
        iframe.title = inputValue;

        for (let i = 0; i < length; i++) {
            let projNames = Object.keys(iframeObj)[i];
            if (inputValue === projNames) {
                console.log("IF BLOCK")
                // let value = iframeObj[`${inputValue}`];
                // let name = projNames.replace(/([a-z])([A-Z])/g, "$1 $2");
                // let value = Object.keys(iframeObj)[i];
                // console.log(name)
                console.log(projNames);
                let projLink = Object.values(iframeObj)[i];
                console.log(value);
                iframeHeader.innerHTML = projNames;
                iframe.src = projLink;
                iframe.title = projNames;
                localStorage.setItem("header", projNames);
                localStorage.setItem("link", projLink);
                localStorage.setItem("title", projNames);
                // console.log(localStorage.getItem("title"));
                // console.log(localStorage.getItem("link"));
            }
        }
    } catch (err) {
        console.log("iframe website Error");
    }
});


// EMAIL SUBMISSION
// API code from Formspree
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
        status.innerHTML = "There was a problem, make sure to enable all scripts";
    });
}

form.addEventListener("submit", handleSubmit());

// WINDOW LOAD: LOCAL STORAGE
window.addEventListener('load', () => {
    iframeHeader.innerHTML = localStorage.getItem("header");
    iframe.src = localStorage.getItem("link");
    iframe.title = localStorage.getItem("title");
})
// MOBILE MENU SECTION
const mobileMenuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('show')
});


// GALLERY SECTION
// images from unsplashed.com
const images = [
    "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

/*
const beta = {
    0: "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    1: "tim-foster-o4mP43oPGHk-unsplash.jpg",
    2: "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    3: "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    4: "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
};
*/

const galleryImage = document.querySelector('.gallery-img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgDesc = document.querySelector('.img-desc');
let slideNum = 0;

prev.addEventListener('click', () => {
    // galleryImage.src = ``;
    galleryImage.src = `images/${images[(slideNum > 0) ? --slideNum : slideNum = images.length - 1]}`;
});

next.addEventListener('click', () => {
    // galleryImage.src = `images/${beta[0] + Object.values(beta[0])[0]}`;
    galleryImage.src = `images/${images[(slideNum < images.length - 1) ? ++slideNum : slideNum = 0]}`;
});


// IFRAME SELECT MENU (in-progress)
const iframeSelect = document.querySelector('#project-list');
const iframeBtn = document.querySelector('#iframeBtn');
const iframe = document.querySelector('#iframe');
const iframeTitle = document.querySelector('#iframeTitle');

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
        for (let i = 0; i < length; i++) {
            let key = Object.keys(iframeObj)[i];
            if (inputValue == key) {
                console.log("IF BLOCK")
                // let value = iframeObj[`${inputValue}`];
                // let name = key.replace(/([a-z])([A-Z])/g, "$1 $2");
                // let value = Object.keys(iframeObj)[i];
                // console.log(name)
                console.log(key);
                let value = Object.values(iframeObj)[i];
                console.log(value);
                iframeTitle.innerHTML = key;
                iframe.src = value;
                localStorage.setItem("title", key);
                localStorage.setItem("link", value);
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
    iframeTitle.innerHTML = localStorage.getItem("title");
    iframe.src = localStorage.getItem("link");
})
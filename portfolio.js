/**
 * Make it responsive, switch images for gallery, change iframe source
 * (not fixed), contact email functionality.
 * @author Kyle Huang
 */

// MOBILE MENU SECTION
const mobileMenuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
// const menuLink = document.querySelectorAll('menu-link');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// GALLERY SECTION
// my images
const galleryDict = {
    "Bellevue (1): Kyle Huang": "7HuangKyleCHOICEdl0012.JPG",
    "Bellevue (2): Kyle Huang": "7HuangKyleCHOICEdl0013.JPG",
    "Bellevue (3): Kyle Huang": "7HuangKyleCHOICEdl0014.JPG",
    "Bellevue (4): Kyle Huang": "7HuangKyleShowcaseOPT0002.jpg",
    "Bellevue High School (5): Kyle Huang": "7HuangKyleCHOICEdl0010.JPG",
    "Bellevue High School (6): Kyle Huang": "7HuangKyleCloseUp0001.JPG",
    "Bellevue High School (7): Kyle Huang": "7HuangKyleCloseUp0002.JPG",
    "Bellevue High School (8): Kyle Huang": "7HuangKyleCloseUp0004.JPG",
    "Bellevue High School (9): Kyle Huang": "7HuangKyleComp2OPT1.jpg",
    "Bellevue High School (10): Kyle Huang": "7HuangKyleLeadingLinesOPT0001.jpg",
    "Bellevue High School (11): Kyle Huang": "7HuangKylePatriotismOPT0003.jpg",
    "Bellevue High School (12): Kyle Huang": "7HuangKylePatriotismOPT0006.jpg",
    "Bellevue High School (13): Kyle Huang": "7HuangKylePerspectiveDL0006.JPG",
    "Bellevue High School (14): Kyle Huang": "7HuangKyleRepetition0002.JPG",
    "Bellevue High School (15): Kyle Huang": "7HuangKyleShowcase0016.JPG",
    "Bellevue High School (16): Kyle Huang": "7HuangKyleShowcase0017.JPG",
    "Bellevue High School (17): Kyle Huang": "7HuangKyleShowcase0019.JPG",
    "Bellevue High School (17): Kyle Huang": "7HuangKyleShowcaseOPT0001.jpg",
    "Bellevue High School (18): Kyle Huang": "7HuangKyleShowcaseOPT0007.jpg",
    "My Stuff (19): Kyle Huang": "7HuangKyleCHOICEopt0002.jpg",
    "Snoqualmie (20): Kyle Huang": "7HuangKyleAnselizingAsShotDL0011.JPG",
    "Snoqualmie (21): Kyle Huang": "7HuangKyleAnselizingAsShotDL0012.JPG",
    "Snoqualmie (22): Kyle Huang": "7HuangKyleAnselizingAsShotDL0014.JPG",
    "Snoqualmie (23): Kyle Huang": "7HuangKyleDepthOfShotDL0018.jpg",
    "Snoqualmie (24): Kyle Huang": "7HuangKyleDepthOfShotDL0020.jpg",
    "Snoqualmie (25): Kyle Huang": "7HuangKyleDepthOfShotDL0021.jpg",
    "Snoqualmie (26): Kyle Huang": "7HuangKyleDepthOfShotDL0024.jpg",
    "Snoqualmie (27): Kyle Huang": "7HuangKyleDepthOfShotDL0031.jpg",
    "Snoqualmie (28): Kyle Huang": "7HuangKyleDepthOfShotDL0035.jpg",
    "Snoqualmie (29): Kyle Huang": "7HuangKyleDepthOfShotDL0036.jpg",
    "Snoqualmie (30): Kyle Huang": "7HuangKyleLookWithinDL0023.JPG",
    "Snoqualmie (31): Kyle Huang": "7HuangKylePSARTSHOW0016.jpg",
    "Snoqualmie (32): Kyle Huang": "7HuangKylePSARTSHOW0018.jpg",
    "Snoqualmie (33): Kyle Huang": "7HuangKylePSARTSHOW0032.jpg",
    "Snoqualmie (34): Kyle Huang": "7HuangKylePSARTSHOW0037.JPG",
    "Snoqualmie (35): Kyle Huang": "7HuangKylePerspectiveDL0004.JPG",
    "Snoqualmie (36): Kyle Huang": "7HuangKyleShowcase0004.JPG",
    "Snoqualmie (37): Kyle Huang": "7HuangKyleShowcase0010.jpg",
    "Snoqualmie (38): Kyle Huang": "7HuangKyleShowcase0012.jpg",
    "Snoqualmie (39): Kyle Huang": "7HuangKyleShowcase0018.jpg",
    "Snoqualmie (40): Kyle Huang": "7HuangKyleShowcaseOPT0003.jpg",
    "Snoqualmie (41): Kyle Huang": "7HuangKyleShowcaseOPT0004.jpg",
    "Snoqualmie (42): Kyle Huang": "7HuangKyleShowcaseOPT0005.jpg",
    "Snoqualmie (43): Kyle Huang": "7HuangKyleShowcaseOPT0006.jpg",
};

const galleryImage = document.querySelector('.gallery-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryDesc = document.querySelector('#img-desc');
const galleryLength = Object.keys(galleryDict).length;
const galleryImgDesc = Object.keys(galleryDict);
const gallerySrc = Object.values(galleryDict);
let slideIdx = 0;

prevBtn.addEventListener('click', () => {
    galleryImage.src = `images/${gallerySrc[(slideIdx > 0) ? --slideIdx
        : slideIdx = galleryLength - 1]}`;
    const desc = galleryImgDesc[slideIdx];
    galleryDesc.innerHTML = desc;
});

nextBtn.addEventListener('click', () => {
    galleryImage.src = `images/${gallerySrc[(slideIdx < galleryLength - 1)
        ? ++slideIdx : slideIdx = 0]}`;
    const desc = galleryImgDesc[slideIdx];
    galleryDesc.innerHTML = desc;
});


// IFRAME SELECT MENU (in-progress)
const iframeSelect = document.querySelector('#project-list');
const iframeBtn = document.querySelector('#iframeBtn');
const iframe = document.querySelector('#iframe');
const iframeHeader = document.querySelector('#iframeHeader');

const iframeObj = {
    "Family Business Website": "https://tiffanylashandspa.github.io/Tiffany/",
    "Weather API": "https://sharquan3.github.io/WeatherAPI/"
}

iframeBtn.addEventListener('click', () => {
    let inputValue = iframeSelect.value;
    iframe.title = inputValue;
    iframeHeader.innerHTML = inputValue;
    iframe.src = binarySearch(iframeObj, inputValue);
});

function binarySearch(obj, target) {
    let low = 0, high = Object.keys(obj).length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (compare(Object.keys(obj)[mid], target) > 0) {
            high = mid - 1;
        } else if (compare(Object.keys(obj)[mid], target) < 0) {
            low = mid + 1;
        } else {
            let title = Object.keys(obj)[mid];
            let link = Object.values(obj)[mid];
            localStorage.setItem("title", title);
            localStorage.setItem("link", link);
            return link;
        }
    }
}

const compare = function (string1, string2) {
    return string1 < string2 ? -1
        : string1 > string2 ? 1 : 0;
}


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

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

form.addEventListener("submit", handleSubmit());


// DOMContentLoaded: LOCAL STORAGE
document.addEventListener("DOMContentLoaded", () => {
    window.location.hash = "top";
    if (localStorage.getItem("title") !== null
        || localStorage.getItem("link") !== null) {
        iframeHeader.innerHTML = localStorage.getItem("title");
        iframe.src = localStorage.getItem("link");
        iframe.title = localStorage.getItem("title");
        iframeSelect.value = localStorage.getItem("title");
    }
})
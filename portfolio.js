// MOBILE MENU SECTION
const mobileMenuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('show')
});


// GALLERY SECTION
// my images
// other images from unsplashed.com
const galleryDict = {
    "Bellevue (1): Kyle Huang": "7HuangKyleCHOICEdl0012.JPG",
    "Bellevue (2): Kyle Huang": "7HuangKyleCHOICEdl0013.JPG",
    "Bellevue (3): Kyle Huang": "7HuangKyleCHOICEdl0014.JPG",
    "Bellevue (4): Kyle Huang": "7HuangKyleShowcaseOPT0002.jpg",
    "Bellevue High School (5): Kyle Huang": "7HuangKyleCHOICEdl0010.JPG",
    "Bellevue High School (6): Kyle Huang": "7HuangKyleCloseUp0001.JPG",
    "Bellevue High School (7): Kyle Huang": "7HuangKyleCloseUp0002.JPG",
    "Bellevue High School (8): Kyle Huang": "7HuangKyleCloseUp0003.JPG",
    "Bellevue High School (9): Kyle Huang": "7HuangKyleCloseUp0004.JPG",
    "Bellevue High School (10): Kyle Huang": "7HuangKyleComp2OPT1.jpg",
    "Bellevue High School (11): Kyle Huang": "7HuangKyleLeadingLinesOPT0001.jpg",
    "Bellevue High School (12): Kyle Huang": "7HuangKylePatriotismOPT0003.jpg",
    "Bellevue High School (13): Kyle Huang": "7HuangKylePatriotismOPT0006.JPG",
    "Bellevue High School (14): Kyle Huang": "7HuangKylePerspectiveDL0006.JPG",
    "Bellevue High School (15): Kyle Huang": "7HuangKyleRepetition0001.JPG",
    "Bellevue High School (16): Kyle Huang": "7HuangKyleRepetition0002.JPG",
    "Bellevue High School (17): Kyle Huang": "7HuangKyleShowcase0016.JPG",
    "Bellevue High School (18): Kyle Huang": "7HuangKyleShowcase0017.JPG",
    "Bellevue High School (19): Kyle Huang": "7HuangKyleShowcase0019.JPG",
    "Bellevue High School (20): Kyle Huang": "7HuangKyleShowcase0020.JPG",
    "Bellevue High School (21): Kyle Huang": "7HuangKyleShowcase0022.jpg",
    "Bellevue High School (22): Kyle Huang": "7HuangKyleShowcaseOPT0001.jpg",
    "Bellevue High School (23): Kyle Huang": "7HuangKyleShowcaseOPT0007.jpg",
    "My Stuff (24): Kyle Huang": "7HuangKyleCHOICEopt0002.jpg",
    "Snoqualmie (25): Kyle Huang": "7HuangKyleAnselizingAsShotDL0014.JPG",
    "Snoqualmie (26): Kyle Huang": "7HuangKyleAnselizingAsShotDL0012.JPG",
    "Snoqualmie (27): Kyle Huang": "7HuangKyleAnselizingAsShotDL0011.JPG",
    "Snoqualmie (28): Kyle Huang": "7HuangKyleDepthOfShotDL0036.jpg",
    "Snoqualmie (29): Kyle Huang": "7HuangKyleDepthOfShotDL0035.jpg",
    "Snoqualmie (30): Kyle Huang": "7HuangKyleLookWithinDL0038.JPG",
    "Snoqualmie (31): Kyle Huang": "7HuangKyleLookWithinDL0023.JPG",
    "Snoqualmie (32): Kyle Huang": "7HuangKylePSARTSHOW0037.JPG",
    "Snoqualmie (33): Kyle Huang": "7HuangKylePSARTSHOW0032.jpg",
    "Snoqualmie (34): Kyle Huang": "7HuangKylePSARTSHOW0018.jpg",
    "Snoqualmie (35): Kyle Huang": "7HuangKylePSARTSHOW0016.jpg",
    "Snoqualmie (36): Kyle Huang": "7HuangKylePerspectiveDL0004.JPG",
    "Snoqualmie (37): Kyle Huang": "7HuangKylePerspectiveDL0004.JPG",
    "Snoqualmie (38): Kyle Huang": "7HuangKyleShowcase0004.JPG",
    "Snoqualmie (39): Kyle Huang": "7HuangKyleShowcase0008.JPG",
    "Snoqualmie (40): Kyle Huang": "7HuangKyleShowcase0010.jpg",
    "Snoqualmie (41): Kyle Huang": "7HuangKyleShowcase0011.jpg",
    "Snoqualmie (42): Kyle Huang": "7HuangKyleShowcase0012.jpg",
    "Snoqualmie (43): Kyle Huang": "7HuangKyleShowcase0018.jpg",
    "Snoqualmie (44): Kyle Huang": "7HuangKyleShowcaseOPT0003.jpg",
    "Snoqualmie (45): Kyle Huang": "7HuangKyleShowcaseOPT0004.jpg",
    "Snoqualmie (46): Kyle Huang": "7HuangKyleShowcaseOPT0005.jpg",
    "Snoqualmie (47): Kyle Huang": "7HuangKyleShowcaseOPT0006.jpg",
    "Unsplashed.com (48): Daniela Cuevas": "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    "Unsplashed.com (49): Tim Foster": "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "Unsplashed.com (50): Luca Micheli": "luca-micheli-r9RW20TrQ0Y-unsplash.jpg",
    "Unsplashed.com (51): Kace Rodriguez": "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    "Unsplashed.com (52): Sean oulashin": "sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
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
    const img = gallerySrc[slideIdx];
    console.log(img + "\n" + desc);
    galleryDesc.innerHTML = desc;
});

nextBtn.addEventListener('click', () => {
    // console.log("Length: " + galleryLength);
    galleryImage.src = `images/${gallerySrc[(slideIdx < galleryLength - 1)
        ? ++slideIdx : slideIdx = 0]}`;
    const desc = galleryImgDesc[slideIdx];
    const img = gallerySrc[slideIdx];
    console.log(img + "\n" + desc);
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

iframeBtn.addEventListener('click', () => {
    try {
        console.log("Running iframe Menu")
        const inputValue = iframeSelect.value;
        iframe.title = inputValue;
        let length = Object.keys(iframeObj).length;

        for (let i = 0; i < length; i++) {
            let projNames = Object.keys(iframeObj)[i];
            if (inputValue === projNames) {
                console.log("IF BLOCK")
                let projLink = Object.values(iframeObj)[i];
                console.log(projNames);
                console.log(projLink);
                iframeHeader.innerHTML = projNames;
                iframe.src = projLink;
                iframe.title = projNames;
                // localStorage.setItem("header", projNames);
                // localStorage.setItem("link", projLink);
                // localStorage.setItem("title", projNames);
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


/*
// WINDOW LOAD
window.addEventListener('load', () => {
    //
})


// DOMContentLoaded: LOCAL STORAGE
document.addEventListener("DOMContentLoaded", () => {
    iframeHeader.innerHTML = localStorage.getItem("header");
    iframe.src = localStorage.getItem("link");
    iframe.title = localStorage.getItem("title");
})
*/
/**
 * Dynamic part of the website: switch images for gallery, change iframe
 * website using quick sort and binary search, contact email functionality.
 * @author Kyle Huang
 */

// SORT
function quickSort(array, low, high) {
    if (low < high) {
        let pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            ++i;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    let temp = array[++i];
    array[i] = array[high];
    array[high] = temp;
    return i;
}

// GALLERY DATA
const galleryDict = {
    "Bellevue (01): Kyle Huang": "7HuangKyleCHOICEdl0012.JPG",
    "Snoqualmie (41): Kyle Huang": "7HuangKyleShowcaseOPT0004.jpg",
    "Snoqualmie (42): Kyle Huang": "7HuangKyleShowcaseOPT0005.jpg",
    "Snoqualmie (43): Kyle Huang": "7HuangKyleShowcaseOPT0006.jpg",
    "Bellevue (04): Kyle Huang": "7HuangKyleShowcaseOPT0002.jpg",
    "Snoqualmie (20): Kyle Huang": "7HuangKyleAnselizingAsShotDL0011.JPG",
    "Snoqualmie (34): Kyle Huang": "7HuangKylePSARTSHOW0037.JPG",
    "Snoqualmie (35): Kyle Huang": "7HuangKylePerspectiveDL0004.JPG",
    "Snoqualmie (36): Kyle Huang": "7HuangKyleShowcase0004.JPG",
    "Bellevue High School (10): Kyle Huang": "7HuangKyleLeadingLinesOPT0001.jpg",
    "Bellevue High School (11): Kyle Huang": "7HuangKylePatriotismOPT0003.jpg",
    "Snoqualmie (21): Kyle Huang": "7HuangKyleAnselizingAsShotDL0012.JPG",
    "Snoqualmie (22): Kyle Huang": "7HuangKyleAnselizingAsShotDL0014.JPG",
    "Snoqualmie (31): Kyle Huang": "7HuangKylePSARTSHOW0016.jpg",
    "Bellevue High School (05): Kyle Huang": "7HuangKyleCHOICEdl0010.JPG",
    "Bellevue High School (06): Kyle Huang": "7HuangKyleCloseUp0001.JPG",
    "Snoqualmie (39): Kyle Huang": "7HuangKyleShowcase0018.jpg",
    "Snoqualmie (40): Kyle Huang": "7HuangKyleShowcaseOPT0003.jpg",
    "Snoqualmie (32): Kyle Huang": "7HuangKylePSARTSHOW0018.jpg",
    "Snoqualmie (33): Kyle Huang": "7HuangKylePSARTSHOW0032.jpg",
    "Bellevue High School (12): Kyle Huang": "7HuangKylePatriotismOPT0006.jpg",
    "Bellevue High School (17): Kyle Huang": "7HuangKyleShowcase0019.JPG",
    "Bellevue High School (17): Kyle Huang": "7HuangKyleShowcaseOPT0001.jpg",
    "Bellevue High School (18): Kyle Huang": "7HuangKyleShowcaseOPT0007.jpg",
    "Bellevue High School (07): Kyle Huang": "7HuangKyleCloseUp0002.JPG",
    "Snoqualmie (23): Kyle Huang": "7HuangKyleDepthOfShotDL0018.jpg",
    "Snoqualmie (30): Kyle Huang": "7HuangKyleLookWithinDL0023.JPG",
    "Bellevue High School (08): Kyle Huang": "7HuangKyleCloseUp0004.JPG",
    "Bellevue High School (09): Kyle Huang": "7HuangKyleComp2OPT1.jpg",
    "My Stuff (19): Kyle Huang": "7HuangKyleCHOICEopt0002.jpg",
    "Snoqualmie (37): Kyle Huang": "7HuangKyleShowcase0010.jpg",
    "Snoqualmie (38): Kyle Huang": "7HuangKyleShowcase0012.jpg",
    "Snoqualmie (24): Kyle Huang": "7HuangKyleDepthOfShotDL0020.jpg",
    "Snoqualmie (27): Kyle Huang": "7HuangKyleDepthOfShotDL0031.jpg",
    "Bellevue High School (13): Kyle Huang": "7HuangKylePerspectiveDL0006.JPG",
    "Bellevue High School (14): Kyle Huang": "7HuangKyleRepetition0002.JPG",
    "Bellevue High School (15): Kyle Huang": "7HuangKyleShowcase0016.JPG",
    "Bellevue High School (16): Kyle Huang": "7HuangKyleShowcase0017.JPG",
    "Snoqualmie (25): Kyle Huang": "7HuangKyleDepthOfShotDL0021.jpg",
    "Snoqualmie (26): Kyle Huang": "7HuangKyleDepthOfShotDL0024.jpg",
    "Snoqualmie (28): Kyle Huang": "7HuangKyleDepthOfShotDL0035.jpg",
    "Snoqualmie (29): Kyle Huang": "7HuangKyleDepthOfShotDL0036.jpg",
    "Bellevue (02): Kyle Huang": "7HuangKyleCHOICEdl0013.JPG",
    "Bellevue (03): Kyle Huang": "7HuangKyleCHOICEdl0014.JPG",
};

// PROJECT DISPLAY DATA
const iframeObj = {
    "Family Business Website": "https://tiffanylashandspa.github.io/Tiffany/",
    "Weather API": "https://kylehuang041.github.io/WeatherAPI/",
    "Resume": "https://kylehuang041.github.io/Resume/"
}


// MOBILE MENU ELEMENTS
const mobileMenuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

// PHOTO GALLERY ELEMENTS
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImage = document.querySelector('.gallery-img');
let gallery;
const galleryDesc = document.querySelector('#img-desc');
let slideIdx = 0;

// PROJECT DISPLAY ELEMENTS
const iframeSelect = document.querySelector('#project-list');
const iframeBtn = document.querySelector('#iframeBtn');
const iframe = document.querySelector('#iframe');
const iframeHeader = document.querySelector('#iframeHeader');

// DOMContentLoaded: LOCAL STORAGE, STARTER SETTINGS
document.addEventListener("DOMContentLoaded", () => {
    // PROJECT DISPLAY (Local Storage)
    if (localStorage.getItem("title") !== null) {
        let title = localStorage.getItem("title");
        iframeHeader.textContent = title;
        iframe.title = title;
        iframeSelect.value = title;
    }
    if (localStorage.getItem("link") !== null) {
        iframe.src = localStorage.getItem("link");
    }

    // Photo Gallery: array sort
    gallery = Object.keys(galleryDict);
    quickSort(gallery, 0, gallery.length - 1);

    document.querySelector('form').reset();
})

// EMAIL SUBMISSION CODE
clearForm = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Testing: " + e.target)
}

// MOBILE MENU CODE
mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});

prevBtn.addEventListener('click', () => {
    galleryImage.src = `images/${galleryDict[gallery[(slideIdx > 0) ? --slideIdx
        : slideIdx = gallery.length - 1]]}`;
    let desc = gallery[slideIdx];
    galleryDesc.textContent = desc;
});

nextBtn.addEventListener('click', () => {
    galleryImage.src = `images/${galleryDict[gallery[(slideIdx < gallery.length - 1)
        ? ++slideIdx : slideIdx = 0]]}`;
    let desc = gallery[slideIdx];
    galleryDesc.textContent = desc;
});


// PROJECT DISPLAY MENU CODE
iframeBtn.addEventListener('click', () => {
    let inputValue = iframeSelect.value;
    iframe.title = inputValue;
    iframeHeader.textContent = inputValue;
    iframe.src = iframeObj[`${inputValue}`];
    localStorage.setItem("title", inputValue);
    localStorage.setItem("link", iframeObj[inputValue]);
});
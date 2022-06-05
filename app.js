const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

// Unsplash APi
const count = 10;
const apiKey = "vxVJA8Tdg4Wc9bsCH301S5FArldhGuGsp3nh2gy-dZ4";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and phots
const displayPhotos = () => {
    photosArray.forEach((photo) => {
        // create <a>
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // create <img>
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        // put img and a inside img container
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Api call
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        console.log(photosArray);
    } catch (error) {
        alert(error);
    }
}



// On Load
getPhotos()



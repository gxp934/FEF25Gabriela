let galleryClass = document.querySelectorAll('.imageGallery');
console.log(galleryClass); // gives you a node list
console.log(galleryClass.length); // tells you how many items in the node list


/*
To access an individual item in the node list, you have to use its index number
Index numbers start at 0

Example: to hide the first image in the gallery
galleryClass[0].style.display = "none";
then to hide the second image
galleryClass[1].style.display = "none";
and so on...
But this is tedious if you have a lot of images

Instead, use a for loop to cycle through all the items in the node list

*/

// hide all images
for (let i = 0; i < galleryClass.length; i++) {
    galleryClass[i].style.display = "none";
}

let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');

let currentIndex = 0; // start with the first image in the gallery

previousButton.addEventListener('click', function() {
    // hide the current image
    galleryClass[currentIndex].style.display = "none";
    // increment the index to point to the next image
    currentIndex = currentIndex - 1;
    // if we are at the beginning of the gallery, go back to the end
    if (currentIndex <= 0) {
        currentIndex = galleryClass.length - 1;
    }
    // show the next image
    galleryClass[currentIndex].style.display = "block";
});

nextButton.addEventListener('click', function() {
    // hide the current image
    galleryClass[currentIndex].style.display = "none";
    // increment the index to point to the next image
    currentIndex++;
    // if we are at the end of the gallery, go back to the beginning
    if (currentIndex >= galleryClass.length) {
        currentIndex = 0;
    }
    // show the next image
    galleryClass[currentIndex].style.display = "block";
});

let stopButton = document.getElementById('stop');
let startButton = document.getElementById('start');
let autoCycleActive = false;
let cycleInterval;

startButton.addEventListener('click', function() {
    if (autoCycleActive == false) {
         cycleInterval = setInterval(function() {
            galleryClass[currentIndex].style.display = "none";
            currentIndex++;
            if (currentIndex >= galleryClass.length) {
                currentIndex = 0;
            }
            galleryClass[currentIndex].style.display = "block";
        }, 3000);
        autoCycleActive = true;
   }
});

stopButton.addEventListener('click', function() {
    clearInterval(cycleInterval);
    autoCycleActive = false;
});
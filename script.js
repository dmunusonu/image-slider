// Selecting the container element that holds the slider and buttons
var container = document.querySelector('.container');

// Selecting the left arrow button within the container
var arrow_left = container.querySelector('#arrow-left');

// Selecting the right arrow button within the container
var arrow_right = container.querySelector('#arrow-right');

// Selecting all slide elements
var slide = document.querySelectorAll('.slide');

// Initializing the slide index to 0 (first slide)
var slideIndex = 0;

// Setting an interval to automatically switch to the next slide every 3000 milliseconds (3 seconds)
var durationSliderInterval = setInterval(nextSlide, 3000);

// Function to remove the 'active' class from all slides
function resetActive() {
    slide.forEach(item => {
        item.classList.remove("active");
    });
}

// Function to reset the interval for automatic slide switching
function resetInterval() {
    clearInterval(durationSliderInterval);
    durationSliderInterval = setInterval(nextSlide, 3000);
}

// Function to change the active slide based on the current slideIndex
function changeSlide() {
    resetActive();
    slide[slideIndex].classList.add('active');
}

// Function to switch to the next slide, looping back to the first slide if at the end
function nextSlide() {
    slideIndex < slide.length - 1 ? slideIndex++ : slideIndex = 0;
    changeSlide();
}

// Function to switch to the previous slide, looping back to the last slide if at the beginning
function previousSlide() {
    slideIndex > 0 ? slideIndex-- : slideIndex = slide.length - 1;
    changeSlide();
}

// Adding a click event listener to the left arrow button to go to the previous slide
arrow_left.addEventListener('click', () => {
    resetInterval();
    previousSlide();
});

// Adding a click event listener to the right arrow button to go to the next slide
arrow_right.addEventListener('click', () => {
    resetInterval();
    nextSlide();
});



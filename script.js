function explore() {
  window.scrollTo({
    top: document.querySelector(".section").offsetTop - 60,
    behavior: "smooth"
  });
}

function showMessage(type) {
  alert("You clicked: " + type);
}

// ===== SLIDER SETUP =====

// Store state for each slider
const sliders = {
    1: { current: 0, container: document.getElementById("slider1"), slides: document.querySelectorAll("#slider1 .movie-slide") },
    2: { current: 0, container: document.getElementById("slider2"), slides: document.querySelectorAll("#slider2 .slide") }
};

// Get height dynamically
function getHeight(sliderId) {
    return sliders[sliderId].container.parentElement.clientHeight;
}

// Update slider
function updateSlider(sliderId) {
    const slider = sliders[sliderId];
    const height = getHeight(sliderId);

    slider.container.style.transition = "transform 0.7s ease";
    slider.container.style.transform = `translateY(-${slider.current * height}px)`;
}

// Next
function nextSlide(sliderId) {
    const slider = sliders[sliderId];
    slider.current = (slider.current + 1) % slider.slides.length;
    updateSlider(sliderId);
}

// Prev
function prevSlide(sliderId) {
    const slider = sliders[sliderId];
    slider.current = (slider.current - 1 + slider.slides.length) % slider.slides.length;
    updateSlider(sliderId);
}






//////////////////////////////////////////////////
// ✅ OPTIONAL BUTTON FUNCTIONS
//////////////////////////////////////////////////

function likeMovie() {
    alert("👍 Liked!");
}

function loveMovie() {
    alert("❤️ Added to favorites!");
}

function bookmarkMovie() {
    alert("🔖 Saved to watchlist!");
}





// actor
function showActor(name){
    alert("You clicked on: " + name);
}

// gallary
function scrollLeft(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: 300, behavior: 'smooth' });
}


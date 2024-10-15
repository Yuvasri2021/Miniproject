let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.card').length;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slideWidth = document.querySelector('.card').clientWidth + 20; // Width of a card + margin
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

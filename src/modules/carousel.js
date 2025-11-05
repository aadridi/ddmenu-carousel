const carouselTrack = document.querySelector('.carousel-track');

const slides = document.querySelectorAll('.carousel-track img');

const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

const dotsBtn = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel(currentIndex) {
	slides.forEach((slide, index) => {
		slide.style.display = index === currentIndex ? 'block' : 'none';
	});

	dotsBtn.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
}

nextBtn.addEventListener('click', () => {
	currentIndex++;
	if (currentIndex > 3) {
		currentIndex = 0;
	}
	updateCarousel(currentIndex);
	console.log(currentIndex);
});

prevBtn.addEventListener('click', () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = 3;
	}
	updateCarousel(currentIndex);
	console.log(currentIndex);
});

dotsBtn.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    })
})

// Défilement automatique toutes les 3 secondes
setInterval(() => {
	currentIndex++;
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}
	updateCarousel(currentIndex);
}, 3000);


export { updateCarousel };
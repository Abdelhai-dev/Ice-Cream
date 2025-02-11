//Navbar
let navBarre = document.getElementById("burger")
let openBtn = document.getElementById("open")
let closeBtn = document.getElementById("close")

openBtn.onclick = openNav
closeBtn.onclick = closeNav

function openNav() {
    navBarre.classList.add("active")
}

function closeNav(){
    navBarre.classList.remove("active")
}



// Carousel

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    function autoSlide() {
        nextSlide();
        setTimeout(autoSlide, 3000); // Change de slide toutes les 3 secondes
    }

    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

    // Démarre le carrousel automatique
    autoSlide();
});


//Modal


function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function login() {
    alert("Login functionality to be implemented");
}

function register() {
    alert("Register functionality to be implemented");
}


await setElementStyles($0, {
    marginLeft: '0px',
    marginRight: '0px',
});
const data = {};

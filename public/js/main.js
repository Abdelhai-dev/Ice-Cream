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




document.addEventListener('DOMContentLoaded', function () {
    let myCarousel = document.querySelector('#carouselExampleFade');
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // 3 seconds
        ride: 'carousel'
    });

    let prevButton = document.querySelector('.carousel-control-prev');
    let nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', function () {
        carousel.prev();
    });

    nextButton.addEventListener('click', function () {
        carousel.next();
    });
});
const hambBtn = document.querySelector('.rightNav')
const hambIcon = document.querySelector('.hambMenu')
const test = document.querySelector('.hamburgerPage')
const navContainer = document.querySelector('#container')
const menuBtns = document.querySelectorAll('.menuBtn')
// window.addEventListener('DOMContentLoaded', ()=>{
    
// })
console.log(menuBtns);
hambBtn.addEventListener('click', ()=>{
    hambIcon.classList.toggle('hambAnimation')
    test.classList.toggle('hambActive')
    if(test.classList.contains('hambActive')){
        navContainer.style.position = 'fixed'
    }
    else{
        navContainer.style.position = 'relative'
    }
})

menuBtns.forEach(menubutton =>{
    menubutton.addEventListener('click', ()=>{
        hambIcon.classList.toggle('hambAnimation')
    test.classList.toggle('hambActive')
    navContainer.style.position = 'relative'
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let autoScrollInterval;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function startAutoScroll() {
        stopAutoScroll(); // Zapobiega uruchomieniu wielu interwałów
        autoScrollInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 2500);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            stopAutoScroll();
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
            startAutoScroll();
        });
    });

    // Rozpocznij automatyczne przewijanie po załadowaniu strony
    startAutoScroll();

    // Zatrzymaj automatyczne przewijanie, gdy myszka najeżdża na karuzelę (opcjonalnie)
    track.addEventListener('mouseover', stopAutoScroll);
    track.addEventListener('mouseout', startAutoScroll);

    // Dodaj listenera dla zmiany rozmiaru okna, aby ponownie ustawić szerokość elementów
    window.addEventListener('resize', function() {
        updateCarousel();
    });

    // Zaktualizuj karuzelę przy pierwszym załadowaniu
    updateCarousel();
});

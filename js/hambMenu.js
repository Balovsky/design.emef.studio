const hambBtn = document.querySelector('.hamb_Menu')
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

window.addEventListener("DOMContentLoaded", ()=>{
    const upArrow = document.querySelector('.upArrow');

    // Funkcja, która pokazuje lub ukrywa przycisk w zależności od przewinięcia
    function toggleUpArrow() {
        if (window.scrollY > 100) {
            upArrow.classList.add('show');
        } else {
            upArrow.classList.remove('show');
        }
    }

    // Funkcja, która przewija stronę do góry po kliknięciu
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Nasłuchujemy na zdarzenie scroll i kliknięcie
    window.addEventListener('scroll', toggleUpArrow);
    upArrow.addEventListener('click', scrollToTop);

    // Inicjalne sprawdzenie pozycji przewijania przy załadowaniu strony
    toggleUpArrow();

})
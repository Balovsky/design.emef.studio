const hambBtn = document.querySelector('.rightNav')
const hambIcon = document.querySelector('.hambMenu')
const test = document.querySelector('.hamburgerPage')

hambBtn.addEventListener('click', ()=>{
    hambIcon.classList.toggle('hambAnimation')
    test.classList.toggle('hambActive')
})
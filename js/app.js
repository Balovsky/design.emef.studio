const hambBtn = document.querySelector('.rightNav')
const hambIcon = document.querySelector('.hambMenu')
const test = document.querySelector('.hamburgerPage')
const navContainer = document.querySelector('#container')

// window.addEventListener('DOMContentLoaded', ()=>{
    
// })

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


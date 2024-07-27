document.addEventListener('DOMContentLoaded', function() {
    const processSection = document.querySelector('.process-section');

    let isDown = false;
    let startX;
    let scrollLeft;

    processSection.addEventListener('mousedown', (e) => {
        isDown = true;
        processSection.classList.add('active');
        startX = e.pageX - processSection.offsetLeft;
        scrollLeft = processSection.scrollLeft;
    });

    processSection.addEventListener('mouseleave', () => {
        isDown = false;
        processSection.classList.remove('active');
    });

    processSection.addEventListener('mouseup', () => {
        isDown = false;
        processSection.classList.remove('active');
    });

    processSection.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - processSection.offsetLeft;
        const walk = (x - startX) * 1; // Scroll speed
        processSection.scrollLeft = scrollLeft - walk;
    });

    const sectionWrapper = document.querySelector('.process-section-wrapper');
    const scrollIconImgs = document.querySelectorAll('.scrollIcon img');
    const firstArrow = document.querySelector('.scrollIcon .firstArrow');
    const lastArrow = document.querySelector('.scrollIcon .lastArrow');

    function handleMouseOver() {
        scrollIconImgs.forEach(img => {
            img.style.opacity = 1;
        });
        firstArrow.classList.add('shakingL');
        lastArrow.classList.add('shakingP');
    }

    function handleMouseOut() {
        scrollIconImgs.forEach(img => {
            img.style.opacity = 0.5;
        });
        firstArrow.classList.remove('shakingL');
        lastArrow.classList.remove('shakingP');
    }

    sectionWrapper.addEventListener('mouseover', handleMouseOver);
    sectionWrapper.addEventListener('mouseout', handleMouseOut);
    sectionWrapper.addEventListener('touchstart', handleMouseOver);
    sectionWrapper.addEventListener('touchend', handleMouseOut);
});

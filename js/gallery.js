window.addEventListener('DOMContentLoaded', ()=>{
    renderImageGallery()
})

const imagesGalleryObj = [
    {
        path: '../assets/gallery/1.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/2.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/3.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/4.png',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/5.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/6.png',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/7.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/8.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/9.png',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/10.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/11.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/12.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/13.png',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../assets/gallery/14.png',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../assets/gallery/15.png',
        typ: 'creative',
        name: 'aranżacyjne',
    },
    {
        path: '../assets/gallery/16.png',
        typ: 'packshot',
        name: 'video',
    },
    {
        path: '../assets/gallery/17.png',
        typ: 'packshot',
        name: '360',
    },
    
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

const GalleryContainer = document.querySelector('.masonry-container')



// const filtersBtns = document.querySelector('.btn')


function renderImageGallery(){
    shuffleArray(imagesGalleryObj)
    for (let i = 0; i < imagesGalleryObj.length; i++){
        
        if(imagesGalleryObj[i].typ ==='video'){
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let film = document.createElement('video')
            film.src = imagesGalleryObj[i].path
            film.autoplay = true;
            film.type = 'video/mp4'
        imagContainer.appendChild(film)
        }else{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let img = document.createElement('img')
            img.src = imagesGalleryObj[i].path
            img.alt = imagesGalleryObj[i].name
            imagContainer.appendChild(img)
        }
    }
    CreateGallery()
}

const filtersBtnss = document.querySelectorAll('.btn')
filtersBtnss.forEach((filterBtn, index) =>{
    filterBtn.addEventListener('click', ()=>{
        // filterBtn.classList.remove('filterActive')
        let divsToRemove = document.querySelectorAll('.masonry-item')
        divsToRemove.forEach(divToRemove =>{
        divToRemove.remove()
        // console.log(filterBtn);
        filterBtn.classList.add('fadeInOut')

        setTimeout(function() {
            filterBtn.classList.remove('fadeInOut') // Usuń klasę po 2 sekundach
        }, 3000);
    })
switch (index) {
    case 0:
        renderImageGallery()

        break;
    case 1:
        const PackshotImages = imagesGalleryObj.filter(image => image.typ === 'packshot');
        PackshotImages.forEach(imageForGallerry =>{
        let imagContainer = document.createElement('div')
        imagContainer.classList.add('masonry-item')
        GalleryContainer.appendChild(imagContainer)
        let image = document.createElement('img')
        image.src = imageForGallerry.path
        image.alt = imageForGallerry.name
        imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
        
    })
    CreateGallery()
        break;
    case 2:
            const VideoImages = imagesGalleryObj.filter(image => image.typ === 'video');
            VideoImages.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('video')
            image.src = imageForGallerry.path
            image.type = 'video/mp4'
            image.autoplay = true;
            imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
    })
    CreateGallery()
        break;
        case 3:
            const Images = imagesGalleryObj.filter(image => image.typ === '360');
            Images.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('img')
            image.src = imageForGallerry.path
            image.alt = imageForGallerry.name
            imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
    })
    CreateGallery()
        break;
        case 4:
            const CreativeImages = imagesGalleryObj.filter(image => image.typ === 'creative');
            CreativeImages.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('img')
            image.src = imageForGallerry.path
            image.alt = imageForGallerry.name
            imagContainer.style.display = 'block'
            imagContainer.appendChild(image)
    })
    CreateGallery()
        break;

}
    })
})


// console.log(imagesGalleryObj);
// const testBtn = document.querySelector('.testoo')
// testBtn.addEventListener('click', ()=>{
//     let allimages = document.querySelectorAll('.masonry-item')
//     console.log(allimages);
// })

// window.addEventListener('change', ()=>{
//     let allimages = document.querySelectorAll('.masonry-item')
//     console.log(allimages);
// })

function CreateGallery(){
    let currentItemsImg = document.querySelectorAll('.masonry-item img')
    let currentItemsVideo = document.querySelectorAll('.masonry-item video')
    currentItemsImg.forEach(currentItem =>{
        currentItem.addEventListener('click', ()=>{
            let container = document.createElement('div')
            container.classList.add('fullScreenGallery')
            let currentImagePath = currentItem.src
            let currentImg = document.createElement('img')
            currentImg.src = currentImagePath
            let closeBtn = document.createElement('div')
            closeBtn.classList.add('closeBtn')
            let closeIcon = document.createElement('img')
            closeIcon.src = '../../assets/icons/close.png'

            document.body.appendChild(container)
            container.appendChild(closeBtn)
            closeBtn.appendChild(closeIcon)
            container.appendChild(currentImg)
            console.log(currentImagePath);
            container.classList.add('fullGalActiv')
            container.addEventListener('click', ()=>{
                container.classList.remove('fullGalActiv')
            })
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    container.classList.remove('fullGalActiv')
                }
            })
            
        })
        
        
    })

    currentItemsVideo.forEach(currentItem =>{
        currentItem.addEventListener('click', ()=>{
            let container = document.createElement('div')
            container.classList.add('fullScreenGallery')
            let currentImagePath = currentItem.src
            let currentImg = document.createElement('video')
            currentImg.src = currentImagePath
            currentImg.autoplay = true
            let closeBtn = document.createElement('div')
            closeBtn.classList.add('closeBtn')
            let closeIcon = document.createElement('img')
            closeIcon.src = '../../assets/icons/close.png'
            document.body.appendChild(container)
            container.appendChild(closeBtn)
            closeBtn.appendChild(closeIcon)
            container.appendChild(currentImg)
            console.log(currentImagePath);
            container.classList.add('fullGalActiv')
            container.addEventListener('click', ()=>{
                container.classList.remove('fullGalActiv')
            })
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    container.classList.remove('fullGalActiv')
                }
            })
        })
        
    })



}
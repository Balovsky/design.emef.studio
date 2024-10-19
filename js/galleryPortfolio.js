// Przykład zdjęć z lokalnego folderu
const galleryItems = [
    { src: '1.jpg', srct: '1.jpg', title: 'Obrazek 1', tags: 'loga'},
    { src: '2.jpg', srct: '2.jpg', title: 'Obrazek 1', tags: 'loga'},
    { src: '3.png', srct: '3.png', title: 'Obrazek 1', tags: 'loga'},
    { src: '4.png', srct: '4.png', title: 'Obrazek 1', tags: 'loga'},
    { src: '5.png', srct: '5.png', title: 'Obrazek 1', tags: 'identyfikacje_wizualne'},
     { src: '6.png', srct: '6.png', title: 'Obrazek 1', tags: 'identyfikacje_wizualne'},
     { src: '7.png', srct: '7.png', title: 'Obrazek 1', tags: 'identyfikacje_wizualne'},
     { src: '8.png', srct: '8.png', title: 'Obrazek 1', tags: 'materiały_promocyjne'},
     { src: '9.png', srct: '9.png', title: 'Obrazek 1', tags: 'materiały_promocyjne'},
     { src: '10.png', srct: '10.png', title: 'Obrazek 1', tags: 'materiały_promocyjne'},
     { src: '11.png', srct: '11.png', title: 'Obrazek 1', tags: 'grafiki_na_social_media'},
     { src: '12.png', srct: '12.png', title: 'Obrazek 1', tags: 'grafiki_na_social_media'},
     { src: '13.png', srct: '13.png', title: 'Obrazek 1', tags: 'grafiki_na_social_media'},
     { src: '14.jpg', srct: '14.png', title: 'Obrazek 1', tags: 'grafiki_na_social_media'},
    { src: '15.png', srct: '15.png', title: 'Obrazek 1', tags: 'księgi_znaków'},
     { src: '16.png', srct: '16.png', title: 'Obrazek 1', tags: 'księgi_znaków'},
     { src: '17.png', srct: '17.png', title: 'Obrazek 1', tags: 'księgi_znaków'},
     { src: '18.png', srct: '18.png', title: 'Obrazek 1', tags: 'ux/ui_Design'},
     { src: '19.png', srct: '19.png', title: 'Obrazek 1', tags: 'ux/ui_Design'},
     { src: '20.png', srct: '20.png', title: 'Obrazek 1', tags: 'ux/ui_Design'},
    
];

$(document).ready(function() {
    $("#my_nanogallery").nanogallery2({
        // Ustawienia galerii
        itemsBaseURL: '../assets/gallery/', // Ścieżka do lokalnego folderu ze zdjęciami
        thumbnailWidth: 'auto',
        thumbnailHeight: 400,
        galleryDisplayMode: 'fullContent',
        items: galleryItems,
        "colorSchemeViewer": {
          "thumbnail": {
            "background": "#000"
          }
        },
        thumbnailSelected: '<img src="../assets/icons/record.png" alt="">', // wybrana ikona 
        thumbnailUnselected: '<img src="../assets/icons/record.png" alt="">', // niewybrana ikona 
        thumbnailDisplayTransition: "flipUp",
        thumbnailDisplayTransitionDuration: 5,
        thumbnailDisplayInterval: 5,
        thumbnailLabel: {
            position: "overImageOnBottom",
            display: false,
            titleMultiLine: false,
            displayDescription: false,
            descriptionMultiLine: false
        },
        allowHTMLinData: true,
        thumbnailHoverEffect2: "image_scale_1.00_1.20",
        // thumbnailHoverEffect2: [{ name: 'image_scale_1.00_1.20', duration: 500}, { name: 'image_rotateZ_0deg_15deg', delay: 500}],
        galleryMaxRows: 20,
        galleryDisplayMoreStep: 4,
        thumbnailAlignment: "center",
        galleryFilterTags: true, // Poprawne ustawienie
        galleryFilterTagsSeparator: ',',
        thumbnailLevelUp: true,
        thumbnailOpenImage: true,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        thumbnailL1DisplayOrder: 'random',
        viewerTools: { 
            topLeft: 'pageCounter', 
            topRight: 'playPauseButton, zoomButton, fullscreenButton,shareButton, closeButton' 
          },
          galleryL1FilterTagsMode: 'single',
          viewerGallery: 'bottom',
          viewerGalleryTWidth: 100,
          viewerGalleryTHeight: 100,
          icons: {
            navigationFilterSelectedAll: 'pokaż wszystkie'
          },
          thumbnailDisplayTransition: 'scaleUp',
          galleryL1Sorting: 'random',
          
    });

});



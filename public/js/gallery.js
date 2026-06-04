// let images = [];
// let currentIndex = 0;

// document.addEventListener("DOMContentLoaded", () => {

//     images = Array.from(
//         document.querySelectorAll(".gallery-image")
//     );

// });

// function openImage(index){

//     currentIndex = index;

//     document.getElementById("modalImage").src =
//         images[index].src;

//     new bootstrap.Modal(
//         document.getElementById("galleryModal")
//     ).show();
// }

// function nextImage(){

//     currentIndex++;

//     if(currentIndex >= images.length){
//         currentIndex = 0;
//     }

//     document.getElementById("modalImage").src =
//         images[currentIndex].src;
// }

// function prevImage(){

//     currentIndex--;

//     if(currentIndex < 0){
//         currentIndex = images.length - 1;
//     }

//     document.getElementById("modalImage").src =
//         images[currentIndex].src;
// }

// document.addEventListener("keydown", function(e){

//     if(e.key === "ArrowRight"){
//         nextImage();
//     }

//     if(e.key === "ArrowLeft"){
//         prevImage();
//     }

//     if(e.key === "Escape"){

//         let modal =
//             bootstrap.Modal.getInstance(
//                 document.getElementById("galleryModal")
//             );

//         if(modal){
//             modal.hide();
//         }
//     }
// });

const modal = new bootstrap.Modal(
    document.getElementById('galleryModal')
);

const images = Array.from(
    document.querySelectorAll('.gallery-image')
);

let currentIndex = 0;

function openImage(el) {

    currentIndex = images.indexOf(el);

    document.getElementById('modalImage').src =
        images[currentIndex].src;

    modal.show();
}

function nextImage() {

    currentIndex =
        (currentIndex + 1) % images.length;

    document.getElementById('modalImage').src =
        images[currentIndex].src;
}

function prevImage() {

    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    document.getElementById('modalImage').src =
        images[currentIndex].src;
}

// Keyboard Navigation

document.addEventListener('keydown', function(e){

    const modalOpen =
        document.getElementById('galleryModal')
        .classList.contains('show');

    if(!modalOpen) return;

    if(e.key === 'ArrowRight'){
        nextImage();
    }

    if(e.key === 'ArrowLeft'){
        prevImage();
    }

    if(e.key === 'Escape'){
        bootstrap.Modal.getInstance(
            document.getElementById('galleryModal')
        ).hide();
    }

});


// mobile swipe support

let touchStartX = 0;
let touchEndX = 0;

const modalImage =
    document.getElementById('modalImage');

modalImage.addEventListener(
    'touchstart',
    function(e){

        touchStartX =
            e.changedTouches[0].screenX;

    },
    false
);

modalImage.addEventListener(
    'touchend',
    function(e){

        touchEndX =
            e.changedTouches[0].screenX;

        handleSwipe();

    },
    false
);

function handleSwipe(){

    const diff =
        touchStartX - touchEndX;

    if(diff > 50){
        nextImage();
    }

    if(diff < -50){
        prevImage();
    }

}
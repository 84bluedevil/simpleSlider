//define variables

let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;



//reset for each slide move
const reset = () => {
    sliderImages.forEach(sliderImage => {
       sliderImage.style.display = 'none';
    });
}

//initiate slide and the movements
function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

//events for navigating the slider

arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});


startSlide();
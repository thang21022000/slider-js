const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

nextBtn.addEventListener("click", function() {
    counter++;
    Count();
})

prevBtn.addEventListener("click", function() {
    counter--;
    Count();
})

function Count(){

    if(counter === slides.length){
        counter = 0
    }
    if(counter < 0)
    {
        counter = slides.length -1;
    }

    displayButton();

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
  

}

function displayButton(){
    if(counter < slides.length - 1){
        nextBtn.style.display = "inline-block";
    }else{
        nextBtn.style.display = "none";
    }
    if(counter > 0){
        prevBtn.style.display = "inline-block";
    }else{
        prevBtn.style.display = "none";
    }
    console.log(counter);
}  
prevBtn.style.display = "none";
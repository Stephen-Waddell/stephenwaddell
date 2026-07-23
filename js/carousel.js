const slides = document.querySelectorAll(".images img, .videos video");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

console.log("slides:", slides.length);
console.log("next:", next);
console.log("previous:", previous);
console.log(slides);

if (slides.length && next && previous) {
    let current = 0;
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
            // Stop any playing videos
            if (slide.tagName === "VIDEO") {
                slide.pause();
                slide.currentTime = 0;
            }
        });
        slides[index].classList.add("active");
        current = index;
    }


    next.addEventListener("click", () => {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        showSlide(current);
    });


    previous.addEventListener("click", () => {
        current--;
        if (current < 0) {
            current = slides.length - 1;
        }
        showSlide(current);
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            next.click();
        }
        if (e.key === "ArrowLeft") {
            previous.click();
        }
    });

}
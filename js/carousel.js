const slides = document.querySelectorAll(".images .slide, .videos .slide");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

console.log("slides:", slides.length);

if (slides.length && next && previous) {

    let current = 0;

    function alignSlideInfo() {
        slides.forEach(slide => {
            const img = slide.querySelector("img");
            const info = slide.querySelector(".slide-info");

            if (img && info) {
                info.style.width = img.getBoundingClientRect().width + "px";
            }
        });
    }

    slides.forEach(slide => {

        const img = slide.querySelector("img");

        if (img) {
            img.addEventListener("click", () => {
                slide.classList.toggle("description-open");
            });
        }

    });

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");
            slide.classList.remove("description-open");

            const video = slide.querySelector("video");

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

        });

        slides[index].classList.add("active");

        const activeVideo = slides[index].querySelector("video");

        if (activeVideo) {
            activeVideo.play();
        }

        current = index;

        requestAnimationFrame(alignSlideInfo);
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

    window.addEventListener("load", () => {
        requestAnimationFrame(alignSlideInfo);
    });

    window.addEventListener("resize", () => {
        requestAnimationFrame(alignSlideInfo);
    });

}


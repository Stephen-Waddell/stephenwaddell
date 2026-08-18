const slides = document.querySelectorAll(".images .slide, .videos .slide");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

console.log("slides:", slides.length);

if (slides.length && next && previous) {

    let current = 0;

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

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


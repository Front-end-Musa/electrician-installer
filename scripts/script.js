// let/const //

let logo = document.querySelector('.logo-link');

// Logo //

logo.innerHTML = `e&i`.toUpperCase();

// slider //

setTimeout(main, 0);

function main() {
    const slideList = [...document.querySelectorAll(".slide")]
    const slides = document.querySelector(".slides")
    slides.style.width = `${(slideList.length + 1) * 100}vw`
    const length = slideList.length
    slides.append(slideList[0].cloneNode(true))

    document.querySelector(".next-slide").addEventListener("click", nextSlide)
    setInterval(nextSlide, 7000);
    
    let currentSlide = 0
    async function nextSlide() {
        currentSlide += 1
        slides.style.left = `-${currentSlide * 100}vw`
        if (currentSlide == length) {
            await sleep(300)
            currentSlide = 0
            slides.style.transition = "0s"
            slides.style.left = `-${currentSlide * 100}vw`
            await sleep(300)
            slides.style.transition = "0.3s"
        }

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

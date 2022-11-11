let slides = [".slide0", ".slide1", ".slide2", ".slide3", ".slide4", ".slide5", ".slide6", ".slide7", ".slide8", ".slide9", ".slide10"]

let counters = [".counter0", ".counter1", ".counter2", ".counter3", ".counter4", ".counter5", ".counter6", ".counter7", ".counter8", ".counter9", ".counter10"]


let focalSlide = 0
let currentCounter = ".counter0"

function updateSlides() {
    let position = ((985 * .75) + (985 * (focalSlide))) * -1
    $(slides[focalSlide]).toggleClass("hide")
    $(".slideShow").css({ left: `${position}px` })
    slideText = $(slides[focalSlide]).children()[0]
    $(slideText).addClass('show');
}

function updateCounterColor(color) {
    let path = $(currentCounter).children()[0]
    $(path).css({ fill: color })
}

function hideSlide() {
    let slideText = $(slides[focalSlide]).children()[0]
    $(slideText).removeClass('show');
    $(slides[focalSlide]).toggleClass("hide")
}


$(document).ready(function () {
    counters.forEach((counter) => {
        $(counter).on("click", function () {
            updateCounterColor("grey")

            currentCounter = "." + $(this).attr("class")
            updateCounterColor("black")

            hideSlide()

            focalSlide = counters.findIndex(i => i === currentCounter)
            updateSlides()

        })
    })

    $(".slide102").on("click", function () {
        updateCounterColor("grey")

        hideSlide()

        focalSlide = 10
        updateSlides()

        currentCounter = counters[10]
        updateCounterColor("black")


    })

    $(".slide02").on("click", function () {
        updateCounterColor("grey")

        hideSlide()

        focalSlide = 0
        updateSlides()

        currentCounter = counters[0]
        updateCounterColor("black")


    })


    slides.forEach((slide) => {
        $(slide).on("click", function () {

            updateCounterColor("grey")

            hideSlide()

            focalSlide = slides.findIndex(i => i === slide)
            updateSlides()

            currentCounter = counters[focalSlide]
            updateCounterColor("black")


        })
    })



})
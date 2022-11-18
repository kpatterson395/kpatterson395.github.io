let slides = [".slide0", ".slide1", ".slide2", ".slide3", ".slide4", ".slide5", ".slide6", ".slide7", ".slide8", ".slide9", ".slide10"]

let counters = [".counter0", ".counter1", ".counter2", ".counter3", ".counter4", ".counter5", ".counter6", ".counter7", ".counter8", ".counter9", ".counter10"]


let focalSlide = 0
let currentCounter = ".counter0"
let width = $(slides[0]).width() + 5


$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};



function updateSlides() {
    let position = ((width * .75) + (width * (focalSlide))) * -1
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

    $(".columnTitle").on("click", function () {
        $(this).next().toggleClass("showItem")
    })

    $(".main-nav-hamburger").on("click", function () {
        $(".main-nav").addClass("main-nav-show ")
        $(".main-nav-exit").css({ display: "inline" })
        $(this).css({ display: "none" })
    })

    $(".main-nav-exit").on("click", function () {
        $(".main-nav").removeClass("main-nav-show ")
        $(this).css({ display: "none" })
        $(".main-nav-hamburger").css({ display: "inline" })
    })

    $(window).on("resize", function () {
        if ($(window).width() > 600) {
            $(".main-nav").removeClass("main-nav-show ")
            $(".main-nav-exit").css({ display: "none" })
            $(".main-nav-hamburger").css({ display: "none" })
        }
        else if ($(window).width() < 600) {
            $(".main-nav-hamburger").css({ display: "inline" })
        }
    })
    // $(window).scroll(function () {
    //     if ($(".slideShowContainer").isOnScreen()) {

    //     }
    // })
    // autoSlides()

})

function autoSlides() {
    updateCounterColor("grey")

    hideSlide()
    if (focalSlide = 10) {
        focalSlide = 0
    } else {
        focalSlide = focalSlide + 1
    }
    updateSlides()
    if (currentCounter === counters[10]) {
        currentCounter = counters[0]
    } else {
        currentCounter = counters[focalSlide]
    }
    updateCounterColor("black")
    // console.log('ahhh')
    setTimeout(autoSlides, 2000)
}

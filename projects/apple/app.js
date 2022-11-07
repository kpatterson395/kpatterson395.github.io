let slides = [".slide0", ".slide1", ".slide2", ".slide3", ".slide4", ".slide5", ".slide6", ".slide7", ".slide8", ".slide9", ".slide10"]

let counters = [".counter0", ".counter1", ".counter2", ".counter3", ".counter4", ".counter5", ".counter6", ".counter7", ".counter8", ".counter9", ".counter10"]


let focalSlide = 0
let currentCounter = ".counter0"


$(document).ready(function () {
    counters.forEach((counter) => {
        $(counter).on("click", function () {
            let path = $(currentCounter).children()[0]
            $(path).css({ fill: "grey" })


            currentCounter = "." + $(this).attr("class")
            path = $(currentCounter).children()[0]
            $(path).css({ fill: "black" })
            focalSlide = counters.findIndex(i => i === currentCounter)
            let position = ((985 * .75) + (985 * (focalSlide))) * -1

            $(".slideShow").css({ left: `${position}px` })


        })
    })
})
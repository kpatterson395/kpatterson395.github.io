const forward = document.querySelector("#toggle-forward")
const back = document.querySelector("#toggle-back")
const header = document.querySelector(".header")
const solutions = document.querySelector("#solutions")
const hide = document.querySelector(".hide")
const hamburger = document.querySelector(".main-nav-hamburger")
const nav = document.querySelectorAll("nav")
const exitNav = document.querySelector(".exit")

let firstSlide = 0
let lastSlide = 2

const slide0 = document.getElementById("slide1")
const slide1 = document.getElementById("slide2")
const slide2 = document.getElementById("slide3")
const slide3 = document.getElementById("slide4")
const slide4 = document.getElementById("slide5")
const slide5 = document.getElementById("slide6")
const slide6 = document.getElementById("slide7")
const slide7 = document.getElementById("slide8")
const slide8 = document.getElementById("slide9")

const slidesArr = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]

forward.addEventListener("click", function () {

    if (firstSlide === 8) {
        firstSlide = 0
    } else {
        firstSlide++
    }

    if (lastSlide === 8) {
        lastSlide = 0
    } else {
        lastSlide++
    }

    for (let i of slidesArr) {
        i.style.display = "none"
        i.style.order = 0
    }

    slidesArr[firstSlide].style.display = "inline-block"
    slidesArr[firstSlide].style.order = 2
    let middle = ((firstSlide + 1) % 9)
    slidesArr[middle].style.display = "inline-block"
    slidesArr[middle].style.order = 3
    slidesArr[lastSlide].style.display = "inline-block"
    slidesArr[lastSlide].style.order = 4

    // slidesArr[firstSlide].style.display = "inline-block"

})

back.addEventListener("click", function () {

    if (firstSlide === 0) {
        firstSlide = 8
    } else {
        firstSlide--
    }

    if (lastSlide === 0) {
        lastSlide = 8
    } else {
        lastSlide--
    }

    for (let i of slidesArr) {
        i.style.display = "none"
        i.style.order = 0
    }

    slidesArr[firstSlide].style.display = "inline-block"
    slidesArr[firstSlide].style.order = 2
    let middle = ((firstSlide + 1) % 9)
    slidesArr[middle].style.display = "inline-block"
    slidesArr[middle].style.order = 3
    slidesArr[lastSlide].style.display = "inline-block"
    slidesArr[lastSlide].style.order = 4

    // slidesArr[firstSlide].style.display = "inline-block"

})

document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.classList.add("headerScroll")
    } else {
        header.classList.remove("headerScroll")
    }
})

solutions.addEventListener("mouseenter", function () {
    hide.style.display = "flex"
})

hide.addEventListener("mouseleave", function () {
    hide.style.display = "none"
})

header.addEventListener("mouseleave", function () {
    hide.style.display = "none"
})

hamburger.addEventListener("click", function () {
    nav[0].style.display = "block"
    hamburger.style.display = "none"
})

exitNav.addEventListener("click", function () {
    nav[0].style.display = "none"
    hamburger.style.display = "inline"
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
        hamburger.style.display = "none"
        nav[0].style.display = "block"
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 770) {
        hamburger.style.display = "block"
        nav[0].style.display = "none"
    }
});
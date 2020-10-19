const headerNavigation = document.querySelector(".headerNavigation")
const headerNavigationToggle = document.querySelector(".headerNavigation__toggle")

headerNavigationToggle.onclick = function () {
    if (headerNavigation.classList.contains("headerNavigation--closed")) {
        headerNavigation.classList.remove("headerNavigation--closed")
        headerNavigation.classList.add("headerNavigation--opened")
    } else {
        headerNavigation.classList.remove("headerNavigation--opened")
        headerNavigation.classList.add("headerNavigation--closed")
    }
}

const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")
const caret = document.querySelector(".advantages__list")

slide1.addEventListener("click", function () {
    caret.style.transform = " translateX(0%)"
})

slide2.addEventListener("click", function () {
    caret.style.transform = " translateX(-100%)"
})

slide3.addEventListener("click", function () {
    caret.style.transform = " translateX(-200%)"
})

const slide1f = document.getElementById("slide1f")
const slide2f = document.getElementById("slide2f")
const slide3f = document.getElementById("slide3f")
const caretF = document.querySelector(".feedback__list")

slide1f.addEventListener("click", function () {
    caretF.style.transform = " translateX(0%)"
})

slide2f.addEventListener("click", function () {
    caretF.style.transform = " translateX(-100%)"
})

slide3f.addEventListener("click", function () {
    caretF.style.transform = " translateX(-200%)"
})

const yourAccount = document.querySelector(".yourAccount")
const enterAccountLink = document.querySelector(".enterAccount__link")

enterAccountLink.onclick = function () {
    yourAccount.classList.add("yourAccount-open")
}

const yourAccountCloseButton = document.querySelector(".yourAccount__closeButton")
yourAccountCloseButton.onclick = function () {
    yourAccount.classList.remove("yourAccount-open")
}

const yourAccountCrossButton = document.querySelector(".yourAccount__crossButton")

yourAccountCrossButton.onclick = function () {
    yourAccount.classList.remove("yourAccount-open")
}
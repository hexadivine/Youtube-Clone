const toggleHideElements = document.querySelectorAll(".toggle-hide");
const toggleMenuBar = document.getElementById("toggleMenuBar");
const mainContainer = document.getElementById("mainContainer");
const quickBtns = document.getElementById("quickBtns");
const slideLeftBtn = document.getElementById("slideLeftBtn");
const slideRightBtn = document.getElementById("slideRightBtn");

function toggleMenu() {
    toggleHideElements.forEach(function (toggleHideElement) {
        toggleHideElement.classList.toggle("hide");
    });
    toggleMenuBar.classList.toggle("small-menu-bar");
    mainContainer.style.width = "calc(100% - 10.62rem)";
}

function moveLeftQuickBtns() {
    quickBtns.scrollLeft -= 100;
}

function moveRightQuickBtns() {
    quickBtns.scrollLeft += 100;
}

function toggleSliderBtns() {
    if (quickBtns.scrollLeft >= 50) slideLeftBtn.classList.remove("hide");
    else slideLeftBtn.classList.add("hide");

    if (quickBtns.scrollLeft + quickBtns.clientWidth >= quickBtns.scrollWidth - 50)
        slideRightBtn.classList.add("hide");
    else slideRightBtn.classList.remove("hide");
}

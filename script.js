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
    if(quickBtns.scrollLeft < 310)
        quickBtns.scrollLeft -= 300;
    else
    quickBtns.scrollLeft -= 300;
}

function moveRightQuickBtns() {
    quickBtns.scrollLeft += 300;
}

function toggleSliderBtns() {
    if (quickBtns.scrollLeft > 300) slideLeftBtn.classList.remove("hide");
    else slideLeftBtn.classList.add("hide");

    if (quickBtns.scrollLeft + quickBtns.clientWidth > quickBtns.scrollWidth - 300)
        slideRightBtn.classList.add("hide");
    else slideRightBtn.classList.remove("hide");
}

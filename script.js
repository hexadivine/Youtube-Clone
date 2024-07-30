const toggleHideElements = document.querySelectorAll(".toggle-hide");
const toggleMenuBar = document.getElementById("toggleMenuBar");
const mainContainer = document.getElementById("mainContainer");
const quickBtns = document.getElementById("quickBtns");
const slideLeftBtn = document.getElementById("slideLeftBtn");
const slideRightBtn = document.getElementById("slideRightBtn");

function toggleMenu() {
    if (toggleMenuBar.classList.contains('hide'))
        toggleMenuBar.classList.remove('hide')
    else if (window.innerWidth <= 1024)
        toggleMenuBar.classList.add('hide')
    else 
        mainContainer.style.width = "calc(100% - 10.62rem)";


    toggleHideElements.forEach(function (toggleHideElement) {
        toggleHideElement.classList.toggle("hide");
    });
    toggleMenuBar.classList.toggle("small-menu-bar");
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

const hideOnTabView = document.querySelectorAll(".hide-on-tab-view");
// const 
// for respoponsiveness
if (window.innerWidth <= 1024) {
    toggleMenu();
    hideOnTabView.forEach(function(element) {
        element.classList.toggle('hide');
    })
    toggleMenuBar.classList.remove('sticky')
    toggleMenuBar.classList.add('fixed')
    toggleMenuBar.classList.add('hide')
    toggleMenuBar.style.zIndex = 999;
    mainContainer.style.width = "calc(100% - 2rem)";
}

if (window.innerWidth <= 800) {
    toggleMenuBar.classList.remove('hide');    
}
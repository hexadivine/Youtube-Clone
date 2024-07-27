const toggleHideElements = document.querySelectorAll(".toggle-hide");
const toggleMenuBar = document.getElementById("toggleMenuBar");
const mainContainer = document.getElementById("mainContainer");

function toggleMenu() {
    toggleHideElements.forEach(function (toggleHideElement) {
        toggleHideElement.classList.toggle("hide");
    });
    toggleMenuBar.classList.toggle("small-menu-bar");
    mainContainer.style.width = "calc(100% - 10.62rem)"
}

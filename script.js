const toggleHideElements = document.querySelectorAll(".toggle-hide");
const toggleMenuBar = document.getElementById("toggleMenuBar");

function toggleMenu() {
    toggleHideElements.forEach(function (toggleHideElement) {
        toggleHideElement.classList.toggle("hide");
    });
    toggleMenuBar.classList.toggle("small-menu-bar")
}

const menuBar = document.getElementById("menuBar");
const menuItems = document.querySelectorAll(".menu-item")

function toggleMenu() {
    menuBar.classList.toggle("expanded-menu-bar")
    // menuBar.classList.toggle("expanded-menu-item")
    menuItems.forEach(function(menuItem) {
        menuItem.classList.toggle("expanded-menu-item")
    })

}
const btnDropdown = document.querySelector(".js-btn-dropdown")
const dropdown = document.querySelector(".js-dropdown")

function openDropdown(event) {
  event.preventDefault()

  dropdown.classList.toggle("active")
}

btnDropdown.addEventListener("click", openDropdown)

dropdown.addEventListener("mouseleave", openDropdown)

const header = document.querySelector("#js-header")

function fixedMenu() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed-menu")
  } else {
    header.classList.remove("fixed-menu")
  }
}

document.addEventListener("scroll", fixedMenu)

const btnMenu = document.getElementById("js-btn-menu-mobile")
const overlayMenu = document.querySelector(".js-overlay")

function closeMenuMobile() {
  document.documentElement.classList.remove("menu-opened")
}

function openMenuMobile() {
  document.documentElement.classList.add("menu-opened")
}

btnMenu.addEventListener("click", openMenuMobile)
overlayMenu.addEventListener("click", closeMenuMobile)

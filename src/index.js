import { renderHome } from './homepage'
import { renderMenu } from './menu'
import { renderContact } from './contact'

const content = document.getElementById("content")
const navLinks = document.querySelectorAll(".nav-link")

function handleClick(e) {
    const tab = e.target
    if (tab.classList.contains("nav-link")) { //prevents event firing on other DOM elements up to html level (event propagation)
        navLinks.forEach((link) => {link.classList.remove("selected")})
        tab.classList.toggle("selected")
        clearContent();
        renderContent(tab);
    } 
}

navLinks.forEach((link) => {
    addEventListener("click", handleClick)
});

function clearContent() {
    content.innerHTML = '';
}

function renderContent(tab) {
    switch (tab.id) {
        case "home":
            renderHome()
            break;
        case "menu":
            renderMenu()
            break;
        case "contact":
            renderContact();
            break;     
        default:
            content.innerHTML = "404 Not Found"
            break;
    }
}

renderHome()


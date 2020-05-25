import { renderHome } from './homepage'

const content = document.getElementById("content")
const navLinks = document.querySelectorAll(".nav-link")

function handleClick(e) {
    const tab = e.target
    navLinks.forEach((link) => {link.classList.remove("selected")})
    tab.classList.toggle("selected")
    //clear current content
    clearContent();
    //add appropriatae content
    renderContent(tab);
}

navLinks.forEach(() => {
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
            //render menu
            break;
        case "contact":
            //render contact
            break; 
    
        default:
            break;
    }
}

renderHome()


import { makeHeading } from './menu.js'

const details = [

    //address
    "Filigree Street at Short Street<br>Ankh-Morpork",
    //email
    "broadman@mended.drum",
    //tel
    "02381 288 837"

]

const contentDiv = document.getElementById('content')

function renderMap() {
    const mapImage = document.createElement("img");
    mapImage.classList.add('map');
    mapImage.src = "/assets/images/map.jpg";
    contentDiv.appendChild(mapImage);
}

const renderContact = () => {
    makeHeading("Contact")
    let contactDiv = document.createElement('div');
    details.forEach((detail) => {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = detail
        contactDiv.appendChild(paragraph);
    })
    contentDiv.appendChild(contactDiv)
    renderMap()
}

export { renderContact }
const details = [

    //address
    "Filigree Street at Short Street<br>Ankh-Morpork",
    //email
    "broadman@mended.drum",
    //tel
    "02381 288 837"

]

const contentDiv = document.getElementById('content')

function contactTester() {
    console.log("hello from contact")
}

const renderContact = () => {
    let contactDiv = document.createElement('div');
    details.forEach((detail) => {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = detail
        contactDiv.appendChild(paragraph);
    })
    contentDiv.appendChild(contactDiv)
}

export { renderContact }
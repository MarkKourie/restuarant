const copy = [
    "Here at the broken drum, we provide the best entertainment and cuisine this side of Ankh-Morpork",
    "Try our famous inverted MeatPie Floater and add a bit of Wow Wow sauce if you dare. We bake Jammy Devils fresh daily, and our scumble is the most potent you'll find",
    "We cater to dwarfs with the finest dwarf bread and we serve knuckle sandwiches almost daily",
    "Nothing beats this tavern of stylish disrepute. Come visit and you'll soon see why it's called The <del>Broken</del> Mended Drum. You couldn't beat it!"
];

const contentDiv = document.getElementById("content");

const addCopy = () => {
    let container = document.createElement('div')
    container.classList.add("copy")
    copy.forEach(sentence => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = sentence;
        container.appendChild(paragraph)
    });
    contentDiv.appendChild(container)
}

function renderHome() {
    addCopy();
}

export {renderHome}


/*FEATURES TO CONSIDER ADDING AT A LATER STAGE:

1. div containing socials info
2. div containing slideshow of recent photos at the bar

*/
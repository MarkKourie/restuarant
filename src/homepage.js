 
const headingText = "The <del>Broken</del> Mended Drum" //ensure added with innerHTML so del tags are not printed
const taglineText = "You couldn't beat it!"
const copy = [
    "Here at the broken drum, we provide the best entertainment and cuisine this side of Ankh-Morpork",
    "Try our famous inverted MeatPie Floater and add a bit of Wow Wow sauce if you dare. We bake Jammy Devils fresh daily, and our scumble is the most potent you'll find",
    "We cater to dwarfs with the finest dwarf bread and we serve knuckle sandwiches almost daily",
    "Nothing beats this tavern of stylish disrepute. Come visit and you'll soon see why it's called The <del>Broken</del> Mended Drum. You couldn't beat it!"
];

const contentDiv = document.getElementById("content");

const addImage = (source, alternative) => {
    source = "/assets/images/bar.jpg";
    alternative = "picture of interior of The Mended Drum";
    const image = document.createElement("img");
    image.setAttribute("src", source);
    image.setAttribute("alt", alternative);
    contentDiv.appendChild(image);
}

const addHeaders = () => {
    const heading = document.createElement('h1');
    const tagline = document.createElement('h2');
    heading.innerHTML = headingText;
    tagline.innerHTML = taglineText;
    contentDiv.appendChild(heading);
    contentDiv.appendChild(tagline);
}

const addCopy = () => {
    copy.forEach(sentence => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = sentence;
        contentDiv.appendChild(paragraph)
    });
}

function renderHome() {
    addImage();
    addHeaders();
    addCopy();
}

export {renderHome}

//bug - if select all links by dragging or using shift, they all get selected status
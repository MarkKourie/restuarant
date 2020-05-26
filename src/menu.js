function menuTester() {
    console.log("hello from menu")
}
const contentDiv = document.getElementById("content")

const items = [
    {name: "Meat Pie Floater",
    description: "",
    price: 22,
    image: "/assets/images/meat-pie-floater.jpg"},
    {name: "Jammy Devils",
    description: "",
    price: 0,
    image: "/assets/images/jammy-devils.jpg"},
    {name: "Scumble",
    description: "",
    price: 0,
    image: "/assets/images/scumble.jpg"},
    {name: "Dwarf Bread",
    description: "",
    price: 0,
    image: "/assets/images/dwarf-bread.jpg"},
    {name: "Knuckle Sammich",
    description: "",
    price: 0,
    image: "/assets/images/knuckle-sammich.jpg"},
    {name: "Wow Wow Sauce",
    description: "",
    price: 0,
    image: "/assets/images/wow-wow-sauce.jpg"},
]

const renderMenu = () => {
    items.forEach((item) => {
        let itemDiv = document.createElement('div');
        let itemLabel = document.createElement('h3');
        let itemPricetag = document.createElement('p');
        let children = [itemLabel, itemPricetag]
        //either do something with description or remove it

        itemDiv.classList.add("menu-item")
        itemDiv.style.backgroundImage = `url('${item.image}'`;
        itemLabel.textContent = item.name;
        itemPricetag.textContent = `${item.price} coppers`;

        children.forEach((child) => {
            child.classList.add("menu")
            itemDiv.appendChild(child);
        });
        contentDiv.appendChild(itemDiv)
    });
}

export { renderMenu }


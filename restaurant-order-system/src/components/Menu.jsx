import { useState } from 'react'
import MenuSection from "./MenuComponents/MenuSection"

const Menu = () => {

    const [appetizers, setAppetizers] = useState([
        {name: "Garlic Bread", 
            price: 4.99, 
            description: "A basket of freshly baked garlic bread", 
            image: "/src/assets/Photos/garlic_bread.jpg", 
            id: 0},
        {name: "Fried Calamari", 
            price: 6.99, 
            description: "Fresh calamari fried wiht a beer battered shell", 
            image: "/src/assets/Photos/fried_calamari.jpg", 
            id: 1},
        {name: "Margherita Flatbread", 
            price: 5.99, 
            description: "Flatbread topped with tomato, mozzerella, and our house marinara sauce roasted in an oven",
            image: "/src/assets/Photos/margherita_flatbread.jpg", 
            id: 2},
        {name: "Buffalo Wings", 
            price: 6.99, 
            description: "Chicken wings coated in spicy buffalo sauce", 
            image: "/src/assets/Photos/buffalo_wings.jpg", 
            id: 3},
        {name: "Bruschetta", 
            price: 5.99, 
            description: "Slices of crisp Crostini topped with a tomato basil Bruschetta", 
            image: "/src/assets/Photos/bruschetta.jpg", 
            id: 4}
    ]);

    const [entrees, setEntrees] = useState([
        {name: "Spaghetti Marinara", price: 12.99, description: "Our classic spaghetti made with our house marinara sauce", image: "", id: 0},
        {name: "Tortellini", price: 10.50, description: "Hand made tortellini coated in a cheesy sauce", image: "", id: 1},
        {name: "Fettuccini Alfredo", price: 12.99, description: "", image: "", id: 2},
        {name: "Shrimp Scampi", price: 14.99, description: "", image: "", id: 3},
        {name: "Pepperoni Pizza", price: 13.99, description: "", image: "", id: 4}
    ]);

    const [drinks, setDrinks] = useState([
        {name: "Water Bottle", price: 2.99, id: 0},
        {name: "Coca Cola", price: 2.99, id: 1},
        {name: "Sprite", price: 2.99, id: 2},
        {name: "Tea", price: 2.99, id: 3},
        {name: "Busch Lite", price: 4.99, id: 4}
    ]);

    const [desserts, setDesserts] = useState([
        {name: "Italian Shaved Ice", price: 5.99, description: "", image: "", id: 0},
        {name: "Gelato", price: 7.99, description: "", image: "", id: 1},
        {name: "Banana Split", price: 7.99, description: "", image: "", id: 2},
        {name: "Apple Pie", price: 6.99, description: "", image: "", id: 3},
        {name: "Tiramisu", price: 8.99, description: "", image: "", id: 4}
    ]);

    return ( 
    <>
    <div className="container">
        <MenuSection className="appetizers" title="Appetizers" menuItems={appetizers} />
        <MenuSection className="entrees" title="Entrees" menuItems={entrees} />
        <MenuSection className="drinks" title="Drinks" menuItems={drinks} />
        <MenuSection className="desserts" title="Desserts" menuItems={desserts} />

    </div>
    </> );
}
 
export default Menu;
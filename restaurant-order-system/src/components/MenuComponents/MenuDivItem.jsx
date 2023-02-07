import { useState } from 'react';

const MenuDivItem = (props) => {
    const item = props.food;

    return ( 
    <>
    <div className="menu_item_div">
        <img src={item.image} />
        <h3>{item.name} - {item.price}</h3>
        <p>{item.description}</p>
    </div>
    
    </>
    );
}
 
export default MenuDivItem;
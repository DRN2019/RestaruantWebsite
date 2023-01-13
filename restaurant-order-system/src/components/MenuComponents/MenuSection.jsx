import { useState } from 'react';
import MenuItem from './MenuItem';

const MenuSection = (props) => {
    const menuItems = props.menuItems;
    const title = props.title;

    const itemStyle = {
        display: "inline-block"
    };

    return ( 
    <>
    <div className="menuSection">
        <h2>{ title }</h2>
        <br />

        <div className="menuSectionItems" style={itemStyle}>
            {menuItems.map((item) => (
                <MenuItem key={item.index} food={ item } />
            ))}
        </div>
    </div>
    </> );
}
 
export default MenuSection;
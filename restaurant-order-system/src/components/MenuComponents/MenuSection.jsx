import { useState } from 'react';
import MenuItem from './MenuItem';
import MenuDivItem from './MenuDivItem';
import Grid from '@mui/material/Grid'; 
import Grid2 from '@mui/material/Unstable_Grid2';

const MenuSection = (props) => {
    const menuItems = props.menuItems;
    const title = props.title;
    
    

    const itemStyle = {
        menuSectionItems: {
            display: "inline-block",
            margin: 20,
            width:1000
        }
        
    };

    return ( 
    <>
    <div className="menuSection">
        <h2>{ title }</h2>

        <Grid container spacing={2}>
            {menuItems.map((item) => (
                <Grid xs>
                    <MenuItem key={item.index} food={ item }  />
                </Grid>
            ))}


        </Grid>

    </div>
    </> );
}
 
export default MenuSection;
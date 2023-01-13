import { useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Paper, Typography } from '@mui/material';


const MenuItem = (props) => {
    const item = props.food;
    return ( 
    <>
    
    <Card sx = {{ maxWidth: 345}}>
        <CardActionArea>
            {item.image && 
            <CardMedia
                component="img"
                alt = {item.name}
                height = "200"
                image = {item.image} />}
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { item.name } - { item.price }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { item.description }
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Order
            </Button>
      </CardActions>
    </Card>
    </>
    );
}
 
export default MenuItem;
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Typed from "react-typed";

export default function ItemsCarousel4()
{
    let items = [
        {
            name: "language: javascript",
            url: "https://cdn.svgporn.com/logos/javascript.svg"
        },
        {
            name: "server: firebase",
            url: "https://cdn.svgporn.com/logos/farebase.svg"
        },
        {
            name: "database: firebase",
            url: "https://cdn.svgporn.com/logos/firebase.svg"
        },
        {
            name: "deploy: firebase",
            url: "https://cdn.svgporn.com/logos/firebase.svg"
        }
    ]

    return (
        <Carousel indicators={false} navButtonsAlwaysInvisible={true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>&nbsp;<Typed strings={[props.item.name]} typeSpeed={40} /></h2>
            <img src={props.item.url} alt="item" width="300" height="70" />
        </Paper>
    )
}
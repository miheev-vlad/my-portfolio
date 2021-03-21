import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Typed from "react-typed";

export default function ItemsCarousel3()
{
    let items = [
        {
            name: "language: javascript",
            url: "https://cdn.svgporn.com/logos/javascript.svg"
        },
        {
            name: "framework: express",
            url: "https://cdn.svgporn.com/logos/express.svg"
        },
        {
            name: "frontend: react",
            url: "https://cdn.svgporn.com/logos/react.svg"
        },
        {
            name: "server: nodejs",
            url: "https://cdn.svgporn.com/logos/nodejs.svg"
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
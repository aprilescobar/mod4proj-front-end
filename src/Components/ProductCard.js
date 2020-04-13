import React from 'react';

const ProductCard = props => {
    console.log(props.bottoms)
    return (
        <div>
            <h2>{props.bottom.name}</h2>
        </div>
    )
}

export default ProductCard

    // "id": 1,
    // "brand": "Club Monaco",
    // "name": "Super Slim Denim",
    // "color": "Black",
    // "description": "CM's slimmest denim. A close fit and classic styling bring a polished, streamlined update to the traditional blue jean.",
    // "img_url": "https://www.rlmedia.io/is/image/PoloGSI/s7-1294901_lifestyle?$CMPDP$",
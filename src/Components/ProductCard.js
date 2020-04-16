import React from 'react';
import Button from 'react-bootstrap/Button'

const ProductCard = props => {
    const product = props.product

    const handleClick = () => {
        props.getProduct(product, props.category)
        props.changeButton(product.id)
    }

    return (
        <div className="productCards">
            <div className="gallery">
                    <img src={product.img_url} alt={product.name}/>
                <div className="desc">
                    <h6>{product.name}</h6>
                    {props.clicked ? <Button variant="outline-secondary" value={product.id} disabled>Added!</Button> : <Button variant="outline-secondary" value={product.id} onClick={handleClick}>+ Collection</Button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard

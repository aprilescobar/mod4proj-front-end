import React from 'react';
import Button from 'react-bootstrap/Button'

const ProductCard = props => {

    const product = props.product
    return (
        <div className="productCards">
            <div class="gallery">
                    <img src={product.img_url} />
                <div class="desc">
                    <h6>{product.name}</h6>
                    <Button variant="outline-secondary" value={product.id}>+ Collection</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default ProductCard

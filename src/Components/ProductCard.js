import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = props => {

    const product = props.product
    return (
        <div class="responsive" className="productCards">
            <div class="gallery">
                    <img src={product.img_url} width="320" height="400" />
                <div class="desc">
                    <p><b>{product.name}</b></p>
                    <Button variant="outline-secondary">+ Collection</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default ProductCard

import React from 'react';
import Button from 'react-bootstrap/Button'

const ProductCard = props => {
    const product = props.product

    const handleClick = () => {
        props.getId(product.id)
    }

    return (
        <div className="productCards">
            <div className="gallery">
                    <img src={product.img_url} />
                <div className="desc">
                    <h6>{product.name}</h6>
                    <Button 
                        variant="outline-secondary" 
                        value={product.id}
                        onClick={handleClick}
                    >
                        + Collection
                    </Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default ProductCard

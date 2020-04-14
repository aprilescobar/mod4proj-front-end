import React from 'react';
import Button from 'react-bootstrap/Button'

const ProductCard = props => {
    const product = props.product

    const handleClick = () => {
        console.log(props.category)
        props.getProduct(product, props.category)
    }

    return (
        <div className="productCards">
            <div className="gallery">
                    <img src={product.img_url} alt={product.name}/>
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

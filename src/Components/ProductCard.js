import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = props => {

    const product = props.product
    return (
        <Card className="productCards" style={{ width: '18rem' }}>
            <Card.Img  src={product.img_url} value={product.id}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="outline-secondary">+ Collection</Button>{' '}
            </Card.Body>
        </Card>
    )
}

export default ProductCard

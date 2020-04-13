import React from 'react';
import ProductCard from '../Components/ProductCard';

const Bottoms = props => {

    console.log("inside Bottoms", props.bottoms)

    const renderBottoms = () => {
        return props.bottoms.map( bottom => {
            console.log("inside renderBottoms", props.bottoms)
        //     // return <ProductCard key={bottom.id} bottom={bottom} />
        })
    }

    return (    
        <div>
            <h1>Bottoms!</h1>
            {renderBottoms()}
        </div>
    )
  
}

export default Bottoms
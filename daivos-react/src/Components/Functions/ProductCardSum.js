import React from 'react'

const productCartSum = (props) => {
    const products = props.productList;
    // const pricesList = products.map(pl => pl.price )
    // console.log(pricesList); 
  
    const cartSum = products.reduce((sum, product) => sum + product.price, 0);
    
    return (
        <div>
            <span>{cartSum} &euro;</span>
        </div>
    )
};

export default productCartSum;

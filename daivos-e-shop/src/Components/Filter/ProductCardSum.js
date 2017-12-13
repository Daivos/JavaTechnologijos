import React from 'react'

const productCartSum = (props) => {
    const products = props.productList;
    const pricesList = products.map(pl => pl.price )
    console.log(pricesList); 
  
    const cartSum = pricesList.reduce((sum, pr) => sum+pr);
    
    return (
        <div>
            <span>{cartSum} &euro;</span>
        </div>
    )
};

export default productCartSum;

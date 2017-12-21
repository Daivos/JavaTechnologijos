import React from 'react'

const productTitlePrice = (props) => {
    const products = props.productList;
    const newListItems = products.filter(pr => pr.title === 'Samsung').map((productCard) =>
    
        <div>
           <span>{productCard.title}</span> <span>{productCard.price}&euro;</span>
        </div>
    ); return <div className=''>
        {newListItems}
    </div>
};

export default productTitlePrice;
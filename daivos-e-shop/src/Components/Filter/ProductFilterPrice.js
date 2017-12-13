import React from 'react'
import ProductCard from '../ProductCard'

const productFilterPrice = (props) => {
    const products = props.productList;
    const newListItems = products.filter(pc => pc.price < 10)
        .map(pCard =>
            <ProductCard
                key={pCard.id}
                title={pCard.title}
                description={pCard.description}
                price={pCard.price}
                image={pCard.image}
            />
        );
    return (
        <div className="row">
            {newListItems}
        </div>
    )
};

export default productFilterPrice;
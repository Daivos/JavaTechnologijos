import React from 'react'
import ProductCard from './ProductCard'

const productList = (props, index) => {
    const products = props.productList;
    const listItems = products.map((productCard, index) =>
        <ProductCard
            // id={index}
            key={productCard.id}
            title={productCard.title}
            model={productCard.model}
            description={productCard.description}
            price={productCard.price}
            image={productCard.image}
            click={() => props.clicked(index)}
        />
    );
    return (
        <div className="row">
            {listItems}
        </div>
    )
};

export default productList;



// const ProductListFunction = (props) => {
    
//       var productCards = props.testProducts.map(function (product, index) {
//         return (
       
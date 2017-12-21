import React from 'react'
import ProductCard from './ProductCard'

var productList = (props) => {
    var allProductList = props.allProductList;
    if (allProductList.length === 0) {
        return <div>Cia kazkada bus visi obuoliai, kai sulauksim ju is serverio</div>
    } else {
        var produktuEilutes = allProductList.map((product) => {
            return <ProductCard key={product.id} oneProduct={product} />
        })
        return <div>{produktuEilutes}</div>
    }
}

// const productList = (props, index) => {
//     const products = props.productList;
//     const listItems = products.map((productCard, index) =>
//         <ProductCard
//             // id={index}
//             key={productCard.id}
//             title={productCard.title}
//             model={productCard.model}
//             description={productCard.description}
//             price={productCard.price}
//             image={productCard.image}
//             click={() => props.clicked(index)}
//         />
//     );
//     return (
//         <div className="row">
//             {listItems}
//         </div>
//     )
// };

export default productList;



// const ProductListFunction = (props) => {
    
//       var productCards = props.testProducts.map(function (product, index) {
//         return (
       
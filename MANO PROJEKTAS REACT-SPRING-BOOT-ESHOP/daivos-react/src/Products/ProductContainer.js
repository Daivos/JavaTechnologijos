import React, {Component} from 'react';
import axios from 'axios';
import './Product.css';
import ProductList from './ProductList';
// import phone from '../Images/samsung.jpg';
// import PropTypes from 'prop-types';
// import ProductTitlePrice from '../Products/Functions/ProductTitleAndPrice';
// import ProductFilterPrice from './Functions/ProductFilterPrice';
// import ProductCartSum from './Functions/ProductCardSum';
// import NavigationComponent from '../Navigation/NavigationComponent'

class ProductContainer extends Component {

    // static propTypes = {
    //     id: PropTypes.number.isRequired,
    //     title: PropTypes.string.isRequired,
    //     model: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired,
    //     price: PropTypes.number.isRequired,
    //     image: PropTypes.string.isRequired
    // };

    // static defaultProps = {
    //     id: 0,
    //     title: 'Undefined',
    //     model: 'Undefined',
    //     description: 'Undefined',
    //     price: 0,
    //     image: 'Undefined'
    // };

 
    constructor() {
        super();

        this.state = {
            productList: []
        }
    }

    componentWillMount() {
        axios
            .get("http://localhost:8080/api/product")
            .then((produktaiIsServerio) => {
                console.log(produktaiIsServerio);
                this.setState({productList: produktaiIsServerio.data});
            })
            .catch((klaida) => {
                console.log(klaida);
            });
        
    }

    render() {
        return <ProductList allProductList={this.state.productList}/>
        
    }
}




    // goProducts = () => this.props.router.push('products');
    
    // render() {

    //     return (<div className="thumbnail">

    //             <div>
    //                 <button onClick={this.goProducts}
    //                         className="btn btn-primary"
    //                         role="button">
    //                    Go to Products
    //                 </button>


    //             </div> 
    //             <div>
    //             <p><button onClick={this.goAdmin}
    //             className="btn btn-primary"
    //             role="button">
    //             Go to Administration
    //             </button></p>
    //             </div>
               
       

                 {/* <div>1.Visas sąrašas: <ProductList
                    productList={this.state.productList}
                    key={this.state.productList.id}
                    clicked={this.titlePrice}
                /></div>
                <div>2.Samsungo kainos: <ProductTitlePrice
                productList={this.state.productList}/></div>

                <div>3.<ProductFilterPrice
                productList={this.state.productList}
                key={this.state.productList.id}
                // clicked={this.ifSamsung}
                /></div>

                <div>4.<ProductCartSum
                productList={this.state.productList}
                key={this.state.productList.id}
                /></div>

             
     
                
            </div>
        );
    }
} */}


export default ProductContainer;

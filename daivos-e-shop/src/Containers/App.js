import React, {Component} from 'react';
import './App.css';
import ProductList from '../Components/ProductList'
import phone from '../Images/samsung.jpg'
import PropTypes from 'prop-types'
import ProductTitlePrice from '../Components/Filter/ProductTitleAndPrice'
import ProductFilterPrice from '../Components/Filter/ProductFilterPrice'
import ProductCartSum from '../Components/Filter/ProductCardSum'

class App extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    };

    static defaultProps = {
        id: 0,
        title: 'Undefined',
        description: 'Undefined',
        price: 0,
        image: 'Undefined'
    };

    state = {
        productList: [
            {id: 1, title: 'Nokia', description: 'smart phone', price: 20, image: phone},
            {id: 2, title: 'Samsung', description: 'simple phone', price: 14, image: phone},
            {id: 3, title: 'Huawei', description: 'smart phone', price: 35, image: phone},
            {id: 4, title: 'iPhone', description: 'new phone', price: 5, image: phone}
            // {id: 5, title: 'Samsung', description: 'smart phone', price: [7], image: phone},
            // {id: 6, title: 'Huawei', description: 'simple phone', price: [20], image: phone},
            // {id: 7, title: 'Samsung', description: 'smart phone', price: [14], image: phone},
            // {id: 8, title: 'LG', description: 'smart phone', price: [35], image: phone},
            // {id: 9, title: 'iPhone', description: 'simple phone', price: [56], image: phone},
            // {id: 10, title: 'Huawei', description: 'simple phone', price: [7], image: phone}
            
        ]
    };

   

    deleteProduct = (index) => {
        const newProducts = [...this.state.productList]; // Creates a new array of persons by copying the persons array.
        newProducts.splice(index, 1); // Remove elements: starting at personIndex, 1 = total number of elements to remove.
        this.setState({
            productList: newProducts // Re-assign (in classes state) persons array after deletion.
        })
    };

    titlePrice = (index) => {
        const tp = this.state.productList[index];
        console.log(tp.title, tp.price)
    };

    titles = () => {
        const titleName = this.state.productList.reduce((sum, aTitle) => {
            return sum + ', ' + aTitle.title;

        });
        console.log(titleName)
    };

    ifSamsung = () => {
        const sumsungPhones =
            this.state.productList.filter(phone => phone.title === 'Samsung').map(phone => phone.description);
        console.log(sumsungPhones)
    };
    huaweiPrices= () =>{
        const hPrices=this.state.productList.map(Huawei => Huawei.price);
        console.log(hPrices);
    }

    goProducts = () => this.props.router.push('products');

    render() {

        return (<div className="thumbnail">

                <div>
                    <button onClick={this.goProducts}
                            className="btn btn-primary"
                            role="button">
                        Go to products?
                    </button>
                </div>
                <div>1.Visas sąrašas: <ProductList
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
}


export default App;

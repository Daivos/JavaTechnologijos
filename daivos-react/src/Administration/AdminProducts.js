import React, {Component} from 'react'
import NewProduct from '../Components/NewProducts'
import PropTypes from 'prop-types'

class Product extends Component {
    state = {
        id: 0,
        title: '',
        model: '',
        description: '',
        price: 0,
        image: '',
        quantity: 0
    };

    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    };

    static defaultProps = {
        id: 0,
        title: 'Undefined',
        model:'Undefined',
        description: 'Undefined',
        price: 0,
        image: 'Undefined',
        quantity: 0
    };

    titleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    imageChange = (event) => {
        this.setState({
            image: event.target.value
        })
    };

    descriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    };

    priceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    };

    quantityChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    };

    saveData = (event) => {
        console.log(this.state);
        event.preventDefault()
    };

    render() {
        return (
            <NewProduct
                title={this.state.title}
                changeTitle={this.titleChange}
                model={this.state.model}
                changeModel={this.modelChange}
                image={this.state.image}
                changeImage={this.imageChange}
                description={this.state.description}
                changeDescription={this.descriptionChange}
                price={this.state.price}
                changePrice={this.priceChange}
                quantity={this.state.quantity}
                changeQuantity={this.quantityChange}
                submitData={this.saveData}
            />
        )
    }
}

export default Product;
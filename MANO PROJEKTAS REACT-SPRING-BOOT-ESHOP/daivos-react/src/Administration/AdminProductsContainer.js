import React, {Component} from 'react'
import NewProductForm from '../Administration/NewProductForm'
import AdminList from './AdminList'
import PropTypes from 'prop-types'
import NavigationComponent from '../Navigation/NavigationComponent'
import axios from "axios/index";

class AdminProductsContainer extends Component {
    state = {
        id: 0,
        title: '',
        model: '',
        description: '',
        price: 0,
        image: ''
       
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
        image: 'Undefined'
        
    };


    editProduct = (index) => {
        return this.props.router.push('admin/createproduct/' + this.state.productList[index].id);
    };
    adminProducts = () => this.props.router.push('admin');
    listProducts = () => this.props.router.push('products');
    createProduct = () => this.props.router.push('admin/createproduct/new');

    deleteProduct = (index) => {
        axios.delete('products/' + this.state.productList[index].id).then(() => {
            axios.get('products/').then(response => {
                this.setState({productList: response.data})
            })
        }).catch(error => {
            console.log('Error = ' + error)
        })
    };

    // componentDidUpdate() {
    //         axios.get('products/').then(response => {
    //             const products = response.data;
    //             if(this.state.productList !== products)
    //             this.setState({
    //                 productList: products
    //             })
    //         })
    // }

    componentDidMount() {
        axios.get('products/').then(response => {
            const products = response.data;
            // const updatedProducts = products.map(product => {
            //     return {
            //         ...product, image: phone
            //     }
            // });
            this.setState({
                productList: products
            })
        }).catch(error => {
            console.log('Error = ' + error)
        })
    }

    render() {
        return (
            <div>
                <NavigationComponent
                    admin={this.adminProducts}
                    home={this.listProducts}
                />
                <AdminList
                    productList={this.state.productList}
                    id={this.state.productList.id}
                    title={this.state.productList.title}
                    description={this.state.productList.description}
                    image={this.state.productList.image}
                    editProduct={this.editProduct}
                    deleteProduct={this.deleteProduct}
                />
                <p>
                    <button id="button" className="btn btn-success" onClick={this.createProduct}>Add new product
                    </button>
                </p>
            </div>

        );
    }
}

//     titleChange = (event) => {
//         this.setState({
//             title: event.target.value
//         })
//     };

//     imageChange = (event) => {
//         this.setState({
//             image: event.target.value
//         })
//     };

//     descriptionChange = (event) => {
//         this.setState({
//             description: event.target.value
//         })
//     };

//     priceChange = (event) => {
//         this.setState({
//             price: event.target.value
//         })
//     };

//     quantityChange = (event) => {
//         this.setState({
//             quantity: event.target.value
//         })
//     };

//     editProduct = (index) => {
//         return this.props.router.push('admin/createproduct/' + this.state.productList[index].id);
//     };
//     adminProducts = () => this.props.router.push('admin');
//     listProducts = () => this.props.router.push('products');
//     createProduct = () => this.props.router.push('admin/createproduct/new');

//     deleteProduct = (index) => {
//         axios.delete('products/' + this.state.productList[index].id).then(() => {
//             axios.get('products/').then(response => {
//                 this.setState({productList: response.data})
//             })
//         }).catch(error => {
//             console.log('Error = ' + error)
//         })
//     };

//     // componentDidUpdate() {
//     //         axios.get('products/').then(response => {
//     //             const products = response.data;
//     //             if(this.state.productList !== products)
//     //             this.setState({
//     //                 productList: products
//     //             })
//     //         })
//     // }

//     componentDidMount() {
//         axios.get('products/').then(response => {
//             const products = response.data;
//             // const updatedProducts = products.map(product => {
//             //     return {
//             //         ...product, image: phone
//             //     }
//             // });
//             this.setState({
//                 productList: products
//             })
//         }).catch(error => {
//             console.log('Error = ' + error)
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Navbar
//                     admin={this.adminProducts}
//                     home={this.listProducts}
//                 />
//                 <ProductAdminList
//                     productList={this.state.productList}
//                     id={this.state.productList.id}
//                     title={this.state.productList.title}
//                     description={this.state.productList.description}
//                     image={this.state.productList.image}
//                     editProduct={this.editProduct}
//                     deleteProduct={this.deleteProduct}
//                 />
//                 <p>
//                     <button id="button" className="btn btn-success" onClick={this.createProduct}>Add new product
//                     </button>
//                 </p>
//             </div>

//         );
//     }
// }    saveData = (event) => {
//         console.log(this.state);
//         event.preventDefault()
//     };

//     render() {
//         return (
//             <NewProductForm
//                 title={this.state.title}
//                 changeTitle={this.titleChange}
//                 model={this.state.model}
//                 changeModel={this.modelChange}
//                 image={this.state.image}
//                 changeImage={this.imageChange}
//                 description={this.state.description}
//                 changeDescription={this.descriptionChange}
//                 price={this.state.price}
//                 changePrice={this.priceChange}
//                 quantity={this.state.quantity}
//                 changeQuantity={this.quantityChange}
//                 submitData={this.saveData}
//             />
//         )
//     }
// }

export default AdminProductsContainer;
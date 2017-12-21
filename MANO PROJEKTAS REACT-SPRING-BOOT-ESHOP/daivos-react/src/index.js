import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import ProductContainer from './Products/ProductContainer';
import AdminProductsContainer from './Administration/AdminProductsContainer';
import UsersContainer from './Users/UserComponent'






// var NoMatch = (props) =>{
//   return <div>Route did not match</div>;
// }

// var InitialApp=(props)=>{
//   return <div>{props.children}</div>
// }

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={InitialApp}>
//     <IndexRoute component={UsersContainer}/>
//     <Route path="/products" component={ProductContainer}/>
//     <Route path="/admin/products/:id" component={AdminProductsContainer}/>
//     <Route path="/admin/products/new" component={AdminProductsContainer}/>
//     <Route path="/users" component={UsersContainer}/>
//     <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>), 
//   document.getElementById('root')
// );

  ReactDOM.render(<UsersContainer/>, document.getElementById('root'));




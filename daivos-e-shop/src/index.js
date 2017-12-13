import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Products from './Containers/Products'
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'

// const InitialApp = (props) => {
//     return <div>
//         {props.children}
//     </div>
// };

// const NoMatch = (props) => {
//     return <div>
//         Route did not match
//     </div>
// };

// const DemonstruotiNavigacija = (props) => {
//     const goApp = () => props.router.push("/");
//     return (
//         <div>
//             At route: {props.router.getCurrentLocation().pathname}
//             <button onClick={goApp}>Go App</button>
//             <pre>
//                 {JSON.stringify(props, null, 2)}
//             </pre>
//         </div>
//     )
// };

// ReactDOM.render((
//     <Router history={hashHistory}>
//         <Route path="/" component={InitialApp}>
//             <IndexRoute component={App}/>
//             <Route path="/products" component={DemonstruotiNavigacija}/>
//             <Route path="/products/:id" component={DemonstruotiNavigacija}/>
//             <Route path="/help" component={DemonstruotiNavigacija}/>
//             <Route path="*" component={NoMatch}/>
//         </Route>
//     </Router>
// ), document.getElementById('root'));
 ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();



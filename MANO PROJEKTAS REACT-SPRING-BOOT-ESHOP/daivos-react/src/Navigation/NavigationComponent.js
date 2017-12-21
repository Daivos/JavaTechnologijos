import React from 'react'
import {Link} from 'react-router'

const navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active" ><Link onClick={props.product}>Home</Link></li>
                        <li><Link onClick={props.admin}>Administration</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link href="#"><span className="glyphicon glyphicon-shopping-cart"> Items</span></Link>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default navbar;

var DemonstruotiNavigacija = (props) => {
    var goApp = () => props.router.push("/");
    return (
    <div>
    At route: {props.router.getCurrentLocation().pathname}
    <button onClick={goApp}>Go to App</button>
    <pre>
    {JSON.stringify(props, null, 2)}
    </pre>
    </div>
    );
    };
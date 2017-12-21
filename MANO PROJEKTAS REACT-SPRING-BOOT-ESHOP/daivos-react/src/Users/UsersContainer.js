import React, {Component} from 'react';
import axios from 'axios';
import UsersComponent from './UsersComponent'

class UsersContainer extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        axios
            .get("http://localhost:8080/rest/User/user")
            .then((atsakymasIsServerio) => {
                console.log(atsakymasIsServerio);
                this.setState({users: atsakymasIsServerio.data});
            })
            .catch((klaida) => {
                console.log(klaida);
            });
        
    }

    render() {
        return <UsersComponent allUsers={this.state.users}/>
    }
}

export default UsersContainer;
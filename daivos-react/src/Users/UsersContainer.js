import React, {Component} from 'react';
import UsersComponent from './UsersComponent'
import axios from 'axios'

class UsersContainer extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        axios
            .get("http://localhost:8080/rest/user")
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
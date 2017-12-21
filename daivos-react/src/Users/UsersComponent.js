import React from 'react'
import UserComponent from './UserComponent'

var UsersComponent = (props) => {
    var allUsers = props.allUsers;
    if (allUsers.length === 0) {
        return <div>Cia kazkada bus visi obuoliai, kai sulauksim ju is serverio</div>
    } else {
        var vartotojuEilutes = allUsers.map((user) => {
            return <UserComponent key={user.id} oneUser={user} />
        })
        return <div>{vartotojuEilutes}</div>
    }
}

export default UsersComponent;
import React from 'react'

const UserComponent = (props) => {
    const user = props.oneUser;
    return <span>User name: {user.userName}, {user.firstName}, {user.lastName} , {user.email}<br/></span>
}

export default UserComponent;
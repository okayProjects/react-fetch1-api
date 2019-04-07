import React from 'react';

const usersList = (props) => {
    console.log(props);
    const users = props.users.map(user => (
        <div key={user.login.uuid} style={{ borderBottom: '2px solid black', padding: '20px 0' }}>
            <img src={user.picture.large} alt={user.name.last} />
            <h2 style={{ textTransform: 'capitalize' }}>{user.name.title} {user.name.first} {user.name.last}</h2>
            <p><strong>Phone number:</strong> {user.cell}</p>
            <p><strong>Email address:</strong> {user.email}</p>
            <br></br>
        </div>
    ))
    return (
        <div>
            {users}
        </div>
    )
}

export default usersList;
import React from 'react';

const Friend = (props) => {
    
    const {name, email} = props.friend
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;
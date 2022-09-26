import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend
    const friendStyle ={
        border: "1px solid purple",
        borderRadius: "10px",
        margin: "20px",
        padding: "10px"
    }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p> id <Link to={`/friend/${id}`}>Show detail of {id}</Link></p>
        </div>
    );
};

export default Friend;
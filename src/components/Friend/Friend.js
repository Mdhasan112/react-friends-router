import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend
    const friendStyle = {
        border: "1px solid purple",
        borderRadius: "10px",
        margin: "20px",
        padding: "10px"
    };
    
    // const history = useHistory();
    // const handleClick = (friendId) => {
    //     history.push(`/friend/${friendId}`)
    // }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show detail of {id}</button>
            </Link>
            <br />
            {/* <button onClick={() => handleClick(id)}>Click Me</button> */}
        </div>
    );
};

export default Friend;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const[friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    })
    const {name, email, website} = friend
    return (
        <div>
            <p>This is friend detail component: {friendId}</p>
            <h2>{name}</h2>
            <h2>Email: {email}</h2>
            <h4>Website: {website}</h4>
        </div>
    );
};

export default FriendDetail;
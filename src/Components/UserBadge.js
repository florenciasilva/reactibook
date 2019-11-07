import React from 'react';

const UserBadge = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <p> Hi {user.username}</p>
    );
};

export default UserBadge
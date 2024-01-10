import React from 'react';
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            <img onClick={handleClick} style={{ width: "100vw", height: "99.5vh" }} src="https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg" alt="" />
        </div>
    );
};

export default Error;
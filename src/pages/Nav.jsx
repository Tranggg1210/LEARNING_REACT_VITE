import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Nav = () => {
    const dataLink = [
        {
            id: 1,
            to: "/",
            title: "Home"
        },
        {
            id: 2,
            to: "/TodoApp",
            title: "To Do App"
        },
        {
            id: 3,
            to: "/Photos",
            title: "Photos"
        },
        {
            id: 4,
            to: '/Login',
            title: "Login"
        },
        {
            id: 5,
            to: "/covid-19news",
            title: "COVID-19 news"
        },
        {
            id: 6,
            to: "/blog",
            title: "Blog Apps"
        }
    ]
    return (
        <div>
            <div className="topnav">
                {
                    dataLink.length && dataLink.map((item) => (
                        <NavLink
                            key={item.id}
                            // className={"active"}
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <div className='bufferZone'></div>
            <Outlet />
        </div>
    );
};

export default Nav;
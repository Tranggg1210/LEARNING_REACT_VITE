import React from 'react';

const Map = () => {
    const products = [
        {
            id: 1,
            name_item: 'Banh da'
        },
        {
            id: 2,
            name_item: 'Banh trang'
        },
        {
            id: 3,
            name_item: 'Banh mi'
        },
        {
            id: 4,
            name_item: 'Banh tao'
        },
        {
            id: 5,
            name_item: 'Banh chanh'
        }
    ]
    const styleItem = (id) => (id % 2 == 0) ? "red" : "green"
    const listItems = products.map( item => 
        <li key={item.id} style={{color: styleItem(item.id), fontSize: 50}}>
            {item.name_item}
        </li>
        
    )
    return (
        <div>
            {listItems}
        </div>
    );
};

export default Map;
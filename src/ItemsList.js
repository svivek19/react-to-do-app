import React from 'react';
import LineItem from './LineItem';

const ItemsList = ({ items, handleDel, handleCheck }) => {
    return (
        <ul className="my-10">
            {items.map((item) => (
                <LineItem
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDel={handleDel}
                />
            ))}
        </ul>
    )
}

export default ItemsList;
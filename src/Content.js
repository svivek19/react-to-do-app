import React from 'react';
import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDel }) => {

    return (
        <main>
            {(items?.length) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDel={handleDel}
                />
            ) : (
                <p className='my-14 font-semibold text-slate-800 text-2xl'>Your list is empty!</p>
            )
            }
        </main>
    )
}

export default Content;
import React from 'react'

const LineItem = ({ item, handleCheck, handleDel }) => {
    return (
        <li className='hover:bg-slate-400 duration-300  rounded-lg bg-slate-300 my-3 p-3 text-lg flex mx-auto justify-around w-5/6 md:w-1/3'>
            <input type='checkbox' onChange={() => handleCheck(item.id)} checked={item.checked} className='w-8 cursor-pointer' />
            <label onDoubleClick={() => handleCheck(item.id)} className='m-auto font-semibold' style={(item.checked) ? { textDecoration: 'line-through' } : null}>{item.item}</label>
            <button type='button' className='bg-white rounded-lg px-2 text-red-500 font-bold' onClick={() => handleDel(item.id)}>X</button>
        </li>
    )
}

export default LineItem;
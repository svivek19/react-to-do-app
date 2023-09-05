import React from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    return (
        <form className='my-10' onSubmit={handleSubmit}>
            <label htmlFor='addItem' className='font-semibold uppercase text-2xl text-blue-900' >Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
                className='rounded-lg bg-slate-300 my-3 p-3 text-lg font-bold flex mx-auto justify-around w-5/6 md:w-1/3'                
            />
            <button type='submit' className=' bg-sky-700 px-6 py-2 rounded-lg text-slate-100 text-lg font-bold hover:bg-green-500 duration-300 '>
                Submit</button>
        </form>
    )
}

export default AddItem;
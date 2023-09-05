import React from 'react'

const SearchItem = ({search,setSearch}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                id='search'
                role='searchbox'
                placeholder='Search Items'
                className='rounded-lg bg-slate-800 my-3 p-3 text-lg font-bold flex text-white mx-auto justify-around w-5/6 md:w-1/3 text-center' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem;
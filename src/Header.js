import React from 'react'

const Header = (props) => {
  return (
    <header className='bg-sky-900 text-white p-4'>
      <h1 className='font-bold text-4xl'>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title:"To do List"
}
export default Header;
import React from 'react'

const Footer = ({length}) => {
  return (
    <div className='text-lg font-bold'>{length} List {length===1? "item":"items" }</div>
  )
}

export default Footer;
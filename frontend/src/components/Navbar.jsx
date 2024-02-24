import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white p-10 gap-10 flex '>
      <Link to={'/'}>Home</Link>
      <Link to={'/create'}>Add Task</Link>
    </div>
  )
}

export default Navbar

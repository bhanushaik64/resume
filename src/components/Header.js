import React from 'react'
import './Index.css'


const Header = () => {
  return (
    <div className='container'>
        <p className='head'>A <span className='text'>Resume</span> that stands out!</p>
        <p className='head'>Make your own resume.<span className='text'> It's free</span></p>
        <img src='https://th.bing.com/th/id/OIP.rdcK0LGw4EulJyjmsATWJgHaH5?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
        <h1>Resume Builder</h1>
    </div>
  )
}

export default Header
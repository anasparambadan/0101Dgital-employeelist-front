import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'

const AdminPage = () => {
  const [menu, setmenu] = useState('dashboard')
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[1fr_8fr]'>
      <Sidebar setmenu = {setmenu}/>
      <Content menu= {menu}/>

      </div>
    </div>
  )
}

export default AdminPage
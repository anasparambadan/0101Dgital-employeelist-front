import React from 'react'
import EmployeesList from './EmployeesList'

const Content = ({menu}) => {
  return (
    <div className='w-full text-center'>
        
        {menu == 'dashboard' ? "Admin Dashboard":""}
        {menu == 'empolyees' ? <EmployeesList/> : ""}  
    </div>
  )
}

export default Content
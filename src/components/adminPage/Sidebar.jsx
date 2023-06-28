import {AiFillDashboard} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'

const Sidebar = ({setmenu}) => {
  
  return (
    <div>
        <div className='w-[220px] h-full min-h-screen bg-[#0a3c7d] flex flex-col items-center  gap-4 pt-3'>
            <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
            <span className="text-white flex items-center justify-center gap-3 hover:text-gray-800 hover:bg-gray-100 w-full cursor-pointer p-3 " onClick={() => setmenu("dashboard")}> <span><AiFillDashboard/></span>Dash Board</span>
            
            <span className="text-white flex items-center gap-3 hover:text-gray-800 justify-center hover:bg-gray-100 w-full cursor-pointer p-3 " onClick={()=> setmenu("empolyees")}> <span><FaUsers/></span>Employees</span>
        </div>
    </div>
  )
}

export default Sidebar
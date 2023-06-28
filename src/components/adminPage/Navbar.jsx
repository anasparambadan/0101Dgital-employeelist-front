import React from "react";
import {IoMdLogOut} from 'react-icons/io'
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()
  return (
   <div className="h-14 flex items-center justify-between px-10 bg-[#0a3c7d]">
    <h1 className="text-xl text-gray-300 font-bold  ">0101-Digital</h1>

    <div className="text-white flex items-center gap-4">
        <span className=""> Hi admin...</span>
        <Link to={"/login"}>
        <span className="flex items-center gap-1 cursor-pointer text-sm hover:text-red-100" onClick={()=>{ localStorage.clear()}}><IoMdLogOut size={25}/> Logout </span>
          </Link> 

    </div>
    
   </div>
  );
};

export default Navbar;

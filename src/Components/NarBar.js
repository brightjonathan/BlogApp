import { useState } from 'react';
import {BsBlockquoteRight} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NarAd from './NarAd';

const NarBar = ({user, logout, isAuth,  }) => {


  let Links =[
      { name:"Dashboard ", link:"/" },
      { name:"Post", link:"/post" },
      { name:"About ", link:"/about" },
      { name:"Messages", link:"/messages" },
      { name:"Subscribers ", link:"/subscribers" },
      {name: "Contact", link:"/contact"}
    ];

    //toggling 
    const [open,setOpen]=useState(false);
    const handleClose = ()=>{
      setOpen(!open)
    }

  return (
     <div>     
    <div className='shadow-md w-full z-10 fixed top-0 left-0 '>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-slate-900'>
      {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'></span> */}
      <Link to='/' className='text-slate-900 hover:text-gray-400 duration-500'> HovorAd </Link>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    {open ? <AiOutlineClose/> : <BsBlockquoteRight/> }
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`} onClick={handleClose}>
      {
        Links.map((links)=>(
          <li key={links.name} className='md:ml-8 text-xl md:my-0 my-7' >
          
            <Link to={links.link} className='text-slate-900 sm:text-[10px] lg:text-[20px] hover:text-gray-400 duration-500'> {links.name} </Link> 
          </li>
        ))
      }
     
     {!isAuth ? (
       <Link to='/login'><button className='bg-slate-900 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-slate-700 
       duration-500'> Login </button> </Link>
     ) : (
      <button  onClick={logout} className='bg-slate-900 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-slate-700 
      duration-500'> Signout </button>
     ) }

    </ul>
    </div>
  </div>
  </div>

  )
}

export default NarBar


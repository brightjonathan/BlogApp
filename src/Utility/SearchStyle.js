import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {search} from './Icons'

const SearchStyle = ({blogs, setBlogs}) => {

    const navigate = useNavigate();
    const [Search, setSearch] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
         setBlogs(blogs.filter((blog)=> 
         blog.title.toLowerCase().includes(search)
         ))
        console.log('search');
        setSearch('');
     }


    const onChange = (e)=>{
        setSearch(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit} >
    <div className="flex justify-center pt-[5vh] lg:pt-[5vh]">
     <div className="mb-3 sm:w-[50%]">
       <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 ">
         <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
         placeholder="Search " 
         value={Search}
         onChange={onChange}           
         />
         <button className="px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
         type="submit" >
         {search}
         </button>
       </div>
     </div>
   </div>
    </form>
  )
}

export default SearchStyle

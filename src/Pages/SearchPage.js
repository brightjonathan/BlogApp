import {useState, useEffect} from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useLocation, Link } from 'react-router-dom'
import { db } from '../Firebase-config'

const SearchPage = () => {

    const [data, setData] = useState([]);

    const useQuery = ()=>{
        return new URLSearchParams(useLocation().search)
    }

    let queryone = useQuery();
    let search = queryone.get('search_query')
    //console.log(search)

    useEffect(()=>{
    searchdata()
    },[search])

    const searchdata = async () =>{
        const searchRef = collection(db, 'HovorBlogPost');
        const searchQuery = query(searchRef, where('title', '==', 'how'));

        const querySnapShot = await getDocs(searchQuery);
        let searchTasks = [];
        querySnapShot.forEach((doc)=> {
            searchTasks.push({id: doc.id, ...doc.data()})
        });

        console.log(searchTasks)

    }   
    
  return (
    <div className='mt-[15vh]'>
      <h2>Search</h2>
    </div>
  )
}

export default SearchPage

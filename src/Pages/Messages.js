import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase-config';

const Messages = ({isAuth}) => {

    const navigate = useNavigate()
    const [mess, setmess] = useState([]);
    const collectionRef = collection(db, 'Messages');

    useEffect(()=>{
     const getpost = async ()=>{
      const data = await getDocs(collectionRef);
      setmess(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
     }
     getpost()
    },[])

    useEffect(()=>{
        if(!isAuth){
          navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isAuth]);
    
  return (
    <div className='mt-[15vh] sm:mt-[-0vh] lg:mt-[10vh]'>
        <h2 className='sm:pt-[9vh] text-center font-bold text-2xl'> Admin_messages </h2>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 0 lg:grid-cols-4 gap-x-6 gap-y-16 px-4 pt-5 sm:pt-20 text-black'>
        {mess?.map((doc)=>(
             <div className='p-6 rounded-lg shadow-2xl mb-9 bg-white hover:bg-transparent hover:bg-slate-300 duration-500' key={doc.id}>
             <div className="grid grid-cols-2 gap-4">
       
               
             <div className="mb-6">
              <label className='font-bold'>Name</label>
              <h1>{doc.user_name} </h1>
             </div>
       
             <div className="mb-6">
              <label className='font-bold'>Date</label>
              <h1>{doc.date.toDate().toDateString()}</h1>
             </div>
           </div>
       
           <div className="mb-6">
            <label className='font-bold' >Email</label>
            <h1>{doc.user_email}</h1>
           </div>
            <label className='font-bold' >message</label>
            <p className='text-[14px]  lg:text-[14px] '>{doc.user_message}</p>      
             </div>
        ))}
    </div>
    </div>
  )
}

export default Messages

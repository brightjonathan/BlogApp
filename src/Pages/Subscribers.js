import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Table } from "react-bootstrap";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase-config';

const Subscribers = ({isAuth}) => {

  const navigate = useNavigate()
  const [sub, setsub] = useState([])

  const collectionRef = collection(db, 'Subscribers');

  useEffect(()=>{
    const getpost = async ()=>{
      const data = await getDocs(collectionRef);
      setsub(data.docs.map((doc)=> ({...doc.data(), id: doc.id}))) 
    }

    getpost()
  }, [])

  useEffect(()=>{
      if(!isAuth){
        navigate('/login')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth]);


  return (
    <div className='mt-[15vh]'>
         
    <Table striped  hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>SUBSCRIBERS_EMAIL</th>
                <th>USER_NAME</th>
                <th>LOGIN_EMAIL</th>
                <th>DATE</th>
            </tr>
        </thead>

        <tbody>

          {sub?.map((post, index)=>(
            
         <tr key={index}>
            <td>{index + 1}</td>
            <td>{post.Subscriber}</td>
            <td>{post.author.name}</td>
            <td>{post.author.email}</td>
            <td className='text-[10px] sm:text-[15px]'> {post.date.toDate().toDateString()} </td> 
          </tr>

          ))}

          </tbody>
          </Table>

    </div>
  )
}

export default Subscribers


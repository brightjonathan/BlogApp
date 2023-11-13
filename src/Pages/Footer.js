import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {useState } from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaTwitch, FaFacebookSquare } from 'react-icons/fa';
//import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { auth, db } from '../Firebase-config';
import { toast } from 'react-toastify'




const Footer = () => {

    const date = new Date().getFullYear();
    const [Subscriber, setSubscriber] = useState('');

    
        //handle the submit button
        const submit = async (e) => {
            e.preventDefault();

                if(Subscriber === ''){
                 toast.error('Please fill in the input field')
                }else{
                    try {
                        await addDoc(collection(db, 'Subscribers'), {
                            author: {
                                name: auth.currentUser.displayName,
                                email: auth.currentUser.email,
                                id: auth.currentUser.uid
                            },
                            Subscriber,
                            date: serverTimestamp()
                        })
                        toast.success('Thanks for the subscription')
                        setSubscriber('')
                    } catch (error) {
                        console.log(error)
                    }
                }
        };

       
        

  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>

    <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
        
        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <Link to='/about'> <li className='py-1'> About us</li></Link>
                <Link to='/contact'> <li className='py-1'> Contact us </li></Link>
            </ul>
        </div>
        
        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <Link to='/privacy_&_policies'> <li className='py-1'> Privacy & Policies</li></Link>
                <Link to='/terms_&_condition'> <li className='py-1'> Terms & Conditions </li></Link>
            </ul>
        </div>

        <div className='col-span-2 pt-8 mt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'  onSubmit={submit} >
                <input className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold' type="email" 
                placeholder='Enter email..'
                value={Subscriber} 
                onChange={(e)=> setSubscriber(e.target.value)} 
                />
                <button type='submit' className='text-white p-3 rounded-xl mb-4 bg-slate-500  hover:text-gray-900 duration-500'> Subscribe </button>
            </form>
        </div>

    </div>

    <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
       <p className='py-4'>  All rights Reserved. © 2022-{date} HovorAd  <br/> brightjonathaninfor64@gmail.com </p>
      <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href="" target="_blank" rel="noopener noreferrer" > <FaTwitter /> </a>
            <a href="" target="_blank" rel="noopener noreferrer" > <FaInstagram /> </a>
            <a href="" target="_blank" rel="noopener noreferrer" > <FaFacebookSquare /> </a>
      </div>
    </div>

</div>
  )
}

export default Footer



import { useState, useEffect } from 'react';
import possibility from '../assets/possibility.png';
import {message, stroke} from '../Utility/Icons';
import {BiMessageDots} from 'react-icons/bi';
import {MdOutlineSupportAgent} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Pages/Footer';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../Firebase-config';
import { toast } from 'react-toastify';


const initialState = {
  user_name: '',
  user_email: '',
  user_message: '',
};

const Contact = ({isAuth}) => {

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const {user_name, user_email, user_message} = formValue;

   //targeting the input fields
   const onInputChange = (e)=>{
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      if(user_name === '' || user_email === '' || user_message === '' ){
         toast.error('please fill in the input field')
      }else{
       try {
        await addDoc(collection(db, 'Messages'), {
          author:{
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
            id: auth.currentUser.uid
          },
          ...formValue,
          date: serverTimestamp()
        })
        toast.success('Thanks for the feedback')
       } catch (error) {
        console.log(error)
       }
      }
      setFormValue(" ")
  };

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);


  return (
    <>
    <div className='w-full h-[100%] pt-[10vh] flex flex-col justify-between ' >
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

     <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 sm:ml-6 mt-[-20vh]' >
        <p className='text-4xl mt-[20vh] lg:text-7xl  font-extrabold'> Talk to us, <br/> for Zero Fees </p>
        <h1 className='pt-8 text-[14px] sm:text-xl Tcolor'> Providing borderless opporunity for businesses through</h1>
        <h1 className='sm:text-xl Tcolor text-[14px]'>advertising personally for you, so we'd love to hear from you.</h1>
       
       <div className='mt-4'>
        <a className='flex flex-row w-fit transition duration-200 items-center space-x-2 ' href="mailto:brightjonathaninfor64@gmail.com" >
          <div className='flex items-center space-x-2' >
          <h2 className=''> {message} </h2>
          <h2 className=' sm:text-xl text-blue-700'> Email: support@hovorAd.inc </h2>
          <span> {stroke} </span>
          </div>
        </a>
       </div>
     </div>

     <div className='ml-[2vh] lg:mt-7'>
        <img src={possibility} alt='possibilty' className='w-[75%]' loading='lazy' />
     </div>

    </div>
</div>

        <div className='text-center mt-[9vh] sm:mt-[5vh] lg:mt-[15vh]'>
          <h2 className=' text-3xl sm:text-5xl font-bold text-slate-900'>We're here to help</h2>
          <h2 className='mt-6 Tcolor m-[3vh]'>Looking for support, information or guidance, we'd love to hear from you</h2>
        </div>

        <div className=' lg:m-[40vh] lg:mt-[-10vh] grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10 px-4 pt-10 sm:pt-20 text-black'>

        <div className='rounded-[3vh] mb-9 divone'>
        <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> <BiMessageDots className='w-8 h-8'/> </span> </h2>
        <h1 className='pl-9 pt-6 font-bold lg:text-3xl text-black' >Generel</h1>
        <h2 className='pl-9 pt-6 pb-[8vh] pcolor'> For general enquiries and feedback, email us at <br/> 
        <a href="mailto:brightjonathaninfor64@gmail.com" className=' underline text-blue-700'>support@hovorAd.inc</a></h2>
        </div>

        <div className='rounded-[3vh] mb-9 divone'>
        <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> <MdOutlineSupportAgent className='w-8 h-8'/> </span> </h2>
        <h1 className='pl-9 pt-6 font-bold lg:text-3xl text-black' >Support</h1>
        <p className='pl-9 pt-6 pb-[8vh] pcolor'>Already a client or don't have questions? Check <br/>  out our Ad Blogs <Link to='/' className='underline text-blue-700'>here</Link></p>
        </div>

        </div>
  
        <div className=' pb-[9vh] bg-gray-100 lg:m-[15vh] lg:mt-[-30vh] '>

         <div className='text-center '>
          <h1 className='pt-[15vh] text-4xl font-bold Tcolor'>Still have questions?</h1>
          <h2 className='pt-2 text-[10px] m-3 sm:text-xl numcolor'>We hoped the FAQs would help. Since they didn't, please fill this short form and <br/> we'd give you special attention as quickly as possible.</h2>
         </div>

         <div>
          
         <div className=" flex items-center justify-center">
       <div className="block p-6 rounded-lg w-[100vh]">
       <div className="form-group mb-6">
      <input type="text" className=" mt-[-2vh]  md:mt-[-2vh] lg:mt-[-3vh] form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        placeholder="Name" 
        name='user_name'
        value={user_name}
        onChange={onInputChange}
        />
    </div>

    <div className="form-group mb-6">
      <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Enter your email" 
        name='user_email'
        value={user_email}
        onChange={onInputChange}
        />
    </div>

    <div className="form-group mb-6">
      <textarea
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="message" 
      name='user_message'
      value={user_message}
      onChange={onInputChange}
      />
    </div>
   
    <button className="lg:mb-[10vh] w-full px-6 py-2.5 bg-slate-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg
      transition duration-150 ease-in-out" onClick={handleSubmit} > Send message </button> 

</div>
  </div>
    </div>
      </div>
          <Footer/>
</>
  )
}

export default Contact




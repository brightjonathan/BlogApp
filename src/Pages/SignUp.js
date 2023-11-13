import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg2 from '../assets/bg2.jpg';
import { toast } from "react-toastify";
import { auth } from '../Firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const initialState = {
  name:'',
  email: '',
  password: '',
  comfirmPassword: ''
};

const SignUp = ({setisAuth}) => {

  const navigate = useNavigate();

      //an object for loging in the admin panel
      const AdminName = 'Admin'
      const AdminEmail = 'brightjonathan9090@gmail.com'
      const AdminPassword = '60809070'


  const [formValue, setFormValue] = useState(initialState);
  const { name, email, password, comfirmPassword } = formValue;


  //targeting the input form
  const onInputChange = (e)=>{
    setFormValue({...formValue, [e.target.name]: e.target.value})
   }

   //functionality for Signing in
   const handlesubmit = async (e)=> {
    e.preventDefault();

    if (name !== AdminName || email !== AdminEmail || password !== AdminPassword) {
        return toast.error('Invalid Admin credentail')
    } else{
      if (password !== comfirmPassword){
        return toast.error('Admin password do not match ') 
      }else{
        try {
          if(name && email && password ){
           const {user} = await createUserWithEmailAndPassword(
            auth, email, password
           );
           await updateProfile(user, {displayName: `${name}`}) 
           navigate('/')
           toast.success('signUp successfully')
           localStorage.setItem('AdminIsAuth', true);
           setisAuth(true);
          }
        } catch (err) {
          toast.error('Admin Credentail already in use' )
          console.log(err)
        }
      }
    }
   }



  return (
    <>
      <section className='flex flex-col md:flex-row h-screen items-center'>
        <div className='bg-blue-700 hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen '>
            <img src={bg2} alt='Bgimage' className='w-full h-full object-cover' />
        </div>

        <div className='bg-white mt-0 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center'>
        <div className='w-full h-100 mt-1 block p-6 rounded-lg shadow-lg bg-white'>
        <h1 className="text-xs mt-[2rem] md:text-xl font-semibold "> Create your Admin account </h1>

        <form className="mt-4" onSubmit={handlesubmit}>

        <div className="mt-4">
            <label className="block text-gray-700"> Name </label>
            <input type="text" placeholder="Enter email"  className="w-full px-4 placeholder-shown:border-gray-500 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required 
            name='name'
            value={name}
            onChange={onInputChange}
            />
        </div>

        <div className="mt-4">
            <label className="block text-gray-700">email</label>
            <input type="email" placeholder="Enter email"  className="w-full px-4 placeholder-shown:border-gray-500 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required 
            name='email'
            value={email}
            onChange={onInputChange}
            />
        </div>

        <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" placeholder="Enter Password"  className="w-full px-4 placeholder-shown:border-gray-500 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
            name='password'
            value={password}
            onChange={onInputChange}
            />
        </div>

        <div className="mt-4">
            <label className="block text-gray-700"> comfirmPassword </label>
            <input type="password" placeholder="Enter Password"  className="w-full px-4 placeholder-shown:border-gray-500 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
            name='comfirmPassword'
            value={comfirmPassword}
            onChange={onInputChange}
            />
        </div>

        <button type='submit' className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">sign up</button>
        </form>

        <p className="mt-2"> already have an account? <Link to='/login' className="text-blue-500 hover:text-blue-700 font-semibold"> log in </Link> </p>

        </div>
        </div>
        </section>

    </>
  )
}

export default SignUp



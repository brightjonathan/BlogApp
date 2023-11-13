import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import bg from '../assets/bg.jpg';
import { auth } from '../Firebase-config';

const initialState = {
  email: '',
  password: '',
};

const Login = ({setuser, setisAuth}) => {

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
   const { email, password } = formValue;

    //targeting the input
    const onInputChange = (e) =>{
      setFormValue({...formValue, [e.target.name]: e.target.value});
     }

     //login functionality
     const handlesubmit = async (e)=>{
      e.preventDefault();

      try {
        if(email && password){
         const {user} = await signInWithEmailAndPassword(
          auth, email, password
         )
         setuser(user)
         localStorage.setItem('AdminIsAuth', true);
         setisAuth(true)
         toast.success('Login successfully')
         navigate('/')
        }
      } catch (err) {
        toast.error('Invalid Admin credentail')
        console.log(err)
      }
     }

  return (
    <div >
      <section className='flex flex-col md:flex-row h-screen items-center '>

        <div className='bg-blue-700 hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen' >
            <img src={bg} alt='Bgimage' className='w-full h-full object-cover '/>
        </div>

        <div className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center'>
         <div className='w-full h-100 block p-6 rounded-lg shadow-lg bg-white'>
        <h1 className="text-xs mt-[2rem] md:text-xl font-semibold"> Login to your Admin account </h1>

        <form className="mt-6" onSubmit={handlesubmit}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
             focus:border-blue-500 focus:bg-white focus:outline-none placeholder-shown:border-gray-500 " autoFocus autoComplete="true" required
             name='email'
             value={email}
             onChange={onInputChange}
             />
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" placeholder="Enter Password"  className="w-full px-4 py-3 placeholder-shown:border-gray-500 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
             name='password'
             value={password}
             onChange={onInputChange}
            />
          </div>
  
          {/* <div className="text-right mt-2">
            <Link to='#' className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"> Forgot Password? </Link>
          </div> */}
  
          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        
        <p className="mt-8"> Need an account? <Link to='/signup' className="text-blue-500 hover:text-blue-700 font-semibold"> Create an account </Link> </p>

         </div>
        </div>

       </section>
    </div>
  )
}

export default Login



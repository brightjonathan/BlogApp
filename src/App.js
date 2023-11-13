import { useState, useEffect } from 'react'; 
import './App.css';
import './Media-query.css';
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate} from 'react-router-dom';
import NarBar from './Components/NarBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PostEditBlog from './Pages/PostEditBlog';
import Detail from './Pages/Detail';
import PageNotFound from './Pages/PageNotFound';
import { auth } from './Firebase-config';
import { signOut } from 'firebase/auth';
import About from './Pages/About';
import Policy from './Pages/Policy';
import Contact from './Pages/Contact';
import Subscribers from './Pages/Subscribers';
import Messages from './Pages/Messages';
import Term from './Pages/Term';

const App = () => {

  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [isAuth, setisAuth] = useState(localStorage.getItem('AdminIsAuth'));

  //auth user with useEffect
  useEffect(()=>{
     auth.onAuthStateChanged((authUser) => {
      if (authUser){
        setuser(authUser);
      }else{
        setuser(null)
      }
     })
  },[user]);


  //functionality for logging out
  const logOut = () =>{
    signOut(auth).then(()=>{
      setuser(null);
      setisAuth(false)
      navigate('/login')
    })
  };


  return (
    <div>
      <NarBar user={user} logout={logOut} isAuth={isAuth} setisAuth={setisAuth} />
      <ToastContainer position='top-right'/>
      <Routes>
        <Route path='/' element={ <Home isAuth={isAuth} user={user} /> } />
        <Route path='/login' element={ <Login setuser={setuser} setisAuth={setisAuth}/>} />
        <Route path='/signup' element={<SignUp setisAuth={setisAuth} />} />
        <Route path='/post' element={<PostEditBlog isAuth={isAuth} />} />
        <Route path='/update/:id' element={<PostEditBlog isAuth={isAuth} />}/>
        <Route path='/detail/:id' element={ <Detail isAuth={isAuth} />}/>
        <Route path='/about' element={ <About  isAuth={isAuth} /> } />
        <Route path='/privacy_&_policies' element={ <Policy  isAuth={isAuth} />} />
        <Route path='/contact' element={ <Contact  isAuth={isAuth} />} />
        <Route path='/subscribers' element={ <Subscribers isAuth={isAuth}/>} />
        <Route path='/messages' element={ <Messages isAuth={isAuth}/> } />
        <Route path='/terms_&_condition' element={<Term isAuth={isAuth}/>} />
        <Route path='*' element={<PageNotFound isAuth={isAuth} />} /> 
      </Routes>

    </div>
  )
}

export default App;


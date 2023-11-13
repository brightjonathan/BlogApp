import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import BlogSection from '../Components/BlogSection';
import { getDocs, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import {db} from '../Firebase-config';
import Spinner from '../Components/Spinner';
import { toast } from "react-toastify";
import Tags from '../Components/Tags';
import MostPopular from '../Components/MostPopular';
import Trending from '../Components/Trending';
import Model from '../Components/Model';
import Footer from './Footer';



const Home = ({isAuth, user}) => {

  //functionality for the greeting 
  const hourNow = new Date().getHours();
  let greeting;
  if (hourNow >= 16) {
    greeting = 'Good evening';
  } else if (hourNow >= 12) {
    greeting = 'Good afternoon';
  } else if (hourNow >= 0) {
    greeting= ' Good morning';
  } else {
    greeting = 'Welcome';
  } 
 
    //functionality for the userName
    const userId = user?.uid;
    const userName= user?.displayName;


  const navigate = useNavigate();
  const [loading, setloading] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [tags, settags] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);

  //model state
  const [selectedImg, setselectedImg] = useState(null);


  //trending fuctionality
  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "HovorBlogPost");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(()=>{
    getTrendingBlogs();
      const getBlogs = onSnapshot(
        collection(db, 'HovorBlogPost'),
        (snapshot) =>{
          let list = []
          let tags = []
          snapshot.docs.forEach((doc)=>{
            tags.push(...doc.get('tags'))
            list.push({id: doc.id, ...doc.data()})
          });
          setBlogs(list)
          setloading(false)

          //getting unique tags
          const uniqueTags = [...new Set(tags)]
          settags(uniqueTags);
        }, (err)=>{
          console.log(err)
        }
      )

      return ()=>{
        getBlogs()
        getTrendingBlogs();
      }

  },[])



      //delete functionality
      const deletePost = async (id)=>{
        if (window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS ARTICLE ?')){
          try {
            const postDoc = doc(db, 'HovorBlogPost', id)
            await deleteDoc(postDoc)
            toast.success('Article deleted')
            //navigate('/post') 
          } catch (err) {
            console.log(err)
          }
        }
        
      }

  
  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);



  if(loading){
    return <Spinner />
  }

  return (
    <div className='mt-[10vh] lg:mt-[15vh]'>
      <div className='container-fluid pb-4 pt-4 padding'>
         <div className='container padding'>
         <h2 className=' text-2xl'> {userId ? (<p>{greeting}, <span className='font-bold italic'>{userName.toUpperCase()}</span> </p>) : (null) } </h2>
          <div className='row mx-0'>
          <Trending blogs={trendBlogs} />
          <div className='col-md-8 mt-[5vh]'>
            <BlogSection blogs={blogs} user={user} deletePost={deletePost} isAuth={isAuth} setselectedImg={setselectedImg} setBlogs={setBlogs} />
            { selectedImg && <Model selectedImg={selectedImg} setselectedImg={setselectedImg} /> }
          </div>
          <div className='col-md-3 mt-[5vh]'>
               <Tags tags={tags} />
               <MostPopular blogs={blogs} />
          </div>
          </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home



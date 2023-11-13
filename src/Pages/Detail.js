import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import MostPopular from '../Components/MostPopular';
import Tags from '../Components/Tags';
import {db} from '../Firebase-config'
import Footer from './Footer';

const Detail = ({isAuth}) => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [singleblog, setsingleblog] = useState(null);

  //useStae for getting the tags and Most popular thread in the details section
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  //getting the blog details 
  const getBlogDetail = async()=>{
    const docRef = doc(db, 'HovorBlogPost', id);
    const snapshot = await getDoc(docRef)
    setsingleblog(snapshot.data())
  }

  
  useEffect(()=>{
   id && getBlogDetail();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])


  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

//Fetching the blogs from the data base in detals section
  useEffect(()=>{
     const getBlogsData = async ()=>{
       const blogRef = collection(db, 'HovorBlogPost');
       const data = await getDocs(blogRef);
       setBlogs(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))

       let tags = [];
       data.docs.map((doc)=> tags.push(...doc.get('tags')));
       let uniqueTags = [...new Set(tags)];
       setTags(uniqueTags);
     };

     getBlogsData();

  },[])


  return (
    <div className='mt-[8vh] lg:mt-[15vh]' >
        <h2  className='text-3xl font-bold md:text-5xl text-center mt-4 text-slate-900 py-8 uppercase'>{singleblog?.title}</h2>
        <div >
        <img src={singleblog?.imgUrl} alt='imageUrl' className='mx-auto shadow-2xl bg-white' loading='lazy' />
      </div>
        
        <div className='container-fluid pb-4 pt-4 padding blog-single-content'>
          <div className='container padding'>
             <div className='row mx-0'>
                <div className='col-md-8'>
                  <span className='meta-info text-start'>
                    By <p className='author'> {singleblog?.author}</p> -&nbsp;
                    {singleblog?.timestamp.toDate().toDateString() }
                  </span>
                  <p className='text-start'> {singleblog?.paragraph1} </p>
                  <p className='text-start mt-6'> {singleblog?.paragraph2} </p>
                  <p className='text-start mt-6'> {singleblog?.paragraph3} </p>
                </div>
                <div className='col-md-3'>
                     <Tags tags={tags} />
                     <MostPopular blogs={blogs}/>
                </div>
             </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Detail



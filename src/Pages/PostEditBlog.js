import {useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { auth, db, storage} from '../Firebase-config'
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const initialState = {
  author: "Promoted",
  title: "",
  tags: [],
  trending: "no",
  category: "",
  paragraph1: "",
  paragraph2: "",
  paragraph3: "",
};


const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Business",
  "Health",
  "Music"
];


const PostEditBlog = ({isAuth}) => {


  const navigate = useNavigate();
  const {id} = useParams();

  const [formValue, setFormValue] = useState(initialState);
  const types = ['image/png', 'image/jpeg']; //file type
  const [imgfile, setimgFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { author, title, tags, trending, category, paragraph1, paragraph2, paragraph3 } = formValue;



  //useEffect for uploading an image
  useEffect(()=>{

    const uploadFile = ()=>{
      const name = new Date().getDate() * Math.floor(Math.random() * 2178634590)
      const storageRef = ref(storage, `HovorImagesOne/${imgfile.name + name}`);
      const uploadTask = uploadBytesResumable(storageRef, imgfile);
  
       uploadTask.on('state_changed', (snapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              //console.log("Upload is paused");
              break;
            case "running":
              //console.log("Upload is running");
              break;
            default:
              break;
          }
  
        }, (err)=>{
          console.log(err)
        }, ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
            setFormValue((prev)=> ({...prev, imgUrl: url}))
          })
        })
    }

    imgfile && uploadFile();

  },[imgfile])


//targeting the input fields
const onInputChange = (e)=>{
  setFormValue({...formValue, [e.target.name]: e.target.value})
}

//targetting the tags input
const handleTags = (tags) =>{
  setFormValue({ ...formValue, tags });
}

//targetting the ratio input
const handleTrending = (e) =>{
  setFormValue({ ...formValue, trending: e.target.value });
};

//targetting the category input
const onCategoryChange = (e) => {
  setFormValue({ ...formValue, category: e.target.value });
};


//validating the img file
const handleChange = (e) =>{
  let selected = e.target.files[0];
 
  if (selected &&  types.includes(selected.type)) {
    setimgFile(selected)
    toast.success('selected')
  }else{
    toast.error( 'Please Select an image File' )
  }  
}


//Handle the Submit functionality
const handleSubmit = async(e)=>{
  e.preventDefault();

  if (!id) {

    if (author === '' || title === '' || imgfile === null || tags.length === 0 || category === '' || paragraph1 === '' || paragraph2 === '' || paragraph3 === ''){
      toast.error('Please Fill in all the Input Field')
     }else{
       try {
         await addDoc(collection(db, 'HovorBlogPost'), {
           User : {
             name: auth.currentUser.displayName,
             email: auth.currentUser.email,
             id: auth.currentUser.uid
           },
           ...formValue,
           timestamp: serverTimestamp()
         })
         navigate('/')
         toast.success('Article Posted Successfully')
       } catch (err) {
         console.log(err)
       }
     }

  }else{
     
    try {
      await updateDoc(doc(db, "HovorBlogPost", id), {
        User : {
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          id: auth.currentUser.uid
        },
        ...formValue, 
        Updatedtimestamp: serverTimestamp()
      })
      toast.success('Article Updated Successfully')
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }
    
}

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

    //funtion for populating the data for updating
 const getSingleBlog = async ()=>{
  const docRef = doc(db, "HovorBlogPost", id)
  const snapshot = await getDoc(docRef)

  if(snapshot.exists()){
     //console.log(snapshot.data())
     setFormValue({...snapshot.data()})

  }else{
   console.log('no data exists')
  }
}


 useEffect(()=>{
   id && getSingleBlog();
     // eslint-disable-next-line react-hooks/exhaustive-deps
 },[id])



 

 
  return (
    <div className="mt-[15vh] flex items-center justify-center ">
    <div className="block p-6 rounded-lg shadow-2xl bg-white w-[100vh]">
      <h1 className='text-center font-bold mb-3 text-2xl'> {!id ? 'Create a  Blog' : 'Edit a Blog'}</h1>
  
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Author" 
        name='author'
        value={author}
        onChange={onInputChange}
        />
    </div>

    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Title" 
        name='title'
        value={title}
        onChange={onInputChange}
        />
    </div>

{/* 
    <div className='form-group mb-1 '>
      <TagsInput tags={tags}  placeHolder="Tags" onChange={handleTags} />
    </div> */}

    <div className="col-12 py-3"> 
    <ReactTagInput tags={tags} placeholder="Tags" onChange={handleTags} />
    </div>

    <div className="col-12 py-3">
      <select value={category} onChange={onCategoryChange} className="catg-dropdown" >
        <option>Please select category</option>
          {categoryOption.map((option, index) => (
            <option value={option || ""} key={index}> {option} </option>
          ))}
      </select>
    </div>

    
    <div className="col-12 py-6">
      <p className="trending">Is it trending blog ?</p>
      <div className="form-check-inline mx-2">
        <input type="radio" 
        className="form-check-input"
         value="yes" 
         name="radioOption" 
         checked={trending === "yes"}
         onChange={handleTrending} 
         />      
     <label htmlFor="radioOption" className="form-check-label"> Yes&nbsp; </label>
      <input type="radio" 
      className="form-check-input " 
      value="no" 
      name="radioOption" 
      checked={trending === "no"}
      onChange={handleTrending}
      />
      <label htmlFor="radioOption" className="form-check-label"> No </label>
      </div>
      </div>


    <div className="form-group mb-6">
      <textarea
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Paragraph one" 
      name='paragraph1'
      value={paragraph1}
      onChange={onInputChange}
      />
    </div>
 
    <div className="form-group mb-6">
      <textarea
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Paragraph two" 
      name='paragraph2'
      value={paragraph2}
      onChange={onInputChange}
      />
    </div>

    <div className="form-group mb-6">
      <textarea
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Paragraph three" 
      name='paragraph3'
      value={paragraph3}
      onChange={onInputChange}
      />
    </div>

    <input className="m-4" type="file"  onChange={handleChange}/>
   
    <button onClick={handleSubmit} className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
      transition duration-150 ease-in-out" disabled={progress !== null && progress < 100} > {!id ? 'Post' : 'Update'} </button>

</div>
  </div>
  )
}

export default PostEditBlog



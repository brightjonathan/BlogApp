import React from 'react';
import { Link } from 'react-router-dom';
import { excerpt } from '../Utility/Index';
import { auth } from '../Firebase-config';


const BlogSection = ({blogs, deletePost, user, isAuth, setselectedImg}) => {
  const userId = user?.uid;

  
  return (

    <div>
     <div className='blog-heading text-start py-2 mb-4 lg:mt-[10vh]'> Daily Articles on Your Business Promotion </div>
      {blogs?.map((item)=>(
        <div className='row pb-8  shadow-2xl mb-9 bg-white hover:bg-transparent' key={item.id}>
            <div className='col-md-5'>
               <div className='hover-blogs-img'>
                    <div className='blogs-img' onClick={()=> setselectedImg(item.imgUrl)}>
                      <img src={item.imgUrl} alt={item.title} loading='lazy' />  
                    </div>
               </div>
            </div>
            <div className='col-md-7 pt-7'>
               <div className='text-start'>
                  <h6 className='category catg-color'>{item.category}</h6>
                  <span className='title py-2 hover:underline hover:decoration-solid '> <Link to={`/detail/${item.id}`} > {item.title} </Link> </span>
                  <span className='meta-info'>
                     <p className='author'>{item.author}</p> -&nbsp; 
                     {item.timestamp.toDate().toDateString()}
                  </span>
               </div>
               <div className='short-description text-start'>
                   {excerpt(item.paragraph1, 120)}
               </div>
              <button className='btn btn-read'> <Link to={`/detail/${item.id}`}> Read More... </Link> </button> 
              <div style={{float: 'right'}}>
              <div className='mt-2'>
                {isAuth && userId === auth.currentUser.uid && (
                  <>
                  <button className='mr-4 pr-2 bg-slate-900 text-center p-1  shadow-2xl text-white' onClick={()=> { deletePost(item.id)}} >Delete</button>
                  <button className='mr-4 pr-2 bg-slate-900 text-center p-1 shadow-2xl text-white'> <Link to={`/update/${item.id}`}> Update </Link> </button>
                  </>
                )} 
              </div> 
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default BlogSection



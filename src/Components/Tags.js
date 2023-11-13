import React from 'react'

const Tags = ({tags}) => {
  return (
    <div>
      <div>
        <div className='blog-heading text-start py-2 mb-4 lg:mt-[10vh]'> Tags</div>
      </div>
      <div className='tags'>
         {tags?.map((tag, index)=>(
             <div className='tag'  key={index}> 
             <h3>&#x23;{tag.toLowerCase()}</h3>
             </div>
         ))}
      </div>
    </div>
  )
}

export default Tags

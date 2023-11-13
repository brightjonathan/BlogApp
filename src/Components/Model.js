import React from 'react'
import { motion } from 'framer-motion'

const Model = ({selectedImg, setselectedImg }) => {
    
    const handleClick = (e) =>{
        if (e.target.classList.contains('backdrop')){
            setselectedImg(null)
        }
    }

  return (
    <motion.div className='backdrop z-10' onClick={handleClick}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
      <motion.img src={selectedImg} alt='enlarged pic' 
       initial={{ y: '-100vh'}}
       animate={{y : 0}}
      />       
    </motion.div>
  )
}

export default Model

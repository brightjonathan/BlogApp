import {useEffect} from 'react'
import about from '../assets/about.jpg'
import Footer from './Footer'
import {useNavigate} from 'react-router-dom'

const About = ({isAuth}) => {

   const navigate = useNavigate();

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
        <p className='text-4xl mt-[20vh] lg:text-7xl  font-extrabold'> Who we are and <br/> what we do  </p>
        <h1 className='pt-8 text-[14px] sm:text-xl Tcolor'> Providing borderless opporunity for businesses through</h1>
        <h1 className='sm:text-xl Tcolor text-[14px]'>advertising personally for you, so we'd love to hear from you.</h1>
     </div>
     <div className='ml-[2vh] lg:mt-[15vh]'>
        <img src={about} alt='possibilty' className='w-[100%]' loading='lazy' /> 
     </div>
    </div>
</div>

<div className='w-full h-[100%] pt-[10vh] flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
    <div className='m-[2vh] lg:mt-[10vh]'>
        {/* <img src='https://lazerpay.finance/_next/image?url=%2Fimages%2Four-vision.png&w=640&q=75' alt='imageurl' className='w-[100%] sm:w-[100%] lg:w-[80%]' loading='lazy' /> */}
     </div>
     <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 sm:ml-6 mt-[-20vh]' >
      <p  className='text-4xl mt-[20vh] lg:text-3xl  font-extrabold> our vision'> OUR VISION</p>
        <p className='pt-3'> Who we are and  what we do  </p>
        <h1 className='pt-3 text-[14px] sm:text-xl Tcolor'> Providing borderless opporunity for businesses through</h1>
        <h1 className='sm:text-xl Tcolor text-[14px]'>To provide innovative and effective integrated brand marketing and public relations solutions that help our clients grow their businesses and realize their marketing goals</h1>
     </div>
    </div>
</div>


<div className='w-full h-[100%] pt-[10vh] flex flex-col justify-between' >
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
     <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 sm:ml-6 mt-[-20vh]' >
        <h1 className='sm:text-xl Tcolor text-[14px]'>The world is moving fast. Africa should not be left behind.<br/> HovorAd is committed to promote and expose businesses <br/> to more opportunities.</h1>
     </div>

     <div className='m-[2vh] lg:mt-[10vh]'>
        {/* <img src='https://lazerpay.finance/_next/image?url=%2Fimages%2Fprof-2.png&w=640&q=75' alt='imageurl' className='w-[100%] sm:w-[100%] lg:w-[80%]' loading='lazy' /> */}
     </div>
    </div>
</div>


<div className='bgcolor'>
      <div className='m-[5vh] pt-[12vh]'>
        <h1 className=' text-xl Tcolor'> Our Core Values </h1> 
        <h2 className='font-bold text-xl md:text-3xl pt-5 Tcolor'> Our values are a way of living <br/> and creating, and not just <br/> words</h2>
      </div>

      <div className=' m-[5vh] mt-[-8vh] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 px-4 pt-10 sm:pt-20 text-black'>

        <div className='rounded-[5vh] mb-9 divone'>
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 1 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' >Teamwork</h1> 
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'>The only way ach other's skills to create ground-breaking business solutions.</p>
        </div>

        <div className='rounded-[5vh] mb-9 divcolor'> 
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 2 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > User Centric </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> It's people-first at HovorAd. We go above and beyond to ensure our users derive the best experience, always. </p>
        </div>

        <div className='rounded-[5vh] mb-9 divcoloretwo'>
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor'> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 3 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > ownership </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> Responsibility is a gift, and one we've accepted graciously. We identify each role keenly like it's our first, and execute like it's our last.</p>
        </div>

        <div className='rounded-[5vh] mb-9 divcoloretwo'>
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor'> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 4 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold  lg:text-3xl Tcolor' > Empowerment </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> Our goal is to empower small and large businesses through technology to scale and grow.</p>
        </div>

        <div className='rounded-[5vh]  mb-9 divone' >
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 5 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold sm:text-3xl  Tcolor' > Accountability </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'>We ensure that everyone is kept in the loop and no one is left out, especially not our users.</p>
        </div>

        
        <div className='rounded-[5vh] mb-9 divcolor' >
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 6 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > Transparency </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> Down to the tiniest detail, our products are designed with nothing to hide, just like us. No hidden charges. No sneaky fees. </p>
        </div>

        <div className='rounded-[5vh] mb-9 divcolor' >
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 7 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > Respect </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> Mutual respect and regard live here. Everyone's opinion counts and is highly rated - users and the HovorAd team. </p>
        </div>

        <div className='rounded-[5vh] mb-9 divcoloretwo'>
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor'> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 8 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > Communication </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'>  One thing about HovorAd? You will be kept in the loop. Communication is key to teamwork and growth for us. </p>
        </div>

        <div className='rounded-[5vh]  mb-9 divone' >
         <h2 className='pl-9 pt-9 font-bold text-xl numcolor '> <span className='box-border flex items-center justify-center p-2 bg-white rounded-full w-14 h-14 '> 9 </span> </h2>
         <h1 className='pl-9 pt-6 font-bold lg:text-3xl Tcolor' > Quality </h1>
         <p className='pl-9 pt-6 pb-[8vh] p-9 pcolor'> Every product has been created and delivered with high-quality finesse by the best team. Compromise is non-existent at HovorAd</p>
        </div>
      </div>
      </div>
    <Footer/>
    </>  
)}

export default About


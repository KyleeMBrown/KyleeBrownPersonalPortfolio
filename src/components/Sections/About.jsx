import React from 'react';
import MoviePageLayout from '../MoviePageLayout';
import { motion } from 'framer-motion';



function About() {
  return (
    <>
      
      <div id="About" class=" w-full ">
        <MoviePageLayout 
        bgUrl="public/Images/Cherry.jpeg"
        rowOne={[
          <div>
            <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div> 
          </div>,
        <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div>,
        <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div>
      ]}
        rowTwo={[
        <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div>,
        <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div>,
        <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-black h-[210px] rounded-xl hover:cursor-pointer "></motion.div>
      ]}
        />
          
          
     
          
    </div>

    </>
    

  )
}

export default About
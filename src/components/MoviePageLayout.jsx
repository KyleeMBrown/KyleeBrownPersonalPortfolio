import React from 'react';
import { motion } from 'framer-motion';



function MoviePageLayout( {rowOne,rowTwo, bgUrl}) {
  return (
    <>
   
        <motion.div animate={{opacity:[0,1]}} transition={{ delay:0.03, duration: 1}} style={{backgroundImage: `url(${bgUrl})` }} class="bg-[url('public/Images/Cherry.jpeg')] w-full h-full">
            <div class="sticky top-0 h-full w-full bg-gradient-to-tr from-pink-950 from-[1%]">
                <div class="w-full h-[430px] bg-yellow- ">

                </div>
                <nav class="  w-[35%]">
                        <ul class="flex tracking-wider justify-left">
                            <li class='inline-block hover:cursor-pointer m-2 text-white text-[15px] '>RECOMMENDED</li>
                          
                        </ul>
                    </nav>
                <div class='  w-full pt-5 h-[780px] bg-none border-t-2'>
                    <div class="flex justify-evenly w-full gap-2 ">
                        {rowOne}
                    </div>
                    <div class="flex mt-[13%] justify-evenly w-full gap-2">
                     {rowTwo}
                    </div>
               
    
                </div>
            </div>
          
            </motion.div>
    </>
    
    
    
  )
}

export default MoviePageLayout
import React from 'react';
import { motion } from 'framer-motion';



function MoviePageLayout( {rowOne,rowTwo, bgUrl, row2height, title, paragraph}) {
  return (
    <>
   
        <motion.div animate={{opacity:[0,1]}} transition={{ delay:0.03, duration: 1}} style={{backgroundImage: `url(${bgUrl})` }} class="bg-[url('public/Images/Cherry.jpeg')] w-full h-full">
            <div class="sticky top-0 h-full w-full bg-gradient-to-tr from-pink-950 from-[0.5%]">
                <div class="w-full flex items-center h-[450px] bg-gradient-to-b from-pink-950 from-[0.5%] ">
                    <div class=" ml-2   rounded-3xl w-[50%] " >
                        <h1 class='text-[75px] font-bold  tracking-wide w-full text-center text-red-200 font-sweet'>{title}</h1>
                        {paragraph}
                        <ul class="w-[15%] h-[45px] text-[18px] shadow-[inset_0_0_13px_1px_black] hover:shadow-none hover:drop-shadow-2xl flex items-center justify-center hover:cursor-pointer hover:scale-[102%] text-white rounded-lg bg-pink-950">
                            <div class="flex items-center">
                                <img src="public/Icons/icons8-play-48.png" alt="playbtn logo" class='inline w-[25px] mr-3' />
                            <li class="inline pr-2">Play</li>
                            </div>
                            
                        </ul>
                    </div>
                </div>
                <nav class="  w-[35%]">
                        <ul class="flex tracking-wider justify-left">
                            <li class='inline-block hover:cursor-pointer m-2 text-white text-[15px] '>RECOMMENDED</li>
                          
                        </ul>
                    </nav>
                <div class='  w-full pt-5  bg-none border-t-2'>
                    <div class="flex justify-evenly h-[380px] w-full gap-2 ">
                        {rowOne}
                    </div>
                    <div style={{height: row2height}} class="flex  mt-[0%] justify-evenly w-full gap-2">
                     {rowTwo}
                    </div>
               
    
                </div>
            </div>
          
            </motion.div>
    </>
    
    
    
  )
}

export default MoviePageLayout
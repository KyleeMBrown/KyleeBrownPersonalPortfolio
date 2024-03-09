import React from 'react';
import MoviePageLayout from '../MoviePageLayout';
import { motion } from 'framer-motion';



function About() {
  return (
    <>
      
      <div id="About" class=" w-full ">
        <MoviePageLayout 
        title='Welcome to the About Page!'
        ttlSize='75px'
        ttlFont='sweet'
        paragraph = {[      <div class="text-center pb-2  text-white bg-green- "> <div class="backdrop-blur-lg">Hi! My name is Kylee Brown, and I am a first generation student majoring in Computer Science.
        I was born in Haiti and was adopted by a loving family in Illinois. When I am passionate about something in my life I put my everything into  it nothing less.
        I built and designed this portfolio website in the likes of a streaming platform to showcase my UI skills while also integrating a longtime hobbie of mine, binge watching.
         I'm excited to see how much I can grow and where my career takes me </div><br />Thanks for stopping by! <br />~Kylee </div>]}

        bgUrl="public/Images/Cherry.jpeg"

        rowOne={[
            <div class="w-[28%]">
            <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('public/Images/Computerdesk.jpg')] bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div>
            <div class="text-white ">
              <h1 class= "ml-1 mt-2 pb-2 text-left text">What My Future Looks Like</h1>
              <p class='  p-1 leading-[22px] flex items-center text-[14px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-center flex-wrap break-words  '>
                My interests in technology span a number of subfields including Bionformatics, 
                Data Analytics, Full-Stack Engineering, Machine Learning, and Game Development. </p>
            </div>
            
            </div>
          ,
          
          <div class="w-[28%]">
          <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('public/Images/Logic.jpg')] bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div>
          <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text">Why I Chose to Persue a Career in Tech</h1>
            <p class=' p-1 leading-[22px] text-[14px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[38%] hover:bg-opacity-[48%] hover:scale-[102%]  transition-all rounded-md text-center flex-wrap break-words  '>
              Eversince I was introduced to logic puzzles in the 4th grade I have been fascinated with testing the logical and analytical side of my brain. Years later, I took my love for logistics and analytics and
              persued medicine with a focus in Neuroscience. After my first semester I quickly realized that I would enjoy a career that required less hands-on work but with the same type of challenging nature, 
              which lead me to Computer Science</p>
          </div>
          
          </div>,
           <div class="w-[28%]">
           <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('public/Images/Goals.jpg')] bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div>
           <div class="text-white ">
             <h1 class= "ml-1 mt-2 pb-2 text-left">My Career Goals</h1>
             <p class=' p-1 pl-2 leading-[22px] text-[14px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[38%] hover:bg-opacity-[48%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
              <li>Work my way up to a Senior Level position</li>
               <li>Work with and mentor kids interested in STEM</li>
               <li>Persue my Masters or PHD </li>
               <li>Work with a team of Computer Scientists/Engineers</li>
               
            </p>
           </div>
           
           </div>
      ]}
    
        />
          
          
     
          
    </div>

    </>
    

  )
}

export default About
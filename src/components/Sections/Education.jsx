import React from 'react'
import MoviePageLayout from '../MoviePageLayout'
import { motion } from 'framer-motion';

function Education() {
  return(
    <>
    <div  class="w-full">
        <MoviePageLayout
        bgUrl="/Images/Books.jpeg"

        title="Welcome to the Education Page!"
        ttlSize='42px'
        ttlFont='varsity'
       
        ttlShadow="2px 1px 1px black"
        paragraph = {
          <div class="text-center pb-2  text-white"> 
            <div class="backdrop-blur-lg">I'm attending SNHU Online persuing my <span class="text-pink-300 font-bold"> BS in Computer Science with a concentration in Software Engineering</span>. I began attendance in 2022 and have an expected graduation date of 2026.
            <div class='text-left'>
              <br />Upcoming Courses: 
                <li>Software Development Lifecycle</li>
                <br/>Current GPA: <p class=" text-green-500"> 3.39</p>
            </div>
            
            </div>
          </div>
        }

        rowOne={[
         <div class="w-[28%] max-[760px]:w-full ">
           <a className="w-full h-full cursor-pointer"href="https://github.com/KyleeMBrown/CornerGrocerProgram?tab=readme-ov-file"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/CornerGrocerProj.png')] cursor-pointer bg-white bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div></a>
          <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text"><span className="text-yellow-300">C++</span> OOP Project: Corner Grocer <br></br><a className="underline" href="https://github.com/KyleeMBrown/CornerGrocerProgram?tab=readme-ov-file">Source Code</a></h1>
            <p class='  p-1 leading-[22px] flex items-center text-[14px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-center flex-wrap break-words  '>
            This is a project I completed during my Object Oriented Programmmng course while persuing my Bachelors in Computer Science with a concentration in Software Engineering at Southern New Hampshire University
<br></br><br></br><a className="underline" href="https://github.com/user-attachments/files/19079179/Project.3.Kylee.Brown.1.pdf">Summary of Project</a>  </p>
          </div>
          
          </div>,
          <div class="w-[28%] max-[760px]:w-full">
            <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/snhu_logo_new.png')] bg-white bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div>
            <div class="text-white ">
              <h1 class= "ml-1 mt-2 pb-2 text-left text">Why I chose SNHU Online</h1>
              <p class='  p-1 leading-[22px] flex items-center text-[14px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-center flex-wrap break-words  '>
                Attending class online was the best choice I could have made for my academic career financially and mentally. The online environment has taught me to be more of an independent learner which is a crucial skill in
                Computer Science.   </p>
            </div>
            
            </div>,
            <div class="w-[28%] max-[760px]:w-full">
                <motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/DreamBig.jpeg')]  bg-cover bg-center h-[210px] rounded-xl hover:cursor-default hover:drop-shadow-2xl "></motion.div>
                    <div class="text-white ">
                      <h1 class= "ml-1 mt-2 pb-2 text-left text">SNHU Achievements</h1>
                      <p class=' pl-4 p-1 leading-[22px] items-left text-[16px] overflow-y-scroll h-[100px] no-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md  flex-wrap break-words  '>
                      Honor Roll:
                      <li>22 term 1</li>  
                      <li>24 term 2</li>  
                       <li>24 term 3</li>
                       <li>24 term 4</li>
                       <li>24 term 5</li>
                        </p>
                    </div>
                    
            </div>
             
               
        ]}
        />
    </div>
    
    </>
  
  )
  
}



export default Education
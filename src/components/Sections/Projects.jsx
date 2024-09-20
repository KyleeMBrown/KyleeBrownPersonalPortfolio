import React from 'react'
import {motion} from 'framer-motion'
import MoviePageLayout from '../MoviePageLayout'

function Projects() {
  return (
    <div  class="w-full ">
    <MoviePageLayout
    bgUrl="/Images/pinkCheck.jpeg"

    title="Welcome to the Projects Page!"
    ttlSize='50px'
    ttlFont='organical'
   
    ttlShadow="5px 5px 10px black"
    paragraph = {
    <div class="text-center pb-2  text-white"> 
        <div class="backdrop-blur-lg">Below are all of my personal projects with links to their github repositories. My projects are also displayed on my <span></span>  
        <a href="https://www.linkedin.com/in/kylee-brown-7167b9274/details/projects/" target="_blank" class="underline text-pink-300 hover:text-pink-400">LinkedIn</a> page! All 
        of these projects are personal and have no affiliation with my school. Valuable school related Projects will go onto the Education page.
        </div>

    </div>
      
    }

    rowOne={[
          <div class="w-[400px]" >
                <a href="https://github.com/KyleeMBrown/PersonalPortfolio" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/PersonalPortScreenshot.png')] bg-white bg-cover bg-center h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
                <div class="text-white ">
                    <h1 class= "ml-1 mt-2 pb-2 text-left text">Personal Portfolio</h1>
                    <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
                    <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                        <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                            <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                            <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                            <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-tailwind-css-48.png" alt="TW CSS" class="inline" />
                            <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-framer-motion.webp" alt="Framer Motion" class="inline w-[48px]" />
                            <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-react-24.png" alt="React" class="inline w-[48px]" />
                           
                        </div>
                        <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                        <p class="indent-3 mt-1">
                            I created this website because I wanted to showcase my coding skills in a creative, abstract way. I was also in need of a 
                            personal portfolio website to keep track of my work and progress throughout my career! This website is hosted on Netlify throgh CI/CD systems. <br />
                            Libraries Used: <span class=" text-orange-300">Tailwind, Framer Motion, React.JS</span> <br />
                        </p>
                      
                    </p>
                </div>
                
          </div>,
             <div class="w-[400px]" >
             <a href="https://github.com/KyleeMBrown/USOpioidDeathRateAnalysis" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/PolynomialRegPlot1.png')] bg-black bg-contain bg-no-repeat  bg-top h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
             <div class="text-white ">
                 <h1 class= "ml-1 mt-2 pb-2 text-left text">Python Regression models of US Opioid Death Rates</h1>
                 <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
                 <h1 class="ml-1 mb-1 ">Coding Languages & Libraries:</h1>
                     <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                         <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-python-94 (1).png" alt="Python" class="inline w-[45px]" />
                         <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-pandas-48.png" alt="Python Pandas" class="inline" />
                         <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-numpy-48.png" alt="Numpy" class="inline" />
                         <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-Matplotlib-logo.svg.png" alt="MatplotLib" class="inline w-[45px]" />
                         <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/Scikit-learn.png" alt="Scikit-learn" class="inline w-[45px]" />
                     </div>
                     <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                     <p class="indent-3 mt-1">
                         I wanted to do this project because I wanted more experience coding with Python and utilizing its libraries. Regression models interested me 
                         because of their capabilities to predict trends in data. The goal of this project was to <span class="text-green-400"> predict the  Opiod Death Rate for 
                         the year 2021 using the msot accurate model</span>. This project gave me a glimpse into machine learning models and some of the logic behind them. <br />
                          Libraries Used: <span class=" text-yellow-200">Pandas, Numpy, MatplotLib, Scikit-learn</span>
                     </p>
                   
                 </p>
             </div>
             
              </div>,

<div class="w-[400px]" >
<a href="https://github.com/KyleeMBrown/CRUD-BLOG-API" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/gradient-network-connection-background_23-2148865393.avif')] bg-black bg-cover bg-top h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
<div class="text-white ">
    <h1 class= "ml-1 mt-2 pb-2 text-left text">CRUD API for Blog Applications</h1>
    <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
    <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
        <div class="w-full flex items-center justify-evenly mb-1 mt-1">
              <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
              <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-mysql-50.png" alt="JS" class="inline" />
        </div>
        <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
        <p class="indent-3 mt-1">
        API Project for Blog Style Applications --- Tested with Postman!
             <br />
             Libraries Used: <span class=" text-orange-300"> Express.JS, Node.js, mysql2, nodemon</span>  
        </p>
      
    </p>
</div>

 </div>

             
    ]}
    row2height={'380px'}
    rowTwo={[

        <div class="w-[400px]" >
        <a href="https://github.com/TechFataleFreelance/KB-s-Kustomz" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/KBsKustomz.png')] bg-black bg-contain bg-no-repeat  bg-top h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
        <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text">KB's Kustom'z Car Service Website</h1>
            <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
            <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-tailwind-css-48.png" alt="TW CSS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-framer-motion.webp" alt="Framer Motion" class="inline w-[48px]" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-react-24.png" alt="React" class="inline w-[48px]" />
                </div>
                <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                <p class="indent-3 mt-1">
                    I created this website for a local company to advertise and showcase their services. This website is maintained by a CI/CD system trhough Netlify, 
                    and the client periodically sends me assets in order to keep the website up to date. <br />
                    Libraries Used: <span class=" text-orange-300">Tailwind, Framer Motion, React.JS</span>  <br />
                    <a href="https://kbs-kustomz.netlify.app/#/" target='_blank' class="text-blue-200 underline">Link to Website Here</a> 
                </p>
              
            </p>
        </div>
        
         </div>,
        

        <div class="w-[400px]" >
        <a href="https://github.com/KyleeMBrown/Todo-List" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/TodoListProject.png')] bg-black bg-cover bg-top h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
        <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text">React To-Do List</h1>
            <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
            <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-css-48.png" alt="JS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-react-24.png" alt="React" class="inline w-[48px]" />
                </div>
                <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                <p class="indent-3 mt-1">
                    I wanted to do this project to get a better understanding of how reacts useState hook is used. I also used this project to understand react props and how they can be 
                    inherited by child components. This project was a turning point for me in terms of getting to know the React library!
                     <br />
                     Libraries Used: <span class=" text-orange-300"> React.JS</span>  
                </p>
              
            </p>
        </div>
        
         </div>
        
        /*<div class="w-[400px]" >
        <a href="https://github.com/KyleeMBrown/Austin-Zickur-PErsonal-Portfolio" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/AustinZpersonalPort.png')] bg-black bg-cover bg-top h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
        <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text">Personal Portfolio Website for my boyfriend</h1>
            <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
            <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-css-48.png" alt="JS" class="inline" />
                    
                </div>
                <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                <p class="indent-3 mt-1">
                    I created a personal portfolio website for my boyfriend so he could showcase his work. I created this website using only Javascript and Html 
                    and this website is hosted and maintained using a CI/CD system through Netlify <br />
                    
                    <a href="https://austin-zickur-personal-portfolio.netlify.app/" target='_blank' class="text-blue-200 underline">Link to Website Here</a> 
                </p>
              
            </p>
        </div>
        
    </div>*/,
          <div class="w-[400px]" >
          <a href="https://github.com/KyleeMBrown/Memory-Game" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/MemGameproje.png')]  bg-cover bg-center  h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
          <div class="text-white ">
              <h1 class= "ml-1 mt-2 pb-2 text-left text">Fully Responsive Memory Game</h1>
              <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
              <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                  <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                  <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                        <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                        <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-css-48.png" alt="CSS" class="inline" />
                       
                  </div>
                  <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                  <p class="indent-3 mt-1">
                  I built this project in order to strengthen my javascript data structures and algorithms as well as iterations!
                  I combined my current two favorite things for this project: coding & Adventure Time!<br />
                  <a href="https://themed-mem-game.netlify.app/" target='_blank' class="text-pink-400 underline">Play Game Here</a>
                     
                  </p>
                
              </p>
          </div>
          
           </div>
    ]}
    row3height={'380px'}
    rowThree={[
        <div class="w-[400px]" >
        <a href="https://github.com/KyleeMBrown/Weather-Web-App" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/weatherappProj.png')]  bg-contain bg-center  h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
        <div class="text-white ">
            <h1 class= "ml-1 mt-2 pb-2 text-left text">Responsive Weather App using <span class="text-teal-300"> openweather API</span></h1>
            <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
            <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-css-48.png" alt="CSS" class="inline" />
                      <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/Openweather.png" alt="OpenWeatherAPI" class="inline  w-[43px]" />
                      
                </div>
                <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                <p class="indent-3 mt-1">
                created this weather app as a way to have my own quick way in finding the weather rather than going on weather.com. I also used this project to get a better understanding of API's by using the fetch JS method <br />
                    
                
                </p>
              
            </p>
        </div>
        
         </div>,
          <div class="w-[400px]" >
          <a href="https://github.com/KyleeMBrown/BudgetCalculator" target="_blank"><motion.div whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} class="w-[400px] bg-[url('/Images/BudgetCalcProj.jpeg')]  bg-contain bg-no-repeat bg-center bg-pink-200 bg-opacity-60 h-[210px] rounded-xl hover:cursor-pointer hover:drop-shadow-2xl "></motion.div></a>
          <div class="text-white ">
              <h1 class= "ml-1 mt-2 pb-2 text-left text">JavaScript Budget Calculator</h1>
              <p class='  p-2 leading-[22px] flex text-[14px] overflow-y-scroll h-[100px] color-scrollbar bg-black bg-opacity-[35%] hover:bg-opacity-[45%] hover:scale-[102%]  transition-all rounded-md text-left flex-wrap break-words  '>
              <h1 class="ml-1 mb-1 ">Coding Languages:</h1>
                  <div class="w-full flex items-center justify-evenly mb-1 mt-1">
                  <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-html-48.png" alt="HTML" class="inline" />
                        <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-javascript-48.png" alt="JS" class="inline" />
                        <motion.img whileHover={{scale:1.03}} transition={{duration:0.5, type:'spring'}} src="/Icons/icons8-css-48.png" alt="CSS" class="inline" />
                        
                  </div>
                  <h1 class="ml-1 w-full mb-1">Project Summary:</h1> 
                  <p class="indent-3 mt-1">
                  I made this project so me and boyfriend, who are both in college, could keep track of our finances and create a plan based off of the information 
                  the calculator generates. I wanted something different than the calculators i've used previously, and I wanted to be able to see the numbers changing and 
                  adjusting as I calculated and to be able to go back and manipulate my inputs in order to more quickly view the changes. I also wanted the amount saved as well as 
                  amount left over to be shown. Lastly, I wanted 
                  to include a summary of what the calculator calculated, and I also wanted to include calculations of 5% above or below the selected savings amount in order to showcase what 
                  a little difference could make in their plan <br />
                      
                  
                  </p>
                
              </p>
          </div>
          
           </div>,
          <div style={{visibility:'hidden'}} class="w-[400px]" ></div>
    ]}
    />
</div>

  )
}

export default Projects
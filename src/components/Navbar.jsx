import React from "react";
import {NavHashLink} from "react-router-hash-link";
import { motion } from "framer-motion"


const NavBar = () => {

    return(
        <>
        <motion.nav animate={{opacity:[0,1]}} transition={{duration:7, delay:0.5}} class=" flex items-center p-4 pt-8 justify-between ">
            <ul class=" justify-between items-center w-[60%] flex text-white text-[15px] ">
                <motion.li whileHover={{ scale:1.05}} transition={{type:"spring"}} class=" font-curly text-[20px] text-center font-light bg-gradient-to-r from-pink-800 to-pink-700 p-[12px] rounded-[28px] shadow-lg ">KB Portfolio</motion.li>
            <NavHashLink class="active:text-gray-600" smooth to="/" ><img src="public/Icons/icons8-home-48 (1).png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">Home</li></NavHashLink>  
              <NavHashLink smooth to="/About" ><img src="public/Icons/icons8-about-48.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">About</li></NavHashLink>  
              <NavHashLink smooth to="/Education" ><img src="public/Icons/icons8-education-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block'>Education</li></NavHashLink>  
              <NavHashLink smooth to="/Projects" ><img src="public/Icons/icons8-projects-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Projects</li></NavHashLink>
              <NavHashLink smooth to="/Skills" ><img src="public/Icons/icons8-skills-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Skills</li></NavHashLink>
            </ul>
            <div class="flex items-center">
                <h1 class="text-white pr-6">Profile</h1>
                <motion.img whileHover={{scale:1.05, rotate:90}} src="public/Images/Tom and Jerry.jpeg" alt="" class="bg-white w-[65px] hover:cursor-pointer h-[65px] rounded-[50px] "/>
            </div>
           
        </motion.nav>
       
        </>
    )
}

export default NavBar
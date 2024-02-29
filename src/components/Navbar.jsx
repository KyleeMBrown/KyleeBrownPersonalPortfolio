import React from "react";
import {NavHashLink} from "react-router-hash-link";
import { motion } from "framer-motion"


const NavBar = () => {

    return(
        <>
        <motion.nav animate={{opacity:[0,1]}} transition={{duration:7, delay:0.5}} class=" flex items-center p-4 pt-8 justify-between ">
            <ul class=" justify-between items-center w-[60%] flex text-white text-[15px] ">
                <motion.li whileHover={{ scale:1.05}} transition={{type:"spring"}} class=" font-curly text-[20px] text-center font-light bg-gradient-to-r from-pink-800 to-pink-700 p-[12px] rounded-[28px] shadow-lg ">KB Portfolio</motion.li>
            <NavHashLink class="active:text-gray-600" smooth to="/" ><li>Home</li></NavHashLink>  
              <NavHashLink smooth to="/About" ><li>About</li></NavHashLink>  
              <NavHashLink smooth to="/Education" ><li>Education</li></NavHashLink>  
              <NavHashLink smooth to="/Projects" ><li>Projects</li></NavHashLink>
              <NavHashLink smooth to="/Skills" ><li>Skills</li></NavHashLink>
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
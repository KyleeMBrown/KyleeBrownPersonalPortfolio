import React from "react";
import {NavHashLink} from "react-router-hash-link";
import { motion } from "framer-motion"

const NavBar = () => {

    return(
        <>
        <motion.nav animate={{opacity:[0,1]}} transition={{duration:10}} class="flex p-4 pt-8 justify-between ">
            <ul class=" justify-between w-[60%] flex text-white text-[15px] ">
                <li class=" font-curly text-[23px] text-center font-light text-pink-300">Portfolio</li>
            <NavHashLink smooth to="/" ><li>Home</li></NavHashLink>  
              <NavHashLink smooth to="/About" ><li>About</li></NavHashLink>  
              <NavHashLink smooth to="/Education" ><li>Education</li></NavHashLink>  
              <NavHashLink smooth to="/#About" ><li>Projects</li></NavHashLink>
              <NavHashLink smooth to="/#About" ><li>Skills</li></NavHashLink>
            </ul>
            <div class="flex">
                <h1 class="text-white pr-5">Visitor</h1>
                <img src="" alt="" class="bg-white w-10 h-10"/>
            </div>
           
        </motion.nav>
       
        </>
    )
}

export default NavBar
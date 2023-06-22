import { motion } from "framer-motion"
import DevMenu from "./DevMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react'
import About from "./About"
import Skills from "./Skills";
import Work from "./Work";

const Development = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(true)
    document.documentElement.classList.remove("photo");
    document.documentElement.classList.add("dev");

    return (
        <motion.article initial={{opacity: 0, x: -1000 }} animate = {{opacity:1, x: 0 }} exit={{ opacity: 0, x: -1000}}>
            <div className="card dev-card">
                <About/>
                <Skills/>
                <Work/>
            </div>
        </motion.article>
    )
}

export default Development  
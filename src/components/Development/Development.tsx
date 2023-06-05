import { motion } from "framer-motion"
import DevMenu from "./DevMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react'

const Development = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(true)
    document.documentElement.classList.remove("photo");
    document.documentElement.classList.add("dev");

    return (
        <motion.article initial={{opacity: 0, x: -1000 }} animate = {{opacity:1, x: 0 }} exit={{ opacity: 0, x: -1000}}>
            <div className="card dev-card">
                <DevMenu />
                <Outlet />
            </div>
        </motion.article>
    )
}

export default Development  
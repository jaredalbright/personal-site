import { motion } from "framer-motion"
import DevMenu from "./DevMenu";

const Development = () => {

    document.documentElement.classList.remove("photo");
    document.documentElement.classList.add("dev");

    return (
        <motion.div initial={{opacity: 0, x: -1000 }} animate = {{opacity:1, x: 0 }} exit={{ opacity: 0, x: -1000}}>
            <div className="card dev-card">
                <DevMenu />
            </div>
        </motion.div>
    )
}

export default Development  
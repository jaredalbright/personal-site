import { motion } from "framer-motion"
import './../../index.css'
const Photography = () => {

    document.documentElement.classList.remove("dev");
    document.documentElement.classList.add("photo");

    return (
        <motion.article initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }}>
            <div className="card photo-card">
                <h1>Hey! This part isn't done yet</h1>
                <h3>Check back soon and maybe it'll be ready</h3>
            </div>
        </motion.article>
    )
}

export default Photography
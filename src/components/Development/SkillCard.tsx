import { motion } from "framer-motion"

interface Props {
    name: string,
    image: string
}

const SkillCard= ({name, image}: Props) => {
    return (
        <motion.div whileHover={{scale: 1.15}}>
        <div className="skillcard">
            <img src={image} />
            <h2 id="skillText">{name}</h2>
        </div>
        </motion.div>
    )
}

export default SkillCard  
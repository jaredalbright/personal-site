import { motion } from "framer-motion"

interface Props {
    name: string,
    image: string
}

const SkillCard= ({name, image}: Props) => {
    return (
        <div className="skillcard">
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}

export default SkillCard  
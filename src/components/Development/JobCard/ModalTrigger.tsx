import { useState, MouseEventHandler} from "react";
import { motion } from "framer-motion";

interface Props {
  handleOpen: MouseEventHandler<Element>,
  short: string,
  image: string
}  

const Trigger = ({ handleOpen, short, image }: Props) => {
  return (
    <div className="menus">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="job-button"
        onClick={handleOpen}
      >
      <div className="job-button-align">
        <img src={image} className="workButtonImage"/>
        <h2>{short}</h2>
      </div>
      </motion.button>
    </div>
  )
}

export default Trigger;
import { useState, MouseEventHandler} from "react";
import { motion } from "framer-motion";

interface Props {
  handleOpen: MouseEventHandler<Element>,
  short: string,
  stack: string
}  

const Trigger = ({ handleOpen, short, stack }: Props) => {
  return (
    <div className="menus">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="job-button"
        onClick={handleOpen}
      >
      <div className="job-button-align">
        <h2>{short}</h2>
        <h3>{stack}</h3>
      </div>
      </motion.button>
    </div>
  )
}

export default Trigger;
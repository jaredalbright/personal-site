import { useState, MouseEventHandler} from "react";
import { motion } from "framer-motion";

interface Props {
  handleOpen: MouseEventHandler<Element>,
}  

const Trigger = ({ handleOpen }: Props) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="job-button"
        onClick={handleOpen}
      >
        Launch modal
      </motion.button>
    </div>
  )
}

export default Trigger;
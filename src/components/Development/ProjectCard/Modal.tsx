import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { MouseEventHandler } from "react";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

interface Props {
    handleClose: MouseEventHandler<Element>,
    text: string,
    stack: string,
    header: string,
    projectLink: string,
    projectDesc: string
}  

const Modal = ({ handleClose, text, stack, header, projectLink, projectDesc }: Props) => {
    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1 className="workHeader">{header}</h1>
            <h2>{stack}</h2>
            <p className="workText">{text}</p>
            {projectLink ? <a href={projectLink} target="_blank" rel="noopener">Link to Project</a> : <h4>{projectDesc}</h4>}
            <button onClick={handleClose} className="close">Close</button>
          </motion.div>
      </Backdrop>
    );
  };

  
export default Modal;
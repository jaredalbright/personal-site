import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
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
    year: string,
    header: string,
    image: string
}  

const Modal = ({ handleClose, text, year, header, image }: Props) => {
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
            <img src={image} className="workImage menus"/>
            <h1 className="menus workHeader">{header}</h1>
            <h2 className="menus">{year}</h2>
            <p className="workText">{text}</p>
            <button onClick={handleClose}>Close</button>
          </motion.div>
      </Backdrop>
    );
  };

  
export default Modal;
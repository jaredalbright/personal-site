import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
    onClick: MouseEventHandler<HTMLDivElement>,
    children: ReactNode 
}

const Backdrop = ({ onClick, children }: Props) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
  );
};

export default Backdrop;
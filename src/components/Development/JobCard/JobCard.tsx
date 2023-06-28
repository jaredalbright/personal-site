import { AnimatePresence, motion } from "framer-motion"
import Modal from "./Modal"
import { useState } from "react";
import Trigger from "./ModalTrigger";


interface Props {
    name: string,
    image: string,
    description: string
}

//{name, image, description}: Props

const JobCard = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <div>
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
    </div>
        <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            mode="wait"
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
        >
            {modalOpen && <Modal handleClose={close} text={"Fuck"} />}
        </AnimatePresence>
        </div>
    )
}

export default JobCard  
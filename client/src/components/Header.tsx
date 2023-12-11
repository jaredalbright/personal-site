import '../index.css'
import { useState } from 'react'
import { TfiCamera, TfiDesktop } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [devClass, setDevClass] = useState("dp-option selected");
    const [photoClass, setPhotoClass] = useState("dp-option non-selected");
    const [pause, setPause] = useState(false)
    const navigate = useNavigate();

    const changeDev = () => {
        if (pause == false) {
            setPause(true);
            setDevClass("dp-option selected");
            setPhotoClass("dp-option non-selected");
            navigate("/");
            setTimeout(()=>{
                setPause(false);
                }, 610)
        }
    }

    const changePhoto = () => {
        if (pause == false) {
            setPause(true);
            setPhotoClass("dp-option selected");
            setDevClass("dp-option non-selected");
            navigate("/photo");
            setTimeout(()=>{
                setPause(false);
                }, 610)
        }
    }

    return (
        <div>
            <div className="dp-menu menus">
                <h1 id="name">Jared Albright</h1>
                <div className="dp-option-group">
                    <button id="devBtn" className={devClass} onClick={() => changeDev()}><TfiDesktop className="dp-icon" /><h2>development</h2></button>
                    <button id="photoBtn" className={photoClass} onClick={() => changePhoto()}><TfiCamera className="dp-icon" /><h2>photos</h2></button>
                </div>
            </div>
        </div>
    )
}

export default Header
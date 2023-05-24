import '../index.css'
import { useState } from 'react'
import { TfiCamera, TfiDesktop } from 'react-icons/Tfi';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [devClass, setDevClass] = useState("dp-option selected");
    const [photoClass, setPhotoClass] = useState("dp-option non-selected");
    const navigate = useNavigate();

    const changeDev = () => {
        setDevClass("dp-option selected");
        setPhotoClass("dp-option non-selected");
        navigate("/");
    }

    const changePhoto = () => {
        setPhotoClass("dp-option selected");
        setDevClass("dp-option non-selected");
        navigate("/photo");
    }

    return (
        <div>
            <div className="dp-menu menus">
                <h1 id="name">Jared Albright</h1>
                <div className="dp-option-group">
                    <button className={devClass} onClick={() => changeDev()}><TfiDesktop className="dp-icon" /><h2>development</h2></button>
                    <button className={photoClass} onClick={() => changePhoto()}><TfiCamera className="dp-icon" /><h2>photos</h2></button>
                </div>
            </div>
        </div>
    )
}

export default Header
import qrCode from '../assets/qr.png';
import { useState } from 'react';

const Qrmodal = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <>
        <a className="qr-toggle" onClick={handleClick}>
            QR link to this app
        </a>
        {active && <div className="qr-modal">
            <img src={qrCode} alt="QR Code" height="320px" onClick={handleClick}/>
        </div>}
        </>
    )
}

export default Qrmodal;
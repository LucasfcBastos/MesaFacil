import { useNavigate } from 'react-router-dom';

import '../../styles/components/btn.css'

function BtnImgNavigate({ text, link, style, img}) {

    const navigate = useNavigate();

    function redirect() {
        navigate(`${link}`)
    }

    return (
        <>
            <button id='auth' className={`${style}`} onClick={redirect}>
                <img src={img} />
                <p>{text}</p>
            </button>
        </>
    );
}

export default BtnImgNavigate;
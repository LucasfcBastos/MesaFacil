import { useNavigate } from 'react-router-dom';

import '../../styles/components/btn.css'

function BtnNavigate({ text, link }) {

    const navigate = useNavigate();

    function redirect() {
        navigate(`${link}`)
    }

    return (
        <>
            <button id='navigate' onClick={redirect}>
                <p>{text}</p>
            </button>
        </>
    );
}

export default BtnNavigate;
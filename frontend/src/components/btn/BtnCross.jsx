import { useNavigate } from 'react-router-dom';

import '../../styles/components/btn.css'

function BtnCross({ link }) {

    const navigate = useNavigate();

    function redirect() {
        navigate(`${link}`)
    }

    return (
        <>
            <button id='cross' onClick={redirect}>
                <p>X</p>
            </button>
        </>
    );
}

export default BtnCross;
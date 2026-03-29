import Button from "../components/btn/BtnNavigate";
import NavBar from "../components/nav"

import "../styles/pages/homepage.css"

function NotFound() {
    return (
        <>
            <NavBar />
            <div className="start">
                <div className="centralize">
                    <h1>404</h1>
                    <p>Página não encontrada</p>
                    <Button text={"Voltar para Home Page"} link="/" />
                </div>
            </div>
        </>
    );
}

export default NotFound;
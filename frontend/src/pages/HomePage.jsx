import Button from "../components/btn/BtnNavigate";
import NavBar from "../components/nav"
import Footer from "../components/footer_notAuth"

import "../styles/pages/homepage.css"

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="start">
                <div className="centralize">
                    <h1 className="textVine">
                        UMA PLATAFORMA COMPLETA DE RESERVAS DE MESAS QUE CONECTA RESTAURANTES E CLIENTES EM UM SÓ LUGAR.
                    </h1>
                    <Button text={"Vamos Cadastrar"} link="/register" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
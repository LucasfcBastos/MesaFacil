import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import '../../styles/homepage.css'

function UserMy() {

    const api = [
        {
            name: "Buscar",
            link: "/client/restaurante",
            type: "",
            img: ""
        },
        {
            name: "Reservas",
            link: "/client/restaurante",
            type: "",
            img: ""
        },
        {
            name: "Perfil",
            link: "/client/my",
            type: "select",
            img: ""
        }
    ]

    return (
        <>
            <NavBar />
            <div className="start">
            </div>
            <Footer list={api} />
        </>
    );
}

export default UserMy;
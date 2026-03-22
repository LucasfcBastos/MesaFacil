import { useNavigate } from "react-router-dom"
import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"

import '../../styles/pages/profile.css'
import '../../styles/pages/section.css'

function UserReserva() {

    const api = [
        {
            name: "Mesas",
            link: "/restaurante/mesas",
            type: "",
            img: icon_mesa
        },
        {
            name: "Rerservas",
            link: "/restaurante/reservas",
            type: "select",
            img: icon_user
        },
        {
            name: "Perfil",
            link: "/restaurante/perfil",
            type: "",
            img: icon_user
        }
    ]

    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <>
            <NavBar />
            <div className="section profile">
                <div className="info_user">
                    <h1>Bem vindo {user?.name || "Restaurante"}</h1>
                </div>
            </div>
            <Footer list={api} />
        </>
    );
}

export default UserReserva;
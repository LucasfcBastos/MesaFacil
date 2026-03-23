import { useNavigate } from "react-router-dom"
import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"
import icon_reserva from "../../assets/svg/reserva.svg?react"

import '../../styles/homepage.css'

function UserMy() {

    const menuItems = [
        {
            name: "Buscar",
            link: "/restaurante/mesas",
            type: "",
            img: icon_mesa
        },
        {
            name: "Rerservas",
            link: "/restaurante/reservas",
            type: "",
            img: icon_reserva
        },
        {
            name: "Perfil",
            link: "/restaurante/perfil",
            type: "select",
            img: icon_user
        }
    ]

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        navigate("/")
    }

    return (
        <>
            <NavBar />
            <div className="start">
                <h1>Bem vindo {user?.name || "Consumidor"}</h1>
                <button style={{ width: "15em" }} onClick={handleLogout}>
                Sair
                </button>
            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserMy;
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"
import logo from "../../assets/svg/user.svg?react"

import '../../styles/homepage.css'

function UserMy() {

    const api = [
        {
            name: "Deshbord",
            link: "/client/restaurante",
            type: "",
            img: logo
        },
        {
            name: "Deshbord",
            link: "/client/restaurante",
            type: "",
            img: logo
        },
        {
            name: "Perfil",
            link: "/client/my",
            type: "select",
            img: logo
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
                <h1>Bem vindo {user?.name || "Restaurante"}</h1>
                <button style={{ width: "15em" }} onClick={handleLogout}>
                Sair
                </button>
            </div>
            <Footer list={api} />
        </>
    );
}

export default UserMy;
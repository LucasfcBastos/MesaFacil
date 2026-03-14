import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"
import logo from "../../assets/svg/user.svg?react"

import '../../styles/homepage.css'

function UserFilter() {

    const api = [
        {
            name: "Buscar",
            link: "/client/list/restaurates",
            type: "select",
            img: logo
        },
        {
            name: "Reservas",
            link: "/client/list/reservas",
            type: "",
            img: logo
        },
        {
            name: "Perfil",
            link: "/client/my",
            type: "",
            img: logo
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

export default UserFilter;
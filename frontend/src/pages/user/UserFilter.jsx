import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"
import icon_reserva from "../../assets/svg/reserva.svg?react"

function UserFilter() {

    const menuItems = [
        {
            name: "Buscar",
            link: "/client/list/restaurates",
            type: "select",
            img: icon_mesa
        },
        {
            name: "Rerservas",
            link: "/client/list/reservas",
            type: "",
            img: icon_reserva
        },
        {
            name: "Perfil",
            link: "/client/my",
            type: "",
            img: icon_user
        }
    ]

    return (
        <>
            <NavBar />
            <div className="start">
            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserFilter;
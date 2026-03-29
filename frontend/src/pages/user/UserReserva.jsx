import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"
import icon_reserva from "../../assets/svg/reserva.svg?react"

function UserReserva() {

    const reservas_on = [
        {
            name: "Nativas",
            entrada: "19:30",
            data: "25/09/2025",
            mesa: "05",
            estado: "GO",
            cidade: "Anapolis"
        },
        {
            name: "Nativas",
            entrada: "19:30",
            data: "25/09/2025",
            mesa: "05",
            estado: "GO",
            cidade: "Anapolis"
        },
        {
            name: "Nativas",
            entrada: "19:30",
            data: "25/09/2025",
            mesa: "05",
            estado: "GO",
            cidade: "Anapolis"
        }
    ]
    
    const menuItems = [
        {
            name: "Buscar",
            link: "/client/list/restaurates",
            type: "",
            img: icon_mesa
        },
        {
            name: "Rerservas",
            link: "/client/list/reservas",
            type: "select",
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
                {reservas_on.map((item) => (
                    <div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserReserva;
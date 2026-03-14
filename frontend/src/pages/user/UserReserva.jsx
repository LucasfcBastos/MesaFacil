import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"
import logo from "../../assets/svg/user.svg?react"

import '../../styles/homepage.css'

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
    
    const api = [
        {
            name: "Buscar",
            link: "/client/list/restaurates",
            type: "",
            img: logo
        },
        {
            name: "Reservas",
            link: "/client/list/reservas",
            type: "select",
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
                {reservas_on.map((item) => (
                    <div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <Footer list={api} />
        </>
    );
}

export default UserReserva;
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { IMaskInput } from "react-imask"
import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"
import icon_reserva from "../../assets/svg/reserva.svg?react"

import '../../styles/pages/profile.css';
import '../../styles/pages/section.css';

function UserMy() {
    
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)

    const menuItems = [
        {
            name: "Buscar",
            link: "/client/search",
            type: "",
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

    useEffect(() => {
        const loadCity = async () => {
            const response = await api.get(`/where/cities/${user.id_city}`)
            setCity(response.data)
        }

        loadCity()
    }, [])

    useEffect(() => {
        const loadState = async () => {
            if (city?.id_state) {
                try {
                    const response = await api.get(`/where/states/${city.id_state}`)
                    setState(response.data)
                } catch (error) {
                    console.error("Erro ao buscar estado:", error)
                }
            }
        }

        loadState()
    }, [city])

    return (
        <>
            <NavBar />
            <div className="section profile">
                <div className="info_user">
                    <h1>Bem vindo {user?.name || "Consumidor"}</h1>
                    <button id='navigate' onClick={handleLogout}>
                    Sair
                    </button>
                </div>
                <hr/>
                <div className="data_user">
                    <div className="label_input">
                        <label>
                            Nome do Usuário
                            <input type="text" value={user?.name || "NULL"} disabled />
                        </label>
                    </div>
                    <div className="label_input">
                        <label>
                            Email
                            <input type="text" value={user?.email || "NULL"} disabled />
                        </label>
                    </div>
                    <div className="label_input">
                        <label>
                            Telefone
                            <IMaskInput mask="(00) 00000-0000" value={user?.phone_number || "NULL"} required placeholder="(00) 00000-0000" disabled />
                        </label>
                    </div>
                    <div className="label_input">
                        <label>
                            Cidade
                            <input type="text" value={city?.name || "NULL"} disabled />
                        </label>
                    </div>
                    <div className="label_input">
                        <label>
                            Estado
                            <input type="text" value={state?.name || "NULL"} disabled />
                        </label>
                    </div>
                </div>
            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserMy;
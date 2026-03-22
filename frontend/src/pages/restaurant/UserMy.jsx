import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api";
import NavBar from "../../components/nav"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"

import '../../styles/pages/profile.css'
import '../../styles/pages/section.css'

function UserMy() {

    const [city, setCity] = useState([])
    const [state, setState] = useState([])

    const menuItems = [
        {
            name: "Mesas",
            link: "/restaurante/mesas",
            type: "",
            img: icon_mesa
        },
        {
            name: "Rerservas",
            link: "/restaurante/reservas",
            type: "",
            img: icon_user
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
                    <h1>Bem vindo {user?.name || "Restaurante"}</h1>
                    <button id='navigate' onClick={handleLogout}>
                    Sair
                    </button>
                </div>
                <hr/>
                <div className="info_user">
                    <div className="info_img">
                        <icon_mesa className='img-user' />
                    </div>
                    <div className="label_input">
                        <label>
                            Nome do Restaurante
                            <input type="text" value="NULL" disabled />
                        </label>
                    </div>
                    <div className="label_input">
                        <label>
                            Descrição
                            <textarea type="text" value="NULL" disabled />
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
                    <button id='navigate' onClick={handleLogout}>
                        Editar
                    </button>
                </div>

            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserMy;
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import NavBar from "../../components/nav"
import Card from "../../components/card/cardRestaurant"
import Footer from "../../components/footer/footer_Auth"

import icon_user from "../../assets/svg/user.svg?react"
import icon_mesa from "../../assets/svg/mesa.svg?react"
import icon_reserva from "../../assets/svg/reserva.svg?react"

import '../../styles/pages/filter.css';
import '../../styles/pages/section.css';

function UserFilter() {
    
    const [restaurant, setRestaurant] = useState([])

    const menuItems = [
        {
            name: "Buscar",
            link: "/client/search",
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

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        navigate("/")
    }
    
    useEffect(() => {
        const loadRestaurant = async () => {
            const response = await api.get(`/listar`)
            setRestaurant(response.data.restaurant)
        }

        loadRestaurant()
    }, [])

    return (
        <>
            <NavBar />
            <div className="section filter">
                <div className="filter">
                    <button id='navigate' onClick={handleLogout}>
                    Filtrar
                    </button>
                    <hr/>
                </div>
                <div>
                    {restaurant.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5em", marginTop: "6.5em" }}>
                            {restaurant.map((item) => (
                                <Card array={item} />
                            ))}
                        </div>
                    ) : (
                        <p>Carregando restaurante...</p>
                    )}
                </div>
            </div>
            <Footer list={menuItems} />
        </>
    );
}

export default UserFilter;